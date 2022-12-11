import React, { memo } from 'react';
import Typography from '@mui/material/Typography';
import { DataGrid } from 'components/DataGrid';
import { useTablePrices } from './hooks/useTablePrices';

export const Dashboard = memo(() => {
  const {rows, columns, isLoading} = useTablePrices();

  return (
    <>
      <Typography
        sx={{ height: '70px' }}
        variant="h6"
        component="div"
      >
        End of Day US Stock Prices
      </Typography>
      <DataGrid
        loading={isLoading}
        rows={rows}
        columns={columns}
      />
    </>
  );
});
