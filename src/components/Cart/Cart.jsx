import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"


const Cart = () => {
    const {cart, emptyCart,total,totalAmount} = useContext(CartContext);

    if(totalAmount === 0) {
        return(
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to="/">Ver productos</Link>
            </>
        )
    }
    return (
    <div>
        {cart.map(game=> <CartItem key={game.id} {...game}/>)}
        <h3>Total: $ {total}</h3>
        <h3> Cantidad total: {totalAmount}</h3>
        <button onClick={()=> emptyCart()}>Vaciar Carrito</button>
        <Link to="/checkout"> Finalizar Compra</Link>
    </div>
    )
}

export default Cart