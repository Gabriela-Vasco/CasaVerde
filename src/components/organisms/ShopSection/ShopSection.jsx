import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {ShopCard} from "../../molecules"
import "./ShopSection.css"

export default function ShopSection(){
    const [plants, setPlants] = useState([])

    const fetchData = async () => {
        fetch('https://my-json-server.typicode.com/Gabriela-Vasco/JsonServer/plants')
        .then( response => response.json())
        .then(data => setPlants(data)) }

    useEffect(() => {
        fetchData()
    }, [])

    const plantsElements = plants.slice(0, 4).map((plant) => (
            <ShopCard 
                key={plant.id}
                Imagem={plant.img}
                NomePlanta={plant.name}
                Valor={plant.preco}
            />
        )
    )

    return (
        <div className="shop-section">
            <div className="shop-section__title">
                <span>Conheça nossas</span>
                <h3>ofertas</h3>
            </div>
            <div className="shop-section__cards">
                {plantsElements}
            </div>
            <div className="shop-section__button">
                <Link className="shop-section__link" to="/produtos">Ver todos os produtos</Link>
            </div>
        </div>
    )
}