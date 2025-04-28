import { videoPlayerStore$ } from '@/core/state';

export function useTopControlls() {
  const handlePressMute = () => {
    videoPlayerStore$.isMuted.set((m) => !m);
    videoPlayerStore$.controlPanelAwaked.set(false);
  };

  const handlePressPip = () => {
    videoPlayerStore$.isPip.set((p) => !p);
    videoPlayerStore$.controlPanelAwaked.set(false);
  };

  const handlePressSubtitle = () => {
    videoPlayerStore$.isSubtitleModalVisible.set(true);
  };

  return {
    handlePressMute,
    handlePressPip,
    handlePressSubtitle,
  };
}
