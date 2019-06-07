import { Document } from 'mongoose';
import { IGameLobby } from '../../shared/interfaces/game-lobby';

export interface ILobby extends IGameLobby {
  searchName:String;
  size:number;
}

export interface ILobbyDocument
  extends Document,  ILobby {
    _id:number;
}
