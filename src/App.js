import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/scrollToTop';

import Layout from './pages/Layout';
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Product from './pages/Product'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
import PageNotFound from './pages/PageNotFound';  

import './assets/styles/main.scss'
function App() {
  const [goods, setGoods] = useState([])
  useEffect(()=> {
    fetch('https://63e90f865f3e35d898fa3a13.mockapi.io/items?category')
    .then((res) => res.json())
    .then((arr) => {
      setGoods(arr)
    })
  }, [])
  
  return <div className='body__wrapper'>
    <Router>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home goods={goods}/>} />
            <Route path="catalog" element={<Catalog goods={goods}/>} />
            <Route path="product/:id" element={<Product goods={goods}/>} />
            <Route path="about-us" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="checkout/success" element={<Success />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
    </Router>
  </div>
}

export default App;
