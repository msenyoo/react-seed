/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import { hot } from 'react-hot-loader';
import Router from './Router';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Router />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};

export default hot(module)(App);
