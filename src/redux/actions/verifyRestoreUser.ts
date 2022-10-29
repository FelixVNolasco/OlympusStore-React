import { removeLoading, setLoading } from "../uiRedux";
import { getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';
import Swal from 'sweetalert2';

export const VerifyUser = () => {
    return (dispatch) => {
        const tryVerify = () => {
            try {
                dispatch(setLoading());
                const auth = getAuth();
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        sendEmailVerification(user)
                        Swal.fire({
                            icon: "success",
                            title: "Exito",
                            text: "Se ha enviado un correo de verificación",
                        });
                        dispatch(removeLoading());
                    }
                })
            } catch (error) {
                dispatch(removeLoading());
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