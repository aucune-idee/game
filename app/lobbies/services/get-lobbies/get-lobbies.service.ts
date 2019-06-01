import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ILobby } from '../../interfaces/lobby.interface';

import { LobbyCollectionName } from '../../schemas/lobby.schema';
import { GetLobbiesInput, GetLobbiesOutput } from '../../dto/get-lobbies';

@Injectable()
export class GetLobbiesService {
    
    constructor(
        @InjectModel(LobbyCollectionName)
        private readonly lobbyModel: Model<ILobby>){}
    
    public getLobbies(input:GetLobbiesInput):Promise<GetLobbiesOutput>{
        input = this.cleanInput(input);
       
        return this.lobbyModel.find(this.getParameters(input))
            .limit(input.size+1)
        .then(lobbies => {
            return {
            lobbies:lobbies.length === input.size+1 ? lobbies.splice(-1,1) : lobbies,
            hasNext:lobbies.length === input.size+1
        }});
    }
    
    public getLobby(id:number):Promise<ILobby>{
        return this.lobbyModel.findOne({_id : id})
    }
    
    private cleanInput(input:GetLobbiesInput):GetLobbiesInput{
        input.start = input.start === undefined ? 0 : input.start,
        input.size  = input.size === undefined ? 20 : input.size;
        if(input.start < 0){
            input.start = 0;
        }
        if(input.size < 0){
            input.size = 20
        }
        else if(input.size){
            input.size = 50;
        }
        return input;
    }
    private getParameters(input:GetLobbiesInput){
        let params:any = {}
        if(input.member !== undefined && input.member !== null){
            params["$or"] = [
                {"members._userId":input.member},
                {owner:input.member}
            ];
        }
        return params;
    }
}
