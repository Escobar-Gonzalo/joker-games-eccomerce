import { useState } from "react"
import { useEffect } from "react"
import { getGames } from "../../asyncmock"
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {
    const [games, setGames] = useState([]);


    useEffect(() => {
        getGames()
            .then(respuesta => setGames(respuesta))
            .catch(error => console.log(error))
    }, [])
    return (
    <div class="flex gap-y-6 flex-col items-center mt-8">
        <h2 class="contTitle text-white text-5xl md:text-6xl">{props.greeting}</h2>
        <p class="contSubTitle flex w-4/5 font-sans text-white font-semibold text-xl text-center md:text-2xl md:text-center md:flex md:w-4/5">{props.subtitle}</p>
        <ItemList games={games}/>
    </div>
    )
}

export default ItemListContainer