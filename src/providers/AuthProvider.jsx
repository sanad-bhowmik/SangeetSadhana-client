import { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from 'firebase/auth';
import app from '../firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserData = async (displayName, photoURL) => {
    try {
      setLoading(true);
      const user = auth.currentUser;
      await updateProfile(user, { displayName: displayName || null, photoURL: photoURL || null });
      setUser(user);
      setLoading(false);
    } catch (error) {
      console.log(error);
      throw new Error('Failed to update user data');
    }
  };
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      // get and set token
      if (currentUser) {
        axios.post('https://sangeet-sadhana-server.vercel.app/jwt', { email: currentUser.email })
          .then(data => {
            console.log(data.data.token)
            localStorage.setItem('access-token', data.data.token)
          })
      }
      else {
        localStorage.removeItem('access-token')
      }

      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    setUser,
    signIn,
    logOut,
    updateUserData,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
