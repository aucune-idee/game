import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { CreateLobbyService } from './create-lobby.service';
import { LobbyCollectionName } from '../../schemas/lobby.schema';


let lobbyModel = {};

describe('CreateLobbyService', () => {
  let service: CreateLobbyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateLobbyService,
      {
        provide:getModelToken(LobbyCollectionName),
        useValue:lobbyModel
      }],
    }).compile();

    service = module.get<CreateLobbyService>(CreateLobbyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
