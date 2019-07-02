import { Controller, Get, Post, Put, Body,
 UseGuards, Req, Param} from '@nestjs/common';
import { Request } from 'express';

import { JwtData } from '../../common/decorators/jwt-data.decorator';
import { AuthGuard } from '../../common/guards/auth.guard';

import { CreateLobbyService, GetLobbiesService, LobbyMembershipService } from '../services/';
import { CreateLobbyDto } from '../dto/create-lobby';
import { GetLobbiesInput } from '../dto/get-lobbies';


@Controller('lobbies')
export class LobbiesController {
    
    constructor(
      private createLobby:CreateLobbyService,
      private findLobbies:GetLobbiesService,
      private lobbyMembership:LobbyMembershipService){}
    
    
    @Post('searches')
    @UseGuards(AuthGuard)
    async search(@Body() input: GetLobbiesInput) {
      return this.findLobbies.getLobbies(input);
    }

    @Post()
    @UseGuards(AuthGuard)
    async create(@Body() input: CreateLobbyDto,
      @JwtData() payload: any) {
      let newInput:CreateLobbyDto = new CreateLobbyDto();
      Object.assign(newInput, input);
      newInput.owner = payload.id;
      return this.createLobby.create(newInput);
    }
    
    @Get()
    async getLobbies(){
      return this.findLobbies.getLobbies({})
    }
    
    @Get('own')
    @UseGuards(AuthGuard)
    async getOwnLobbies(@JwtData() payload: any){
      return this.findLobbies.getLobbies({member:payload.id})
    }
    
    @Get(':id')
    async getLobby(@Param('id') id:number){
      return this.findLobbies.getLobby(id);
    }
    
    @Put(':lobbyId/join')
    @UseGuards(AuthGuard)
    async joinLobby(
      @Param('lobbyId') lobbyId:number,
      @JwtData() payload: any):Promise<boolean>{
      return this.lobbyMembership.join({
        userId:payload.id,
        lobbyId:lobbyId
      });
    }
    
    @Put(':lobbyId/join')
    @UseGuards(AuthGuard)
    async leaveLobby(
      @Param('lobbyId') lobbyId:number,
      @JwtData() payload: any):Promise<boolean>{
      return this.lobbyMembership.leave({
        userId:payload.id,
        lobbyId:lobbyId
      });
    }
    
    @Put(':lobbyId/select-army')
    @UseGuards(AuthGuard)
    async selectArmy(
      @Param('lobbyId') lobbyId:number,
      @JwtData() payload: any,
      @Body() body:any):Promise<boolean>{
      return this.lobbyMembership.selectArmy({
        userId:payload.id,
        lobbyId:lobbyId,
        army: body.army
      });
    }
}
