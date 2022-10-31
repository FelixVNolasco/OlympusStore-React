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
                            html: "<span>Se ha enviado el correo de verificaciónn</span> <br>" +
                            "<span>Por favor revisa tu bandeja de SPAM</span>"
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
                    html: "<span>Se ha enviado el correo de recuperación</span> <br>" +
                    "<span>Por favor revisa tu bandeja de SPAM</span>"
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