import Swal from 'sweetalert2'
import { setLoading, removeLoading } from "../uiRedux";
import { loginSuccess, logOutStart } from '../userRedux';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { googleAuthProvider, facebookAuthProvider } from "../../firebase/firebase-config";

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
        Swal.fire('Error', "Usuario o contraseña incorrecto", "error");
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
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        dispatch(removeLoading());
        const user = userCredential.user;
        console.log(user);
        Swal.fire({
          icon: "success",
          title: "Exito",
          text: "Tu cuenta ha sido creada correctamente",
        });
      } catch (error) {
        dispatch(removeLoading());
        Swal.fire('Error', "No ha sido posible registrarse", "error");
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
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Ya existe una cuenta con este correo 📫",
        });
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