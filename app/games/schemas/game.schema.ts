import { Schema, Document } from "mongoose";
import { MongooseAutoIncrementID } from 'mongoose-auto-increment-reworked';

import { GameType } from "@shared/enums";
import { GameLobbySchema } from "../../shared/schemas";

import { IGameDocument } from '../interfaces/game.interface';

export const GameCollectionName = "Game";

export const GameSchema: Schema = new Schema(Object.assign({
  searchName:String
}, GameLobbySchema));

GameSchema.pre("save", function(this:IGameDocument, next){
  let now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }

  this.searchName = this.name ? this.name.toLocaleLowerCase() : "";
  next();
});

GameSchema.plugin(MongooseAutoIncrementID.plugin, {modelName:GameCollectionName});
