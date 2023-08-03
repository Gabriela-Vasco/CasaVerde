import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  { Layout, Home, Products, Testimonies, ShoppingCart } from './components/pages'
import './App.css'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="produtos" element={<Products />}/>
            <Route path="depoimentos" element={<Testimonies />}/>
            <Route path="carrinho" element={<ShoppingCart />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
