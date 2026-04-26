import '../styles/APropos.css'
import { Link } from 'react-router-dom'
import '../styles/APropos.css'

function APropos() {
  return (
    <div className="apropos-page">

      {/* Hero */}
      <div className="apropos-hero">
        <h1>Le packaging vu autrement</h1>
        <p>Customak simplifie et améliore l'accès à des emballages personnalisés sur le marché africain.</p>
      </div>

      {/* Histoire */}
      <div className="apropos-story">
        <div className="story-content">
          <span className="story-label">Notre histoire</span>
          <h2>Né d'une observation simple</h2>
          <p>Customak est une entreprise créée en 2024, spécialisée dans la création et la commercialisation de solutions d'emballage personnalisées à destination des professionnels sur le marché africain.</p>
          <p>Le projet est né d'un constat : malgré une offre existante, l'accès à des emballages personnalisés reste contraint par des logiques d'importation, des coûts élevés et des exigences de production peu adaptées. Dans ce contexte, de nombreuses entreprises n'ont pas les moyens de structurer pleinement leur image à travers leur packaging.</p>
        </div>
        <div className="story-visual">
          <div className="story-stat">
            <span className="stat-number">2024</span>
            <span className="stat-label">Année de création</span>
          </div>
          <div className="story-stat">
            <span className="stat-number">500+</span>
            <span className="stat-label">Unités minimum par commande</span>
          </div>
          <div className="story-stat">
            <span className="stat-number">100%</span>
            <span className="stat-label">Sur mesure</span>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="apropos-mission">
        <div className="mission-inner">
          <span className="story-label light">Notre mission</span>
          <h2>Simplifier l'accès au packaging personnalisé en Afrique</h2>
          <p>Nous développons des solutions qui permettent aux entreprises de protéger, présenter et valoriser leurs produits, tout en respectant leurs contraintes de production, de budget et de logistique.</p>
        </div>
      </div>

      {/* Valeurs */}
      <div className="apropos-values">
        <h2 className="values-title">Notre approche</h2>
        <p className="values-subtitle">Chaque projet est défini à partir de paramètres essentiels : le produit, son usage, les volumes et les contraintes associées.</p>

        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">🎯</div>
            <h3>Usage avant tout</h3>
            <p>Chaque solution est conçue à partir des besoins réels du client — pas de standardisation excessive.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h3>Partenaires de confiance</h3>
            <p>Nous nous appuyons sur un réseau de partenaires rigoureux pour proposer une offre diversifiée et fiable.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">⚡</div>
            <h3>Réactivité</h3>
            <p>Des processus clairs et une organisation flexible pour répondre aux spécificités de chaque marché.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🌍</div>
            <h3>Ancrage africain</h3>
            <p>Une connaissance profonde des réalités économiques et logistiques du marché africain.</p>
          </div>
        </div>
      </div>

      {/* Engagement */}
      <div className="apropos-engagement">
        <div className="engagement-inner">
          <h2>Notre engagement</h2>
          <p>Nous nous engageons à maintenir un niveau d'exigence constant dans la qualité des solutions proposées et dans le suivi des projets. Cela implique des processus clairs, une sélection rigoureuse des partenaires et une attention particulière portée à l'exécution.</p>
          <p>Notre objectif est de construire des relations durables, fondées sur la confiance, la transparence et la cohérence des résultats.</p>
          <Link to="/contact" className="engagement-cta">Contactez-nous</Link>
          
        </div>
      </div>

    </div>
  )
}

export default APropos