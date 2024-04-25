import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Home Page</h2>
      <div>
        <Link to="/about">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go to About Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
