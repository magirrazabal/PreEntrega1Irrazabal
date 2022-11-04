import logo from './logo.svg';
import './App.css';
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CustomProvider } from './context/CartContext';
import { CartContainer } from './components/CartContainer/CartContainer';

function App() {
  return (
    <CustomProvider>
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />}></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer />}></Route>
          <Route path='/item/:id' element={<ItemDetailContainer />}></Route>
          <Route path='/cart' element={<CartContainer/>}/>
          </Routes>
      </div>
    </BrowserRouter>
    </CustomProvider>
  );
}

export default App;
