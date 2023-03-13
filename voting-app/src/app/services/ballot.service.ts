import { Injectable } from '@angular/core';
import { VoteDto, Voter, VoterDto } from '../models/voter';
import { ApiService } from './api.service';
import { ContractReceipt, ContractTransaction, ethers } from 'ethers';
import { Proposal, ProposalDto } from '../models/proposal';
import { BallotInfoDto } from '../models/ballot-info';
import { ballot } from './contracts/Ballot';
import { Web3Service } from './web3.service';

@Injectable({
  providedIn: 'root',
})
export class BallotService {
  private address: string | undefined;

  constructor(private api: ApiService, private web3: Web3Service) {}

  public async getVotes(): Promise<Voter[]> {
    const voters = await this.api.get<VoterDto[]>('ballot/voters');
    const result: Voter[] = [];
    voters.forEach((voter) => {
      result.push({
        address: voter.address,
        proposal: voter.proposal,
        votingPowerSpent: ethers.utils.parseUnits(
          voter.votingPowerSpent,
          'wei'
        ),
      });
    });
    return result;
  }

  public async getProposals(): Promise<Proposal[]> {
    const proposals = await this.api.get<ProposalDto[]>('ballot/proposals');
    const result: Proposal[] = [];
    proposals.forEach((proposal) => {
      result.push({
        id: proposal.id,
        name: proposal.name,
        winner: proposal.winner,
        voteCount: ethers.utils.parseUnits(proposal.voteCount, 'wei'),
        percentage: proposal.percentage,
      });
    });
    return result;
  }

  public async getInfos(): Promise<BallotInfoDto> {
    const infos = await this.api.get<BallotInfoDto>('ballot/info');
    this.address = infos.address;
    return infos;
  }

  public async reset() {
    await this.api.post<BallotInfoDto>('ballot/reset', {});
  }

  public async vote(amount: number, proposalId: number) {
    if (!this.address) {
      await this.getInfos();
    }
    const address = this.address!;

    // get contract
    const contract = new ethers.Contract(
      address,
      ballot.abi,
      this.web3.provider
    );

    const amountBN = ethers.utils.parseEther(amount.toString()).toString();
    const tx: ContractTransaction = await contract
      .connect(this.web3.provider!.getSigner())
      ['vote'](proposalId, amountBN);

    const receipt: ContractReceipt = await tx.wait();

    // inform back-end
    const registerData: VoteDto = {
      address: this.web3.address!,
      proposalId: proposalId,
      votingPower: ethers.utils.parseEther(amount.toString()).toString(),
    };
    await this.api.post<any>('ballot/register-vote', registerData);
  }
}
