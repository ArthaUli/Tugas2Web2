import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MahasiswaModule } from './mahasiswa/mahasiswa.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guards';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [MahasiswaModule],
  controllers: [AppController],
  providers: [{
    provide: APP_GUARD,
    useClass : AuthGuard,
  }
  ,AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('mahasiswa');
  }

}