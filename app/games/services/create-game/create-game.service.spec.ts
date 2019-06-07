import { Test, TestingModule } from '@nestjs/testing';
import { CreateGameService } from './create-game.service';

describe('CreateGameService', () => {
  let service: CreateGameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateGameService],
    }).compile();

    service = module.get<CreateGameService>(CreateGameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
