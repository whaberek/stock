import React, { memo } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { StyledAppBar } from './AppBar.styles';

interface AppBarProps {
  open: boolean,
  onClick: () => void;
}

export const AppBar = memo(({ open, onClick }: AppBarProps) => {
  return (
    // TODO: Resolve "open" typing problem in future
    // @ts-ignore
      <StyledAppBar position="absolute" open={open}>
        <Toolbar sx={{ pr: '24px' }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={onClick}
            sx={{
              marginRight: '36px',
              ...(open && {display: 'none'}),
            }}
          >
            <MenuIcon/>
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{flexGrow: 1}}
          >
            Dashboard
          </Typography>
        </Toolbar>
      </StyledAppBar>
  );
});
