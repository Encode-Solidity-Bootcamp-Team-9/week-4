import { Injectable } from '@angular/core';
import { ContractReceipt, ContractTransaction, ethers } from 'ethers';
import { MintInfoDto, MintRequestDto } from '../models/mint';
import { TokenInfoDto } from '../models/token-info';
import { ApiService } from './api.service';
import { mytoken } from './contracts/MyToken';
import { Web3Service } from './web3.service';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  public address: string = '';

  constructor(private api: ApiService, private web3: Web3Service) {}

  private async getTokenAddress(): Promise<void> {
    if (this.address) return;
    const data: TokenInfoDto = await this.api.get<TokenInfoDto>('token/info');
    this.address = data.address;
  }

  public async delegate(address: string): Promise<void> {
    // get address
    await this.getTokenAddress();
    // get contract
    const contract = new ethers.Contract(
      this.address,
      mytoken.abi,
      this.web3.provider
    );

    const tx: ContractTransaction = await contract
      .connect(this.web3.provider!.getSigner())
      ['delegate'](address);

    const receipt: ContractReceipt = await tx.wait();
  }

  public async mint(amount: number) {
    const data: MintRequestDto = {
      address: this.web3.address!,
      amount: ethers.utils.parseEther(amount.toString()).toString(),
    };
    console.log(data);
    const answer = await this.api.post<MintInfoDto>('token/mint', data);
  }
}
