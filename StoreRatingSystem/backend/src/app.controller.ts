import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('admin/dashboard')
  getDashboard() {
    return this.appService.getDashboard();
  }

  @Get('owner/dashboard')
  getOwnerDashboard() {
    return this.appService.getOwnerDashboard();
  }
}