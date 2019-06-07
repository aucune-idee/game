import { Test, TestingModule } from '@nestjs/testing';
import { GetGamesService } from './get-games.service';

describe('GetGamesService', () => {
  let service: GetGamesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetGamesService],
    }).compile();

    service = module.get<GetGamesService>(GetGamesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
