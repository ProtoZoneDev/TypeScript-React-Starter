import { Action, applyMiddleware, createStore, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import reducer from './reducers';
import { IStoreState } from './types';
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()
const store = createStore<IStoreState, Action, any, any>(
  connectRouter(history)(reducer),
  compose(
    applyMiddleware(thunk),
    applyMiddleware(
      routerMiddleware(history)
    )
  )
)

export { history }

export default store