import { Controller, Get, Post, Body } from '@nestjs/common';

import { CreateLobbyService } from '../services/';

import { CreateLobbyDto } from '../dto/create-lobby';


@Controller('lobbies')
export class LobbiesController {
    
    constructor(private createLobby:CreateLobbyService){}
    
    @Post()
    async create(@Body() input: CreateLobbyDto) {
      return this.createLobby.create(input);
    }
}
