import { Injectable, Logger } from '@nestjs/common';
import { User } from '../user';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from '../article/article.entity';

@Injectable()
export class SeedsService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
    private readonly logger: Logger,
  ) {}

  async seed() {
    this.logger.debug('Run seeds');
    const users = await this.seedUser();
    this.logger.debug('Successfuly completed seeding users...');
    const articles = await this.seedArticle();
    this.logger.debug('Successfuly completed seeding articles...');
  }

  async seedUser() {
    const users = [];
    this.logger.debug('Clear users tables ...');
    this.userRepository.clear();
    for (let i = 1; i < 50; i++) {
      const user = new User();
      user.email = `user-${i}@gmail.com`;
      user.firstName = 'Firstname ' + i;
      user.lastName = 'LastName ' + i;
      user.password = 'password';
      await user.save();
      users.push(user);
    }
    const user = new User();
    user.email = `glrd.remi@gmail.com`;
    user.firstName = 'glrd';
    user.lastName = 'glrd';
    user.password = 'password';
    await user.save();
    users.push(user);
    return users;
  }

  async seedArticle() {
    const articles = [];
    this.logger.debug('Clear users tables ...');
    this.articleRepository.clear();
    for (let i = 1; i < 50; i++) {
      const article = new Article();
      article.name = 'Article ' + i;
      article.price = 10 + i;
      article.content = this.lorem();
      await article.save();
      articles.push(article);
    }
    return articles;
  }

  private lorem(): string {
    return 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles, mais s\'est aussi adapté à la bureautique informatique, sans que son contenu n\'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker';
  }
}
