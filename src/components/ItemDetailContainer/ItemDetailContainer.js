import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { libros } from "../baseDatos/baseDatos";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = ()=>{
const {id} = useParams();

const [itemDetail, setItemDetail] = useState([]);


    const promesaProducto = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(libros);
        }, 2000);
    })

    useEffect(() => {
       const getProducto = async()=> {
        const productos = await promesaProducto;
        const producto = productos.find(elemento => elemento.id === parseInt(id))
        setItemDetail (producto);
       }
       getProducto();
    }, [id]);

return (
<ItemDetail item={itemDetail}></ItemDetail>
)
}