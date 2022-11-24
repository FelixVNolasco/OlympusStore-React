import { removeLoading, setLoading } from "../uiRedux";
import { getAuth, deleteUser, updateEmail, updatePassword, updateProfile, onAuthStateChanged } from 'firebase/auth';
import Swal from 'sweetalert2';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { deleteAccountSuccessMessage, deleteAccountErrorMessage, updateUserFirebaseSuccessMessage, updateUserFirebaseErrorMessage, updateUsernameSuccessMessage, uploadProfilePictureSuccessMessage, uploadProfilePictureErrorMessage } from '../../helpers/sweetActions';

export const deleteAccount = (navigateLoginAndLogout) => {
  return (dispatch) => {
    const tryDeleteAccount = async () => {
      try {
        dispatch(setLoading());
        const auth = getAuth();
        const user = auth.currentUser;
        await deleteUser(user);
        dispatch(removeLoading());
        deleteAccountSuccessMessage(navigateLoginAndLogout);
      } catch (error) {
        dispatch(removeLoading());
        console.log(error);
        deleteAccountErrorMessage()
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
          if (user) {
            updateEmail(user, newData.email).then(() => {
              updatePassword(user, newData.password)
            })
            dispatch(removeLoading());
            navigateLoginAndLogout();
            updateUserFirebaseSuccessMessage();
          }
        })
      } catch (error) {
        updateUserFirebaseErrorMessage();
        dispatch(removeLoading());
      }
    }
    tryUpdateUser();
  }
}


export const updateUsername = (displayName, refreshPage) => {
  return (dispatch) => {
    const tryUpdateName = async () => {
      try {
        dispatch(setLoading());
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if (user) {
            updateProfile(user, displayName).then(() => {
              dispatch(removeLoading());
              updateUsernameSuccessMessage(refreshPage);
            })
          }
        });
      } catch (error) {
        console.log(error)
      }
    }
    tryUpdateName();
  }
}


export const uploadProfilePicture = (file, refreshPage) => {
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
                  dispatch(removeLoading());
                  uploadProfilePictureSuccessMessage(refreshPage);
                })
              })
            })
          }
        })
      } catch (error) {
        uploadProfilePictureErrorMessage();
        dispatch(removeLoading());
      }
    }
    tryUpdateProfilePicture();
  }
}
