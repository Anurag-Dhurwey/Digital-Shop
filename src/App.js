
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Sub_components/Home';
import { Navbar } from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Home/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
