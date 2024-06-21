import { ColorModel } from '@apps/colors/models/color.model';
import { BaseTypeormRepository } from '@libs/typeorm/typeorm.repository';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class ColorsRepository extends BaseTypeormRepository<
  number,
  ColorModel
> {
  constructor(repository: Repository<ColorModel>) {
    super(repository);
  }
}
