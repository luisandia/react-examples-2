import React from "react";
import { auth } from "../../firebase/firebase.utils";

export const useAuth = () => {
  const [state, setState] = React.useState(() => {
    const user = auth.currentUser;
    return { initializing: !user, user };
  });
  function onChange(user: firebase.User | null) {
    setState({ initializing: false, user });
  }

  React.useEffect(() => {
    // listen for auth state changes
    const unsubscribe = auth.onAuthStateChanged(onChange);
    // unsubscribe to the listener when unmounting
    return () => unsubscribe();
  }, []);

  return state;
};
