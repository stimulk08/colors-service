import { BaseDatabaseModel } from '@core/types/base.model';
import { BaseEntity } from 'typeorm';

export abstract class BaseModel
  extends BaseEntity
  implements BaseDatabaseModel
{
  id: number;
}
