import { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { cancelPurchase, getUserPurchases } from "../redux/apiCall";
import { BallTriangle } from "react-loader-spinner";
import Swal from 'sweetalert2';

export const Purchases = () => {

    const navigate = useNavigate();
    const [purchases, setPurchases] = useState<any[]>(null);
    const { currentUser } = useSelector((state: RootStateOrAny) => state.user);
    const { loading } = useSelector((state: RootStateOrAny) => state.ui);
    const { username } = currentUser;
    const dispatch = useDispatch();
    const { accessToken } = currentUser;
    const { _id } = currentUser;

    const refreshPage = () => {
        navigate(0);
    }

    useEffect(() => {
        const getPurchases = async () => {
            const data = await getUserPurchases(dispatch, _id);
            setPurchases(data);
        }
        getPurchases();
    }, [dispatch, accessToken, _id]);
    
    const handleCancelPurchase = (id: string) => {
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
                cancelPurchase(dispatch, id, _id, refreshPage);                
            }
        })
    }

    return (
        <>
            {
                !loading ?
                    (
                        <>
                            <h2 className="font-bold text-center text-xl mt-6 ">Historial de Compras</h2>
                            <div className="container mx-auto">
                                <div className="flex flex-col p-12 bg-gray-300/50 rounded-md">
                                    {
                                        purchases === undefined ?
                                            (
                                                <span className="text-xl text-center">No haz realizado ninguna compra 😅</span>
                                            ) :
                                            (
                                                purchases?.map(purchase => {
                                                    const { address, amount, createdAt, status, _id } = purchase
                                                    const { city, country, line1, postal_code, state } = address;
                                                    const { products } = purchase;
                                                    const CreationDate = new Date(createdAt);
                                                    const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;
                                                    const CreationDateParsed = CreationDate.toLocaleDateString("es-Mx", options);

                                                    return (
                                                        <div key={_id} className="flex flex-col m-2 bg-gray-300/70 p-2 rounded-md">
                                                            <div className="flex flex-col sm:flex-col md:flex-row items-center justify-between">
                                                                <div className="flex flex-col sm:flex-row text-sm w-full">
                                                                    <div className="flex flex-col m-2 md:m-4">
                                                                        <span className="text-xs">PEDIDO REALIZADO</span>
                                                                        <span>{CreationDateParsed}</span>
                                                                    </div>
                                                                    <div className="flex flex-col m-2 md:m-4">
                                                                        <span className="text-xs">TOTAL</span>
                                                                        <span>${amount}</span>
                                                                    </div>
                                                                    <div className="flex flex-col m-2 md:m-4">
                                                                        <span className="text-xs">ENVIAR A</span>
                                                                        <span>{username}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-col text-sm md:mr-4">
                                                                    <span>Orden Nº {_id}</span>
                                                                    <span className='text-red-600 cursor-pointer' onClick={() => handleCancelPurchase(_id)}>Cancelar Compra</span>
                                                                </div>
                                                            </div>
                                                            <span className="ml-4">Productos Comprados</span>
                                                            {
                                                                products.map((product) => {
                                                                    const { productId, quantity, img, title, size, price } = product;
                                                                    return (
                                                                        <div key={productId} className="flex flex-col bg-gray-300/80 m-2 p-2 rounded-md">
                                                                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-between">
                                                                                <img className="w-16 rounded-md" src={img} alt="" />
                                                                                <div className="flex flex-col text-sm">
                                                                                    <span className="text-xs">Producto:</span>
                                                                                    <Link className="text-blue-700 font-semibold" to={`/product/${productId}`}>{title}</Link>
                                                                                </div>
                                                                                <div className="flex flex-col text-sm">
                                                                                    <span className="text-xs">Cantidad:</span>
                                                                                    <span>{quantity}</span>
                                                                                </div>
                                                                                <div className="flex flex-col text-sm">
                                                                                    <span className="text-xs">Tamaño:</span>
                                                                                    <span>{size}</span>
                                                                                </div>
                                                                                <div className="flex flex-col text-sm">
                                                                                    <span className="text-xs">Precio:</span>
                                                                                    <span>${price}</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                            <div className="flex flex-col ml-4 text-sm">
                                                                <span>Dirección: {`Calle: ${line1}, Estado: ${state}, Código Postal: ${postal_code}, Ciudad: ${city}, País: ${country}`}</span>
                                                                {
                                                                    (status === "pending") ?
                                                                        (
                                                                            <div className="flex items-center mb-2">
                                                                                <div className="bg-yellow-400 w-4 h-4 rounded-full"></div>
                                                                                <div className="text-sm ml-2">Pendiente</div>
                                                                            </div>
                                                                        )
                                                                        :
                                                                        (
                                                                            <div className="flex items-center mb-2">
                                                                                <div className="bg-green-500 w-12 h-12 rounded-full"></div>
                                                                                <div className="text-sm ml-2">Entregado</div>
                                                                            </div>
                                                                        )
                                                                }
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            )
                                    }
                                </div>
                            </div>
                        </>
                    )
                    :
                    (
                        <div className='flex justify-center items-center w-full h-screen'>
                            <BallTriangle
                                height="162"
                                width="162"
                                color='#406882'
                                ariaLabel='loading' />
                        </div>
                    )
            }
        </>
    )
}
