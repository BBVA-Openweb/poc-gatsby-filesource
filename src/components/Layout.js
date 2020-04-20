import React, { useState } from 'react';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import theme from '../style/theme';
import Appbar from './Appbar';
import Drawer from './Drawer';
import Footer from './Footer';
import '../style/layout.css';

export default ({ elevateAppBar = true, children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleToggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Appbar
        onToggleDrawer={handleToggleDrawer}
        elevation={Number(elevateAppBar)}
      />
      {children}
      <Footer />
      <Drawer open={isDrawerOpen} onClose={handleToggleDrawer} />
    </ThemeProvider>
  );
};
