import { Resolver, Mutation, Query } from '@nestjs/graphql';
import { User } from '../users/entities/user.entity';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';

@Resolver((of) => User)
export class AuthResolver {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Query((returns) => String, { name: 'hello' })
  async sayHello() {
    return 'Hello World';
  }

  @Mutation((returns) => User)
  async makeToken() {
    const token = await this.authService.generateToken();
    return await this.usersService.create({ token });
  }
}
