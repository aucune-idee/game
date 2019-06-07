import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { IGame, IGameDocument } from '../../interfaces/game.interface';

import { GameCollectionName } from '../../schemas/game.schema';

@Injectable()
export class GetGamesService {
    
    constructor(
        @InjectModel(GameCollectionName)
        private readonly gameModel: Model<IGameDocument>){}
        
    
    public getGame(id:number):Promise<IGame>{
        return this.gameModel.findOne({_id : id})
        .then(game => game);
    }
}
