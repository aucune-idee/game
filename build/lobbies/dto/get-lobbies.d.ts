import { ILobby } from '../interfaces/lobby.interface';
export declare class GetLobbiesInput {
    start?: number;
    size?: number;
    member?: number;
}
export declare class GetLobbiesOutput {
    lobbies: Array<ILobby>;
    hasNext: boolean;
}
