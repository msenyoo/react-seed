/* eslint-disable import/no-named-as-default */
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  const activeStyle = { color: 'blue' };
  return (
    <div>
      <NavLink exact to="/" activeStyle={activeStyle}>
        Home
      </NavLink>
      {' | '}
      <NavLink to="/fuel-savings" activeStyle={activeStyle}>
        Demo App
      </NavLink>
      {' | '}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </div>
  );
}
