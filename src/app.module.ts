import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MailService } from './mail/mail.service';
import { SESMailService } from './mail/SESMail.service';
import { NotificationModule } from './notification/notification.module';
import { PrismaService } from './services/PrismaService';
// import { SMTPMailService } from './mail/SMTPMail.service';
// import { AppService } from './app.service';

@Module({
  imports: [NotificationModule],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: MailService,
      useClass: SESMailService,
    },
  ],
  // providers: [AppService],
})
export class AppModule {}
