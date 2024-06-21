import { Color } from '@apps/colors/entities/color.entity';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateColorInput implements Omit<Color, 'id'> {
  @Field(() => String)
  c_name: string;

  @Field(() => String)
  c_hex: string;

  @Field(() => String)
  c_rgb: string;
}
