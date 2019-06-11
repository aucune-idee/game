import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { IGame, IGameDocument } from '../../interfaces/game.interface';
import { GameCollectionName } from '../../schemas/game.schema';

import { ILobby, ILobbyDocument } from '../../../lobbies/interfaces/lobby.interface';
import { LobbyCollectionName } from '../../../lobbies/schemas/lobby.schema';

import { CreateGame } from '../../dto/create-game';

import { ERRORS, BasicException } from '../../../shared/exceptions';
import { never } from 'rxjs';

@Injectable()
export class CreateGameService {
    constructor(
        @InjectModel(GameCollectionName)
        private readonly gameModel: Model<IGameDocument>,
        @InjectModel(LobbyCollectionName)
        private readonly lobbyModel: Model<ILobbyDocument>){}
        
    public async create(input:CreateGame):Promise<IGame>{
        return this.lobbyModel.findOne({_id:input.lobbyId})
            .then((lobby:ILobby) => this.controleLobby(lobby))
            .then((lobby:ILobby) => this.createGame(lobby))
            .then((game) => {
                console.log(game);
                return game;
            })
            .catch(error => {
                console.error(error);
                throw error;
            })
    }
    
    
    private controleLobby(lobby:ILobby):ILobby{
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
    private async createGame(lobby:ILobby):Promise<IGame>{
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
        return created.save().then((document:IGameDocument) => {
            console.log(document)
            return document as IGame
        })
        .catch(error => {
            console.error(error)
            throw error;
        });
    }
}
