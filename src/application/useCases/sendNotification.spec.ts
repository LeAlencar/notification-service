import { inMemoryNotificationRepository } from '../../../test/repositories/inMemoryNotificationRepository';
import { SendNotification } from './sendNotification';

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new inMemoryNotificationRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'This is a notification',
      recipientId: 'recipient-id',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
