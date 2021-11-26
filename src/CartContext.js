import React, {children, createContext, useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [productos, setProductos] = useState([])

    

    const addItems = (item, cant) => {
        let confirmacion = isInCart(item.id)
        if(!confirmacion){
            let ItemInfo = {
                id : item.id,
                info : item,
                cantidad : cant    
            }
            setProductos(productos => [...productos, ItemInfo])
        }
    }

    console.log(productos)

    const isInCart = (id) => {
        let esta = productos.find(item => item.id === id)
        if(esta === undefined){
            return false;
        } else{
            return true;
        }
    }

    const removeItem = (id) => {
        console.log(id)
        console.log(productos.filter(item => item.id !== id))
        setProductos(productos.filter(item => item.id !== id))
    }

    const total = () => {
        for (let i = 0; i < productos.length; i++) {
            const element = array[i];
            
        }
    }

    const clear = () => {
        setProductos([])
    }

    return(
        <CartContext.Provider value={[productos, setProductos, addItems, removeItem, clear]}>
            {children}
        </CartContext.Provider>
    )
}