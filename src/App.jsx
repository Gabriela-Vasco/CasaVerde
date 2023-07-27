import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Home  from '../src/components/pages/Home/Home'
import './App.css'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
