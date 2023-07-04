import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

const App = () => {
  return (
    <>
    <NavBar class="z-10"/>
    <ItemListContainer greeting={"¡Bienvenido!"} subtitle={"Si tenés plata para comprar un videojuego, ya sos gamer!"}/>
    <ItemDetailContainer/>
    </>
  )
}

export default App


