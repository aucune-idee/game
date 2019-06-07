import { Document } from 'mongoose';
import { IGameLobby } from '../../shared/interfaces/game-lobby';

export interface IGame extends IGameLobby {
  searchName?:String;
}


export interface IGameDocument
    extends Document, IGame {
    _id:number;
}