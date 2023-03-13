import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiTags } from '@nestjs/swagger';
import { BallotService } from './ballot.service';
import { BallotInfoDto } from './dtos/BallotInfoDto';
import { ProposalDto } from './dtos/ProposalDto';
import { UserDto } from './dtos/UserDto';
import { VoteDto } from './dtos/VoteDto';
import { VoterDto } from './dtos/VoterDto';

@Controller('ballot')
@ApiTags('ballot')
export class BallotController {

    constructor(private readonly ballotService: BallotService) {}

    @Get('info')
    async getBallotInfo(): Promise<BallotInfoDto> {
      return await this.ballotService.getInfo();
    }

    @Get('voters')
    getVoters(): VoterDto[] {
      return this.ballotService.getVoters();
    }

    @Get('proposals')
    async getProposals(): Promise<ProposalDto[]> {
      return await this.ballotService.getProposals();
    }
    
    @Get('user/:address')
    getUser(@Param('address') address : string): Promise<UserDto> {
      return this.ballotService.getUser(address);
    }

    @Post('reset')
    async reset(): Promise<BallotInfoDto> {
      return await this.ballotService.reset();
    }

    @Post('register-vote')
    async registerVote(@Body() body : VoteDto): Promise<VoterDto[]> {
      return await this.ballotService.registerVote(body);
    }

}
