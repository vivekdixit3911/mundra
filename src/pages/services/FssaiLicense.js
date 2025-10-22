import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import LottieAnimation from "../../components/LottieAnimation";
import { FssaiLicenseContainer } from "./FssaiLicense.styles.js";

const FssaiLicense = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Thank you. Our compliance team will contact you with next steps.");
    e.target.reset();
  };

  return (
    <>
      <Header />
      <ServiceHero
        title="FSSAI License"
        subtitle="FSSAI registration, license advisory, labeling compliance, and food safety audits."
        breadcrumb="FSSAI License"
      />
      <FssaiLicenseContainer>
        <section className="fssai-section" aria-labelledby="fssai-heading">
          <div className="fssai-container">
            <article className="fssai-main">
              <h1 id="fssai-heading">
                FSSAI Registration, Licensing & Food Safety
              </h1>
              <div className="byline">
                End-to-end FSSAI advisory, license filing, labeling compliance,
                lab testing and recall management for food businesses in India.
              </div>

              <div className="section-lottie">
                <LottieAnimation
                  src="/assets/Drafts/Business.json"
                  width="300px"
                  height="300px"
                />
              </div>

              <p>
                FSSAI (Food Safety and Standards Authority of India)
                registration and licensing is mandatory for any food business
                operator (FBO) operating in India. We help startups,
                restaurants, manufacturers, caterers, food aggregators and
                e-commerce platforms with registration, licensing, compliance,
                labeling and audits.
              </p>

              <h2>Who Needs Registration / License?</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                <div style={{ flex: 1 }}>
                  <p>
                    Depending on turnover, scale and activity, food businesses must
                    either register or obtain a license:
                  </p>
                </div>
                <div style={{ flex: '0 0 150px' }}>
                  <LottieAnimation
                    src="/assets/Drafts/FAQ%20web%20page.json"
                    width="150px"
                    height="150px"
                  />
                </div>
              </div>
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Who</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Basic Registration</td>
                    <td>
                      Small businesses, petty food vendors, cottage industries
                      (turnover &lt; ₹12 lakh)
                    </td>
                  </tr>
                  <tr>
                    <td>State License</td>
                    <td>
                      Medium businesses, manufacturers, hotels, restaurants
                      (turnover between ₹12 lakh and ₹20 crore)
                    </td>
                  </tr>
                  <tr>
                    <td>Central License</td>
                    <td>
                      Large manufacturers, importers, export-oriented units,
                      large e-commerce aggregators (turnover &gt; ₹20 crore or
                      operations in multiple states)
                    </td>
                  </tr>
                </tbody>
              </table>

              <h2>FSSAI Application Process</h2>
              <div style={{ display: 'flex', justifyContent: 'center', margin: '30px 0' }}>
                <LottieAnimation
                  src="/assets/Drafts/registration.json"
                  width="250px"
                  height="200px"
                />
              </div>
              <ol>
                <li>
                  Determine registration vs license and jurisdiction (State or
                  Central).
                </li>
                <li>
                  Prepare documents (identity, address proof, food safety
                  management plan, layout, list of food categories).
                </li>
                <li>
                  Submit application on Food Licensing and Registration System
                  (FLRS) with required fees.
                </li>
                <li>
                  Inspection (for licensed units) and approval by designated
                  officer.
                </li>
                <li>
                  Receive registration number or license certificate — maintain
                  records and renew on time.
                </li>
              </ol>

              <h2>Documents Checklist</h2>
              <ul>
                <li>PAN & Aadhaar of proprietor / directors</li>
                <li>Identity & address proof of premises</li>
                <li>List of food categories and volumes</li>
                <li>Layout plan & water testing reports (if applicable)</li>
                <li>
                  Food safety management plan (HACCP or general hygiene
                  practices)
                </li>
                <li>
                  Bank account details and GST registration (if applicable)
                </li>
              </ul>

              <h2>Labeling & Packaging Compliance</h2>
              <p>
                FSSAI mandates specific labeling information including name of
                food, ingredients, net quantity, manufacturer details, FSSAI
                license number, nutritional information (where applicable),
                vegetarian / non-vegetarian logo and best-before/use-by dates.
                We review labels to ensure compliance and reduce rejection from
                market surveillance.
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
                    <linearGradient id="g-fssai" x1="0" x2="1">
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
                  <rect width="1200" height="36" fill="url(#g-fssai)" rx="6" />
                </svg>
              </div>

              <h2>Lab Testing & Sampling</h2>
              <p>
                Lab testing for microbial contamination, heavy metals, pesticide
                residues and adulterants is often required for manufacturers and
                for exports. We coordinate accredited labs, interpret reports
                and advise corrective actions.
              </p>

              <h2>Recall Management & Consumer Complaints</h2>
              <p>
                In the event of non-compliance or safety incidents, we help
                design recall strategies, notify stakeholders, coordinate with
                regulatory authorities and manage consumer complaints and
                remediation plans.
              </p>

              <h2>Audit & Compliance</h2>
              <p>
                We conduct internal assessments, mock inspections and
                preparedness audits to ensure you pass official inspections. Our
                audit checklists focus on premises hygiene, employee training,
                traceability and record-keeping.
              </p>

              <h2>Pricing & Timeline</h2>
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Indicative Fee (INR)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Basic registration (up to ₹12L turnover)</td>
                    <td>₹1,499 — ₹4,999</td>
                  </tr>
                  <tr>
                    <td>State license</td>
                    <td>₹5,999 — ₹24,999</td>
                  </tr>
                  <tr>
                    <td>Central license</td>
                    <td>₹12,999 — ₹49,999</td>
                  </tr>
                  <tr>
                    <td>Label review & compliance</td>
                    <td>₹2,499 — ₹9,999</td>
                  </tr>
                  <tr>
                    <td>Lab coordination & testing</td>
                    <td>Quote based on tests</td>
                  </tr>
                  <tr>
                    <td>Recall & remediation support</td>
                    <td>₹9,999 — ₹49,999 (case-based)</td>
                  </tr>
                </tbody>
              </table>

              <h2>Sector Specific Notes</h2>
              <p>
                Different food sectors have specialised needs; below are common
                notes:
              </p>
              <ul>
                <li>
                  <strong>Restaurants & Cloud Kitchens:</strong> Emphasis on
                  storage, temperature control, staff hygiene and delivery
                  packaging.
                </li>
                <li>
                  <strong>Packaged Food Manufacturers:</strong> Label claims,
                  shelf-life validation and batch traceability are critical.
                </li>
                <li>
                  <strong>Dairy & Perishables:</strong> Cold chain management
                  and microbial testing are often required.
                </li>
                <li>
                  <strong>Exporters:</strong> Additional export certificates and
                  certificates of analysis may be required per destination.
                </li>
              </ul>

              <h2>Common Non-compliances & How We Fix Them</h2>
              <ul>
                <li>
                  Incorrect/misleading labels — we provide label correction and
                  re-approval workflows.
                </li>
                <li>
                  Poor hygiene and record-keeping — we draft SOPs, cleaning logs
                  and training modules.
                </li>
                <li>
                  Gaps in traceability — implement batch numbering and
                  supply-chain documentation.
                </li>
              </ul>

              <h2>Fast Track & Startup Support</h2>
              <p>
                We offer startup packages that combine registration, basic HACCP
                templates, label checks and a mock inspection to help you go
                live quickly while remaining compliant.
              </p>

              <h2>FAQs</h2>
              <div className="highlight-box">
                <h3>How long does FSSAI license issuance take?</h3>
                <p>
                  Basic registration: usually a few days; licensed units
                  (State/Central) require inspections and may take 2–6 weeks
                  depending on local authority workloads.
                </p>
              </div>
              <div className="highlight-box">
                <h3>Can cloud kitchens operate without an FSSAI license?</h3>
                <p>
                  No — cloud kitchens are treated as food business operators and
                  require registration or licensing depending on turnover and
                  scale.
                </p>
              </div>

              <div style={{ textAlign: "center", marginTop: "18px" }}>
                <a
                  href="#fssai-contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("fssai-contact")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  className="btn-primary"
                  style={{ maxWidth: "300px", display: "inline-block" }}
                >
                  Start FSSAI Registration
                </a>
              </div>
            </article>

            <aside className="fssai-sidebar">
              <div className="sidebar-card">
                <h3
                  style={{
                    margin: "0 0 10px 0",
                    color: "var(--primary-color)",
                  }}
                >
                  Start Your FSSAI Process
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    margin: "0 0 12px 0",
                  }}
                >
                  Provide basic details and we will respond with a scoped plan
                  and checklist.
                </p>
                <form id="fssai-contact" onSubmit={handleFormSubmit}>
                  <input
                    className="form-control"
                    name="businessName"
                    placeholder="Business name *"
                    required
                  />
                  <input
                    className="form-control"
                    name="ownerName"
                    placeholder="Owner / Contact name *"
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
                  <select className="form-control" name="businessType">
                    <option value="">Select business type</option>
                    <option value="restaurant">
                      Restaurant / Cloud kitchen
                    </option>
                    <option value="manufacturer">Manufacturer</option>
                    <option value="retailer">Retail / Grocery</option>
                    <option value="caterer">Caterer</option>
                  </select>
                  <textarea
                    className="form-control"
                    name="details"
                    placeholder="Brief description of operations"
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
                  Quick Pre-check
                </h4>
                <p
                  style={{
                    margin: "0 0 8px 0",
                    color: "var(--text-secondary)",
                  }}
                >
                  Have business address, list of food categories, layout plan
                  and basic hygiene plan ready for faster processing.
                </p>
              </div>

              <div className="sidebar-card">
                <div style={{ marginBottom: "12px" }}>
                  <LottieAnimation
                    src="/assets/Drafts/Man%20and%20robot%20with%20computers%20sitting%20together%20in%20workplace.json"
                    width="100%"
                    height="140px"
                  />
                </div>
                <div style={{ fontWeight: 700, color: "var(--primary-color)" }}>
                  Market Ready Faster
                </div>
                <div
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.95rem",
                    marginTop: "8px",
                  }}
                >
                  We streamline paperwork so you can focus on operations.
                </div>
              </div>
            </aside>
          </div>
        </section>
      </FssaiLicenseContainer>
      <Footer />
    </>
  );
};

export default FssaiLicense;
