import cart from '../../assets/cart.svg'

const CartWidget = () => {
    return (
        <div class="flex flex-row items-center">
            <div class="flex flex-row flex-nowrap items-center justify-evenly rounded-full bg-black w-12 h-12 sm:w-28 sm:h-11">
                <img class="drop-shadow-div-glow w-8 md:w-9 " src={cart} alt="cart-widget" />
                <p class="hidden sm:flex font-sans font-semibold text-white drop-shadow-text-glow">$0,00</p>
            </div>
        </div>
    )
}

export default CartWidget