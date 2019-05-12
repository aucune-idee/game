import { createLobby }  from "../../app/controllers/lobby.controller";
import { Lobby, LobbySchema } from '../../app/models/lobby.model';
import { BaseError, ErrorCodes } from '../../app/exceptions/base-error';
import { GameType } from "../../app/enums";


jest.mock('../../app/models/lobby.model');
LobbySchema.plugin = jest.fn().mockImplementation((plugin, doc)=>{
    return null;
});

describe("Lobby controller", () => {     
    describe("Create lobby", () => {
        it('Empty name to throw validation error', async () => {
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
        });
    });
})