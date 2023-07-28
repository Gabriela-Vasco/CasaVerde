import {NavLink} from "react-router-dom";
import Logo from "../../atoms/Logo/Logo";
import "./Navbar.css"

export default function Navbar(){
    return (
        <div className="navbar">
            <NavLink to="/">
                <Logo />
            </NavLink>
            
            <div className="navbar__menu">    
                <NavLink to="como">Como Fazer</NavLink>

                <NavLink to="ofertas">Ofertas</NavLink>

                <NavLink to="depoimentos">Depoimentos</NavLink>

                <NavLink to="carrinho">Meu Carrinho</NavLink>
            </div>
        </div>

    )
}