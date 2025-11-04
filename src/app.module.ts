import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CanalModule } from './canal/canal.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, CanalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
