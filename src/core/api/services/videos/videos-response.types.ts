interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

interface Thumbnails {
  default?: Thumbnail;
  medium?: Thumbnail;
  high?: Thumbnail;
  standard?: Thumbnail;
  maxres?: Thumbnail;
}

interface LocalizedText {
  title: string;
  description: string;
}

interface VideoSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags?: string[];
  categoryId: string;
  liveBroadcastContent: 'live' | 'none' | 'upcoming' | string;
  defaultLanguage?: string;
  localized?: LocalizedText;
  defaultAudioLanguage?: string;
}

interface RegionRestriction {
  allowed?: string[];
  blocked?: string[];
}

interface ContentRating {
  acbRating?: string;
  agcomRating?: string;
  anatelRating?: string;
  bbfcRating?: string;
  bfvcRating?: string;
  bmukkRating?: string;
  catvRating?: string;
  catvC8?: string;
  catvfrRating?: string;
  cbfcRating?: string;
  cccRating?: string;
  cceRating?: string;
  chfilmRating?: string;
  chvrsRating?: string;
  cicfRating?: string;
  cnaRating?: string;
  cncRating?: string;
  csaRating?: string;
  cscfRating?: string;
  czfilmRating?: string;
  djctqRating?: string;
  djctqRatingReasons?: string[];
  ecbmctRating?: string;
  eefilmRating?: string;
  egfilmRating?: string;
  eirinRating?: string;
  fcbmRating?: string;
  fcoRating?: string;
  fmocRating?: string;
  fpbRating?: string;
  fpbRatingReasons?: string[];
  fskRating?: string;
  grfilmRating?: string;
  icaaRating?: string;
  ifcoRating?: string;
  ilfilmRating?: string;
  incaaRating?: string;
  kfcbRating?: string;
  kijkwijzerRating?: string;
  kmrbRating?: string;
  lsfRating?: string;
  mccaaRating?: string;
  mccypRating?: string;
  mcstRating?: string;
  mdaRating?: string;
  medietilsynetRating?: string;
  mekuRating?: string;
  mibacRating?: string;
  mocRating?: string;
  moctwRating?: string;
  mpaaRating?: string;
  mpaatRating?: string;
  mtrcbRating?: string;
  nbcRating?: string;
  nbcplRating?: string;
  nfrcRating?: string;
  nfvcbRating?: string;
  nkclvRating?: string;
  oflcRating?: string;
  pefilmRating?: string;
  rcnofRating?: string;
  resorteviolenciaRating?: string;
  rtcRating?: string;
  rteRating?: string;
  russiaRating?: string;
  skfilmRating?: string;
  smaisRating?: string;
  smsaRating?: string;
  tvpgRating?: string;
  ytRating?: 'ytAgeRestricted' | string;
}

interface VideoContentDetails {
  duration: string;
  dimension: '2d' | '3d' | string;
  definition: 'hd' | 'sd' | string;
  caption: boolean;
  licensedContent: boolean;
  regionRestriction?: RegionRestriction;
  contentRating?: ContentRating;
  projection: 'rectangular' | '360' | string;
  hasCustomThumbnail: boolean;
}

interface VideoStatus {
  uploadStatus:
    | 'deleted'
    | 'failed'
    | 'processed'
    | 'rejected'
    | 'uploaded'
    | string;
  failureReason?:
    | 'codec'
    | 'conversion'
    | 'emptyFile'
    | 'invalidFile'
    | 'tooSmall'
    | 'uploadAborted'
    | string;
  rejectionReason?:
    | 'claim'
    | 'copyright'
    | 'duplicate'
    | 'inappropriate'
    | 'legal'
    | 'length'
    | 'termsOfUse'
    | 'trademark'
    | 'uploaderAccountClosed'
    | 'uploaderAccountSuspended'
    | string;
  privacyStatus: 'private' | 'public' | 'unlisted' | string;
  publishAt?: string;
  license: 'creativeCommon' | 'youtube' | string;
  embeddable: boolean;
  publicStatsViewable: boolean;
  madeForKids?: boolean;
  selfDeclaredMadeForKids?: boolean;
  containsSyntheticMedia?: boolean;
}

interface VideoStatistics {
  viewCount: string;
  likeCount: string;
  dislikeCount?: string;
  favoriteCount?: string;
  commentCount?: string;
}

interface PaidProductPlacementDetails {
  hasPaidProductPlacement: boolean;
}

interface VideoPlayer {
  embedHtml: string;
  embedHeight?: number;
  embedWidth?: number;
}

interface VideoTopicDetails {
  topicIds?: string[];
  relevantTopicIds?: string[];
  topicCategories?: string[];
}

