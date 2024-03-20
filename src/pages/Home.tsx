// Home.tsx
import { Button } from '@mui/material';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <h2>Home Page</h2>
        <div>
            <Button variant="contained" color="primary">
                HOME
            </Button>
        </div>
    </div>
  );
};

export default Home;