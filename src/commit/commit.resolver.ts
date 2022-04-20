import { Query, Resolver, Args } from '@nestjs/graphql';
import { Commit } from './entities/commit.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/auth.guard';
import { GithubDatasource } from '../core/datasource/github.datasource';

@Resolver()
export class CommitResolver {
  // Added this value to the constructor since it is the only place it is being called
  constructor(private readonly githubAPI: GithubDatasource) {}

  @Query(() => [Commit])
  @UseGuards(GqlAuthGuard)
  async getCommits(@Args('limit') limit: number) {
    try {
      return await this.githubAPI.getCommits(limit);
    } catch (err) {
      console.log(err);
    }
  }
}
