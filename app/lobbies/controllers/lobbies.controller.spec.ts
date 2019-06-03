import { Test, TestingModule } from '@nestjs/testing';
import { LobbiesController } from './lobbies.controller';

import { CreateLobbyService, GetLobbiesService, LobbyMembershipService } from '../services/';

jest.mock('../services/')

describe('Lobbies Controller', () => {
  let controller: LobbiesController;

  beforeEach(async () => {
    
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LobbiesController],
      providers:[
        {provide:CreateLobbyService, useValue: new CreateLobbyService(null)},
        {provide:GetLobbiesService, useValue: new GetLobbiesService(null)},
        {provide:LobbyMembershipService, useValue: new LobbyMembershipService(null)},
      ]
    }).compile();

    controller = module.get<LobbiesController>(LobbiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
