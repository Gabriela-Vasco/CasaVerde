import { useState, useEffect } from "react"
import ShopCard from "../../molecules/ShopCard/ShopCard"
import "./Products.css"

export default function Products(){
    const [plants, setPlants] = useState([])

    const fetchData = async () => {
        fetch('http://localhost:3000/plants')
        .then( response => response.json())
        .then(data => setPlants(data)) }

    useEffect(() => {
        fetchData()
    }, [])

    const plantsElements = plants.map((plant) => (
            <ShopCard 
                key={plant.id}
                Imagem={plant.img}
                NomePlanta={plant.name}
                Valor={plant.preco}
            />
        )
    )

    return (
        <div className="products-container">
            <div className="products-title">
                <h3>Nossos Produtos</h3>
            </div>
            <div className="shop-section__cards">
                {plantsElements}
            </div>
        </div>
    )
}