import { GameType } from "@shared/enums";
export declare class CreateLobbyDto {
    readonly name: String;
    readonly owner: number;
    readonly type: GameType;
}
