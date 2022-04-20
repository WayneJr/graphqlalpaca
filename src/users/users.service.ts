import { Injectable, Inject } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserDto } from './dto/user.dto';
import { USER_REPOSITORY } from 'src/core/constants';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async create(token: UserDto): Promise<User> {
    return await this.userRepository.create<User>(token);
  }

  async findOneByToken(token: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { token } });
  }
  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { id } });
  }
}
