import { Module } from '@nestjs/common';
import { SendNotification } from '@application/useCases/sendNotification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';
import { CancelNotification } from '@application/useCases/cancelNotification';
import { CountRecipientsNotification } from '@application/useCases/countRecipientNotifications';
import { GetRecipientsNotification } from '@application/useCases/getRecipientNotification';
import { ReadNotification } from '@application/useCases/readNotification';
import { UnreadNotification } from '@application/useCases/unreadNotification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientsNotification,
    GetRecipientsNotification,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
