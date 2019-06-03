import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { GetLobbiesService } from './get-lobbies.service';
import { LobbyCollectionName } from '../../schemas/lobby.schema';
let lobbyModel = {};

describe('GetLobbiesService', () => {
  let service: GetLobbiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetLobbiesService,
      {
        provide:getModelToken(LobbyCollectionName),
        useValue:lobbyModel
      }],
    }).compile();

    service = module.get<GetLobbiesService>(GetLobbiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
