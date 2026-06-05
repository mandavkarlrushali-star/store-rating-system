import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rating } from './entities/rating.entity';

@Injectable()
export class RatingsService {
  constructor(
    @InjectRepository(Rating)
    private ratingRepository: Repository<Rating>,
  ) {}

  async create(data: Partial<Rating>) {
    const rating = this.ratingRepository.create(data);
    return this.ratingRepository.save(rating);
  }

  async findAll() {
    return this.ratingRepository.find();
  }

  async update(id: number, data: Partial<Rating>) {
    await this.ratingRepository.update(id, data);
    return this.ratingRepository.findOneBy({ id });
  }
}