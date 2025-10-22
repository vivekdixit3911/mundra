import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import SidebarForm from "../../components/SidebarForm";
import { EprCertificateContainer } from "./EprCertificate.styles.js";

const EprCertificate = () => {
  return (
    <>
      <Header />
      <ServiceHero
        title="EPR Certificate"
        subtitle="Assistance with Extended Producer Responsibility (EPR) registration and compliance."
        breadcrumb="EPR Certificate"
      />
      <EprCertificateContainer>
        <section className="epr-section" aria-labelledby="epr-heading">
          <div className="epr-container">
            <article className="epr-main">
              <h1 id="epr-heading">
                EPR (Extended Producer Responsibility) Registration & Compliance
              </h1>
              <div className="byline">
                Advisory and operational support for EPR across plastic
                packaging, e-waste, batteries and other regulated products.
              </div>

              <div
                className="section-lottie"
                data-lottie="business-analytics"
                data-lottie-width="420px"
                data-lottie-height="320px"
              ></div>

              <p>
                Extended Producer Responsibility (EPR) places the onus on
                producers, importers and brand-owners to ensure environmentally
                sound management of products at their end-of-life. We provide
                registration support, policy drafting, PRO (Producer
                Responsibility Organisation) engagement, reporting and auditing
                services to help you meet regulatory obligations.
              </p>

              <h2>Scope & Applicability</h2>
              <p>
                EPR applies to categories such as plastic packaging, electronic
                waste (e-waste), batteries, used oil and more. Applicability
                depends on product type, turnover and whether the company
                imports regulated products.
              </p>

              <h2>Key EPR Categories</h2>
              <div className="feature-grid">
                <div className="feature-card small-animate">
                  <i
                    className="fas fa-recycle"
                    style={{ color: "var(--primary-gold)" }}
                  ></i>
                  <h4>Plastic Packaging</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Registration, PRO coordination, recycling targets, and
                    annual reports.
                  </p>
                </div>
                <div className="feature-card small-animate">
                  <i
                    className="fas fa-bolt"
                    style={{ color: "var(--primary-gold)" }}
                  ></i>
                  <h4>Batteries</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Take-back schemes, collection targets and compliance
                    reports.
                  </p>
                </div>
                <div className="feature-card small-animate">
                  <i
                    className="fas fa-microchip"
                    style={{ color: "var(--primary-gold)" }}
                  ></i>
                  <h4>E-waste</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Producer registration, authorised dismantlers, and recycling
                    flows.
                  </p>
                </div>
                <div className="feature-card small-animate">
                  <i
                    className="fas fa-oil-can"
                    style={{ color: "var(--primary-gold)" }}
                  ></i>
                  <h4>Used Oil & Other</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Special rules for hazardous streams and extended compliance
                    obligations.
                  </p>
                </div>
              </div>

              <h2>EPR Registration Process</h2>
              <ol>
                <li>
                  Determine applicable product category and whether exemption
                  applies.
                </li>
                <li>
                  Prepare company details, product volumes and import/export
                  data.
                </li>
                <li>
                  Register on the relevant EPR portal and file necessary
                  declarations.
                </li>
                <li>
                  Engage a PRO if required for collection, recycling and
                  reporting targets.
                </li>
                <li>
                  Submit annual reports and comply with audits or spot-checks by
                  regulators.
                </li>
              </ol>

              <h2>Documentation & Reporting</h2>
              <ul>
                <li>Production/import records and sales data</li>
                <li>Material composition and weight breakdown per SKU</li>
                <li>
                  Evidence of collection and recycling (PRO agreements,
                  invoices)
                </li>
                <li>Transport & storage records for waste consignments</li>
              </ul>

              <div style={{ textAlign: "center", margin: "22px 0" }}>
                <svg
                  width="100%"
                  height="36"
                  viewBox="0 0 1200 36"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="g-epr" x1="0" x2="1">
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
                  <rect width="1200" height="36" fill="url(#g-epr)" rx="6" />
                </svg>
              </div>

              <h2>Targets, Calculations & Examples</h2>
              <p>
                EPR targets are usually specified as a percentage of the product
                placed on market. Example calculation:
              </p>
              <div className="highlight-box">
                <p>
                  <strong>Example:</strong> If you place 100 tonnes of plastic
                  packaging in a year and the recycling target is 50%, you must
                  ensure 50 tonnes are collected and recycled or accounted for
                  via PRO credits.
                </p>
              </div>

              <h2>PRO (Producer Responsibility Organisation) Engagement</h2>
              <p>
                PROs act on behalf of producers to organise collection,
                transport, recycling and reporting. We help you evaluate and
                contract with reputable PROs and structure agreements to
                allocate liabilities clearly.
              </p>

              <h2>Penalties & Non-compliance</h2>
              <p>
                Non-compliance can lead to financial penalties, public notices
                and enforcement actions. We assist with notice responses,
                remediation plans and negotiation with authorities to minimise
                exposure.
              </p>

              <h2>Audit & Verification</h2>
              <p>
                Audits may verify quantities placed on market, recycling
                certificates and PRO invoices. We conduct pre-audit checks,
                maintain traceable records and represent clients during
                verifications.
              </p>

              <h2>Pricing & Service Packages</h2>
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Indicative Fee (INR)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>EPR Registration & initial filing</td>
                    <td>₹9,999 — ₹29,999</td>
                  </tr>
                  <tr>
                    <td>Annual compliance & reporting</td>
                    <td>₹14,999 — ₹69,999</td>
                  </tr>
                  <tr>
                    <td>PRO evaluation & contracting</td>
                    <td>₹19,999 — ₹79,999</td>
                  </tr>
                  <tr>
                    <td>Audit support & notice response</td>
                    <td>₹9,999 — ₹59,999</td>
                  </tr>
                </tbody>
              </table>

              <h2>Special Considerations for Imports & Exports</h2>
              <p>
                Imported products that fall under EPR must be declared and
                accounted for; exporters must maintain export documentation to
                avoid double-counting obligations. We coordinate customs
                documentation and help with cross-border reporting nuances.
              </p>

              <h2>Dispute Resolution & Contract Clauses</h2>
              <p>
                We draft clear contract clauses allocating EPR liabilities in
                supplier and distribution agreements, including
                arbitration-ready dispute resolution language and indemnities to
                protect brand owners.
              </p>

              <h2>Case Studies & Outcomes</h2>
              <p>
                <strong>Packaging Brand:</strong> Engaged with a PRO and
                restructured supplier contracts — achieved 60% collection
                coverage within the first reporting year.{" "}
                <strong>Electronics Importer:</strong> Completed e-waste
                registration and linked with authorised dismantlers to certify
                recycling.
              </p>

              <h2>FAQs</h2>
              <div className="highlight-box">
                <h3>Who is a Producer under EPR?</h3>
                <p>
                  Usually the manufacturer, importer, brand owner or seller who
                  places the product in the market within the jurisdiction.
                  Definitions vary by product category.
                </p>
              </div>
              <div className="highlight-box">
                <h3>Can a PRO fully absolve producers?</h3>
                <p>
                  No — producers retain statutory responsibility; PROs act as
                  service providers but contracts must clearly manage
                  liabilities and evidence.
                </p>
              </div>

              <div style={{ textAlign: "center", marginTop: "18px" }}>
                <a
                  href="#epr-contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("epr-contact")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  className="btn-primary"
                  style={{ maxWidth: "300px", display: "inline-block" }}
                >
                  Request EPR Compliance Help
                </a>
              </div>
            </article>

            <aside className="epr-sidebar">
              <SidebarForm />
            </aside>
          </div>
        </section>
      </EprCertificateContainer>
      <Footer />
    </>
  );
};

export default EprCertificate;
