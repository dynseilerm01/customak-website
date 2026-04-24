import { useState } from 'react'
import '../styles/Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    entreprise: '',
    sujet: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        entreprise: '',
        sujet: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <div className="contact-page">

      {/* Hero simple */}
      <div className="contact-hero">
        <h1>Contactez-nous</h1>
        <p>Notre équipe est à votre écoute pour répondre à toutes vos questions</p>
      </div>

      {/* Layout 2 colonnes */}
      <div className="contact-layout">

        {/* Formulaire */}
        <div className="contact-form-section">
          <h2>Envoyez-nous un message</h2>
          <p className="form-intro">Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais.</p>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nom">Nom complet *</label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  placeholder="Jean Dupont"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="jean@entreprise.com"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="telephone">Téléphone</label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  placeholder="+33 6 12 34 56 78"
                />
              </div>
              <div className="form-group">
                <label htmlFor="entreprise">Entreprise</label>
                <input
                  type="text"
                  id="entreprise"
                  name="entreprise"
                  value={formData.entreprise}
                  onChange={handleChange}
                  placeholder="Nom de votre entreprise"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="sujet">Sujet *</label>
              <select
                id="sujet"
                name="sujet"
                value={formData.sujet}
                onChange={handleChange}
                required
              >
                <option value="">Sélectionnez un sujet</option>
                <option value="devis">Demande de devis</option>
                <option value="echantillon">Commander un échantillon</option>
                <option value="info">Informations produits</option>
                <option value="partenariat">Partenariat B2B</option>
                <option value="autre">Autre question</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Décrivez votre projet ou votre besoin..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              {submitted ? '✓ Message envoyé !' : 'Envoyer le message'}
            </button>
          </form>
        </div>

        {/* Infos de contact */}
        <div className="contact-info-section">
          <h2>Nos coordonnées</h2>
          
          <div className="info-cards">
            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Téléphone</h3>
              <a href="tel:+33782758679">+33 7 82 75 86 79</a>
              <p>Lun - Ven : 9h - 18h</p>
            </div>

            <div className="info-card">
              <div className="info-icon">✉️</div>
              <h3>Email</h3>
              <a href="mailto:customakcg@gmail.com">customakcg@gmail.com</a>
              <p>Réponse sous 24h</p>
            </div>

            <div className="info-card whatsapp-card">
              <div className="info-icon">💬</div>
              <h3>WhatsApp</h3>
              <a href="https://wa.me/33782758679" target="_blank" rel="noreferrer">
                Chattez avec nous
              </a>
              <p>Réponse immédiate</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📅</div>
              <h3>Rendez-vous</h3>
              <a href="#">Planifier un appel</a>
              <p>Consultation gratuite</p>
            </div>
          </div>

          <div className="contact-cta">
            <h3>Besoin d'aide pour choisir ?</h3>
            <p>Notre équipe commerciale est disponible pour vous accompagner dans votre projet packaging.</p>
            <a href="https://wa.me/33782758679" className="cta-whatsapp" target="_blank" rel="noreferrer">
              Démarrer une conversation
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact