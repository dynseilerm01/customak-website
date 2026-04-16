import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar">

      <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
        <img src={logo} alt="Customak" className="navbar-logo-img" />
      </NavLink>

      {/* Desktop links */}
      <ul className="navbar-links">
        <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active-link' : ''}>Accueil</NavLink></li>
        <li><NavLink to="/produits" className={({ isActive }) => isActive ? 'active-link' : ''}>Produits</NavLink></li>
        <li><NavLink to="/a-propos" className={({ isActive }) => isActive ? 'active-link' : ''}>À propos</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active-link' : ''}>Contact</NavLink></li>
      </ul>

      <button className="navbar-cta desktop-only">Lancer mon projet</button>

      {/* Hamburger button — mobile only */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <NavLink to="/" end onClick={closeMenu}>Accueil</NavLink>
          <NavLink to="/produits" onClick={closeMenu}>Produits</NavLink>
          <NavLink to="/a-propos" onClick={closeMenu}>À propos</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          <button className="navbar-cta mobile-cta">Lancer mon projet</button>
        </div>
      )}

    </nav>
  )
}

export default Navbar