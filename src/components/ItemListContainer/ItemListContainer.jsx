import './ItemListContainer.css';
import { baseDatos } from '../../utils/firebase';
import { collection, getDocs, query, where } from "firebase/firestore";
import { ItemList } from '../ItemList/ItemList';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import loadingGif from "../../assets/loading.gif";



export const ItemListContainer = () => {

    const { categoryId } = useParams();

    const [loading, setLoading] = useState(true);
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
            setLoading(false);
            setProductos(docs);
        });
    }, [categoryId])

    return (
        <>
        {loading === true ? (<img className="loadingImg" src={loadingGif} alt="loading" />) :
            <div className="bodyPag">
                 <ItemList items={productos} />
            </div>

    }
        </>
    )
}