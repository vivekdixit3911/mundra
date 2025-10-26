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

  // Refs and state for sticky sidebar fallback (JS) — keeps sidebar visible while scrolling
  const containerRef = useRef(null);
  const sidebarRef = useRef(null);
  const [fixedSidebarStyle, setFixedSidebarStyle] = useState(null);
  const topOffset = 100; // adjust to match header height

  useEffect(() => {
    const handleScroll = () => {
      setBackToTopVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // JS fallback to make sidebar follow user when CSS sticky isn't sufficient
  useEffect(() => {
    const el = sidebarRef.current;
    const container = containerRef.current;
    if (!el || !container) return;

    function update() {
      const wrapperRect = el.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const sidebarHeight = el.offsetHeight;
      const containerTop = containerRect.top + window.scrollY;
      const containerBottom = containerTop + container.offsetHeight;
      const scrollY = window.scrollY;

      // When scrolled past the top of sidebar, and before reaching container bottom
      if (scrollY + topOffset > containerTop && scrollY + topOffset + sidebarHeight < containerBottom) {
        setFixedSidebarStyle({
          position: 'fixed',
          top: `${topOffset}px`,
          width: `${el.offsetWidth}px`,
        });
      } else if (scrollY + topOffset + sidebarHeight >= containerBottom) {
        // Stick to bottom of container
        const bottomPos = containerBottom - sidebarHeight - containerTop;
        setFixedSidebarStyle({
          position: 'absolute',
          top: `${bottomPos}px`,
          width: `${el.offsetWidth}px`,
        });
      } else {
        setFixedSidebarStyle(null);
      }
    }

    update();
    window.addEventListener('scroll', update);
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [containerRef, sidebarRef]);

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

      <PatentSection>
        <PatentContainer ref={containerRef}>
          <PatentMain ref={refs.overview}>
            <h1>Patent Registration in India</h1>
            <PatentByline>Protect your invention — file a patent</PatentByline>

            <p>
              A patent grants exclusive rights to an inventor for a limited
              period in exchange for public disclosure of the invention. Filing
              a patent in India involves careful drafting, classification,
              prosecution and enforcement strategy to secure strong protection.
            </p>

            <h2>Who can file?</h2>
            <p>
              Individuals, companies and legal entities who are the true inventors
              or their assignees can apply. Foreign applicants can file through
              a local agent or via the PCT route.
            </p>

            <h2>What is patentable?</h2>
            <p>
              Patentable subject matter includes novel inventions with inventive
              step and industrial applicability — processes, machines, compositions
              of matter or improvements thereof. Abstract ideas, scientific
              theories, and mere discoveries of naturally occurring substances are
              excluded.
            </p>

            <h2>Documents Required</h2>
            <FeatureGrid>
              <FeatureCard>
                <h4>Patent Specification</h4>
                <p>Complete specification with claims and drawings (if any).</p>
              </FeatureCard>
              <FeatureCard>
                <h4>Form 1 / 2 / 3</h4>
                <p>Application forms, provisional/complete filing and priority docs.</p>
              </FeatureCard>
              <FeatureCard>
                <h4>Power of Attorney</h4>
                <p>Authorisation for agent to represent the applicant before the office.</p>
              </FeatureCard>
            </FeatureGrid>

            <h2>Step-by-step Filing Process</h2>
            <ol>
              <li>Conduct novelty and patentability search.</li>
              <li>Draft provisional or complete specification.</li>
              <li>File application (Form 1 / 2 / 3 as necessary).</li>
              <li>Request examination (Form 18) within statutory timelines.</li>
              <li>Respond to examination report and objections via hearing if required.</li>
              <li>Upon acceptance, complete publication and grant formalities.</li>
            </ol>

            <h2>Timelines &amp; Costs</h2>
            <p>
              Timelines vary: provisional filings provide a 12-month window to
              file a complete specification. Examination timelines depend on
              queue and priority; expedited options are available for start-ups
              and small entities. Government fees vary by applicant type (individual,
              small entity, others).
            </p>

            <h2>Post-grant &amp; Enforcement</h2>
            <p>
              Once granted, a patent can be enforced against infringers. Patents
              must be maintained with annual renewal fees. Licensing and
              assignments can monetise the IP.
            </p>

            <h2>Why choose Mundra Legal</h2>
            <HighlightBox>
              <strong>End-to-end support:</strong> searches, drafting, filing,
              prosecution and enforcement. Our team helps tailor claims for
              commercial strength and investor-readiness.
            </HighlightBox>

            <h2>PCT &amp; Foreign Filings</h2>
            <p>
              For global protection, inventors can file via the PCT route which
              preserves filing date across member states and gives time to
              strategise national phase entries. Mundra coordinates international
              filings with our foreign associates.
            </p>

            <h2>Expedited Examination</h2>
            <p>
              India offers expedited examination for start-ups, small entities and
              patentees meeting certain conditions — this shortens prosecution
              timelines significantly.
            </p>

            <h2>Drafting Tips</h2>
            <ul>
              <li>Define the inventive concept clearly and prepare examples (embodiments).</li>
              <li>Use claims of varying scope (independent + dependent) to protect core and fallback features.</li>
              <li>Include clear drawings and working examples to support enablement.</li>
            </ul>

            <h2>Common Pitfalls</h2>
            <ul>
              <li>Overly narrow claims that leave room for easy design-arounds.</li>
              <li>Late priority claims or missed deadlines in PCT/national phases.</li>
              <li>Poorly described embodiments that fail enablement tests.</li>
            </ul>

            <h2>Indicative Fees</h2>
            <ComparisonTable>
              <thead>
                <tr><th>Item</th><th>Typical Govt Fee (INR)</th></tr>
              </thead>
              <tbody>
                <tr><td>Provisional filing</td><td>1,600 - 4,000</td></tr>
                <tr><td>Complete specification filing</td><td>4,000 - 8,000</td></tr>
                <tr><td>Examination request</td><td>4,000 - 8,000</td></tr>
              </tbody>
            </ComparisonTable>
          </PatentMain>

          <PatentSidebar>
            <SidebarWrapper ref={sidebarRef} style={fixedSidebarStyle || undefined}>
              {/* <QuickLinksBar>
                <button onClick={() => scrollToRef('overview')}>Overview</button>
                <button onClick={() => scrollToRef('whoCanFile')}>Who can file</button>
                <button onClick={() => scrollToRef('steps')}>Process</button>
              </QuickLinksBar> */}

              <HighlightBox>
                <h4>Ready to file?</h4>
                <p>Share your invention details and we will get back with an action plan.</p>
              </HighlightBox>

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
