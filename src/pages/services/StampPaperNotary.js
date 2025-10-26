import React, { useEffect, useRef, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServiceHero from '../../components/ServiceHero';
import SidebarForm from '../../components/SidebarForm';
import LottieAnimation from '../../components/LottieAnimation';
import {
  PageSection,
  PageContainer,
  PageContent,
  TopicGrid,
  TopicCard,
  StepsList,
  LottieWrap,
  Sidebar,
  SidebarStick,
} from './StampPaperNotary.style.js';

const StampPaperNotary = () => {
  const containerRef = useRef(null);
  const sidebarRef = useRef(null);
  const [isNarrow, setIsNarrow] = useState(false);
  const [fixedStyle, setFixedStyle] = useState({});

  useEffect(() => {
    // Load AOS (optional) and dotlottie if needed
    const aosLink = document.createElement('link');
    aosLink.rel = 'stylesheet';
    aosLink.href = 'https://unpkg.com/aos@2.3.1/dist/aos.css';
    document.head.appendChild(aosLink);

    const aosScript = document.createElement('script');
    aosScript.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
    aosScript.async = true;
    document.body.appendChild(aosScript);
    aosScript.onload = () => window.AOS && window.AOS.init && window.AOS.init();

    const dotlottie = document.createElement('script');
    dotlottie.type = 'module';
    dotlottie.src = 'https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.5/dist/dotlottie-wc.js';
    document.head.appendChild(dotlottie);

    // Smooth anchor scrolling
    const handleClick = (e) => {
      const a = e.target.closest && e.target.closest('a[href^="#"]');
      if (a) {
        const href = a.getAttribute('href');
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
    document.addEventListener('click', handleClick);

    // Back-to-top handling
    const btId = 'backToTop';
    const bt = () => document.getElementById(btId);
    const onScroll = () => {
      const btn = bt();
      if (!btn) return;
      if (window.scrollY > 500) btn.classList.add('visible');
      else btn.classList.remove('visible');
    };
    window.addEventListener('scroll', onScroll);
    const onBtClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    const btn = bt();
    if (btn) btn.addEventListener('click', onBtClick);

    // Year updater (if present)
    try { const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear(); } catch (e) {}

    // Sidebar sticky behavior: compute header-based offset, clamp to container bottom
    const DEFAULT_TOP = 110;
    const handleResize = () => {
      const narrow = window.innerWidth <= 820;
      setIsNarrow(narrow);
      if (narrow) setFixedStyle({});
    };

    const handleScroll = () => {
      if (!containerRef.current || !sidebarRef.current) return;
      if (window.innerWidth <= 820) return;

      const headerEl = document.querySelector('header');
      const headerHeight = headerEl ? headerEl.getBoundingClientRect().height : DEFAULT_TOP;
      const topOffset = headerHeight + 12;

      const containerRect = containerRef.current.getBoundingClientRect();
      const sidebarRect = sidebarRef.current.getBoundingClientRect();
      const sidebarHeight = sidebarRef.current.offsetHeight;

      const containerTopAbs = containerRect.top + window.scrollY;
      const containerBottomAbs = containerTopAbs + containerRef.current.offsetHeight;
      const scrollTop = window.scrollY;
      const sidebarTopAbs = sidebarRect.top + window.scrollY;

      if (scrollTop + topOffset > sidebarTopAbs) {
        if (scrollTop + topOffset + sidebarHeight > containerBottomAbs) {
          const topRelative = containerRef.current.offsetHeight - sidebarHeight - 8;
          const leftRelative = sidebarRect.left - containerRect.left;
          setFixedStyle({ position: 'absolute', top: `${topRelative}px`, left: `${leftRelative}px`, width: `${sidebarRect.width}px` });
        } else {
          setFixedStyle({ position: 'fixed', top: `${topOffset}px`, left: `${sidebarRect.left}px`, width: `${sidebarRect.width}px` });
        }
      } else {
        setFixedStyle({});
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', onScroll);
      if (btn) btn.removeEventListener('click', onBtClick);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <ServiceHero
        title="Professional Stamp Paper & Notary Services"
        subtitle="Ensure legal validity and authentication of your important documents with our expert services."
        breadcrumb="Stamp Paper & Notary"
      />

      <PageSection>
        <PageContainer ref={containerRef}>
          <PageContent>
            <h1>Professional Stamp Paper & Notary Services</h1>
            <p>
              Ensure legal validity and authentication of your important documents with our
              expert stamp paper and notarization services. Our certified notaries provide
              stamp paper selection, notarization, and attestation so documents meet legal
              requirements for courts, government offices, and business transactions.
            </p>

            <h2>Why Choose Us</h2>
            <TopicGrid>
              <TopicCard><h4>Certified Notaries</h4><p>Licensed and experienced notary professionals</p></TopicCard>
              <TopicCard><h4>Legal Compliance</h4><p>Ensures all documents meet legal standards</p></TopicCard>
              <TopicCard><h4>Quick Turnaround</h4><p>Same-day service for urgent requirements</p></TopicCard>
            </TopicGrid>

            <h2>Documents We Authenticate</h2>
            <TopicGrid>
              <TopicCard><h4>Agreements & Contracts</h4><p>Partnership deeds, service contracts, NDAs, MOUs.</p></TopicCard>
              <TopicCard><h4>Property Documents</h4><p>Sale deeds, lease agreements, transfers, rental contracts.</p></TopicCard>
              <TopicCard><h4>Personal Documents</h4><p>Affidavits, power of attorney, declarations, undertakings.</p></TopicCard>
              <TopicCard><h4>Corporate Documents</h4><p>Board resolutions, corporate agreements, authorization letters.</p></TopicCard>
              <TopicCard><h4>Educational Documents</h4><p>Degree certificates, mark sheets, transcripts.</p></TopicCard>
              <TopicCard><h4>Identity Documents</h4><p>ID verification, passport applications, visa forms.</p></TopicCard>
            </TopicGrid>

            <LottieWrap>
              <LottieAnimation animationPath={'/assets/Drafts/registration.json'} />
            </LottieWrap>

            <h2>Our Process</h2>
            <StepsList>
              <li>
                <strong>Document Review & Consultation</strong> — Initial review, stamp value check and timeline estimate.
              </li>
              <li>
                <strong>Stamp Paper Procurement</strong> — Procure appropriate state-compliant stamp paper and prepare documents.
              </li>
              <li>
                <strong>Identity Verification</strong> — Verify signatory identity and arrange witnesses if required.
              </li>
              <li>
                <strong>Notarization & Attestation</strong> — Official seal, signature and register entry by certified notary.
              </li>
              <li>
                <strong>Delivery & Support</strong> — Deliver notarized documents and offer post-service guidance.
              </li>
            </StepsList>

            <h2>Requirements</h2>
            <p>Bring original ID, address proof, the document for notarization, supporting documents and photographs. Witness details if required.</p>
          </PageContent>

          <Sidebar>
            <SidebarStick ref={sidebarRef} style={isNarrow ? {} : fixedStyle}>
              <SidebarForm />
            </SidebarStick>
          </Sidebar>

        </PageContainer>
      </PageSection>

      <Footer />
    </>
  );
};

export default StampPaperNotary;
