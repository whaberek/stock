import React, { memo } from 'react';
import { DataGrid as MUIDataGrid, DataGridProps as MUIDataGridProps } from '@mui/x-data-grid';
import LinearProgress from '@mui/material/LinearProgress';
import { GridOverlay } from './components/GridOverlay';

interface DataGridProps extends MUIDataGridProps {
  title?: string;
}

export const DataGrid = memo(({title, rows, columns, loading, ...rest}: DataGridProps) => {
  return (
    <MUIDataGrid
      {...rest}
      sx={{height: 'calc(100% - 70px)'}}
      components={{
        LoadingOverlay: LinearProgress,
        NoRowsOverlay: GridOverlay,
      }}
      loading={loading}
      rows={rows}
      columns={columns}
    />
  );
});
