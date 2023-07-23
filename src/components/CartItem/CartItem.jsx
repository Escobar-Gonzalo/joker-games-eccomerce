import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({item, amount}) => {
const {subItem} = useContext(CartContext);

  return (
    <div>
      <h4>{item.nombre}</h4>
      <p>Cantidad: {amount}</p>
      <p>Precio: {item.precio}</p>
      <button onClick={()=> subItem(item.id)}>Eliminar</button>
      <hr />
    </div>
  )
}

export default CartItem