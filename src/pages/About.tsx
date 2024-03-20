// About.tsx
import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div>
      <h2>About Page</h2>
      <div>
            <Link to="/">
                <Button variant="contained" color="primary">
                    Go to home page
                </Button>
            </Link>
        </div>
    </div>
  );
};

export default About;