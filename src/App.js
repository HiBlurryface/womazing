import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import './assets/styles/styles.scss'

import Header from './components/Header'
import Footer from './components/Footer';

import Home from './pages/Home'
import Catalog from './pages/Catalog'
import About from './pages/About'
import Contacts from './pages/Contacts'

function App() {
  return <div className='body__wrapper'>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  </div>
}

export default App;
