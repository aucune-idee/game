import { IsString, IsInt } from 'class-validator';

import { GameType } from "@shared/enums";

export class CreateLobbyDto {
    @IsString()
    readonly name:String;
    @IsInt()
    readonly owner:number;
    readonly type: GameType;
}
