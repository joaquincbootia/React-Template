// Header.tsx
import { Box } from '@mui/material';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <Box
        pb={4}
        display={{ xs: 'block' }}
        alignItems="center"
        textAlign={{ xs: 'center' }}
        justifyContent="space-between"
      >
        <h1>My App Menu</h1>
      </Box>
    </header>
  );
};

export default Header;