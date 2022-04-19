import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserDto } from '../../users/dto/user.dto';
import { UsersService } from '../../users/users.service';

@Injectable()
export class DoesUserExist implements CanActivate {
  constructor(private readonly userService: UsersService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  async validateRequest(request): Promise<boolean> {
    const userExist = await this.userService.findOneByUsername(
      request.body.username,
    );
    if (userExist) {
      throw new ForbiddenException('This username already exists');
    }
    return true;
  }
}
