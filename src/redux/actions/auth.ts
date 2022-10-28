import Swal from 'sweetalert2'
import { setLoading, removeLoading } from "../uiRedux";
import { loginSuccess, logOutStart } from '../userRedux';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithPopup, updateProfile, updateEmail, updatePassword, signOut, sendEmailVerification, deleteUser } from "firebase/auth";

import { googleAuthProvider, facebookAuthProvider } from "../../firebase/firebase-config";

export const loginWithEmailAndPassword = (email, password) => {
  return (dispatch) => {
    const tryLogin = () => {
      const auth = getAuth();
      dispatch(setLoading());
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          dispatch(removeLoading());
          const user = userCredential.user;
          dispatch(loginSuccess(user));
        })
        .catch((error) => {
          Swal.fire('Error', "No ha sido posible registrarse", "error");
          console.log(error);
          dispatch(removeLoading());
        });
    }
    tryLogin();
  }
}


export const VerifyUser = () => {
  return (dispatch) => {
    dispatch(setLoading());
    const auth = getAuth();
    sendEmailVerification(auth.currentUser)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Exito",
          text: "Se ha enviado un correo de verificación",
        });
        dispatch(removeLoading());
      }).catch((error) => {
        dispatch(removeLoading());
        console.log(error)
      })
  }
}


export const updateUsername = (displayName, handleLogout) => {
  return (dispatch) => {
    dispatch(setLoading());
    const auth = getAuth();
    updateProfile(auth.currentUser, displayName).then(() => {
      handleLogout();
      Swal.fire({
        icon: "success",
        title: "Exito",
        text: "Se ha actualizado su nombre correctamente",
      });
      dispatch(removeLoading());
    }
    ).catch((error) => {
      console.log(error)
    })
  }
}

export const updateUserFirebase = (newData, handleLogout) => {
  return (dispatch) => {
    dispatch(setLoading());
    const auth = getAuth();
    updateProfile(auth.currentUser, newData.displayName).then(() => {
      updateEmail(auth.currentUser, newData.email).then(() => {
        updatePassword(auth.currentUser, newData.password).then(() => {
          handleLogout();
          dispatch(removeLoading());
        })
          .catch((error) => {
            console.log(error);
          })
      })
        .catch((error) => {
          console.log(error);
        })
    }).catch((error) => {
      console.log(error)
    })
  }
}

export const signupWithEmailAndPassword = (email, password) => {
  return (dispatch) => {
    const trySignupWithLoginAndPassword = () => {
      const auth = getAuth();
      dispatch(setLoading());
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          dispatch(removeLoading());
          const user = userCredential.user;
          console.log(user);
          Swal.fire({
            icon: "success",
            title: "Exito",
            text: "Tu cuenta ha sido creada correctamente",
          });
        })
        .catch((error) => {
          dispatch(removeLoading());
          Swal.fire('Error', "No ha sido posible registrarse", "error");
          console.log(error);
          dispatch(removeLoading());
        });
    }
    trySignupWithLoginAndPassword();
  }
}

export const loginWithGoogle = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, googleAuthProvider)
      .then(({ user }) => {
        dispatch(loginSuccess(user))
      })
      .catch(e => console.log(e));
  }
}

export const loginWithFacebook = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, facebookAuthProvider)
      .then(({user}) => {
        dispatch(loginSuccess(user));
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export const RestorePasswordWithEmail = (email) => {
  return (dispatch) => {
    dispatch(setLoading());
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        dispatch(removeLoading());
        Swal.fire({
          icon: "success",
          title: "Exito",
          text: "Se ha enviado el correo de recuperación.👍🏻",
        });
      })
      .catch((error) => {
        dispatch(removeLoading());
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No ha sido posible enviar el correo de recuperación 😔",
        });
        console.log(error);
      });
  }
}

export const logout = () => {
  return (dispatch) => {
    const auth = getAuth();
    signOut(auth).then(() => {
      dispatch(logOutStart());
    }).catch((error) => {
      console.log(error);
    });
  }
}


const deleteAccount = (navigateToHome) => {
  return (dispatch) => {
    const auth = getAuth();
    const user = auth.currentUser;

    deleteUser(user).then(() => {
      Swal.fire({
        icon: "success",
        title: "Exito",
        text: "Tu cuenta ha sido actualizada correctamente",
        didClose: () => {
          // handleLogout();
        }
      });
      dispatch(removeLoading());
      navigateToHome();
    }).catch((error) => {
      dispatch(removeLoading());
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No ha sido posible eliminar la cuenta",
      });
    });
  }
}