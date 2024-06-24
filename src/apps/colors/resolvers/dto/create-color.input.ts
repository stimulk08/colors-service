import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateColorInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  hex: string;

  @Field(() => String)
  rgb: string;
}
