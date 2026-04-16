import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Produits from './pages/Produits'
import APropos from './pages/APropos'
import Contact from './pages/Contact'
import CGV from './pages/CGV'
import './styles/Navbar.css'
import './styles/Hero.css'
import './styles/Features.css'
import './styles/Process.css'
import './styles/Products.css'
import './styles/Footer.css'
import './styles/Pages.css'
import './styles/APropos.css'
import './styles/CGV.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produits" element={<Produits />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cgv" element={<CGV />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App