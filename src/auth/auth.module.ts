import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { configProvider } from '../core/config/config.provider';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [
    PassportModule,
    UsersModule,
    JwtModule.register({
      secret: configProvider.jwtKey,
      signOptions: { expiresIn: configProvider.tokenExpiration },
    }),
  ],
  providers: [AuthService, JwtStrategy, AuthResolver],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
