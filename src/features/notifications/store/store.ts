import { observable } from '@legendapp/state';
import { ObservablePersistMMKV } from '@legendapp/state/persist-plugins/mmkv';
import { syncObservable } from '@legendapp/state/sync';

import type { NotificationStore } from './store-types';

export const notificationStore$ = observable<NotificationStore>({
  notificationTime: null,
  notificationId: null,
});

syncObservable(notificationStore$, {
  persist: {
    name: 'notificationStore',
    plugin: ObservablePersistMMKV,
  },
});
