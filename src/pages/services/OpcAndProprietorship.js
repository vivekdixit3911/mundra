import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import SidebarForm from "../../components/SidebarForm";

import {
  OpcSection,
  OpcContainer,
  OpcMain,
  Byline,
  ComparisonTable,
  OpcSidebar,
  SidebarWrapper,
  QuickLinksNav,
  BackToTopButton,
} from "./OpcAndProprietorship.styles.js";

const OpcAndProprietorship = () => {
  const [isQuickLinksVisible, setQuickLinksVisible] = useState(false);
  const [isBackToTopVisible, setBackToTopVisible] = useState(false);

  const heroRef = useRef(null);

  // Refs for smooth scrolling
  const overviewRef = useRef(null);
  const featuresRef = useRef(null);
  const comparisonRef = useRef(null);
  const procedureRef = useRef(null);
  const documentsRef = useRef(null);
  const faqRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        setQuickLinksVisible(heroBottom < 120);
      }
      setBackToTopVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToRef = (ref) => {
    if (ref.current) {
      const offset = 80;
      const top =
        ref.current.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <div ref={heroRef}>
        <ServiceHero
          title="OPC vs Sole Proprietorship — Detailed Comparison"
          subtitle="Liability, compliance, taxation, succession and growth considerations explained."
          breadcrumb="OPC vs Proprietorship"
        />
      </div>

      <QuickLinksNav className={isQuickLinksVisible ? "visible" : ""}>
        <div className="ql-container">
          <a onClick={() => scrollToRef(overviewRef)}>Overview</a>
          <a onClick={() => scrollToRef(featuresRef)}>Features</a>
          <a onClick={() => scrollToRef(comparisonRef)}>Comparison</a>
          <a onClick={() => scrollToRef(procedureRef)}>Procedure</a>
          <a onClick={() => scrollToRef(documentsRef)}>Documents</a>
          <a onClick={() => scrollToRef(faqRef)}>FAQ</a>
          <a onClick={scrollToTop}>Top</a>
        </div>
      </QuickLinksNav>

      <OpcSection ref={overviewRef}>
        <OpcContainer>
          <OpcMain>
            <h1>OPC vs Sole Proprietorship — Detailed Comparison</h1>
            <Byline>
              Choosing between an OPC and a Sole Proprietorship — liability,
              compliance, taxation, succession and growth considerations
              explained.
            </Byline>

            <h2 ref={featuresRef}>What is a One Person Company (OPC)?</h2>
            <p>
              An OPC is a corporate entity for a single entrepreneur, offering
              limited liability and many benefits of a private company while
              allowing single ownership.
            </p>

            <h3>Key Characteristics of OPCs</h3>
            <ul>
              <li>
                <strong>Single Ownership:</strong> One member/promoter acts as
                the sole director and shareholder.
              </li>
              <li>
                <strong>Limited Liability:</strong> Personal assets are
                generally protected from company debts.
              </li>
              <li>
                <strong>Nominee Requirement:</strong> A nominee must be
                appointed to take over if the member dies or is incapacitated.
              </li>
              <li>
                <strong>Corporate Credibility:</strong> Easier to build trust
                with customers and lenders.
              </li>
              <li>
                <strong>Flexibility:</strong> OPCs can convert to Private
                Limited Companies when needed for fundraising or expansion.
              </li>
            </ul>

            <h2>What is a Sole Proprietorship?</h2>
            <p>
              A sole proprietorship is the simplest business structure where the
              owner and business are the same legal entity. It is easy to form
              and requires minimal compliance, but exposes the owner to
              unlimited personal liability.
            </p>

            <h3>Key Characteristics of Sole Proprietorship</h3>
            <ul>
              <li>
                <strong>Unlimited Liability:</strong> Owner is personally
                responsible for all business debts and obligations.
              </li>
              <li>
                <strong>Complete Control:</strong> Owner makes all decisions and
                manages operations directly.
              </li>
              <li>
                <strong>Ease of Formation:</strong> Minimal formalities—often
                only local registrations like Shops & Establishment and GST as
                applicable.
              </li>
              <li>
                <strong>Limited Continuity:</strong> Business usually ceases on
                the owner's death or incapacity.
              </li>
              <li>
                <strong>Taxation:</strong> Business income is taxed under the
                owner's personal income tax slab rates.
              </li>
            </ul>

            <h2 ref={comparisonRef}>
              OPC vs Sole Proprietorship — Core Differences
            </h2>
            <ComparisonTable>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>OPC</th>
                  <th>Sole Proprietorship</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Legal Status</strong>
                  </td>
                  <td>Separate legal entity under Companies Act, 2013</td>
                  <td>
                    Not separate; the owner and business are the same legal
                    person
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Liability</strong>
                  </td>
                  <td>Limited to capital invested</td>
                  <td>Unlimited personal liability</td>
                </tr>
                <tr>
                  <td>
                    <strong>Formation</strong>
                  </td>
                  <td>MCA registration, SPICe+/ROC filings</td>
                  <td>
                    Minimal — local registrations like Shops & Establishment,
                    GST as applicable
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Succession</strong>
                  </td>
                  <td>Perpetual succession; nominee takes over</td>
                  <td>
                    Business generally ceases on owner’s death or incapacity
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Annual Filings</strong>
                  </td>
                  <td>
                    ROC filings, financial statements, audit (if applicable)
                  </td>
                  <td>
                    Income tax return; GST filing if applicable; bookkeeping
                    recommended
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Raising Capital</strong>
                  </td>
                  <td>Easier due to corporate structure</td>
                  <td>Difficult; investor confidence lower</td>
                </tr>
              </tbody>
            </ComparisonTable>

            <h2 ref={procedureRef}>Step-by-step Incorporation (Typical)</h2>
            <ol>
              <li>
                <strong>Name reservation (RUN/SPICe+ Part A):</strong> Search
                and reserve a unique company name on MCA portal.
              </li>
              <li>
                <strong>DSC & DIN:</strong> Obtain DSC for the promoter and
                apply for DIN if not already available.
              </li>
              <li>
                <strong>File SPICe+ (INC-32):</strong> Prepare and file
                incorporation forms along with e-MoA and e-AoA.
              </li>
              <li>
                <strong>ROC Verification:</strong> ROC reviews submissions; upon
                approval, Certificate of Incorporation is issued.
              </li>
              <li>
                <strong>Post-incorporation:</strong> Apply for PAN, TAN; open
                bank account; register for GST/ESI/EPF as necessary; appoint
                auditor.
              </li>
            </ol>

            <h2 ref={documentsRef}>Documents Required</h2>
            <h3>For Promoter / Director</h3>
            <ul>
              <li>PAN card, Aadhaar (identity & address proof)</li>
              <li>Passport-size photograph</li>
              <li>
                Proof of registered office (sale deed/rent agreement & NOC)
              </li>
              <li>Digital Signature Certificate (DSC)</li>
            </ul>

            <h2 ref={faqRef}>Frequently Asked Questions</h2>
            <div>
              <h4>Who can form an OPC?</h4>
              <p>
                Any Indian citizen resident in India. NRIs face restrictions and
                cannot usually be sole members unless a resident director/member
                is present.
              </p>

              <h4>Can an OPC convert to another company?</h4>
              <p>
                Yes — OPCs can convert to a Private Limited Company when
                turnover or paid-up capital thresholds are exceeded or when the
                promoter wants to bring in additional members/investors.
              </p>

              <h4>How is an OPC taxed?</h4>
              <p>
                As a company under corporate tax rates. Depending on turnover,
                certain presumptive tax schemes or incentives may apply. Owners
                should consult a tax adviser for precise planning as corporate
                tax rules, surcharge and cess can change.
              </p>

              <h4>Does forming an OPC protect personal assets completely?</h4>
              <p>
                Limited liability protects personal assets to a large extent.
                However, in cases of fraud, personal guarantees, or wrongful
                trading, directors/members may still be held personally liable.
                Always maintain proper books and avoid mingling personal and
                company funds.
              </p>
            </div>
          </OpcMain>
          <OpcSidebar>
            <SidebarWrapper>
              <SidebarForm />
            </SidebarWrapper>
          </OpcSidebar>
        </OpcContainer>
      </OpcSection>

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

export default OpcAndProprietorship;
