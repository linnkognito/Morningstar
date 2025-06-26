import { useEffect } from 'react';

export default function useDismiss(ref, isOpen, onClose, triggerRef = null) {
  useEffect(() => {
    if (!isOpen) return;

    const onClick = (e) =>
      ref.current &&
      !ref.current.contains(e.target) &&
      !triggerRef?.current?.contains(e.target) &&
      onClose();

    const onKey = (e) => e.key === 'Escape' && onClose();

    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);

    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose, ref, triggerRef]);
}
