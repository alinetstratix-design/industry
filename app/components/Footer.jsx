'use client';

import { MapPin, Phone, Mail, ArrowRight, ShieldCheck, ExternalLink, Wrench } from 'lucide-react';
import { companyDetails, servicesList } from '../data/content';

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Upper Info Row */}
      <div className="footer-upper">
        <div className="container">
          <div className="info-boxes-grid">
            <div className="info-box-item">
              <div className="info-icon-circle">
                <MapPin size={24} />
              </div>
              <div className="info-box-text">
                <strong>Visit Registered Works</strong>
                <span>{companyDetails.address}</span>
              </div>
            </div>

            <div className="info-box-item">
              <div className="info-icon-circle">
                <Phone size={24} />
              </div>
              <div className="info-box-text">
                <strong>24×7 Engineering Desk</strong>
                <a href={`tel:${companyDetails.phoneRaw}`}>{companyDetails.phone}</a>
                <span className="info-sub-text">Direct Line: {companyDetails.phoneDisplay}</span>
              </div>
            </div>

            <div className="info-box-item">
              <div className="info-icon-circle">
                <Mail size={24} />
              </div>
              <div className="info-box-text">
                <strong>Mail Tender & RFQ</strong>
                <a href={`mailto:${companyDetails.email}`}>{companyDetails.email}</a>
                <a href={`mailto:${companyDetails.secondaryEmail}`}>{companyDetails.secondaryEmail}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Widgets Section */}
      <div className="footer-widgets">
        <div className="container">
          <div className="widgets-grid">
            {/* Col 1: Brand & Narrative */}
            <div className="widget-col brand-col">
              <div className="footer-brand">
                <div className="footer-logo-box">
                  <Wrench size={24} />
                </div>
                <div>
                  <span className="brand-title">ATHETEC TECHNOLOGIES</span>
                  <span className="brand-tag">Industrial & Engineering MSME</span>
                </div>
              </div>

              <p className="footer-desc">
                ATHETEC TECHNOLOGIES is a trusted name in the field of turnkey project execution, specializing in the design, fabrication, and commissioning of mechanical and process projects across breweries, food processing, personal care, pharmaceuticals, and heavy engineering industries in Haridwar, Uttarakhand.
              </p>

              <div className="msme-pill">
                <ShieldCheck size={16} />
                <span>Tier 2 Ready-to-Call (B2B Web & SEO Optimized)</span>
              </div>
            </div>

            {/* Col 2: Services Quick Links */}
            <div className="widget-col">
              <h3 className="widget-title">Turnkey Services</h3>
              <ul className="footer-links-list">
                {servicesList.slice(0, 6).map((s) => (
                  <li key={s.id}>
                    <a href="#services">
                      <ArrowRight size={13} className="link-arrow" />
                      <span>{s.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Machinery & Equipment */}
            <div className="widget-col">
              <h3 className="widget-title">Machinery Catalog</h3>
              <ul className="footer-links-list">
                <li><a href="#catalog"><ArrowRight size={13} className="link-arrow" /> SS Jacketed Reaction Vessels</a></li>
                <li><a href="#catalog"><ArrowRight size={13} className="link-arrow" /> IBR Steam Piping Networks</a></li>
                <li><a href="#catalog"><ArrowRight size={13} className="link-arrow" /> Heavy PEB Industrial Sheds</a></li>
                <li><a href="#catalog"><ArrowRight size={13} className="link-arrow" /> Powered Belt & Roller Conveyors</a></li>
                <li><a href="#catalog"><ArrowRight size={13} className="link-arrow" /> Cleanroom Pharma Utensils</a></li>
                <li><a href="#catalog"><ArrowRight size={13} className="link-arrow" /> Fire Hydrant & Ring Mains</a></li>
              </ul>
            </div>

            {/* Col 4: Verified Directories & Quick Action */}
            <div className="widget-col">
              <h3 className="widget-title">Verified Profiles</h3>
              <div className="footer-b2b-links">
                <a 
                  href={companyDetails.indiaMartUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="b2b-card"
                >
                  <div>
                    <strong>IndiaMART Profile</strong>
                    <span>Verified Industrial Supplier</span>
                  </div>
                  <ExternalLink size={14} />
                </a>

                <a 
                  href={companyDetails.justDialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="b2b-card"
                >
                  <div>
                    <strong>JustDial Listing</strong>
                    <span>Haridwar MSME Category</span>
                  </div>
                  <ExternalLink size={14} />
                </a>

                <a 
                  href={companyDetails.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="b2b-card map-card"
                >
                  <div>
                    <strong>Google Business Location</strong>
                    <span>Shivalik Nagar, Haridwar</span>
                  </div>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <div className="container bottom-content">
          <p className="copyright-text">
            © {new Date().getFullYear()} ATHETEC TECHNOLOGIES. All Rights Reserved. Industrial Engineering & Equipment Supplier.
          </p>
          <div className="bottom-links">
            <a href="#home">Back to Top ↑</a>
            <a href="#quote">Request Quote</a>
            <a href={`tel:${companyDetails.phoneRaw}`}>Direct Call</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          background-color: #071321;
          color: #94a3b8;
          border-top: 3px solid var(--accent);
          position: relative;
        }

        .footer-upper {
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 36px 0;
          background: #091a2e;
        }

        .info-boxes-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .info-box-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .info-icon-circle {
          width: 50px;
          height: 50px;
          border-radius: 10px;
          background: rgba(255, 140, 0, 0.15);
          color: #ff9900;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid rgba(255, 140, 0, 0.3);
        }

        .info-box-text {
          display: flex;
          flex-direction: column;
          line-height: 1.4;
        }

        .info-box-text strong {
          color: #ffffff;
          font-size: 0.95rem;
          margin-bottom: 4px;
        }

        .info-box-text span, .info-box-text a {
          color: #cbd5e1;
          font-size: 0.88rem;
          transition: var(--transition);
        }

        .info-box-text a:hover {
          color: var(--accent);
        }

        .info-sub-text {
          font-size: 0.78rem !important;
          color: #94a3b8 !important;
        }

        /* Widgets */
        .footer-widgets {
          padding: 70px 0 50px;
        }

        .widgets-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.1fr;
          gap: 40px;
        }

        .widget-col {
          display: flex;
          flex-direction: column;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }

        .footer-logo-box {
          width: 44px;
          height: 44px;
          background: var(--accent);
          color: #ffffff;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .brand-title {
          display: block;
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 1.2px;
          line-height: 1.1;
        }

        .brand-tag {
          font-size: 0.72rem;
          color: #ff9900;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .footer-desc {
          font-size: 0.88rem;
          line-height: 1.65;
          color: #94a3b8;
          margin-bottom: 20px;
        }

        .msme-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #34d399;
          padding: 8px 14px;
          border-radius: 6px;
          font-size: 0.78rem;
          font-weight: 700;
        }

        .widget-title {
          font-size: 1.1rem;
          color: #ffffff;
          font-weight: 800;
          margin-bottom: 20px;
          position: relative;
          padding-bottom: 10px;
        }

        .widget-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 32px;
          height: 2px;
          background: var(--accent);
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .footer-links-list a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.86rem;
          color: #94a3b8;
          transition: var(--transition);
        }

        .footer-links-list a:hover {
          color: var(--accent);
          transform: translateX(4px);
        }

        .link-arrow {
          color: var(--accent);
          flex-shrink: 0;
        }

        .footer-b2b-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .b2b-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #cbd5e1;
          transition: var(--transition);
        }

        .b2b-card:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--accent);
          color: #ffffff;
          transform: translateY(-2px);
        }

        .b2b-card strong {
          display: block;
          font-size: 0.88rem;
          color: #ffffff;
        }

        .b2b-card span {
          display: block;
          font-size: 0.75rem;
          color: #94a3b8;
        }

        /* Bottom Bar */
        .footer-bottom {
          background: #040c15;
          padding: 20px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          font-size: 0.82rem;
        }

        .bottom-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        .copyright-text {
          color: #64748b;
        }

        .bottom-links {
          display: flex;
          gap: 20px;
        }

        .bottom-links a {
          color: #94a3b8;
          transition: var(--transition);
        }

        .bottom-links a:hover {
          color: var(--accent);
        }

        @media (max-width: 1080px) {
          .info-boxes-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .widgets-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }
        }

        @media (max-width: 600px) {
          .widgets-grid {
            grid-template-columns: 1fr;
          }

          .bottom-content {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
