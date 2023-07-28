import { useState, useContext } from "react";
import {CartContext} from "../../context/CartContext";
import {db} from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";


const Checkout = () => {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");

    const {cart, emptyCart, totalAmount} = useContext(CartContext);


//funciones y validaciones:
    const formHandler = (event) => { 
        event.preventDefault();
    
    //Verificamos que los campos esten completos:
        if(!name || !lastName || !tel || !email || !emailConf){
            setError("Hay campos sin completar");
            return;
        }
//Validamos que los campos del email coincidan:
        if( email !== emailConf){
            setError("Los emails no coinciden");
            return;
        }
//Paso 1: Creamos un objeto con todos los datos de la orden de compra.
        const order = {
            items: cart.map(game=>({
                id: game.item.id,
                nombre: game.item.nombre,
                cantidad: game.amount
            })),
            total:totalAmount,
            fecha: new Date(),
            name,
            lastName,
            tel,
            email
        };

    Promise.all(
        order.items.map(async (gameOrder) => {
            const gameRef = doc(db, "myGames", gameOrder.id);
            const gameDoc = await getDoc(gameRef);
            const stockActual = gameDoc.data().stock;
            await updateDoc(gameRef, {
                stock: stockActual - gameOrder.cantidad
            })
        })
    )
        .then (() => {
            addDoc(collection(db, "orders"), order)
                .then((docRef) => {
                    setOrderId(docRef.id);
                    emptyCart();
                })
                .catch((error) =>{
                    console.log("Error al crear la orden", error);
                    setError("Error al crear la orden, vuelva a intentarlo por favor");
                });
        })
        .catch((error)=> {
            console.log("No se puede actualizar el stock", error);
            setError("No es posible actualizar el stock");
        })
}

    return (
        <div>
            <h2>El juego ya casi es tuyo...</h2>
            <form onSubmit={formHandler} >
                {
                    cart.map( game => (
                        <div key={game.item.id}>
                            <p>{game.item.nombre} x {game.amount}</p>
                            <p>{game.item.precio}</p>
                            <hr />
                        </div>
                    ))
                    
                }
                <hr />
                <div>
                    <input placeholder="Nombre" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div>
                    <input placeholder="Apellido" type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                </div>
                <div>
                    <input placeholder="Teléfono" type="text" value={tel} onChange={(e)=>setTel(e.target.value)}/>
                </div>
                <div>
                    <input placeholder="Email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                    <input placeholder="Confirme su Email" type="email" value={emailConf} onChange={(e)=>setEmailConf(e.target.value)}/>
                </div>
                {
                    error && <p> {error} </p>
                }
                <button type="submit">Finalizar Compra</button>
            </form>
            {
                orderId && (
                    <strong>¡Gracias por tu compra! Tu número de orden es {orderId}</strong>
                )
            }
        </div>
    )
}

export default Checkout