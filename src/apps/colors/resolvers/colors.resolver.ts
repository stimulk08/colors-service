import { CreateColorInput } from '@apps/colors/resolvers/dto/create-color.input';
import { UpdateColorInput } from '@apps/colors/resolvers/dto/update-color.input';
import { ColorsService } from '@apps/colors/services/colors.service';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Color } from '../entities/color.entity';

@Resolver(() => Color)
export class ColorsResolver {
  constructor(private readonly colorsService: ColorsService) {}

  @Mutation(() => Color)
  createColor(@Args('createColorInput') createColorInput: CreateColorInput) {
    return this.colorsService.create(createColorInput);
  }

  @Query(() => [Color], { name: 'colors' })
  findAll() {
    return this.colorsService.findAll();
  }

  @Query(() => Color, { name: 'color' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.colorsService.findById(id);
  }

  @Mutation(() => Color)
  updateColor(@Args('updateColorInput') updateColorInput: UpdateColorInput) {
    return this.colorsService.update(updateColorInput.id, updateColorInput);
  }

  @Mutation(() => Color)
  removeColor(@Args('id', { type: () => Int }) id: number) {
    return this.colorsService.delete(id);
  }
}
