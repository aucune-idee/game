import { Controller, Get, Post, Body, UseGuards, Req,
  Param} from '@nestjs/common';
import { Request } from 'express';

import { AuthGuard } from '../../common/guards/auth.guard';

import { CreateLobbyService, GetLobbiesService, LobbyMembershipService } from '../services/';
import { CreateLobbyDto } from '../dto/create-lobby';


@Controller('lobbies')
export class LobbiesController {
    
    constructor(
      private createLobby:CreateLobbyService,
      private getLobbies:GetLobbiesService,
      private lobbyMembership:LobbyMembershipService){}
    
    @Post()
    @UseGuards(AuthGuard)
    async create(@Body() input: CreateLobbyDto) {
      return this.createLobby.create(input);
    }
    
    @Get()
    async getLobbies(){
      return this.getLobbies.getLobbies({})
    }
    
    @Get('own')
    @UseGuards(AuthGuard)
    async getOwnLobbies(@Req() request: Request){
      return this.getLobbies.getLobbies({member:request.locals.jwt.payload.id})
    }
    
    @Get(':id')
    async getLobby(@Param('id') id:number){
      return this.getLobbies.getLobby(id);
    }
}
