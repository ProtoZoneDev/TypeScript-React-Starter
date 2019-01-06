import * as React from 'react'
import { Route, Redirect } from 'react-router'

export default function PrivateRoute({ component: Component, ...rest }: { component: any, path: string }) {
  // TODO: Authentication flow
  const isAuthenticated = true

  const render = (props: any) => {
    return (isAuthenticated ? (<Component {...props} />) : (<Redirect to={{ pathname: "/", state: { from: props.location } }} />))
  }

  return (
    <Route
      {...rest}
      render={render}
    />
  );
}