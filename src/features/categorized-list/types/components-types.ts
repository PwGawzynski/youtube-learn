export type CategorizedListProps = {
  categoryName: string;
  maxResults?: number;
};

export type TopBarProps = {
  headerText: string;
  onShowMorePress: () => void;
};
