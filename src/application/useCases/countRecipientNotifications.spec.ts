import { makeNotification } from '@test/factories/notificationFactory';
import { inMemoryNotificationRepository } from '@test/repositories/inMemoryNotificationRepository';
import { CountRecipientsNotification } from './countRecipientNotifications';

describe('Count Recipient Notification', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new inMemoryNotificationRepository();
    const countRecipientNotifications = new CountRecipientsNotification(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });
});
