import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import SidebarForm from "../../components/SidebarForm";

import {
  PatentSection,
  PatentContainer,
  PatentMain,
  PatentByline,
  ComparisonTable,
  FeatureGrid,
  FeatureCard,
  PatentSidebar,
  SidebarWrapper,
  HighlightBox,
  QuickLinksBar,
  BackToTopButton,
} from "./PatentFiling.styles.js";

const PatentFiling = () => {
  const [isBackToTopVisible, setBackToTopVisible] = useState(false);

  // Refs for smooth scrolling
  const refs = {
    overview: useRef(null),
    whoCanFile: useRef(null),
    patentable: useRef(null),
    documents: useRef(null),
    steps: useRef(null),
    benefits: useRef(null),
    faqs: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      setBackToTopVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToRef = (refName) => {
    if (refs[refName] && refs[refName].current) {
      refs[refName].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <Header />
      <ServiceHero
        title="Patent Registration in India"
        subtitle="Process, documents, timelines, and strategic advice from Mundra Legal. Protect your invention and attract investors."
        breadcrumb="Patent Filing"
      />

      <QuickLinksBar>
        <a onClick={() => scrollToRef("overview")}>Overview</a>
        <a onClick={() => scrollToRef("whoCanFile")}>Who Can File</a>
        <a onClick={() => scrollToRef("patentable")}>Patentable</a>
        <a onClick={() => scrollToRef("documents")}>Documents</a>
        <a onClick={() => scrollToRef("steps")}>Process</a>
        <a onClick={() => scrollToRef("benefits")}>Why File</a>
        <a onClick={() => scrollToRef("faqs")}>FAQs</a>
        <a onClick={() => scrollToRef("contact")} className="cta-link">
          Get Started
        </a>
      </QuickLinksBar>

      <PatentSection>
        <PatentContainer>
          <PatentMain>
            <h1 ref={refs.overview}>Patent Registration in India</h1>
            <PatentByline>
              Protect your invention, attract investors, and create licensing
              opportunities — patent registration is a strategic business move.
            </PatentByline>

            <p>
              A patent is a legal recognition granted by the government to an
              inventor, giving exclusive rights to make, use, sell, or license
              their invention. It prevents others—individuals or companies—from
              exploiting the invention without permission.
            </p>

            <h2 ref={refs.whoCanFile}>Who Can File a Patent in India?</h2>
            <ComparisonTable>
              <thead>
                <tr>
                  <th>Applicant Type</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Individual Inventors</td>
                  <td>
                    Startup founders, researchers, or independent inventors.
                  </td>
                </tr>
                <tr>
                  <td>Companies/Institutions</td>
                  <td>Organizations funding R&D can file patents.</td>
                </tr>
                <tr>
                  <td>Assignees</td>
                  <td>
                    When inventors transfer patent rights to another party.
                  </td>
                </tr>
                <tr>
                  <td>Heirs or Legal Representatives</td>
                  <td>In case the original inventor is deceased.</td>
                </tr>
              </tbody>
            </ComparisonTable>

            <h2 ref={refs.patentable}>
              Patentable vs Non-Patentable Inventions
            </h2>
            <ComparisonTable>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Details</th>
                  <th>Example/Case</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Patentable</td>
                  <td>
                    Must be new, show an inventive step, and have industrial
                    application.
                  </td>
                  <td>Innovative device or chemical process.</td>
                </tr>
                <tr>
                  <td>Non-Patentable</td>
                  <td>
                    Agricultural methods, medical treatments, natural
                    discoveries, atomic energy inventions.
                  </td>
                  <td>
                    Novartis v. Union of India (2013) – Minor improvements are
                    not patentable.
                  </td>
                </tr>
              </tbody>
            </ComparisonTable>

            <h2 ref={refs.documents}>Essential Documents for Filing</h2>
            <ComparisonTable>
              <thead>
                <tr>
                  <th>Form</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Form 1</td>
                  <td>Patent Application</td>
                </tr>
                <tr>
                  <td>Form 2</td>
                  <td>Specification (provisional or complete)</td>
                </tr>
                <tr>
                  <td>Form 3</td>
                  <td>Statement & Undertaking</td>
                </tr>
                <tr>
                  <td>Form 5</td>
                  <td>Declaration of Inventorship</td>
                </tr>
                <tr>
                  <td>Form 26</td>
                  <td>Power of Attorney (if filed through agent)</td>
                </tr>
              </tbody>
            </ComparisonTable>

            <h2 ref={refs.steps}>Step-by-Step Patent Registration Process</h2>
            <ComparisonTable>
              <thead>
                <tr>
                  <th>Step</th>
                  <th>Description</th>
                  <th>Key Points</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Step 1: Invention Disclosure</td>
                  <td>Document invention under NDA.</td>
                  <td>Avoid public disclosure to retain rights.</td>
                </tr>
                <tr>
                  <td>Step 2: Patent Search</td>
                  <td>Conduct patentability search.</td>
                  <td>Prevents filing duplicates; reduces rejection risk.</td>
                </tr>
                <tr>
                  <td>Step 3: Draft Specification</td>
                  <td>Prepare detailed specification.</td>
                  <td>Poor drafting can lead to weak protection.</td>
                </tr>
                <tr>
                  <td>Step 4: File Application</td>
                  <td>Provisional (if idea developing) or Complete.</td>
                  <td>Provisional secures early priority.</td>
                </tr>
                <tr>
                  <td>Step 5: Publication</td>
                  <td>Automatic after 18 months.</td>
                  <td>Early publication can be requested.</td>
                </tr>
                <tr>
                  <td>Step 6: Request for Examination</td>
                  <td>File within 48 months of application.</td>
                  <td>Delays can lead to rejection.</td>
                </tr>
                <tr>
                  <td>Step 7: FER & Objections</td>
                  <td>Respond to First Examination Report (FER).</td>
                  <td>Timely responses are critical.</td>
                </tr>
                <tr>
                  <td>Step 8: Grant of Patent</td>
                  <td>Patent is granted after objections resolved.</td>
                  <td>Legal protection begins.</td>
                </tr>
                <tr>
                  <td>Step 9: Renewal</td>
                  <td>Annual renewals from year 3 to 20.</td>
                  <td>Mandatory to maintain patent rights.</td>
                </tr>
              </tbody>
            </ComparisonTable>

            <h2 ref={refs.benefits}>Why Filing a Patent is Beneficial</h2>
            <FeatureGrid>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h4>Exclusive Rights</h4>
                <p>Full control over your invention.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-hand-holding-usd"></i>
                </div>
                <h4>Investor Confidence</h4>
                <p>Patents improve startup funding potential.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-file-contract"></i>
                </div>
                <h4>Revenue Generation</h4>
                <p>Licensing or royalties.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-gavel"></i>
                </div>
                <h4>Legal Protection</h4>
                <p>Right to sue infringers.</p>
              </FeatureCard>
            </FeatureGrid>

            <h2 ref={refs.faqs}>FAQs on Patent Registration</h2>
            <HighlightBox>
              <h4>How to get a patent in India?</h4>
              <p>
                Draft an invention disclosure, conduct a patentability search,
                file provisional or complete specification, respond to
                FER/objections, obtain grant, and maintain annual renewals.
              </p>
            </HighlightBox>
            <HighlightBox>
              <h4>How long does it take to get a patent in India?</h4>
              <p>
                Usually 3–5 years; expedited examination is available for
                startups, small entities, and women inventors.
              </p>
            </HighlightBox>
            <HighlightBox>
              <h4>Is a provisional patent application valid in India?</h4>
              <p>
                Yes, it secures priority for 12 months, after which a complete
                application must be filed.
              </p>
            </HighlightBox>

            <div
              ref={refs.contact}
              style={{
                background: "linear-gradient(135deg,#1C2951,#D4AF37)",
                color: "#fff",
                border: "none",
                marginTop: "18px",
                padding: "18px",
                borderRadius: "10px",
              }}
            >
              <h3 style={{ margin: 0, color: "#fff" }}>
                <i className="fas fa-phone-alt"></i> Ready to protect your
                invention?
              </h3>
              <p style={{ margin: "6px 0 0", color: "#fff" }}>
                Contact Mundra Legal for patent searches, drafting and
                prosecution support.
              </p>
            </div>
          </PatentMain>

          <PatentSidebar>
            <SidebarWrapper>
              <SidebarForm />
            </SidebarWrapper>
          </PatentSidebar>
        </PatentContainer>
      </PatentSection>

      <Footer />

      <BackToTopButton
        className={isBackToTopVisible ? "visible" : ""}
        onClick={() => scrollToRef("overview")}
      >
        <i className="fas fa-chevron-up"></i>
      </BackToTopButton>
    </>
  );
};

export default PatentFiling;
