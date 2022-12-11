import { useCallback, useState } from 'react';
import { SelectedItem } from '../types';

export const useSelect = () => {
  const [selected, setSelected] = useState<SelectedItem | undefined>()

  const onChange = useCallback((_: any, value: SelectedItem) => {
    setSelected(value ? value : undefined)
  }, [])

  return {
    selected,
    onChange
  }
}
