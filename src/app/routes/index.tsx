import * as React from 'react'
import { Route } from 'react-router'
import Home from './Home/index'

const routes = (
  <div>
    <Route exact={true} path="/" component={Home} />
  </div>
)

export default routes