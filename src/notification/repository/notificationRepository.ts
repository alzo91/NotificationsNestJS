import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/PrismaService';
import { CreateNotification } from '../model/CreateNotification';
import { randomUUID } from 'node:crypto';
@Injectable()
export class NotificationRepository {
  constructor(private readonly repository: PrismaService) {}

  async getAll() {
    return await this.repository.notification.findMany();
  }

  async create(data: CreateNotification) {
    const id = randomUUID();
    return await this.repository.notification.create({
      data: {
        id,
        category: data.category,
        content: data.content,
        recipientId: data.recipientId,
      },
    });
  }
}
