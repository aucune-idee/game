import { ILobby } from '../interfaces/lobby.interface';

export class GetLobbiesInput{
    start?:number;
    size?:number;
    member?:number;
}

export class GetLobbiesOutput{
    lobbies:Array<ILobby>;
    hasNext:boolean;
}