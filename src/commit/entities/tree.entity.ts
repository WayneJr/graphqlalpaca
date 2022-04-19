import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Tree {
  @Field()
  path: string;

  @Field()
  mode: string;

  @Field()
  type: string;

  @Field()
  sha: string;

  @Field()
  size: number;

  @Field()
  url: string;

  @Field()
  html_url: string;

  @Field()
  git_url: string;

  @Field()
  download_url: string;

  // @Field()
  // _links: {
  //   self: string;
  //   git: string;
  //   html: string;
  // };
}
