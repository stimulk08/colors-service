import { ColorModel } from '@apps/colors/models/color.model';
import { BaseTypeormRepository } from '@libs/typeorm/typeorm.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ColorsRepository extends BaseTypeormRepository<
  number,
  ColorModel
> {
  constructor(
    @InjectRepository(ColorModel) protected repository: Repository<ColorModel>,
  ) {
    super(repository);
  }

  async findByName(name: string): Promise<ColorModel[] | null> {
    return this.repository.findBy({ c_name: name });
  }
}
