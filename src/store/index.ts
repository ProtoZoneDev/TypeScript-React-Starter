import { applyMiddleware, createStore, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import reducer from './reducers';
import { createBrowserHistory } from 'history'
import Config from '../config/debugConfig'

const history = createBrowserHistory()
const createStoreFunction = Config.useReactotron ? console.tron.createStore : createStore
const store = createStoreFunction(
  connectRouter(history)(reducer),
  compose(
    applyMiddleware(thunk),
    applyMiddleware(routerMiddleware(history))
  )
)

export { history }

export default store