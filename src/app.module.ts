import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModele } from './users/users.modules';
import { TweetModule } from './tweet/tweet.module';

@Module({
  imports: [UserModele, TweetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
