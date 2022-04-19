import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Author {
  @Field()
  login: string;

  @Field()
  id: number;

  @Field()
  node_id: string;

  @Field()
  avatar_url: string;

  @Field()
  gravatar_id: string;

  @Field()
  url: string;

  @Field()
  html_url: string;

  @Field()
  followers_url: string;

  @Field()
  following_url: string;

  @Field()
  gists_url: string;

  @Field()
  starred_url: string;

  @Field()
  subscriptions_url: string;

  @Field()
  organizations_url: string;

  @Field()
  repos_url: string;

  @Field()
  events_url: string;

  @Field()
  received_events_url: string;

  @Field()
  type: string;

  @Field()
  site_admin: boolean;
}
