import { BaseDatabaseModel } from '@core/types/base.model';

export class Color implements BaseDatabaseModel {
  id: number;
  c_name: string;
  c_hex: string;
  c_rgb: string;
}
