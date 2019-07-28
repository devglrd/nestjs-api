import { Controller, Get, Res } from '@nestjs/common';
import { UsersService } from '../user';
import { ArticleService } from './article.service';
import { Response } from 'express';
import { ArticleRessource } from './article-ressource';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('articles')
@Controller('articles')
export class ArticleController {
  constructor(
    private readonly userService: UsersService,
    private readonly articleService: ArticleService,
  ) {}

  @Get()
  async index(@Res() res: Response) {
    const articles = await this.articleService.index();
    return res.send({
      data: ArticleRessource.collection(articles),
    });
  }
}
