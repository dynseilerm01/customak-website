import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">

      {/* Top — Logo + tagline centered */}
      <div className="footer-brand-center">
        <img src={logo} alt="Customak" className="footer-logo-img" />
        <p className="footer-tagline">La plateforme pour votre packaging sur mesure</p>
      </div>

      {/* Middle — Wide columns grid */}
      <div className="footer-grid">

        <div className="footer-column">
          <h4 className="footer-heading">Contact</h4>
          <ul className="footer-links">
            <li><a href="tel:+33782758679">📞 +33 7 82 75 86 79</a></li>
            <li><a href="mailto:customakcg@gmail.com">✉️ customakcg@gmail.com</a></li>
            <li><a href="https://wa.me/33782758679" target="_blank" rel="noreferrer">💬 WhatsApp</a></li>
            <li><a href="#">📅 Prendre rendez-vous</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Produits</h4>
          <ul className="footer-links">
            <li><a href="#">Boîtes personnalisées</a></li>
            <li><a href="#">Sacs & pochettes</a></li>
            <li><a href="#">Coffrets cadeaux</a></li>
            <li><a href="#">Enveloppes</a></li>
            <li><a href="#">Étiquettes & stickers</a></li>
            <li><a href="#">Voir le catalogue</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-links">
            <li><a href="#">Comment ça marche</a></li>
            <li><a href="#">Configurateur 3D</a></li>
            <li><a href="#">Commande d'échantillons</a></li>
            <li><a href="#">Devis personnalisé</a></li>
            <li><a href="#">Livraison Afrique</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Secteurs</h4>
          <ul className="footer-links">
            <li><a href="#">Alimentaire</a></li>
            <li><a href="#">Cosmétique</a></li>
            <li><a href="#">E-commerce</a></li>
            <li><a href="#">Retail & boutiques</a></li>
            <li><a href="#">Événementiel</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Entreprise</h4>
          <ul className="footer-links">
            <li><a href="#">À propos</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Partenaires B2B</a></li>
            <li><a href="#">Mentions légales</a></li>
            <li><Link to="/cgv">CGV</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom — Socials + copyright */}
      <div className="footer-bottom">
        <div className="footer-socials">
          <a href="#" className="social-link">LinkedIn</a>
          <a href="#" className="social-link">Facebook</a>
          <a href="#" className="social-link">Instagram</a>
          <a href="#" className="social-link">WhatsApp</a>
        </div>
        <p className="footer-copy">© 2024 Customak. Tous droits réservés.</p>
        <div className="footer-legal">
          <Link to="/mentions-legales">Mentions légales</Link>
          <Link to="/cgv">CGV</Link>
          <Link to="/confidentialite">Confidentialité</Link>
        </div>
      </div>

    </footer>
  )
}

export default Footer