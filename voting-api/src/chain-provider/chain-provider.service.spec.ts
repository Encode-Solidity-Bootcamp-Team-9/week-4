import { Test, TestingModule } from '@nestjs/testing';
import { ChainProviderService } from './chain-provider.service';

describe('ChainProviderService', () => {
  let service: ChainProviderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChainProviderService],
    }).compile();

    service = module.get<ChainProviderService>(ChainProviderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
