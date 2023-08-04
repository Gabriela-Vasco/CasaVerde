import "./HowCard.css"
import imgHowCard from "../../../assets/imageHowCard.png"

export default function HowCard() {
    return (
        <div className="how-card">
            <img className="how-card__img" src={imgHowCard}/>
            <div className="how-card__text">
                <span>Como conseguir</span>
                <h3>minha planta</h3>
                <ul className="how-card__list">
                    <li>
                        <div className="how-card--circle"></div>
                        <span>Escolha suas plantas</span>
                    </li>
                    <li>
                        <div className="how-card--circle"></div>
                        <span>Faça seu pedido</span>
                    </li>
                    <li>
                        <div className="how-card--circle"></div>
                        <span>Aguarde na sua casa</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}