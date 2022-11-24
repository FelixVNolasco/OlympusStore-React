import Swal from 'sweetalert2';
import { cleanCart, removeProduct } from '../redux/cartRedux';
import { deleteAccount } from '../redux/actions/updateUser';
import { cancelPurchase } from '../redux/apiCall';

export const handleCleanCart = async (dispatch) => {
    Swal.fire({
        title: 'Limpiar Carrito',
        text: "¿Deseas quitar todos los productos?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: "No"
    }).then((result) => {
        if (result.isConfirmed) {
            dispatch(cleanCart({
                products: [],
                quantity: 0,
                total: 0
            }));
        }
    })
}

export const handleRemoveProduct = async (product, dispatch) => {
    Swal.fire({
        title: 'Remover Producto',
        text: "¿Deseas remover este producto?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: "No"
    }).then((result) => {
        if (result.isConfirmed) {
            dispatch(removeProduct(product));
        }
    })
}

export const handleDelete = async (dispatch, navigateLoginAndLogout) => {
    Swal.fire({
        title: '¿Estas seguro que quieres eliminar tu cuenta?',
        text: "Esta acción no es reversible",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar',
        cancelButtonText: "No"
    }).then((result) => {
        if (result.isConfirmed) {
            dispatch(deleteAccount(navigateLoginAndLogout));
        }
    })
}

export const handleCancelPurchase = (id: string, dispatch, refreshPage) => {
    Swal.fire({
        title: '¿Estas seguro que quieres eliminar esta compra?',
        text: "Esta acción no es reversible",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, cancelar compra',
        cancelButtonText: "No"
    }).then((result) => {
        if (result.isConfirmed) {
            cancelPurchase(dispatch, id, refreshPage);
        }
    })
}

export const successRestorePwdMessage = (navigate) => {
    Swal.fire({
        icon: "success",
        title: "Exito",
        text: "Se ha restaurado correctamente tu contraseña",
        confirmButtonColor: "3085d6",
        confirmButtonText: "Ok",
        didClose: () => navigate("/auth/login")
    });
}

export const successCancelPurchaseMessage = (refreshPage) => {
    Swal.fire({
        icon: "success",
        title: "Exito",
        text: "Tu compra ha sido cancelada correctamente",
        confirmButtonColor: "3085d6",
        confirmButtonText: "Ok",
        didClose: () => refreshPage()
    });
}

export const addProductMessage = () => {
    Swal.fire({
        icon: "success",
        title: "Exito",
        text: "Se ha agregado correctamente el producto",
    });
}

export const warningChooseSize = () => {
    Swal.fire({
        icon: "warning",
        title: "Advertencia",
        text: "Debes escoger un número",
    });
}

export const warningExistingProductCart = () => {
    Swal.fire({
        icon: "warning",
        title: "Advertencia",
        text: "Este producto ya existe en tu carrito de compras",
    });
}

export const createUserMessageSuccess = () => {
    Swal.fire({
        icon: "success",
        title: "Exito",
        text: "Tu cuenta ha sido creada correctamente",
    });
}

export const loginWithEmailAndPasswordErrorMessage = () => {
    Swal.fire({
        icon: "error",
        title: "Error",
        text: "Usuario o contraseña incorrecto",
    });
}

export const signupWithEmailAndPasswordErrorMessage = () => {
    Swal.fire(
        {
            icon: "error",
            title: "Error",
            text: "No ha sido posible registrarse"
        });
}

export const loginWithFacebookErrorMessage = () => {
    Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ya existe una cuenta con el correo asociado 📫",
    });
}

export const deleteAccountSuccessMessage = (navigateLoginAndLogout) => {
    Swal.fire({
        icon: "success",
        title: "Exito",
        text: "Tu cuenta ha sido actualizada correctamente",
        didClose: () => navigateLoginAndLogout()
    })
}

export const deleteAccountErrorMessage = () => {
    Swal.fire({
        icon: "error",
        title: "Error",
        text: "No ha sido posible eliminar la cuenta",
    });
}

export const updateUserFirebaseSuccessMessage = () => {
    Swal.fire({
        icon: "success",
        title: "Exito",
        text: "Se ha actualizado tu cuenta correctamente",
    });
}

export const updateUserFirebaseErrorMessage = () => {
    Swal.fire({
        icon: "error",
        title: "Error",
        text: "No ha sido posible actualizar tu cuenta",
    });
}

export const updateUsernameSuccessMessage = (refreshPage) => {
    Swal.fire({
        icon: "success",
        title: "Exito",
        text: "Se ha actualizado su nombre correctamente",
        didClose: () => refreshPage()
    });
}

export const uploadProfilePictureSuccessMessage = (refreshPage) => {
    Swal.fire({
        icon: "success",
        title: "Exito",
        text: "Se ha actualizado la foto de perfil",
        didClose: () => refreshPage()
    })
}

export const uploadProfilePictureErrorMessage = () => {
    Swal.fire({
        icon: "error",
        title: "Error",
        text: "No ha sido posible actualizar tu cuenta",
    });
}

export const VerifyUserSuccessMessage = () => {
    Swal.fire({
        icon: "success",
        title: "Exito",
        html: "<span>Se ha enviado el correo de verificaciónn</span> <br>" +
            "<span>Por favor revisa tu bandeja de SPAM</span>"
    });
}

export const VerifyUserErrorMessage = () => {
    Swal.fire({
        icon: "error",
        title: "Error",
        text: "No ha sido posible enviar el correo de verificación"
    });
}

export const RestorePasswordWithEmailSuccessMessage = () => {
    Swal.fire({
        icon: "success",
        title: "Exito",
        html: "<span>Se ha enviado el correo de recuperación</span> <br>" +
            "<span>Por favor revisa tu bandeja de SPAM</span>"
    });
}

export const RestorePasswordWithEmailErrorMessage = () => {
    Swal.fire({
        icon: "error",
        title: "Error",
        text: "No ha sido posible enviar el correo de recuperación 😔",
    });
}