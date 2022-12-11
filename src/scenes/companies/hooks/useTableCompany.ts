import { useEffect, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchCall } from 'utils/query/useFetch';
import { GridRowsProp } from '@mui/x-data-grid';
import { columns } from '../constants/table';
import { SelectedItem } from '../types';

export const useTableCompany = (selected: SelectedItem) => {
  const {data, isLoading, refetch} = useQuery(['prices', 'company'], () => fetchCall('/QUOTEMEDIA/PRICES', {
    ticker: selected.value,
  }));

  useEffect(() => {
    refetch();
  }, [selected])

  const rows: GridRowsProp = useMemo(() => {
    return data?.datatable ? data.datatable.data.map((row: any) => ({
      id: `${row[0]}_${row[1]}`,
      ticker: row[0],
      date: row[1],
      open: row[2],
      high: row[3],
      low: row[4],
      close: row[5],
      volume: row[6],
      dividend: row[7],
      split: row[8],
      adj_open: row[9],
      adj_high: row[10],
      adj_low:row[11],
      adj_close: row[12],
      adj_volume: row[13],
    })) : [];
  }, [data])

  return {
    rows,
    columns,
    isLoading,
  }
}
