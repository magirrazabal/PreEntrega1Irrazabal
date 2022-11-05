import './ItemListContainer.css';
import { baseDatos } from '../../utils/firebase';
import { collection, getDocs, query, where } from "firebase/firestore";
import { ItemList } from '../ItemList/ItemList';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



export const ItemListContainer = () => {

    const { categoryId } = useParams();

    const [productos, setProductos] = useState([]);

    useEffect(() => {

        const queryRef = categoryId ? query(collection(baseDatos, "items"), where("categoria", "==", categoryId)) : collection(baseDatos, "items");

        getDocs(queryRef).then((response) => {
            const results = response.docs;
            const docs = results.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id
                }
            });
            setProductos(docs);
        });
    }, [categoryId])

    return (
        <>
            <div className="bodyPag">
                <ItemList items={productos} />
            </div>


        </>
    )
}