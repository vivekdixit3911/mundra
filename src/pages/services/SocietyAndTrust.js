import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import SidebarForm from "../../components/SidebarForm";
import LottieAnimation from "../../components/LottieAnimation";
import {
  SocietySection,
  SocietyContainer,
  SocietyMain,
  Callout,
  FeatureGrid,
  FeatureCard,
  ComparisonTable,
  HighlightBox,
  SectionLottie,
  SocietySidebar,
  SidebarScrollWrapper
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
          <SocietyMain>
            <h1>Registration of Trusts, Societies & Section 8 Companies in India</h1>
            <p className="society-byline">By Mundra Legal — India's Trusted Legal Advisors for Non-Profit and Charitable Registration</p>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/e22c2746-b465-41f9-9f1c-b8e0dc0d5ec2/PDjV3Pgj0u.lottie"
                width="350px"
                height="300px"
              />
            </SectionLottie>

            <p>In India, thousands of individuals and organizations come together every year to serve society through charitable, educational, medical, cultural, and social initiatives. However, for such efforts to gain legal recognition, credibility, and tax benefits, <strong>formal registration is essential</strong>.</p>

            <p><strong>Mundra Legal</strong> provides end-to-end professional support for registering <strong>Trusts, Societies, and Section 8 Companies</strong> anywhere in India. Our experts simplify the complex compliance process, ensure your documentation is flawless, and help you obtain recognition under Indian law — allowing you to focus on your mission, while we handle the legal foundation.</p>

            <h2 id="understanding">🔍 Understanding NGO Registration in India</h2>

            <p>An <strong>NGO (Non-Governmental Organization)</strong> is a non-profit body formed to promote social, charitable, religious, educational, or cultural causes. NGOs play a vital role in supplementing government welfare programs and driving social development.</p>

            <Callout>
              <p><strong>In India, NGOs can be registered under three main legal frameworks:</strong></p>
            </Callout>

            <FeatureGrid>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-hand-holding-heart"></i>
                </div>
                <h4>Public Charitable Trust</h4>
                <p>Under the Indian Trusts Act or State Trust Acts</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-users"></i>
                </div>
                <h4>Society</h4>
                <p>Under the Societies Registration Act, 1860 (as adapted by states)</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-building"></i>
                </div>
                <h4>Section 8 Company</h4>
                <p>Under the Companies Act, 2013</p>
              </FeatureCard>
            </FeatureGrid>

            <p>Each form has its advantages and legal implications. <strong>Mundra Legal</strong> helps clients choose the best structure based on their objectives, governance needs, and future funding or compliance goals.</p>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/a9d1932b-a76e-4018-ac59-2cea2224c812/g6AAJ5F0wu.lottie"
                width="350px"
                height="300px"
              />
            </SectionLottie>

            <h2 id="trust">🧾 Trust Registration in India</h2>

            <p>A <strong>Trust</strong> is a legal arrangement where the author or settlor transfers property or funds to trustees for the benefit of the public or a specific purpose. Trusts are commonly established for activities like education, health, social welfare, or poverty relief.</p>

            <h3>✅ Legal Basis</h3>

            <p>Trusts are governed by:</p>
            <ul>
              <li><strong>The Indian Trusts Act, 1882</strong> (for private trusts), and</li>
              <li><strong>The Charitable and Religious Trusts Act</strong> or relevant State Public Trusts Acts (for public charitable trusts).</li>
            </ul>

            <h3>🧩 How Mundra Legal Assists You</h3>

            <p>Our team ensures your trust registration is handled seamlessly from start to finish:</p>

            <FeatureGrid>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-file-contract"></i>
                </div>
                <h4>Trust Deed Drafting</h4>
                <p>Legally compliant Trust Deed preparation and vetting</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-signature"></i>
                </div>
                <h4>Name Selection</h4>
                <p>Guidance in name selection as per jurisdictional norms</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-clipboard-check"></i>
                </div>
                <h4>Compliance Clauses</h4>
                <p>Preparing clauses for charitable purpose, trustee powers, and governance</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-stamp"></i>
                </div>
                <h4>Registration Support</h4>
                <p>Coordinating with Sub-Registrar or Charity Commissioner</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-id-card"></i>
                </div>
                <h4>PAN & TAN</h4>
                <p>Securing PAN, TAN, and post-registration compliance</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-certificate"></i>
                </div>
                <h4>Tax Exemptions</h4>
                <p>12A and 80G certifications assistance</p>
              </FeatureCard>
            </FeatureGrid>

            <h3>📄 Documents Required</h3>

            <ul>
              <li>Draft Trust Deed on non-judicial stamp paper (value varies by state)</li>
              <li>ID and address proof of Settlor and Trustees</li>
              <li>Passport-sized photographs</li>
              <li>Proof of registered office (rent agreement/NOC)</li>
              <li>PAN of Settlor and Trustees</li>
            </ul>

            <h3>⚖️ Advantages of Registering a Trust</h3>

            <HighlightBox>
              <ul>
                <li><strong>Legal identity</strong> to own assets and open bank accounts</li>
                <li><strong>Eligibility</strong> for government grants and CSR funds</li>
                <li><strong>12A and 80G</strong> tax exemptions under the Income Tax Act</li>
                <li><strong>Public credibility</strong> and compliance transparency</li>
              </ul>
            </HighlightBox>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/c195821a-b69d-4b7d-b98d-7ed787ceb0f0/ulNalBOVgu.lottie"
                width="350px"
                height="300px"
              />
            </SectionLottie>

            <h2 id="society">🏢 Society Registration in India</h2>

            <p>A <strong>Society</strong> is a membership-based organization created by at least seven individuals for charitable, literary, cultural, or social purposes. Societies often manage educational institutions, community development programs, or welfare projects.</p>

            <h3>✅ Legal Basis</h3>

            <p>Societies are registered under the <strong>Societies Registration Act, 1860</strong>, adapted by each state with local variations. In Maharashtra, for example, societies are dual-registered under both the Societies Registration Act and the Bombay Public Trusts Act.</p>

            <h3>🧩 Mundra Legal's Role in Society Registration</h3>

            <p>We handle the entire process with precision:</p>

            <FeatureGrid>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-scroll"></i>
                </div>
                <h4>MOA Drafting</h4>
                <p>Memorandum of Association and Rules & Regulations preparation</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-balance-scale"></i>
                </div>
                <h4>Legal Compliance</h4>
                <p>Ensuring compliance with state laws and membership criteria</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-file-upload"></i>
                </div>
                <h4>Filing Assistance</h4>
                <p>Filing with the Registrar of Societies</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-users-cog"></i>
                </div>
                <h4>Governing Body Setup</h4>
                <p>Advisory for setting up managing committee</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-calendar-check"></i>
                </div>
                <h4>Annual Returns</h4>
                <p>Post-registration compliance and annual return guidance</p>
              </FeatureCard>
            </FeatureGrid>

            <h3>📄 Documents Required</h3>

            <ul>
              <li>MOA and Rules & Regulations (signed by all founding members)</li>
              <li>ID and address proof of all members</li>
              <li>Proof of registered office (ownership/rental documents)</li>
              <li>Covering letter and affidavit of non-profit motive</li>
            </ul>

            <h3>⚖️ Benefits of Society Registration</h3>

            <HighlightBox>
              <ul>
                <li><strong>Legal standing</strong> for conducting social and charitable work</li>
                <li><strong>Eligibility</strong> for foreign funding (FCRA registration)</li>
                <li><strong>Separate legal entity</strong> with perpetual succession</li>
                <li><strong>Lower compliance burden</strong> compared to companies</li>
              </ul>
            </HighlightBox>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/608bb0ee-75d0-4c06-bbc6-fffd96c00e3a/6TWHywiLM0.lottie"
                width="350px"
                height="300px"
              />
            </SectionLottie>

            <h2 id="section8">🏛️ Section 8 Company Registration under the Companies Act, 2013</h2>

            <p>A <strong>Section 8 Company</strong> (earlier known as Section 25 Company) is a non-profit entity incorporated under the Companies Act, 2013 with charitable objectives such as education, art, science, research, social welfare, sports, or environment protection.</p>

            <p>Unlike traditional companies, Section 8 Companies <strong>cannot distribute profits</strong> among members. All income must be reinvested to promote the organization's objectives.</p>

            <h3>✅ Legal Process & Requirements</h3>

            <p>At least <strong>three directors and two shareholders</strong> are required. Mundra Legal assists you in:</p>

            <FeatureGrid>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-key"></i>
                </div>
                <h4>DSC & DIN</h4>
                <p>Obtaining Digital Signatures and Director Identification Numbers</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-search"></i>
                </div>
                <h4>Name Approval</h4>
                <p>Checking name availability and filing SPICe+ (INC-32)</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-file-alt"></i>
                </div>
                <h4>MOA & AOA</h4>
                <p>Drafting MOA and AOA with charitable clauses</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-gavel"></i>
                </div>
                <h4>Section 8 License</h4>
                <p>Filing with Regional Director for license</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-check-double"></i>
                </div>
                <h4>Incorporation</h4>
                <p>Completing incorporation and post-registration compliance</p>
              </FeatureCard>
            </FeatureGrid>

            <h3>⚖️ Key Features</h3>

            <ul>
              <li>Separate legal entity with limited liability</li>
              <li>Recognized under the Companies Act for high governance standards</li>
              <li>Can receive domestic and foreign donations (after FCRA approval)</li>
              <li>Mandatory audit and annual filing ensure transparency</li>
            </ul>

            <h3>📄 Common Documents Required</h3>

            <ul>
              <li>MOA and AOA (drafted for charitable objectives)</li>
              <li>PAN, Aadhaar, and address proof of all directors/shareholders</li>
              <li>Proof of registered office</li>
              <li>Declaration under INC-14 and INC-15 affirming non-profit intent</li>
            </ul>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/aa67c09e-32f8-473b-9255-419e321b484b/9BXu5Bhfyw.lottie"
                width="350px"
                height="300px"
              />
            </SectionLottie>

            <h2 id="comparison">📊 Comparison: Trust vs Society vs Section 8 Company</h2>

            <ComparisonTable>
              <thead>
                <tr>
                  <th>Aspect</th>
                  <th>Trust</th>
                  <th>Society</th>
                  <th>Section 8 Company</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Governing Law</strong></td>
                  <td>State Trust Act</td>
                  <td>Societies Registration Act, 1860</td>
                  <td>Companies Act, 2013</td>
                </tr>
                <tr>
                  <td><strong>Minimum Members</strong></td>
                  <td>2</td>
                  <td>7</td>
                  <td>2 Shareholders & 3 Directors</td>
                </tr>
                <tr>
                  <td><strong>Legal Control</strong></td>
                  <td>Trustees</td>
                  <td>Governing Council</td>
                  <td>Board of Directors</td>
                </tr>
                <tr>
                  <td><strong>Registration Authority</strong></td>
                  <td>Sub-Registrar / Charity Commissioner</td>
                  <td>Registrar of Societies</td>
                  <td>Registrar of Companies</td>
                </tr>
                <tr>
                  <td><strong>Legal Entity</strong></td>
                  <td>May not be separate from trustees</td>
                  <td>Separate legal entity</td>
                  <td>Separate legal entity</td>
                </tr>
                <tr>
                  <td><strong>Tax Exemption Eligibility</strong></td>
                  <td>12A, 80G</td>
                  <td>12A, 80G</td>
                  <td>12A, 80G</td>
                </tr>
                <tr>
                  <td><strong>Dissolution</strong></td>
                  <td>Rare</td>
                  <td>Allowed</td>
                  <td>Allowed</td>
                </tr>
                <tr>
                  <td><strong>Ideal For</strong></td>
                  <td>Religious or Charitable Trusts</td>
                  <td>Educational/Cultural NGOs</td>
                  <td>Professional Non-Profits/CSR</td>
                </tr>
              </tbody>
            </ComparisonTable>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/4c07e908-ca58-44c5-92bb-1ac770adc086/F0TEajCvsT.lottie"
                width="350px"
                height="300px"
              />
            </SectionLottie>

            <h2 id="tax">💰 Tax Exemptions & Benefits for NGOs</h2>

            <FeatureGrid>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-file-invoice-dollar"></i>
                </div>
                <h4>Section 12A</h4>
                <p><strong>Income Tax Exemption</strong> - Registration exempts income from donations or property held for charitable purposes</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-hand-holding-usd"></i>
                </div>
                <h4>Section 80G</h4>
                <p><strong>Donor Tax Benefits</strong> - Donors can claim 50% deduction of donated amount from taxable income</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-percent"></i>
                </div>
                <h4>Section 35AC</h4>
                <p><strong>100% Tax Deduction</strong> - For approved projects like water supply, education, hospitals, housing</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-flask"></i>
                </div>
                <h4>Section 35(1)(ii)/(iii)</h4>
                <p><strong>Scientific Research</strong> - Weighted deduction up to 175% for scientific/social research</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h4>Section 10(23A) & 10(23C)</h4>
                <p><strong>Educational/Medical</strong> - Exemption for professional bodies and educational/medical institutions</p>
              </FeatureCard>
            </FeatureGrid>

            <h3>Section 12A – Income Tax Exemption</h3>
            <p>Registration under Section 12A exempts income from donations or property held for charitable purposes. Mundra Legal helps prepare and file <strong>Form 10A</strong> with the Income Tax Department, along with verification and documentation.</p>

            <h3>Section 80G – Donor Tax Benefits</h3>
            <p>Once registered under 12A, NGOs can also apply for <strong>80G certification</strong>, allowing donors to claim 50% deduction of their donated amount from taxable income. This enhances funding potential and trustworthiness.</p>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/3c3cb7ee-7106-430f-9451-202c033965c9/drWrh1bZhB.lottie"
                width="350px"
                height="300px"
              />
            </SectionLottie>

            <h2 id="why">🧠 Why Choose Mundra Legal?</h2>

            <FeatureGrid>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-user-tie"></i>
                </div>
                <h4>Expert Legal Advisors</h4>
                <p>Specialized in NGO, Trust, and Section 8 compliance</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-map-marked-alt"></i>
                </div>
                <h4>Pan-India Service</h4>
                <p>Registration in all states and union territories</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-hand-holding-heart"></i>
                </div>
                <h4>Transparent Process</h4>
                <p>No hidden costs, complete documentation support</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-clipboard-list"></i>
                </div>
                <h4>Full Compliance</h4>
                <p>12A, 80G, CSR, and FCRA handled seamlessly</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-star"></i>
                </div>
                <h4>Trusted by Professionals</h4>
                <p>Multiple NGOs, schools, hospitals, and foundations</p>
              </FeatureCard>
            </FeatureGrid>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/8d9a8d8a-8b77-4c07-ab09-a6001c90fd5e/EFZQyaOAzd.lottie"
                width="350px"
                height="300px"
              />
            </SectionLottie>

            <h2 id="faqs">❓ Frequently Asked Questions (FAQs)</h2>

            <HighlightBox>
              <h3>Q1. Which is better: Trust, Society, or Section 8 Company?</h3>
              <p>It depends on your objectives. <strong>Trusts</strong> are ideal for religious/charitable causes with simpler management. <strong>Societies</strong> suit membership-based organizations like educational or cultural groups. <strong>Section 8 Companies</strong> offer better governance, transparency, and credibility for professional non-profits seeking CSR funding or foreign donations.</p>
            </HighlightBox>

            <HighlightBox>
              <h3>Q2. How long does it take to register a Trust/Society/Section 8 Company?</h3>
              <p><strong>Trust:</strong> 7-15 days (varies by state). <strong>Society:</strong> 15-30 days. <strong>Section 8 Company:</strong> 20-40 days, depending on RD approval.</p>
            </HighlightBox>

            <HighlightBox>
              <h3>Q3. What is the cost of registration?</h3>
              <p>Costs vary by state and entity type. <strong>Trust</strong> registration involves stamp duty (varies by state). <strong>Society</strong> has nominal filing fees. <strong>Section 8 Company</strong> requires MCA fees plus professional charges. Contact Mundra Legal for a detailed quote.</p>
            </HighlightBox>

            <HighlightBox>
              <h3>Q4. Can I get tax exemption under 12A and 80G?</h3>
              <p>Yes. All three entities (Trust, Society, Section 8 Company) are eligible for <strong>12A and 80G</strong> registration under the Income Tax Act. Mundra Legal assists in the entire application process.</p>
            </HighlightBox>

            <HighlightBox>
              <h3>Q5. Can NGOs receive foreign funding?</h3>
              <p>Yes, but they must obtain <strong>FCRA (Foreign Contribution Regulation Act)</strong> registration from the Ministry of Home Affairs. Mundra Legal provides FCRA registration services for eligible NGOs.</p>
            </HighlightBox>

            <HighlightBox>
              <h3>Q6. Is audit mandatory for NGOs?</h3>
              <p><strong>Section 8 Companies</strong> require mandatory audit. <strong>Trusts and Societies</strong> may need audit if income exceeds specified limits or if seeking 12A/80G. We recommend annual audits for transparency and compliance.</p>
            </HighlightBox>

            <HighlightBox>
              <h3>Q7. What is the difference between 12A and 80G?</h3>
              <p><strong>12A</strong> provides tax exemption to the NGO on its income. <strong>80G</strong> allows donors to claim tax deductions on their donations. Both can be obtained together.</p>
            </HighlightBox>

            <h2 id="contact">📞 Get Started with Mundra Legal Today</h2>

            <Callout>
              <p><strong>Forming a charitable organization is an act of vision</strong> — but registering it correctly ensures its credibility and sustainability.</p>
              
              <p>Whether you're planning to start a <strong>Trust, Society, or Section 8 Company</strong>, Mundra Legal is your trusted partner for seamless registration, tax exemption, and ongoing compliance support.</p>
              
              <p style={{textAlign: 'center', marginTop: '24px'}}>
                <strong style={{fontSize: '1.2rem', color: '#1C2951'}}>📞 Contact us today for expert guidance and make your charitable vision a legal reality!</strong>
              </p>
            </Callout>
          </SocietyMain>

          <SocietySidebar>
            <SidebarScrollWrapper>
              <SidebarForm />
            </SidebarScrollWrapper>
          </SocietySidebar>
        </SocietyContainer>
      </SocietySection>

      <Footer />

      {/* Back to Top Button */}
      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '50px',
          height: '50px',
          background: 'linear-gradient(135deg, #1C2951, #D4AF37)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          opacity: showBackToTop ? 1 : 0,
          transform: showBackToTop ? 'translateY(0)' : 'translateY(100px)',
          transition: 'all 0.3s ease',
          boxShadow: '0 16px 48px rgba(28, 41, 81, 0.16)',
          zIndex: 999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </>
  );
};

export default SocietyAndTrust;
