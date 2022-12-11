import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

export const StyledBox = styled(Box)(() => ({
  height: '70px',
  display: 'flex',
  alignItems: 'center',
}));

export const StyledStack = styled(Stack)(() => ({
  width: '100%',
}));
