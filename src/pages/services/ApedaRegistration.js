import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import SidebarForm from "../../components/SidebarForm";
import LottieAnimation from "../../components/LottieAnimation";
import { ApedaPageContainer } from "./ApedaRegistration.styles.js";

const ApedaRegistration = () => {

  return (
    <>
      <Header />
      <ServiceHero
        title="APEDA Registration"
        subtitle="Expert APEDA registration & facilitation services for agricultural exporters."
        breadcrumb="APEDA Registration"
      />
      <ApedaPageContainer>
        <main id="main-content">
          <section id="apeda-content" className="apeda-section">
            <div className="apeda-container">
              <div className="apeda-main">
                <h1 id="apeda-heading">
                  APEDA Registration: Your Gateway to Global Agri-Trade Success
                </h1>
                <p className="apeda-byline">
                  <strong>By Mundra Legal Consultants</strong>
                </p>

                <div className="callout">
                  <p>
                    <strong>🌟 Important:</strong> For every Indian business
                    aiming to export agricultural or processed food products,
                    obtaining <strong>APEDA Registration</strong> is a mandatory
                    and crucial step. It ensures full legal compliance and opens
                    the door to international markets with confidence and
                    credibility.
                  </p>
                </div>

                <div
                  className="inline-lottie"
                  style={{ float: "left", margin: "0 20px 20px 0" }}
                >
                  <LottieAnimation
                    src="/assets/Drafts/Business.json"
                    width="120px"
                    height="120px"
                  />
                </div>
                <h2>
                  Understanding APEDA – The Backbone of India's Agri-Exports
                </h2>
                <p>
                  APEDA stands for the Agricultural and Processed Food Products
                  Export Development Authority. It was established by the
                  Government of India under the Ministry of Commerce and
                  Industry, through the APEDA Act, 1985. The authority’s mission
                  is to promote and develop exports of agricultural and
                  processed food products, ensuring global quality standards and
                  market expansion for Indian exporters.
                </p>

                <p>
                  At Mundra Legal Consultants, we assist you through every step
                  of the APEDA registration process—making your export journey
                  seamless, compliant, and growth-ready.
                </p>

                <h3>Core Responsibilities and Goals of APEDA</h3>

                <div className="feature-grid">
                  <div className="feature-card">
                    <div className="icon-box">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                    <h4>🌍 Export Expansion</h4>
                    <p>
                      APEDA supports exporters in finding international markets
                      and obtaining the mandatory RCMC certificate.
                    </p>
                  </div>
                  <div className="feature-card">
                    <div className="icon-box">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    </div>
                    <h4>⭐ Global Standards</h4>
                    <p>
                      Sets international standards for quality, hygiene and
                      packaging to ensure competitiveness.
                    </p>
                  </div>
                  <div className="feature-card">
                    <div className="icon-box">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                      </svg>
                    </div>
                    <h4>💰 Financial Support</h4>
                    <p>
                      Provides grants for infrastructure & quality upgrades to
                      boost export readiness.
                    </p>
                  </div>
                  <div className="feature-card">
                    <div className="icon-box">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                      </svg>
                    </div>
                    <h4>📊 Market Intelligence</h4>
                    <p>
                      Offers export performance reports and market trend
                      insights for strategic decisions.
                    </p>
                  </div>
                  <div className="feature-card">
                    <div className="icon-box">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                    <h4>🏅 GI Protection</h4>
                    <p>
                      Safeguards Geographical Indications like Basmati rice for
                      brand protection.
                    </p>
                  </div>
                  <div className="feature-card">
                    <div className="icon-box">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <h4>🌱 Organic Certification</h4>
                    <p>
                      Facilitates organic export certification and compliance
                      assistance.
                    </p>
                  </div>
                </div>

                <div
                  className="section-lottie"
                >
                  <LottieAnimation
                    src="/assets/Drafts/Business%20analytics%20animation.json"
                    width="200px"
                    height="200px"
                  />
                </div>

                <h3 id="products">Products Covered Under APEDA</h3>
                <div
                  className="inline-lottie"
                  aria-hidden="true"
                  style={{ float: "right", margin: "0 0 20px 20px" }}
                >
                  <LottieAnimation
                    src="/assets/Drafts/World%20map%2C%20Tallinn.json"
                    width="280px"
                    height="280px"
                  />
                </div>
                <p>
                  <strong>
                    First Schedule – Agricultural and Processed Food Items
                  </strong>
                </p>
                <ul>
                  <li>Fruits, Vegetables & Processed Products</li>
                  <li>Meat & Meat Products</li>
                  <li>Poultry & Poultry Products</li>
                  <li>Dairy Products</li>
                  <li>Confectionery, Biscuits & Bakery Goods</li>
                  <li>Honey, Jaggery & Sugar Products</li>
                  <li>Cocoa & Cocoa-Based Products</li>
                  <li>Alcoholic & Non-Alcoholic Beverages</li>
                  <li>Cereals & Cereal Products</li>
                  <li>Groundnuts, Peanuts & Walnuts</li>
                  <li>Pickles, Papads & Chutneys</li>
                  <li>Guar Gum, Floriculture, Herbal & Medicinal Plants</li>
                </ul>

                <p>
                  <strong>Second Schedule – Special Category Product</strong>
                  <br />
                  Basmati Rice is classified separately under the Second
                  Schedule due to its strategic export importance.
                </p>

                <h3 id="importance">Why APEDA Registration Matters</h3>

                <div className="highlight-box">
                  <div
                    style={{
                      display: "flex",
                      gap: "24px",
                      alignItems: "flex-start",
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <ul>
                        <li>
                          <strong>🔒 Mandatory Legal Requirement</strong>—
                          Without RCMC, you cannot export scheduled products
                          legally.
                        </li>
                        <li>
                          <strong>🌟 Builds Global Credibility</strong>— RCMC
                          from APEDA reassures international buyers and
                          partners.
                        </li>
                        <li>
                          <strong>🚀 Easier Market Access</strong>— Trade fairs,
                          AgriExchange visibility and export incentives.
                        </li>
                        <li>
                          <strong>💼 Access to Financial Assistance</strong>—
                          Grants for packaging, quality, and infrastructure.
                        </li>
                        <li>
                          <strong>✅ Quality & Compliance Support</strong>—
                          Assistance for HACCP, ISO 22000, etc.
                        </li>
                        <li>
                          <strong>📈 Valuable Market Intelligence</strong>—
                          Curated trade data for better decisions.
                        </li>
                      </ul>
                    </div>
                    <div
                      className="inline-lottie"
                      style={{ float: "none", margin: "0" }}
                    >
                      <LottieAnimation
                        src="/assets/Drafts/Investment.json"
                        width="200px"
                        height="200px"
                      />
                    </div>
                  </div>
                </div>

                <h3 id="eligibility">Eligibility & Documents</h3>

                <div className="highlight-box">
                  <p className="badge">📋 Requirements Checklist</p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "24px",
                      marginTop: "16px",
                    }}
                  >
                    <div>
                      <p>
                        <strong>General Requirements</strong>
                      </p>
                      <ul>
                        <li>Exporter of scheduled products</li>
                        <li>Valid Import-Export Code (IEC)</li>
                        <li>Legally registered entity</li>
                        <li>Business bank account</li>
                      </ul>
                    </div>
                    <div>
                      <p>
                        <strong>Key Documents</strong>
                      </p>
                      <ul>
                        <li>Import-Export Code (IEC)</li>
                        <li>PAN Card & GST Certificate</li>
                        <li>Digital Signature Certificate</li>
                        <li>Business Entity Proof</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className="section-lottie"
                >
                  <LottieAnimation
                    src="/assets/Drafts/registration.json"
                    width="220px"
                    height="220px"
                  />
                </div>

                <h3 id="registration">
                  Online Registration Process (Simplified)
                </h3>

                <div className="callout">
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      alignItems: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <p className="badge">🚀 Quick & Easy Process</p>
                    <div
                      className="inline-lottie"
                      style={{ float: "none", margin: "0" }}
                    >
                      <LottieAnimation
                        src="/assets/Drafts/light%20bulb.json"
                        width="160px"
                        height="160px"
                      />
                    </div>
                  </div>
                  <ol style={{ marginTop: "12px" }}>
                    <li>
                      <strong>Visit Portal:</strong>
                      <a
                        href="https://dgft.gov.in/CP/?opt=e-rcmc"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--mundra-orange)" }}
                      >
                        dgft.gov.in/CP/?opt=e-rcmc
                      </a>
                    </li>
                    <li>
                      <strong>Enter Details:</strong> Fill in contact and
                      business information
                    </li>
                    <li>
                      <strong>Verify OTP:</strong> Email & mobile OTP
                      verification
                    </li>
                    <li>
                      <strong>Upload Documents:</strong> PDF/JPEG scanned copies
                    </li>
                    <li>
                      <strong>Pay Fees:</strong> ₹5,900 + GST via
                      netbanking/card
                    </li>
                    <li>
                      <strong>Verification:</strong> Authorities review (7–10
                      working days)
                    </li>
                    <li>
                      <strong>Certificate Issued:</strong> RCMC emailed on
                      approval ✅
                    </li>
                  </ol>
                </div>

                <h3 id="fees">Fees & Validity</h3>
                <div
                  className="inline-lottie"
                  style={{ float: "right", margin: "0 0 20px 20px" }}
                >
                  <LottieAnimation
                    src="/assets/Drafts/Investment.json"
                    width="100px"
                    height="100px"
                  />
                </div>
                <div className="highlight-box">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "24px",
                      flexWrap: "wrap",
                    }}
                  >
                    <div>
                      <p>
                        <strong>💰 Government Fee:</strong>
                      </p>
                      <p
                        style={{
                          fontSize: "1.8rem",
                          color: "var(--mundra-orange)",
                          fontWeight: "700",
                          margin: "8px 0",
                        }}
                      >
                        ₹5,900
                        <span
                          style={{
                            fontSize: "1rem",
                            color: "var(--text-muted)",
                          }}
                        >
                          + GST
                        </span>
                      </p>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        (One-time payment)
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong>🤝 Professional Fee:</strong>
                      </p>
                      <p
                        style={{
                          fontSize: "1.8rem",
                          color: "var(--mundra-gold)",
                          fontWeight: "700",
                          margin: "8px 0",
                        }}
                      >
                        ₹3,500
                      </p>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        (Typical, case-by-case)
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong>⏰ Validity Period:</strong>
                      </p>
                      <p
                        style={{
                          fontSize: "1.8rem",
                          color: "var(--mundra-orange)",
                          fontWeight: "700",
                          margin: "8px 0",
                        }}
                      >
                        5 Years
                      </p>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        (Five financial years)
                      </p>
                    </div>
                  </div>
                </div>

                <h3 id="renewal">Renewal & Compliance</h3>
                <div className="callout">
                  <p>
                    <strong>⚠️ Important:</strong> RCMC is valid for five
                    financial years. Monthly export returns are mandatory
                    (including nil returns). Non-compliance may lead to
                    penalties or cancellation of your certificate.
                  </p>
                </div>

                <h3 id="how-we-help">How Mundra Legal Helps</h3>
                <div className="highlight-box">
                  <div
                    style={{
                      display: "flex",
                      gap: "24px",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="inline-lottie"
                      style={{ float: "none", margin: "0" }}
                    >
                      <LottieAnimation
                        src="/assets/Drafts/Business%20team.json"
                        width="200px"
                        height="200px"
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <p>
                        <strong>🎯 Our Expert Services Include:</strong>
                      </p>
                      <ul style={{ marginTop: "12px" }}>
                        <li>✅ Complete documentation preparation & review</li>
                        <li>✅ Portal filing & application submission</li>
                        <li>✅ Follow-ups with authorities</li>
                        <li>✅ Compliance guidance & support</li>
                        <li>✅ End-to-end assistance until approval</li>
                      </ul>
                      <p style={{ marginTop: "16px" }}>
                        <strong style={{ color: "var(--mundra-orange)" }}>
                          Focus on your exports, we'll handle the compliance!
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>

                <h3 id="faq">Frequently Asked Questions (FAQs)</h3>

                <div className="callout" style={{ marginTop: "24px" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      alignItems: "flex-start",
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <ol style={{ marginTop: "12px" }}>
                        <li>
                          <strong>What is the full form of APEDA?</strong>
                          <br />
                          Agricultural and Processed Food Products Export
                          Development Authority.
                        </li>
                        <li>
                          <strong>Why is registration mandatory?</strong>
                          <br />
                          It ensures legal permission to export and access to
                          government benefits.
                        </li>
                        <li>
                          <strong>How long does it take?</strong>
                          <br />
                          Typically 7–10 working days after submission.
                        </li>
                        <li>
                          <strong>Is monthly return filing mandatory?</strong>
                          <br />
                          Yes, even for nil export months.
                        </li>
                        <li>
                          <strong>What can lead to cancellation?</strong>
                          <br />
                          Non-filing of returns, misuse of benefits, or
                          violation of export rules.
                        </li>
                      </ol>
                    </div>
                    <div
                      className="inline-lottie"
                      style={{ float: "none", margin: "0" }}
                    >
                      <LottieAnimation
                        src="/assets/Drafts/FAQ%20web%20page.json"
                        width="180px"
                        height="180px"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <aside className="apeda-sidebar">
                <div
                  className="sidebar-lottie"
                  style={{ textAlign: "center", marginBottom: "20px" }}
                >
                  <LottieAnimation
                    src="/assets/Drafts/Man%20and%20robot%20with%20computers%20sitting%20together%20in%20workplace.json"
                    width="200px"
                    height="200px"
                  />
                </div>
                <SidebarForm />
              </aside>
            </div>
          </section>
        </main>
      </ApedaPageContainer>
      <Footer />
    </>
  );
};

export default ApedaRegistration;
