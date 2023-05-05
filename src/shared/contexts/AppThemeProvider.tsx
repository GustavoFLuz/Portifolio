import { useMemo } from 'react';
import { ThemeProvider } from '@mui/material';

import { DarkTheme } from '../themes';
import React from 'react';


export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useMemo(() => DarkTheme, []);

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};
