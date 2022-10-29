import { removeLoading, setLoading } from "../uiRedux";
import { getAuth, deleteUser, updateEmail, updatePassword, updateProfile, onAuthStateChanged } from 'firebase/auth';
import Swal from 'sweetalert2';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { logOutStart } from "../userRedux";

export const deleteAccount = (navigateLoginAndLogout) => {
    return (dispatch) => {
        const tryDeleteAccount = async () => {
            try {
                dispatch(setLoading());
                const auth = getAuth();
                const user = auth.currentUser;
                await deleteUser(user);
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



export const updateUserFirebase = (newData, navigateLoginAndLogout) => {
    return (dispatch) => {
        const tryUpdateUser = () => {
            try {
                dispatch(setLoading());
                const auth = getAuth();
                onAuthStateChanged(auth, (user) => {
                  if(user) {
                    updateEmail(user, newData.email).then(() => {
                      updatePassword(user, newData.password)
                    })                    
                    dispatch(removeLoading());
                    navigateLoginAndLogout(); 
                    Swal.fire({
                      icon: "success",
                      title: "Exito",
                      text: "Se ha actualizado tu cuenta correctamente",
                  });
                  }           
                })              
            } catch (error) {
              Swal.fire({
                icon: "success",
                title: "Error",
                text: "No ha sido posible actualizar tu cuenta",
              });
              dispatch(removeLoading());
            }
        }
        tryUpdateUser();
    }
}


export const updateUsername = (displayName, navigateLoginAndLogout) => {
    return (dispatch) => {
        const tryUpdateName = async () => {
            try {
                dispatch(setLoading());
                const auth = getAuth();
                onAuthStateChanged(auth, (user) => {
                  if(user) {
                    updateProfile(user, displayName)
                    dispatch(removeLoading());
                    Swal.fire({
                          icon: "success",
                          title: "Exito",
                          text: "Se ha actualizado su nombre correctamente",
                      });
                  }
                });
                navigateLoginAndLogout();
            } catch (error) {
                console.log(error)
            }
        }
        tryUpdateName();
    }
}


export const uploadProfilePicture = (file, navigateLoginAndLogout) => {
  return (dispatch) => {
    const tryUpdateProfilePicture = () => {
      try {
        dispatch(setLoading());
        const auth = getAuth();
        const storage = getStorage();
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const fileRef = ref(storage, user.uid + ".png");
            uploadBytes(fileRef, file).then(() => {
              getDownloadURL(fileRef).then((photoURL) => {
                updateProfile(user, { photoURL }).then(() => {
                  navigateLoginAndLogout();
                  Swal.fire({
                    icon: "success",
                    title: "Exito",
                    text: "Se ha actualizado la foto de perfil",
                  })
                })
              })
            })
          }
        })
      } catch (error) {
        Swal.fire({
          icon: "success",
          title: "Error",
          text: "No ha sido posible actualizar tu cuenta",
        });
        dispatch(removeLoading());
      }
    }
    tryUpdateProfilePicture();
  }
}
  