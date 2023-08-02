import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import cart from '../../assets/cart.svg'
import apps from '../../assets/apps.svg'

const ItemDetail = ({ id, nombre, precio, img, desc, stock }) => {

    const [addAmount, setAddAmount] = useState(0);

    const { addItem } = useContext(CartContext)

    const handleAmount = (amount) => {
        setAddAmount(amount);

        const item = { id, nombre, precio, img };
        addItem(item, amount);
    }

    return (
        <div class="itemCont flex flex-col m-4 mb-6 p-2 items-center sm:w-2/3 md:w-2/3 lg:w-1/3 xl:w-1/3">
            <img class="w-2/3 shadow-imgShadow" src={img} alt={nombre} />
            <div class="flex flex-col items-center w-auto gap-y-2 mt-2 justify-between">
                <h3 class="text-white text-center text-2xl font-bold">{nombre}</h3>
                <p class="text-white text-center text-3xl font-bold">$ {precio}</p>
                <p class="text-white text-lg">{id}</p>
                <p class="text-white text-lg mb-3 text-center">{desc}</p>
                {
                    addAmount > 0 ? (
                        <div class="flex flex-row text-white gap-x-2 mb-3 font-semibold">
                            <Link to="/cart"> 
                            <button class="cartButton flex flex-col items-center">
                                <img class="w-14 mb-1 mt-1" src={cart} alt="" />
                                <p>Terminar compra</p>
                            </button>
                            </Link>
                            <Link to="/">
                                <button class="cartButton flex flex-col items-center">
                                <img class="w-14 mb-1 mt-1" src={apps} alt="" />
                                <p>Seguir comprando</p>
                                </button>
                            </Link>
                        </div>
                    ) : (<ItemCount initialValue={1} stock={stock} addFunction={handleAmount} />)
                }
            </div>
        </div>
    )
}

export default ItemDetail