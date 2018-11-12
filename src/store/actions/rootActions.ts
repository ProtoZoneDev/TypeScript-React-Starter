import { ROOT_LOAD_FINISH, ROOT_LOAD_REQUEST } from '../types/rootTypes'
import { Dispatch } from 'redux';

function rootLoading(): Function {
  return (dispatch: Dispatch, getState: Function) => {
    dispatch({ type: ROOT_LOAD_REQUEST })
    setTimeout(() => dispatch({ type: ROOT_LOAD_FINISH }), 1000)
  }
}

export {
  rootLoading
}