import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(@Query() query: any) {
    const userservice = new UsersService();

    if (query.gender) {
      return userservice
        .getAlllUsers()
        .filter((user) => user.gender === query.gender);
    }

    if (query.name) {
      return userservice
        .getAlllUsers()
        .filter((user) => user.name === query.name);
    }

    if (query.age) {
      return userservice
        .getAlllUsers()
        .filter((user) => user.age === Number(query.age));
    }

    return userservice.getAlllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: any) {
    const userservice = new UsersService();
    return userservice.getUserById(+id);
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
