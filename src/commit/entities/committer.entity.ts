import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Committer {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  date: string;
}
