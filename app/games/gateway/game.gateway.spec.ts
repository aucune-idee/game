import { Test, TestingModule } from '@nestjs/testing';
import { GameGateway } from './game.gateway';

import { GetGamesService } from '../services/get-games/get-games.service';

jest.mock('../services/get-games/get-games.service')


describe('GameGateway', () => {
  let gateway: GameGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetGamesService, GameGateway],
    }).compile();

    gateway = module.get<GameGateway>(GameGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
