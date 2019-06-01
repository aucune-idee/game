import { Request } from 'express';
import { CreateLobbyService, GetLobbiesService, LobbyMembershipService } from '../services/';
import { CreateLobbyDto } from '../dto/create-lobby';
export declare class LobbiesController {
    private createLobby;
    private findLobbies;
    private lobbyMembership;
    constructor(createLobby: CreateLobbyService, findLobbies: GetLobbiesService, lobbyMembership: LobbyMembershipService);
    create(input: CreateLobbyDto): Promise<any>;
    getLobbies(): Promise<import("../dto/get-lobbies").GetLobbiesOutput>;
    getOwnLobbies(request: Request): Promise<import("../dto/get-lobbies").GetLobbiesOutput>;
    getLobby(id: number): Promise<any>;
    joinLobby(lobbyId: number, request: Request): Promise<boolean>;
    leaveLobby(lobbyId: number, request: Request): Promise<boolean>;
    selectArmy(lobbyId: number, request: Request, body: {
        army: number;
    }): Promise<boolean>;
}
