import { Test, TestingModule } from '@nestjs/testing';
import { GamesController } from './games.controller';

import { CreateGameService } from '../services/create-game/create-game.service';

jest.mock('../services/create-game/create-game.service')

describe('Games Controller', () => {
  let controller: GamesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GamesController],
      providers:[
        {provide:CreateGameService, useValue: new CreateGameService(null, null)},
      ]
    }).compile();

    controller = module.get<GamesController>(GamesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
