import * as React from 'react';

import {AppBar, Box, Toolbar} from '@mui/material';
import NavBurger from '../NavBurger/NavBurger'
import Logo from '../Logo/Logo';

function Navigation(props) {
  return (
      <AppBar style={{ background: '#123733'}}>
        <Toolbar className="toolbar">
          <Box sx={{ display: 'flex', width: "100%"}} >
            <Box sx={{ flexWrap: 'nowrap'}}>
              <a href="/"><Logo size="50" showCropName="true" /></a>
            </Box>
            <Box sx={{ flexGrow: '1' }}>
              <NavBurger />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
  );
}

export default Navigation;