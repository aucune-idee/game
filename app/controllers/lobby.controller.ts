import {Lobby, ILobby } from '../models/lobby.model';

import {BaseError, ErrorCodes} from '../exceptions/base-error';
import { GameType, Armies } from '@enums/index';

export interface IGetLobbiesInput{
    start?:number,
    size?:number,
    member?:number
}
export interface IGetLobbiesOutput{
    lobbies: Array<ILobby>;
    hasNext:boolean;
}

export interface IGetLobbyInput{
    id:number
}

export interface ICreateLobbyInput{
    name?:String;
    owner?:number;
    type?: GameType;
    members?:Array<{
        _userId:number
    }>
}

export interface ILeaveLobbyInput{
    userId:number;
    lobbyId:number
}

export interface ISelectArmyInput{
    userId:number;
    lobbyId:number;
    army:Armies;
}

export async function getLobbies(input:IGetLobbiesInput):Promise<IGetLobbiesOutput>{
    let start = input.start === undefined ? 0 : input.start,
        size  = input.size === undefined ? 20 : input.size;
    if(start < 0){
        start = 0;
    }
    if(size < 0){
        size = 20
    }
    else if(size > 50){
        size = 50;
    }

    let params:any = {}
    if(input.member !== undefined && input.member !== null){
        params["$or"] = [
            {"members._userId":input.member},
            {owner:input.member}
        ];
    }
    return Lobby.find(params)
    .limit(size+1)
    .then(lobbies => {
        return {
        lobbies:lobbies.length === size+1 ? lobbies.splice(-1,1) : lobbies,
        hasNext:lobbies.length === size+1
    }})
    .catch(error => {
        console.error(error)
        return error;
    });
}

export async function getLobby(input: IGetLobbyInput): Promise<ILobby>{
    return Lobby.findOne({_id:input.id})
    .then(lobby => {
        if(lobby !== null && lobby !== undefined){
            return lobby;
        }
        return Promise.reject(null);
    });
}

export async function createLobby(input: ICreateLobbyInput): Promise<ILobby> {
    
    return checkInputs(input)
    .then((input: ICreateLobbyInput) => {
        input.members = [{
            _userId: input.owner ? input.owner: -1
        }];
        return Lobby.create({
            name : input.name,
            owner: input.owner
        });
    });
    
}

export async function leaveLobby(input:ILeaveLobbyInput):Promise<boolean>{
    return Lobby.findOne({_id:input.lobbyId})
    .then(lobby => {
        if(lobby === undefined || lobby === null){
            return Promise.reject(new BaseError("Input Error", ErrorCodes.LOBBY_LEAVE_INPUT));
        }
        if(lobby.members == null){
            return false;
        }
        let index = lobby.members.findIndex(m => m._userId == input.userId);
        if(index === -1){
            return Promise.reject(new BaseError("Not a member", ErrorCodes.LOBBY_NOT_MEMBER));
        }
        lobby.members.splice(index,1);
        return lobby.save().then(() => true);
    })
}

export async function joinLobby(input:ILeaveLobbyInput):Promise<boolean>{
    return Lobby.findOne({_id:input.lobbyId})
    .then(lobby => {
        if(lobby === undefined || lobby === null){
            return Promise.reject(new BaseError("Input Error", ErrorCodes.LOBBY_JOIN_INPUT));
        }
        if(lobby.members == null){
            return false;
        }
        if(lobby.members.length >= lobby.size){
            return Promise.reject(new BaseError("Lobby full", ErrorCodes.LOBBY_JOIN_FULL));
        }

        let index = lobby.members.findIndex(m => m._userId == input.userId);
        if(index !== -1){
            return Promise.reject(new BaseError("Already a member", ErrorCodes.LOBBY_JOIN_ALREADY_MEMBER));
        }
        lobby.members.push({
            _userId : input.userId
        });
        return lobby.save().then(() => true);
    });
}

export function selectArmy(input:ISelectArmyInput):Promise<boolean>{
    return Lobby.findOne({_id:input.lobbyId})
    .then(lobby => {
        if(lobby === undefined || lobby === null){
            return Promise.reject(new BaseError("Input Error", ErrorCodes.LOBBY_JOIN_INPUT));
        }
        if(lobby.members == null){
            return false;
        }
        let member = lobby.members.find(m => m._userId == input.userId);
        if(member === undefined || member === null){
            return Promise.reject(new BaseError("Not a member", ErrorCodes.LOBBY_NOT_MEMBER));
        }
        member.army = input.army;
        return lobby.save().then(() => true);
    });
}

function checkInputs(input: ICreateLobbyInput): Promise<ICreateLobbyInput>{
    if(input.name === undefined || input.name === null || input.name.trim().length === 0){
        return Promise.reject(new BaseError("Name is invalid", ErrorCodes.LOBBY_INVALID_NAME));
    }
    if(input.type === undefined || input.type === null){
        return Promise.reject(new BaseError("Type is invalid", ErrorCodes.LOBBY_INVALID_TYPE));
    }
    if(input.owner === undefined || input.owner === null){
        return Promise.reject(new BaseError("Owner is invalid", ErrorCodes.LOBBY_INVALID_OWNER));
    }
    input.name = input.name.trim();
    return Promise.resolve(input);
}