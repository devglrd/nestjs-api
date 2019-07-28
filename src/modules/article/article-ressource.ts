import { Injectable } from '@nestjs/common';
import { Article } from './article.entity';

@Injectable()
export class ArticleRessource {
  static toArray(article: Article) {
    return {
      id: article.id,
      name: article.name,
      content: article.content,
      price: article.price,
      publish: article.publish,
      created_at: article.created_at,
      updated_at: article.updated_at,
    };
  }

  static collection(articles: Article[]) {
    return articles.map((article: Article) => {
      return {
        id: article.id,
        name: article.name,
        content: article.content,
        price: article.price,
        publish: article.publish,
        created_at: article.created_at,
        updated_at: article.updated_at,
      };
    });
  }
}
