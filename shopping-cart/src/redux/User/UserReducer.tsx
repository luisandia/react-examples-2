import { Action } from 'redux'
import { currentUser } from '../../components/SignIn/useAuth'

const INITIAL_STATE: currentUser = {
  currentUser: null,
}

export const SET_CURRENT_USER = 'SET_CURRENT_USER'

export interface setCurrentUserAction extends Action<typeof SET_CURRENT_USER> {
  payload: currentUser
}

const userReducer = (
  state = INITIAL_STATE,
  action: setCurrentUserAction,
): currentUser => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state.currentUser,
        ...action.payload,
      }

    default:
      return state
  }
}

export default userReducer