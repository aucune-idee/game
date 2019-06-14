import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { GamesController } from './controllers/games.controller';
import { Game } from './schemas/game.schema';
import { Lobby } from '../lobbies/schemas/lobby.schema';
import { GameGateway } from './gateway/game.gateway';
import { GetGamesService } from './services/get-games/get-games.service';
import { CreateGameService } from './services/create-game/create-game.service';

@Module({
  imports: [
    TypegooseModule.forFeature([Game, Lobby]),
  ],
  controllers: [GamesController],
  providers: [GameGateway, GetGamesService, CreateGameService]
})
export class GamesModule {}
