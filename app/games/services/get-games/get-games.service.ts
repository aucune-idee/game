import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from 'typegoose';

import { Game } from '../../schemas/game.schema';

@Injectable()
export class GetGamesService {
    
    constructor(
        @InjectModel(Game)
        private readonly gameModel: ModelType<Game>){}
        
    
    public getGame(id:number):Promise<Game>{
        return this.gameModel.findOne({_id : id})
        .then(game => game);
    }
}
