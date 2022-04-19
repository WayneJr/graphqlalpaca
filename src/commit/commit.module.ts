import { Module } from '@nestjs/common';
import { CommitService } from './commit.service';
import { GithubDatasource } from '../core/datasource/github.datasource';
import { CommitResolver } from './commit.resolver';
import { commitProviders } from './commit.providers';

@Module({
  providers: [
    CommitService,
    GithubDatasource,
    CommitResolver,
    ...commitProviders,
  ],
})
export class CommitModule {}
