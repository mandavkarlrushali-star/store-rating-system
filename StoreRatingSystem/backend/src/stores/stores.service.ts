import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Store } from './entities/store.entity';

@Injectable()
export class StoresService {
  constructor(
    @InjectRepository(Store)
    private storeRepository: Repository<Store>,
  ) {}

  async findAll() {
    return this.storeRepository.find();
  }

  async findOne(id: number) {
    return this.storeRepository.findOneBy({ id });
  }

  async create(storeData: Partial<Store>) {
    const store = this.storeRepository.create(storeData);
    return this.storeRepository.save(store);
  }

  async update(id: number, storeData: Partial<Store>) {
    await this.storeRepository.update(id, storeData);
    return this.storeRepository.findOneBy({ id });
  }

  async delete(id: number) {
    return this.storeRepository.delete(id);
  }
}