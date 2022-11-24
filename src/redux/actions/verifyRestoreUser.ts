import { removeLoading, setLoading } from "../uiRedux";
import { getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';
import { VerifyUserSuccessMessage, VerifyUserErrorMessage, RestorePasswordWithEmailSuccessMessage, RestorePasswordWithEmailErrorMessage } from '../../helpers/sweetActions';

export const VerifyUser = () => {
    return (dispatch) => {
        const tryVerify = () => {
            try {
                dispatch(setLoading());
                const auth = getAuth();
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        sendEmailVerification(user)
                        VerifyUserSuccessMessage();
                        dispatch(removeLoading());
                    }
                })
            } catch (error) {
                dispatch(removeLoading());
                VerifyUserErrorMessage();
                console.log(error)
            }
        }
        tryVerify();
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
                RestorePasswordWithEmailSuccessMessage();
            } catch (error) {
                dispatch(removeLoading());
                RestorePasswordWithEmailErrorMessage();
                console.log(error);
            }
        }
        tryRestorePasswordWithEmail();
    }
}