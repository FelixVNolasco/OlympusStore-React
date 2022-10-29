import Swal from 'sweetalert2'
import { setLoading, removeLoading } from "../uiRedux";
import { loginSuccess, logOutStart } from '../userRedux';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithPopup, updateProfile, updateEmail, updatePassword, signOut, sendEmailVerification, deleteUser } from "firebase/auth";
import { googleAuthProvider, facebookAuthProvider } from "../../firebase/firebase-config";
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

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
        Swal.fire('Error', "No ha sido posible registrarse", "error");
        console.log(error);
        dispatch(removeLoading());
      }
    }
    tryLogin();
  }
}

export const VerifyUser = () => {
  return (dispatch) => {
    const tryVerify = async () => {
      try {
        dispatch(setLoading());
        const auth = getAuth();
        await sendEmailVerification(auth.currentUser)
        Swal.fire({
          icon: "success",
          title: "Exito",
          text: "Se ha enviado un correo de verificación",
        });
        dispatch(removeLoading());
      } catch (error) {
        dispatch(removeLoading());
        console.log(error)
      }
    }
    tryVerify();
  }
}

export const uploadProfilePicture = (file) => {
  return (dispatch) => {
    const tryUpdateProfilePicture = async () => {
      try {
        dispatch(setLoading());
        const auth = getAuth();
        const storage = getStorage();
        const { currentUser } = auth;
        const user = currentUser;
        if (user !== null) {
          const uid = user.uid;
          const fileRef = ref(storage, uid + ".png");
          await uploadBytes(fileRef, file);
          const photoURL = await getDownloadURL(fileRef);
          updateProfile(currentUser, { photoURL });
          dispatch(logOutStart());
          Swal.fire({
            icon: "success",
            title: "Exito",
            text: "Se ha actualizado la foto de perfil",
          })
        }
      } catch (error) {
        console.log(error);
      }
    }
    tryUpdateProfilePicture();
  }
}

export const updateUsername = (displayName) => {
  return (dispatch) => {
    const tryUpdateName = async () => {
      try {
        dispatch(setLoading());
        const auth = getAuth();
        const { currentUser } = auth;
        await updateProfile(currentUser, displayName);
        dispatch(removeLoading());
        Swal.fire({
          icon: "success",
          title: "Exito",
          text: "Se ha actualizado su nombre correctamente",
        });
      } catch (error) {
        console.log(error)
      }
    }
    tryUpdateName();
  }
}

export const updateUserFirebase = (newData, handleLogout) => {
  return (dispatch) => {
    const tryUpdateUser = async () => {
      try {
        dispatch(setLoading());
        const auth = getAuth();
        const { currentUser } = auth;
        const user = currentUser;
        if (user !== null) {
          const actualUser = user;
          await updateEmail(actualUser, newData.email)
          await updatePassword(actualUser, newData.password)
          handleLogout();
        }
        dispatch(removeLoading());
      } catch (error) {
        dispatch(removeLoading());
        console.log(error);
      }
    }
    tryUpdateUser();
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

export const RestorePasswordWithEmail = (email) => {
  return (dispatch) => {
    const tryRestorePasswordWithEmail = async () => {
      try {
        dispatch(setLoading());
        const auth = getAuth();
        await sendPasswordResetEmail(auth, email);
        dispatch(removeLoading());
        Swal.fire({
          icon: "success",
          title: "Exito",
          text: "Se ha enviado el correo de recuperación.👍🏻",
        });
      } catch (error) {
        dispatch(removeLoading());
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No ha sido posible enviar el correo de recuperación 😔",
        });
        console.log(error);
      }
    }
    tryRestorePasswordWithEmail();
  }
}

export const logout = () => {
  return (dispatch) => {
    const tryLogout = async () => {
      try {
        dispatch(setLoading());
        const auth = getAuth();
        await signOut(auth);
        dispatch (logOutStart());
        dispatch(removeLoading());
      } catch (error) {
        dispatch(removeLoading());
        console.log(error)
      }
    }
    tryLogout();
  }
}


export const deleteAccount = (navigateLoginAndLogout) => {
  return (dispatch) => {
    const tryDeleteAccount = async () => {
      try {
        dispatch(setLoading());
        const auth = getAuth();
        const user = auth.currentUser;
        await deleteUser(user);
        dispatch(logOutStart());
        dispatch(removeLoading());
        Swal.fire({
          icon: "success",
          title: "Exito",
          text: "Tu cuenta ha sido actualizada correctamente",
          didClose: () => {
            navigateLoginAndLogout();
          }
        })
      } catch (error) {
        dispatch(removeLoading());
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No ha sido posible eliminar la cuenta",
        });
      }
    }
    tryDeleteAccount();
  }
}