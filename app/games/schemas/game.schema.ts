import { prop, pre, plugin } from 'typegoose';
import { IsString, IsInt } from 'class-validator';

import { AutoIncrement } from '../../shared/schemas/sequence-id';

import { GameLobby } from "../../shared/schemas";


export const GameCollectionName = "Game";

@pre<Game>('save', async function(next){
  this._id = await AutoIncrement(GameCollectionName);
  next();
})
export class Game extends GameLobby {
}
