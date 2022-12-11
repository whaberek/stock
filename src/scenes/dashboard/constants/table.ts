import { GridColDef } from '@mui/x-data-grid';

export const columns: GridColDef[] = [
  {field: 'ticker', headerName: 'ticker',},
  {field: 'date', headerName: 'date'},
  {field: 'open', headerName: 'open'},
  {field: 'high', headerName: 'high'},
  {field: 'low', headerName: 'low'},
  {field: 'close', headerName: 'close'},
  {field: 'volume', headerName: 'volume'},
  {field: 'dividend', headerName: 'dividend'},
  {field: 'split', headerName: 'split'},
  {field: 'adj_open', headerName: 'adj_open'},
  {field: 'adj_high', headerName: 'adj_high'},
  {field: 'adj_low', headerName: 'adj_low'},
  {field: 'adj_close', headerName: 'adj_close'},
  {field: 'adj_volume', headerName: 'adj_volume'},
];
