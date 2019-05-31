import { Model } from 'mongoose';
import { ILobby } from '../interfaces/lobby.interface';
import { CreateLobbyDto } from '../../dto/create-lobby';
export declare class CreateLobbyService {
    private readonly lobbyModel;
    constructor(lobbyModel: Model<ILobby>);
    create(input: CreateLobbyDto): Promise<ILobby>;
    private checkInputs;
}
