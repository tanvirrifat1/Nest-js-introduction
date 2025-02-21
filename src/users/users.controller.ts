import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    const userservice = new UsersService();
    return userservice.getAlllUsers();
  }
}
