// Footer.tsx
import { Box } from '@mui/material';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <Box
        pb={4}
        display={{ xs: 'block' }}
        alignItems="center"
        textAlign={{ xs: 'center' }}
        justifyContent="space-between"
      >
        <p>&copy; 2024 My App</p>
      </Box>
    </footer>
  );
};

export default Footer;