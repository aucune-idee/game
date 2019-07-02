import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from 'typegoose';

import { Lobby } from '../../schemas/lobby.schema';
import { ERRORS, BasicException } from '../../../shared/exceptions';

import { Armies } from '../../../shared/enums';

import { JoinLobbyInput, LeaveLobbyInput, SelectArmyInput } from '../../dto/membership';


@Injectable()
export class LobbyMembershipService {
    
     constructor(
        @InjectModel(Lobby)
        private readonly lobbyModel: ModelType<Lobby>){}
        
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
                _userId: input.userId
            });
            return lobby.save().then(() => true);
        });
    }
    
    public selectArmy(input:SelectArmyInput){
        let condition = {_id:input.lobbyId};
        return this.lobbyModel
            .findOne(condition)
            .then(lobby => {
                if(lobby === undefined || lobby === null){
                    throw new BasicException(ERRORS.LOBBY_JOIN_INPUT);
                }
                if(lobby.members == null){
                    throw new BasicException(ERRORS.LOBBY_INITIALIZATION_ERROR);
                }
                let member = lobby.members.find(m => m._userId == input.userId);
                if(member === undefined || member === null){
                    throw new BasicException(ERRORS.LOBBY_NOT_A_MEMBER);
                }
                member.army = input.army as Armies;
                return this.lobbyModel.updateOne(condition, lobby);
            })
            .then(lobby => true);
    }
}
