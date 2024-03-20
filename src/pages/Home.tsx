// Home.tsx
import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h2>Home Page</h2>
        <div>
            <Link to="/about">
                <Button variant="contained" color="primary">
                    Go to about page
                </Button>
            </Link>
        </div>
    </div>
  );
};

export default Home;