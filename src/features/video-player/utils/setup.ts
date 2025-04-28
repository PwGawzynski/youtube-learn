import type { StyleProp, ViewStyle } from 'react-native';
import type { TextTracks } from 'react-native-video';
import { SelectedTrackType, TextTrackType } from 'react-native-video';

export const FORWARD_TIME = 10;
export const BACKWARD_TIME = 10;
export const FADE_DURATION = 600;
export const SLEEP_TIME = 3000;

export const textTracks: TextTracks = [
  {
    title: 'English CC',
    language: 'en',
    type: TextTrackType.VTT,
    uri: 'https://bitdash-a.akamaihd.net/content/sintel/subtitles/subtitles_en.vtt',
  },
  {
    title: 'Spanish CC',
    language: 'es',
    type: TextTrackType.VTT,
    uri: 'https://bitdash-a.akamaihd.net/content/sintel/subtitles/subtitles_es.vtt',
  },
  {
    title: 'French CC',
    language: 'fr',
    type: TextTrackType.VTT,
    uri: 'https://bitdash-a.akamaihd.net/content/sintel/subtitles/subtitles_fr.vtt',
  },
  {
    title: 'German CC',
    language: 'de',
    type: TextTrackType.VTT,
    uri: 'https://bitdash-a.akamaihd.net/content/sintel/subtitles/subtitles_de.vtt',
  },
];

export const source = {
  uri: 'https://bitmovin-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
  textTracks,
};

export const selectedTextTrack = {
  type: SelectedTrackType.LANGUAGE,
  value: 'en',
};

export const subtitleStyle = {
  paddingBottom: 50,
  subtitlesFollowVideo: true,
};

export const videoStyle: StyleProp<ViewStyle> = {
  width: '100%',
  height: '80%',
};
