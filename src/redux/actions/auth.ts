import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, signInWithPopup, updateProfile, signOut} from "firebase/auth";
import { googleAuthProvider } from "../..//firebase/firebase-config";
import Swal from 'sweetalert2'
import { loginSuccess, logOutStart } from "../userRedux";
import { types } from "../types/types";
import { setLoading, removeLoading } from "../uiRedux";

export const loginWithEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(setLoading());
    const auth = getAuth();   
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(login(user.uid, user.displayName));
        const {uid, displayName, email, photoURL, metadata} = user;
        const { creationTime, lastSignInTime} = metadata;
        dispatch(loginSuccess( {uid, displayName, email, photoURL, creationTime, lastSignInTime} ))
        dispatch(removeLoading());
      })
      .catch( (e) => { 
        Swal.fire('Error', e.message, "error");
        dispatch(removeLoading());
      })
  }
};

export const startGoogleLogin = () =>{
  return (dispatch) => {
      const auth = getAuth();
      signInWithPopup(auth, googleAuthProvider)
          .then(({user}) =>{
            dispatch(login(user.uid, user.displayName))
            const {uid, displayName, email, photoURL, metadata} = user;
            const { creationTime, lastSignInTime} = metadata;
            dispatch(loginSuccess( {uid, displayName, email, photoURL, creationTime, lastSignInTime} ))            
            dispatch(removeLoading());
          })
          .catch ( e => { 
            Swal.fire('Error', e.message, "error");
            dispatch(removeLoading());
          });
  }
}

export const login = (uid, displayName) => {

  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};

export const logout = () => {
  return {
    type: types.logout     
  }    
}

export const registerWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    dispatch(setLoading());
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(user, { displayName: name });
        dispatch(login(user.uid, user.displayName));
        dispatch(removeLoading());
      })
      .catch((e) => {
        Swal.fire('Error', e.message, "error");
        dispatch(removeLoading());
      });
  };
};

export const LogoutAction = () => {
  return async(dispatch) => {
      const auth = getAuth();
      await signOut(auth);
      dispatch(logOutStart());
  }
}