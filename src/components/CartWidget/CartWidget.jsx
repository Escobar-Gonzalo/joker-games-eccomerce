import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import cart from '../../assets/cart.svg'

const CartWidget = () => {
    const{totalAmount} = useContext(CartContext)


    return (
        <div class="flex flex-row items-center">
                <div class="flex flex-row flex-nowrap items-center justify-evenly rounded-full bg-black w-12 h-12 sm:w-28 sm:h-11">
                    <Link to="/Cart">
                        <img class="drop-shadow-div-glow w-8 md:w-9 " src={cart} alt="cart-widget" />
                    </Link>
                    {
                        totalAmount >= 0 && <p class="hidden sm:flex font-sans font-semibold text-white drop-shadow-text-glow"> {totalAmount} </p>
                    }
                </div>
            
        </div>
    )
}

export default CartWidget