'use client';

import { Building2, MapPin, CheckCircle, ExternalLink } from 'lucide-react';
import { clientLogos } from '../data/content';

const projectShowcase = [
  {
    client: "Carlsberg India Limited",
    location: "Aurangabad Brewery Facility",
    scope: "Sanitary Process Piping & Fermentation Utility Hookups",
    year: "Turnkey Mechanical",
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=600&q=80"
  },
  {
    client: "ITC Limited Foods Division",
    location: "Pune & Haridwar Plants",
    scope: "High-Pressure Steam IBR Piping & SS Storage Tanks",
    year: "Full Commissioning",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
  },
  {
    client: "Hindustan Unilever Limited (HUL)",
    location: "Personal Care & Food Processing Unit",
    scope: "Utility Piping, Chilled Water Lines & Stainless Steel Silos",
    year: "Industrial Contract",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80"
  },
  {
    client: "Amcor Limited",
    location: "SIDCUL Haridwar, Uttarakhand",
    scope: "Heavy Machine Installation, Leveling & Fire Hydrant Mains",
    year: "Site Erection",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80"
  },
  {
    client: "Amazon Seller Services Pvt Ltd",
    location: "Logistics Fulfillment Center",
    scope: "Heavy PEB Structural Mezzanine Fabrication & Slat Conveyors",
    year: "Structural Project",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=600&q=80"
  },
  {
    client: "SIDCUL Haridwar Industrial Belt",
    location: "Uttarakhand State",
    scope: "Multi-Plant Mechanical Maintenance & Turnkey Supply Contracts",
    year: "MSME Partner",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
  }
];

export default function ProjectsClients() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Execution Track Record</span>
          <h2 className="section-title">
            Prestige <span>Turnkey Projects & Clients</span>
          </h2>
          <p className="section-desc">
            Trusted by top FMCG conglomerates, pharmaceutical innovators, packaging leaders, and industrial hubs across India.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {projectShowcase.map((proj, idx) => (
            <div key={idx} className="project-card">
              <div className="project-image-box">
                <img src={proj.image} alt={proj.client} className="project-img" />
                <div className="project-overlay">
                  <span className="proj-tag">{proj.year}</span>
                </div>
              </div>

              <div className="project-info">
                <div className="proj-loc">
                  <MapPin size={14} className="proj-loc-icon" />
                  <span>{proj.location}</span>
                </div>
                <h3 className="proj-client-name">{proj.client}</h3>
                <p className="proj-scope">{proj.scope}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos / Marquee Area */}
        <div className="clients-area">
          <div className="clients-header">
            <h4>INDUSTRIAL SECTORS & CLIENT FOOTPRINT</h4>
            <div className="clients-line" />
          </div>

          <div className="client-badges-grid">
            {clientLogos.map((client, i) => (
              <div key={i} className="client-badge-card">
                <Building2 size={24} className="client-icon" />
                <div className="client-text">
                  <strong>{client.name}</strong>
                  <span>{client.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .projects-section {
          padding: 90px 0;
          background: #ffffff;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-bottom: 60px;
        }

        .project-card {
          border-radius: 12px;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 14px rgba(10, 25, 47, 0.05);
          transition: var(--transition);
        }

        .project-card:hover {
          transform: translateY(-6px);
          border-color: #ff9900;
          box-shadow: 0 16px 36px rgba(10, 25, 47, 0.12);
        }

        .project-image-box {
          position: relative;
          height: 210px;
          overflow: hidden;
          background: #0f172a;
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-img {
          transform: scale(1.08);
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(8, 22, 39, 0.85) 100%);
          display: flex;
          align-items: flex-end;
          padding: 16px;
        }

        .proj-tag {
          background: #ff9900;
          color: #ffffff;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .project-info {
          padding: 22px;
        }

        .proj-loc {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          color: #64748b;
          margin-bottom: 6px;
        }

        .proj-loc-icon {
          color: #ff9900;
        }

        .proj-client-name {
          font-size: 1.2rem;
          font-weight: 800;
          color: #0a192f;
          margin-bottom: 8px;
        }

        .proj-scope {
          font-size: 0.88rem;
          color: #475569;
          line-height: 1.5;
        }

        /* Client Section */
        .clients-area {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 36px 30px;
        }

        .clients-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 24px;
        }

        .clients-header h4 {
          font-size: 0.85rem;
          letter-spacing: 1.5px;
          color: #475569;
          font-weight: 800;
          white-space: nowrap;
        }

        .clients-line {
          height: 1px;
          background: #cbd5e1;
          flex-grow: 1;
        }

        .client-badges-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .client-badge-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          gap: 14px;
          transition: var(--transition);
        }

        .client-badge-card:hover {
          border-color: #ff9900;
          box-shadow: 0 4px 12px rgba(255, 153, 0, 0.1);
          transform: translateY(-2px);
        }

        .client-icon {
          color: #0a192f;
          flex-shrink: 0;
        }

        .client-text {
          display: flex;
          flex-direction: column;
        }

        .client-text strong {
          font-size: 0.95rem;
          color: #0f172a;
        }

        .client-text span {
          font-size: 0.78rem;
          color: #64748b;
        }

        @media (max-width: 1080px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .client-badges-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 680px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .client-badges-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
