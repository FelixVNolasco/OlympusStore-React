import { Link } from "react-router-dom"
import { cleanCart } from "../../redux/cartRedux"
import { useDispatch } from 'react-redux';

export const SuccessOrderCard = (orderId) => {

  const { order } = orderId;


  //TODO: Add Address Info and Amount in the Card 

  // const { _id, address, amount } = order.order;
  // const { line1, city, postal_code, country } = address;

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col p-4 mt-6 mb-4 rounded-md bg-gray-800 text-slate-50 gap-1">
      <span className="text-center text-3xl">Su orden de compra ha sido creada correctamente</span>
      <span className="text-lg text-center">Muchas gracias por su compra 😁</span>
      <div className="flex flex-col mb-4 text-center">
        <span>Su ID de orden de compra es:</span>
        <span className="id">{order}</span>
        <Link to={"/purchases"}>
          <button className='inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ripple-surface-light400' style={{ padding: 10, marginTop: 20 }} onClick={() => dispatch(cleanCart({
            products: [],
            quantity: 0,
            total: 0
          }))}>Ir al mis compras</button>
        </Link>
      </div>

      {/* <span>Se enviarán los productos a la siguiente dirección:</span>
      <span className="address">{`Calle: ${line1} Ciudad: ${city} Código Postal: ${postal_code} Pais: ${country}`}</span>
      <div className="flex flex-row">
        <span>Con un total de: </span>
        <span className="px-1 rounded-md bg-blue-400 ml-1">${amount}</span>
      </div> */}
    </div>
  )
}