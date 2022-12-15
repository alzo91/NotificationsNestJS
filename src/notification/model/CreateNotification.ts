import { IsNotEmpty, Length } from 'class-validator';

export class CreateNotification {
  @IsNotEmpty()
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 254)
  content: string;

  @IsNotEmpty()
  @Length(5, 15)
  category: string;
}
