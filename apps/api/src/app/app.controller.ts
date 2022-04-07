import { Controller, Get } from '@nestjs/common';

import { Message } from '@nx-app-workspace/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    console.log('controller call')
    return this.appService.getData();
  }
}
