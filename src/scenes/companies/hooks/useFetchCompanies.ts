import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchCall } from 'utils/query/useFetch';

export const useFetchCompanies = () => {
  const {data, isLoading} = useQuery(['tickers'], () => fetchCall('/QUOTEMEDIA/TICKERS'));

  const options = useMemo(() => {
    return data?.datatable ? data.datatable.data.map(([value, _, label]: string[]) => ({
      value,
      label,
    })) : [];
  }, [data])

  return {
    options,
    isLoading
  }
}
