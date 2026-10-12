'use client';

import { useState } from 'react';
import { Layers, FileSpreadsheet, Check, ArrowRight, MessageSquare, Download } from 'lucide-react';
import { productCatalog, companyDetails } from '../data/content';

const categories = [
  "All Products",
  "Vessels & Tanks",
  "Piping & Valves",
  "Conveyors & Handling",
  "Structural Fabrication",
  "Pharma Equipment"
];

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState("All Products");

  const filteredProducts = activeCategory === "All Products"
    ? productCatalog
    : productCatalog.filter(p => p.category === activeCategory);

  return (
    <section id="catalog" className="catalog-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">B2B Machinery & Product Showcase</span>
          <h2 className="section-title">
            Product & <span>Machinery Catalog</span>
          </h2>
          <p className="section-desc">
            Heavy-duty industrial machinery, stainless steel vessels, pressure piping modules, and cleanroom pharma accessories manufactured to stringent industrial standards.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`tab-btn ${activeCategory === cat ? 'active-tab' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.map((item) => (
            <div key={item.id} className="product-card">
              <div className="product-image-box">
                <img src={item.image} alt={item.name} className="product-img" />
                <span className="product-cat-pill">{item.category}</span>
              </div>

              <div className="product-content">
                <h3 className="product-name">{item.name}</h3>

                <div className="product-meta">
                  <div className="meta-item">
                    <span className="meta-label">Capacity / Rating:</span>
                    <strong className="meta-val">{item.capacity}</strong>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Material:</span>
                    <strong className="meta-val">{item.material}</strong>
                  </div>
                </div>

                <div className="product-features">
                  {item.features.map((feat, i) => (
                    <div key={i} className="prod-feat-item">
                      <Check size={14} className="feat-check" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="product-actions">
                  <a 
                    href={`https://wa.me/${companyDetails.phoneRaw}?text=Hi%20Athetec%20Technologies,%20please%20provide%20pricing%20and%20spec%20sheet%20for:%20${encodeURIComponent(item.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary product-inquire-btn"
                  >
                    <MessageSquare size={16} />
                    <span>Inquire Price / RFQ</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Catalog Download Banner */}
        <div className="catalog-banner">
          <div className="banner-info">
            <FileSpreadsheet size={36} className="banner-file-icon" />
            <div>
              <h3>Need Customized Engineering Drawings or Full Technical Data Sheet?</h3>
              <p>Our Haridwar engineering design department provides 3D CAD modeling, P&ID diagrams, and full material test certificates (MTC).</p>
            </div>
          </div>
          <div className="banner-action">
            <a 
              href={`tel:${companyDetails.phoneRaw}`} 
              className="btn-primary"
            >
              Contact Engineering Desk
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .catalog-section {
          padding: 90px 0;
          background: #ffffff;
        }

        .filter-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 45px;
        }

        .tab-btn {
          padding: 10px 22px;
          border-radius: 999px;
          font-size: 0.88rem;
          font-weight: 700;
          color: #475569;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          transition: var(--transition);
        }

        .tab-btn:hover {
          background: #e2e8f0;
          color: #0f172a;
        }

        .active-tab {
          background: #0a192f;
          color: #ffffff;
          border-color: #0a192f;
          box-shadow: 0 4px 14px rgba(10, 25, 47, 0.2);
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-bottom: 50px;
        }

        .product-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          overflow: hidden;
          transition: var(--transition);
          display: flex;
          flex-direction: column;
        }

        .product-card:hover {
          transform: translateY(-6px);
          border-color: #ff9900;
          box-shadow: 0 16px 36px rgba(10, 25, 47, 0.1);
        }

        .product-image-box {
          position: relative;
          height: 230px;
          overflow: hidden;
          background: #0f172a;
        }

        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .product-card:hover .product-img {
          transform: scale(1.06);
        }

        .product-cat-pill {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(10, 25, 47, 0.85);
          backdrop-filter: blur(4px);
          color: #ff9900;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 6px;
          border: 1px solid rgba(255, 153, 0, 0.3);
        }

        .product-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .product-name {
          font-size: 1.25rem;
          font-weight: 800;
          color: #0a192f;
          margin-bottom: 14px;
          line-height: 1.35;
        }

        .product-meta {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 18px;
        }

        .meta-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.82rem;
        }

        .meta-label {
          color: #64748b;
        }

        .meta-val {
          color: #0f172a;
          font-weight: 700;
        }

        .product-features {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .prod-feat-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: #334155;
        }

        .feat-check {
          color: #16a34a;
          flex-shrink: 0;
        }

        .product-actions {
          margin-top: auto;
        }

        .product-inquire-btn {
          width: 100%;
          padding: 11px 18px;
          font-size: 0.9rem;
        }

        /* Banner */
        .catalog-banner {
          background: linear-gradient(135deg, #0a192f 0%, #16375c 100%);
          border-radius: 12px;
          padding: 30px 40px;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          box-shadow: 0 12px 30px rgba(10, 25, 47, 0.15);
          border-left: 5px solid #ff9900;
        }

        .banner-info {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .banner-file-icon {
          color: #ff9900;
          flex-shrink: 0;
        }

        .banner-info h3 {
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 6px;
        }

        .banner-info p {
          color: #cbd5e1;
          font-size: 0.9rem;
          max-width: 650px;
        }

        .banner-action {
          flex-shrink: 0;
        }

        @media (max-width: 1080px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .catalog-banner {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 680px) {
          .products-grid {
            grid-template-columns: 1fr;
          }

          .catalog-banner {
            padding: 24px 20px;
          }
        }
      `}</style>
    </section>
  );
}
