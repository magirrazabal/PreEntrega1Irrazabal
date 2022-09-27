import "./NavBar.css"
import LogoImagen from "../../assets/babel-logo2.png"
import {CartWidget} from "../CartWidget/CartWidget";

export const NavBar = ()=>{
    return(
        <nav className="menuNav">
            <img className="logo" src={LogoImagen} alt="logo" />
            <ul className="menuItems">
                <li><a href=""> Inicio</a></li>
                <li><a href="">Ficción</a></li>
                <li><a href="">No ficción</a></li>
                <li><a href="">Académico</a></li>
                <li><a href="">Infantiles</a></li>
            </ul>
        <CartWidget/>
        </nav>
    )
}