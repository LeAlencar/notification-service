import { Notification } from '@application/entities/notification';
import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notificationRepository';

type GetRecipientsNotificationRequest = {
  recipientId: string;
};

interface GetRecipientsNotificationResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientsNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}
  async execute(
    request: GetRecipientsNotificationRequest,
  ): Promise<GetRecipientsNotificationResponse> {
    const { recipientId } = request;

    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipientId);

    return {
      notifications,
    };
  }
}
