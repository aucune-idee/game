import { Document, Schema, Model, model} from "mongoose";
import {MongooseAutoIncrementID} from 'mongoose-auto-increment-reworked';

import { IGameLobby, GameLobbySchema } from './game-lobby';

export interface ILobby extends IGameLobby {
  searchName:String;
}

export var LobbySchema: Schema = new Schema(Object.assign({
  searchName:String
}, GameLobbySchema));

LobbySchema.pre("save", function(this:ILobby, next) {
  let now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }

  this.searchName = this.name ? this.name.toLocaleLowerCase() : "";
  next();
});

LobbySchema.plugin(MongooseAutoIncrementID.plugin, {modelName:'Lobby'});

export const Lobby: Model<ILobby> = model<ILobby>("Lobby", LobbySchema);