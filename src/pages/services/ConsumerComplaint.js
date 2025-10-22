import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import { ConsumerComplaintContainer } from "./ConsumerComplaint.styles.js";

const ConsumerComplaint = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you — your complaint has been received. Our team will contact you shortly.",
    );
    e.target.reset();
  };

  return (
    <>
      <Header />
      <ServiceHero
        title="Consumer Complaint"
        subtitle="Representation for consumer rights and filing complaints in consumer forums."
        breadcrumb="Consumer Complaint"
      />
      <ConsumerComplaintContainer>
        <section className="cc-section" aria-labelledby="consumer-heading">
          <div className="cc-container">
            <article className="cc-main">
              <div
                style={{
                  display: "flex",
                  gap: "14px",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <h1 id="consumer-heading">
                  Consumer Complaint & Protection Services
                </h1>
                <div className="cc-byline">
                  Filing consumer complaints, representation before consumer
                  forums, unfair trade practices, product liability and ADR
                  options including arbitration & mediation
                </div>
              </div>

              <div className="section-lottie">
                <lottie-player
                  src="https://assets10.lottiefiles.com/packages/lf20_j2pcck2v.json"
                  background="transparent"
                  speed="0.9"
                  loop
                  autoplay
                ></lottie-player>
              </div>

              <p>
                We assist consumers in seeking redressal against defective
                products, deficient services, unfair trade practices, and
                misleading advertisements. Our team drafts complaints, prepares
                evidence, and represents clients before District, State and
                National Consumer Forums.
              </p>

              <h2>Types of Consumer Complaints</h2>
              <div className="feature-grid">
                <div className="feature-card small-animate">
                  <i
                    className="fas fa-shopping-bag"
                    style={{ color: "var(--primary-gold)" }}
                  ></i>
                  <h4>Defective Products</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Goods that fail to meet quality/safety standards.
                  </p>
                </div>
                <div className="feature-card small-animate">
                  <i
                    className="fas fa-concierge-bell"
                    style={{ color: "var(--primary-gold)" }}
                  ></i>
                  <h4>Deficient Services</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Services not rendered properly by professionals, travel,
                    telecom, etc.
                  </p>
                </div>
                <div className="feature-card small-animate">
                  <i
                    className="fas fa-bullhorn"
                    style={{ color: "var(--primary-gold)" }}
                  ></i>
                  <h4>Misleading Advertisements</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    False claims about product efficacy, pricing or offers.
                  </p>
                </div>
                <div className="feature-card small-animate">
                  <i
                    className="fas fa-file-invoice"
                    style={{ color: "var(--primary-gold)" }}
                  ></i>
                  <h4>Billing & Charging Disputes</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Unauthorized charges, hidden fees and subscription issues.
                  </p>
                </div>
              </div>

              <h2>How We Work — Process</h2>
              <ol>
                <li>Initial case evaluation and evidence checklist.</li>
                <li>
                  Pre-litigation notice / demand notice to opposite party.
                </li>
                <li>
                  Drafting & filing consumer complaint with appropriate forum.
                </li>
                <li>
                  Representation at hearings, mediation/settlement attempts and
                  adjudication.
                </li>
                <li>Enforcement of orders and compensation recovery.</li>
              </ol>

              <h2>Arbitration / Mediation & Matrimonial Overlaps</h2>
              <p>
                Consumer disputes may sometimes be referred to ADR
                (mediation/arbitration) depending on contract terms. Matrimonial
                overlaps can occur when household purchases, shared services, or
                allegations of financial impropriety arise; we coordinate
                between family law and consumer remedies when needed.
              </p>

              <div className="highlight-box">
                <h3>
                  <i className="fas fa-balance-scale"></i> ADR & Mediation
                </h3>
                <p>
                  We represent clients in mediation centers and arbitral forums
                  where consumer contracts provide for alternate dispute
                  resolution, striving to achieve timely settlements.
                </p>
              </div>

              <div className="highlight-box">
                <h3>
                  <i className="fas fa-ring"></i> Matrimonial-Consumer Issues
                </h3>
                <p>
                  Where family disputes intersect with consumer claims (joint
                  accounts, shared subscriptions, familial misuse), our team
                  works with family law experts to craft a combined legal
                  strategy.
                </p>
              </div>

              <h2>Remedies & Typical Compensation</h2>
              <p>
                Remedies include replacement/refund, repair, compensation for
                mental agony, litigation costs, and exemplary damages in certain
                cases. Typical compensation depends on the severity and proof of
                loss.
              </p>

              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Issue</th>
                    <th>Common Relief</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Defective product</td>
                    <td>Replacement/refund + compensation</td>
                  </tr>
                  <tr>
                    <td>Service deficiency</td>
                    <td>Service correction + compensation</td>
                  </tr>
                  <tr>
                    <td>Misleading ad</td>
                    <td>Injunction + refund + compensation</td>
                  </tr>
                  <tr>
                    <td>Billing dispute</td>
                    <td>Refund + penalty</td>
                  </tr>
                </tbody>
              </table>

              <h2>Documents & Evidence Checklist</h2>
              <ul>
                <li>Invoices, receipts, warranty cards, service records</li>
                <li>Photographs, videos, defective item evidence</li>
                <li>Communication logs, emails, warranty claims</li>
                <li>Bank/transaction statements for payments</li>
                <li>
                  Any prior complaint reference numbers or acknowledgements
                </li>
              </ul>

              <h2>How Mundra Legal Helps</h2>
              <div className="feature-grid">
                <div className="feature-card">
                  <i
                    className="fas fa-handshake"
                    style={{ color: "var(--primary-color)" }}
                  ></i>
                  <h4>Pre-litigation Negotiation</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Demand notices, settlement negotiations, vendor liaison.
                  </p>
                </div>
                <div className="feature-card">
                  <i
                    className="fas fa-gavel"
                    style={{ color: "var(--primary-color)" }}
                  ></i>
                  <h4>Forum Representation</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Representation before District, State & National Consumer
                    Forums.
                  </p>
                </div>
                <div className="feature-card">
                  <i
                    className="fas fa-magnifying-glass"
                    style={{ color: "var(--primary-color)" }}
                  ></i>
                  <h4>Evidence & Forensics</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Technical evidence gathering, expert reports and
                    documentation.
                  </p>
                </div>
                <div className="feature-card">
                  <i
                    className="fas fa-bolt"
                    style={{ color: "var(--primary-color)" }}
                  ></i>
                  <h4>Quick Remedies</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Urgent interim reliefs and injunctions where consumer rights
                    are being violated.
                  </p>
                </div>
              </div>

              <h2>FAQs</h2>
              <div className="highlight-box">
                <h3>
                  <i className="fas fa-question-circle"></i> Where do I file a
                  complaint?
                </h3>
                <p>
                  Depending on the claim amount and nature, complaints are filed
                  with District, State or National Consumer Forums. We advise
                  the correct forum and prepare filings accordingly.
                </p>
              </div>

              <div className="highlight-box">
                <h3>
                  <i className="fas fa-question-circle"></i> How long does a
                  consumer complaint take?
                </h3>
                <p>
                  Timelines vary; many matters settle at early hearings but
                  complex cases can take months. We pursue ADR and quick
                  settlement routes where viable.
                </p>
              </div>

              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <a
                  href="#consumer-contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("consumer-contact")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  className="btn-primary"
                  style={{ maxWidth: "320px", display: "inline-block" }}
                >
                  Get Help Now
                </a>
              </div>
            </article>

            <aside className="cc-sidebar">
              <div className="sidebar-card">
                <h3
                  style={{
                    margin: "0 0 12px 0",
                    color: "var(--primary-color)",
                  }}
                >
                  File a Consumer Complaint
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    margin: "0 0 12px 0",
                  }}
                >
                  Tell us what happened and we will advise the best forum and
                  remedies.
                </p>
                <form id="consumer-contact" onSubmit={handleFormSubmit}>
                  <input
                    className="form-control"
                    name="name"
                    placeholder="Name *"
                    required
                  />
                  <input
                    className="form-control"
                    name="email"
                    type="email"
                    placeholder="Email *"
                    required
                  />
                  <input
                    className="form-control"
                    name="phone"
                    placeholder="Phone *"
                    required
                  />
                  <select className="form-control" name="issueType">
                    <option value="">Select issue</option>
                    <option value="product">Product</option>
                    <option value="service">Service</option>
                    <option value="advertisement">Advertisement</option>
                    <option value="billing">Billing</option>
                  </select>
                  <textarea
                    className="form-control"
                    name="details"
                    placeholder="Brief description"
                  ></textarea>
                  <button className="btn-primary" type="submit">
                    <i className="fas fa-paper-plane"></i> Submit Complaint
                  </button>
                </form>
              </div>

              <div className="sidebar-card">
                <h4
                  style={{ margin: "0 0 8px 0", color: "var(--primary-color)" }}
                >
                  Useful Links
                </h4>
                <p
                  style={{
                    margin: "0 0 8px 0",
                    color: "var(--text-secondary)",
                  }}
                >
                  <a
                    href="#"
                    style={{
                      color: "var(--primary-color)",
                      textDecoration: "none",
                    }}
                  >
                    Consumer Protection Act (overview)
                  </a>
                </p>
                <p
                  style={{
                    margin: "0 0 8px 0",
                    color: "var(--text-secondary)",
                  }}
                >
                  <a
                    href="#"
                    style={{
                      color: "var(--primary-color)",
                      textDecoration: "none",
                    }}
                  >
                    How to file a complaint
                  </a>
                </p>
              </div>

              <div className="sidebar-card">
                <div style={{ marginBottom: "12px" }}>
                  <lottie-player
                    src="https://assets9.lottiefiles.com/packages/lf20_x62chJ.json"
                    background="transparent"
                    speed="1"
                    style={{ width: "100%", height: "160px" }}
                    loop
                    autoplay
                  ></lottie-player>
                </div>
                <div style={{ fontWeight: 700, color: "var(--primary-color)" }}>
                  Consumer Rights Advocacy
                </div>
                <div
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.95rem",
                    marginTop: "8px",
                  }}
                >
                  We represent consumers and hold companies accountable.
                </div>
              </div>
            </aside>
          </div>
        </section>
      </ConsumerComplaintContainer>
      <Footer />
    </>
  );
};

export default ConsumerComplaint;
