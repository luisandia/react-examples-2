import React from 'react'
import {
  auth,
  createUserProfileDocument,
  User,
} from '../../firebase/firebase.utils'

export const useAuth = () => {
  const [state, setState] = React.useState(() => {
    const user: User = auth.currentUser
    return { initializing: !user, user }
  })
  const onChange = React.useCallback(
    async (user: User) => {
      if (user) {
        const userRef = await createUserProfileDocument(user)
        userRef?.onSnapshot((snapshop) => {
          setState({
            ...state,
            initializing: false,
            user: { uid: snapshop.id, ...snapshop.data() },
          })
        })
      } else {
        setState({ ...state, user })
      }
    },
    [state],
  )

  React.useEffect(() => {
    // listen for auth state changes
    const unsubscribe = auth.onAuthStateChanged(onChange)
    // unsubscribe to the listener when unmounting
    return () => unsubscribe()
  }, [onChange])

  return state
}
