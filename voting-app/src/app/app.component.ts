import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ethers } from 'ethers';
import { Subscription } from 'rxjs';
import { BallotInfoDto } from './models/ballot-info';
import { Proposal } from './models/proposal';
import { StepState } from './models/step-state';

import { User } from './models/user';
import { Voter } from './models/voter';
import { BallotService } from './services/ballot.service';
import { NotificationService } from './services/notification.service';
import { TokenService } from './services/token.service';
import { Web3Service } from './services/web3.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];

  public account: string | undefined;

  public mintAmount: number = 0;
  public votingPowerToSpend: number = 0;
  public delegateAddress: string = '';
  public voteAmount: number = 0;
  public proposalId: number | undefined;
  public proposalName: string | undefined;

  public user: User = {
    votingPower: ethers.utils.parseEther('0'),
    votingPowerSpent: ethers.utils.parseEther('0'),
    tokensMinted: ethers.utils.parseEther('0'),
    tokensToMint: ethers.utils.parseEther('0'),
  };

  public proposals: Proposal[] = [];

  public ballotInfo: BallotInfoDto = {
    address: '',
    snapshotBlockNumber: 0,
  };

  public mintState: StepState = StepState.IN_PROGRESS;
  public minting: boolean = false;
  public minted: boolean = true;
  public delegateState: StepState = StepState.WAITING;
  public delegating: boolean = false;
  public resetState: StepState = StepState.WAITING;
  public resetting: boolean = false;
  public voteState: StepState = StepState.WAITING;
  public voting: boolean = false;

  public displayedColumns: string[] = [
    'address',
    'proposal',
    'votingPowerSpent',
  ];
  public voters: Voter[] = [];
  public totalVotingPowerSpent: ethers.BigNumber = ethers.utils.parseEther('0');

  constructor(
    private notificationService: NotificationService,
    private ballotService: BallotService,
    public web3: Web3Service,
    private tokenService: TokenService,
    private snackBarCtrl: MatSnackBar
  ) {}

  ngOnInit() {
    // show notifications
    const sub = this.notificationService.notify$.subscribe((data) => {
      this.snackBarCtrl.open(data.message, 'Ok', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    });
    this.subs.push(sub);

    this.updateDisplayData().then(() => console.log('loaded'));
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }

  public async updateDisplayData() {
    // get Ballot info
    this.ballotInfo = await this.ballotService.getInfos();

    // getVotes
    const voters = await this.ballotService.getVotes();
    this.voters = voters;
    this.totalVotingPowerSpent = ethers.utils.parseEther('0');
    this.voters.forEach((vote) => {
      this.totalVotingPowerSpent = this.totalVotingPowerSpent.add(
        vote.votingPowerSpent
      );
    });

    // get Proposals
    this.proposals = await this.ballotService.getProposals();

    if (this.account) {
      this.user = await this.web3.getUserInfo();
    }
    this.updateState();
  }

  public async connect() {
    await this.web3.connect();
    this.account = this.web3.address;
    this.delegateAddress = this.account!;

    this.web3.getUserInfo().then((user) => {
      this.user = user;
      this.updateState();
    });
  }

  public voteSelection(prop: Proposal) {
    if (this.proposalId === prop.id) {
      // deselect
      this.proposalId = undefined;
      this.proposalName = undefined;
    } else {
      //select
      this.proposalId = prop.id;
      this.proposalName = prop.name;
    }
  }

  public async vote() {
    if (!this.account) {
      await this.connect();
    }
    if (!this.account) return;
    if (this.voteAmount <= 0) {
      this.notificationService.notify({
        status: 'error',
        message: 'You cannot vote with 0 tokens',
      });
      return;
    }
    if (this.proposalId === undefined) {
      this.notificationService.notify({
        status: 'error',
        message: 'You did not select any option !',
      });
      return;
    }

    const amount = this.voteAmount;
    if (this.user.votingPower.lt(ethers.utils.parseEther(amount.toString()))) {
      this.notificationService.notify({
        status: 'error',
        message: 'You cannot vote with more than your available Voting Power !',
      });
      return;
    }

    this.voting = true;
    try {
      const proposal = this.proposalId;
      await this.ballotService.vote(amount, proposal);

      this.notificationService.notify({
        status: 'success',
        message: `You have successfully voted for ${this.proposalName} with ${amount} MTK !`,
      });

      await this.updateDisplayData();
    } catch (e) {
      this.updateState();
      this.voteState = StepState.ERROR;
      this.notificationService.notify({
        status: 'error',
        message: (e as Error).message,
      });
    }
    this.voting = false;
  }

  public async mint() {
    if (!this.account) {
      await this.connect();
    }
    if (!this.account) return;
    if (this.mintAmount <= 0) {
      this.notificationService.notify({
        status: 'error',
        message: 'You cannot mint 0 tokens',
      });
      return;
    }
    try {
      this.minting = true;
      const amount = this.mintAmount;
      await this.tokenService.mint(amount);
      this.notificationService.notify({
        status: 'success',
        message: `You have successfully minted ${amount} MTK !`,
      });
      this.mintAmount = 0;
      await this.updateDisplayData();
    } catch (e) {
      this.updateState();
      this.mintState = StepState.ERROR;
      this.notificationService.notify({
        status: 'error',
        message: (e as Error).message,
      });
    }
    this.minting = false;
  }

  public async reset() {
    if (!this.account) {
      await this.connect();
    }
    if (!this.account) return;
    this.resetting = true;
    try {
      await this.ballotService.reset();
      await this.updateDisplayData();
      this.notificationService.notify({
        status: 'success',
        message: `You have successfully reset to ${this.ballotInfo.snapshotBlockNumber}`,
      });
    } catch (e) {
      this.updateState();
      this.resetState = StepState.ERROR;
      this.notificationService.notify({
        status: 'error',
        message: (e as Error).message,
      });
    }
    this.resetting = false;
  }

  public async delegate() {
    if (!this.account) {
      await this.connect();
    }
    if (!this.account) return;
    if (!this.delegateAddress) {
      this.notificationService.notify({
        status: 'error',
        message: 'You cannot delegate to empty address',
      });
      return;
    }
    this.delegating = true;
    try {
      await this.tokenService.delegate(this.delegateAddress);
      this.notificationService.notify({
        status: 'success',
        message: `You have successfully delegated to ${this.delegateAddress}!`,
      });
      await this.updateDisplayData();
    } catch (e) {
      this.notificationService.notify({
        status: 'error',
        message: (e as Error).message,
      });
    }
    this.delegating = false;
  }

  private updateState() {
    this.mintState = StepState.IN_PROGRESS;
    this.delegateState = StepState.WAITING;
    this.resetState = StepState.WAITING;
    this.voteState = StepState.WAITING;
    if (this.user.tokensMinted.gt(0)) {
      this.mintState = StepState.DONE;
      this.delegateState = StepState.IN_PROGRESS;
      this.resetState = StepState.IN_PROGRESS;
      this.voteState = StepState.WAITING;
    }
    if (this.user.votingPower.gt(0)) {
      this.delegateState = StepState.DONE;
      this.resetState = StepState.DONE;
      this.voteState = StepState.IN_PROGRESS;
    }
    if (this.user.votingPowerSpent.gt(0)) {
      this.delegateState = StepState.DONE;
      this.resetState = StepState.DONE;
      this.voteState = StepState.DONE;
    }
    // Check if minted everything
    if (this.user.tokensToMint.eq(0)) {
      this.minted = true;
    } else {
      this.minted = false;
    }
  }
}
