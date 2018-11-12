import * as React from 'react'
import { Route, Switch } from 'react-router'
import Home from './Home'
import NotFound from './NotFound'
import PrivateRoute from '../containers/PrivateRoute/PrivateRoute';
import User from './User';

const routes = (
  <div>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <PrivateRoute path="/user" component={User} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default routes