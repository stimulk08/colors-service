import { CrudService } from '@core/types/crud.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ColorsRepository } from '../database/colors.repository';
import { Color } from '../entities/color.entity';
import { ColorModel } from '../models/color.model';

@Injectable()
export class ColorsService extends CrudService<number, Color> {
  constructor(
    @InjectRepository(ColorModel)
    protected readonly repository: ColorsRepository,
  ) {
    super(repository);
  }
}
