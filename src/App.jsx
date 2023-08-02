import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  { Layout, Home, Products } from './components/pages'
import './App.css'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="produtos" element={<Products />}/>
            <Route path="depoimentos"/>
            <Route path="carrinho"/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
