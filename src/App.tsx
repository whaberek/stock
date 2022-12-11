import React, { memo } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Navbar } from 'components/Navbar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'App.styles';
import { Dashboard } from 'scenes/dashboard';
import { Companies } from 'scenes/companies';

export const App = memo(() => {
  return (
    <HashRouter>
      <Navbar />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) => theme.palette.grey[100],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar/>
        <Container>
          <Routes>
            <Route path="/stock/" element={<Dashboard />} />
            <Route path="/stock/companies" element={<Companies />} />
          </Routes>
        </Container>
      </Box>
    </HashRouter>
  );
});
