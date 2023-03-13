import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TokenInfoDto } from 'src/token/dtos/TokenInfoDto';
import { MintInfoDto } from './dtos/MintInfoDto';
import { MintRequestDto } from './dtos/MintRequestDto';
import * as tokenJson from '../assets/MyToken.json';
import { ContractReceipt, ContractTransaction, ethers } from 'ethers';
import { ChainProviderService } from 'src/chain-provider/chain-provider.service';
import Utils from '../utils'


@Injectable()
export class TokenService {

    private tokenAddress: string;
    private contract: ethers.Contract;

    constructor(private readonly configService: ConfigService, private readonly chainProviderService: ChainProviderService) {
        this.tokenAddress = this.configService.getOrThrow<string>('TOKEN_CONTRACT_ADDRESS');
        this.contract = new ethers.Contract(this.tokenAddress, tokenJson.abi, this.chainProviderService.getProvider());
    }

    async getInfo(): Promise<TokenInfoDto> {
        return {
            address: this.tokenAddress,
            tokenName: await this.contract.symbol()
        };
    }

    async mint(mintRequest: MintRequestDto): Promise<MintInfoDto> {
        try {
            const tx: ContractTransaction = await this.contract
                .connect(this.chainProviderService.getSigner())
                .mint(mintRequest.address, mintRequest.amount);

            const receipt: ContractReceipt = await tx.wait();

            return {
                tx: receipt.transactionHash,
                amount: mintRequest.amount
            }
        } catch (e) {
            Utils.parseErrorAndThrow(e);
        }

    }

    async getBalance(address: string): Promise<string> {
        const balance = await this.contract.balanceOf(address);
        return balance.toString();
    }

    async getLeftToMint(address: string): Promise<string> {
        const balance = await this.contract.minters(address);
        const max = await this.contract.MAX_MINT_AMOUNT();
        const leftToMint = max - balance;
        return leftToMint.toString();
    }

}
