import { Query, Resolver } from '@nestjs/graphql';
import { Commit } from './entities/commit.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/auth.guard';

@Resolver()
export class CommitResolver {
  constructor() {}

  @Query(() => [Commit])
  @UseGuards(GqlAuthGuard)
  async getCommits(_, { limit }, { dataSources }) {
    try {
      return await dataSources.githubAPI.getCommits(limit);
    } catch (err) {
      console.log(err);
    }
  }
}
