import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import { CourtMarriageContainer } from "./CourtMarriage.styles.js";

const CourtMarriage = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Thank you. Our team will contact you with next steps.");
    e.target.reset();
  };

  return (
    <>
      <Header />
      <ServiceHero
        title="Court Marriage"
        subtitle="Complete guidance and support for court marriage registration and legal formalities."
        breadcrumb="Court Marriage"
      />
      <CourtMarriageContainer>
        <section className="cm-section" aria-labelledby="cm-heading">
          <div className="cm-container">
            <article className="cm-main">
              <div
                style={{
                  display: "flex",
                  gap: "14px",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <h1 id="cm-heading">Court Marriage & Registration</h1>
                <div className="cm-byline">
                  Complete guidance on court marriage procedures, documentation,
                  notices, and matrimonial formalities
                </div>
              </div>

              <div className="section-lottie">
                <lottie-player
                  src="https://assets8.lottiefiles.com/packages/lf20_0yfsb3a1.json"
                  background="transparent"
                  speed="0.9"
                  loop
                  autoplay
                ></lottie-player>
              </div>

              <p>
                Court marriage is the formal registration of a marriage before
                the marriage registrar under the Special Marriage Act or
                according to personal law procedures. We assist couples with
                documentation, filing notices, publication, hearings, and final
                registration.
              </p>

              <h2>Eligibility & Types</h2>
              <div className="feature-grid">
                <div className="feature-card small-animate">
                  <i
                    className="fas fa-user-check"
                    style={{ color: "var(--primary-gold)" }}
                  ></i>
                  <h4>Special Marriage Act</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Inter-faith or inter-state marriages with notice and 30-day
                    waiting period.
                  </p>
                </div>
                <div className="feature-card small-animate">
                  <i
                    className="fas fa-ring"
                    style={{ color: "var(--primary-gold)" }}
                  ></i>
                  <h4>Personal Law Ceremonies</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Hindu, Muslim or Christian marriages where registration can
                    be done as per local law.
                  </p>
                </div>
                <div className="feature-card small-animate">
                  <i
                    className="fas fa-id-card"
                    style={{ color: "var(--primary-gold)" }}
                  ></i>
                  <h4>Documentation Required</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Age proof, identity proof, address proof, photographs,
                    affidavits and NOCs where necessary.
                  </p>
                </div>
                <div className="feature-card small-animate">
                  <i
                    className="fas fa-globe"
                    style={{ color: "var(--primary-gold)" }}
                  ></i>
                  <h4>Foreign Nationals</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Visa, marital status certificates and embassy attestations
                    for foreign parties.
                  </p>
                </div>
              </div>

              <h2>Step-by-step Procedure</h2>
              <ol>
                <li>
                  Prepare documents & affidavits; verify eligibility and notice
                  requirements.
                </li>
                <li>
                  File notice of intended marriage (Special Marriage Act) at the
                  marriage registrar.
                </li>
                <li>
                  Advertise or display notice as required and allow 30-day
                  notice period for objections.
                </li>
                <li>
                  Respond to objections if any (legal representation for
                  hearings).
                </li>
                <li>
                  Attend registration hearing and receive marriage certificate
                  upon completion.
                </li>
              </ol>

              <h2>Dealing with Objections & Matrimonial Issues</h2>
              <p>
                If an objection is filed during the notice period, we represent
                parties before the registrar and the civil courts where
                necessary to resolve disputes. Matrimonial disputes may require
                concurrent family law support if issues like forced marriage or
                coercion are alleged.
              </p>

              <div className="highlight-box">
                <h3>
                  <i className="fas fa-balance-scale"></i>Handling Objections
                </h3>
                <p>
                  We assist in preparing legal responses, affidavits, and
                  evidence to address objections; where necessary, we seek
                  relief from civil courts and coordinate with family law
                  counsel.
                </p>
              </div>

              <div className="highlight-box">
                <h3>
                  <i className="fas fa-user-shield"></i>Protection & Safety
                  Measures
                </h3>
                <p>
                  For parties facing threats or harassment, we can arrange
                  protective steps, police liaison, and confidential filing
                  options.
                </p>
              </div>

              <h2>Fees, Timeline & Sample Documents</h2>
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Document preparation & notice filing</td>
                    <td>2-5 business days</td>
                  </tr>
                  <tr>
                    <td>30-day notice window (Special Marriage Act)</td>
                    <td>30 days (objection period)</td>
                  </tr>
                  <tr>
                    <td>Court hearing & registration</td>
                    <td>After notice period or hearing date</td>
                  </tr>
                  <tr>
                    <td>Urgent filings (where permitted)</td>
                    <td>Expedited on case basis</td>
                  </tr>
                </tbody>
              </table>

              <h2>Why Mundra Legal?</h2>
              <div className="feature-grid">
                <div className="feature-card">
                  <i
                    className="fas fa-user-tie"
                    style={{ color: "var(--primary-color)" }}
                  ></i>
                  <h4>Discreet Handling</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Confidential processing for sensitive cases.
                  </p>
                </div>
                <div className="feature-card">
                  <i
                    className="fas fa-gavel"
                    style={{ color: "var(--primary-color)" }}
                  ></i>
                  <h4>Legal Representation</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Representation in registrar hearings and civil courts.
                  </p>
                </div>
                <div className="feature-card">
                  <i
                    className="fas fa-shield-alt"
                    style={{ color: "var(--primary-color)" }}
                  ></i>
                  <h4>Safety & Liaison</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Police liaison and protective measures when needed.
                  </p>
                </div>
                <div className="feature-card">
                  <i
                    className="fas fa-clipboard-check"
                    style={{ color: "var(--primary-color)" }}
                  ></i>
                  <h4>Full Documentation</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    We prepare affidavits, witnesses statements and registration
                    forms.
                  </p>
                </div>
              </div>

              <h2>FAQs</h2>
              <div className="highlight-box">
                <h3>
                  <i className="fas fa-question-circle"></i>Can a marriage be
                  registered without notice?
                </h3>
                <p>
                  Under the Special Marriage Act, the notice and 30-day window
                  is mandatory; however, in exceptional circumstances court
                  orders may permit earlier registration. We can advise and
                  pursue urgent relief where justified.
                </p>
              </div>

              <div className="highlight-box">
                <h3>
                  <i className="fas fa-question-circle"></i>What if someone
                  opposes the marriage?
                </h3>
                <p>
                  Oppositions are considered during the notice period; we
                  prepare responses and represent clients at hearings to rebut
                  false allegations and seek registration.
                </p>
              </div>

              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <a
                  href="#cm-contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("cm-contact")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  className="btn-primary"
                  style={{ maxWidth: "320px", display: "inline-block" }}
                >
                  Request Court Marriage Assistance
                </a>
              </div>
            </article>

            <aside className="cm-sidebar">
              <div className="sidebar-card">
                <h3
                  style={{
                    margin: "0 0 12px 0",
                    color: "var(--primary-color)",
                  }}
                >
                  Start Your Court Marriage
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    margin: "0 0 12px 0",
                  }}
                >
                  Tell us your details and we will guide you through notice,
                  documentation and registration.
                </p>
                <form id="cm-contact" onSubmit={handleFormSubmit}>
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
                  <select className="form-control" name="actType">
                    <option value="">
                      Select: Special Marriage / Personal Law
                    </option>
                    <option value="special">Special Marriage Act</option>
                    <option value="personal">Personal Law Registration</option>
                  </select>
                  <textarea
                    className="form-control"
                    name="details"
                    placeholder="Any urgent concerns (objections, safety)"
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
                  Helpful Links
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
                    Special Marriage Act — Overview
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
                    Sample Affidavit Template
                  </a>
                </p>
              </div>

              <div className="sidebar-card">
                <div style={{ marginBottom: "12px" }}>
                  <lottie-player
                    src="https://assets2.lottiefiles.com/packages/lf20_1a8dx7zj.json"
                    background="transparent"
                    speed="1"
                    style={{ width: "100%", height: "160px" }}
                    loop
                    autoplay
                  ></lottie-player>
                </div>
                <div style={{ fontWeight: 700, color: "var(--primary-color)" }}>
                  Discreet & Fast
                </div>
                <div
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.95rem",
                    marginTop: "8px",
                  }}
                >
                  We prioritise privacy and quick resolution for court marriage
                  registrations.
                </div>
              </div>
            </aside>
          </div>
        </section>
      </CourtMarriageContainer>
      <Footer />
    </>
  );
};

export default CourtMarriage;
