import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { GetGamesService } from './get-games.service';
import { GameCollectionName } from '../../schemas/game.schema';

let gameModel = {};

describe('GetGamesService', () => {
  let service: GetGamesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetGamesService,
      {
        provide:getModelToken(GameCollectionName),
        useValue:gameModel
      }],
    }).compile();

    service = module.get<GetGamesService>(GetGamesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
