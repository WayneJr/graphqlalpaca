import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Verification {
  @Field()
  verified: boolean;

  @Field()
  reason: string;

  @Field({ nullable: true })
  signature: Record<string, unknown>;

  @Field({ nullable: true })
  payload: Record<string, unknown>;
}
