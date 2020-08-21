import { setCurrentUserAction } from './userReducer'
import { currentUser } from '../../components/SignIn/useAuth'
import { userActionTypes } from './userTypes'

const { SET_CURRENT_USER } = userActionTypes

export const setCurrentUser = (
  currentUser: currentUser,
): setCurrentUserAction => ({
  type: SET_CURRENT_USER,
  payload: currentUser,
})
