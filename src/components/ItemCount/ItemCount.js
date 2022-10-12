import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import React, {useState} from 'react';
import "./ItemCount.css"


export const ItemCount = ({stock, initial, onAdd})=> {
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
        <div  className='botones'>
    <ButtonGroup  aria-label="Basic example">
       <button onClick={restar}>Restar</button>
        <button className='ButtonGroup' Click={onAdd}>{count}</button>
        <button onClick={sumar}>Sumar</button>
    </ButtonGroup>
    
    </div>
    )
}

{/* <Button onClick={restar} >Restar</Button>
    <Button onClick={onAdd}>Carrito {count}</Button>
    <Button onClick={sumar}>Sumar</Button> */}