import {useItemCount} from "../../Hooks/UseItemCount"

const ItemDetail = ({id,nombre,precio,img,desc}) => {
    
    const {count, add, sub} = useItemCount(1,10);
    
    return (
    <div class="itemCont flex flex-col m-4 mb-6 p-2 items-center sm:w-2/3 md:w-2/3 lg:w-1/3 xl:w-1/3">
        <img class="w-2/3 shadow-imgShadow" src={img} alt={nombre}/>
        <div class="flex flex-col items-center w-auto gap-y-2 mt-2 justify-between">
            <h3 class="text-white text-center text-2xl font-bold">{nombre}</h3>
            <p class="text-white text-center text-3xl font-bold">$ {precio}</p>
            <p class="text-white text-lg">{id}</p>
            <p class="text-white text-lg mb-2 text-center">{desc}</p>
            <div class="flex flex-row gap-x-4 text-white mb-6 ">
                <p class="cartButton">Agregar al carrito</p>
                <div>
                    <button class="cartButton"  onClick={sub}> - </button>
                    <strong class="countInput"> {count} </strong>
                    <button class="cartButton"  onClick={add}> + </button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ItemDetail