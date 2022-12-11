import React, { memo } from 'react';
import { DataGrid } from 'components/DataGrid';
import { useTableCompany } from '../hooks/useTableCompany';
import { SelectedItem } from '../types';

export const CompanyTable = memo(({ selected }: {selected: SelectedItem}) => {
  const { rows, columns, isLoading } = useTableCompany(selected);

  return (
    <DataGrid
      loading={isLoading}
      rows={rows}
      columns={columns}
    />
  );
});
