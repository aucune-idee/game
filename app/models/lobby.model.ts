import { Schema, Model, model} from "mongoose";
import {MongooseAutoIncrementID} from 'mongoose-auto-increment-reworked';

import { IGameLobby, GameLobbySchema } from './game-lobby';

export interface ILobby extends IGameLobby {
  searchName:String;
  size:number;
}

export var LobbySchema: Schema = new Schema(Object.assign({
  searchName:String,
  size:{
    type:Number,
    min:2
  }
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