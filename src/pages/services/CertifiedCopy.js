import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import { CertifiedCopyContainer } from "./CertifiedCopy.styles.js";

const CertifiedCopy = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you — we received your request. Our team will contact you shortly.",
    );
    e.target.reset();
  };

  return (
    <>
      <Header />
      <ServiceHero
        title="Certified Copies & Attestation"
        subtitle="Notarisation, Court-certified copies, Apostille and Embassy attestation services."
        breadcrumb="Certified Copies"
      />
      <CertifiedCopyContainer>
        <section className="ccpy-section" aria-labelledby="ccpy-heading">
          <div className="ccpy-container">
            <article className="ccpy-main">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  flexWrap: "wrap",
                }}
              >
                <h1 id="ccpy-heading">
                  Certified Copies, Attestation & Apostille
                </h1>
                <div className="ccpy-byline">
                  Certified copies, attestation, notarisation and apostille for
                  legal, matrimonial and arbitration uses
                </div>
              </div>

              <div className="section-lottie">
                <lottie-player
                  src="https://assets4.lottiefiles.com/packages/lf20_0yfsb3a1.json"
                  background="transparent"
                  speed="0.9"
                  loop
                  autoplay
                ></lottie-player>
              </div>

              <p>
                A <strong>certified copy</strong> is an authenticated
                reproduction of an original document, verified by a competent
                authority (notary, court, registry) to be a true copy. These are
                often required for legal proceedings, property transactions,
                company filings, education verification, and family law matters
                including matrimonial disputes and settlements. If documents are
                to be used abroad, attestation and apostille may be required.
              </p>

              <h2>When is a Certified Copy Required?</h2>
              <ul>
                <li>
                  Filing court cases or responding to notices where original
                  documents cannot be produced.
                </li>
                <li>
                  Company & corporate compliance filings (ROC, MCA) where
                  certified documents may be needed.
                </li>
                <li>
                  Matrimonial proceedings: marriage certificates, passports,
                  affidavits, or evidence copies.
                </li>
                <li>
                  Arbitration: submitting evidence bundles and certified records
                  to arbitral tribunals.
                </li>
                <li>
                  International use: attestation/apostille for use in foreign
                  jurisdictions.
                </li>
              </ul>

              <h2>Types of Certification & Attestation</h2>
              <div className="feature-grid">
                <div className="feature-card">
                  <i
                    className="fas fa-file-signature"
                    style={{ color: "var(--primary-gold)" }}
                  ></i>
                  <h4>Notary Certification</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Verification and stamping by a Notary Public confirming the
                    signature and copy authenticity.
                  </p>
                </div>
                <div className="feature-card">
                  <i
                    className="fas fa-landmark"
                    style={{ color: "var(--primary-gold)" }}
                  ></i>
                  <h4>Court Certified Copies</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Obtained from court records or registry for pleadings,
                    orders, judgments and case files.
                  </p>
                </div>
                <div className="feature-card">
                  <i
                    className="fas fa-globe"
                    style={{ color: "var(--primary-gold)" }}
                  ></i>
                  <h4>Apostille & Embassy Attestation</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    For documents being used overseas, apostille (Hague) or
                    embassy attestation is arranged as per country.
                  </p>
                </div>
                <div className="feature-card">
                  <i
                    className="fas fa-language"
                    style={{ color: "var(--primary-gold)" }}
                  ></i>
                  <h4>Certified Translations</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Official translations with certification, often required
                    alongside attested documents.
                  </p>
                </div>
              </div>

              <div className="highlight-box">
                <h3>
                  <i className="fas fa-clipboard-check"></i> Process Overview
                </h3>
                <ol
                  style={{
                    margin: "8px 0 0 18px",
                    paddingLeft: 0,
                    color: "var(--text-secondary)",
                  }}
                >
                  <li>
                    Identify the type of certification/attestation required
                    based on jurisdiction and purpose.
                  </li>
                  <li>
                    Obtain authenticated copies from issuing authority (court,
                    university, registry) or prepare notarised copy.
                  </li>
                  <li>
                    For international use, route through state home department
                    for apostille and then embassy if needed.
                  </li>
                  <li>
                    Where necessary, obtain certified translations and notarise
                    translated documents.
                  </li>
                  <li>
                    Deliver certified bundle for filing with courts, tribunals,
                    or foreign authorities.
                  </li>
                </ol>
              </div>

              <h2>Document Examples & Typical Times</h2>
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Document</th>
                    <th>Typical turnaround</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Marriage Certificate (certified copy)</td>
                    <td>2-5 business days</td>
                  </tr>
                  <tr>
                    <td>Court Pleadings / Judgment (court certified)</td>
                    <td>3-10 business days</td>
                  </tr>
                  <tr>
                    <td>Educational Certificates (attested/apostilled)</td>
                    <td>5-15 business days (country dependent)</td>
                  </tr>
                  <tr>
                    <td>Affidavits / Notarised statements</td>
                    <td>1-3 business days</td>
                  </tr>
                  <tr>
                    <td>
                      Commercial Documents for visa/work (apostille + embassy)
                    </td>
                    <td>7-21 business days</td>
                  </tr>
                </tbody>
              </table>

              <h2>Arbitration & Matrimonial Use Cases</h2>
              <p>
                Certified copies and attestations play a crucial role in dispute
                resolution. In arbitration, certified evidence bundles avoid
                disputes about authenticity; in matrimonial matters, certified
                documents (marriage certificates, bank statements, property
                documents, communications) are often primary exhibits.
              </p>

              <div className="highlight-box">
                <h3>
                  <i className="fas fa-balance-scale"></i> Arbitration: Document
                  Handling
                </h3>
                <p>
                  We prepare authenticated evidence bundles for arbitral
                  tribunals: certified copies, notarised witness statements, and
                  affidavits. Our team also assists in chain-of-custody
                  protocols to maintain evidentiary integrity.
                </p>
              </div>

              <div className="highlight-box">
                <h3>
                  <i className="fas fa-ring"></i> Matrimonial: Privacy &
                  Authentication
                </h3>
                <p>
                  In family law, certified copies of marriage certificates,
                  joint account statements, and other documents are essential.
                  We handle discreet document procurement, notarisation, and
                  representation when these documents are used in mediation,
                  counseling, or court proceedings.
                </p>
              </div>

              <h2>Fees & Pricing (Indicative)</h2>
              <p>
                Fees vary by document type, jurisdiction and urgency. Below is
                an indicative table:
              </p>
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Indicative Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Notarisation / Certified copy (local)</td>
                    <td>INR 300 - 900</td>
                  </tr>
                  <tr>
                    <td>Court-certified copy (per page)</td>
                    <td>INR 50 - 250</td>
                  </tr>
                  <tr>
                    <td>Apostille (state + central processing)</td>
                    <td>INR 1,000 - 5,000</td>
                  </tr>
                  <tr>
                    <td>Embassy attestation (country dependent)</td>
                    <td>INR 2,000 - 10,000+</td>
                  </tr>
                  <tr>
                    <td>Certified Translation (per page)</td>
                    <td>INR 500 - 2,500</td>
                  </tr>
                  <tr>
                    <td>Rush / Same-day services</td>
                    <td>Additional 25% - 100% depending on urgency</td>
                  </tr>
                </tbody>
              </table>

              <h2>How Mundra Legal Helps</h2>
              <div className="feature-grid">
                <div className="feature-card">
                  <i
                    className="fas fa-user-shield"
                    style={{ color: "var(--primary-color)" }}
                  ></i>
                  <h4>Certified Copy Procurement</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    We liaise with courts, municipal bodies, universities and
                    registries to obtain certified records.
                  </p>
                </div>
                <div className="feature-card">
                  <i
                    className="fas fa-globe"
                    style={{ color: "var(--primary-color)" }}
                  ></i>
                  <h4>Apostille & Embassy Liaison</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Full services for foreign use including embassy-specific
                    requirements and document legalization.
                  </p>
                </div>
                <div className="feature-card">
                  <i
                    className="fas fa-file-contract"
                    style={{ color: "var(--primary-color)" }}
                  ></i>
                  <h4>Evidence Bundles for Arbitration</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Prepare verified bundles, indexing and affidavits for
                    arbitrations and tribunals.
                  </p>
                </div>
                <div className="feature-card">
                  <i
                    className="fas fa-user-friends"
                    style={{ color: "var(--primary-color)" }}
                  ></i>
                  <h4>Matrimonial & Family Support</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Discreet handling of family law documents with sensitivity
                    and privacy safeguards.
                  </p>
                </div>
              </div>

              <h2>Checklist: Documents to Provide</h2>
              <ul>
                <li>
                  Original document (or certified copy ID) where available
                </li>
                <li>Photo ID proof of requester (PAN/Aadhaar/Passport)</li>
                <li>
                  Signed authorization if requesting on behalf of someone else
                </li>
                <li>
                  Details of receiving country (for apostille/embassy) and
                  intended use
                </li>
                <li>Any supporting affidavits or translations required</li>
              </ul>

              <div className="highlight-box" style={{ textAlign: "center" }}>
                <h3>Ready to proceed?</h3>
                <p
                  style={{
                    margin: "6px 0 12px",
                    color: "var(--text-secondary)",
                  }}
                >
                  Contact us with the documents and purpose — we'll advise the
                  exact certification route and timeline.
                </p>
                <a
                  href="#ccpy-contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("ccpy-contact")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  className="btn-primary"
                  style={{ maxWidth: "300px", display: "inline-block" }}
                >
                  Request Certified Copy
                </a>
              </div>
            </article>

            <aside className="ccpy-sidebar">
              <div className="sidebar-card">
                <h3
                  style={{
                    margin: "0 0 10px 0",
                    color: "var(--primary-color)",
                  }}
                >
                  Request a Certified Copy
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    margin: "0 0 12px 0",
                  }}
                >
                  Fill quick form and attach details; we will guide the required
                  route (notary/court/apostille).
                </p>
                <form id="ccpy-contact" onSubmit={handleFormSubmit}>
                  <input
                    className="form-control"
                    name="name"
                    placeholder="Your name *"
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
                  <select className="form-control" name="docType">
                    <option value="">Select document type</option>
                    <option value="marriage">Marriage certificate</option>
                    <option value="judgement">Court judgment</option>
                    <option value="education">Education certificate</option>
                    <option value="affidavit">Affidavit / Statement</option>
                    <option value="other">Other</option>
                  </select>
                  <textarea
                    className="form-control"
                    name="details"
                    placeholder="Any additional details / country for apostille (optional)"
                  ></textarea>
                  <button className="btn-primary" type="submit">
                    <i className="fas fa-paper-plane"></i> Send Request
                  </button>
                </form>
              </div>

              <div className="sidebar-card">
                <h4
                  style={{ margin: "0 0 8px 0", color: "var(--primary-color)" }}
                >
                  Need Urgent Attestation?
                </h4>
                <p
                  style={{
                    margin: "0 0 8px 0",
                    color: "var(--text-secondary)",
                  }}
                >
                  We offer expedited processing and courier to embassies /
                  foreign authorities. Contact our helpline for same-day
                  options.
                </p>
                <a
                  href="tel:+919876543210"
                  style={{
                    display: "inline-block",
                    marginTop: "8px",
                    background: "var(--primary-gold)",
                    color: "var(--primary-color)",
                    padding: "10px 16px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: 700,
                  }}
                >
                  Call +91 98765 43210
                </a>
              </div>

              <div className="sidebar-card">
                <div style={{ marginBottom: "12px" }}>
                  <lottie-player
                    src="https://assets6.lottiefiles.com/packages/lf20_u4yrau.json"
                    background="transparent"
                    speed="1"
                    style={{ width: "100%", height: "160px" }}
                    loop
                    autoplay
                  ></lottie-player>
                </div>
                <div style={{ fontWeight: 700, color: "var(--primary-color)" }}>
                  Secure & Confidential
                </div>
                <div
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.95rem",
                    marginTop: "8px",
                  }}
                >
                  We handle sensitive documents with strict confidentiality and
                  secure courier services.
                </div>
              </div>
            </aside>
          </div>
        </section>
      </CertifiedCopyContainer>
      <Footer />
    </>
  );
};

export default CertifiedCopy;
