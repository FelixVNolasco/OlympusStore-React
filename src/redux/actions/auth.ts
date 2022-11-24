import Swal from 'sweetalert2'
import { setLoading, removeLoading } from "../uiRedux";
import { loginSuccess, logOutStart } from '../userRedux';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { googleAuthProvider, facebookAuthProvider } from "../../firebase/firebase-config";
import { createUserMessageSuccess, loginWithEmailAndPasswordErrorMessage, signupWithEmailAndPasswordErrorMessage, loginWithFacebookErrorMessage } from '../../helpers/sweetActions';

export const loginWithEmailAndPassword = (email, password) => {
  return (dispatch) => {
    const tryLogin = async () => {
      try {
        dispatch(setLoading());
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;
        dispatch(loginSuccess(user));
        dispatch(removeLoading());
      } catch (error) {
        loginWithEmailAndPasswordErrorMessage();
        console.log(error);
        dispatch(removeLoading());
      }
    }
    tryLogin();
  }
}

export const signupWithEmailAndPassword = (email, password) => {
  return (dispatch) => {
    const trySignupWithLoginAndPassword = async () => {
      try {
        const auth = getAuth();
        dispatch(setLoading());
        await createUserWithEmailAndPassword(auth, email, password)
        dispatch(removeLoading());
        // const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        // const user = userCredential.user;        
        createUserMessageSuccess();
      } catch (error) {
        dispatch(removeLoading());
        signupWithEmailAndPasswordErrorMessage();
        console.log(error);
      }
    }
    trySignupWithLoginAndPassword();
  }
}

export const loginWithGoogle = (navigateSuccess) => {
  return (dispatch) => {
    const tryLoginWithGoogle = async () => {
      try {
        const auth = getAuth();
        const { user } = await signInWithPopup(auth, googleAuthProvider);
        dispatch(loginSuccess(user));
        navigateSuccess();
      } catch (error) {
        console.log(error);
      }
    }
    tryLoginWithGoogle();
  }
}

export const loginWithFacebook = (navigateSuccess) => {
  return (dispatch) => {
    const tryLoginWithFaceboook = async () => {
      try {
        const auth = getAuth();
        const { user } = await signInWithPopup(auth, facebookAuthProvider);
        dispatch(loginSuccess(user));
        navigateSuccess();
      } catch (error) {
        loginWithFacebookErrorMessage();
        console.log(error);
      }
    }
    tryLoginWithFaceboook();
  }
}

export const logout = () => {
  return (dispatch) => {
    const tryLogout = async () => {
      try {
        dispatch(setLoading());
        const auth = getAuth();
        await signOut(auth);
        dispatch(logOutStart());
        dispatch(removeLoading());
      } catch (error) {
        dispatch(removeLoading());
        console.log(error)
      }
    }
    tryLogout();
  }
}