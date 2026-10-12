'use client';

import { useState } from 'react';
import { Send, Phone, MessageSquare, CheckCircle2, ShieldCheck, Clock, Award } from 'lucide-react';
import { companyDetails } from '../data/content';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'Process Piping (SS / MS)',
    timeline: 'Immediate (Within 1-2 Weeks)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappInquiryUrl = `https://wa.me/${companyDetails.phoneRaw}?text=${encodeURIComponent(
    `Hello ATHETEC TECHNOLOGIES,\n\nI am requesting a quotation for my project:\n- Name: ${formData.name || 'Industrial Buyer'}\n- Company: ${formData.company || 'Not Specified'}\n- Phone: ${formData.phone || ''}\n- Required Scope: ${formData.service}\n- Timeline: ${formData.timeline}\n- Details: ${formData.message || 'Please send catalog and pricing.'}`
  )}`;

  return (
    <section id="quote" className="quote-section">
      <div className="container">
        <div className="quote-grid">
          {/* Left Side: Trust & Value Proposition */}
          <div className="quote-intro">
            <div className="badge-tag">REQUEST INSTANT B2B QUOTATION</div>
            <h2 className="quote-heading">
              Ready to Discuss Your <span>Engineering Project?</span>
            </h2>
            <p className="quote-desc">
              Whether you require high-pressure IBR steam piping, turnkey stainless steel storage silos, heavy PEB shed fabrication, or machinery installation in Uttarakhand, our engineers are ready with technical proposals.
            </p>

            <div className="trust-points">
              <div className="t-point">
                <CheckCircle2 size={20} className="t-icon" />
                <div>
                  <strong>Turnaround Within 24 Hours:</strong>
                  <span>Detailed BOQ and budgetary estimates sent promptly.</span>
                </div>
              </div>

              <div className="t-point">
                <ShieldCheck size={20} className="t-icon" />
                <div>
                  <strong>Non-Disclosure & Quality Assured:</strong>
                  <span>Full confidentiality for your proprietary plant drawings and specs.</span>
                </div>
              </div>

              <div className="t-point">
                <Award size={20} className="t-icon" />
                <div>
                  <strong>Direct Plant Engineering Inspection:</strong>
                  <span>Site surveys available in Haridwar, Dehradun, Roorkee, and across Northern India.</span>
                </div>
              </div>
            </div>

            <div className="direct-call-card">
              <div className="d-icon-circle">
                <Phone size={24} />
              </div>
              <div>
                <span className="d-sub">Direct Engineering Line:</span>
                <a href={`tel:${companyDetails.phoneRaw}`} className="d-num">
                  {companyDetails.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive RFQ Form */}
          <div className="quote-form-card">
            {submitted ? (
              <div className="submission-success">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={54} className="success-icon" />
                </div>
                <h3>Quotation Request Received!</h3>
                <p>
                  Thank you, <strong>{formData.name}</strong>. Our senior project engineer has been notified and will call you at <strong>{formData.phone}</strong> shortly.
                </p>

                <div className="success-actions">
                  <a 
                    href={whatsappInquiryUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-primary"
                  >
                    <MessageSquare size={16} /> Fast-Track via WhatsApp
                  </a>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="btn-outline"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rfq-form">
                <h3 className="form-title">Request Quotation / RFQ</h3>
                <p className="form-subtitle">Fill in your plant details for custom pricing.</p>

                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Company / Plant Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Acme Pharma Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Mobile Number (For Call / WhatsApp) *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="e.g. 98XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Work Email</label>
                    <input 
                      type="email" 
                      placeholder="e.g. purchase@acme.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Required Engineering Scope *</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option>Process Piping (SS / MS)</option>
                      <option>Utility Piping Systems</option>
                      <option>IBR High Pressure Steam Piping</option>
                      <option>Fire Hydrant & Safety Network</option>
                      <option>Heavy Structural & PEB Shed Fabrication</option>
                      <option>Machine Installation & Commissioning</option>
                      <option>Storage Tanks, Vessels & Conveyors</option>
                      <option>Pharma Process Utensils & Cleanroom Gear</option>
                      <option>Custom Industrial Fabrication</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Project Timeline</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    >
                      <option>Immediate (Within 1-2 Weeks)</option>
                      <option>1 Month</option>
                      <option>Quarterly Planning</option>
                      <option>Annual Maintenance Contract (AMC)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Project Details / Quantity / Site Location</label>
                  <textarea 
                    rows={3}
                    placeholder="Provide pipe sizes, material grades (SS304/316, MS), tank capacity, or plant location..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="form-submit-row">
                  <button type="submit" className="btn-primary submit-btn">
                    <Send size={16} />
                    <span>Submit Quotation Request</span>
                  </button>

                  <a 
                    href={whatsappInquiryUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="whatsapp-quick-submit"
                  >
                    <MessageSquare size={16} /> Send via WhatsApp
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .quote-section {
          padding: 90px 0;
          background: linear-gradient(135deg, #0a192f 0%, #0d223f 100%);
          color: #ffffff;
          position: relative;
        }

        .quote-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          align-items: center;
        }

        .quote-intro {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .quote-heading {
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1.2;
          color: #ffffff;
        }

        .quote-heading span {
          color: #ff9900;
        }

        .quote-desc {
          font-size: 1.05rem;
          color: #cbd5e1;
          line-height: 1.65;
        }

        .trust-points {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin: 10px 0;
        }

        .t-point {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .t-icon {
          color: #ff9900;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .t-point strong {
          display: block;
          font-size: 0.95rem;
          color: #f8fafc;
        }

        .t-point span {
          display: block;
          font-size: 0.85rem;
          color: #94a3b8;
        }

        .direct-call-card {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 10px;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          width: fit-content;
        }

        .d-icon-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #ff9900;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .d-sub {
          display: block;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: #cbd5e1;
        }

        .d-num {
          font-size: 1.3rem;
          font-weight: 800;
          color: #ffffff;
        }

        /* Form Card */
        .quote-form-card {
          background: #ffffff;
          color: #0f172a;
          border-radius: 16px;
          padding: 36px;
          box-shadow: 0 20px 48px rgba(0,0,0,0.3);
        }

        .form-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: #0a192f;
          margin-bottom: 4px;
        }

        .form-subtitle {
          font-size: 0.88rem;
          color: #64748b;
          margin-bottom: 24px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
        }

        .form-group label {
          font-size: 0.82rem;
          font-weight: 700;
          color: #334155;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 12px 14px;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font-size: 0.9rem;
          font-family: inherit;
          color: #0f172a;
          background: #f8fafc;
          transition: var(--transition);
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #ff9900;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(255, 153, 0, 0.15);
        }

        .form-submit-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 10px;
        }

        .submit-btn {
          flex: 1;
          padding: 14px 20px;
        }

        .whatsapp-quick-submit {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 12px 18px;
          background: #25d366;
          color: #ffffff;
          border-radius: 6px;
          font-weight: 700;
          font-size: 0.85rem;
          transition: var(--transition);
        }

        .whatsapp-quick-submit:hover {
          background: #20ba5a;
        }

        /* Success */
        .submission-success {
          text-align: center;
          padding: 40px 20px;
        }

        .success-icon-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 16px;
        }

        .success-icon {
          color: #16a34a;
        }

        .submission-success h3 {
          font-size: 1.5rem;
          color: #0a192f;
          margin-bottom: 10px;
        }

        .submission-success p {
          color: #64748b;
          font-size: 0.95rem;
          margin-bottom: 24px;
        }

        .success-actions {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        @media (max-width: 992px) {
          .quote-grid {
            grid-template-columns: 1fr;
          }

          .quote-form-card {
            padding: 24px;
          }

          .form-row {
            grid-template-columns: 1fr;
            margin-bottom: 0;
          }
        }
      `}</style>
    </section>
  );
}
