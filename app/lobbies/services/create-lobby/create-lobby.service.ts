import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ILobby, ILobbyDocument } from '../../interfaces/lobby.interface';
import { LobbyCollectionName } from '../../schemas/lobby.schema';

import { CreateLobbyDto } from '../../dto/create-lobby';

import { ERRORS, BasicException } from '../../../shared/exceptions';

@Injectable()
export class CreateLobbyService {
    constructor(
        @InjectModel(LobbyCollectionName)
        private readonly lobbyModel: Model<ILobbyDocument>){}
        
    public create(input:CreateLobbyDto): Promise<ILobby>{
        this.checkInputs(input)
        
        return this.lobbyModel.create({
            name    : input.name,
            type    : input.type,
            owner   : input.owner,
            members : [{
                _userId:input.owner
            }]
        });
    }
    
    private checkInputs(input: CreateLobbyDto){
        if(input.name === undefined || input.name === null || input.name.trim().length === 0){
            throw new BasicException(ERRORS.LOBBY_INVALID_NAME);
        }
        if(input.type === undefined || input.type === null){
            throw new BasicException(ERRORS.LOBBY_INVALID_TYPE);
        }
        if(input.owner === undefined || input.owner === null){
            throw new BasicException(ERRORS.LOBBY_INVALID_OWNER);
        }
        input.name = input.name.trim();
        return Promise.resolve(input);
    }
}
