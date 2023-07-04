import { useState, useEffect } from "react"
import { getOneGame } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail";



const ItemDetailContainer = () => {

    const[game, setGame] =useState(null);


    useEffect(() =>{
        getOneGame(1)
            .then(r=> setGame(r))
    }, [])

    return (
        <div>
            <ItemDetail {...game}/>
        </div>
    )
}

export default ItemDetailContainer