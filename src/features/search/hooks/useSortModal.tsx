import type { SortOptions } from '../types/components-types';
import type { UseSortModalProps } from '../types/hooks-types';

export function useSortModal({ selectedSort, onClose }: UseSortModalProps) {
  const handleConfirm = () => {
    onClose();
  };
  const isSelected = (sort: SortOptions) => selectedSort === sort;

  return {
    handleConfirm,
    isSelected,
  };
}
