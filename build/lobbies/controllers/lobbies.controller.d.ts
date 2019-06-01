import { CreateLobbyService, GetLobbiesService, LobbyMembershipService } from '../services/';
import { CreateLobbyDto } from '../dto/create-lobby';
export declare class LobbiesController {
    private createLobby;
    private findLobbies;
    private lobbyMembership;
    constructor(createLobby: CreateLobbyService, findLobbies: GetLobbiesService, lobbyMembership: LobbyMembershipService);
    create(input: CreateLobbyDto): Promise<import("../interfaces/lobby.interface").ILobby>;
    getLobbies(): Promise<import("../dto/get-lobbies").GetLobbiesOutput>;
    getOwnLobbies(payload: any): Promise<import("../dto/get-lobbies").GetLobbiesOutput>;
    getLobby(id: number): Promise<import("../interfaces/lobby.interface").ILobby>;
    joinLobby(lobbyId: number, payload: any): Promise<boolean>;
    leaveLobby(lobbyId: number, payload: any): Promise<boolean>;
    selectArmy(lobbyId: number, payload: any, body: any): Promise<boolean>;
}
