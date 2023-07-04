import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <NavBar class="z-10"/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"¡Bienvenido!"} subtitle={"Si tenés plata para comprar un videojuego, ya sos gamer!"}/>}></Route>
        <Route path="/categoria/:idCategoria" element={<ItemListContainer greeting={"¡Bienvenido!"} subtitle={"Si tenés plata para comprar un videojuego, ya sos gamer!"}/>}></Route>
        <Route path="/game/:idGame" element={<ItemDetailContainer/>}></Route>
        <Route path="*" element={<h2>Not Found</h2>}></Route>
      </Routes>
    </BrowserRouter>
      
      
    </>
  )
}

export default App


