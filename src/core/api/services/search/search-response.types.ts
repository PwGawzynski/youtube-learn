type Thumbnail = {
  url: string;
  width: number;
  height: number;
};

type Thumbnails = {
  default?: Thumbnail;
  medium?: Thumbnail;
  high?: Thumbnail;
  standard?: Thumbnail;
  maxres?: Thumbnail;
};

type Snippet = {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: 'upcoming' | 'live' | 'none';
};

type Id = {
  kind: string;
  videoId?: string;
  channelId?: string;
  playlistId?: string;
};

type Item = {
  kind: 'youtube#searchResult';
  etag: string;
  id: Id;
  snippet: Snippet;
};

type PageInfo = {
  totalResults: number;
  resultsPerPage: number;
};

type SearchListResponse = {
  kind: 'youtube#searchListResponse';
  etag: string;
  nextPageToken?: string;
  prevPageToken?: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: Item[];
};

export type {
  Id,
  Item,
  PageInfo,
  SearchListResponse,
  Snippet,
  Thumbnail,
  Thumbnails,
};
