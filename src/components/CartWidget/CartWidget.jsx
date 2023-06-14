import cart from '../../assets/cart.svg'

const CartWidget = () => {
    return (
        <div class="flex flex-row items-center">
            <div class="h-11 w-36 flex flex-row flex-nowrap items-center justify-evenly rounded-full bg-black ">
                <img class="w-9 drop-shadow-text-glow" src={cart} alt="cart-widget" />
                <p class="font-sans font-semibold text-white drop-shadow-text-glow">$0,00</p>
            </div>
        </div>
    )
}

export default CartWidget