import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from 'theme';
import reportWebVitals from './reportWebVitals';
import { QueryProvider } from 'utils/providers/QueryProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Box display="flex">
        <CssBaseline/>
        <QueryProvider>
          <App/>
        </QueryProvider>
      </Box>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
