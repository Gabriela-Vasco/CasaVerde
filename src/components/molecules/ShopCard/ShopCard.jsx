import { useState } from "react"
import { Link } from "react-router-dom"
import "./ShopCard.css"

export default function ShopCard({id, Imagem, NomePlanta, Valor}){
    const [cart, setCart] = useState([]);

    function addToCart(){   
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        if(cart.some((item) => item.id === id)){
            const newCart = cart.map((item) => {
                if(item.id === id){
                    return {...item, quantidade: item.quantidade + 1}
                } else {
                    return item
                }
            })
            localStorage.setItem("cart", JSON.stringify(newCart));
            return setCart(newCart);
        };
        const newCart = [...cart, {id, Imagem, NomePlanta, Valor, quantidade: 1}];
        localStorage.setItem("cart", JSON.stringify(newCart));
        setCart(newCart);
    }

    return (
        <div className="shop-card" key={id}>
            <img src={Imagem} className="shop-card__img"/>
            <div className="shop-card__text">
                <h4>{NomePlanta}</h4>
                <span>R$ {
                Valor.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })
                }</span>
                 <Link
                    to={`/carrinho`}
                 >
                    <button className="shop-card__button" onClick={addToCart}>
                        Comprar
                        <svg className="shop-card__button--svg" width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 4.9494H15" stroke="#FFCB47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8 1L15 4.94931L8 8.89862" stroke="#FFCB47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    )
}