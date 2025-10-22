import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import { CyberFraudContainer } from "./CyberFraud.styles.js";

const CyberFraud = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Thank you. Our cyber team will contact you immediately.");
    e.target.reset();
  };

  return (
    <>
      <Header />
      <ServiceHero
        title="Cyber Fraud"
        subtitle="Report cyber frauds, secure digital evidence, file cyber FIRs, and recover funds."
        breadcrumb="Cyber Fraud"
      />
      <CyberFraudContainer>
        <section className="cf-section" aria-labelledby="cf-heading">
          <div className="cf-container">
            <article className="cf-main">
              <h1 id="cf-heading">
                Cyber Fraud Complaint & Digital Evidence Preservation
              </h1>
              <div className="byline">
                File cyber FIRs, secure digital evidence, liaise with cyber
                cells and pursue recovery or relief under IT Act and related
                provisions.
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
                Cyber frauds — from phishing, UPI frauds, romance scams to
                business email compromise — require rapid action to preserve
                evidence and prevent dissipation of assets. We assist victims
                and businesses with immediate preservation notices, cyber-FIR
                drafting, bank liaison and representation before cyber cells and
                courts.
              </p>

              <h2>Immediate Actions to Take</h2>
              <ol>
                <li>
                  Preserve all screenshots, transaction IDs, chat exports and
                  email headers.
                </li>
                <li>
                  Note timestamps and device identifiers; do not tamper with
                  devices or reset accounts.
                </li>
                <li>
                  Contact your bank immediately for transaction freeze and
                  recall where possible.
                </li>
                <li>
                  Engage legal counsel to issue preservation notices and prepare
                  a detailed complaint.
                </li>
              </ol>

              <h2>How to File a Cyber FIR</h2>
              <p>
                We prepare a precise complaint narrating events, attach
                supporting evidence, and file with the local police cyber cell
                or state cyber crime portal. We also coordinate with banks and
                service providers for emergency measures.
              </p>

              <h2>Digital Forensics & Evidence</h2>
              <p>
                We work with certified forensic experts to obtain server logs,
                metadata, IP traces and retain chain-of-custody for
                admissibility. Early preservation improves chances of recovery
                and strengthens legal remedies.
              </p>

              <div style={{ textAlign: "center", margin: "22px 0" }}>
                <svg
                  width="100%"
                  height="36"
                  viewBox="0 0 1200 36"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="g-cf" x1="0" x2="1">
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
                  <rect width="1200" height="36" fill="url(#g-cf)" rx="6" />
                </svg>
              </div>

              <h2>Relevant Laws & Sections</h2>
              <ul>
                <li>
                  <strong>Information Technology Act, 2000</strong> — Sections
                  dealing with hacking, data theft and cyber offences.
                </li>
                <li>
                  <strong>IPC provisions</strong> — Fraud, cheating (IPC 420),
                  criminal breach of trust, and other offences invoked in cyber
                  matters.
                </li>
                <li>
                  <strong>Banking & Payments Regulations</strong> — Regulations
                  for UPI, NEFT, RTGS reversals and bank liability.
                </li>
              </ul>

              <h2>Sample Cyber FIR Checklist</h2>
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Why it matters</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Transaction IDs / UTRs</td>
                    <td>
                      Essential for tracing funds and requesting freeze/recall
                      from banks
                    </td>
                  </tr>
                  <tr>
                    <td>Chat exports / screenshots</td>
                    <td>Evidence of communication and inducement</td>
                  </tr>
                  <tr>
                    <td>Email headers & server logs</td>
                    <td>Helps forensic tracing of source IPs</td>
                  </tr>
                  <tr>
                    <td>Device details (IMEI / device ID)</td>
                    <td>Forensics and seizure requests</td>
                  </tr>
                </tbody>
              </table>

              <h2>Bank Liaison & Recovery Options</h2>
              <p>
                We draft legal notices to banks and payment platforms for
                transaction stoppage, recall and reference to NPCI dispute
                mechanisms. Recovery depends on speed, whether funds are within
                regulated channels, and counterparty presence.
              </p>

              <h2>Cyber Insurance & Remedies</h2>
              <p>
                If you hold cyber insurance, we help lodge claims and
                co-ordinate with insurers and forensic teams. Remedies may
                include criminal prosecution, civil claims for recovery and
                injunctions to prevent further harm.
              </p>

              <h2>Matrimonial & Business Disputes (Overlap)</h2>
              <p>
                Many cyber frauds arise in matrimonial/relationship contexts
                (e.g., extortion, revenge porn) or as part of business disputes
                (B2B fraud). We coordinate family law counsel and commercial
                litigators to handle such hybrid matters.
              </p>

              <h2>Timeline & What to Expect</h2>
              <p>
                Initial FIR filing and preservation can be done within 24–72
                hours. Forensic reports take longer (1–4 weeks). Bank recalls
                and investigations timelines vary — banks usually respond within
                7–21 days to formal legal requests.
              </p>

              <h2>FAQs</h2>
              <div className="highlight-box">
                <h3>Will the police recover my money?</h3>
                <p>
                  Recovery is possible in many cases but not guaranteed; early
                  action improves chances, especially where funds remain in
                  regulated bank accounts.
                </p>
              </div>
              <div className="highlight-box">
                <h3>Can my social media account be restored?</h3>
                <p>
                  Yes — we coordinate with platforms using takedown and account
                  recovery processes, backed by police complaints where
                  required.
                </p>
              </div>

              <div style={{ textAlign: "center", marginTop: "18px" }}>
                <a
                  href="#cf-contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("cf-contact")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  className="btn-primary"
                  style={{ maxWidth: "300px", display: "inline-block" }}
                >
                  Report Cyber Fraud
                </a>
              </div>
            </article>

            <aside className="cf-sidebar">
              <div className="sidebar-card">
                <h3
                  style={{
                    margin: "0 0 10px 0",
                    color: "var(--primary-color)",
                  }}
                >
                  Report & Preserve Evidence
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    margin: "0 0 12px 0",
                  }}
                >
                  Provide incident details and our team will prepare a complaint
                  and preservation notices.
                </p>
                <form id="cf-contact" onSubmit={handleFormSubmit}>
                  <input
                    className="form-control"
                    name="name"
                    placeholder="Full name *"
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
                  <select className="form-control" name="incidentType">
                    <option value="">Select incident type</option>
                    <option value="upi">UPI / Banking fraud</option>
                    <option value="phishing">
                      Phishing / Account compromise
                    </option>
                    <option value="romance">Romance / Extortion</option>
                    <option value="business">Business email compromise</option>
                  </select>
                  <textarea
                    className="form-control"
                    name="details"
                    placeholder="Brief facts / transaction details"
                    rows="4"
                  ></textarea>
                  <button className="btn-primary" type="submit">
                    <i className="fas fa-paper-plane"></i> Submit
                  </button>
                </form>
              </div>

              <div className="sidebar-card">
                <h4
                  style={{ margin: "0 0 8px 0", color: "var(--primary-color)" }}
                >
                  Preservation Tips
                </h4>
                <p
                  style={{
                    margin: "0 0 8px 0",
                    color: "var(--text-secondary)",
                  }}
                >
                  Do not delete messages, export chats, note UTRs, take
                  screenshots and do not factory reset devices.
                </p>
              </div>

              <div className="sidebar-card">
                <div style={{ marginBottom: "12px" }}>
                  <lottie-player
                    src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
                    background="transparent"
                    speed="1"
                    style={{ width: "100%", height: "140px" }}
                    loop
                    autoplay
                  ></lottie-player>
                </div>
                <div style={{ fontWeight: 700, color: "var(--primary-color)" }}>
                  Fast, Practical Help
                </div>
                <div
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.95rem",
                    marginTop: "8px",
                  }}
                >
                  We liaise with banks, cyber cells and forensic teams to get
                  the best possible outcome.
                </div>
              </div>
            </aside>
          </div>
        </section>
      </CyberFraudContainer>
      <Footer />
    </>
  );
};

export default CyberFraud;
