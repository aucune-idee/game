import {Lobby, ILobby } from '../models/lobby.model';

import {BaseError, ErrorCodes} from '../exceptions/base-error';

export interface ICreateLobbyInput{
    name:String;
}

export interface ICreateLobbyInput{
    name:String;
}

export async function createLobby({name}: ICreateLobbyInput): Promise<ILobby> {
    return checkInputs({name})
    .then(() => {
        return {
            name:name,
            owner:0,
            createdAt: new Date()
        } as ILobby
    });
    
}

function checkInputs({name}: ICreateLobbyInput): Promise<String>{
    if(name === null || name === undefined || name.trim().length === 0){
        return Promise.reject(new BaseError("Name is invalid", ErrorCodes.LOBBY_INVALID_NAME));
    }
    return Promise.resolve("");
}