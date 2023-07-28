import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import end from '../../assets/end.svg'
import cart1 from '../../assets/cart1.svg'
import emptyCartImg from '../../assets/emptyCartImg.webp'

const Cart = () => {
    const {cart, emptyCart,total,totalAmount} = useContext(CartContext);

    if(totalAmount === 0) {
        return(
            <div class="flex flex-col items-center h-4/5 justify-center mt-20">
                <img class="" src={emptyCartImg} alt="" />
                <h2 class="text-white mr-6 ml-6 mb-8 text-2xl text-center font-sans font-bold">Ups! Todavia no hay nada en el carrito...</h2>
                <Link to="/">
                    <button class="text-white cartButton font-semibold text-2xl">Ver productos</button>
                </Link>
            </div>
        )
    }
    return (
    <div class="flex flex-col m-4 h-full justify-center">
        {cart.map(game=> <CartItem key={game.id} {...game}/>)}
        <div class="itemCont text-white p-6">
            <div class="flex flex-row justify-between items-center mt-10 mb-12">
                <div>
                    <h3 class="text-lg font-semibold"> Cantidad total: {totalAmount}</h3>
                </div>
                <div class="flex flex-col items-end">
                    <h3 class="text-xl font-semibold">Total: ${total}</h3>
                    <button class="supButton" onClick={()=> emptyCart()}>Vaciar Carrito</button>
                </div>
            </div>
            <div class="flex flex-row gap-x-4 justify-evenly">
                <Link to="/checkout">
                    <button class= "cartButton flex flex-col items-center">
                    <img class="w-14 mb-1 mt-1" src={end} alt="" />
                    <p class="font-semibold text-lg">Finalizar Compra</p>
                    </button>
                </Link>
                <Link to="/">
                    <button class= "cartButton flex flex-col items-center">
                    <img class="w-14 mb-1 mt-1" src={cart1} alt="" />
                    <p class="font-semibold text-lg">Seguir comprando</p>
                    </button>
                </Link>
            </div>
        </div>
    </div>
    )
}

export default Cart