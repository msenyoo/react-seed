/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AboutPage from '../containers/AboutPage/AboutPage';
import FuelSavingsPage from '../containers/FuelSavings/FuelSavingsPage';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/fuel-savings" component={FuelSavingsPage} />
      <Route path="/about" component={AboutPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default Router;
