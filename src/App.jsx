import './App.css'
import ItemListContainer from './componentes/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'

function App() {

  return (
    <>
      <div id="app">
      <NavBar />
      <ItemListContainer saludo = {"Bienvenidos a mi ecommerce de limpieza"} />
      </div>
    </>
  )
}

export default App
