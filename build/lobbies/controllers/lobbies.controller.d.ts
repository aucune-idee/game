import { Request } from 'express';
import { CreateLobbyService, GetLobbiesService, LobbyMembershipService } from '../services/';
import { CreateLobbyDto } from '../dto/create-lobby';
export declare class LobbiesController {
    private createLobby;
    private getLobbies;
    private lobbyMembership;
    constructor(createLobby: CreateLobbyService, getLobbies: GetLobbiesService, lobbyMembership: LobbyMembershipService);
    create(input: CreateLobbyDto): Promise<any>;
    getLobbies(): Promise<import("../dto/get-lobbies").GetLobbiesOutput>;
    getOwnLobbies(request: Request): Promise<import("../dto/get-lobbies").GetLobbiesOutput>;
    getLobby(id: number): Promise<any>;
}
