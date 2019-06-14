import { Module, NestModule, MiddlewareConsumer  } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { ConfigService } from './config/config.service';
import { LobbiesModule } from './lobbies/lobbies.module';
import { SharedModule } from './shared/shared.module';
import { AuthMiddleware } from './common/middleware/auth.middleware';
import { GamesModule } from './games/games.module';


@Module({
  imports: [TypegooseModule.forRootAsync({
    imports: [AppModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => ({
      uri: configService.envConfig.mongodbConnectChain,
    })
  }),
  LobbiesModule,
  //GamesModule,
  SharedModule],
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
