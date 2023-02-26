import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import ScrollToTop from './utils/scrollToTop';

// import goods from './pages/goods.json'

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
  window.scrollTo(0, 0)
  const promocodes = [
    {
      title: 'BMW',
      discount: 90,
    },
    {
      title: 'promocode123',
      discount: 30
    },
    {
      title: 'qwerty',
      discount: 22,
    },
    {
      title: 'zihteDrihte',
      discount: 69,
    }
  ]

  const [goods, setGoods] = useState([])
  useEffect(() => {
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
        <Route path="womazing/" element={<Layout />}>
          <Route index element={<Home goods={goods} />} />
          <Route path="catalog" element={<Catalog goods={goods} />} />
          <Route path="product/:id" element={<Product goods={goods} />} />
          <Route path="about-us" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="cart" element={<Cart promocodes={promocodes} />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<Success />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  </div>
}

export default App;
