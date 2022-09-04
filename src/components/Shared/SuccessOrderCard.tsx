
export const SuccessOrderCard = (order) => {

  const { _id, address, amount } = order.order;
  const { line1, city, postal_code, country } = address;

  return (
    <div className="successOrderCard">
      <span className="subtitle">Su orden de compra ha sido creada correctamente</span>
      <span className="thanks">Muchas gracias por su compra 😁</span>
      <div>
        <span>Su ID de orden de compra es:</span>
        <span className="id">{_id}</span>
      </div>
      <span>Se enviarán los productos a la siguiente dirección:</span>
      <span className="address">{`Calle:${line1} Ciudad:${city} Código Postal: ${postal_code} Pais: ${country}`}</span>
      <div>
        <span className="">Con un total de: </span>
        <span className="amount">${amount}</span>
      </div>
    </div>
  )
}