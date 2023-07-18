import { useState, useContext } from "react";
import {CartContext} from "../../context/CartContext";
import {db} from "../../services/config";
import { collection, addDoc } from "firebase/firestore";


const Checkout = () => {

const [name, setName] = useState("");
const [lastName, setLastName] = useState("");
const [tel, setTel] = useState("");
const [email, setEmail] = useState("");
const [emailConf, setEmailConf] = useState("");
const [error, setError] = useState("");
const [orderId, setOrderId] = useState("");

const {cart, emptyCart, amount, total, totalAmount} = useContext(CartContext);


//funciones y validaciones:
const formHandler = (event) => { 
event.preventDefault()
;    //Verificamos que los campos esten completos:
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
// Guardar la orden en la base de datos:
addDoc(collection(db, "orders"), order)
    .then(docRef=>{
        setOrderId(docRef.id);
        emptyCart();
    })
    .catch(error =>{
        console.log("No sos vos, somos nosotros. Intenta nuevamente más tarde",error);
        setError("Se produjo un error al crear la orden");
    })
}

    return (
        <div>
            <h2>El juego ya casi es tuyo...</h2>
            <form onSubmit={formHandler} >
                {
                    cart.map( game => (
                        <div key={game.item.id}>
                            <img src={game.item.img} alt={game.item.nombre}/>
                            <p>{game.item.nombre} x {game.amount}</p>
                            <p>{game.item.precio}</p>
                            <hr />
                        </div>
                    ))
                }
                <hr />
                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="">Apellido</label>
                    <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="">Teléfono</label>
                    <input type="text" value={tel} onChange={(e)=>setTel(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="">Confirme su Email</label>
                    <input type="email" value={emailConf} onChange={(e)=>setEmailConf(e.target.value)}/>
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