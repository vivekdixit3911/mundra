import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import SidebarForm from "../../components/SidebarForm";
import LottieAnimation from "../../components/LottieAnimation";
import "./styles/IsoCertification.css";

const IsoCertification = () => {
  useEffect(() => {
    document.title = "ISO Certification Services | Mundra Legal Consultants";
  }, []);

  return (
    <>
      <Header />
      <ServiceHero
        title="ISO Certification & Compliance"
        subtitle="Advisory, documentation, audits and certification support for ISO standards"
      />

      <main id="main-content">
        <section className="iso-section" aria-labelledby="iso-heading">
          <div className="iso-container">
            <article className="iso-main">
              <h1 id="iso-heading">ISO Certification & Compliance Services</h1>
              <div className="byline">
                Comprehensive ISO advisory, documentation, gap analysis and
                audit support for ISO 9001, ISO 14001, ISO 27001 and more.
              </div>

              <div className="section-lottie">
                <LottieAnimation src="https://assets9.lottiefiles.com/packages/lf20_cmaqoazd.json" />
              </div>

              <p>
                Achieving ISO certification demonstrates your organisation’s
                commitment to quality, environmental stewardship, information
                security and operational excellence. We guide you through gap
                analysis, documentation, implementation, internal audits and
                certification body readiness.
              </p>

              <h2>Popular ISO Standards We Support</h2>
              <div className="feature-grid">
                <div className="feature-card small-animate">
                  <i
                    className="fas fa-certificate"
                    style={{ color: "var(--primary-gold)" }}
                  ></i>
                  <h4>ISO 9001</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Quality Management Systems (QMS) - process standard for
                    consistent product/service quality.
                  </p>
                </div>
                <div className="feature-card small-animate">
                  <i
                    className="fas fa-leaf"
                    style={{ color: "var(--primary-gold)" }}
                  ></i>
                  <h4>ISO 14001</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Environmental Management Systems (EMS) - sustainability and
                    compliance.
                  </p>
                </div>
                <div className="feature-card small-animate">
                  <i
                    className="fas fa-shield-alt"
                    style={{ color: "var(--primary-gold)" }}
                  ></i>
                  <h4>ISO 27001</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Information Security Management Systems (ISMS) - data
                    protection and risk management.
                  </p>
                </div>
                <div className="feature-card small-animate">
                  <i
                    className="fas fa-briefcase"
                    style={{ color: "var(--primary-gold)" }}
                  ></i>
                  <h4>ISO 45001</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Occupational Health & Safety (OHS) - workplace safety
                    management.
                  </p>
                </div>
              </div>

              <h2>ISO Certification Process (Typical)</h2>
              <ol>
                <li>
                  <strong>Gap Analysis:</strong> We assess current processes
                  against the chosen ISO standard and identify non-conformities.
                </li>
                <li>
                  <strong>Documentation & Policy:</strong> Draft procedures,
                  manuals and registers tailored to your organisation.
                </li>
                <li>
                  <strong>Implementation Support:</strong> Assist teams with
                  process changes, training and record-keeping.
                </li>
                <li>
                  <strong>Internal Audit:</strong> Conduct internal audits and
                  corrective action tracking.
                </li>
                <li>
                  <strong>Certification Audit:</strong> Coordinate with
                  certification body and support during Stage 1 & Stage 2
                  audits.
                </li>
                <li>
                  <strong>Maintenance & Surveillance:</strong> Support annual
                  surveillance audits and recertification every 3 years.
                </li>
              </ol>

              <h2>Required Documents & Records</h2>
              <ul>
                <li>Quality / Environmental / ISMS manual (as applicable)</li>
                <li>Process procedures and work instructions</li>
                <li>Records of internal audits and management reviews</li>
                <li>
                  Risk assessments, corrective action records and training logs
                </li>
                <li>
                  Asset registers and access control policies (for ISO 27001)
                </li>
              </ul>

              <div style={{ textAlign: "center", margin: "22px 0" }}>
                <svg
                  width="100%"
                  height="40"
                  viewBox="0 0 1200 40"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="iso-gradient" x1="0" x2="1">
                      <stop
                        offset="0%"
                        stopColor="#1C2951"
                        stopOpacity="0.12"
                      />
                      <stop
                        offset="100%"
                        stopColor="#D4AF37"
                        stopOpacity="0.06"
                      />
                    </linearGradient>
                  </defs>
                  <rect
                    width="1200"
                    height="40"
                    fill="url(#iso-gradient)"
                    rx="6"
                  />
                </svg>
              </div>

              <h2>Audit Schedule & Timeline (Indicative)</h2>
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Stage</th>
                    <th>Typical Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Gap analysis & scoping</td>
                    <td>1–2 weeks</td>
                  </tr>
                  <tr>
                    <td>Documentation & process setup</td>
                    <td>2–6 weeks (depending on complexity)</td>
                  </tr>
                  <tr>
                    <td>Internal audit & corrective actions</td>
                    <td>1–2 weeks</td>
                  </tr>
                  <tr>
                    <td>Certification audit (Stage 1 & 2)</td>
                    <td>2–4 weeks (audit scheduling)</td>
                  </tr>
                  <tr>
                    <td>Surveillance audits</td>
                    <td>Annually</td>
                  </tr>
                </tbody>
              </table>

              <h2>Pricing Guide (Indicative)</h2>
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Indicative Fee (INR)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Gap analysis & scoping</td>
                    <td>₹25,000 — ₹75,000</td>
                  </tr>
                  <tr>
                    <td>Documentation pack (QMS/EMS/ISMS)</td>
                    <td>₹40,000 — ₹2,00,000</td>
                  </tr>
                  <tr>
                    <td>Implementation support & training</td>
                    <td>₹25,000 — ₹1,50,000</td>
                  </tr>
                  <tr>
                    <td>Internal audit & pre-assessment</td>
                    <td>₹20,000 — ₹80,000</td>
                  </tr>
                  <tr>
                    <td>
                      Certification coordination (not including cert-body fees)
                    </td>
                    <td>₹15,000 — ₹60,000</td>
                  </tr>
                </tbody>
              </table>

              <h2>Arbitration, Disputes & Contractual Clauses</h2>
              <p>
                Many certification engagements require contractual clarity with
                vendors and certification bodies. We draft arbitration-ready
                clauses, dispute resolution provisions and service level
                agreements to protect your organisation during audits and
                post-certification disputes.
              </p>

              <h2>FAQs</h2>
              <div className="highlight-box">
                <h3>How long does ISO certification take?</h3>
                <p>
                  Typically 2–3 months for straightforward implementations;
                  complex organisations may take longer. Timeline depends on
                  readiness and availability for audits.
                </p>
              </div>
              <div className="highlight-box">
                <h3>Do you provide documentation templates?</h3>
                <p>
                  Yes — we provide tailored templates and policy documents as
                  part of our documentation pack.
                </p>
              </div>

              <div style={{ textAlign: "center", marginTop: "18px" }}>
                <a
                  href="#iso-contact-form"
                  className="btn-primary"
                  style={{ maxWidth: "300px", display: "inline-block" }}
                >
                  Request ISO Consultation
                </a>
              </div>
            </article>

            <aside className="iso-sidebar">
              <div id="iso-contact-form">
                <SidebarForm />
              </div>

              <div className="sidebar-card">
                <h4
                  style={{ margin: "0 0 8px 0", color: "var(--primary-color)" }}
                >
                  Quick Checklist
                </h4>
                <p
                  style={{
                    margin: "0 0 8px 0",
                    color: "var(--text-secondary)",
                  }}
                >
                  Management commitment, process maps, training records,
                  internal audit schedule, and evidence of corrective actions.
                </p>
              </div>

              <div className="sidebar-card">
                <div style={{ marginBottom: "12px" }}>
                  <LottieAnimation src="https://assets5.lottiefiles.com/packages/lf20_u4yrau.json" />
                </div>
                <div style={{ fontWeight: 700, color: "var(--primary-color)" }}>
                  Practical & Compliant
                </div>
                <div
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.95rem",
                    marginTop: "8px",
                  }}
                >
                  We balance compliance with operational practicality to
                  minimise disruption.
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default IsoCertification;
