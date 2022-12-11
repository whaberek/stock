import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export const Container = styled(Paper)(() => ({
  height: 'calc(100vh - 104px)',
  width: 'calc(100% - 40px)',
  padding: 20,
  margin: 20,
  overflow: 'auto',
}));
