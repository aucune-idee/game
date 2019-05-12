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
            await expect(createLobby({name:"", owner: 0})).rejects.toEqual(
                new BaseError("Name is invalid", ErrorCodes.LOBBY_INVALID_NAME)
            );
        });
        it('Empty owner to throw validation error', async () => {
            Lobby.create = jest.fn().mockImplementation((param)=>{
                return Promise.resolve({
                    name: "whatever",
                    owner: 0
                });
            });
            await expect(createLobby({name:"whatever", owner: 0})).resolves.toEqual({
                name: "whatever",
                owner: 0
            });
        });
    });
})