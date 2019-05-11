import {Lobby, ILobby } from '../models/lobby.model';

import {BaseError, ErrorCodes} from '../exceptions/base-error';

export interface IGetLobbiesInput{
    start?:number,
    size?:number
}
export interface IGetLobbiesOutput{
    lobbies: Array<ILobby>;
    hasNext:boolean;
}

export interface ICreateLobbyInput{
    name:String;
    owner:String;
}

export interface ICreateLobbyInput{
    name:String;
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
    return Lobby.find()
    .limit(size+1)
    .then(lobbies => {
        console.log(lobbies)
        return {
        lobbies:lobbies.length === size+1 ? lobbies.splice(-1,1) : lobbies,
        hasNext:lobbies.length === size+1
    }});
}

export async function createLobby(input: ICreateLobbyInput): Promise<ILobby> {
    console.log(input);
    return checkInputs(input)
    .then((input: ICreateLobbyInput) => Lobby.create({
        name : input.name,
        owner: input.owner
    }));
    
}

function checkInputs(input: ICreateLobbyInput): Promise<ICreateLobbyInput>{
    console.log(input);
    if(input.name === null || input.name === undefined || input.name.trim().length === 0){
        return Promise.reject(new BaseError("Name is invalid", ErrorCodes.LOBBY_INVALID_NAME));
    }
    input.name = input.name.trim();
    return Promise.resolve(input);
}