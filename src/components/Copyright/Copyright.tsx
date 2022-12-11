import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { StyledBox } from './Copyright.styles';

export const Copyright = ({ open }: { open: boolean }) => {
  return (
    <StyledBox>
      <Typography marginTop={1} variant="body2" color="text.secondary" align="center">
        <Link color="inherit" href="https://docs.data.nasdaq.com/docs/getting-started">
          { open ? 'Nasdaq API' : 'API' }
        </Link>
      </Typography>
    </StyledBox>
  );
};
