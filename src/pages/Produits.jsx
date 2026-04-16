import { useState } from 'react'
import '../styles/Produits.css'

const allProducts = [
  {
    emoji: "📦",
    name: "Boîte kraft personnalisée",
    category: "Boîtes",
    description: "Boîte kraft naturelle personnalisable. Idéale pour l'alimentaire et le retail.",
    moq: "500 unités",
    delay: "10-15 jours",
    tag: "Populaire"
  },
  {
    emoji: "📦",
    name: "Boîte rigide premium",
    category: "Boîtes",
    description: "Boîte rigide haut de gamme pour vos produits premium et cadeaux d'entreprise.",
    moq: "500 unités",
    delay: "15-20 jours",
    tag: "Premium"
  },
  {
    emoji: "🛍️",
    name: "Sac papier personnalisé",
    category: "Sacs",
    description: "Sac papier kraft ou couché avec votre logo. Parfait pour boutiques et retail.",
    moq: "500 unités",
    delay: "10-15 jours",
    tag: "Nouveau"
  },
  {
    emoji: "🛍️",
    name: "Pochette tissée",
    category: "Sacs",
    description: "Pochette tissée réutilisable, écologique et personnalisable à votre image.",
    moq: "500 unités",
    delay: "15-20 jours",
    tag: ""
  },
  {
    emoji: "🎁",
    name: "Coffret cadeau sur mesure",
    category: "Coffrets",
    description: "Coffret premium pour vos événements, lancements de produits et offres spéciales.",
    moq: "500 unités",
    delay: "20-25 jours",
    tag: "Premium"
  },
  {
    emoji: "✉️",
    name: "Enveloppe personnalisée",
    category: "Enveloppes",
    description: "Enveloppes à votre couleur pour vos envois postaux et campagnes marketing.",
    moq: "1000 unités",
    delay: "7-10 jours",
    tag: ""
  },
  {
    emoji: "🏷️",
    name: "Étiquettes adhésives",
    category: "Étiquettes",
    description: "Étiquettes autocollantes personnalisées pour vos produits et emballages.",
    moq: "1000 unités",
    delay: "7-10 jours",
    tag: "Populaire"
  },
  {
    emoji: "🏷️",
    name: "Stickers & labels",
    category: "Étiquettes",
    description: "Stickers ronds, carrés ou sur mesure pour compléter votre identité visuelle.",
    moq: "1000 unités",
    delay: "7-10 jours",
    tag: ""
  },
  {
    emoji: "📋",
    name: "Intercalaires de calage",
    category: "Accessoires",
    description: "Protégez vos produits avec des intercalaires sur mesure adaptés à vos boîtes.",
    moq: "500 unités",
    delay: "10-15 jours",
    tag: ""
  }
]

const categories = ["Tout", "Boîtes", "Sacs", "Coffrets", "Enveloppes", "Étiquettes", "Accessoires"]

function Produits() {
  const [activeCategory, setActiveCategory] = useState("Tout")

  const filteredProducts = activeCategory === "Tout"
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory)

  return (
    <div className="produits-page">

      {/* Header */}
      <div className="produits-header">
        <div className="produits-header-text">
          <h1>Emballage personnalisé</h1>
          <p>Concevez et commandez des emballages entièrement personnalisés pour votre marque.</p>
          <div className="produits-badges">
            <span className="badge">📦 MOQ à partir de 500 unités</span>
            <span className="badge">🎨 100% sur mesure</span>
            <span className="badge">🌍 Livraison Afrique</span>
          </div>
        </div>
      </div>

      {/* Body — sidebar + grid */}
      <div className="produits-body">

        {/* Sidebar */}
        <div className="produits-sidebar">
          <p className="sidebar-title">Catégories</p>
          <ul className="sidebar-list">
            {categories.map((cat, index) => (
              <li
                key={index}
                className={`sidebar-item ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
                <span className="sidebar-count">
                  {cat === "Tout"
                    ? allProducts.length
                    : allProducts.filter(p => p.category === cat).length}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Main content */}
        <div className="produits-main">
          <p className="produits-count">
            {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''}
          </p>

          <div className="produits-grid">
            {filteredProducts.map((product, index) => (
              <div className="produit-card" key={index}>

                {product.tag && (
                  <span className="produit-tag">{product.tag}</span>
                )}

                <div className="produit-visual">{product.emoji}</div>

                <div className="produit-info">
                  <h3 className="produit-name">{product.name}</h3>
                  <p className="produit-description">{product.description}</p>

                  <div className="produit-meta">
                    <span>📦 MOQ : {product.moq}</span>
                    <span>⏱️ {product.delay}</span>
                  </div>

                  <button className="produit-btn">
                    Configurer ce produit
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Produits