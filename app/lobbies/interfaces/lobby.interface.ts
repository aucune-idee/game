import { IGameLobby } from '../../shared/interfaces/game-lobby';

export interface ILobby extends IGameLobby {
  searchName:String;
  size:number;
}