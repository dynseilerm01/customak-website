import { useState } from 'react'
import '../styles/Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="contact-page">

      <div className="contact-header">
        <h1>Contactez-nous</h1>
        <p>Notre équipe vous répond dans les 24 heures.</p>
      </div>

      <div className="contact-body">

        <div className="contact-form-wrapper">
          {submitted ? (
            <div className="contact-success">
              <div className="success-icon">✅</div>
              <h3>Message envoyé !</h3>
              <p>Merci pour votre message. Nous vous répondrons très bientôt.</p>
              <button className="btn-primary" onClick={() => setSubmitted(false)}>
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>

              <div className="form-group">
                <label>Nom complet</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Sujet</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choisissez un sujet</option>
                  <option value="devis">Demande de devis</option>
                  <option value="echantillon">Commande d'échantillon</option>
                  <option value="information">Demande d'information</option>
                  <option value="partenariat">Partenariat B2B</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Décrivez votre projet ou votre demande..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                />
              </div>

              <button type="submit" className="btn-submit">
                Envoyer le message
              </button>

            </form>
          )}
        </div>

        <div className="contact-info">

          <h3 className="contact-info-title">Nos coordonnées</h3>

          <div className="contact-info-cards">

            <a href="https://wa.me/33782758679" target="_blank" rel="noreferrer" className="info-card whatsapp">
              <span className="info-icon">💬</span>
              <div>
                <strong>WhatsApp</strong>
                <p>Discutez avec nous directement</p>
              </div>
            </a>

            <a href="mailto:customakcg@gmail.com" className="info-card">
              <span className="info-icon">✉️</span>
              <div>
                <strong>Email</strong>
                <p>customakcg@gmail.com</p>
              </div>
            </a>

            <a href="tel:+33782758679" className="info-card">
              <span className="info-icon">📞</span>
              <div>
                <strong>Téléphone</strong>
                <p>+33 7 82 75 86 79</p>
              </div>
            </a>

            <div className="info-card">
              <span className="info-icon">📅</span>
              <div>
                <strong>Rendez-vous</strong>
                <p>Planifiez un appel avec notre équipe</p>
              </div>
            </div>

          </div>

          <div className="contact-badge">
            <p>⚡ Temps de réponse moyen : <strong>moins de 24h</strong></p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Contact