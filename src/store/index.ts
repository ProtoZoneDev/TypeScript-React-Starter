import { applyMiddleware, createStore, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import Reactotron from '../config/reactotronConfig'
import thunk from 'redux-thunk'
import reducer from './reducers';
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()
const createStoreFunction = process.env.NODE_ENV !== 'production' ? Reactotron.createStore : createStore
const store = createStoreFunction(
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