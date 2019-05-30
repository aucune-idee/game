import { Module } from '@nestjs/common';
import { LobbiesController } from './controllers/lobbies.controller';
import { CreateLobbyService } from './services/create-lobby/create-lobby.service';

@Module({
  controllers: [LobbiesController],
  providers: [CreateLobbyService]
})
export class LobbiesModule {}
