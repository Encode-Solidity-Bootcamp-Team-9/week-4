import { BigNumber } from 'ethers';

export interface User {
  votingPower: BigNumber;
  votingPowerSpent: BigNumber;
  tokensMinted: BigNumber;
  tokensToMint: BigNumber;
}

export interface UserDto {
  votingPower: string;
  votingPowerSpent: string;
  tokensMinted: string;
  tokensToMint: string;
}
