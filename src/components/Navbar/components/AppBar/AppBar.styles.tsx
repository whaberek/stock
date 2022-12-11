import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';

const DRAWER_WIDTH = 240;

export const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
  // TODO: Resolve "open" typing problem in future
  // @ts-ignore
})(({ theme, open }: any) => {
  return ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: DRAWER_WIDTH,
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  });
});
