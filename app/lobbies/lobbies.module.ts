import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LobbiesController } from './controllers/lobbies.controller';
import { LobbySchema, LobbyCollectionName } from './schemas/lobby.schema';
import { CreateLobbyService, GetLobbiesService, LobbyMembershipService } from './services/';


@Module({
  imports: [MongooseModule.forFeature([{ name: LobbyCollectionName, schema: LobbySchema }])],
  controllers: [LobbiesController],
  providers: [CreateLobbyService, GetLobbiesService, LobbyMembershipService]
})
export class LobbiesModule {}
