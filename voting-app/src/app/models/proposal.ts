import { BigNumber } from 'ethers';

export interface Proposal {
  id: number;
  name: string;
  voteCount: BigNumber;
  winner: boolean;
  percentage: number;
}

export interface ProposalDto {
  id: number;
  name: string;
  voteCount: string;
  winner: boolean;
  percentage: number;
}
