import { Field, ObjectType } from '@nestjs/graphql';
import { Committer } from './committer.entity';
import { Author } from './author.entity';

@ObjectType()
export class CommitField {
  @Field()
  url: string;

  @Field((type) => Author)
  author: Committer;

  @Field()
  message: string;

  @Field((type) => Committer)
  committer: Committer;
}
