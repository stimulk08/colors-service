import { BaseDatabaseModel } from '@core/types/base.model';

export interface BaseRepository<K, T extends BaseDatabaseModel> {
  findAll(): Promise<T[]>;
  findById(id: K): Promise<T | null>;
  create(data: T | Omit<T, keyof BaseDatabaseModel>): Promise<T>;
  update(id: K, data: Partial<T> | any): Promise<T>;
  delete(id: K): Promise<void>;
}
