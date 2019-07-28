import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { UserModule } from '../user';
import { Article } from './article.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleRessource } from './article-ressource';

@Module({
  imports: [UserModule, TypeOrmModule.forFeature([Article])],
  controllers: [ArticleController],
  providers: [ArticleService, ArticleRessource],
  exports: [ArticleService, ArticleRessource],
})
export class ArticleModule {}
