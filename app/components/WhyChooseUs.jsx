'use client';

import { Award, BadgePercent, ShieldAlert, CheckSquare, ShieldCheck, Flame, Wrench, HardHat } from 'lucide-react';
import { whyChoosePoints, companyDetails } from '../data/content';

const iconMap = {
  Award, BadgePercent, ShieldAlert, CheckSquare
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="why-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Why Choose ATHETEC TECHNOLOGIES</span>
          <h2 className="section-title">
            Engineered for <span>Reliability, Safety & Scale</span>
          </h2>
          <p className="section-desc">
            We bridge precision engineering with rapid turnaround, delivering turnkey mechanical infrastructure that meets stringent industrial audits.
          </p>
        </div>

        <div className="why-grid">
          {whyChoosePoints.map((point, idx) => {
            const Icon = iconMap[point.icon] || Award;
            return (
              <div key={idx} className="why-card">
                <div className="why-num">0{idx + 1}</div>
                <div className="why-icon-box">
                  <Icon size={26} />
                </div>
                <h3 className="why-title">{point.title}</h3>
                <p className="why-desc">{point.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Competencies Ribbon */}
        <div className="competencies-ribbon">
          <div className="comp-item">
            <HardHat size={22} className="comp-icon" />
            <div>
              <strong>Certified Industrial Riggers & Fitters</strong>
              <span>Equipped with advanced safety PPE & heavy lifting gear</span>
            </div>
          </div>

          <div className="comp-item">
            <Flame size={22} className="comp-icon" />
            <div>
              <strong>6G / TIG / MIG Certified Welders</strong>
              <span>Radiography test (RT) & ultrasonic test (UT) compliant</span>
            </div>
          </div>

          <div className="comp-item">
            <ShieldCheck size={22} className="comp-icon" />
            <div>
              <strong>Haridwar SIDCUL / BHEL Proximity</strong>
              <span>Immediate on-site engineering dispatch & emergency response</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .why-section {
          padding: 90px 0;
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 50px;
        }

        .why-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 30px 24px;
          position: relative;
          transition: var(--transition);
        }

        .why-card:hover {
          transform: translateY(-6px);
          border-color: #ff9900;
          box-shadow: 0 16px 32px rgba(10, 25, 47, 0.1);
        }

        .why-num {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 2.2rem;
          font-weight: 900;
          color: #e2e8f0;
          font-family: var(--font-heading);
          line-height: 1;
        }

        .why-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 10px;
          background: #0a192f;
          color: #ff9900;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          transition: var(--transition);
        }

        .why-card:hover .why-icon-box {
          background: #ff9900;
          color: #ffffff;
        }

        .why-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0a192f;
          margin-bottom: 10px;
          line-height: 1.35;
        }

        .why-desc {
          font-size: 0.88rem;
          color: #64748b;
          line-height: 1.6;
        }

        /* Ribbon */
        .competencies-ribbon {
          background: linear-gradient(135deg, #0a192f 0%, #16375c 100%);
          border-radius: 12px;
          padding: 24px 36px;
          color: #ffffff;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          box-shadow: 0 12px 28px rgba(10, 25, 47, 0.15);
          border: 1px solid rgba(255, 153, 0, 0.25);
        }

        .comp-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .comp-icon {
          color: #ff9900;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .comp-item strong {
          display: block;
          font-size: 0.95rem;
          margin-bottom: 4px;
        }

        .comp-item span {
          display: block;
          font-size: 0.8rem;
          color: #cbd5e1;
          line-height: 1.4;
        }

        @media (max-width: 1080px) {
          .why-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .competencies-ribbon {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        @media (max-width: 600px) {
          .why-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
