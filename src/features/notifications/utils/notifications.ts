import * as Notifications from 'expo-notifications';
import { Alert } from 'react-native';

export async function requestNotificationPermission() {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== 'granted') {
    Alert.alert(
      'Permission not granted!',
      'Please enable notifications in settings to use this feature',
    );
  }
  return status === 'granted';
}

export async function scheduleDailyPushNotification({
  title,
  body,
  time,
}: {
  title: string;
  body: string;
  time: { hour: number; minute: number };
}): Promise<string> {
  return Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      ...time,
    },
  });
}

export async function cancelAllPushNotifications() {
  await Notifications.cancelAllScheduledNotificationsAsync();
}

export async function cancelPushNotification(id: string) {
  await Notifications.cancelScheduledNotificationAsync(id);
}

export function handlePushNotification() {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldPlaySound: true,
      shouldSetBadge: true,
      shouldShowBanner: true,
      shouldShowList: true,
    }),
  });
}
