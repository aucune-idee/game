import { Model } from 'mongoose';
import { ILobby } from '../interfaces/lobby.interface';
import { JoinLobbyInput, LeaveLobbyInput, SelectArmyInput } from '../../dto/membership';
export declare class LobbyMembershipService {
    private readonly lobbyModel;
    constructor(lobbyModel: Model<ILobby>);
    leave(input: JoinLobbyInput): Promise<boolean>;
    join(input: LeaveLobbyInput): Promise<boolean>;
    selectArmy(input: SelectArmyInput): Promise<any>;
}
