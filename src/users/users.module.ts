import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { usersProviders } from './users.providers';
import { AuthModule } from '../auth/auth.module';
// import { UsersResolver } from './users.resolver';

@Module({
  providers: [UsersService, ...usersProviders],
  exports: [UsersService],
})
export class UsersModule {}
