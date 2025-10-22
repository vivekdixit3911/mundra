import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import { CopyrightRegistrationContainer } from "./CopyrightRegistration.styles.js";

const CopyrightRegistration = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Thank you. Our IP team will contact you with next steps.");
    e.target.reset();
  };

  return (
    <>
      <Header />
      <ServiceHero
        title="Copyright Registration"
        subtitle="Secure legal ownership of your creative works with copyright registration."
        breadcrumb="Copyright Registration"
      />
      <CopyrightRegistrationContainer>
        <section className="cp-section" aria-labelledby="cp-heading">
          <div className="cp-container">
            <article className="cp-main">
              <h1 id="cp-heading">
                Copyright Registration, Enforcement & Licensing
              </h1>
              <div className="byline">
                Comprehensive copyright services for creators, publishers,
                platforms and businesses — registration, takedown, licensing,
                assignment and remedies.
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
                Copyright protects original literary, dramatic, musical,
                artistic works and cinematograph films, sound recordings, and
                software. Registering a copyright strengthens your legal
                position for enforcement, licensing and commercialisation.
              </p>

              <h2>What Can Be Registered?</h2>
              <div className="feature-grid">
                <div className="feature-card small-animate">
                  <i
                    className="fas fa-pen-nib"
                    style={{ color: "var(--primary-gold)" }}
                  ></i>
                  <h4>Literary Works</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Books, articles, blogs, scripts, software source code and
                    documentation.
                  </p>
                </div>
                <div className="feature-card small-animate">
                  <i
                    className="fas fa-music"
                    style={{ color: "var(--primary-gold)" }}
                  ></i>
                  <h4>Music & Sound Recordings</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Compositions, recordings and related rights.
                  </p>
                </div>
                <div className="feature-card small-animate">
                  <i
                    className="fas fa-image"
                    style={{ color: "var(--primary-gold)" }}
                  ></i>
                  <h4>Art & Visual Works</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Paintings, photographs, designs and graphics.
                  </p>
                </div>
                <div className="feature-card small-animate">
                  <i
                    className="fas fa-film"
                    style={{ color: "var(--primary-gold)" }}
                  ></i>
                  <h4>Cinematograph & Broadcasts</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Films, broadcasts and audiovisual works.
                  </p>
                </div>
              </div>

              <h2>Registration Process & Timeline</h2>
              <ol>
                <li>
                  Determine authorship and ownership (employee works,
                  commissioned works, transfers).
                </li>
                <li>
                  Prepare application with copies of the work and statement of
                  particulars.
                </li>
                <li>
                  File application at the Copyright Office; obtain diary number
                  and proceed through objections if any.
                </li>
                <li>
                  Registration certificate issued after formalities; typical
                  timeline ranges from 2–6 months depending on objections and
                  workload.
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
                    <linearGradient id="g-cp" x1="0" x2="1">
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
                  <rect width="1200" height="36" fill="url(#g-cp)" rx="6" />
                </svg>
              </div>

              <h2>Infringement & Enforcement</h2>
              <p>
                Infringement occurs when a third party uses a protected work
                without authorization. Remedies include injunctions, damages,
                accounts of profits and criminal action in certain cases (e.g.,
                intentional piracy).
              </p>

              <h2>Intermediary Liability & Takedown</h2>
              <p>
                For online infringements, notice-and-takedown procedures under
                intermediary liability provisions are key. We draft DMCA-style
                takedown notices, coordinate with platforms, and prepare
                counter-notices when appropriate.
              </p>

              <h2>Licensing, Assignment & Royalties</h2>
              <p>
                We draft licensing agreements, assignment deeds and royalty
                frameworks. Common clauses include territorial scope,
                exclusivity, sublicensing, audit rights and termination
                triggers.
              </p>

              <h2>Practical Tips to Protect Your Work</h2>
              <ul>
                <li>
                  Document creation process and maintain drafts with timestamps.
                </li>
                <li>Use watermarking and metadata for digital files.</li>
                <li>
                  Register early where commercialisation or enforcement is
                  likely.
                </li>
              </ul>

              <h2>Fees & Service Packages</h2>
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Indicative Fee (INR)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Copyright registration (simple work)</td>
                    <td>₹2,499 — ₹7,499</td>
                  </tr>
                  <tr>
                    <td>Registration (complex / software / cinematograph)</td>
                    <td>₹7,499 — ₹24,999</td>
                  </tr>
                  <tr>
                    <td>Takedown notice & platform liaison</td>
                    <td>₹3,999 — ₹12,999</td>
                  </tr>
                  <tr>
                    <td>Licensing agreement drafting</td>
                    <td>₹5,999 — ₹24,999</td>
                  </tr>
                </tbody>
              </table>

              <h2>Arbitration & Matrimonial Intersections</h2>
              <p>
                Copyright disputes may be subject to contractual arbitration
                clauses (e.g., publishing agreements). Matrimonial disputes can
                also have copyright angles (ownership of creative works) — we
                coordinate strategy across family law and IP where necessary.
              </p>

              <h2>Sample Cease & Desist / Takedown Workflow</h2>
              <ol>
                <li>
                  Identify infringing URL/platform and gather screenshot
                  evidence.
                </li>
                <li>
                  Send formal cease & desist / takedown notice with proof of
                  ownership.
                </li>
                <li>
                  Request platform to remove or disable access; follow with
                  legal proceedings if not complied with.
                </li>
              </ol>

              <h2>Case Studies</h2>
              <p>
                <strong>Author vs Publisher:</strong> Resolved a dispute over
                ebook royalties and ensured proper accounting plus a revised
                licensing schedule. <strong>Digital Artist:</strong> Achieved
                takedown of pirated images across marketplaces and secured
                damages via settlement.
              </p>

              <h2>FAQs</h2>
              <div className="highlight-box">
                <h3>Does copyright protect ideas?</h3>
                <p>
                  No — copyright protects expression of ideas, not ideas
                  themselves. Protect ideas via contracts and confidentiality
                  agreements.
                </p>
              </div>
              <div className="highlight-box">
                <h3>How long does copyright last?</h3>
                <p>
                  Author's lifetime + 60 years for most works; cinematograph
                  films and sound recordings may have different terms.
                </p>
              </div>

              <div style={{ textAlign: "center", marginTop: "18px" }}>
                <a
                  href="#cp-contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("cp-contact")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  className="btn-primary"
                  style={{ maxWidth: "300px", display: "inline-block" }}
                >
                  Get Copyright Help
                </a>
              </div>
            </article>

            <aside className="cp-sidebar">
              <div className="sidebar-card">
                <h3
                  style={{
                    margin: "0 0 10px 0",
                    color: "var(--primary-color)",
                  }}
                >
                  Register or Enforce
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    margin: "0 0 12px 0",
                  }}
                >
                  Tell us about your work and we will advise registration,
                  licensing or enforcement options.
                </p>
                <form id="cp-contact" onSubmit={handleFormSubmit}>
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
                  <select className="form-control" name="workType">
                    <option value="">Select work type</option>
                    <option value="literary">Literary / Software</option>
                    <option value="music">Music / Sound</option>
                    <option value="art">Art / Photography</option>
                    <option value="film">Film / Audiovisual</option>
                  </select>
                  <textarea
                    className="form-control"
                    name="details"
                    placeholder="Brief description of the work"
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
                  Source drafts, dates of creation, publication copies, and any
                  prior registrations or licenses.
                </p>
              </div>

              <div className="sidebar-card">
                <div style={{ marginBottom: "12px" }}>
                  <lottie-player
                    src="https://assets3.lottiefiles.com/packages/lf20_u4yrau.json"
                    background="transparent"
                    speed="1"
                    style={{ width: "100%", height: "140px" }}
                    loop
                    autoplay
                  ></lottie-player>
                </div>
                <div style={{ fontWeight: 700, color: "var(--primary-color)" }}>
                  Protect Your Rights
                </div>
                <div
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.95rem",
                    marginTop: "8px",
                  }}
                >
                  We manage registration, licensing and enforcement so you can
                  monetise your work with confidence.
                </div>
              </div>
            </aside>
          </div>
        </section>
      </CopyrightRegistrationContainer>
      <Footer />
    </>
  );
};

export default CopyrightRegistration;
