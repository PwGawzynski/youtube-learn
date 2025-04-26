export type SearchBarProps = {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
  autoFocus?: boolean;
};
