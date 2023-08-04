import {NavLink} from "react-router-dom";
import Logo from "../../atoms/Logo/Logo";
import "./Navbar.css"

export default function Navbar(){
    const activeStyles = {
        color: "#228B22"
    }

    return (
        <div className="navbar">
            <NavLink to="/">
                <Logo />
            </NavLink>

                           
            <div className={`navbar__menu`}>
                <NavLink 
                    to="/depoimentos"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Depoimentos
                </NavLink>

                <NavLink 
                    to="/produtos"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Produtos
                </NavLink>

                <NavLink 
                    to="/carrinho"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Meu Carrinho
                </NavLink>
            
            </div> 
        </div>

    )
}