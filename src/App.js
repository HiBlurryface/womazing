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

  return <div className='body__wrapper'>
    <Router>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="product" element={<Product />} />
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
