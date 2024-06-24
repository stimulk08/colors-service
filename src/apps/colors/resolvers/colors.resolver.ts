import { CreateColorInput } from '@apps/colors/resolvers/dto/create-color.input';
import { UpdateColorInput } from '@apps/colors/resolvers/dto/update-color.input';
import { ColorsService } from '@apps/colors/services/colors.service';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ColorModel } from '../models/color.model';

@Resolver(() => ColorModel)
export class ColorsResolver {
  constructor(private readonly colorsService: ColorsService) {}

  @Mutation(() => ColorModel)
  createColor(@Args('createColorInput') createColorInput: CreateColorInput) {
    const { hex: c_hex, name: c_name, rgb: c_rgb } = createColorInput;
    return this.colorsService.create({ c_hex, c_name, c_rgb });
  }

  @Query(() => ColorModel)
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.colorsService.findById(id);
  }

  @Mutation(() => ColorModel)
  updateColor(@Args('updateColorInput') updateColorInput: UpdateColorInput) {
    return this.colorsService.update(updateColorInput.id, updateColorInput);
  }

  @Mutation(() => ColorModel)
  removeColor(@Args('id', { type: () => Int }) id: number) {
    return this.colorsService.delete(id);
  }

  @Query(() => [ColorModel], { name: 'colorsByName' })
  findByName(@Args('name', { type: () => String }) name: string) {
    return this.colorsService.findByName(name);
  }

  @Query(() => [ColorModel], { name: 'colors' })
  findAll(
    @Args('page', { type: () => Int, defaultValue: null }) page?: number,
  ) {
    return this.colorsService.findAll(page);
  }
}
