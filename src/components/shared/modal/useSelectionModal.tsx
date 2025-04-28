import { useState } from 'react';

import type { ModalProps } from './types';

export function useSelectionModal<T>({
  onClose,
  options,
  onOptionSelect,
  initialSelectedIndex = 0,
}: ModalProps<T>) {
  const [selectedOption, setSelectedOption] = useState<T | null>(
    options[initialSelectedIndex]?.value || null,
  );

  const handleOptionSelect = (optionValue: T) => {
    setSelectedOption(optionValue);
    const selectedOpt = options.find((option) => option.value === optionValue);
    if (selectedOpt) {
      onOptionSelect(selectedOpt);
    }
  };

  const handleConfirm = () => {
    onClose();
  };

  const isSelected = (optionValue: T) => {
    return JSON.stringify(optionValue) === JSON.stringify(selectedOption);
  };

  return {
    handleConfirm,
    isSelected,
    handleOptionSelect,
    selectedOption,
  };
}
