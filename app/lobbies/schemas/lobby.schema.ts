import { Schema } from "mongoose";
import { MongooseAutoIncrementID } from 'mongoose-auto-increment-reworked';

import { GameType } from "@shared/enums";
import { GameLobbySchema } from "../../shared/schemas";

import { ILobby } from '../interfaces/lobby.interface';

export const LobbyCollectionName = "Lobby";

export const LobbySchema: Schema = new Schema(Object.assign({
  searchName:String,
  size:{
    type:Number,
    min:2
  }
}, GameLobbySchema));

LobbySchema.pre("save", (t:ILobby, next) =>{
  let now = new Date();
  if (!t.createdAt) {
    t.createdAt = now;
  }

  this.searchName = t.name ? t.name.toLocaleLowerCase() : "";
  next();
});

LobbySchema.plugin(MongooseAutoIncrementID.plugin, {modelName:LobbyCollectionName});
