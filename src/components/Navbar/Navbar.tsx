import React, { memo } from 'react';
import { AppBar } from './components/AppBar';
import { Drawer } from './components/Drawer';
import { useToggle } from './hooks/useToggle';

export const Navbar = memo(() => {
  const {open, onClick } = useToggle();

  return (
    <>
      <AppBar onClick={onClick} open={open} />
      <Drawer onClick={onClick} open={open} />
    </>
  );
});
