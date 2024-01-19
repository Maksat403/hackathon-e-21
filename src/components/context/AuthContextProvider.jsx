import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { ACTIONS_USER } from "../../helpers/const";

const authContext = createContext();
export const useAuthContext = () => useContext(authContext);

const INIT_STATE = {
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS_USER.CHECK_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const checkUser = () => {
    onAuthStateChanged(auth, (user) => {
      dispatch({
        type: ACTIONS_USER.CHECK_USER,
        payload: user,
      });
    });
  };

  useEffect(() => {
    checkUser();
  }, []);

  const authWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
    navigate("/menu");
  };

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  const values = { authWithGoogle, register, logIn, logOut, user: state.user };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
