import "./ShopCard.css"

export default function ShopCard({Imagem, NomePlanta, Valor}){
    return (
        <div className="shop-card">
            <img src={Imagem} className="shop-card__img"/>
            <div className="shop-card__text">
                <h4>{NomePlanta}</h4>
                <span>{Valor}</span>
                <button className="shop-card__button">
                    Comprar
                    <svg className="shop-card__button--svg" width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4.9494H15" stroke="#FFCB47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 1L15 4.94931L8 8.89862" stroke="#FFCB47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}