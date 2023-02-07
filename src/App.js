import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Header from './components/ordinary/header/Header'
import Footer from './components/ordinary/footer/Footer';

import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Product from './pages/Product'
import About from './pages/About'
import Contacts from './pages/Contacts'

import './assets/styles/main.scss'

function App() {

  return <div className='body__wrapper'>
    <Router>
      <Header />
      <main className='main'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </div>
}

export default App;
