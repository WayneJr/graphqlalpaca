import { Module, Request } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CommitModule } from './commit/commit.module';
import { GithubDatasource } from './core/datasource/github.datasource';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      dataSources: () => {
        return {
          githubAPI: new GithubDatasource(),
        };
      },
      context: ({ req }) => ({ headers: req.headers }),
    }),
    AuthModule,
    CommitModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
