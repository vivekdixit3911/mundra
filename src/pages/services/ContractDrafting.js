import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import { ContractDraftingContainer } from "./ContractDrafting.styles.js";

const ContractDrafting = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const service =
      e.target.closest(".sidebar-card").querySelector("#bc-service")?.value ||
      "Contract Review";
    alert(
      "Request received for: " +
        service +
        ". Our team will contact you shortly.",
    );
    e.target.reset();
  };

  const handleBrochureDownload = () => {
    alert("Checklist not available. Please request via the form.");
  };

  return (
    <>
      <Header />
      <ServiceHero
        title="Business Contracts"
        subtitle="Drafting, Review & Negotiation services to protect your business."
        breadcrumb="Business Contracts"
      />
      <ContractDraftingContainer>
        <section className="bc-section">
          <div className="bc-container">
            <main className="bc-main">
              <div className="bc-hero">
                <div style={{ flex: 1 }}>
                  <h1>Business Contracts — Drafting, Review & Negotiation</h1>
                  <div className="bc-byline">
                    Clear contracts reduce risk. We create agreements that
                    protect your business.
                  </div>
                </div>
                <div className="lottie-hero">
                  <dotlottie-player
                    src="https://lottie.host/2b3c4d5e-d8f7-4b5a-8f1a-2b7c6d5e4c3d/business-contracts.json"
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                  ></dotlottie-player>
                </div>
              </div>

              <p>
                <strong>What are Business Contracts?</strong>
              </p>
              <p>
                Business contracts are legally binding agreements that define
                rights, obligations and expectations between parties. Mundra
                Legal helps businesses draft, review, negotiate and manage
                commercial agreements to reduce disputes and support
                enforceability.
              </p>

              <h2>Services we provide</h2>
              <div className="bc-feature-grid">
                <div className="feature">
                  <div className="icon">
                    <i className="fa-solid fa-file-signature"></i>
                  </div>
                  <h4>Contract Drafting</h4>
                  <p>
                    Custom agreements designed to capture deal economics,
                    liabilities, IP, termination clauses and dispute resolution.
                  </p>
                </div>
                <div className="feature">
                  <div className="icon">
                    <i className="fa-solid fa-search"></i>
                  </div>
                  <h4>Contract Review</h4>
                  <p>
                    Risk review, recommendations for amendments,
                    clause-by-clause redlines and negotiation strategy.
                  </p>
                </div>
                <div className="feature">
                  <div className="icon">
                    <i className="fa-solid fa-handshake-simple"></i>
                  </div>
                  <h4>Negotiation Support</h4>
                  <p>
                    We negotiate favorable commercial terms, liability caps,
                    indemnities and timelines on your behalf.
                  </p>
                </div>
                <div className="feature">
                  <div className="icon">
                    <i className="fa-solid fa-user-shield"></i>
                  </div>
                  <h4>NDAs & Confidentiality</h4>
                  <p>
                    Drafting and enforcement of non-disclosure agreements and
                    trade secret protection measures.
                  </p>
                </div>
                <div className="feature">
                  <div className="icon">
                    <i className="fa-solid fa-people-roof"></i>
                  </div>
                  <h4>Employment & Consultant Agreements</h4>
                  <p>
                    Offer letters, employment contracts, consultant agreements,
                    confidentiality, and IP assignment clauses.
                  </p>
                </div>
                <div className="feature">
                  <div className="icon">
                    <i className="fa-solid fa-business-time"></i>
                  </div>
                  <h4>Vendor & Supplier Contracts</h4>
                  <p>
                    Supply, distribution, service-level agreements and
                    procurement contracts with clear deliverables and penalties.
                  </p>
                </div>
              </div>

              <h2>Specialist Contracts</h2>
              <ul>
                <li>Shareholder & Joint Venture agreements</li>
                <li>Licensing & Technology transfer agreements</li>
                <li>SaaS platform Terms of Service & Privacy policies</li>
                <li>Franchise & distribution agreements</li>
                <li>Settlement & mediation agreements</li>
              </ul>

              <h2>Contract Lifecycle Support</h2>
              <p>
                We assist from negotiation and signature to implementation,
                amendments, renewals, termination and dispute resolution
                including arbitration and enforcement.
              </p>

              <h2>Arbitration & Dispute Resolution</h2>
              <p>
                We advise on dispute resolution clauses, arbitration
                proceedings, tribunal strategy and enforcement of arbitral
                awards. Where appropriate, we recommend mediation or
                conciliation to resolve commercial disputes quickly and
                confidentially.
              </p>

              <h2>Process & Typical Timeline</h2>
              <table className="faq-table">
                <thead>
                  <tr>
                    <th>Stage</th>
                    <th>What Happens</th>
                    <th>Typical Timeframe</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Initial Consultation</td>
                    <td>Scope, risk appetite, and required documents</td>
                    <td>1–7 days</td>
                  </tr>
                  <tr>
                    <td>Drafting / Review</td>
                    <td>Prepare draft, client redlines, internal review</td>
                    <td>3–14 days</td>
                  </tr>
                  <tr>
                    <td>Negotiation</td>
                    <td>Counterpart review, negotiation calls and redlines</td>
                    <td>1–6 weeks</td>
                  </tr>
                  <tr>
                    <td>Finalisation & Signing</td>
                    <td>Execution, notarisation/e-signing support, storage</td>
                    <td>1–7 days</td>
                  </tr>
                  <tr>
                    <td>Implementation & Management</td>
                    <td>Post-signature support, notices, renewals</td>
                    <td>Ongoing</td>
                  </tr>
                </tbody>
              </table>

              <h2>Fees (Indicative)</h2>
              <table className="faq-table">
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Indicative Range</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Simple NDA / Template</td>
                    <td>INR 5,000 – 15,000</td>
                  </tr>
                  <tr>
                    <td>Standard Commercial Agreement</td>
                    <td>INR 15,000 – 75,000</td>
                  </tr>
                  <tr>
                    <td>Complex Licensing / JV / Shareholder</td>
                    <td>INR 50,000 – 4,00,000+</td>
                  </tr>
                  <tr>
                    <td>Negotiation & Advisory (per hour)</td>
                    <td>INR 3,000 – 10,000+</td>
                  </tr>
                </tbody>
              </table>

              <h2>Why choose Mundra Legal for Contracts</h2>
              <ul>
                <li>Drafting that anticipates disputes and limits exposure</li>
                <li>
                  Commercially pragmatic advice aligned with business goals
                </li>
                <li>Pan-India representation and local counsel coordination</li>
                <li>Transparent and predictable fee structures</li>
                <li>Secure handling of confidential documents</li>
              </ul>

              <h2 id="bc-faq">Frequently Asked Questions</h2>
              <table className="faq-table">
                <thead>
                  <tr>
                    <th>Question</th>
                    <th>Answer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>How long does contract drafting take?</td>
                    <td>
                      Depends on complexity. Simple NDAs can be 1–3 days;
                      complex commercial agreements may take weeks.
                    </td>
                  </tr>
                  <tr>
                    <td>Do you provide templates?</td>
                    <td>
                      Yes — we provide vetted templates and can customise them
                      to your needs.
                    </td>
                  </tr>
                  <tr>
                    <td>Can you help enforce contract breaches?</td>
                    <td>
                      Yes — we provide dispute resolution options including
                      negotiation, mediation, arbitration, and litigation when
                      required.
                    </td>
                  </tr>
                </tbody>
              </table>
            </main>

            <aside className="bc-sidebar">
              <div className="sidebar-card">
                <h3>Request a Contract Review</h3>
                <p style={{ color: "var(--text-muted)", marginBottom: "12px" }}>
                  Upload your contract for a fast review and a transparent
                  quote.
                </p>
                <label htmlFor="bc-service" style={{ fontWeight: 700 }}>
                  Service
                </label>
                <select
                  id="bc-service"
                  style={{
                    margin: "8px 0 12px",
                    width: "100%",
                    padding: "10px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                  }}
                >
                  <option>Contract Review</option>
                  <option>Draft a New Contract</option>
                  <option>Negotiation Support</option>
                  <option>NDA / Confidentiality</option>
                  <option>Employment / Consultant</option>
                  <option>Shareholder / JV</option>
                  <option>Arbitration / Dispute</option>
                </select>

                <form
                  id="bc-form"
                  className="contact-form"
                  encType="multipart/form-data"
                  onSubmit={handleFormSubmit}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                  />
                  <label
                    htmlFor="contract-file"
                    style={{ fontSize: "0.95rem", fontWeight: 700 }}
                  >
                    Attach contract (optional)
                  </label>
                  <input
                    id="contract-file"
                    type="file"
                    name="contract"
                    accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  />
                  <label
                    htmlFor="bc-callback"
                    style={{ fontSize: "0.95rem", fontWeight: 700 }}
                  >
                    Preferred callback
                  </label>
                  <input
                    id="bc-callback"
                    type="datetime-local"
                    name="callback"
                  />
                  <textarea
                    name="notes"
                    rows="3"
                    placeholder="Short note or key points"
                  ></textarea>
                  <button type="submit">Request Review</button>
                </form>

                <div style={{ marginTop: "12px", display: "flex", gap: "8px" }}>
                  <button
                    id="bc-brochure"
                    onClick={handleBrochureDownload}
                    style={{
                      flex: 1,
                      padding: "10px",
                      borderRadius: "8px",
                      background: "var(--primary-gold)",
                      border: "none",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Download Checklist
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </ContractDraftingContainer>
      <Footer />
    </>
  );
};

export default ContractDrafting;
