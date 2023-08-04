import { useState, useEffect } from "react"
import ShopCard from "../../molecules/ShopCard/ShopCard"
import "./Products.css"

export default function Products(){
    const [plants, setPlants] = useState([])
    const [minPrice, setMinPrice] = useState()
    const [maxPrice, setMaxPrice] = useState()
    const [isCheckedName, setIsCheckedName] = useState(false);
    const [isCheckedPrice, setIsCheckedPrice] = useState(false);
    const [cart, setCart] = useState([]);

    const fetchData = async () => {
        fetch('https://my-json-server.typicode.com/Gabriela-Vasco/JsonServer/plants')
        .then( response => response.json())
        .then(data => setPlants(data)) }

    useEffect(() => {
        fetchData()
    }, [])


    const plantsElements = plants.map((plant) => (
                                    <ShopCard
                                        key={plant.id}
                                        id={plant.id}
                                        Imagem={plant.img}
                                        NomePlanta={plant.name}
                                        Valor={plant.preco}
                                        addToCart={() => setCart([...cart, { Imagem, NomePlanta, Valor, quantidade: 1}])}
                                    />
                                )
                            )
    function handleChange(e){
        if(e.target.value === "Nome"){ 
            setIsCheckedName(!isCheckedName)
            sortByName() 
        }
        if(e.target.value === "Preço") {
            setIsCheckedPrice(!isCheckedPrice)
            sortByPrice()
        }
    }
    

    function sortByName(){
        const sortedPlants = [...plants].sort((a, b) => {
            if(a.name > b.name){
                return 1
            } else if (a.name < b.name){
                return -1
            } else {
                return 0
            }
        })
        setPlants(sortedPlants)
    }

    function sortByPrice(){
        const sortedPlants = [...plants].sort((a, b) => {
            if(a.preco > b.preco){
                return 1
            } else if (a.preco < b.preco){
                return -1
            } else {
                return 0
            }
        })
        setPlants(sortedPlants)
    }

    function filterPlants(){
        const filteredPlants = [...plants].filter((plant) => {
            if(plant.preco >= minPrice && plant.preco <= maxPrice){
                return true
            } else {
                return false
            }
        })
        setPlants(filteredPlants)
    }

    return (
        <div className="products-container">
            <div className="products-title">
                <h3>Nossos Produtos</h3>
            </div>
            <div className="products__sort">
                <span>Ordenar por:</span>
                <label htmlFor="name">Nome</label>
                <input 
                    type="checkbox" 
                    id="name" 
                    name="name" 
                    value="Nome"
                    checked={isCheckedName}
                    onChange={handleChange}
                />
                <label htmlFor="price">Preço</label>
                <input 
                    type="checkbox" 
                    id="price" 
                    name="price"
                    value="Preço"
                    checked={isCheckedPrice}
                    onChange={handleChange}
                />
            </div>
            <div className="products__filter">
                <span>Preço:</span>
                <input 
                    className="products__filter-input"
                    type="number" 
                    placeholder="Min"
                    onChange={(e) => setMinPrice(e.target.value)}
                    value={minPrice} 
                />
                <input 
                    className="products__filter-input"
                    type="number" 
                    placeholder="Max" 
                    onChange={(e) => setMaxPrice(e.target.value)}
                    value={maxPrice}
                />
                <button className="products__filter-button" onClick={filterPlants}>Filtrar</button>
            </div>
            <div className="products__cards">
                {plantsElements}
            </div>
        </div>
    )
}