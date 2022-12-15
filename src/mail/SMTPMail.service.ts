import { Injectable } from '@nestjs/common';
import { MailService } from './mail.service';

@Injectable()
export class SMTPMailService implements MailService {
  sendEmail(): string {
    return 'email was sent by STMP';
  }
}
