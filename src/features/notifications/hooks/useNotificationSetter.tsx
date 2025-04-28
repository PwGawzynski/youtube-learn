import { currentTime } from '@legendapp/state/helpers/time';
import { use$ } from '@legendapp/state/react';
import { useEffect } from 'react';

import { notificationStore$ } from '../store/store';
import {
  cancelPushNotification,
  handlePushNotification,
  requestNotificationPermission,
  scheduleDailyPushNotification,
} from '../utils/notifications';

export default function useNotificationSetter() {
  const isNotificationEnabled = use$(
    () => !!notificationStore$.notificationId.get(),
  );

  const handleNotificationChange = async (isEnabled: boolean) => {
    if (!isEnabled) {
      notificationStore$.notificationTime.set(null);
      cancelPushNotification(notificationStore$.notificationId.get());
      notificationStore$.notificationId.set(null);
      return;
    }

    const permissionGranted = await requestNotificationPermission();
    if (!permissionGranted) {
      return;
    }
    if (!notificationStore$.notificationTime.get()) {
      notificationStore$.notificationTime.set(currentTime.get());
    }
    notificationStore$.notificationId.set(
      await scheduleDailyPushNotification({
        title: 'Learning Reminder',
        body: "Don't forget to learn today!",

        time: {
          hour: notificationStore$.notificationTime.get().getHours(),
          minute: notificationStore$.notificationTime.get().getMinutes(),
        },
      }),
    );
  };

  useEffect(() => {
    handlePushNotification();
  }, []);

  return {
    isNotificationEnabled,
    handleNotificationChange,
  };
}
