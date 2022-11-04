import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { baseDatos } from "../../utils/firebase";
import loadingGif from "../../assets/loading.gif";
import "./ItemDetailContainer.css";

import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
    const { id } = useParams();

    const [itemDetail, setItemDetail] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProducto = async () => {
            const queryRef = doc(baseDatos, "items", id);
            const response = await getDoc(queryRef);
            const newDoc = {
                ...response.data(),
                id: response.id
            }
            setItemDetail(newDoc)
            setLoading(false);
        }
        getProducto();
    }, [id]);

    return (
        <div>
            {loading === true ? (<img className="loadingImg" src={loadingGif} alt="loading" />) : (<ItemDetail item={itemDetail}></ItemDetail>
            )}
        </div>
    )
}