import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import SidebarForm from "../../components/SidebarForm";
import LottieAnimation from "../../components/LottieAnimation";
import { MDImportPageContainer } from "./ImportMedicalDevices.styles";

const ImportMedicalDevices = () => {
  return (
    <>
      <Header />
      <ServiceHero
        title="Permission to Import Medical Devices"
        subtitle="Form MD-14 & MD-15 — End-to-end CDSCO import license support"
        breadcrumb="Import License (MD-14 & MD-15)"
      />

      <MDImportPageContainer>
        <main id="main-content">
          <section className="md-section">
            <div className="md-container">
              <div className="md-main">
                <h1>
                  Import License for Medical Devices in India — Form MD-14 &amp;
                  MD-15
                </h1>

                <p className="byline">
                  <strong>Complete Regulatory Compliance Support with Mundra Legal</strong>
                </p>

                <div className="callout">
                  <p>
                    At Mundra Legal, we ensure your business meets CDSCO
                    requirements under the Medical Devices Rules, 2017 and we
                    manage Form MD-14 &amp; MD-15 filings end-to-end through the
                    Sugam portal.
                  </p>
                </div>

                <div className="section-lottie">
                  <LottieAnimation
                    src="/assets/Drafts/Business%20team.json"
                    width="220px"
                    height="220px"
                  />
                </div>

                <h2>Overview: Permission to Import Medical Devices (Form MD-14 &amp; MD-15)</h2>
                <p>
                  India is one of the world’s fastest-growing medical device
                  markets. To legally import notified medical devices, an
                  Import License (Form MD-15) is issued by the Central Drugs
                  Standard Control Organization (CDSCO). The application is
                  generated using Form MD-14 by an authorized Indian agent on
                  the Sugam portal. Both manufacturer and device registration
                  with CDSCO is required before license grant.
                </p>

                <h3>Who Can Apply?</h3>
                <p>
                  Only an authorized Indian agent may apply on behalf of a
                  foreign manufacturer. The agent must hold either a valid
                  manufacturing license (for sale or distribution) or a valid
                  wholesale license (Form 20B &amp; 21B) as per CDSCO
                  guidelines. The agent manages submission and follow-ups on
                  the Sugam portal.
                </p>

                <h3>How to Apply (MD-14 → MD-15)</h3>
                <ol>
                  <li>Product evaluation and risk classification (A/B/C/D).</li>
                  <li>Prepare documents as per Form MD-14 checklist.</li>
                  <li>Appoint an authorized Indian agent with required CDSCO license(s).</li>
                  <li>Generate and submit the online application on Sugam.</li>
                  <li>Respond to CDSCO queries during review.</li>
                  <li>On approval, receive Import License — Form MD-15.</li>
                </ol>

                <h3>Validity of Form MD-15</h3>
                <p>
                  Form MD-15 generally remains valid perpetually provided the
                  license retention fee is paid every five years and the
                  license is not suspended or cancelled by the Central
                  Licensing Authority.
                </p>

                <h3>CDSCO Fee Structure (Indicative)</h3>
                <div className="highlight-box">
                  <div className="fee-grid">
                    <div>
                      <p><strong>Class A</strong></p>
                      <p>License Fee (per site): USD 1,000</p>
                      <p>Fee per Device: USD 50</p>
                    </div>
                    <div>
                      <p><strong>Class B</strong></p>
                      <p>License Fee (per site): USD 2,000</p>
                      <p>Fee per Device: USD 1,000</p>
                    </div>
                    <div>
                      <p><strong>Class C / D</strong></p>
                      <p>License Fee (per site): USD 3,000</p>
                      <p>Fee per Device: USD 1,500</p>
                    </div>
                  </div>
                </div>

                <h3>Required Documents</h3>
                <ul>
                  <li>Valid Wholesale License (or manufacturing license)</li>
                  <li>Power of Attorney (MDR 2017 format)</li>
                  <li>Free Sale Certificate from a GHTF country</li>
                  <li>Device Master File (DMF) and Site Master File (SMF)</li>
                  <li>Manufacturer &amp; device registration proof with CDSCO</li>
                </ul>

                <h3>Timeline for Approval</h3>
                <p>Typical timeline: 6 to 9 months (may vary with queries).</p>

                <h3>Essential Tips Before Applying</h3>
                <ul>
                  <li>Ensure the Power of Attorney follows MDR 2017 format.</li>
                  <li>Prepare DMF, SMF and technical documents as per CDSCO guidance.</li>
                  <li>If no predicate device exists in India, obtain Form MD-27 first.</li>
                  <li>Follow apostille/notarization rules for foreign documents.</li>
                </ul>

                <h3>Why Choose Mundra Legal?</h3>
                <div className="feature-grid">
                  <div className="feature-card">
                    <h4>Experienced Regulatory Team</h4>
                    <p>CDSCO filing expertise and device classification guidance.</p>
                  </div>
                  <div className="feature-card">
                    <h4>End-to-end Support</h4>
                    <p>Document preparation, portal filing, query management &amp; follow-ups.</p>
                  </div>
                  <div className="feature-card">
                    <h4>Transparent Process</h4>
                    <p>Clear timelines, fees and compliance-first approach.</p>
                  </div>
                </div>

                <div className="section-lottie">
                  <LottieAnimation src="/assets/Drafts/registration.json" width="180px" height="180px" />
                </div>

                <h3>Get Expert Assistance Today</h3>
                <p>
                  Simplify your import license process with Mundra Legal. Contact
                  us to begin your CDSCO Form MD-14 &amp; MD-15 application.
                </p>
              </div>

              <aside className="md-sidebar">
                <div className="sidebar-lottie">
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
      </MDImportPageContainer>

      <Footer />
    </>
  );
};

export default ImportMedicalDevices;
