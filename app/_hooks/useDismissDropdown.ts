'use client';

import { useEffect, RefObject } from 'react';

interface UseDismissDropdownProps {
  dropdownRef: RefObject<HTMLElement> | null;
  onDismiss: () => void;
}

export default function useDismissDropdown({
  dropdownRef,
  onDismiss,
}: UseDismissDropdownProps) {
  useEffect(() => {
    if (!dropdownRef) return;

    const handleClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        onDismiss();
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [dropdownRef, onDismiss]);
}
