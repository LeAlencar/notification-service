import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from '@application/useCases/sendNotification';
import { createNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: createNotificationBody) {
    const { content, recipientId, category } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return {
      notification,
    };
  }
}
