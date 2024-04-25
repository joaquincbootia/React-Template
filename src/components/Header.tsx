import React from 'react';
import ResponsiveAppBar from './Menu';

const Header: React.FC = () => {
  return (
    <div className="sticky top-0 z-10">
      <ResponsiveAppBar />
    </div>
  );
};

export default Header;