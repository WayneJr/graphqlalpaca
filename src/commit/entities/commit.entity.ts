import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { Field, ObjectType } from '@nestjs/graphql';
import { Committer } from './committer.entity';
import { CommitField } from './commitField.entity';
import { Author } from './author.entity';
import { Tree } from './tree.entity';

@ObjectType()
export class Commit {
  @Field()
  url: string;

  @Field()
  sha: string;

  @Field()
  node_id: string;

  @Field()
  html_url: string;

  @Field()
  comments_url: string;

  @Field()
  commit: CommitField;

  @Field((type) => Committer)
  committer: Author;

  @Field()
  author: Author;

  @Field()
  message: string;

  @Field()
  tree: Tree;

  @Field((type) => [CommitField])
  parents: CommitField[];
}
