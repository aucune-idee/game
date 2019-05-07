import { createLobby }  from "../../app/controllers/lobby.controller";
import { Lobby, LobbySchema } from '../../app/models/lobby.model';
import {BaseError, ErrorCodes} from '../../app/exceptions/base-error';


jest.mock('../../app/models/lobby.model');
LobbySchema.plugin = jest.fn().mockImplementation((plugin, doc)=>{
    return null;
});

describe("Lobby controller", () => {     
    describe("Create lobby", () => {
        it('Empty name to throw validation error', async () => {
            await expect(createLobby({name:""})).rejects.toEqual(
                new BaseError("Username is invalid", ErrorCodes.LOBBY_INVALID_NAME)
            );
        });
    });
})