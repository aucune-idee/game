import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GamesController } from './controllers/games/games.controller';
import { GameSchema, GameyCollectionName } from './schemas/game.schema';
import { GameGateway } from './gateway/game.gateway';
import { GetGamesService } from './services/get-games/get-games.service';
import { CreateGameService } from './services/create-game/create-game.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: GameyCollectionName, schema: GameSchema }])]
  controllers: [GamesController],
  providers: [GameGateway, GetGamesService, CreateGameService]
})
export class GamesModule {}
