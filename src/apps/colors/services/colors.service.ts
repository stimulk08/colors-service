import { CrudService } from '@core/types/crud.service';
import { Injectable } from '@nestjs/common';
import { ColorsRepository } from '../database/colors.repository';
import { Color } from '../entities/color.entity';

@Injectable()
export class ColorsService extends CrudService<number, Color> {
  findByName(name: string) {
    return this.repository.findByName(name);
  }
  constructor(protected readonly repository: ColorsRepository) {
    super(repository);
  }
}
