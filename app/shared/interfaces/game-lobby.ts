import { GameType, Armies, enum2Array } from '../enums';

export interface IGameLobby {
    _id:number,
    createdAt: Date,
    name:String;
    type: GameType;
    
    owner:number;
    members:Array<{
      _userId:number,
      army?:Armies
    }>
}
