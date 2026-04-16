function Features() {
  const features = [
    {
      icon: "💰",
      title: "Prix compétitifs",
      description: "Des tarifs adaptés aux réalités économiques africaines, sans compromis sur la qualité."
    },
    {
      icon: "⚡",
      title: "Délais rapides",
      description: "Production et livraison optimisées pour que vous receviez vos emballages à temps."
    },
    {
      icon: "🎨",
      title: "100% sur mesure",
      description: "Dimensions, couleurs, finitions, logo — chaque détail est personnalisé selon vos besoins."
    },
    {
      icon: "🌍",
      title: "100% africain",
      description: "Une équipe locale qui comprend vos marchés, vos contraintes et vos ambitions."
    }
  ]

  return (
    <section className="features">
      <h2 className="features-title">Pourquoi choisir Customak ?</h2>
      <p className="features-subtitle">
        Nous combinons expertise, proximité et technologie pour vous offrir le meilleur du packaging sur mesure.
      </p>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features