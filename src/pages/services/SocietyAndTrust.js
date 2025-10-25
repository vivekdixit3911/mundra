import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import SidebarForm from "../../components/SidebarForm";
import {
  SocietySection,
  SocietyContainer,
  SocietyMain,
  ContentGrid,
  SideFormColumn,
  SectionLottie,
  SocietySidebar,
  SidebarScrollWrapper,
} from "./SocietyAndTrust.styles.js";

const SocietyAndTrust = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <ServiceHero
        title="Registration of Trusts, Societies & Section 8 Companies in India"
        subtitle="By Mundra Legal — India's Trusted Legal Advisors for Non-Profit and Charitable Registration"
        breadcrumb="Society & Trust"
      />

      <SocietySection>
        <SocietyContainer>
          <ContentGrid>
            {/* ---------- LEFT CONTENT ---------- */}
            <SocietyMain>
              <h2>Registration of Trusts, Societies & Section 8 Companies in India</h2>
              <p>
                In India, thousands of individuals and organizations come together every year to serve society through charitable, educational, medical, cultural, and social initiatives. However, for such efforts to gain legal recognition, credibility, and tax benefits, formal registration is essential.
              </p>
              <p>
                Mundra Legal provides end-to-end professional support for registering Trusts, Societies, and Section 8 Companies anywhere in India. Our experts simplify the complex compliance process, ensure your documentation is flawless, and help you obtain recognition under Indian law — allowing you to focus on your mission, while we handle the legal foundation.
              </p>

              <h3>🔍 Understanding NGO Registration in India</h3>
              <p>
                An NGO (Non-Governmental Organization) is a non-profit body formed to promote social, charitable, religious, educational, or cultural causes. NGOs play a vital role in supplementing government welfare programs and driving social development.
              </p>
              <p>In India, NGOs can be registered under three main legal frameworks:</p>
              <ul>
                <li><strong>Public Charitable Trust</strong> — Under the Indian Trusts Act or State Trust Acts</li>
                <li><strong>Society</strong> — Under the Societies Registration Act, 1860 (as adapted by states)</li>
                <li><strong>Section 8 Company</strong> — Under the Companies Act, 2013</li>
              </ul>
              <p>
                Each form has its advantages and legal implications. Mundra Legal helps clients choose the best structure based on their objectives, governance needs, and future funding or compliance goals.
              </p>

              {/* --- Trust Section --- */}
              <h3>🧾 Trust Registration in India</h3>
              <p>
                A Trust is a legal arrangement where the author or settlor transfers property or funds to trustees for the benefit of the public or a specific purpose. Trusts are commonly established for activities like education, health, social welfare, or poverty relief.
              </p>

              <h4>✅ Legal Basis</h4>
              <ul>
                <li>The Indian Trusts Act, 1882 (for private trusts)</li>
                <li>The Charitable and Religious Trusts Act or relevant State Public Trusts Acts (for public charitable trusts)</li>
              </ul>

              <h4>🧩 How Mundra Legal Assists You</h4>
              <ul>
                <li>Trust Deed Drafting</li>
                <li>Name Selection</li>
                <li>Compliance Clauses Preparation</li>
                <li>Registration Coordination</li>
                <li>PAN & TAN assistance</li>
                <li>12A and 80G certifications</li>
              </ul>

              <h4>📄 Documents Required</h4>
              <ul>
                <li>Draft Trust Deed on non-judicial stamp paper</li>
                <li>ID and address proof of Settlor and Trustees</li>
                <li>Photographs</li>
                <li>Proof of registered office</li>
                <li>PAN of Settlor and Trustees</li>
              </ul>

              <h4>⚖️ Advantages of Registering a Trust</h4>
              <ul>
                <li>Legal identity to own assets and open bank accounts</li>
                <li>Eligibility for government grants and CSR funds</li>
                <li>Tax exemptions under 12A and 80G</li>
                <li>Public credibility and transparency</li>
              </ul>

              {/* --- Society Section --- */}
              <h3>🏢 Society Registration in India</h3>
              <p>
                A Society is a membership-based organization created by at least seven individuals for charitable, literary, cultural, or social purposes.
              </p>

              <h4>✅ Legal Basis</h4>
              <p>
                Registered under the Societies Registration Act, 1860, adapted by each state. In Maharashtra, societies are also governed by the Bombay Public Trusts Act.
              </p>

              <h4>🧩 Mundra Legal's Role in Society Registration</h4>
              <ul>
                <li>MOA Drafting and Rules & Regulations</li>
                <li>State law compliance and filing</li>
                <li>Managing Committee setup</li>
                <li>Annual return guidance</li>
              </ul>

              <h4>📄 Documents Required</h4>
              <ul>
                <li>MOA and Rules signed by all members</li>
                <li>ID proofs of all members</li>
                <li>Registered office proof</li>
                <li>Affidavit of non-profit motive</li>
              </ul>

              <h4>⚖️ Benefits of Society Registration</h4>
              <ul>
                <li>Legal standing for charitable work</li>
                <li>Eligibility for FCRA registration</li>
                <li>Separate legal entity</li>
                <li>Lower compliance burden</li>
              </ul>

              {/* --- Section 8 Company Section --- */}
              <h3>🏛️ Section 8 Company Registration under the Companies Act, 2013</h3>
              <p>
                A Section 8 Company (earlier Section 25 Company) is a non-profit entity incorporated under the Companies Act, 2013 for charitable objectives such as education, research, social welfare, or environment protection.
              </p>

              <h4>✅ Legal Process & Requirements</h4>
              <ul>
                <li>At least three directors and two shareholders</li>
                <li>DSC & DIN application</li>
                <li>Name approval via SPICe+</li>
                <li>Drafting MOA & AOA</li>
                <li>License from Regional Director</li>
                <li>Final incorporation</li>
              </ul>

              <h4>⚖️ Key Features</h4>
              <ul>
                <li>Separate legal entity with limited liability</li>
                <li>Eligible for domestic and foreign donations (FCRA)</li>
                <li>Mandatory audit and annual filing</li>
              </ul>

              {/* --- Tax Exemptions --- */}
              <h3>💰 Tax Exemptions & Benefits for NGOs</h3>
              <ul>
                <li><strong>Section 12A:</strong> Income Tax Exemption</li>
                <li><strong>Section 80G:</strong> Donor Tax Benefits</li>
                <li><strong>Section 35AC:</strong> 100% Tax Deduction for approved projects</li>
                <li><strong>Section 35(1)(ii)/(iii):</strong> Scientific Research Deductions</li>
                <li><strong>Section 10(23A)/(23C):</strong> Educational/Medical Institution Exemptions</li>
              </ul>

              {/* --- Why Choose Mundra Legal --- */}
              <h3>🧠 Why Choose Mundra Legal?</h3>
              <ul>
                <li>Expert Legal Advisors for NGO, Trust, and Section 8 compliance</li>
                <li>Pan-India Service Coverage</li>
                <li>Transparent Process — no hidden costs</li>
                <li>Full Compliance — 12A, 80G, CSR, FCRA</li>
                <li>Trusted by numerous NGOs, schools, and hospitals</li>
              </ul>

              {/* --- FAQs --- */}
              <h3>❓ Frequently Asked Questions (FAQs)</h3>
              <p><strong>Q1:</strong> Which is better: Trust, Society, or Section 8 Company?</p>
              <p>It depends on your objectives. Trusts are ideal for religious or charitable causes. Societies suit membership-based groups. Section 8 Companies provide high governance and credibility.</p>

              <p><strong>Q2:</strong> How long does it take?</p>
              <p>Trust: 7–15 days, Society: 15–30 days, Section 8: 20–40 days.</p>

              <p><strong>Q3:</strong> Can I get 12A & 80G?</p>
              <p>Yes, all three entities qualify. Mundra Legal assists in filing.</p>

              <p><strong>Q4:</strong> Can NGOs receive foreign funding?</p>
              <p>Yes, after obtaining FCRA registration. Mundra Legal assists in this process.</p>

              <h3>📞 Get Started with Mundra Legal Today</h3>
              <p>
                Forming a charitable organization is an act of vision — but registering it correctly ensures its credibility and sustainability.  
                Contact Mundra Legal today for expert guidance and make your charitable vision a legal reality!
              </p>

              {/* ---------- SECOND SECTION: REGISTRATION PROCESS (mirrors PLC layout) ---------- */}
              <h2 id="registration-process">Step-by-Step Registration Process</h2>

              <SectionLottie className="section-lottie" data-lottie="legal-consultation" />

              <div className="process-timeline">
                <div className="timeline-item">
                  <div className="timeline-marker"><i className="fas fa-id-card"></i></div>
                  <div className="timeline-content">
                    <h4>Choose Structure & Draft Documents</h4>
                    <p>Select Trust/Society/Section 8 and prepare Trust Deed / MOA & Rules / Memorandum & Articles.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"><i className="fas fa-fingerprint"></i></div>
                  <div className="timeline-content">
                    <h4>Identity & Office Proofs</h4>
                    <p>Collect ID/address proofs of founders, registered office proof, and other supporting documents.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"><i className="fas fa-file-contract"></i></div>
                  <div className="timeline-content">
                    <h4>File with Appropriate Authority</h4>
                    <p>Submit to Sub-Registrar / ROC / State Charity Commissioner depending on entity type.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"><i className="fas fa-check-circle"></i></div>
                  <div className="timeline-content">
                    <h4>Receive Registration Certificate</h4>
                    <p>Once approved, obtain registration certificate and registration number.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"><i className="fas fa-file-invoice-dollar"></i></div>
                  <div className="timeline-content">
                    <h4>Tax Registrations & Exemptions</h4>
                    <p>Apply for PAN/TAN and 12A/80G registrations to enable tax benefits for the entity and donors.</p>
                  </div>
                </div>
              </div>
            </SocietyMain>

            {/* ---------- RIGHT SIDEBAR FORM (sticky + scrollable) ---------- */}
            <SideFormColumn>
              <SocietySidebar>
                <SidebarScrollWrapper>
                  <SidebarForm />
                </SidebarScrollWrapper>
              </SocietySidebar>
            </SideFormColumn>
          </ContentGrid>
        </SocietyContainer>
      </SocietySection>

      <Footer />

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="back-to-top"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default SocietyAndTrust;
