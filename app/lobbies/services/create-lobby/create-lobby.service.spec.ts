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

  /*it('Empty name to throw validation error', async () => {
      await expect(createLobby({})).rejects.toEqual(
          new BaseError("Name is invalid", ErrorCodes.LOBBY_INVALID_NAME)
      );
      await expect(createLobby({name:""})).rejects.toEqual(
          new BaseError("Name is invalid", ErrorCodes.LOBBY_INVALID_NAME)
      );
  });
  it('Empty type to throw validation error', async () => {
      await expect(createLobby({name:"Whatever"})).rejects.toEqual(
          new BaseError("Type is invalid", ErrorCodes.LOBBY_INVALID_TYPE)
      );
  });
  it('Empty owner to throw validation error', async () => {
      await expect(createLobby({name:"whatever", type: GameType.CLASSIC})).rejects.toEqual(
          new BaseError("Owner is invalid", ErrorCodes.LOBBY_INVALID_OWNER)
      );
  });
  it('All set should work', async () => {
      let input = {
          name: "whatever",
          type: GameType.CLASSIC,
          owner: 0
      };
      Lobby.create = jest.fn().mockImplementation((param)=>{
          return Promise.resolve(input);
      });
      await expect(createLobby(input)).resolves.toEqual(input);
  });*/
});
