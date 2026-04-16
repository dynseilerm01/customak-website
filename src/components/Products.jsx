function Products() {
  const products = [
    {
      emoji: "📦",
      category: "Boîtes personnalisées",
      description: "Boîtes kraft, rigides ou cartonnées. Idéales pour l'alimentaire, le retail et le e-commerce.",
      tag: "Populaire"
    },
    {
      emoji: "🛍️",
      category: "Sacs & pochettes",
      description: "Sacs papier, pochettes tissées ou plastifiées avec votre logo et vos couleurs.",
      tag: "Nouveau"
    },
    {
      emoji: "✉️",
      category: "Enveloppes & mailers",
      description: "Enveloppes personnalisées pour vos envois postaux et vos campagnes marketing.",
      tag: ""
    },
    {
      emoji: "🎁",
      category: "Coffrets cadeaux",
      description: "Coffrets premium sur mesure pour vos événements, lancements et offres spéciales.",
      tag: "Premium"
    },
    {
      emoji: "🏷️",
      category: "Étiquettes & stickers",
      description: "Étiquettes adhésives, stickers et labels pour compléter votre identité visuelle.",
      tag: ""
    },
    {
      emoji: "📋",
      category: "Intercalaires & calages",
      description: "Protégez vos produits avec des intercalaires sur mesure adaptés à vos boîtes.",
      tag: ""
    }
  ]

  return (
    <section className="products">
      <h2 className="products-title">Nos produits phares</h2>
      <p className="products-subtitle">
        Des solutions d'emballage pour chaque besoin, chaque secteur, chaque budget.
      </p>

      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>

            {product.tag && (
              <span className="product-tag">{product.tag}</span>
            )}

            <div className="product-emoji">{product.emoji}</div>
            <h3 className="product-category">{product.category}</h3>
            <p className="product-description">{product.description}</p>

            <button className="product-btn">Configurer →</button>

          </div>
        ))}
      </div>

      <div className="products-cta">
        <button className="btn-outline">Voir tout le catalogue</button>
      </div>

    </section>
  )
}

export default Products