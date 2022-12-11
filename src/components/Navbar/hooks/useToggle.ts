import { useState, useCallback } from 'react';

export const useToggle = () => {
  const [open, setOpen] = useState<boolean>(true);

  const onClick = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return { open, onClick}
}
