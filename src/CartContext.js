import React, {children, createContext, useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [productos, setProductos] = useState([])
    const [cant, setCant] = useState(0)

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

    const sneakersLength = () => {
        let cant = 0;
        productos.forEach((i) => (cant += i.cant));
        setCant(cant);
        return cant;
    };
    
    const clear = () => {
        setProductos([])
    }

    return(
        <CartContext.Provider 
        value={{
            productos: productos,
            sneakersLength: sneakersLength,
            addItems: addItems,
            removeItem: removeItem,
            clear: clear,
            cant: cant,
            
          }}>
            {children}
        </CartContext.Provider>
    )
}