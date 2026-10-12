'use client';

import { MapPin, Navigation, Phone, Mail, Clock, ExternalLink, ShieldCheck } from 'lucide-react';
import { companyDetails } from '../data/content';

export default function LocationMap() {
  return (
    <section id="location" className="location-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Local SEO & Google Business Presence</span>
          <h2 className="section-title">
            Visit Our <span>Haridwar Engineering Facility</span>
          </h2>
          <p className="section-desc">
            Conveniently situated in Shivalik Nagar adjacent to BHEL Ranipur and SIDCUL Haridwar, enabling swift on-site response across Uttarakhand industrial parks.
          </p>
        </div>

        <div className="location-grid">
          {/* Plant & Office Details Card */}
          <div className="facility-card">
            <div className="facility-badge">
              <ShieldCheck size={16} />
              <span>Verified Haridwar Location</span>
            </div>

            <h3 className="facility-title">{companyDetails.name}</h3>
            <p className="facility-type">{companyDetails.subtitle}</p>

            <div className="facility-details-list">
              <div className="f-item">
                <MapPin size={22} className="f-icon" />
                <div>
                  <strong>Registered Works & Office:</strong>
                  <span>{companyDetails.address}</span>
                </div>
              </div>

              <div className="f-item">
                <Phone size={22} className="f-icon" />
                <div>
                  <strong>Direct Engineering & Purchase:</strong>
                  <a href={`tel:${companyDetails.phoneRaw}`}>{companyDetails.phone} / {companyDetails.phoneDisplay}</a>
                </div>
              </div>

              <div className="f-item">
                <Mail size={22} className="f-icon" />
                <div>
                  <strong>Official Communication:</strong>
                  <a href={`mailto:${companyDetails.email}`}>{companyDetails.email}</a>
                </div>
              </div>

              <div className="f-item">
                <Clock size={22} className="f-icon" />
                <div>
                  <strong>Works & Dispatch Hours:</strong>
                  <span>Monday – Saturday: 9:00 AM – 7:30 PM (24/7 Breakdown Support)</span>
                </div>
              </div>
            </div>

            <div className="b2b-directories">
              <span className="dir-label">Verified Business Directories:</span>
              <div className="dir-buttons">
                <a 
                  href={companyDetails.indiaMartUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="dir-link indiamart"
                >
                  <span>IndiaMART Verified MSME</span>
                  <ExternalLink size={14} />
                </a>
                <a 
                  href={companyDetails.justDialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="dir-link justdial"
                >
                  <span>JustDial Listed</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <a 
              href={companyDetails.googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary maps-action-btn"
            >
              <Navigation size={18} />
              <span>Open Directions in Google Maps</span>
            </a>
          </div>

          {/* Interactive Map Visual Box */}
          <div className="map-embed-wrapper">
            <div className="map-card-banner">
              <div className="map-banner-header">
                <div className="map-pin-pulse">
                  <MapPin size={24} className="pulse-pin" />
                </div>
                <div>
                  <h4>ATHETEC TECHNOLOGIES</h4>
                  <span>Shivalik Nagar, BHEL Ranipur, Haridwar</span>
                </div>
              </div>
              <a 
                href={companyDetails.googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="map-open-link"
              >
                View Larger Map <ExternalLink size={13} />
              </a>
            </div>

            {/* Embedded interactive Google Map focused on Haridwar Shivalik Nagar */}
            <div className="iframe-container">
              <iframe
                title="Athetec Technologies Haridwar Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13837.214812328224!2d78.082725!3d29.932789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390949ececee6e3b%3A0x5369fe7e8477d42!2sShivalik%20Nagar%2C%20Haridwar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .location-section {
          padding: 90px 0;
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
        }

        .location-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 40px;
          align-items: stretch;
        }

        .facility-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 36px;
          box-shadow: 0 10px 30px rgba(10, 25, 47, 0.06);
          display: flex;
          flex-direction: column;
        }

        .facility-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #e0f2fe;
          color: #0369a1;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 6px;
          width: fit-content;
          margin-bottom: 14px;
        }

        .facility-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: #0a192f;
          margin-bottom: 4px;
        }

        .facility-type {
          font-size: 0.88rem;
          color: #64748b;
          margin-bottom: 24px;
        }

        .facility-details-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-bottom: 28px;
        }

        .f-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .f-icon {
          color: var(--accent);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .f-item strong {
          display: block;
          font-size: 0.85rem;
          color: #1e293b;
        }

        .f-item span, .f-item a {
          display: block;
          font-size: 0.9rem;
          color: #475569;
          line-height: 1.45;
        }

        .f-item a:hover {
          color: var(--accent);
        }

        .b2b-directories {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 16px;
          margin-bottom: 24px;
        }

        .dir-label {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 10px;
        }

        .dir-buttons {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .dir-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          border-radius: 6px;
          font-size: 0.82rem;
          font-weight: 700;
          transition: var(--transition);
        }

        .indiamart {
          background: #0284c7;
          color: #ffffff;
        }

        .justdial {
          background: #ea580c;
          color: #ffffff;
        }

        .dir-link:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }

        .maps-action-btn {
          margin-top: auto;
          width: 100%;
          padding: 13px;
        }

        /* Map Embed */
        .map-embed-wrapper {
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          box-shadow: 0 10px 30px rgba(10, 25, 47, 0.08);
          display: flex;
          flex-direction: column;
          min-height: 480px;
          background: #ffffff;
        }

        .map-card-banner {
          background: #0a192f;
          color: #ffffff;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 2px solid var(--accent);
        }

        .map-banner-header {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .map-pin-pulse {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 140, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pulse-pin {
          color: #ff9900;
        }

        .map-banner-header h4 {
          font-size: 1rem;
          font-weight: 800;
        }

        .map-banner-header span {
          font-size: 0.78rem;
          color: #cbd5e1;
        }

        .map-open-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.78rem;
          color: #ff9900;
          font-weight: 700;
        }

        .iframe-container {
          flex-grow: 1;
          width: 100%;
          min-height: 420px;
        }

        @media (max-width: 992px) {
          .location-grid {
            grid-template-columns: 1fr;
          }

          .facility-card {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
