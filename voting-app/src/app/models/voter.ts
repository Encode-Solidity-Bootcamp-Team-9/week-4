import { BigNumber } from 'ethers';
import { ProposalDto } from './proposal';
import { UserDto } from './user';

export interface Voter {
  address: string;
  proposal: string;
  votingPowerSpent: BigNumber;
}

export interface Vote {
  address: string;
  proposalId: number;
  votingPower: BigNumber;
}

export interface VoteDto {
  address: string;
  proposalId: number;
  votingPower: string; // in WEI
}

export interface VoterDto {
  address: string;
  proposal: string;
  votingPowerSpent: string;
}

export interface VoteDto {
  address: string;
  proposalId: number;
  votingPower: string; // in WEI
}
