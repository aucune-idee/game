import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GamesController } from './controllers/games.controller';
import { GameSchema, GameCollectionName } from './schemas/game.schema';
import { GameGateway } from './gateway/game.gateway';

@Module({
  imports: [MongooseModule.forFeature([{ name: GameCollectionName, schema: GameSchema }])],
  controllers: [GamesController],
  providers: [GameGateway]
})
export class GamesModule {}
