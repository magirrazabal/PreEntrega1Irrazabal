import "./ItemDetail.css"
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { ItemCount } from '../ItemCount/ItemCount';


export const ItemDetail = ({ item }) => {
    const { agregarProducto } = useContext(CartContext);

    const addProduct = (quantity) => {
        agregarProducto(item, quantity);
    }
    
    return (
        <>
            <div>
                <h1 className="detailTitle">{item.title}</h1>
                <p className="detailTitle">{item.author}</p>
                <img className="detailPic" alt="detalle imagen" src={item.imagen}></img>
                <div className="detailCont">
                    <h4 className="detailSub">Precio</h4>
                    <p className="detailText">$ {item.price}</p>
                </div>
                <div className="detailCont">
                    <h4 className="detailSub">Sinopsis</h4>
                    <p className="detailText">{item.description}</p>
                    <ItemCount stock={20} initial={1} onAdd={addProduct} />
                </div>
            </div>

        </>
    )
}