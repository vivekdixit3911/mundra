import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import SidebarForm from "../../components/SidebarForm";
import LottieAnimation from "../../components/LottieAnimation";
import {
  LitigationSection,
  LitigationContainer,
  LitigationMain,
  TopicGrid,
  TopicCard,
  LottieWrap,
  Sidebar,
  SidebarStick,
  TimelineTable,
  FAQTable,
} from "./LitigationServices.styles";


const LitigationServices = () => {
  const processRef = useRef(null);
  const typesRef = useRef(null);
  const faqRef = useRef(null);
  const containerRef = useRef(null);
  const sidebarRef = useRef(null);
  const [isNarrow, setIsNarrow] = useState(false);
  const [fixedStyle, setFixedStyle] = useState({});

  const handleScroll = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.5/dist/dotlottie-wc.js";
    script.type = "module";
    document.body.appendChild(script);

    const faders = document.querySelectorAll(".fade-in");
    const appearOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    };
    const appearOnScroll = new IntersectionObserver(function (
      entries,
      appearOnScroll,
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      });
    }, appearOptions);

    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });

    // Sidebar sticky fallback (only on wider viewports)
    const DEFAULT_TOP = 110;
    const handleResize = () => {
      const narrow = window.innerWidth <= 820;
      setIsNarrow(narrow);
      if (narrow) setFixedStyle({});
      // clear width style when resizing so next calc is correct
    };

    const handleScroll = () => {
      if (!containerRef.current || !sidebarRef.current) return;
      if (window.innerWidth <= 820) return;

      const headerEl = document.querySelector('header');
      const headerHeight = headerEl ? headerEl.getBoundingClientRect().height : DEFAULT_TOP;
      const topOffset = headerHeight + 12; // small gap under the header

      const containerRect = containerRef.current.getBoundingClientRect();
      const sidebarRect = sidebarRef.current.getBoundingClientRect();
      const sidebarHeight = sidebarRef.current.offsetHeight;

      const containerTopAbs = containerRect.top + window.scrollY;
      const containerBottomAbs = containerTopAbs + containerRef.current.offsetHeight;
      const scrollTop = window.scrollY;
      const sidebarTopAbs = sidebarRect.top + window.scrollY;

      // If we've scrolled past the point where sidebar would be under the header
      if (scrollTop + topOffset > sidebarTopAbs) {
        // If pinning would push the sidebar below the container bottom, switch to absolute pinned at container bottom
        if (scrollTop + topOffset + sidebarHeight > containerBottomAbs) {
          const topRelative = containerRef.current.offsetHeight - sidebarHeight - 8; // 8px padding guard
          const leftRelative = sidebarRect.left - containerRect.left;
          setFixedStyle({
            position: 'absolute',
            top: `${topRelative}px`,
            left: `${leftRelative}px`,
            width: `${sidebarRect.width}px`,
          });
        } else {
          // Pin fixed to viewport just below header
          setFixedStyle({
            position: 'fixed',
            top: `${topOffset}px`,
            left: `${sidebarRect.left}px`,
            width: `${sidebarRect.width}px`,
          });
        }
      } else {
        // Reset to natural flow
        setFixedStyle({});
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBrochureDownload = () => {
    alert("Brochure not available. Please request via the contact form.");
  };

  return (
    <>
      <style>{`
                .fade-in {
                    opacity: 0;
                    transition: opacity 0.6s ease-in, transform 0.6s ease-in;
                    transform: translateY(20px);
                }
                .appear {
                    opacity: 1;
                    transform: translateY(0);
                }
            `}</style>
      <Header />
      <ServiceHero
        title="Litigation Services at Mundra Legal"
        subtitle="Expert Legal Representation Across India"
        breadcrumb="Litigation Services"
      />

      <LitigationSection>
        <LitigationContainer ref={containerRef}>
          <LitigationMain>
            <h1>Litigation Services</h1>
            <p>
              Litigation is the formal process of resolving legal disputes through the
              judicial system. It involves filing a case, presenting evidence,
              examining witnesses, and securing a verdict. At Mundra Legal we provide
              end-to-end support — from case assessment and documentation to court
              representation and enforcement.
            </p>

            <h2>Types of Litigation We Handle</h2>
            <TopicGrid>
              <TopicCard>
                <h4>Civil Litigation</h4>
                <p>Contract breaches, property disputes, recovery of money, defamation, family and inheritance cases.</p>
              </TopicCard>
              <TopicCard>
                <h4>Commercial Litigation</h4>
                <p>Breach of contract, partnership conflicts, corporate fraud, trade disputes, arbitration.</p>
              </TopicCard>
              <TopicCard>
                <h4>Divorce & Family Litigation</h4>
                <p>Mutual and contested divorce, custody, alimony, asset disputes.</p>
              </TopicCard>
              <TopicCard>
                <h4>Real Estate & RERA Litigation</h4>
                <p>Delayed projects, builder-buyer disputes, title conflicts and RERA petitions.</p>
              </TopicCard>
              <TopicCard>
                <h4>POSH & Employment Law</h4>
                <p>Policy drafting, internal investigations, representation and compliance.</p>
              </TopicCard>
              <TopicCard>
                <h4>Consumer Protection</h4>
                <p>Defective products, poor services, unfair trade practices and consumer court representation.</p>
              </TopicCard>
              <TopicCard>
                <h4>Property & Land Disputes</h4>
                <p>Title, possession, encroachments, partition disputes and registration issues.</p>
              </TopicCard>
              <TopicCard>
                <h4>Corporate & Shareholder Litigation</h4>
                <p>Fiduciary breaches, minority oppression, regulatory investigations and recovery suits.</p>
              </TopicCard>
              <TopicCard>
                <h4>IP & Patent Litigation</h4>
                <p>Trademark, copyright, patent disputes, and trade secret misappropriation matters.</p>
              </TopicCard>
            </TopicGrid>

            <LottieWrap>
              <LottieAnimation animationPath={'/assets/Drafts/Business.json'} />
            </LottieWrap>

            <h2>Civil Litigation — What we cover</h2>
            <p>
              Our civil practice includes contract enforcement, property and partition matters,
              recovery suits, defamation, tort claims, and family & inheritance disputes.
            </p>

            <h3>Common civil matters</h3>
            <ul>
              <li>Contract breaches and agreement disputes — drafting pleadings and pursuing remedies.</li>
              <li>Property ownership and partition — title verification, surveys and possession suits.</li>
              <li>Recovery of money and damages — execution proceedings and recovery tribunals.</li>
              <li>Defamation and reputation protection — injunctive relief and damages recovery.</li>
              <li>Family & inheritance disputes — testamentary issues, partition and civil remedies.</li>
            </ul>

            <h2>Litigation Process & Typical Timeline</h2>
            <TimelineTable>
              <thead>
                <tr><th>Stage</th><th>What Happens</th><th>Typical Timeframe</th></tr>
              </thead>
              <tbody>
                <tr><td>Consultation & Case Assessment</td><td>Case evaluation, initial advice, document checklist</td><td>1–7 days</td></tr>
                <tr><td>Drafting & Filing</td><td>Drafting plaint/petition, affidavits and filing in appropriate forum</td><td>1–3 weeks</td></tr>
                <tr><td>Interim Orders & Hearings</td><td>Applications for interim relief or injunctions</td><td>Weeks to months</td></tr>
                <tr><td>Evidence & Trial</td><td>Witness statements, cross-examination and evidence presentation</td><td>Months to years</td></tr>
                <tr><td>Judgment & Execution</td><td>Final orders and enforcement steps</td><td>Months</td></tr>
              </tbody>
            </TimelineTable>

            <h2>Why Choose Mundra Legal</h2>
            <ul>
              <li>Streamlined litigation process from consultation to resolution.</li>
              <li>Strong representation by domain-specific advocates.</li>
              <li>Transparent fees and predictable engagement terms.</li>
              <li>Secure handling of confidential documents and data.</li>
              <li>Access to experts across multiple jurisdictions in India.</li>
            </ul>

            <h2>Frequently Asked Questions (FAQs)</h2>
            <FAQTable>
              <tbody>
                <tr>
                  <th>What is litigation, and how does it work in India?</th>
                  <td>Litigation is the process of taking legal action through the court system. It involves case filing, hearings, evidence examination and final judgement. Mundra Legal manages the process from start to finish.</td>
                </tr>
                <tr>
                  <th>How long does a litigation case take in India?</th>
                  <td>Duration varies with complexity, court workload and dispute type. We aim to expedite progress through thorough documentation and timely filings.</td>
                </tr>
                <tr>
                  <th>Can I get litigation support online from Mundra Legal?</th>
                  <td>Yes — start your case online via document upload, schedule consultations, and use our virtual case tracking.</td>
                </tr>
                <tr>
                  <th>How is a litigation lawyer different from a corporate lawyer?</th>
                  <td>A litigation lawyer represents clients in court while a corporate lawyer focuses on compliance, contracts and advisory work. Mundra Legal has both teams.</td>
                </tr>
                <tr>
                  <th>What is the difference between litigation and arbitration?</th>
                  <td>Litigation is court-based and leads to a judgement; arbitration is private and leads to an enforceable award. We offer both services.</td>
                </tr>
                <tr>
                  <th>How much does litigation cost at Mundra Legal?</th>
                  <td>Costs depend on case complexity, jurisdiction and representation type. We provide transparent estimates with no hidden fees.</td>
                </tr>
              </tbody>
            </FAQTable>

          </LitigationMain>

          <Sidebar>
            <SidebarStick ref={sidebarRef} style={isNarrow ? {} : fixedStyle}>
              <SidebarForm />
            </SidebarStick>
          </Sidebar>

        </LitigationContainer>
      </LitigationSection>
      <Footer />
    </>
  );
};

export default LitigationServices;

