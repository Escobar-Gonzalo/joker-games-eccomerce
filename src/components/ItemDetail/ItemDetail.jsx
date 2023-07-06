import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

//1) importamos
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";




const ItemDetail = ({id,nombre,precio,img,desc, stock}) => {
    
    const [addAmount, setAddAmount] = useState(0);
    

    //2) Usamos el useContext
    const {addItem} = useContext(CartContext)

    const handleAmount = (amount) =>{
        setAddAmount(amount);

    const item = {id, nombre, precio};
    addItem(item, amount);
    }


    //
    return (
    <div class="itemCont flex flex-col m-4 mb-6 p-2 items-center sm:w-2/3 md:w-2/3 lg:w-1/3 xl:w-1/3">
        <img class="w-2/3 shadow-imgShadow" src={img} alt={nombre}/>
        <div class="flex flex-col items-center w-auto gap-y-2 mt-2 justify-between">
            <h3 class="text-white text-center text-2xl font-bold">{nombre}</h3>
            <p class="text-white text-center text-3xl font-bold">$ {precio}</p>
            <p class="text-white text-lg">{id}</p>
            <p class="text-white text-lg mb-2 text-center">{desc}</p>
            {

            }
            {
                addAmount > 0 ? (<Link to="/cart"> Terminar compra </Link>) : (<ItemCount initialValue={1} stock={stock} addFunction={handleAmount}/>)
            }
        </div>
    </div>
    )
}

export default ItemDetail