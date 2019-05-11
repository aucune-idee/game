import { Schema, Model, model} from "mongoose";
import {MongooseAutoIncrementID} from 'mongoose-auto-increment-reworked';


import { IGameLobby, GameLobbySchema } from './game-lobby';

export interface IGame extends IGameLobby {
}

export var GameSchema: Schema = new Schema(Object.assign({}, GameLobbySchema));

GameSchema.pre("save", function(this:IGame, next) {
  let now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

GameSchema.plugin(MongooseAutoIncrementID.plugin, {modelName:'Game'});

export const Game: Model<IGame> = model<IGame>("Game", GameSchema);