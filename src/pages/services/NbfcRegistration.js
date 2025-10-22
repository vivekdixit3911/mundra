import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import SidebarForm from "../../components/SidebarForm";

import {
  NbfcSection,
  NbfcContainer,
  NbfcMain,
  NbfcByline,
  FeatureGrid,
  FeatureCard,
  ComparisonTable,
  NbfcSidebar,
  Callout,
  BackToTopButton,
} from "./NbfcRegistration.styles.js";

const NbfcRegistration = () => {
  const [isBackToTopVisible, setBackToTopVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setBackToTopVisible(true);
      } else {
        setBackToTopVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDownloadClick = (e) => {
    e.preventDefault();
    alert("Template not available for download at the moment.");
  };

  return (
    <>
      <Header />
      <ServiceHero
        title="NBFC Registration, Compliance & Advisory"
        subtitle="Comprehensive support for NBFC formation, RBI registration, compliance, policies and dispute resolution"
        breadcrumb="NBFC Registration"
      />

      <NbfcSection>
        <NbfcContainer>
          <NbfcMain>
            <h1>NBFC Registration, Compliance & Advisory</h1>
            <NbfcByline>
              Comprehensive support for NBFC formation, RBI registration,
              compliance, policies and dispute resolution
            </NbfcByline>

            <div
              className="section-lottie"
              style={{ width: "360px", height: "220px", margin: "28px auto" }}
            ></div>

            <p>
              Our NBFC practice provides end-to-end advisory — entity selection,
              promoter net worth structuring, RBI registration under Section
              45-IA, policy drafting (KYC, AML), capital adequacy checks,
              ongoing regulatory returns and representation before authorities.
            </p>

            <h2 id="services">Key Services</h2>
            <FeatureGrid>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fa-solid fa-building-columns"></i>
                </div>
                <h4>RBI Registration</h4>
                <p>
                  Prepare and file the NBFC application, annexures, board and
                  shareholder documentation for RBI assessment.
                </p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fa-solid fa-sitemap"></i>
                </div>
                <h4>Entity & Capital Structuring</h4>
                <p>
                  Advisory on promoter contributions, net-owned fund
                  calculations and compliance thresholds.
                </p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fa-solid fa-file-signature"></i>
                </div>
                <h4>Policy & Controls</h4>
                <p>
                  Drafting credit policy, KYC/AML framework, internal control
                  manuals and Board governance schedules.
                </p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fa-solid fa-gavel"></i>
                </div>
                <h4>Dispute Resolution</h4>
                <p>
                  Arbitration, mediation, recovery strategies and enforcement of
                  awards for NBFC receivables.
                </p>
              </FeatureCard>
            </FeatureGrid>

            <h3 id="documents">Documents & Attachments</h3>
            <ComparisonTable>
              <thead>
                <tr>
                  <th>Document</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Board resolution, MOA/AOA</td>
                  <td>Corporate authority for RBI application</td>
                </tr>
                <tr>
                  <td>Audited financials / net worth certificate</td>
                  <td>Promoter capital verification</td>
                </tr>
                <tr>
                  <td>KYC documents of promoters & directors</td>
                  <td>AML/KYC compliance</td>
                </tr>
                <tr>
                  <td>Business plan & projected financials</td>
                  <td>RBI fit-and-proper assessment</td>
                </tr>
              </tbody>
            </ComparisonTable>

            <h3 id="process">Registration & Compliance Process</h3>
            <ol>
              <li>Entity formation and board approvals</li>
              <li>Preparation of net worth and financial documents</li>
              <li>File RBI application with annexures</li>
              <li>Respond to RBI clarifications and inspections</li>
              <li>Post-registration implementation of compliance calendar</li>
            </ol>

            <h2 id="arbitration-matrimonial">
              Arbitration & Matrimonial-style Dispute Support
            </h2>
            <p>
              We integrate commercial dispute resolution with
              family/relationship issues where financial arrangements intersect
              — drafting settlement frameworks, arbitration clauses, fiduciary
              dispute resolution, and representation.
            </p>
            <div
              className="section-lottie"
              style={{ width: "360px", height: "220px", margin: "28px auto" }}
            ></div>

            <h3 id="fees">Fees & Indicative Charges</h3>
            <p>
              Fees vary by scope. Indicative ranges are listed below for
              guidance.
            </p>
            <ComparisonTable>
              <thead>
                <tr>
                  <th>Activity</th>
                  <th>Indicative Fee (INR)</th>
                  <th>Timeline</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>RBI Registration (end-to-end)</td>
                  <td>₹75,000 - ₹2,50,000</td>
                  <td>4-12 weeks</td>
                </tr>
                <tr>
                  <td>Policy drafting (KYC, AML)</td>
                  <td>₹15,000 - ₹60,000</td>
                  <td>1-3 weeks</td>
                </tr>
                <tr>
                  <td>Net worth & auditor liaison</td>
                  <td>₹8,000 - ₹25,000</td>
                  <td>1-2 weeks</td>
                </tr>
                <tr>
                  <td>Arbitration / dispute (per matter)</td>
                  <td>Starts at ₹50,000</td>
                  <td>Depends on proceedings</td>
                </tr>
              </tbody>
            </ComparisonTable>

            <h3 id="templates">Downloadable Templates</h3>
            <ul>
              <li>
                <a href="#" onClick={handleDownloadClick}>
                  RBI Application Checklist (PDF)
                </a>
              </li>
              <li>
                <a href="#" onClick={handleDownloadClick}>
                  Board Resolution Template (DOCX)
                </a>
              </li>
              <li>
                <a href="#" onClick={handleDownloadClick}>
                  Credit Policy Template (DOCX)
                </a>
              </li>
            </ul>

            <h3 id="faq">Frequently Asked Questions</h3>
            <FeatureGrid>
              <FeatureCard>
                <h4>What qualifies as an NBFC?</h4>
                <p>
                  Businesses engaged in loan/advances, hire-purchase, investment
                  activities etc. are typically NBFCs and require RBI oversight.
                </p>
              </FeatureCard>
              <FeatureCard>
                <h4>How long is registration?</h4>
                <p>
                  Typically 4–12 weeks, depending on document readiness and RBI
                  processing.
                </p>
              </FeatureCard>
              <FeatureCard>
                <h4>Are companies with foreign investment allowed?</h4>
                <p>
                  Foreign investment is subject to FEMA and RBI approvals in
                  certain categories; we advise on permissibility.
                </p>
              </FeatureCard>
              <FeatureCard>
                <h4>Do you assist with audits?</h4>
                <p>
                  Yes — we coordinate statutory and internal audits and help
                  remediate findings.
                </p>
              </FeatureCard>
            </FeatureGrid>

            <h2 id="contact">Get started with our NBFC team</h2>
            <Callout>
              <p>
                Contact our NBFC specialists for a no-obligation discussion. We
                will map the fastest route to registration and compliance based
                on your business model.
              </p>
            </Callout>
          </NbfcMain>

          <NbfcSidebar>
            <SidebarForm />
          </NbfcSidebar>
        </NbfcContainer>
      </NbfcSection>

      <Footer />

      <BackToTopButton
        className={isBackToTopVisible ? "visible" : ""}
        onClick={scrollToTop}
      >
        <i className="fas fa-chevron-up"></i>
      </BackToTopButton>
    </>
  );
};

export default NbfcRegistration;
