import { Injectable } from '@nestjs/common';
import { Article } from '../article/article.entity';
import { User } from './user.entity';

@Injectable()
export class UserRessource {
  static toArray(user: User) {
    return {
      id: user.id,
      firstname: user.firstName,
      lastname: user.lastName,
      email: user.email,
    };
  }

  static collection(users: User[]) {
    return users.map((user: User) => {
      return {
        id: user.id,
        firstname: user.firstName,
        lastname: user.lastName,
        email: user.email,
      };
    });
  }
}
