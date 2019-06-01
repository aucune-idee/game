import { Armies } from '../../shared/enums';
export declare class JoinLobbyInput {
    userId: number;
    lobbyId: number;
}
export declare class LeaveLobbyInput {
    userId: number;
    lobbyId: number;
}
export interface SelectArmyInput {
    userId: number;
    lobbyId: number;
    army: Armies;
}
