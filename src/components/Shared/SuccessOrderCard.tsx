
export const SuccessOrderCard = (order) => {

  const { _id, address, amount } = order.order;
  const { line1, city, postal_code, country } = address;

  return (
    <div className="flex flex-col p-4 mt-6 mb-4 rounded-md bg-gray-800 text-slate-50 gap-1">
      <span className="text-center text-3xl">Su orden de compra ha sido creada correctamente</span>
      <span className="text-lg text-center">Muchas gracias por su compra 😁</span>
      <div>
        <span>Su ID de orden de compra es:</span>
        <span className="id">{_id}</span>
      </div>
      <span>Se enviarán los productos a la siguiente dirección:</span>
      <span className="address">{`Calle: ${line1} Ciudad: ${city} Código Postal: ${postal_code} Pais: ${country}`}</span>
      <div className="flex flex-row">
        <span>Con un total de: </span>
        <span className="px-1 rounded-md bg-blue-400 ml-1">${amount}</span>
      </div>
    </div>
  )
}