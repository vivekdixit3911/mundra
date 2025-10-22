import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import { CriminalCasesContainer } from "./CriminalCases.styles.js";

const CriminalCases = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Thank you. Our on-call team will contact you immediately.");
    e.target.reset();
  };

  return (
    <>
      <Header />
      <ServiceHero
        title="Criminal Cases"
        subtitle="Expert legal defense for all types of criminal allegations and charges."
        breadcrumb="Criminal Cases"
      />
      <CriminalCasesContainer>
        <section className="cr-section" aria-labelledby="cr-heading">
          <div className="cr-container">
            <article className="cr-main">
              <h1 id="cr-heading">Criminal Cases: Defence & Representation</h1>
              <div className="byline">
                Immediate assistance with FIRs, bail, investigation,
                representation in courts and cross-over with matrimonial &
                arbitration matters.
              </div>

              <div className="section-lottie">
                <lottie-player
                  src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
                  background="transparent"
                  speed="0.9"
                  loop
                  autoplay
                ></lottie-player>
              </div>

              <p>
                We defend clients across a wide range of criminal matters — from
                bailable offences and FIR management to non-bailable serious
                charges, cybercrime, economic offences and white-collar
                litigation. Our team offers quick police liaison, drafting of
                legal responses, bail applications, anticipatory bail and trial
                representation.
              </p>

              <h2>Common Practice Areas</h2>
              <div className="feature-grid">
                <div className="feature-card small-animate">
                  <i
                    className="fas fa-gavel"
                    style={{ color: "var(--primary-gold)" }}
                  ></i>
                  <h4>FIR & Police Liaison</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Timely representation at police stations, legal notices and
                    FIR drafting or counter-complaint assistance.
                  </p>
                </div>
                <div className="feature-card small-animate">
                  <i
                    className="fas fa-handcuffs"
                    style={{ color: "var(--primary-gold)" }}
                  ></i>
                  <h4>Bail & Anticipatory Bail</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Immediate bail petitions, drafting surety documents and
                    urgent court appearances.
                  </p>
                </div>
                <div className="feature-card small-animate">
                  <i
                    className="fas fa-network-wired"
                    style={{ color: "var(--primary-gold)" }}
                  ></i>
                  <h4>Cybercrime & Digital Evidence</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Handling cyber FIRs, digital forensics coordination and data
                    preservation orders.
                  </p>
                </div>
                <div className="feature-card small-animate">
                  <i
                    className="fas fa-user-secret"
                    style={{ color: "var(--primary-gold)" }}
                  ></i>
                  <h4>White-collar & Economic Offences</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Representation in fraud, corporate non-compliance and
                    regulatory offences.
                  </p>
                </div>
              </div>

              <h2>Immediate Steps When an FIR is Filed</h2>
              <ol>
                <li>Obtain a copy of the FIR and note the sections invoked.</li>
                <li>
                  Engage counsel to approach police station and preserve
                  evidence.
                </li>
                <li>
                  Apply for bail or seek anticipatory bail depending on arrest
                  risk.
                </li>
                <li>
                  Prepare a defence strategy: witness statements, documents and
                  alibis.
                </li>
              </ol>

              <div style={{ textAlign: "center", margin: "22px 0" }}>
                <svg
                  width="100%"
                  height="36"
                  viewBox="0 0 1200 36"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="g-cr" x1="0" x2="1">
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
                  <rect width="1200" height="36" fill="url(#g-cr)" rx="6" />
                </svg>
              </div>

              <h2>Serious & Non-bailable Offences</h2>
              <p>
                For offences like grievous hurt, sexual offences,
                terrorism-related acts, or gang offences, immediate legal
                strategy is critical. We coordinate with senior counsel,
                forensic experts and ensure compliance with trial procedure and
                victim/witness protections when representing complainants.
              </p>

              <h2>Penalties & Timelines (Illustrative)</h2>
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Offence Type</th>
                    <th>Illustrative Penalty / Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Theft (IPC 378–379)</td>
                    <td>Imprisonment up to 3 years / fine</td>
                  </tr>
                  <tr>
                    <td>Criminal breach of trust (IPC 405)</td>
                    <td>Up to 3 years / fine; aggravated forms more severe</td>
                  </tr>
                  <tr>
                    <td>Forgery (IPC 465–471)</td>
                    <td>Imprisonment up to 7 years depending on gravity</td>
                  </tr>
                  <tr>
                    <td>Cyber fraud & hacking (IT Act / IPC)</td>
                    <td>
                      Penalties vary widely; data preservation and interim
                      injunctions often sought
                    </td>
                  </tr>
                </tbody>
              </table>

              <h2>Matrimonial & Arbitration Overlaps</h2>
              <p>
                Matrimonial disputes sometimes have criminal overlaps — for
                example, dowry-related offences, domestic violence, or
                accusations during separation. We coordinate family-law counsel
                for integrated strategy and pursue arbitration clauses where
                contractual arrangements allow alternative dispute resolution.
              </p>

              <h2>Digital Evidence & Forensics</h2>
              <p>
                Preservation of digital evidence is time-sensitive. We work with
                certified forensic labs to secure metadata, call logs, chat
                exports and server-side backups. Chain-of-custody and
                admissibility are handled carefully to withstand evidentiary
                scrutiny.
              </p>

              <h2>How We Represent You</h2>
              <ol>
                <li>Rapid assessment and police-station representation.</li>
                <li>Drafting bail/anticipatory bail and follow-up hearings.</li>
                <li>
                  Preparing trial bundle, witness briefs, cross-examination and
                  submissions.
                </li>
                <li>
                  Negotiation and plea discussions where appropriate; appeals
                  and higher court representation when required.
                </li>
              </ol>

              <h2>Client Protections & Confidentiality</h2>
              <p>
                We prioritise client confidentiality, protective orders, and
                where needed coordinate security measures and relocation advice
                for high-risk matters.
              </p>

              <h2>FAQs</h2>
              <div className="highlight-box">
                <h3>What is anticipatory bail?</h3>
                <p>
                  Anticipatory bail is relief sought before arrest to prevent
                  custodial detention; we file petitions and argue for liberty
                  preservation.
                </p>
              </div>
              <div className="highlight-box">
                <h3>How fast should I contact counsel after an FIR?</h3>
                <p>
                  Immediately — ideally within hours. Early representation
                  preserves evidence and improves chances for favourable
                  outcomes.
                </p>
              </div>

              <div style={{ textAlign: "center", marginTop: "18px" }}>
                <a
                  href="#cr-contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("cr-contact")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  className="btn-primary"
                  style={{ maxWidth: "300px", display: "inline-block" }}
                >
                  Get Immediate Legal Help
                </a>
              </div>
            </article>

            <aside className="cr-sidebar">
              <div className="sidebar-card">
                <h3
                  style={{
                    margin: "0 0 10px 0",
                    color: "var(--primary-color)",
                  }}
                >
                  Immediate Assistance
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    margin: "0 0 12px 0",
                  }}
                >
                  Provide your details and we will arrange urgent representation
                  and police-liaison.
                </p>
                <form id="cr-contact" onSubmit={handleFormSubmit}>
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
                  <select className="form-control" name="matterType">
                    <option value="">Select matter</option>
                    <option value="bail">Bail / Anticipatory Bail</option>
                    <option value="fir">FIR / Police Liaison</option>
                    <option value="cyber">Cybercrime</option>
                    <option value="whitecollar">White-collar / Economic</option>
                  </select>
                  <textarea
                    className="form-control"
                    name="details"
                    placeholder="Brief facts / urgent needs"
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
                  Quick Checklist
                </h4>
                <p
                  style={{
                    margin: "0 0 8px 0",
                    color: "var(--text-secondary)",
                  }}
                >
                  FIR copy, ID proof, contact details of witnesses, timeline of
                  events and any messages/screenshots preserved.
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
                  Urgent Response
                </div>
                <div
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.95rem",
                    marginTop: "8px",
                  }}
                >
                  We arrange rapid representation and liaison with local police
                  stations.
                </div>
              </div>
            </aside>
          </div>
        </section>
      </CriminalCasesContainer>
      <Footer />
    </>
  );
};

export default CriminalCases;
