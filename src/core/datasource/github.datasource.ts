import { Injectable } from '@nestjs/common';
import { HTTPCache, RESTDataSource } from 'apollo-datasource-rest';

@Injectable()
export class GithubDatasource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.github.com/';
    this.httpCache = new HTTPCache();
  }

  async getCommits(limit = 10) {
    // Since we're retrieving data for one particular repo,
    // it can be hardcoded
    return await this.get('repos/facebook/react/commits', {
      per_page: limit,
    });
  }
}
