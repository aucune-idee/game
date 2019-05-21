import { Document } from "mongoose";


import { GameType, Armies, enum2Array } from '../enums/';

export interface IGameLobby extends Document {
    _id:number,
    createdAt: Date,
    name:String;
    type: GameType;
  
    owner:number;
    members:Array<{
      _userId:number,
      army?:Armies
    }>
  }
  
  export var GameLobbySchema = {
    _id: Number,
    name:String,
    searchName:String,
    owner:Number,
    type:{
      type:String,
      enum: enum2Array(GameType)
    },
    members:[{
      _userId:Number,
      army:{
        type:String,
        enum: enum2Array(Armies)
      }
    }]
  };