import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import SidebarForm from "../../components/SidebarForm";
import LottieAnimation from "../../components/LottieAnimation";
import "./styles/LegalMetrology.css";

const LegalMetrology = () => {
  useEffect(() => {
    document.title =
      "Legal Metrology Registration in India | LMPC Certificate | Mundra Legal";
  }, []);

  return (
    <>
      <Header />
      <ServiceHero
        title="Legal Metrology Registration"
        subtitle="Complete Guide to LMPC Certificate & Compliance in India"
      />

      <main id="main-content">
        <section
          className="legal-section"
          aria-labelledby="legal-metrology-heading"
        >
          <div className="legal-container">
            <article className="legal-main">
              <div className="lottie-container">
                <LottieAnimation
                  src="https://assets5.lottiefiles.com/packages/lf20_ndl8h3e1.json"
                  className="lottie-float"
                />
              </div>

              <h1 id="legal-metrology-heading">
                Legal Metrology Registration in India
              </h1>
              <p className="legal-byline">
                Complete Guide to LMPC Certificate & Compliance
              </p>

              <div className="highlight-box">
                <h3>
                  <i className="fas fa-balance-scale"></i> Understanding Legal
                  Metrology
                </h3>
                <p>
                  The Legal Metrology Act, 2009 governs how weights,
                  measurements, and packaged goods are regulated in India. Its
                  primary goal is to ensure accuracy in trade measurements,
                  consumer protection, and standardization of product packaging
                  and declarations. Every manufacturer, importer, or packer
                  dealing in packaged commodities must comply with the Legal
                  Metrology Packaged Commodities (LMPC) Rules, 2011.
                </p>
                <p>
                  At Mundra Legal, our team assists businesses in obtaining LMPC
                  registration, ensuring packaging compliance, and avoiding
                  costly penalties under the Act. We streamline the entire
                  registration and compliance process through expert
                  documentation, representation, and follow-up with the
                  concerned Legal Metrology authorities.
                </p>
              </div>

              <h2>Key Objectives of the Legal Metrology Act</h2>
              <div className="feature-grid">
                <div className="feature-card">
                  <div className="icon-box">
                    <i className="fas fa-ruler-combined"></i>
                  </div>
                  <h3>Standardization</h3>
                  <p>
                    Establish uniform standards of weights and measures across
                    India to ensure consistency in trade.
                  </p>
                </div>
                <div className="feature-card">
                  <div className="icon-box">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <h3>Consumer Protection</h3>
                  <p>
                    Protect consumer rights through accurate packaging and clear
                    declaration of product information.
                  </p>
                </div>
                <div className="feature-card">
                  <div className="icon-box">
                    <i className="fas fa-gavel"></i>
                  </div>
                  <h3>Prevent Fraud</h3>
                  <p>
                    Prevent deceptive trade practices and mislabeling that could
                    mislead consumers.
                  </p>
                </div>
              </div>

              <h2>Who Must Obtain Legal Metrology Registration?</h2>
              <p>
                LMPC registration is mandatory for the following entities
                involved in manufacturing, importing, or packaging goods for
                sale in India:
              </p>
              <div className="feature-grid">
                <div className="highlight-box" style={{ margin: 0 }}>
                  <h4>
                    <i className="fas fa-industry"></i> Manufacturers
                  </h4>
                  <p>
                    Businesses that produce and pack goods for retail sale under
                    their own brand name.
                  </p>
                </div>
                <div className="highlight-box" style={{ margin: 0 }}>
                  <h4>
                    <i className="fas fa-plane-arrival"></i> Importers
                  </h4>
                  <p>
                    Companies that import pre-packaged goods into India for sale
                    or distribution.
                  </p>
                </div>
                <div className="highlight-box" style={{ margin: 0 }}>
                  <h4>
                    <i className="fas fa-boxes"></i> Packers
                  </h4>
                  <p>
                    Businesses that package commodities before they are sold to
                    consumers.
                  </p>
                </div>
              </div>

              <div
                className="highlight-box"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(28, 41, 81, 0.05) 0%, rgba(212, 175, 55, 0.1) 100%)",
                }}
              >
                <h3>
                  <i className="fas fa-tags"></i> Mandatory Declarations on
                  Packaged Goods
                </h3>
                <ul className="checklist">
                  <li>
                    Name and address of the manufacturer, packer, or importer
                  </li>
                  <li>Generic name of the commodity</li>
                  <li>
                    Net quantity (in standard units like grams, kilograms,
                    liters, or numbers)
                  </li>
                  <li>Month and year of manufacture, packing, or import</li>
                  <li>Expiry or best-before date (where applicable)</li>
                  <li>Maximum Retail Price (MRP) inclusive of all taxes</li>
                  <li>Customer care contact or helpline details</li>
                  <li>Country of origin (for imported goods)</li>
                </ul>
              </div>

              <h2>Documents Required for LMPC Registration</h2>
              <ul className="document-list">
                <li>
                  <i className="fas fa-file-contract"></i> Incorporation
                  Certificate / GST Registration
                </li>
                <li>
                  <i className="fas fa-passport"></i> Import Export Code (for
                  importers)
                </li>
                <li>
                  <i className="fas fa-address-card"></i> PAN Card of the
                  company or proprietor
                </li>
                <li>
                  <i className="fas fa-boxes"></i> List of commodities to be
                  imported/manufactured
                </li>
                <li>
                  <i className="fas fa-tag"></i> Packaging labels and artwork
                  samples
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i> Address proof of
                  business premises
                </li>
              </ul>

              <h2>Legal Metrology Registration Process</h2>
              <div className="process-steps">
                <div className="step">
                  <div className="step-content">
                    <h3>Consultation & Document Collection</h3>
                    <p>
                      Our experts collect your business details, product
                      specifications, and packaging data to prepare the
                      necessary documentation.
                    </p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-content">
                    <h3>Application Preparation & Submission</h3>
                    <p>
                      We prepare and file the application with the Director or
                      Controller of Legal Metrology in the prescribed format.
                    </p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-content">
                    <h3>Inspection & Verification</h3>
                    <p>
                      An inspector verifies your packaging compliance, premises,
                      and weighing equipment to ensure they meet standards.
                    </p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-content">
                    <h3>Approval & Certificate Issuance</h3>
                    <p>
                      After successful inspection, the Controller issues the
                      LMPC Certificate, typically valid for five years.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="highlight-box"
                style={{ borderLeftColor: "#e53e3e" }}
              >
                <h3 style={{ color: "#e53e3e" }}>
                  <i className="fas fa-exclamation-triangle"></i> Penalties for
                  Non-Compliance
                </h3>
                <p>
                  Failure to comply with Legal Metrology regulations can result
                  in severe consequences, including fines up to ₹25,000 for the
                  first offense, imprisonment for subsequent offenses, and
                  seizure of goods.
                </p>
              </div>

              <h2>Frequently Asked Questions (FAQs)</h2>
              <div className="highlight-box">
                <h3>
                  <i className="far fa-question-circle"></i> What is an LMPC
                  Certificate?
                </h3>
                <p>
                  An LMPC (Legal Metrology Packaged Commodities) Certificate is
                  a mandatory registration for manufacturers, importers, and
                  packers of pre-packaged goods in India to ensure compliance
                  with packaging and labeling laws.
                </p>
              </div>
              <div className="highlight-box">
                <h3>
                  <i className="far fa-question-circle"></i> Is LMPC
                  registration mandatory for importers?
                </h3>
                <p>
                  Yes, LMPC registration is mandatory for anyone importing
                  pre-packaged goods into India for sale or distribution under
                  the Legal Metrology Act.
                </p>
              </div>
              <div className="highlight-box">
                <h3>
                  <i className="far fa-question-circle"></i> What is the
                  validity period of an LMPC certificate?
                </h3>
                <p>
                  An LMPC certificate is typically valid for five years. It must
                  be renewed before the expiry date to ensure uninterrupted
                  business operations.
                </p>
              </div>
            </article>

            <aside className="legal-sidebar">
              <SidebarForm />
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default LegalMetrology;
