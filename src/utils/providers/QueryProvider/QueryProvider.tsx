import React, { memo } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const QueryProvider = memo((
  {
    children,
  }: {
    children?: React.ReactNode;
  }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
});
