import { Module } from '@nestjs/common';
import { PostsController } from './controllers/posts.controller';
import { PostsService } from './services/posts.service';
import { AccountsController } from './controllers/accounts.controller';
import { AccountsService } from './services/accounts.service';

@Module({
  imports: [],
  controllers: [PostsController, AccountsController],
  providers: [PostsService, AccountsService],
})
export class AppModule {}