interface VideoLocation {
  latitude?: number;
  longitude?: number;
  altitude?: number;
}

interface VideoRecordingDetails {
  locationDescription?: string;
  location?: VideoLocation;
  recordingDate?: string;
}

interface VideoStream {
  widthPixels?: number;
  heightPixels?: number;
  frameRateFps?: number;
  aspectRatio?: number;
  codec?: string;
  bitrateBps?: string;
  rotation?:
    | 'clockwise'
    | 'counterClockwise'
    | 'none'
    | 'other'
    | 'upsideDown'
    | string;
  vendor?: string;
}

interface AudioStream {
  channelCount?: number;
  codec?: string;
  bitrateBps?: string;
  vendor?: string;
}

interface VideoFileDetails {
  fileName?: string;
  fileSize?: string;
  fileType?:
    | 'archive'
    | 'audio'
    | 'document'
    | 'image'
    | 'other'
    | 'project'
    | 'video'
    | string;
  container?: string;
  videoStreams?: VideoStream[];
  audioStreams?: AudioStream[];
  durationMs?: string;
  bitrateBps?: string;
  creationTime?: string;
}

interface ProcessingProgress {
  partsTotal?: string;
  partsProcessed?: string;
  timeLeftMs?: string;
}

interface VideoProcessingDetails {
  processingStatus?:
    | 'failed'
    | 'processing'
    | 'succeeded'
    | 'terminated'
    | string;
  processingProgress?: ProcessingProgress;
  processingFailureReason?:
    | 'other'
    | 'streamingFailed'
    | 'transcodeFailed'
    | 'uploadFailed'
    | string;
  fileDetailsAvailability?: string;
  processingIssuesAvailability?: string;
  tagSuggestionsAvailability?: string;
  editorSuggestionsAvailability?: string;
  thumbnailsAvailability?: string;
}

interface TagSuggestion {
  tag?: string;
  categoryRestricts?: string[];
}

interface VideoSuggestions {
  processingErrors?: (
    | 'archiveFile'
    | 'audioFile'
    | 'docFile'
    | 'imageFile'
    | 'notAVideoFile'
    | 'projectFile'
    | string
  )[];
  processingWarnings?: (
    | 'hasEditlist'
    | 'inconsistentResolution'
    | 'problematicAudioCodec'
    | 'problematicVideoCodec'
    | 'unknownAudioCodec'
    | 'unknownContainer'
    | 'unknownVideoCodec'
    | string
  )[];
  processingHints?: ('nonStreamableMov' | 'sendBestQualityVideo' | string)[];
  tagSuggestions?: TagSuggestion[];
  editorSuggestions?: (
    | 'audioQuietAudioSwap'
    | 'videoAutoLevels'
    | 'videoCrop'
    | 'videoStabilize'
    | string
  )[];
}

interface LiveStreamingDetails {
  actualStartTime?: string;
  actualEndTime?: string;
  scheduledStartTime?: string;
  scheduledEndTime?: string;
  concurrentViewers?: string;
  activeLiveChatId?: string;
}

interface VideoLocalizations {
  [languageCode: string]: LocalizedText;
}

interface VideoResource {
  kind: 'youtube#video';
  etag: string;
  id: string;
  snippet?: VideoSnippet;
  contentDetails?: VideoContentDetails;
  status?: VideoStatus;
  statistics?: VideoStatistics;
  paidProductPlacementDetails?: PaidProductPlacementDetails;
  player?: VideoPlayer;
  topicDetails?: VideoTopicDetails;
  recordingDetails?: VideoRecordingDetails;
  fileDetails?: VideoFileDetails;
  processingDetails?: VideoProcessingDetails;
  suggestions?: VideoSuggestions;
  liveStreamingDetails?: LiveStreamingDetails;
  localizations?: VideoLocalizations;
}

interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

interface YoutubeVideoListResponse {
  kind: 'youtube#videoListResponse';
  etag: string;
  nextPageToken?: string;
  prevPageToken?: string;
  pageInfo: PageInfo;
  items: VideoResource[];
}

export type {
  AudioStream,
  ContentRating,
  LiveStreamingDetails,
  LocalizedText,
  PageInfo,
  PaidProductPlacementDetails,
  ProcessingProgress,
  RegionRestriction,
  TagSuggestion,
  Thumbnail,
  Thumbnails,
  VideoContentDetails,
  VideoFileDetails,
  VideoLocalizations,
  VideoLocation,
  VideoPlayer,
  VideoProcessingDetails,
  VideoRecordingDetails,
  VideoResource,
  VideoSnippet,
  VideoStatistics,
  VideoStatus,
  VideoStream,
  VideoSuggestions,
  VideoTopicDetails,
  YoutubeVideoListResponse,
};
