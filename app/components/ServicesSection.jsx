'use client';

import { useState } from 'react';
import { 
  Workflow, GitBranch, Gauge, Flame, Boxes, Cog, Layers, Wrench, 
  ArrowRight, CheckCircle, X, Phone, MessageSquare, ShieldCheck 
} from 'lucide-react';
import { servicesList, companyDetails } from '../data/content';

const iconMap = {
  Workflow, GitBranch, Gauge, Flame, Boxes, Cog, Layers, Wrench
};

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Services We Offer & Engineering Solutions</span>
          <h2 className="section-title">
            Our Main <span>Industrial Services</span>
          </h2>
          <p className="section-desc">
            Complete turnkey execution, specialized piping, and mechanical fabrication tailored for pharmaceuticals, chemical plants, food & beverage units, and heavy engineering.
          </p>
        </div>

        <div className="services-grid">
          {servicesList.map((service) => {
            const Icon = iconMap[service.icon] || Workflow;
            return (
              <div key={service.id} className="service-card">
                <div className="card-top">
                  <div className="service-icon-box">
                    <Icon size={26} />
                  </div>
                  <span className="service-tag">{service.tag}</span>
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.shortDesc}</p>

                <ul className="service-features-list">
                  {service.features.slice(0, 3).map((feat, i) => (
                    <li key={i}>
                      <CheckCircle size={14} className="feature-bullet" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="service-card-foot">
                  <button 
                    className="read-more-btn"
                    onClick={() => setSelectedService(service)}
                  >
                    <span>View Specifications</span>
                    <ArrowRight size={15} />
                  </button>

                  <a 
                    href={`https://wa.me/${companyDetails.phoneRaw}?text=Hello%20Athetec%20Technologies,%20I%20need%20a%20quotation%20for%20${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="quick-inquire-icon"
                    title={`Inquire about ${service.title}`}
                  >
                    <MessageSquare size={16} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Modal for Service Details */}
      {selectedService && (
        <div className="modal-backdrop" onClick={() => setSelectedService(null)}>
          <div className="service-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setSelectedService(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="modal-header">
              <span className="badge-tag">{selectedService.tag}</span>
              <h3 className="modal-title">{selectedService.title}</h3>
            </div>

            <div className="modal-body">
              <p className="modal-desc">{selectedService.shortDesc}</p>

              <div className="modal-spec-block">
                <h4>Core Technical Specifications & Inclusions:</h4>
                <ul className="modal-spec-list">
                  {selectedService.features.map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle size={16} className="modal-check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-assurance">
                <ShieldCheck size={20} className="assure-icon" />
                <div>
                  <strong>Turnkey Assurance:</strong> Includes design drawings, on-site certified welding, hydrostatic pressure testing, and handover documentation.
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <a 
                href={`tel:${companyDetails.phoneRaw}`}
                className="btn-secondary"
              >
                <Phone size={16} /> Call Engineer: {companyDetails.phone}
              </a>
              <a 
                href={`https://wa.me/${companyDetails.phoneRaw}?text=Hi,%20please%20send%20me%20detailed%20specs%20and%20quote%20for%20${encodeURIComponent(selectedService.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageSquare size={16} /> Request RFQ on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .services-section {
          padding: 90px 0;
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .service-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 26px 22px;
          display: flex;
          flex-direction: column;
          transition: var(--transition);
          position: relative;
        }

        .service-card:hover {
          transform: translateY(-6px);
          border-color: #ff9900;
          box-shadow: 0 16px 32px rgba(10, 25, 47, 0.1);
        }

        .card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .service-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 10px;
          background: #0a192f;
          color: #ff9900;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }

        .service-card:hover .service-icon-box {
          background: #ff9900;
          color: #ffffff;
        }

        .service-tag {
          font-size: 0.72rem;
          font-weight: 700;
          color: #0369a1;
          background: #e0f2fe;
          padding: 3px 8px;
          border-radius: 4px;
        }

        .service-title {
          font-size: 1.18rem;
          font-weight: 800;
          color: #0a192f;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .service-desc {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 18px;
          flex-grow: 1;
        }

        .service-features-list {
          list-style: none;
          margin-bottom: 22px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .service-features-list li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          color: #334155;
          font-weight: 600;
        }

        .feature-bullet {
          color: #16a34a;
          flex-shrink: 0;
        }

        .service-card-foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 16px;
          border-top: 1px solid #f1f5f9;
        }

        .read-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.88rem;
          font-weight: 700;
          color: #0a192f;
          transition: var(--transition);
        }

        .read-more-btn:hover {
          color: var(--accent);
          gap: 9px;
        }

        .quick-inquire-icon {
          width: 34px;
          height: 34px;
          border-radius: 6px;
          background: #e2e8f0;
          color: #334155;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }

        .quick-inquire-icon:hover {
          background: #25d366;
          color: #ffffff;
        }

        /* Modal */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(8, 22, 39, 0.7);
          backdrop-filter: blur(4px);
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .service-modal {
          background: #ffffff;
          border-radius: 14px;
          max-width: 620px;
          width: 100%;
          padding: 32px;
          position: relative;
          box-shadow: 0 24px 48px rgba(0,0,0,0.25);
          animation: slideDown 0.3s ease-out;
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          transition: var(--transition);
        }

        .modal-close:hover {
          background: #e2e8f0;
          color: #0f172a;
        }

        .modal-title {
          font-size: 1.6rem;
          color: #0a192f;
          font-weight: 800;
          margin-top: 8px;
        }

        .modal-desc {
          font-size: 1rem;
          color: #475569;
          line-height: 1.6;
          margin: 16px 0;
        }

        .modal-spec-block {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 18px;
          margin-bottom: 18px;
        }

        .modal-spec-block h4 {
          font-size: 0.95rem;
          color: #0f172a;
          margin-bottom: 12px;
          font-weight: 700;
        }

        .modal-spec-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .modal-spec-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: #334155;
          font-weight: 600;
        }

        .modal-check {
          color: #16a34a;
          flex-shrink: 0;
        }

        .modal-assurance {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 0.85rem;
          color: #1e3a8a;
          margin-bottom: 24px;
        }

        .assure-icon {
          color: #2563eb;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .modal-footer {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        @media (max-width: 1200px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr;
          }

          .modal-footer {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
