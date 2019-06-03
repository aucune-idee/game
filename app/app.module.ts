import { Module, NestModule, MiddlewareConsumer  } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from './config/config.service';
import { LobbiesModule } from './lobbies/lobbies.module';
import { SharedModule } from './shared/shared.module';
import { AuthMiddleware } from './common/middleware/auth.middleware';
import { GamesModule } from './games/games.module';


@Module({
  imports: [MongooseModule.forRootAsync({
    imports: [AppModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => ({
      uri: configService.envConfig.mongodbConnectChain,
    })
  }), LobbiesModule, SharedModule, GamesModule],
  controllers: [],
  providers: [ConfigService],
  exports: [ConfigService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes('*');
  }
}
