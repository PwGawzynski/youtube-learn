type SearchParams = {
  part: string;

  forContentOwner?: boolean;
  forDeveloper?: boolean;
  forMine?: boolean;

  channelId?: string;
  channelType?: 'any' | 'show';
  eventType?: 'completed' | 'live' | 'upcoming';
  location?: string;
  locationRadius?: string;
  maxResults?: number;
  onBehalfOfContentOwner?: string;
  order?:
    | 'date'
    | 'rating'
    | 'relevance'
    | 'title'
    | 'videoCount'
    | 'viewCount';
  pageToken?: string;
  publishedAfter?: string;
  publishedBefore?: string;
  q?: string;
  regionCode?: string;
};

export type { SearchParams };
