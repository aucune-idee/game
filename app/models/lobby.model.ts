import { Document, Schema, Model, model} from "mongoose";
import {MongooseAutoIncrementID} from 'mongoose-auto-increment-reworked';

export interface ILobby extends Document {
  _id:number,
  createdAt: Date,
  name:String;
  searchName:String;

  owner:number
}

export var LobbySchema: Schema = new Schema({
  _id: Number,
  name:String,
  createdAt: Date,
  searchName:String,
  owner:Number
});
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