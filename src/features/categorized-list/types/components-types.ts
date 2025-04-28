export type CategorizedListProps = {
  categoryName: string;
  maxResults?: number;
  showSeparator?: boolean;
};

export type TopBarProps = {
  headerText: string;
  onShowMorePress: () => void;
};
