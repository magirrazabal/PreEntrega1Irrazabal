import "./NavBar.css"
import LogoImagen from "../../assets/babel-logo2.png"
import {CartWidget} from "../CartWidget/CartWidget";
import {Link, NavLink} from "react-router-dom";

export const NavBar = ()=>{
    return(
        <nav className="menuNav">
            <Link to="/"><img className="logo" src={LogoImagen} alt="logo" /></Link>
            <ul className="menuItems">
                <NavLink className={({isActive})=> isActive === true ? "activePag" : "sleepingPag"} to="/"><li>Inicio</li></NavLink>
                <NavLink className={({isActive})=> isActive === true ? "activePag" : "sleepingPag"} to="/category/ficcion"><li>Ficción</li></NavLink>
                <NavLink className={({isActive})=> isActive === true ? "activePag" : "sleepingPag"} to="/category/noficcion"><li>No ficción</li></NavLink>
                <NavLink className={({isActive})=> isActive === true ? "activePag" : "sleepingPag"} to="/category/academico"><li>Académicos</li></NavLink>
                <NavLink className={({isActive})=> isActive === true ? "activePag" : "sleepingPag"} to="/category/infantiles"><li>Infantiles</li></NavLink>
            </ul>
        <CartWidget/>
        </nav>
    )
}