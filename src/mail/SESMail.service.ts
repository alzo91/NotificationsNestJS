import { Injectable } from '@nestjs/common';
import { MailService } from './mail.service';

@Injectable()
export class SESMailService implements MailService {
  sendEmail(): string {
    return 'e-mail was sent by SES';
  }
}
