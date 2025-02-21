import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModele } from './users/users.modules';

@Module({
  imports: [UserModele],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
