'use client';

import { CheckCircle2, ShieldCheck, Factory, Award, ArrowRight, Download, MapPin } from 'lucide-react';
import { companyDetails } from '../data/content';

export default function AboutSection() {
  const highlights = [
    "Turnkey project execution from concept to commissioning",
    "Specialized in Sanitary Process Piping & High-Pressure IBR steam lines",
    "State-of-the-art heavy structural steel & PEB fabrication",
    "Manufacturing of custom storage tanks, reaction vessels & conveyor belts",
    "Experienced engineering team with over 15+ years in Haridwar industrial belt",
    "Strict compliance with cGMP, ASME, DIN, and factory safety protocols"
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Visual Industrial Showcase */}
          <div className="about-visual">
            <div className="main-image-wrap">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                alt="Industrial Engineering and Piping" 
                className="about-main-img"
              />
              <div className="experience-badge">
                <span className="exp-years">{companyDetails.yearsOfExcellence}</span>
                <span className="exp-text">Years of Proven Industrial Trust</span>
              </div>
            </div>

            <div className="secondary-image-wrap">
              <img 
                src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80" 
                alt="Precision Metal Fabrication" 
                className="about-sub-img"
              />
              <div className="cert-tag">
                <ShieldCheck size={16} /> MSME Certified Supplier
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative */}
          <div className="about-content">
            <div className="badge-tag">About ATHETEC TECHNOLOGIES</div>
            <h2 className="section-title">
              Pioneering <span>Mechanical & Industrial Solutions</span> for Modern Industry
            </h2>

            <p className="about-intro">
              <strong>ATHETEC TECHNOLOGIES</strong> is a premier Haridwar-based industrial engineering firm and equipment supplier specializing in the complete design, turnkey fabrication, on-site erection, and commissioning of mechanical systems.
            </p>

            <p className="about-text">
              Strategically based in the industrial heart of Uttarakhand near BHEL and SIDCUL Haridwar, we cater extensively to breweries, food & beverage processing plants, pharmaceutical formulations, FMCG personal care giants, heavy engineering works, and chemical processing facilities. We engineer solutions that withstand extreme operational loads while maximizing thermal and fluidic efficiency.
            </p>

            {/* Checklist */}
            <div className="checklist-grid">
              {highlights.map((item, idx) => (
                <div key={idx} className="check-item">
                  <CheckCircle2 size={18} className="check-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="location-callout">
              <MapPin size={18} className="loc-pin" />
              <span>
                Based at: <strong>{companyDetails.address}</strong>
              </span>
            </div>

            {/* Actions */}
            <div className="about-actions">
              <a href="#services" className="btn-primary">
                <span>View Our Capabilities</span>
                <ArrowRight size={16} />
              </a>
              <a 
                href={companyDetails.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline"
              >
                <Download size={16} />
                <span>Request B2B Profile PDF</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          padding: 90px 0;
          background: #ffffff;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 60px;
          align-items: center;
        }

        .about-visual {
          position: relative;
        }

        .main-image-wrap {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 16px 36px rgba(10, 25, 47, 0.15);
          width: 85%;
        }

        .about-main-img {
          width: 100%;
          height: 440px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .about-main-img:hover {
          transform: scale(1.03);
        }

        .experience-badge {
          position: absolute;
          bottom: 24px;
          left: 24px;
          background: linear-gradient(135deg, #0a192f 0%, #16375c 100%);
          color: #ffffff;
          padding: 16px 20px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
          border-left: 4px solid var(--accent);
        }

        .exp-years {
          font-size: 2.5rem;
          font-weight: 900;
          color: #ff9900;
          line-height: 1;
          font-family: var(--font-heading);
        }

        .exp-text {
          font-size: 0.8rem;
          font-weight: 700;
          line-height: 1.25;
          max-width: 110px;
        }

        .secondary-image-wrap {
          position: absolute;
          bottom: -30px;
          right: 0;
          width: 50%;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 12px 30px rgba(0,0,0,0.18);
          border: 4px solid #ffffff;
        }

        .about-sub-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
        }

        .cert-tag {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(10, 25, 47, 0.85);
          backdrop-filter: blur(4px);
          color: #34d399;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .about-content {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .about-intro {
          font-size: 1.15rem;
          color: #1e293b;
          line-height: 1.6;
        }

        .about-text {
          font-size: 1rem;
          color: #64748b;
          line-height: 1.65;
        }

        .checklist-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
          margin: 10px 0;
        }

        .check-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.95rem;
          font-weight: 600;
          color: #334155;
        }

        .check-icon {
          color: #16a34a;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .location-callout {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 0.9rem;
          color: #475569;
        }

        .loc-pin {
          color: var(--accent);
          flex-shrink: 0;
        }

        .about-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 10px;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .main-image-wrap {
            width: 100%;
          }

          .secondary-image-wrap {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
