import { IsEnum, IsInt, IsNumber } from 'class-validator';

import { Lobby } from '../schemas/lobby.schema';
import { GameType } from "../../shared/enums/game-type";


export class GetLobbiesInput{
    @IsNumber()
    start?:number;
    
    @IsNumber()
    size?:number;

    @IsNumber()
    member?:number;

    @IsEnum(GameType)
    type?:GameType;

    @IsInt()
    sizeMin?:number;

    @IsInt()
    sizeMax?:number;
    
    @IsInt()
    owner?:number
}

export class GetLobbiesOutput{
    lobbies:Array<Lobby>;
    hasNext:boolean;
}