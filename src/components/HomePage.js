import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>React Seed</h1>

      <h2>Get Started</h2>
      <ol>
        <li>
          Review the <Link to="/fuel-savings">demo app</Link>
        </li>
        <li>Remove the demo and start coding: npm run remove-demo</li>
      </ol>
    </div>
  );
};

export default HomePage;
