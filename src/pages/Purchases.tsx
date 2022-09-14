import { NavbarComponent } from "../components/Shared/Navbar/NavbarComponent";
import { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { removeLoading, setLoading } from "../redux/uiRedux";
import axios from "axios";

export const Purchases = () => {

    const [purchases, setPurchases] = useState<any[]>(null);
    const { currentUser } = useSelector((state: RootStateOrAny) => state.user);
    const dispatch = useDispatch();
    const { accessToken } = currentUser;
    const { _id } = currentUser;

    useEffect(() => {

        const config = {
            headers: {
                token: `Bearer ${accessToken}`,
            },
        };

        const getAllProducts = async () => {
            try {
                dispatch(setLoading());
                const purchasesData = await axios.get(`https://olympus-backend.vercel.app/api/orders/find/${_id}`, config);
                const { data } = purchasesData;
                setPurchases(data);
            } catch (error) {
                dispatch(removeLoading());
            }
            dispatch(removeLoading());
        }
        getAllProducts();
    }, [dispatch, accessToken, _id]);

    console.log(purchases);



    return (
        <>
            <NavbarComponent />
            <h2 className="font-bold text-center text-xl mt-6 ">Historial de Compras</h2>
            <div className="container mx-auto">
                <div className="flex flex-col p-12 bg-green-300/50 rounded-md">
                    {
                        purchases?.map(purchase => {

                            const { address, amount, createdAt, updatedAt, status, _id } = purchase
                            const { city, country, line1, postal_code, state } = address;
                            const { products } = purchase;

                            return (
                                <div key={_id} className="flex flex-col m-2 bg-green-300/70 p-2 rounded-md">
                                    <span>ID de Compra: {_id}</span>
                                    <span>Productos Comprados</span>
                                    {
                                        products.map((product) => {

                                            const { productId, quantity } = product;
                                            return (
                                                <div className="flex flex-col bg-green-300/80 m-2 p-2 rounded-md">
                                                    <span>ID del Producto: {productId}</span>
                                                    <span>Cantidad: {quantity}</span>
                                                </div>
                                            )
                                        })
                                    }

                                    <span>Monto de Compra: ${amount}</span>
                                    <span>Dirección: {`Calle: ${line1}, Estado: ${state}, Código Postal: ${postal_code}, Ciudad: ${city}, País: ${country}`}</span>
                                    <span>Estado de compra: {status === "pending" && "Pendiente"}</span>
                                    <div className="flex flex-col w-full">
                                        <span>Compra realizada el: {createdAt}</span>
                                        <span>Compra actualizada el: {updatedAt}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}
