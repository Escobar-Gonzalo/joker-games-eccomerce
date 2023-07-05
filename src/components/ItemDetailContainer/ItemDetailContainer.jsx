import { useState, useEffect } from "react"
import { getOneGame } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";



const ItemDetailContainer = () => {

    const[game, setGame] =useState(null);
    const {idGame} = useParams();

    useEffect(() =>{
        getOneGame(idGame)
            .then(r=> setGame(r))
    }, [idGame])

    return (
        <div class="flex flex-row justify-center">
            <ItemDetail {...game}/>
        </div>
    )
}

export default ItemDetailContainer