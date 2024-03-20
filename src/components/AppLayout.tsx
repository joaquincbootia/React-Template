// AppLayout.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AppRouter from '../router';

const AppLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
};

export default AppLayout;