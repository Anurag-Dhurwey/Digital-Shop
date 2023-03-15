
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Sub_components/Home';
import { Navbar } from './Components/Navbar';
import Footer from './Components/Footer';
import Products from './Components/Sub_components/Products';
import { useGlobleContext } from './Context/Globle_Context';
import Aproduct from './Components/Sub_components/Aproduct';
import CartPage from './Components/Sub_components/CartPage';

function App() {
  const {enabled}=useGlobleContext()
  if(enabled){document.body.style.backgroundColor='rgb(34, 34, 34)'}else{document.body.style.backgroundColor='rgb(192,192,192)'}
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/product/:id' element={<Aproduct/>} />
      <Route path='/cart' element={<CartPage/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
