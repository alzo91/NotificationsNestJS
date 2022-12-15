import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { MailService } from '../mail/mail.service';
import { SESMailService } from '../mail/SESMail.service';
import { NotificationRepository } from './repository/notificationRepository';
import { PrismaService } from 'src/services/PrismaService';

@Module({
  imports: [],
  controllers: [NotificationController],
  providers: [
    PrismaService,
    NotificationRepository,
    {
      provide: MailService,
      useClass: SESMailService,
    },
  ],
  // providers: [AppService],
})
export class NotificationModule {}
