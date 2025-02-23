import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    const userservice = new UsersService();
    return userservice.getAlllUsers();
  }

  @Post()
  createUser() {
    const user = {
      id: 1,
      name: 'John',
      age: 30,
      gender: 'male',
      isMarried: false,
    };
    const userservice = new UsersService();
    userservice.createUser(user);
    return 'User created successfully';
  }
}
