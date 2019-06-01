import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { ConfigService } from './config/config.service';

let config = new ConfigService();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: function (origin:any, callback:any) {
          if (config.envConfig.cors.indexOf(origin) !== -1 || origin == null) {
              callback(null, true)
          } else {
              callback(new Error('Not allowed by CORS'))
          }
      }
    }
  });
  await app.listen(config.envConfig.port);
}
bootstrap();
