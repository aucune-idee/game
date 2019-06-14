import { GameType, Armies, enum2Array } from '../enums';
import { Typegoose, prop, arrayProp, pre } from 'typegoose';

class Members{
  @prop()
  _userId: Number;
  
  @prop({enum:Armies })
  army?: Armies;
}

@pre<GameLobby>('save', async function(next) {
  let now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
})
export class GameLobby extends Typegoose {
    @prop()
    _id: Number;
    
    @prop()
    name:String;
    
    @prop()
    searchName:String;
    
    @prop()
    owner:Number;
    
    @prop()
    createdAt:Date;
    
    @prop({enum:GameType})
    type:GameType;
    
    @arrayProp({items: Members})
    members:Array<Members>
  };