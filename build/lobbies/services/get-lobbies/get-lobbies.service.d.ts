import { Model } from 'mongoose';
import { ILobby } from '../../interfaces/lobby.interface';
import { GetLobbiesInput, GetLobbiesOutput } from '../../dto/get-lobbies';
export declare class GetLobbiesService {
    private readonly lobbyModel;
    constructor(lobbyModel: Model<ILobby>);
    getLobbies(input: GetLobbiesInput): Promise<GetLobbiesOutput>;
    getLobby(id: number): Promise<ILobby>;
    private cleanInput;
    private getParameters;
}
