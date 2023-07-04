
const Item = ({id, nombre, precio, img}) => {
    return (
        <div class="itemCont flex flex-row m-4 mb-6 p-2 sm:w-5/12 sm:m-2 sm:pt-4 sm:pb-4 justify-center sm:flex-col sm:items-center md:justify-between lg:justify-between lg:w-1/4 xl:w-1/5">
            <img class="w-2/5 mr-6 shadow-imgShadow sm:w-3/6 sm:h-100 sm:mr-0"src={img} alt={nombre}/>
            <div class="flex flex-col w-3/5 items-start pr-6 gap-y-2 mt-2 justify-between sm:items-center sm:pr-0 sm:w-4/5 sm:justify-between md:justify-between lg:justify-between xl:justify-between 2xl:justify-between">
                <h3 class="text-white text-lg font-bold sm:text-center sm:text-xl">{nombre}</h3>
                <p class="text-white text-xl font-bold sm:text-2xl">$ {precio}</p>
                <p class="text-white">ID: {id}</p>
                <div class="detButton">Ver detalles</div>
            </div>
        </div>
    )
}

export default Item