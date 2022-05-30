import { createSlice } from '@reduxjs/toolkit'
import { User } from 'src/firebase/firebase.utils'
// import { currentUser } from '../../components/SignIn/useAuth'

export interface CurrentUser {
  currentUser?: User
}

export interface setCurrentUserAction {
  payload: CurrentUser| undefined
}

const initialState: CurrentUser = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action: setCurrentUserAction) => {
      state.currentUser = action.payload?.currentUser
    },
  },
})

export const { setCurrentUser } = userSlice.actions
