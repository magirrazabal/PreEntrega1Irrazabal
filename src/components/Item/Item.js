import "./Item.css"
import { Link } from "react-router-dom"


export const Item = ({ item }) => {
    return (
        <div className="bodyItems">
            <article className="carta">
                <img src={item.imagen} width="50" height="100" alt="imagen item"></img>
                <p className="titulos"><b>{item.title}</b></p>
                <p className="subtitulo">{item.author}</p>
                <Link to={`/item/${item.id}`} >
                    <button>+</button>
                </Link>

            </article>
        </div>
    )
}