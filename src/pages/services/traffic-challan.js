import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServiceHero from '../../components/ServiceHero';
import SidebarForm from '../../components/SidebarForm';
import { PageContent } from './traffic-challan.style.js';

const TrafficChallan = () => {
  useEffect(() => {
    // load AOS
    const aosLink = document.createElement('link');
    aosLink.rel = 'stylesheet';
    aosLink.href = 'https://unpkg.com/aos@2.3.1/dist/aos.css';
    document.head.appendChild(aosLink);
    const aosScript = document.createElement('script');
    aosScript.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
    aosScript.async = true;
    document.body.appendChild(aosScript);
    aosScript.onload = () => window.AOS && window.AOS.init && window.AOS.init({ duration: 800, once: true });

    // load dotlottie webcomponent
    const dotlottie = document.createElement('script');
    dotlottie.type = 'module';
    dotlottie.src = 'https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.5/dist/dotlottie-wc.js';
    document.head.appendChild(dotlottie);

    // optional lottie-animations (local public includes)
  const lottieScript = document.createElement('script');
  // Use the bundled lottie helper under /assets to avoid 404 HTML responses
  lottieScript.src = '/assets/lottiefile.js';
  lottieScript.async = true;
  document.body.appendChild(lottieScript);

    // quick-links visibility
    const updateQuickLinks = () => {
      const quick = document.getElementById('quickLinksBar');
      const hero = document.querySelector('.hero') || document.getElementById('hero-placeholder');
      if (!quick || !hero) return;
      const bottom = hero.getBoundingClientRect().bottom;
      if (bottom < 100) quick.classList.add('visible'); else quick.classList.remove('visible');
    };
    window.addEventListener('scroll', updateQuickLinks);
    setTimeout(updateQuickLinks, 500);

    // smooth scrolling for anchors
    const onClick = (e) => {
      const a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      const href = a.getAttribute('href');
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', onClick);

    // back-to-top
    const bt = document.getElementById('backToTop');
    const onScrollBt = () => {
      if (!bt) return;
      if (window.scrollY > 300) bt.classList.add('visible'); else bt.classList.remove('visible');
    };
    window.addEventListener('scroll', onScrollBt);
    if (bt) bt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // sidebar sticky behavior
    const wrapper = () => document.querySelector('.sidebar-scroll-wrapper');
    const container = () => document.querySelector('.traffic-container');
    const updateSidebar = () => {
      const w = wrapper();
      const c = container();
      if (!w || !c) return;
      if (window.innerWidth <= 900) { w.classList.remove('fixed','absolute'); return; }
      const rect = c.getBoundingClientRect();
      const h = w.offsetHeight;
      if (rect.top <= 20 && rect.bottom > h + 40) { w.classList.add('fixed'); w.classList.remove('absolute'); }
      else if (rect.bottom <= h + 40) { w.classList.remove('fixed'); w.classList.add('absolute'); }
      else w.classList.remove('fixed','absolute');
    };
    window.addEventListener('scroll', updateSidebar);
    window.addEventListener('resize', updateSidebar);
    setTimeout(updateSidebar, 600);

    // form handler fallback (SidebarForm handles own submit)
    const onSubmit = (e) => {
      if (e.target && e.target.classList && e.target.classList.contains('quick-form')) {
        e.preventDefault();
        alert('Thank you! We will contact you within 24 hours.');
        e.target.reset();
      }
    };
    document.addEventListener('submit', onSubmit);

    return () => {
      document.removeEventListener('click', onClick);
      window.removeEventListener('scroll', updateQuickLinks);
      window.removeEventListener('scroll', onScrollBt);
      window.removeEventListener('scroll', updateSidebar);
      window.removeEventListener('resize', updateSidebar);
      document.removeEventListener('submit', onSubmit);
      if (bt) bt.removeEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    };
  }, []);

  return (
    <>
      <Header />
      <ServiceHero
        title="Traffic Challan Services"
        subtitle="Legal assistance, fine management & court representation for traffic violations"
        breadcrumb="Traffic Challan"
      />

      <PageContent>
        {/* Quick Links */}
        <nav className="quick-links" id="quickLinksBar" aria-label="Quick jump navigation">
          <div className="ql-container">
            <a href="#overview">Overview</a>
            <a href="#violations">Violations</a>
            <a href="#process">Process</a>
            <a href="#legal-services">Legal Services</a>
            <a href="#documents">Documents</a>
            <a href="#court">Court Support</a>
            <a href="#faq">FAQ</a>
          </div>
        </nav>

        <main id="main-content">
          <section id="traffic-content" className="traffic-section" aria-labelledby="traffic-heading">
            <div className="traffic-container">
              <div className="traffic-main">
                <h1 id="traffic-heading">Traffic Challan Services</h1>
                <p className="traffic-byline">Comprehensive Legal Assistance for Traffic Violations & Challan Management</p>

                <div className="inline-lottie" data-aos="fade-up">
                  <dotlottie-wc src="/assets/lottiefiles/Business.lottie" autoplay loop></dotlottie-wc>
                </div>

                <p>Navigate India's complex traffic violation system with expert legal guidance. Our comprehensive traffic challan services cover everything from challan payment assistance to court representation for serious offenses. We help drivers, vehicle owners, and commercial operators resolve traffic violations efficiently while protecting their driving records and licenses.</p>

                <div className="callout"><p><strong>Expert Support:</strong> Over 500+ traffic cases resolved annually with 95% success rate in challan reductions and license protection.</p></div>

                <h2 id="overview">Traffic Challan Overview</h2>
                <p>Traffic challans are legal notices issued by traffic authorities for violations of the Motor Vehicles Act, 1988, and Central Motor Vehicles Rules, 1989.</p>

                <div className="highlight-box">
                  <h3>Why Choose Our Traffic Challan Services?</h3>
                  <ul>
                    <li><strong>Comprehensive Coverage:</strong> From minor violations to serious offenses requiring court appearance</li>
                    <li><strong>Expert Legal Team:</strong> Traffic law specialists with extensive court experience</li>
                    <li><strong>Time-Saving Solutions:</strong> Efficient challan payment and dispute resolution</li>
                    <li><strong>License Protection:</strong> Prevent suspension and maintain clean driving records</li>
                    <li><strong>Cost-Effective:</strong> Competitive fees with transparent pricing</li>
                  </ul>
                </div>

                <h2 id="violations">Types of Traffic Violations</h2>
                <div className="feature-grid">
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-exclamation-triangle"></i></div><h4>Minor Violations</h4><p>Signal jumping, improper parking, helmet violations.</p></div>
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-car-crash"></i></div><h4>Major Violations</h4><p>Drunken driving, reckless driving.</p></div>
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-truck"></i></div><h4>Commercial Vehicles</h4><p>Overloading, permit violations.</p></div>
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-file-contract"></i></div><h4>Documentation Issues</h4><p>Expired insurance, registration, PUC.</p></div>
                </div>

                <div className="stats-grid">
                  <div className="stat-card"><div className="stat-number">500+</div><div className="stat-label">Cases Resolved</div></div>
                  <div className="stat-card"><div className="stat-number">95%</div><div className="stat-label">Success Rate</div></div>
                  <div className="stat-card"><div className="stat-number">24/7</div><div className="stat-label">Support Available</div></div>
                  <div className="stat-card"><div className="stat-number">15+</div><div className="stat-label">Years Experience</div></div>
                </div>

                <h2 id="process">Challan Resolution Process</h2>
                <div className="process-timeline">
                  <div className="timeline-item"><div className="timeline-marker"><i className="fas fa-search"></i></div><div className="timeline-content"><h4>Case Assessment</h4><p>Review challan details and evidence.</p></div></div>
                  <div className="timeline-item"><div className="timeline-marker"><i className="fas fa-file-alt"></i></div><div className="timeline-content"><h4>Document Collection</h4><p>Gather RC, license, challan copy and evidence.</p></div></div>
                  <div className="timeline-item"><div className="timeline-marker"><i className="fas fa-balance-scale"></i></div><div className="timeline-content"><h4>Legal Strategy</h4><p>Develop custom legal approach.</p></div></div>
                  <div className="timeline-item"><div className="timeline-marker"><i className="fas fa-gavel"></i></div><div className="timeline-content"><h4>Court Representation</h4><p>Advocacy in traffic courts.</p></div></div>
                  <div className="timeline-item"><div className="timeline-marker"><i className="fas fa-check-circle"></i></div><div className="timeline-content"><h4>Resolution & Follow-up</h4><p>Payment processing and closure.</p></div></div>
                </div>

                <h2 id="legal-services">Legal Services Offered</h2>
                <table className="comparison-table">
                  <thead><tr><th>Service Type</th><th>Description</th><th>Timeline</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Challan Contest</strong></td><td>Legal challenge against issued challan</td><td>15-30 days</td></tr>
                    <tr><td><strong>Fine Reduction</strong></td><td>Negotiation for reduced penalty</td><td>7-15 days</td></tr>
                    <tr><td><strong>License Protection</strong></td><td>Prevent license suspension</td><td>10-20 days</td></tr>
                    <tr><td><strong>Court Representation</strong></td><td>Advocacy in traffic courts</td><td>30-90 days</td></tr>
                    <tr><td><strong>Document Assistance</strong></td><td>Help with RC, insurance, PUC</td><td>5-10 days</td></tr>
                  </tbody>
                </table>

                <h2 id="documents">Required Documents</h2>
                <div className="highlight-box">
                  <h3>Mandatory Documents</h3>
                  <ul>
                    <li><strong>Challan Copy:</strong> Original traffic challan</li>
                    <li><strong>RC:</strong> Vehicle registration</li>
                    <li><strong>Driving License:</strong> Valid license</li>
                    <li><strong>Insurance:</strong> Valid policy</li>
                    <li><strong>PUC:</strong> Emission certificate</li>
                  </ul>
                </div>

                <h2 id="court">Court Support Services</h2>
                <div className="section-lottie" data-aos="fade-up">
                  <dotlottie-wc src="/assets/lottiefiles/Business team.lottie" autoplay loop></dotlottie-wc>
                </div>

                <h2 id="faq">Frequently Asked Questions</h2>
                <h3>What is the validity period for contesting a traffic challan?</h3>
                <p>Typically within 60 days; act early to avoid penalties.</p>

                <div className="callout"><p><strong>Need Immediate Assistance?</strong> Contact us today for expert traffic challan legal services. Our team is available 24/7.</p></div>
              </div>

              <aside className="traffic-sidebar">
                <div className="sidebar-scroll-wrapper">
                  <SidebarForm />
                </div>
              </aside>
            </div>
          </section>
        </main>

        <button className="back-to-top" id="backToTop" aria-label="Back to top"><i className="fas fa-chevron-up"></i></button>
      </PageContent>

      <Footer />
    </>
  );
};

export default TrafficChallan;
