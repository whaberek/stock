import React, { memo } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'components/Link';

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
}

export const ListItemLink = memo(({icon, primary, to}: ListItemLinkProps) => {
  return (
    <ListItemButton component={Link} to={to}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary}/>
    </ListItemButton>
  );
});
