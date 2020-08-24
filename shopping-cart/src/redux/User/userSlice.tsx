import { createSlice } from '@reduxjs/toolkit'
import { currentUser } from '../../components/SignIn/useAuth'

export interface setCurrentUserAction {
  payload: currentUser
}

const initialState: currentUser = {
  currentUser: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action: setCurrentUserAction) => {
      state.currentUser = action.payload.currentUser
    },
  },
})

export const { setCurrentUser } = userSlice.actions
