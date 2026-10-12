'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';
import { companyDetails } from '../data/content';

export default function QuickConnectFloating() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-container">
      {/* WhatsApp Action */}
      <a 
        href={companyDetails.whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-btn whatsapp-btn"
        aria-label="Chat on WhatsApp"
        title="WhatsApp Chat: 8126287325"
      >
        <MessageSquare size={24} />
        <span className="tooltip">WhatsApp Chat</span>
      </a>

      {/* Direct Call Action */}
      <a 
        href={`tel:${companyDetails.phoneRaw}`} 
        className="floating-btn call-btn"
        aria-label="Direct Phone Call"
        title="Call: 081262 87325"
      >
        <Phone size={22} />
        <span className="tooltip">Call: {companyDetails.phoneDisplay}</span>
      </a>

      {/* Back to Top */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop} 
          className="floating-btn scroll-top-btn"
          aria-label="Scroll to top"
          title="Back to Top"
        >
          <ArrowUp size={20} />
        </button>
      )}

      <style jsx>{`
        .floating-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 9999;
        }

        .floating-btn {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
          position: relative;
          transition: var(--transition);
        }

        .floating-btn:hover {
          transform: scale(1.1);
        }

        .whatsapp-btn {
          background: #25d366;
        }

        .call-btn {
          background: #0284c7;
        }

        .scroll-top-btn {
          background: #0f172a;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .tooltip {
          position: absolute;
          right: 64px;
          background: #0a192f;
          color: #ffffff;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.78rem;
          font-weight: 700;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transform: translateX(10px);
          transition: var(--transition);
          box-shadow: 0 4px 14px rgba(0,0,0,0.2);
        }

        .floating-btn:hover .tooltip {
          opacity: 1;
          transform: translateX(0);
        }

        @media (max-width: 600px) {
          .floating-container {
            bottom: 16px;
            right: 16px;
          }

          .floating-btn {
            width: 48px;
            height: 48px;
          }

          .tooltip {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
