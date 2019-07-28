import { Logger, Module } from '@nestjs/common';
import { SeedsController } from './seeds.controller';
import { SeedsService } from './seeds.service';
import { User } from '../user';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from '../article/article.entity';
import { ConfigModule, ConfigService } from '../config';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([User, Article])],
  controllers: [SeedsController],
  providers: [SeedsService, Logger],
})
export class SeedsModule {}
