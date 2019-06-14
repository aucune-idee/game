import { Lobby } from '../schemas/lobby.schema';

export class GetLobbiesInput{
    start?:number;
    size?:number;
    member?:number;
}

export class GetLobbiesOutput{
    lobbies:Array<Lobby>;
    hasNext:boolean;
}