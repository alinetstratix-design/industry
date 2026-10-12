'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, PhoneCall, ShieldCheck, ArrowRight, Award, FileText } from 'lucide-react';
import { heroSlides, companyDetails } from '../data/content';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const activeSlide = heroSlides[currentSlide];

  return (
    <section id="home" className="hero-slider-section">
      {/* Background Slides */}
      <div className="slider-wrapper">
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`slide-item ${idx === currentSlide ? 'active-slide' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-overlay" />
          </div>
        ))}
      </div>

      {/* Slide Content */}
      <div className="container hero-container">
        <div className="hero-content-box">
          <div className="hero-badge pulse-badge">
            <ShieldCheck size={16} />
            <span>{activeSlide.badge}</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-accent-text">{activeSlide.highlight}</span>
            <br />
            {activeSlide.title}
          </h1>

          <p className="hero-description">
            {activeSlide.description}
          </p>

          <div className="hero-cta-group">
            <a href="#quote" className="btn-primary hero-btn-main">
              <span>Request Project Quotation</span>
              <ArrowRight size={18} />
            </a>
            <a href="#catalog" className="btn-secondary hero-btn-sub">
              <FileText size={18} />
              <span>Explore Machinery Catalog</span>
            </a>
          </div>

          <div className="hero-foot-highlights">
            <div className="highlight-pill">
              <Award size={16} className="highlight-icon" />
              <span>{activeSlide.stats}</span>
            </div>
            <div className="highlight-pill">
              <ShieldCheck size={16} className="highlight-icon" />
              <span>Haridwar B2B Ready Supplier</span>
            </div>
          </div>
        </div>
      </div>

      {/* Prev / Next Slider Arrows */}
      <button 
        className="slide-arrow arrow-left" 
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button 
        className="slide-arrow arrow-right" 
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Slider Pagination Dots */}
      <div className="slider-dots">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${idx === currentSlide ? 'active-dot' : ''}`}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Bhavani Style Signature Floating Contact Banner */}
      <div className="hero-bottom-banner">
        <div className="container bottom-banner-content">
          <div className="banner-left">
            <div className="call-icon-circle">
              <PhoneCall size={22} />
            </div>
            <div className="call-info">
              <span className="call-label">24×7 Industrial Technical Consultation</span>
              <a href={`tel:${companyDetails.phoneRaw}`} className="call-number">
                Call Us: {companyDetails.phone}
              </a>
            </div>
          </div>
          <div className="banner-center">
            <span className="banner-note">
              Factory & Office: <strong>{companyDetails.shortAddress}</strong>
            </span>
          </div>
          <div className="banner-right">
            <a href={companyDetails.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary banner-quote-btn">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-slider-section {
          position: relative;
          min-height: 84vh;
          display: flex;
          align-items: center;
          color: #ffffff;
          overflow: hidden;
          background: #081627;
        }

        .slider-wrapper {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .slide-item {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 6s ease;
          transform: scale(1.05);
        }

        .active-slide {
          opacity: 1;
          transform: scale(1);
        }

        .slide-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(8, 22, 39, 0.94) 0%,
            rgba(8, 22, 39, 0.82) 55%,
            rgba(8, 22, 39, 0.5) 100%
          );
        }

        .hero-container {
          position: relative;
          z-index: 10;
          padding-top: 60px;
          padding-bottom: 120px;
        }

        .hero-content-box {
          max-width: 820px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          background: rgba(255, 140, 0, 0.2);
          border: 1px solid rgba(255, 140, 0, 0.5);
          color: #ffb049;
          border-radius: 999px;
          font-weight: 700;
          font-size: 0.85rem;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }

        .hero-title {
          font-size: 3.4rem;
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 20px;
          color: #ffffff;
          letter-spacing: -0.5px;
        }

        .hero-accent-text {
          color: #ff9900;
          position: relative;
          display: inline-block;
        }

        .hero-description {
          font-size: 1.15rem;
          line-height: 1.65;
          color: #e2e8f0;
          margin-bottom: 34px;
          max-width: 720px;
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 30px;
        }

        .hero-btn-main {
          padding: 14px 30px;
          font-size: 1rem;
        }

        .hero-btn-sub {
          padding: 14px 28px;
          font-size: 1rem;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.25);
        }

        .hero-btn-sub:hover {
          background: rgba(255, 255, 255, 0.22);
        }

        .hero-foot-highlights {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .highlight-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 0.82rem;
          color: #cbd5e1;
        }

        .highlight-icon {
          color: var(--accent);
        }

        /* Arrows */
        .slide-arrow {
          position: absolute;
          top: 45%;
          transform: translateY(-50%);
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(8, 22, 39, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20;
          transition: var(--transition);
        }

        .slide-arrow:hover {
          background: var(--accent);
          border-color: var(--accent);
          transform: translateY(-50%) scale(1.08);
        }

        .arrow-left {
          left: 24px;
        }

        .arrow-right {
          right: 24px;
        }

        /* Dots */
        .slider-dots {
          position: absolute;
          bottom: 105px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 20;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.35);
          transition: var(--transition);
        }

        .active-dot {
          background: var(--accent);
          width: 32px;
          border-radius: 6px;
        }

        /* Signature Bottom Banner */
        .hero-bottom-banner {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: #0f2744;
          border-top: 2px solid var(--accent);
          z-index: 25;
          padding: 14px 0;
          box-shadow: 0 -4px 20px rgba(0,0,0,0.3);
        }

        .bottom-banner-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }

        .banner-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .call-icon-circle {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff8c00 0%, #e06d00 100%);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(224, 109, 0, 0.4);
        }

        .call-info {
          display: flex;
          flex-direction: column;
        }

        .call-label {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: #94a3b8;
          font-weight: 700;
        }

        .call-number {
          font-size: 1.25rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 0.5px;
          transition: var(--transition);
        }

        .call-number:hover {
          color: var(--accent);
        }

        .banner-center {
          color: #cbd5e1;
          font-size: 0.9rem;
        }

        .banner-center strong {
          color: #ffffff;
        }

        .banner-quote-btn {
          padding: 10px 22px;
          font-size: 0.88rem;
          background: #25d366;
          box-shadow: 0 4px 14px rgba(37, 211, 102, 0.35);
        }

        .banner-quote-btn:hover {
          background: #20ba5a;
        }

        @media (max-width: 900px) {
          .hero-title {
            font-size: 2.3rem;
          }

          .slide-arrow {
            display: none;
          }

          .slider-dots {
            bottom: 120px;
          }

          .bottom-banner-content {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .banner-right {
            width: 100%;
          }

          .banner-quote-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
