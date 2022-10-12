import "./ItemDetail.css"

export const ItemDetail =  ({item})=> {
    return (
        <div>
            <h1 className="detailTitle">{item.title}</h1>
            <img className="detailPic" src={item.imagen}></img>
            <div className="detailCont">
            <h4 className="detailSub">Autor</h4>
            <p className="detailText">{item.author}</p>
            </div>
            <div className="detailCont">
            <h4 className="detailSub">Sinopsis</h4>
            <p className="detailText">{item.description}</p>
            </div>
        </div>
    )
}