import React from 'react'
import { CurrentUser } from 'src/redux/User/userSlice'
import {
  auth,
  createUserDocumentFromAuth,
  User,
} from '../../firebase/firebase.utils'

// interface userProps {
//   createdAt: { nanoseconds: number; seconds: number }
//   displayName: string
//   email: string
// }
// export interface CurrentUser extends userProps {
//   id: string
// }
// export type InternalUser = User | undefined

// export type currentUser = {
//   currentUser: InternalUser
// }
export const useAuth = () => {
  // const [state, setState] = React.useState<currentUser>({
  //   currentUser: null,
  // })
  const [currentUser, setCurrentUser] = React.useState<CurrentUser>()

  const onChange = React.useCallback(
    async (user: User) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      setCurrentUser({ currentUser: user })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  React.useEffect(() => {
    // listen for auth state changes
    const unsubscribe = auth.onAuthStateChanged(onChange)
    // unsubscribe to the listener when unmounting
    return () => unsubscribe()
  }, [onChange])

  return currentUser
}
