import { Color } from '@apps/colors/entities/color.entity';
import { BaseModel } from '@libs/typeorm/base.model';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class ColorModel extends BaseModel implements Color {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: String })
  @Field(() => String)
  c_name: string;

  @Column({ type: String })
  @Field(() => String)
  c_hex: string;

  @Column({ type: String })
  @Field(() => String)
  c_rgb: string;
}
