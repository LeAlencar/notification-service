import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notificationRepository';

type CountRecipientsNotificationRequest = {
  recipientId: string;
};

interface CountRecipientsNotificationResponse {
  count: number;
}

@Injectable()
export class CountRecipientsNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}
  async execute(
    request: CountRecipientsNotificationRequest,
  ): Promise<CountRecipientsNotificationResponse> {
    const { recipientId } = request;

    const count = await this.notificationsRepository.countManyByRecipientId(
      recipientId,
    );

    return {
      count,
    };
  }
}
