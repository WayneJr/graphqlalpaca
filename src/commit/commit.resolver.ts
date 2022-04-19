import { Query, Resolver } from '@nestjs/graphql';
import { GithubDatasource } from '../core/datasource/github.datasource';
import { Commit } from './entities/commit.entity';

@Resolver()
export class CommitResolver {
  constructor(private githubDataSource: GithubDatasource) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  @Query((returns) => Commit)
  async getCommits() {
    try {
      console.log(await this.githubDataSource.getCommits());
      return await this.githubDataSource.getCommits();
    } catch (err) {
      console.log(err);
    }
  }
}
