import React from 'react';
import { Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Route from './Route';

import Header from '../components/Header/Header'

const AuthAppRoutes: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/dashboard" component={Dashboard} isPrivate />
      </Switch>
    </>
  );
};

export default AuthAppRoutes;
