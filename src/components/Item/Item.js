import { Link } from "react-router-dom"
import "./Item.css"

export const Item =  ({item})=> {
    return (
<div className="bodyItems">
<article className="carta">
    <img src={item.imagen}  width="50" height="100"></img>
    <p className="titulos"><b>{item.title}</b></p>
    <p className="subtitulo">{item.author}</p>
                <Link to={`/item/${item.id}`} >
                <button>+</button>
                </Link>
        
        </article>
        </div>
    )
}