import { Injectable } from '@angular/core';
import { User, UserDto } from '../models/user';
import { ApiService } from './api.service';
import { ethers, providers } from 'ethers';

declare global {
  interface Window {
    ethereum: any;
  }
}

@Injectable({
  providedIn: 'root',
})
export class Web3Service {
  constructor(private api: ApiService) {
    if (typeof window.ethereum !== 'undefined') {
      this.provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
    }
  }

  public address: string | undefined;

  private signer: providers.JsonRpcSigner | undefined;

  private network: string = 'goerli';
  private networkId: number = 5;
  public provider: providers.Web3Provider | undefined;

  public async connect(): Promise<void> {
    if (!this.provider) return;
    await this.provider.send('eth_requestAccounts', []);
    this.signer = this.provider.getSigner();
    this.address = await this.signer.getAddress();
    this.switchToGoerli();
  }

  public async switchToGoerli() {
    if (!this.provider) return;
    const network = await this.provider.getNetwork();
    if (network.chainId !== this.networkId) {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x5' }],
      });
    }
  }

  public async getUserInfo(): Promise<User> {
    const userDto: UserDto = await this.api.get<UserDto>(
      `ballot/user/${this.address}`
    );
    return {
      votingPower: ethers.utils.parseUnits(userDto.votingPower, 'wei'),
      votingPowerSpent: ethers.utils.parseUnits(
        userDto.votingPowerSpent,
        'wei'
      ),
      tokensMinted: ethers.utils.parseUnits(userDto.tokensMinted, 'wei'),
      tokensToMint: ethers.utils.parseUnits(userDto.tokensToMint, 'wei'),
    };
  }
}
