import "./App.css";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


function App() { 
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer saludo="Bienvenidos a Limpialoom" />} />
        <Route path="/categorias/:categoria" element={<ItemListContainer saludo="Bienvenidos a Limpialoom" />} />
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;