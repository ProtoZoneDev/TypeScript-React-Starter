import { combineReducers } from 'redux'
import { IStoreState } from '../types/index'

import rootReducer from './rootReducer'

export default combineReducers<IStoreState>({
  root: rootReducer
})