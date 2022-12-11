import Swal from 'sweetalert2';
import { deleteAccount } from '../redux/actions/updateUser';

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