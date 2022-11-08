import "./NavBar.css"
import { CartWidget } from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import LogoImagen from "../../assets/babel-logo2.png"

export const NavBar = () => {
    const categorias = [
        { url: "ficcion", name: "Ficción" },
        { url: "noficcion", name: "No ficción" },
        { url: "academico", name: "Académicos" },
        { url: "infantiles", name: "Infantiles" },

    ]
    return (
        <nav className="menuNav">
            <Link to="/"><img className="logo" src={LogoImagen} alt="logo" /></Link>
            <ul className="menuItems">

                <div className="navItems"><NavLink className={({ isActive }) => isActive === true ? "activePag" : "sleepingPag"} to="/"><li>Inicio</li></NavLink>
                    {
                        categorias.map(category => (
                            <NavLink className={({ isActive }) => isActive === true ? "activePag" : "sleepingPag"} to={`/category/${category.url}`}><li>{category.name}</li></NavLink>
                        ))
                    }
                </div>
            </ul>
            <Link to='/cart'>
                <CartWidget />
            </Link>
        </nav>
    )
}