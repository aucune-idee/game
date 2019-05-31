import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ILobby } from '../interfaces/lobby.interface';
import { LobbyCollectionName } from '../../schemas/lobby.schema';
import { ERRORS, BasicException } from '../../../shared/exceptions';

import { JoinLobbyInput, LeaveLobbyInput } from '../../dto/membership';


@Injectable()
export class LobbyMembershipService {
    
     constructor(
        @InjectModel(LobbyCollectionName)
        private readonly lobbyModel: Model<ILobby>){}
        
    public leave(input:JoinLobbyInput):Promise<boolean>{
        return this.lobbyModel.findOne({_id:input.lobbyId})
        .then(lobby => {
            if(lobby === undefined || lobby === null){
                throw new BasicException(ERRORS.LOBBY_NOT_FOUND);
            }
            if(lobby.members == null){
                throw new BasicException(ERRORS.LOBBY_INITIALIZATION_ERROR);
            }
            let index = lobby.members.findIndex(m => m._userId == input.userId);
            if(index === -1){
                throw new BasicException(ERRORS.LOBBY_NOT_A_MEMBER);
            }
            lobby.members.splice(index,1);
            return lobby.save().then(() => true);
        })
    }    
    public join(input:LeaveLobbyInput):Promise<boolean>{
        return this.lobbyModel.findOne({_id:input.lobbyId})
        .then(lobby => {
            if(lobby === undefined || lobby === null){
                throw new BasicException(ERRORS.LOBBY_NOT_FOUND);
            }
            if(lobby.members == null){
                throw new BasicException(ERRORS.LOBBY_INITIALIZATION_ERROR);
            }
            if(lobby.members.length >= lobby.size){
                throw new BasicException(ERRORS.LOBBY_FULL);
            }
    
            let index = lobby.members.findIndex(m => m._userId == input.userId);
            if(index !== -1){
                throw new BasicException(ERRORS.LOBBY_ALREADY_MEMBER);
            }
            lobby.members.push({
                _userId : input.userId
            });
            return lobby.save().then(() => true);
        });
    }
}
