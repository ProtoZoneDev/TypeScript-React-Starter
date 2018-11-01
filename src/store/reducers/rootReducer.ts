import { ROOT_LOAD_FINISH, ROOT_LOAD_REQUEST } from '../types/rootTypes'

export interface IRootReducer {
  rootLoading: boolean
}

const INITIAL_STATE: IRootReducer = {
  rootLoading: false
}

export default function rootReducer(state = INITIAL_STATE, action: { type: string }) {
  switch (action.type) {
    case ROOT_LOAD_REQUEST:
      return { ...state, rootLoading: true }
    case ROOT_LOAD_FINISH:
      return { ...state, rootLoading: false }
    default:
      return state
  }
}