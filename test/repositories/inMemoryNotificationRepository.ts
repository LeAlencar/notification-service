import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notificationRepository';

export class inMemoryNotificationRepository implements NotificationsRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
