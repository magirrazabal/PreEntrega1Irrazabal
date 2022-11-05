import "./CartContainer.css"
import Swal from "sweetalert2"
import { baseDatos } from "../../utils/firebase"
import { CartContext } from "../../context/CartContext"
import { useContext, useState } from "react"
import { collection, addDoc } from "firebase/firestore"
import { Link } from "react-router-dom"
import bin from "../../assets/bin.png"
import empty from "../../assets/empty.gif"
import loadingGif from "../../assets/loading.gif";


export const CartContainer = () => {
    const value = useContext(CartContext);
    const { productosCarrito, getTotalPrice, removeItem, clearCart } = value;
    const [loader, setLoader] = useState(false)
    const [compraID, setCompraID] = useState("");


    const sendOrder = (evt) => {
        evt.preventDefault();
        setLoader(true)
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

        addDoc(queryRef, purchase)
            .then((resultado) => {
                setCompraID(resultado.id)

            })
            .catch((error) => console.log(error))
            .finally(() => setLoader(false), clearCart())


    }
    const purchaseAlert = () => {
        Swal.fire({
            icon: 'success',
            iconColor: '#5C7457',
            title: '¡Gracias por tu compra!',
            html: `<p>El código de tu orden es <b>${compraID}<b></p>`,
            confirmButtonColor: '#EFD0CA',
            confirmButtonText: 'Seguir navegando'
        }).then(function () {
            window.location = "/";
        });
    }

    return (
        <>
            {loader ? <img className="loadingImg" src={loadingGif} alt="loading imagen" /> : !compraID
                ? <div className="cartBody">
                    {
                        productosCarrito.map((producto) => (
                            <>
                            <div className="cartCard">
                                <img className="cartPic" src={producto.imagen} alt="portada producto"></img>
                                <h3>{producto.title}</h3>
                                <div className="cartInfo">
                                    <p className="cartText">Precio ${producto.price}</p>
                                    <p className="cartText">Cantidad {producto.quantity}</p>
                                    <p className="cartText">Total producto ${producto.quantityPrice}</p>
                                    <button onClick={() => removeItem(producto.id)} ><img className="binIcon" src={bin}></img></button>
                                </div>
                                </div>
                                <div className="carritoBottom">
                                    <p className="cartText finalPrice">Precio total ${getTotalPrice()}</p>
                                    <button onClick={() => clearCart()}>Vaciar carrito</button>
                                </div>
                        </>
                        ))
                    }

                    {productosCarrito.length > 0 ? (<div className="cartForm">
                        <form onSubmit={sendOrder}>
                            <label>Nombre: </label>
                            <input type="text"></input>
                            <label>Teléfono: </label>
                            <input type="tel" maxLength="10"></input>
                            <label>Email: </label>
                            <input type="email"></input>
                            <button type="submit" >Enviar orden</button>
                        </form>
                    </div>) :
                        <div>
                            <img className="emptyGif" alt="imagen carrito vacio" src={empty}></img>
                            <h2>No  se han agregado productos</h2>
                            <Link to="/"><button> ⇐ Inicio </button></Link>
                        </div>}
                </div>
                : purchaseAlert()}
        </>
    )
}