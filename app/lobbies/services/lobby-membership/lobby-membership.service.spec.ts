import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { LobbyMembershipService } from './lobby-membership.service';
import { LobbyCollectionName } from '../../schemas/lobby.schema';


let lobbyModel = {};

describe('LobbyMembershipService', () => {
  let service: LobbyMembershipService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LobbyMembershipService,
      {
        provide:getModelToken(LobbyCollectionName),
        useValue:lobbyModel
      }],
    }).compile();

    service = module.get<LobbyMembershipService>(LobbyMembershipService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
