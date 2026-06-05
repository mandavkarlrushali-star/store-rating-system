import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getDashboard() {
    return {
      totalUsers: 1,
      totalStores: 0,
      totalRatings: 1,
    };
  }

  getOwnerDashboard() {
    return {
      storeName: 'ABC Store Updated',
      averageRating: 5,
      totalRatings: 1,
    };
  }
}