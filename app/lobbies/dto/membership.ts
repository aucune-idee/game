import { Armies } from '../../shared/enums';

export class JoinLobbyInput{
    userId:number;
    lobbyId:number
}

export class LeaveLobbyInput{
    userId:number;
    lobbyId:number
}

export interface SelectArmyInput{
    userId:number;
    lobbyId:number;
    army:Armies | string;
}