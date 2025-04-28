export type ModalProps<T = any> = {
  visible: boolean;
  onClose: () => void;
  initialSelectedIndex?: number;
  options: Option<T>[];
  onOptionSelect: (option: Option<T>) => void;
  title?: string;
};

export type Option<T = any> = {
  label: string;
  value: T;
  selected?: boolean;
};

export type OptionProps<T = any> = Option<T> & {
  onSelect: () => void;
};
