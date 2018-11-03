import * as React from 'react'
import { Route, Switch } from 'react-router'
import Home from './Home'
import NotFound from './NotFound'

const routes = (
  <div>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default routes