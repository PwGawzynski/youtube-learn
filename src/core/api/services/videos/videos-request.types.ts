type ChartType = 'mostPopular';

type MyRatingType = 'like' | 'dislike';

export interface YouTubeVideosQueryParams {
  part: string;
  chart?: ChartType;
  id?: string | string[];
  myRating?: MyRatingType;
  hl?: string;
  maxHeight?: number;
  maxResults?: number;
  maxWidth?: number;
  onBehalfOfContentOwner?: string;
  pageToken?: string;
  regionCode?: string;
  videoCategoryId?: string;
}
