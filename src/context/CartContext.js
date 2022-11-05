import { createContext, useState } from "react";


export const CartContext = createContext();

export const CustomProvider = ({ children }) => {
    const [productosCarrito, setProductosCarrito] = useState([]);

    const isInCart = (id) => {
        const productExists = productosCarrito.some((elemento) => elemento.id === id);
        return productExists;
    }

    const agregarProducto = (item, quantity) => {
        const productosCarritoCopy = [...productosCarrito];
        if (isInCart(item.id)) {
            const productPosition = productosCarritoCopy.findIndex((elemento) => elemento.id === item.id);
            productosCarritoCopy[productPosition].quantity += quantity;
            setProductosCarrito(productosCarritoCopy)

        } else {
            const newProduct = {
                ...item,
                quantity: quantity,
                quantityPrice: (quantity * item.price),
            };

            productosCarritoCopy.push(newProduct);
            setProductosCarrito(productosCarritoCopy);
        }
    }

    const getTotalPrice = () => {
        const totalPrice = productosCarrito.reduce((acc, curr) => acc + curr.quantityPrice, 0);
        return totalPrice;
    }

    const getTotalProducts = () => {
        const totalProducts = productosCarrito.reduce((acc, curr) => acc + curr.quantity, 0);
        return totalProducts;
    }

    const removeItem = (id) => {
        const newProductSet = productosCarrito.filter((elemento) => elemento.id !== id);
        setProductosCarrito(newProductSet);
    }
    const clearCart = () => {
        setProductosCarrito([]);
    }

    return (
        <CartContext.Provider value={{ productosCarrito, agregarProducto, getTotalPrice, getTotalProducts, removeItem, isInCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

