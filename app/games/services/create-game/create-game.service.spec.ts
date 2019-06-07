import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { CreateGameService } from './create-game.service';

import { GameCollectionName } from '../../schemas/game.schema';
import { LobbyCollectionName } from '../../../lobbies/schemas/lobby.schema';


let gameModel = {};
let lobbyModel = {};


describe('CreateGameService', () => {
  let service: CreateGameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateGameService,
      {
        provide:getModelToken(GameCollectionName),
        useValue:gameModel
      },
      {
        provide:getModelToken(LobbyCollectionName),
        useValue:lobbyModel
      }],
    }).compile();

    service = module.get<CreateGameService>(CreateGameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
