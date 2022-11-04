import React, {useState, useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import "./ItemCount.css"


export const ItemCount = ({stock, initial, onAdd})=> {
    const value = useContext(CartContext)
    const {productosCarrito} = value;


    const [count, setCount] = useState(initial);
    const sumar = ()=> {
        if (count<stock){
        setCount(count+1)
    }
    }
    const restar = ()=> {
        if (count>initial){
        setCount(count-1)
    }
    }

    return (
        <div className='botones'>
        <div className='botonesSuma'>
       <button onClick={restar}>-</button>
        <p className='countResult'>{count}</p>
        <button onClick={sumar}>+</button>
        </div>
        <button className='botonAgregar' onClick={()=> onAdd(count)}>Agregar</button>
        {productosCarrito.length > 0 ? (<Link to="/cart"><button className='botonAgregar'>Finalizar</button></Link>) : (<Link to="/"><button> ⇐ Inicio </button></Link>) }
    
    </div>
    )
}