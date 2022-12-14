import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notificationRepository';

type sendNotificationRequest = {
  recipientId: string;
  content: string;
  category: string;
};

type sendNotificationResponse = {
  notification: Notification;
};

@Injectable()
export class SendNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}
  async execute(
    request: sendNotificationRequest,
  ): Promise<sendNotificationResponse> {
    const { category, recipientId, content } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    await this.notificationsRepository.create(notification);

    return {
      notification,
    };
  }
}
