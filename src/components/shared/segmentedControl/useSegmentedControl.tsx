import { useState } from 'react';

import type { UseSegmentedControlProps } from './types';

export const useSegmentedControl = ({
  defaultActiveIndex = 0,
  onChange,
}: UseSegmentedControlProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  const handleSegmentClick = (index: number) => {
    setActiveIndex(index);
    onChange?.(index);
  };

  return { activeIndex, handleSegmentClick };
};
