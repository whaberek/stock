import React, { memo } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BusinessIcon from '@mui/icons-material/Business';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { StyledDrawer } from './Drawer.styles';
import { Copyright } from 'components/Copyright';
import { ListItemLink } from './components/ListItemLink';

interface DrawerProps {
  open: boolean,
  onClick: () => void;
}

export const Drawer =  memo(({ open, onClick }: DrawerProps) => {
  return (
    <StyledDrawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={onClick}>
          <ChevronLeftIcon/>
        </IconButton>
      </Toolbar>
      <Divider/>
      <List component="nav">
        <ListItemLink to={'/'} icon={<DashboardIcon />} primary="Dashboard" />
        <ListItemLink to={'/companies'} icon={<BusinessIcon />} primary="Companies" />
      </List>
      <Copyright open={open}/>
    </StyledDrawer>
  );
});
