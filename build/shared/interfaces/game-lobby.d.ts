import { Document } from 'mongoose';
import { GameType, Armies } from '../enums';
export interface IGameLobby extends Document {
    _id: number;
    createdAt: Date;
    name: String;
    type: GameType;
    owner: number;
    members: Array<{
        _userId: number;
        army?: Armies;
    }>;
}
