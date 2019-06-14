import { IsString, IsInt } from 'class-validator';

import { GameType } from "@shared/enums";

export class CreateLobbyInputDto {
    @IsString()
    name:String;
    @IsInt()
    size:number;
    type: GameType;
}

export class CreateLobbyDto extends CreateLobbyInputDto{
    @IsInt()
    owner:number;
}
