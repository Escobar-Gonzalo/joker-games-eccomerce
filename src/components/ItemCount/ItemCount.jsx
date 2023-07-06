import { useState } from "react";


const ItemCount = ({initialValue, stock, addFunction}) => {
    const [count, setCount] = useState(initialValue);


    const add = () => {
        if(count < stock) {
            setCount(count + 1);
        }
    }

    const sub = () => {
        if (count > initialValue) {
            setCount(count - 1);
        }
    }


    return (
        <>
            <div class="flex flex-row gap-x-4 text-white mb-6 ">
                <button class="cartButton"  onClick={sub}> - </button>
                <strong class="countInput"> {count} </strong>
                <button class="cartButton"  onClick={add}> + </button>
                <button class="cartButton" onClick={() => addFunction(count) }> Agregar al Carrito </button>
            </div>
            

        </>
    )
}



export default ItemCount
