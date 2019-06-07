import { Schema, Document } from "mongoose";
import { MongooseAutoIncrementID } from 'mongoose-auto-increment-reworked';

import { GameType } from "@shared/enums";
import { GameLobbySchema } from "../../shared/schemas";

import { ILobbyDocument } from '../interfaces/lobby.interface';

export const LobbyCollectionName = "Lobby";

export const LobbySchema: Schema = new Schema(Object.assign({
  searchName:String,
  size:{
    type:Number,
    min:2
  }
}, GameLobbySchema));

LobbySchema.pre("save", function(this:ILobbyDocument, next){
  let now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }

  this.searchName = this.name ? this.name.toLocaleLowerCase() : "";
  next();
});

LobbySchema.plugin(MongooseAutoIncrementID.plugin, {modelName:LobbyCollectionName});
