import Swal from 'sweetalert2';

export const exceededProductsAlert = () => {
    Swal.fire({
        title: 'Número de productos excedido',
        text: "No puedes agregar más de 5 veces un mismo producto",
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
    })
}