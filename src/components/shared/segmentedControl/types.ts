export type SegmentedControlProps = {
  segments: string[];
  defaultActiveIndex?: number;
  onChange?: (selectedIndex: number) => void;
  className?: string;
};

export type UseSegmentedControlProps = Omit<
  SegmentedControlProps,
  'className' | 'segments'
>;
