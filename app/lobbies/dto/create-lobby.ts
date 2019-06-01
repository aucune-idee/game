import { IsString, IsInt } from 'class-validator';

import { GameType } from "@shared/enums";

export class CreateLobbyDto {
    @IsString()
    name:String;
    @IsInt()
    owner:number;
    type: GameType;
}
