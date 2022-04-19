import { IsNotEmpty, MinLength } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  readonly token: string;
}
