import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { RatingsService } from './ratings.service';

@Controller('ratings')
export class RatingsController {
  constructor(private readonly ratingsService: RatingsService) {}

  @Post()
  create(@Body() body: any) {
    return this.ratingsService.create(body);
  }

  @Get()
  findAll() {
    return this.ratingsService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.ratingsService.update(+id, body);
  }
}