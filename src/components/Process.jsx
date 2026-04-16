function Process() {
  const steps = [
    {
      number: "01",
      title: "Configurez",
      description: "Choisissez votre type d'emballage, vos dimensions, vos matériaux et vos finitions."
    },
    {
      number: "02",
      title: "Visualisez",
      description: "Prévisualisez votre packaging en temps réel avant de valider votre design."
    },
    {
      number: "03",
      title: "Commandez",
      description: "Passez votre commande en ligne en toute sécurité. MOQ à partir de 500 unités."
    },
    {
      number: "04",
      title: "Recevez",
      description: "Votre packaging personnalisé est produit et livré directement chez vous."
    }
  ]

  return (
    <section className="process">
      <h2 className="process-title">Comment ça marche ?</h2>
      <p className="process-subtitle">
        De l'idée à la livraison, un processus simple et transparent en 4 étapes.
      </p>

      <div className="process-steps">
        {steps.map((step, index) => (
          <div className="process-step" key={index}>

            <div className="step-number">{step.number}</div>

            {index < steps.length - 1 && (
              <div className="step-arrow">→</div>
            )}

            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Process