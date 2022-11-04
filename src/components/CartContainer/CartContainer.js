import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/CartContext"
import "./CartContainer.css"
import bin from "../../assets/bin.png"
import empty from "../../assets/empty.gif"
import { baseDatos } from "../../utils/firebase"
import { collection, addDoc, getDocs, getDoc, query, doc } from "firebase/firestore"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"


export const CartContainer = () => {
    const value = useContext(CartContext);
    const { productosCarrito, getTotalPrice, removeItem, clearCart } = value;

    const [compraID, setCompraID] = useState("");

    const sendOrder = (evt) => {
        evt.preventDefault();
        const purchase = {
            buyer: {
                buyerName: evt.target[0].value,
                phone: evt.target[1].value,
                email: evt.target[2].value
            },
            items: productosCarrito,
            total: getTotalPrice()
        }
        const queryRef = collection(baseDatos, "orders");

        addDoc(queryRef, purchase).then((resultado) => {
            console.log("resultado", resultado.id);
            setCompraID(resultado.id)
        })

        const purchaseAlert = () => {
            Swal.fire({
                icon: 'success',
                title: '¡Gracias por tu compra!',
                html: `<p>Tu número de orden es ${compraID}</p>`,
            })
        }
        console.log(compraID);

        clearCart();
        purchaseAlert();
    }

    return (
        <div className="cartBody">
            {
                productosCarrito.map((producto) => (
                    <div className="cartCard">
                        <img className="cartPic" src={producto.imagen}></img>
                        <h3>{producto.title}</h3>
                        <div className="cartInfo">

                            <p className="cartText">Precio ${producto.price}</p>
                            <p className="cartText">Cantidad {producto.quantity}</p>
                            <p className="cartText">Total producto ${producto.quantityPrice}</p>
                            <button onClick={() => removeItem(producto.id)} ><img className="binIcon" src={bin}></img></button>
                        </div>
                        <div className="carritoBottom">
                            <p className="cartText finalPrice">Precio total ${getTotalPrice()}</p>
                            <button onClick={() => clearCart()}>Vaciar carrito</button>
                        </div>
                    </div>

                ))
            }

            {productosCarrito.length > 0 ? (<div className="cartForm">
                <form onSubmit={sendOrder}>
                    <label>Nombre: </label>
                    <input type="text" placeholder=" "></input>
                    <label>Teléfono: </label>
                    <input type="tel" placeholder=" "></input>
                    <label>Email: </label>
                    <input type="email" placeholder=""></input>
                    <button type="submit" >Enviar orden</button>
                </form>
            </div>) :
                <div>
                    <img className="emptyGif" src={empty}></img>
                    <h2>No  se han agregado productos</h2>
                    <Link to="/"><button> ⇐ Inicio </button></Link>
                </div>}
        </div>
    )
}