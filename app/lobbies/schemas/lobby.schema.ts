import { prop, pre, plugin } from 'typegoose';
import { IsString, IsInt } from 'class-validator';

import { AutoIncrement } from '../../shared/schemas/sequence-id';

import { GameLobby } from "../../shared/schemas";


export const LobbyCollectionName = "Lobby";

@pre<Lobby>('save', async function(next){
  this._id = await AutoIncrement(LobbyCollectionName);
  next();
})
export class Lobby extends GameLobby {
  @prop({ trim: true,lowercase: true })
  searchName:String;
  
  @prop( {min:2})
  size:Number
}
