import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const App = () => {
  return (
    <>
    <NavBar class="z-10"/>
    <ItemListContainer greeting={"¡Bienvenido!"} subtitle={"Si tenés plata para comprar un videojuego, ya sos gamer!"}/>
    </>
  )
}

export default App


