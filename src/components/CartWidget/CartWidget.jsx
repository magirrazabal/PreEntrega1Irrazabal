import carrito from "../../assets/books.png"

export const CartWidget = ()=> {
    return(
        <div className="carrito">
        <img src={carrito} alt="carrito" />

        {<span>1</span> }
        </div>
    )
}