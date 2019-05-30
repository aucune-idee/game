import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ConfigService } from './config/config.service';

import { LobbiesModule } from './lobbies/lobbies.module';
import { SharedModule } from './shared/shared.module';
@Module({
  imports: [MongooseModule.forRootAsync({
    imports: [AppModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      console.log("config", configService);
      return {
        uri: configService.envConfig.mongodbConnectChain,
      }
    },
  }), LobbiesModule, SharedModule],
  controllers: [],
  providers: [ConfigService],
  exports: [ConfigService]
})
export class AppModule {}
