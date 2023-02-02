import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import './assets/styles/main.scss'

import Header from './components/ordinary/Header'
import Footer from './components/ordinary/Footer';

import Home from './pages/Home'
import Catalog from './pages/Catalog'
import About from './pages/About'
import Contacts from './pages/Contacts'

function App() {

  return <div className='body__wrapper'>
    <Router>
      <Header />
      <main className='main'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </div>
}

export default App;
