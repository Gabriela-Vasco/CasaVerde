import ShopCard from "../../molecules/ShopCard/ShopCard"
import "./ShopSection.css"

export default function ShopSection(){
    return (
        <div className="shop-section">
            <div className="shop-section__title">
                <span>Conheça nossas</span>
                <h3>ofertas</h3>
            </div>
            <div className="shop-section__cards">
                <ShopCard />
            </div>
        </div>
    )
}