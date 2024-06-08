import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
    GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import app from '../firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ( {children}) => {


    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);
  

    // create user===============================
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    }
  
    // sign in email and pass================
    const signIn = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password);
    }
  
    // sign in google ===================
    const signInWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    }

    const signInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }
    
    // logout =========================================
    const logOut = async () => {
      setLoading(true);
    //   await axios(`${import.meta.env.VITE_API_URL}/logout`, {withCredentials: true});
      return signOut(auth);
    }
  
    // update profile user============================
    const updateUserProfile = (name, photo) => {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo
      })
    }
  
    // onAuthStateChange======================
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        // console.log('CurrentUser-->', currentUser);
        setLoading(false);
      })
      return () => {
        return unsubscribe();
      }
    }, [])
  
    const authInfo = {
      user,
      setUser,
      loading,
      setLoading,
      createUser,
      signIn,
      signInWithGoogle,
      signInWithGithub,
      logOut,
      updateUserProfile,
    }
  
    return (
        <AuthContext.Provider 
        value={authInfo}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


AuthProvider.propTypes = {
    children: PropTypes
  };