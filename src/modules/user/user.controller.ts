import { Controller, Get, Res } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { UsersService } from './user.service';
import { UserRessource } from './user-ressource';

@ApiUseTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async index(@Res() res) {
    const users = await this.userService.index();
    res.send({
      data: UserRessource.collection(users),
    });
  }
}
