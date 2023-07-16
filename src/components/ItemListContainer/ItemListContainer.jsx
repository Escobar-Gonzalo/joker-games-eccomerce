import { useState } from "react"
import { useEffect } from "react"
//import { getGames, getGameByCat } from "../../asyncmock"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

//nuevas funciones
import { collection, getDocs, where, query, getDoc } from "firebase/firestore";
import { db } from "../../services/config";

//Collection se usa para vincular una coleccion de Firestore
//getDocs me trae todos los docs de una coleccion.
//QUery se usa para hacer consultas a la base de datos.
//where se usa para hacer un filtrado en la consulta.

const ItemListContainer = (props) => {
    const [games, setGames] = useState([]);

    const {idCategoria} = useParams();

useEffect ( ()=> {
    const myGames = idCategoria ? query(collection(db, "myGames"), where("idCat", "==", idCategoria)) : collection(db, "myGames");

    getDocs(myGames)
        .then(res => {
            const newGames = res.docs.map( doc =>{
                const data = doc.data()
                return {id: doc.id, ...data}
            })
            setGames(newGames);
        })
        .catch(error => console.log(error))
}, [idCategoria])




/*   useEffect(()=>{

        const funcion = idCategoria ? getGameByCat : getGames;

        funcion(idCategoria)
            .then(res => setGames(res))
            
    },[idCategoria]);*/

    return (
    <>
        <div class="flex flex-col gap-y-5 items-center sm:mt-4">
            <h2 class="contTitle text-white text-5xl self-center text-center mt-8 mb-3 md:text-6xl">{props.greeting}</h2>
            <p class="contSubTitle flex text-center mb-4 font-sans text-white font-semibold text-xl md:text-2xl md:text-center md:flex">{props.subtitle}</p>
        </div>
        <div class="flex flex-wrap justify-center pb-20">
        <ItemList games={games}/>
        </div>
        
    </>
    )
}

export default ItemListContainer