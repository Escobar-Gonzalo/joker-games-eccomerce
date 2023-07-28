import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import cart from '../../assets/cart.svg'

const CartWidget = () => {
    const{totalAmount} = useContext(CartContext)


    return (
        <div class="flex flex-row items-center">
                <Link to="/Cart">
                <div class="flex flex-row flex-nowrap items-center justify-evenly rounded-full bg-black w-16 h-12 sm:w-28 sm:h-11">
                <img class="drop-shadow-div-glow w-8 md:w-9 " src={cart} alt="cart-widget" />
                    {
                        totalAmount >= 0 && <p class="flex font-sans font-semibold text-white drop-shadow-text-glow"> {totalAmount} </p>
                    }
                </div>
                </Link>
        </div>
    )
}

export default CartWidget