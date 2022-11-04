import carrito from "../../assets/books.png"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Item } from "../Item/Item"
export const CartWidget = ()=> {
    const {getTotalProducts} = useContext (CartContext);

    return(
        <div className="carrito">
        <img src={carrito} alt="carrito" />

        <span> {getTotalProducts()}</span> 
        </div>
    )
}