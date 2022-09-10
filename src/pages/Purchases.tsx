import { NavbarComponent } from "../components/Shared/Navbar/NavbarComponent";
import { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { removeLoading, setLoading } from "../redux/uiRedux";
import axios from "axios";

export const Purchases = () => {

    const [purchases, setPurchases] = useState([]);
    const { currentUser } = useSelector((state: RootStateOrAny) => state.user);    
    const dispatch = useDispatch();

    // const {_id} = currentUser;

    // useEffect(() => {
    //     const getAllProducts = async () => {
    //         try {
    //             dispatch(setLoading());
    //             const purchases = await axios.get(`https://olympus-backend.vercel.app/api/orders/find/${currentUser?._id}`);
    //             console.log(purchases);
    //             setPurchases(purchases.data);
    //         } catch (error) {
    //             dispatch(removeLoading());
    //         }
    //         dispatch(removeLoading());
    //     }
    //     getAllProducts();
    // }, [dispatch, currentUser?._id])

    return (
        <>
            <NavbarComponent />
            <div className="container mt-12 mx-auto">
                <div className="flex flex-col p-12 bg-green-300/50 rounded-md">
                    <h2 className="font-bold text-center text-xl">Historial de Compras</h2>
                    <div className="flex flex-col">
                        <span>ID de Compra: </span>
                        <span>Productos Comprados</span>
                        <div className="flex">
                            <span>ID del Producto:</span>
                            <span>Cantidad</span>
                        </div>
                        <span>Monto de Compra:</span>
                        <span>Dirección:</span>
                        <span>Estado de compra: </span>
                        <div className="flex w-full">
                            <span>Compra realizada el:</span>
                            <span>Compra actualizada el:</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
