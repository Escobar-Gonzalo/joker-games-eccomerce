import { useState, useEffect } from "react"
//import { getOneGame } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

//importamos nuevas funciones
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/config";


const ItemDetailContainer = () => {

    const[game, setGame] =useState(null);
    const {idGame} = useParams();

    useEffect(()=>{
        const newDoc = doc(db, "myGames", idGame);
        
        getDoc(newDoc)
        .then(res => {
            const data = res.data();
            const newGame = {id: res.id, ...data}
            setGame(newGame);
        })
        .catch(error => console.log(error))
    }, [idGame])




/*   useEffect(() =>{
        getOneGame(idGame)
            .then(r=> setGame(r))
    }, [idGame])
*/
    return (
        <div class="flex flex-row justify-center">
            <ItemDetail {...game}/>
        </div>
    )
}

export default ItemDetailContainer