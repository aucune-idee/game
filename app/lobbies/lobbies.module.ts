import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { LobbiesController } from './controllers/lobbies.controller';
import { Lobby } from './schemas/lobby.schema';
import { CreateLobbyService, GetLobbiesService, LobbyMembershipService } from './services/';


@Module({
  imports: [TypegooseModule.forFeature([Lobby])],
  controllers: [LobbiesController],
  providers: [CreateLobbyService, GetLobbiesService, LobbyMembershipService]
})
export class LobbiesModule {}
