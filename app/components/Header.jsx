'use client';

import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, ArrowRight, ExternalLink, ShieldCheck, Wrench } from 'lucide-react';
import { companyDetails } from '../data/content';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="site-header">
      {/* Top Bar (Classic Industrial B2B style) */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <a 
              href={companyDetails.googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="top-info-link"
              title="View on Google Maps"
            >
              <MapPin size={14} className="top-icon" />
              <span>{companyDetails.address}</span>
            </a>
            <a 
              href={`mailto:${companyDetails.email}`} 
              className="top-info-link email-link"
            >
              <Mail size={14} className="top-icon" />
              <span>{companyDetails.email}</span>
            </a>
          </div>

          <div className="top-bar-right">
            <div className="trust-badges">
              <span className="trust-tag">
                <ShieldCheck size={13} /> MSME Registered
              </span>
              <a 
                href={companyDetails.indiaMartUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="b2b-link"
              >
                IndiaMART <ExternalLink size={11} />
              </a>
              <a 
                href={companyDetails.justDialUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="b2b-link"
              >
                JustDial <ExternalLink size={11} />
              </a>
            </div>

            <a href={`tel:${companyDetails.phoneRaw}`} className="top-phone-link">
              <Phone size={14} /> Call: {companyDetails.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`main-nav ${isScrolled ? 'nav-sticky' : ''}`}>
        <div className="container nav-content">
          {/* Logo */}
          <a href="#" className="brand-logo">
            <div className="logo-icon-box">
              <Wrench size={26} className="logo-wrench" />
            </div>
            <div className="logo-text-box">
              <span className="brand-name">ATHETEC</span>
              <span className="brand-suffix">TECHNOLOGIES</span>
              <span className="brand-sub">Industrial & Engineering MSME</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="desktop-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About Us</a>
            <a href="#services" className="nav-link">Engineering Services</a>
            <a href="#catalog" className="nav-link">Machinery Catalog</a>
            <a href="#why-us" className="nav-link">Why Us</a>
            <a href="#projects" className="nav-link">Projects & Clients</a>
            <a href="#location" className="nav-link">Haridwar Location</a>
          </div>

          {/* Nav Right CTA */}
          <div className="nav-actions">
            <a href="#quote" className="btn-primary quote-btn">
              <span>Get Quote</span>
              <ArrowRight size={16} />
            </a>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu-drawer">
            <div className="mobile-links">
              <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>About ATHETEC</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services & Piping</a>
              <a href="#catalog" onClick={() => setMobileMenuOpen(false)}>Machinery Catalog</a>
              <a href="#why-us" onClick={() => setMobileMenuOpen(false)}>Core Competencies</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Clients & Projects</a>
              <a href="#location" onClick={() => setMobileMenuOpen(false)}>Location Map</a>
              <a href="#quote" className="btn-primary" onClick={() => setMobileMenuOpen(false)}>Request Quotation</a>
              <div className="mobile-quick-call">
                <a href={`tel:${companyDetails.phoneRaw}`} className="btn-secondary">
                  <Phone size={16} /> Call: {companyDetails.phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        .site-header {
          position: relative;
          z-index: 100;
          width: 100%;
        }

        .top-bar {
          background-color: #081627;
          color: #94a3b8;
          font-size: 0.8rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 8px 0;
        }

        .top-bar-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .top-bar-left, .top-bar-right {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .top-info-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #cbd5e1;
          transition: var(--transition);
        }

        .top-info-link:hover {
          color: var(--accent);
        }

        .top-icon {
          color: var(--accent);
          flex-shrink: 0;
        }

        .trust-badges {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .trust-tag {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 4px;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .b2b-link {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          color: #cbd5e1;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.08);
          transition: var(--transition);
        }

        .b2b-link:hover {
          background: var(--accent);
          color: #ffffff;
        }

        .top-phone-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #ff9900;
          font-weight: 700;
        }

        /* Main Nav */
        .main-nav {
          background-color: #ffffff;
          box-shadow: 0 4px 18px rgba(10, 25, 47, 0.06);
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-sticky {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 99;
          box-shadow: 0 6px 22px rgba(10, 25, 47, 0.12);
          background-color: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(8px);
        }

        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .logo-icon-box {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #0a192f 0%, #1a365d 100%);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(10, 25, 47, 0.2);
          border: 1px solid rgba(255, 140, 0, 0.3);
        }

        .logo-text-box {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .brand-name {
          font-family: var(--font-heading);
          font-size: 1.85rem;
          font-weight: 800;
          color: #0a192f;
          letter-spacing: 1.5px;
        }

        .brand-suffix {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 2.2px;
          color: var(--accent);
          text-transform: uppercase;
        }

        .brand-sub {
          font-size: 0.65rem;
          color: #64748b;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .desktop-links {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .nav-link {
          font-size: 0.9rem;
          font-weight: 600;
          color: #1e293b;
          position: relative;
          padding: 6px 0;
          transition: var(--transition);
        }

        .nav-link:hover {
          color: var(--accent);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .quote-btn {
          padding: 10px 20px;
          font-size: 0.88rem;
        }

        .mobile-toggle {
          display: none;
          color: #0a192f;
          padding: 6px;
        }

        .mobile-menu-drawer {
          display: none;
          background: #ffffff;
          border-top: 1px solid #e2e8f0;
          padding: 20px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .mobile-links a {
          font-weight: 600;
          font-size: 1rem;
          color: #0f172a;
          padding: 8px 0;
          border-bottom: 1px solid #f1f5f9;
        }

        .mobile-quick-call {
          margin-top: 10px;
        }

        @media (max-width: 1080px) {
          .desktop-links {
            display: none;
          }

          .mobile-toggle {
            display: block;
          }

          .mobile-menu-drawer {
            display: block;
          }

          .quote-btn {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .top-bar-left .email-link {
            display: none;
          }

          .top-bar-content {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }
        }
      `}</style>
    </header>
  );
}
