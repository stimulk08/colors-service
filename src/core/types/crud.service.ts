import { BaseDatabaseModel } from '@core/types/base.model';
import { BaseRepository } from '@core/types/repository';

export abstract class CrudService<
  K extends string | number,
  T extends BaseDatabaseModel,
> {
  constructor(protected readonly repository: BaseRepository<K, T>) {}

  async findAll(page?: number, limit?: number): Promise<T[]> {
    return this.repository.findAll(page, limit);
  }

  async findById(id: K): Promise<T> {
    return this.repository.findById(id);
  }

  async create(data: Omit<T, keyof BaseDatabaseModel>): Promise<T> {
    return this.repository.create(data);
  }

  async update(id: K, data: Partial<T>): Promise<T> {
    return this.repository.update(id, data);
  }

  async delete(id: K): Promise<void> {
    return this.repository.delete(id);
  }
}
