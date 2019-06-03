import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GamesController } from './controllers/games/games.controller';
import { GameSchema, GameyCollectionName } from './schemas/game.schema';
import { GameGateway } from './gateway/game.gateway';

@Module({
  imports: [MongooseModule.forFeature([{ name: GameyCollectionName, schema: GameSchema }])]
  controllers: [GamesController],
  providers: [GameGateway]
})
export class GamesModule {}
