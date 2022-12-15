import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { inMemoryNotificationRepository } from '@test/repositories/inMemoryNotificationRepository';
import { randomUUID } from 'node:crypto';
import { CancelNotification } from './cancelNotification';
import { NotificationNotFound } from './errors/notificationNotFound';

describe('Cancel Notification', () => {
  it('should be able to cancel a notification', async () => {
    const notificationsRepository = new inMemoryNotificationRepository();
    const canceltification = new CancelNotification(notificationsRepository);

    const notification = new Notification({
      category: 'social',
      content: new Content('new notification'),
      recipientId: randomUUID(),
    });

    await notificationsRepository.create(notification);

    await canceltification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a non existing notification', async () => {
    const notificationsRepository = new inMemoryNotificationRepository();
    const canceltification = new CancelNotification(notificationsRepository);

    expect(() => {
      return canceltification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
