import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Appbar from './Components/Navbar/Appbar';
import Slider from './Components/Slider/Slider';
import Product from './Components/Product/Product';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Review from './Components/Review/Review';
import Allproduct from './Components/Allproduct/Allproduct';
import {
  Routes,
  Route,
} from "react-router-dom";
import ScrollToTop from './Components/ScrollToTop';
function App() {
  return (
    <div className='App'>

      <Appbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<>
          <Slider />
          <Product />
          <About />
          <Review />
        </>} />
        <Route path='/product' element={<Product />} />
        <Route path='/about' element={<><About /><Review /></>} />
        <Route path='/product/:item' element={<Allproduct />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
