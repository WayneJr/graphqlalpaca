import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { configProvider } from '../core/config/config.provider';

@Module({
  imports: [
    PassportModule,
    UsersModule,
    JwtModule.register({
      secret: configProvider.jwtKey,
      signOptions: { expiresIn: configProvider.tokenExpiration },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
