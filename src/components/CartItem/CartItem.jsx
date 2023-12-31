import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({item, amount}) => {
const {subItem} = useContext(CartContext);

  return (
    <div class="chItemCont flex flex-row p-6 mb-1 justify-between text-white">
      <div class="flex flex-col">
        <img class="w-20" src={item.img} alt="" />
      </div>
      <div class="flex flex-col justify-center">
        <h4 class="text-md font-semibold">{item.nombre}</h4>
        <p>Cantidad: {amount}</p>
      </div>
      <div class="flex flex-col justify-center items-end">
        <p class="font-semibold text-xl">${item.precio}</p>
        <button class="supButton" onClick={()=> subItem(item.id)}>Eliminar</button>
      </div>
    </div>
  )
}

export default CartItem