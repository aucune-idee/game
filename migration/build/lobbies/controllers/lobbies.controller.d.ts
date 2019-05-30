import { CreateLobbyService } from '../services/';
import { CreateLobbyDto } from '../dto/create-lobby';
export declare class LobbiesController {
    private createLobby;
    constructor(createLobby: CreateLobbyService);
    create(input: CreateLobbyDto): Promise<void>;
}
