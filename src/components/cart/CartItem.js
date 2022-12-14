
import React from "react";


const CartItem = ({data, deleteFromCart}) => {
  
  const {id, name, price, quantity} = data;

  return (
    <div>
       <h4>{name}</h4> 
       <h5>$ {price} x {quantity} = ${price * quantity}</h5>
       <button onClick={() => deleteFromCart(id)}>Eliminar uno</button>
       <button onClick={() => deleteFromCart(id, true)}>Eliminar Todos</button>
    </div>
  )
}

export default CartItem;