import React, { useRef, useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServiceHero from '../../components/ServiceHero';
import SidebarForm from '../../components/SidebarForm';
import LottieAnimation from '../../components/LottieAnimation';

import {
  CivilSection,
  CivilContainer,
  CivilMain,
  CivilSidebar,
  SidebarStick,
  LottieWrap,
  TopicGrid,
  TopicCard,
} from './CivilAndCriminal.styles.js';

const CivilAndCriminal = () => {
  const containerRef = useRef(null);
  const sidebarRef = useRef(null);
  const [fixedStyle, setFixedStyle] = useState(null);
  const [isNarrow, setIsNarrow] = useState(typeof window !== 'undefined' ? window.innerWidth <= 820 : false);
  const topOffset = 100;

  useEffect(() => {
    function update() {
      const sidebar = sidebarRef.current;
      const container = containerRef.current;
      // update narrow flag
      const narrow = window.innerWidth <= 820;
      setIsNarrow(narrow);
      // Disable JS sticky on small screens to avoid overlapping the main content
      if (narrow) {
        setFixedStyle(null);
        return;
      }
      if (!sidebar || !container) return;
      const sidebarHeight = sidebar.offsetHeight;
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top + window.scrollY;
      const containerBottom = containerTop + container.offsetHeight;
      const scrollY = window.scrollY;

      if (scrollY + topOffset > containerTop && scrollY + topOffset + sidebarHeight < containerBottom) {
        setFixedStyle({ position: 'fixed', top: `${topOffset}px`, width: `${sidebar.offsetWidth}px` });
      } else if (scrollY + topOffset + sidebarHeight >= containerBottom) {
        const bottomPos = containerBottom - sidebarHeight - containerTop;
        setFixedStyle({ position: 'absolute', top: `${bottomPos}px`, width: `${sidebar.offsetWidth}px` });
      } else {
        setFixedStyle(null);
      }
    }

    update();
    window.addEventListener('scroll', update);
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <>
      <Header />

      <ServiceHero
        title="Civil & Criminal Law"
        subtitle="Comprehensive litigation, arbitration, criminal defense and family law services."
        breadcrumb="Civil & Criminal Law"
      />

      <CivilSection>
        <CivilContainer ref={containerRef}>
          <CivilMain>
            <h1>Civil & Criminal Law Services</h1>
            <p>
              Mundra Legal offers robust representation across civil, criminal,
              family and arbitration matters. Our litigators combine courtroom
              experience with commercial understanding to protect your rights and
              resolve disputes efficiently.
            </p>

            <h2>Our Practice Areas</h2>
            <TopicGrid>
              <TopicCard>
                <h4>Civil Litigation</h4>
                <p>Suit filing, injunctions, contractual disputes and recovery actions.</p>
              </TopicCard>
              <TopicCard>
                <h4>Criminal Defense</h4>
                <p>Bail applications, trial representation, appeals and white-collar defense.</p>
              </TopicCard>
              <TopicCard>
                <h4>Family Law</h4>
                <p>Divorce, maintenance, custody and mediation services.</p>
              </TopicCard>
              <TopicCard>
                <h4>Arbitration & ADR</h4>
                <p>Arbitral filings, enforcement and representation in domestic & international arbitrations.</p>
              </TopicCard>
            </TopicGrid>

            <h2>Detailed Services</h2>
            <h3>Court Representation</h3>
            <p>Experienced advocates represent clients in civil and criminal courts at all levels.</p>

            <h3>Bail & Emergency Relief</h3>
            <p>Quick response teams for bail applications and urgent interlocutory relief.</p>

            <h3>Drafting & Pleadings</h3>
            <p>Precise pleadings, petitions, complaints and legal opinions tailored to case strategy.</p>

            <h3>Appeals & Review</h3>
            <p>Strategic appellate practice including drafting and oral advocacy before higher courts.</p>

            <LottieWrap>
              <LottieAnimation animationPath="/assets/Drafts/Office illustration.json" />
            </LottieWrap>

            <h2>Frequently Asked Questions</h2>
            <h3>How quickly can you get bail?</h3>
            <p>We prioritise emergency relief and can prepare and file urgent bail applications within hours depending on court timings and case complexity.</p>

            <h3>Do you handle cross-border enforcement?</h3>
            <p>Yes — for matters involving foreign parties or assets, we coordinate with foreign counsel to pursue enforcement and recognition of orders abroad.</p>

            <h3>What is your fee structure?</h3>
            <p>Fees vary by case type and complexity. We offer initial consultations and can provide a fee estimate after reviewing the matter. For litigations, we provide phased billing aligned to milestones.</p>

            <h2>Case Studies</h2>
            <h3>Commercial Injunction</h3>
            <p>Obtained urgent interim injunction for a client preventing misuse of trade secrets by a former partner — matter resolved via settlement within weeks.</p>

            <h3>Criminal Appeal Victory</h3>
            <p>Successfully overturned conviction in appellate court where fresh evidence and procedural lapse were established.</p>

            <div style={{ marginTop: 20, padding: 18, borderRadius: 12, background: '#fff', border: '1px solid rgba(16,24,40,0.04)' }}>
              <h3 style={{ marginTop: 0 }}>Ready to discuss your matter?</h3>
              <p style={{ marginBottom: 8 }}>Use the form to the right to share basic details — we'll follow up to arrange a confidential consultation.</p>
            </div>
          </CivilMain>

          <CivilSidebar>
            <SidebarStick ref={sidebarRef} style={!isNarrow && fixedStyle ? fixedStyle : undefined}>
              <div style={{ marginBottom: 12 }}>
                <h4 style={{ margin: 0, color: '#1C2951' }}>Get Legal Assistance</h4>
                <p style={{ margin: '6px 0 0', color: '#64748b' }}>Fill a quick form and our team will contact you.</p>
              </div>
              <SidebarForm />
            </SidebarStick>
          </CivilSidebar>
        </CivilContainer>
      </CivilSection>

      <Footer />
    </>
  );
};

export default CivilAndCriminal;
