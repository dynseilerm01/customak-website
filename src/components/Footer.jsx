import { useState } from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setTimeout(() => {
        setSubscribed(false)
        setEmail('')
      }, 3000)
    }
  }

  return (
    <footer className="footer">

      {/* Top — Logo + tagline centered */}
      <div className="footer-brand-center">
        <Link to="/">
          <img src={logo} alt="Customak" className="footer-logo-img" />
        </Link>
        <p className="footer-tagline">La plateforme pour votre packaging sur mesure</p>
      </div>

      {/* Middle — Grid with newsletter */}
      <div className="footer-grid-new">

        <div className="footer-column">
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-links">
            <li><a href="#">Comment ça marche</a></li>
            <li><a href="#">Commande d'échantillons</a></li>
            <li><a href="#">Devis personnalisé</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Entreprise</h4>
          <ul className="footer-links">
            <li><Link to="/a-propos">Qui sommes nous</Link></li>
            <li><Link to="/contact">Nous contacter</Link></li>
            <li><a href="#">Durabilité</a></li>
            <li><a href="#">Mentions légales</a></li>
            <li><Link to="/cgv">CGV</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Ressources</h4>
          <ul className="footer-links">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Kit d'échantillons</a></li>
            <li><a href="#">Inspirations</a></li>
            <li><a href="#">Blog</a></li>            
          </ul>
        </div>

        {/* Newsletter box */}
        <div className="footer-newsletter">
          <h4 className="newsletter-title">Rejoins notre newsletter et choppe -20% sur ta première commande.</h4>
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-btn">
              {subscribed ? '✓ Inscrit !' : 'Souscrire'}
            </button>
          </form>
        </div>

      </div>

      {/* Bottom — Socials + copyright */}
      <div className="footer-bottom">
        <div className="footer-socials">
          <a href="#" className="social-link">LinkedIn</a>
          <a href="#" className="social-link">Facebook</a>
          <a href="#" className="social-link">Instagram</a>
          <a href="https://wa.me/33782758679" target="_blank" rel="noreferrer" className="social-link">WhatsApp</a>
        </div>
        <p className="footer-copy">© 2024 Customak. Tous droits réservés.</p>
        <div className="footer-legal">
          <a href="#">Mentions légales</a>
          <Link to="/cgv">CGV</Link>
          <a href="#">Politique de confidentialité</a>
        </div>
      </div>

    </footer>
  )
}

export default Footer