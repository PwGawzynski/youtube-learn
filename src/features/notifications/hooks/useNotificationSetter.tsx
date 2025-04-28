import { currentTime } from '@legendapp/state/helpers/time';
import { use$ } from '@legendapp/state/react';
import { useEffect } from 'react';
import Toast from 'react-native-toast-message';

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
      Toast.show({
        type: 'success',
        text1: 'Notification disabled',
        text2: 'You will no longer receive notifications',
      });
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
    Toast.show({
      type: 'success',
      text1: 'Notification enabled',
      text2: 'You will receive a notification every day at the time you set',
    });
  };

  useEffect(() => {
    handlePushNotification();
  }, []);

  return {
    isNotificationEnabled,
    handleNotificationChange,
  };
}
