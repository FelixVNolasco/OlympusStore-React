import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, signInWithPopup, updateProfile, signOut, sendPasswordResetEmail } from "firebase/auth";
import { googleAuthProvider } from "../..//firebase/firebase-config";
import Swal from 'sweetalert2'
import { loginSuccess, logOutStart } from "../userRedux";
import { types } from "../types/types";
import { setLoading, removeLoading } from "../uiRedux";
import axios from 'axios';

export const restorePasswordWithEmail = (email) => {
  return (dispatch) => {
    dispatch(setLoading());
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Exito",
          text: "Se ha enviado el correo de recuperación 😁",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No ha sido posible enviar el correo de recuperación",
        });
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log(`${errorCode} : ${errorMessage}`);
      });
  }
}


export const loginWithEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(setLoading());
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        const { uid, displayName, email, photoURL, metadata } = user;
        const { creationTime, lastSignInTime } = metadata;
        dispatch(loginSuccess({ uid, displayName, email, photoURL, creationTime, lastSignInTime }))
        dispatch(removeLoading());
      })
      .catch((e) => {
        Swal.fire('Error', e.message, "error");
        dispatch(removeLoading());
      })
  }
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName))
        const { uid, displayName, email, photoURL, metadata } = user;
        const { creationTime, lastSignInTime } = metadata;
        dispatch(loginSuccess({ uid, displayName, email, photoURL, creationTime, lastSignInTime }))
        dispatch(removeLoading());
      })
      .catch(e => {
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
        Swal.fire({
          icon: "success",
          title: "Exito",
          text: "Tu cuenta ha sido creada correctamente",
        });
        dispatch(removeLoading());
      })
      .catch((e) => {
        Swal.fire('Error', e.message, "error");
        dispatch(removeLoading());
      });
  };
};

export const LogoutAction = () => {
  return async (dispatch) => {
    const auth = getAuth();
    await signOut(auth);
    dispatch(logOutStart());
  }
}

export const signup = (values: any) => {
  return (dispatch) => {
    const trySignup = async () => {
      try {
        dispatch(setLoading());
        await axios.post("https://olympus-backend.vercel.app/api/auth/signup", values);
        Swal.fire({
          icon: "success",
          title: "Exito",
          text: "Tu cuenta ha sido creada correctamente",
        });
        dispatch(removeLoading());
      } catch (error) {
        Swal.fire('Error', error, "error");
        dispatch(removeLoading());
      }
    }
    trySignup();
  }
}