import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from 'typegoose';

import { Game } from '../../schemas/game.schema';
import { Lobby } from '../../../lobbies/schemas/lobby.schema';

import { CreateGame } from '../../dto/create-game';

import { ERRORS, BasicException } from '../../../shared/exceptions';
import { never } from 'rxjs';

@Injectable()
export class CreateGameService {
    constructor(
        @InjectModel(Game)
        private readonly gameModel: ModelType<Game>,
        @InjectModel(Lobby)
        private readonly lobbyModel: ModelType<Lobby>){}
        
    public async create(input:CreateGame):Promise<Game>{
        return this.lobbyModel.findOne({_id:input.lobbyId})
            .then((lobby:Lobby) => this.controleLobby(lobby))
            .then((lobby:Lobby) => this.createGame(lobby))
            .then((game) => {
                console.log(game);
                return game;
            })
            .catch(error => {
                console.error(error);
                throw error;
            })
    }
    
    
    private controleLobby(lobby:Lobby):Lobby{
        if(!lobby){
            throw new BasicException(ERRORS.LOBBY_NOT_FOUND);
        }
        if(!lobby.name || lobby.name.trim().length < 2){
            throw new BasicException(ERRORS.LOBBY_INVALID_NAME);
        }
        if(lobby.type === undefined || lobby.type === null ){
            throw new BasicException(ERRORS.LOBBY_INVALID_TYPE);
        }
        if(!lobby.size || !lobby.members || lobby.members.length != lobby.size){
            throw new BasicException(ERRORS.LOBBY_INITIALIZATION_ERROR);
        }
        return lobby;
    }
    private async createGame(lobby:Lobby):Promise<Game>{
        console.log("create", lobby);
        let created = new this.gameModel({
            name:lobby.name,
            type: lobby.type,
            
            owner:lobby.owner,
            members:lobby.members.map(m => ({
                _userId : m._userId,
                army : m.army
            }))
        });
        console.log(created)
        return created.save().then((document:Game) => {
            console.log(document)
            return document as Game
        })
        .catch(error => {
            console.error(error)
            throw error;
        });
    }
}
