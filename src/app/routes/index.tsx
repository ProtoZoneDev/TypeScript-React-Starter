import * as React from 'react'
import { Route, Switch } from 'react-router'
import Home from './Home/Home'
import NotFound from './NotFound/NotFound'
import User from './User/User';
import PrivateRoute from '../containers/PrivateRoute/PrivateRoute';
import MainLayout from '../layout/MainLayout';

const routes = (
  <MainLayout>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <PrivateRoute path="/user" component={User} />
      <Route component={NotFound} />
    </Switch>
  </MainLayout>
)

export default routes