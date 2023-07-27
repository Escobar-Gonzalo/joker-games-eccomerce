import { useState, createContext } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0,
    totalAmount: 0
})

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    console.log(cart)

    const addItem = (item, amount) => {
        const existingItem = cart.find(g => g.item.id === item.id);

        if (!existingItem) {
            setCart(prev => [...prev, { item, amount }]);
            setTotalAmount(prev => prev + amount);
            setTotal(prev => prev + (item.precio * amount));

        } else {
            const actualizedCart = cart.map(g => {
                if (g.item.id === item.id) {
                    return { ...g, amount: g.amount + amount };
                } else {
                    return g;
                }
            });
            setCart(actualizedCart);
            setTotalAmount(prev => prev + amount);
            setTotal(prev => prev + (item.precio * amount))
        }

    }

    const subItem = (id) => {
        const subtractedItem = cart.find(g => g.item.id === id);
        const actualizedCart = cart.filter(g => g.item.id !== id);

        setCart(actualizedCart);
        setTotalAmount(prev => prev - subtractedItem.amount);
        setTotal(prev => prev - (subtractedItem.item.precio * subtractedItem.amount));
    }

    const emptyCart = () => {
        setCart([]);
        setTotalAmount(0);
        setTotal(0);
    }



    return (
        <CartContext.Provider value={{ cart, addItem, subItem, emptyCart, total, totalAmount}}>
            {children}
        </CartContext.Provider>
    )
}