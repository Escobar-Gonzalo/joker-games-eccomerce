//1) importo el useState y createContext que em permite crear un contexto que
//almacenara toda la logica del carrito de compras

import { useState, createContext } from "react";

//2) creamos un nuevo contexto:


export const CartContext = createContext({
    cart: [],
    total: 0,
    totalAmount: 0
})

//El valor inicial es un obejto con las propiedades "cart" , "total", y "totalAmount"

export const CartProvider = ({children}) => {
    //3) Creamos un estado local llamado "cart" con useState

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);


    //4)Agregamos algunos metodos para manipular el carrito de compras.

    //Provisoriamente verifico por consola:
    console.log(cart)

    //Funcion para agregar productos al carrito evitando duplicados:

    const addItem = (item, amount) => {
        const existingItem =cart.find(g => g.item.id === item.id);
    
    if(!existingItem) {
        setCart( prev => [...prev, {item, amount}]);
        setTotalAmount( prev => prev + amount);
        setTotal(prev => prev + (item.precio * amount));
    //la sintaxis prev => [... prev, {item, amount}] se utiliza para crear
    //un nuevo array a aprtir del estado anterior del carrito (prev) y agregar 
    //un nuevo objeto que respresenta el nuevo producto.
    } else {
        const actualizedCart = cart.map(g => {
            if(g.item.id === item.id) {
                return {...g, amount:g.amount + amount};
            } else {
                return g;
            }
        });
        setCart(actualizedCart);
        setTotalAmount(prev => prev + amount);
        setTotal( prev => prev + (item.precio * amount))
    }
    
    }

    //Funcion para eliminar producto:

    const subItem = (id) => {
        const subtractedItem = cart.find(g => g.item.id === id);
        const actualizedCart = cart.filter(g => g.item.id !== id);

        setCart(actualizedCart);
        setTotalAmount(prev => prev - subtractedItem.cantidad);
        setTotal( prev => prev - (subtractedItem.item.precio * subtractedItem.amount));
    }

//Funcion para vaciar el carrito:

    const emptyCart = () =>{
        setCart([]);
        setTotalAmount(0);
        setTotal(0);
    }


    //En el value enviamos el valor actual del carrito y los metodos a los componentes de
    //mi aplicacion que lo necesiten.

    //Usamos la propiedad especial children para representar a todos aquellos
    //componentes que puedan necesitar el carrito y sus metodos.
    return(
        <CartContext.Provider value={{cart, total, totalAmount, addItem, subItem, emptyCart}}>
        {children}
        </CartContext.Provider>
    )


}