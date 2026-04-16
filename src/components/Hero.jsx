import heroImage from '../assets/hero.png'

function Hero() {
  return (
    <section className="hero">

      <div className="hero-text">
        <h1 className="hero-title">
          Votre packaging, <br />
          <span className="hero-highlight">pensé pour l'Afrique</span>
        </h1>

        <p className="hero-subtitle">
          Créez des emballages sur mesure, professionnels et abordables,
          livrés partout en Afrique centrale.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Lancer mon projet</button>
          <button className="btn-secondary">Voir les produits</button>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Customak packaging" />
      </div>

    </section>
  )
}

export default Hero