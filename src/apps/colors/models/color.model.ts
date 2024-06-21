import { Color } from '@apps/colors/entities/color.entity';
import { BaseModel } from '@libs/typeorm/base.model';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity } from 'typeorm';

@Entity()
@ObjectType()
export class ColorModel extends BaseModel implements Color {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  c_name: string;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  c_hex: string;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  c_rgb: string;
}
