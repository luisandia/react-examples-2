import { SET_CURRENT_USER, setCurrentUserAction } from './UserReducer'
import { currentUser } from '../../components/SignIn/useAuth'

export const setCurrentUser = (
  currentUser: currentUser,
): setCurrentUserAction => ({
  type: SET_CURRENT_USER,
  payload: { currentUser },
})
