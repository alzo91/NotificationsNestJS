import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateNotification } from './model/CreateNotification';
import { NotificationRepository } from './repository/notificationRepository';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly repository: NotificationRepository) {}

  @Get()
  getAll() {
    return this.repository.getAll();
  }

  @Post()
  create(@Body() body: CreateNotification) {
    return this.repository.create(body);
  }
}
