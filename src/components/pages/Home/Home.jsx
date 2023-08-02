import {Navbar, Newsletter, HowCard, ShopSection} from "../../../components/organisms"
import "./Home.css"
import "../../../assets/imagem-hero.png"

export default function Home(){
    return (
        <div className="home">
            <Navbar />

            <div className="home__background">
                <svg xmlns="http://www.w3.org/2000/svg" width="955" height="637" viewBox="0 0 955 637" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M284.914 -328.488C378.816 -388.839 500.328 -305.147 606.445 -270.44C695.841 -241.201 781.671 -207.371 850.687 -143.445C922.505 -76.9232 976.461 4.47409 1004.51 98.2672C1036.23 204.339 1064.83 320.816 1019.74 421.899C973.65 525.226 876.3 611.001 765.538 633.99C662.06 655.466 576.585 552.577 472.273 535.525C367.351 518.373 251.989 590.47 161.155 535.189C65.3803 476.901 -6.1279 360.625 1.04142 248.736C8.06001 139.198 147.437 91.9167 195.868 -6.56121C246.231 -108.969 188.927 -266.797 284.914 -328.488Z" fill="#FFCB47"/>
                </svg>
                <img src="src/assets/imagem-hero.png" />
            </div>
            
            <div className="home__text">
                <span>Sua casa com as</span>
                <h3>melhores plantas</h3>
                <span>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</span>
            </div>

            <Newsletter />

            <HowCard />

            <ShopSection />
        </div>
    )
}