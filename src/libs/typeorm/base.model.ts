import { BaseDatabaseModel } from '@core/types/base.model';
import { Field, Int } from '@nestjs/graphql';
import { BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

export abstract class BaseModel
  extends BaseEntity
  implements BaseDatabaseModel
{
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;
}
