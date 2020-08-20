import React from 'react'
import {
  auth,
  createUserProfileDocument,
  User,
} from '../../firebase/firebase.utils'

interface userProps {
  createdAt: { nanoseconds: number; seconds: number }
  displayName: string
  email: string
}

interface currentUser {
  currentUser: (userProps & { id: string }) | null
}
export const useAuth = () => {
  const [state, setState] = React.useState<currentUser>({
    currentUser: null,
  })

  const onChange = React.useCallback(
    async (user: User) => {
      if (user) {
        const userRef = await createUserProfileDocument(user)
        userRef?.onSnapshot((snapshop) => {
          setState({
            ...state,
            currentUser: {
              id: snapshop.id,
              ...(snapshop.data() as userProps),
            },
          })
        })
      } else {
        setState({ ...state, currentUser: user })
      }
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

  return state
}
