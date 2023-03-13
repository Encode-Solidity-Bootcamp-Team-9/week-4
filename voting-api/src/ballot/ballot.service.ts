import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BigNumber, ContractTransaction, ethers } from 'ethers';
import { BallotInfoDto } from './dtos/BallotInfoDto';
import { ProposalDto } from './dtos/ProposalDto';
import { UserDto } from './dtos/UserDto';
import { VoterDto } from './dtos/VoterDto';
import * as ballotJson from '../assets/Ballot.json';
import { ChainProviderService } from 'src/chain-provider/chain-provider.service';
import Utils from 'src/utils';
import { OnApplicationBootstrap } from '@nestjs/common';
import { VoteDto } from './dtos/VoteDto';
import { TokenService } from 'src/token/token.service';

@Injectable()
export class BallotService implements OnApplicationBootstrap {
  private ballotAddress;
  private contract: ethers.Contract;
  private static voters: VoterDto[] = [];

  constructor(
    private readonly configService: ConfigService,
    private readonly chainProviderService: ChainProviderService,
    private readonly tokenService: TokenService,
  ) {
    this.ballotAddress = this.configService.getOrThrow<string>(
      'BALLOT_CONTRACT_ADDRESS',
    );
    this.contract = new ethers.Contract(
      this.ballotAddress,
      ballotJson.abi,
      this.chainProviderService.getProvider(),
    );

    this.initializeEventListeners();
  }

  async onApplicationBootstrap(): Promise<void> {
    console.log('Getting voters...');
    BallotService.voters = await this.getVotesFromContract();
    console.log('Finished getting voters.');
  }

  async getInfo(): Promise<BallotInfoDto> {
    const ballotInfo = new BallotInfoDto();
    const targetBlockNumberBN: BigNumber =
      await this.contract.targetBlockNumber();

    ballotInfo.address = this.ballotAddress;
    ballotInfo.snapshotBlockNumber = targetBlockNumberBN.toNumber();
    return ballotInfo;
  }

  async getUser(address: string): Promise<UserDto> {
    const user = new UserDto();
    user.votingPower = (await this.contract.votingPower(address)).toString();
    user.votingPowerSpent = (
      await this.contract.votingPowerSpent(address)
    ).toString();
    user.tokensMinted = await this.tokenService.getBalance(address);
    user.tokensToMint = await this.tokenService.getLeftToMint(address);
    return user;
  }

  getVoters(): VoterDto[] {
    return BallotService.voters;
  }

  async getProposals(): Promise<ProposalDto[]> {
    const proposals: ProposalDto[] = [];

    const length = await this.contract.getProposalsLength();
    const totalVotes = await this.getTotalVotes(length.toNumber());
    const winnerName = await this.contract.winnerName();

    for (let index = 0; index < length; index++) {
      const proposal = new ProposalDto();
      const prop = await this.contract.proposals(index);

      let winner = false;
      if (prop.name == winnerName) {
        winner = true;
      }

      const percentage = totalVotes.eq(0) ? 0 : prop.voteCount.mul(100).div(totalVotes).toNumber();

      // Set ProposalDto values
      proposal.id = index;
      proposal.name = ethers.utils.parseBytes32String(prop.name);
      proposal.voteCount = prop.voteCount.toString();
      proposal.winner = winner;
      proposal.percentage = percentage;

      proposals.push(proposal);
    }

    return proposals;
  }

  async getTotalVotes(length: number) {
    let totalVotes = BigNumber.from('0');
    for (let index = 0; index < length; index++) {
      const prop = await this.contract.proposals(index);
      totalVotes = totalVotes.add(prop.voteCount);
    }
    return totalVotes;
  }

  async reset(): Promise<BallotInfoDto> {
    try {
      const block: ethers.providers.Block =
        await this.contract.provider.getBlock('latest');

      const tx: ContractTransaction = await this.contract
        .connect(this.chainProviderService.getSigner())
        .reset(block.number);

      return this.getInfo();
    } catch (e) {
      Utils.parseErrorAndThrow(e);
    }
  }

  async registerVote(vote: VoteDto): Promise<VoterDto[]> {
    const proposals = await this.getProposals();
    BallotService.voters.unshift({
      address: vote.address,
      votingPowerSpent: vote.votingPower,
      proposal: proposals[vote.proposalId].name,
    });
    return this.getVoters();
  }

  async initializeEventListeners() {
    const proposals = await this.getProposals();

    this.contract.on('VoteEvent', function (voter, proposal, amount) {
      const vote = {
        address: voter,
        votingPowerSpent: amount.toString(),
        proposal: proposals[proposal].name,
      };

      //We are using register vote instead of events
      // BallotService.voters.unshift(
      //     vote
      // )

      console.log('New vote received', vote);
    });

    this.contract.on('ForceResetEvent', async function () {
      console.log('Force reset event received. Resetting votes...');
      BallotService.voters = [];
    });
  }

  private async getVotesFromContract(): Promise<VoterDto[]> {
    let i = 0;
    let voter: {
      voter: string;
      proposalIndex: BigNumber;
      votingPower: BigNumber;
    };

    const proposals = await this.getProposals();
    let votes = [];

    try {
      while (true) {
        voter = await this.contract.votes(i);
        i++;

        votes.unshift({
          address: voter.voter,
          votingPowerSpent: voter.votingPower.toString(),
          proposal: proposals[voter.proposalIndex.toNumber()].name,
        });
      }
    } catch {}

    return votes;
  }
}
