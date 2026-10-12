'use client';

import { Award, Briefcase, Users, ShieldCheck, Factory, CheckCircle2 } from 'lucide-react';
import { companyDetails } from '../data/content';

export default function StatsCounter() {
  const stats = [
    { number: "15+", label: "Years of Engineering Excellence", sub: "Since 2011", icon: Factory },
    { number: "250+", label: "Turnkey Projects Delivered", sub: "On-time Commissioning", icon: Briefcase },
    { number: "85+", label: "Industrial Corporate Clients", sub: "FMCG, Pharma & Heavy Industries", icon: Users },
    { number: "100%", label: "IBR & Safety Compliance", sub: "Zero Non-Conformance", icon: ShieldCheck },
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-badge-wrap">
          <div className="since-box">
            <span className="since-title">OPERATING IN HARIDWAR</span>
            <div className="since-year-highlight">
              <span className="years-count">{companyDetails.yearsOfExcellence}</span>
              <div className="years-text">
                <strong>YEARS OF</strong>
                <span>Industrial Engineering</span>
              </div>
            </div>
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="stat-card">
                <div className="stat-icon-wrapper">
                  <Icon size={28} />
                </div>
                <div className="stat-info">
                  <div className="stat-number">{item.number}</div>
                  <h3 className="stat-label">{item.label}</h3>
                  <p className="stat-sub">{item.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .stats-section {
          background: #ffffff;
          padding: 60px 0 40px;
          border-bottom: 1px solid #e2e8f0;
          position: relative;
        }

        .stats-badge-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 40px;
        }

        .since-box {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          background: linear-gradient(135deg, #0a192f 0%, #16375c 100%);
          color: #ffffff;
          padding: 16px 36px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(10, 25, 47, 0.15);
          border: 1px solid rgba(255, 140, 0, 0.3);
        }

        .since-title {
          font-size: 0.72rem;
          letter-spacing: 2.5px;
          color: #ff9900;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .since-year-highlight {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .years-count {
          font-size: 3.2rem;
          font-weight: 900;
          line-height: 1;
          color: #ff9900;
          font-family: var(--font-heading);
        }

        .years-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }

        .years-text strong {
          font-size: 1.2rem;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .years-text span {
          font-size: 0.85rem;
          color: #94a3b8;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .stat-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 26px 20px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          transition: var(--transition);
        }

        .stat-card:hover {
          transform: translateY(-4px);
          background: #ffffff;
          border-color: #ff9900;
          box-shadow: 0 10px 24px rgba(255, 153, 0, 0.12);
        }

        .stat-icon-wrapper {
          width: 54px;
          height: 54px;
          border-radius: 10px;
          background: rgba(255, 140, 0, 0.12);
          color: #e06d00;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .stat-info {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-size: 2.2rem;
          font-weight: 900;
          color: #0a192f;
          line-height: 1.1;
          font-family: var(--font-heading);
        }

        .stat-label {
          font-size: 0.95rem;
          font-weight: 700;
          color: #1e293b;
          margin-top: 4px;
          line-height: 1.3;
        }

        .stat-sub {
          font-size: 0.78rem;
          color: #64748b;
          margin-top: 2px;
        }

        @media (max-width: 992px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 560px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
