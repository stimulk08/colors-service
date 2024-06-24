import { BaseDatabaseModel } from '@core/types/base.model';
import { BaseRepository } from '@core/types/repository';
import { FindOptionsWhere, Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class BaseTypeormRepository<
  K extends string | number,
  T extends BaseDatabaseModel,
> implements BaseRepository<K, T>
{
  constructor(protected readonly repository: Repository<T>) {}
  private pageSize = 5;

  async findAll(page?: number): Promise<T[]> {
    const limit = this.pageSize;
    const offset = page ? (page - 1) * limit : undefined;

    return this.repository.find({ take: limit, skip: offset });
  }

  async findById(id: K): Promise<T | null> {
    return this.repository.findOneBy({ id } as unknown as FindOptionsWhere<T>);
  }

  async create(data: T): Promise<T> {
    const entity = this.repository.create(data);
    return this.repository.save(entity);
  }

  async update(id: K, data: QueryDeepPartialEntity<T>): Promise<T | null> {
    await this.repository.update(id, data);
    return this.findById(id);
  }

  async delete(id: K): Promise<void> {
    await this.repository.delete(id);
  }
}
