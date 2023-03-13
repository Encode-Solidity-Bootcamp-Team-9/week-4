import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ethers, Signer } from 'ethers';


@Injectable()
export class ChainProviderService {
    private provider: ethers.providers.AlchemyProvider
    private signer: Signer;

    constructor(private readonly configService: ConfigService) {
        this.provider = new ethers.providers.AlchemyProvider(
            this.configService.getOrThrow<string>('NETWORK'),
            this.configService.getOrThrow<string>('ALCHEMY_API_KEY')
        );

        const wallet = new ethers.Wallet(this.configService.getOrThrow<string>('WALLET_PRIVATE_KEY'));
        this.signer = wallet.connect(this.provider);
    }

    getProvider(): ethers.providers.Provider {
        return this.provider;
    }

    getSigner(): Signer {
       return this.signer;
    }
}
