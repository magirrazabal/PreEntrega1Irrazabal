import './ItemListContainer.css';
import { ItemCount } from '../ItemCount/ItemCount';
import { ItemList } from '../ItemList/ItemList';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { libros } from '../baseDatos/baseDatos';

export const ItemListContainer = () => {


    const { categoryId } = useParams();

    const [productos, setProductos] = useState([]);


    const promesaProductos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(libros);
        }, 2000);
    })

    useEffect(() => {
        promesaProductos.then((response) => {

        if (categoryId){
           const  productosFiltrados = response.filter(elm=>elm.categoria === categoryId);
            setProductos(productosFiltrados)
        } else{
            setProductos(response)
        }
 
        })
    }, [categoryId]);

    return (
        <>
            <div className="bodyPag">
                <ItemList items={productos} />
            </div>
            <ItemCount stock={20} initial={1} onAdd={() => { console.log("Carrito") }} />

        </>
    )
}