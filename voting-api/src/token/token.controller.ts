import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TokenInfoDto } from 'src/token/dtos/TokenInfoDto';
import { MintInfoDto } from './dtos/MintInfoDto';
import { MintRequestDto } from './dtos/MintRequestDto';
import { TokenService } from './token.service';

@Controller('token')
@ApiTags('token')
export class TokenController {
    constructor(private readonly tokenservice: TokenService) {}

    @Get('info')
    async getTokenInfo(): Promise<TokenInfoDto> {
      return await this.tokenservice.getInfo();
    }

    @Post('mint')
    async mint(@Body() body : MintRequestDto): Promise<MintInfoDto> {
      return await this.tokenservice.mint(body);
    }

    @Get('balance')
    async getBalance(@Query('address') address : string): Promise<string> {
      return await this.tokenservice.getBalance(address);
    };

    @Get('left-to-mint')
    async getLeftToMint(@Query('address') address : string): Promise<string> {
      return await this.tokenservice.getLeftToMint(address);
    }

}
