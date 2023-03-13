import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { BallotController } from './ballot/ballot.controller';
import { TokenController } from './token/token.controller';
import { TokenService } from './token/token.service';
import { BallotService } from './ballot/ballot.service';
import { ChainProviderService } from './chain-provider/chain-provider.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      //make sure that all the required env variables are set
      validationSchema: Joi.object({
        TOKEN_CONTRACT_ADDRESS: Joi.string().required(),
        BALLOT_CONTRACT_ADDRESS: Joi.string().required(),
        WALLET_ADDRESS: Joi.string().required(),
        WALLET_PRIVATE_KEY: Joi.string().required(),
        NETWORK: Joi.string().required(),
        ALCHEMY_API_KEY: Joi.string().required(),
      }),
    }),
    // expose static files (front-end)
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'voting-app'),
      exclude: ['/api*'],
    }),
  ],
  controllers: [BallotController, TokenController],
  providers: [TokenService, BallotService, ChainProviderService],
})
export class AppModule {}
