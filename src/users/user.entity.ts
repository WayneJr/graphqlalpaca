import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @Field()
  token: string;
}
