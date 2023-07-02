
const Item = ({id, nombre, precio, img}) => {
    return (
        <div class="itemCont flex flex-row m-4 p-2 justify-center">
            <img class="w-2/5 mr-6"src={img} alt={nombre} />
            <div class="flex flex-col items-center text-center">
            <h3 class="text-white">{nombre}</h3>
            <p class="text-white">$ {precio}</p>
            <p class="text-white">ID: {id}</p>
            <button>Ver detalles</button>
            </div>
        </div>
    )
}

export default Item