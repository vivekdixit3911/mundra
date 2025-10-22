import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServiceHero from '../../components/ServiceHero';
import SidebarForm from '../../components/SidebarForm';
import { PageContent } from './TradeLicense.style.js';

const TradeLicense = () => {
  useEffect(() => {
    // load dotlottie webcomponent and lottie animations
    const dotlottie = document.createElement('script');
    dotlottie.type = 'module';
    dotlottie.src = 'https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.5/dist/dotlottie-wc.js';
    document.head.appendChild(dotlottie);

    const lottieScript = document.createElement('script');
    lottieScript.src = '/includes/lottie-animations.js';
    lottieScript.async = true;
    document.body.appendChild(lottieScript);

    // quick-links visibility logic
    const updateQuickLinksVisibility = () => {
      const quickLinksBar = document.getElementById('quickLinksBar');
      const heroPlaceholder = document.getElementById('hero-placeholder');
      if (!quickLinksBar || !heroPlaceholder) return;
      const heroBottom = heroPlaceholder.getBoundingClientRect().bottom;
      if (heroBottom < 0) quickLinksBar.classList.add('visible');
      else quickLinksBar.classList.remove('visible');
    };
    window.addEventListener('scroll', updateQuickLinksVisibility);
    setTimeout(updateQuickLinksVisibility, 500);

    // smooth scrolling for anchors
    const anchors = (e) => {
      const a = e.target.closest && e.target.closest('a[href^="#"]');
      if (a) {
        const href = a.getAttribute('href');
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const offset = 80;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', anchors);

    // back-to-top
    const bt = document.getElementById('backToTop');
    const onScroll = () => {
      if (!bt) return;
      if (window.scrollY > 300) bt.classList.add('visible');
      else bt.classList.remove('visible');
      updateSidebar(); // also update sidebar on scroll
    };
    window.addEventListener('scroll', onScroll);
    if (bt) bt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // sidebar sticky behavior
    const sidebar = document.querySelector('.trade-sidebar');
    const sidebarWrapper = document.querySelector('.sidebar-scroll-wrapper');
    const container = document.querySelector('.trade-container');
    const mainContent = document.querySelector('.trade-main');

    function updateSidebar() {
      if (!sidebar || !sidebarWrapper || !container || !mainContent) return;
      if (window.innerWidth <= 900) {
        sidebarWrapper.classList.remove('fixed', 'absolute');
        return;
      }
      const containerRect = container.getBoundingClientRect();
      const sidebarHeight = sidebarWrapper.offsetHeight;
      if (containerRect.top <= 20 && containerRect.bottom > sidebarHeight + 40) {
        sidebarWrapper.classList.add('fixed');
        sidebarWrapper.classList.remove('absolute');
      } else if (containerRect.bottom <= sidebarHeight + 40) {
        sidebarWrapper.classList.remove('fixed');
        sidebarWrapper.classList.add('absolute');
      } else {
        sidebarWrapper.classList.remove('fixed', 'absolute');
      }
    }
    window.addEventListener('resize', updateSidebar);
    setTimeout(updateSidebar, 600);

    // year updater
    try { const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear(); } catch (e) {}

    // form handling for forms with id quickContactForm (if any left)
    const onSubmit = (e) => {
      if (e.target && e.target.id === 'quickContactForm') {
        e.preventDefault();
        alert('Thank you for your interest! Our team will contact you shortly.');
        e.target.reset();
      }
    };
    document.addEventListener('submit', onSubmit);

    return () => {
      document.removeEventListener('click', anchors);
      window.removeEventListener('scroll', updateQuickLinksVisibility);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateSidebar);
      document.removeEventListener('submit', onSubmit);
      if (bt) bt.removeEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    };
  }, []);

  return (
    <>
      <Header />
      <ServiceHero
        title="Trade License"
        subtitle="Guidance and support for acquiring a trade license for your business."
        breadcrumb="Trade License"
      />

      <PageContent>
        {/* Quick Links Bar */}
        <nav className="quick-links" id="quickLinksBar" aria-label="Quick jump navigation">
          <div className="ql-container">
            <a href="#what-is">What is Trade License</a>
            <a href="#legal-framework">Legal Framework</a>
            <a href="#types">Types of Licenses</a>
            <a href="#who-needs">Who Needs It</a>
            <a href="#documents">Documents Required</a>
            <a href="#process">Registration Process</a>
            <a href="#fees">Fees & Renewal</a>
            <a href="#penalties">Penalties</a>
            <a href="#benefits">Benefits</a>
            <a href="#faqs">FAQs</a>
          </div>
        </nav>

        <main id="main-content">
          <section id="trade-content" className="trade-section" aria-labelledby="trade-heading">
            <div className="trade-container">
              <article className="trade-main">
                <h1 id="trade-heading">Trade License Registration in India</h1>
                <p className="trade-byline">Complete Guide by Mundra Legal Consultants</p>

                <div className="section-lottie" data-lottie="legal-documents" data-lottie-width="350px" data-lottie-height="300px"></div>

                <p>A <strong>Trade License</strong> is a formal authorization issued by the local municipal or urban body, certifying that a business can legally operate within a specific jurisdiction. It ensures compliance with regulations relating to public safety, building codes, zoning, health, and fire safety.</p>

                <p>At <strong>Mundra Legal Consultants</strong>, we help businesses across India obtain their trade license — from application to renewal — ensuring all legal requirements are met and operations are fully compliant.</p>

                <h2 id="what-is">What is a Trade License & Its Purpose</h2>

                <div className="highlight-box">
                  <h3>A Trade License:</h3>
                  <ul>
                    <li><strong>Grants legal permission</strong> for carrying on business activities within municipal limits.</li>
                    <li><strong>Ensures business operations</strong> are safe, ethical, and not harmful to public health or safety.</li>
                    <li><strong>Mandates compliance</strong> with local rules regarding the location, premises, safety norms, and type of business.</li>
                    <li><strong>Helps municipal authorities</strong> regulate businesses, monitor impact, and enforce local laws.</li>
                  </ul>
                </div>

                <h3>Purpose:</h3>
                <div className="feature-grid">
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-shield-alt"></i></div><h4>Public Safety</h4><p>Prevent unauthorized or harmful trades in neighbourhoods.</p></div>
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-building"></i></div><h4>Zoning Compliance</h4><p>Ensure zoning and building safety norms are followed.</p></div>
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-check-circle"></i></div><h4>Clearances</h4><p>Make sure businesses have required clearances (fire, pollution, health).</p></div>
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-handshake"></i></div><h4>Consumer Confidence</h4><p>Foster consumer confidence and legal legitimacy.</p></div>
                </div>

                <div className="section-lottie" data-lottie="legal-consultation" data-lottie-width="350px" data-lottie-height="300px"></div>

                <h2 id="legal-framework">Legal & Regulatory Framework</h2>
                <p>Understanding the legal environment is crucial. At <strong>Mundra Legal</strong>, we stay up to date with rules across states to ensure your trade license complies with all laws.</p>
                <div className="callout"><p><strong>Key regulations include:</strong></p></div>
                <ul>
                  <li><strong>Municipal Acts:</strong> Each state has its Municipal Corporation / Municipality Act defining trade license rules.</li>
                  <li><strong>State Notifications & Local Bylaws:</strong> Fee structures, trade categories, renewal timelines vary by city or municipality.</li>
                  <li><strong>Recent Rules:</strong> Many states have updated trade license rules mandating licences for trades within municipal limits.</li>
                  <li><strong>Penalties & Enforcement:</strong> Operating without license or failing to renew can lead to penalties or sealing of premises.</li>
                </ul>

                <h2 id="types">Types of Trade Licenses</h2>
                <p>Business operations are categorized by risk and nature. Typical categories include:</p>
                <table className="comparison-table">
                  <thead><tr><th>Type</th><th>Business Nature</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Type A</strong></td><td>Food & beverage, restaurants, catering – hygiene and health high priority.</td></tr>
                    <tr><td><strong>Type B</strong></td><td>Manufacturing, processing units, workshops using machinery or electricity.</td></tr>
                    <tr><td><strong>Type C</strong></td><td>High risk trades: fireworks, chemical handling, timber works, hazardous materials.</td></tr>
                  </tbody>
                </table>
                <p>Municipal rules may classify trade into general, industrial, dangerous/offensive, or temporary trades.</p>

                <div className="section-lottie" data-lottie="company-registration" data-lottie-width="350px" data-lottie-height="300px"></div>

                <h2 id="who-needs">Who Needs a Trade License</h2>
                <p>Most businesses within municipal limits must get a trade license. Examples:</p>
                <div className="stats-grid">
                  <div className="stat-card"><div className="stat-number"><i className="fas fa-store"></i></div><div className="stat-label">Retail Shops & Malls</div></div>
                  <div className="stat-card"><div className="stat-number"><i className="fas fa-utensils"></i></div><div className="stat-label">Food Services</div></div>
                  <div className="stat-card"><div className="stat-number"><i className="fas fa-industry"></i></div><div className="stat-label">Factories & Workshops</div></div>
                  <div className="stat-card"><div className="stat-number"><i className="fas fa-hospital"></i></div><div className="stat-label">Healthcare Centers</div></div>
                  <div className="stat-card"><div className="stat-number"><i className="fas fa-theater-masks"></i></div><div className="stat-label">Entertainment</div></div>
                  <div className="stat-card"><div className="stat-number"><i className="fas fa-truck"></i></div><div className="stat-label">Transport Services</div></div>
                </div>

                <h2>Eligibility Criteria</h2>
                <p>General eligibility (may vary by state/city):</p>
                <ul>
                  <li>Recognized legal entity</li>
                  <li>Premises conform to building, zoning & safety norms</li>
                  <li>Up-to-date tax/utility dues</li>
                  <li>Valid identity and business registrations</li>
                  <li>Required clearances (Fire NOC, Pollution NOC, FSSAI if applicable)</li>
                </ul>

                <div className="section-lottie" data-lottie="legal-services" data-lottie-width="350px" data-lottie-height="300px"></div>

                <h2 id="documents">Documents Required</h2>
                <p>Common documents:</p>
                <div className="feature-grid">
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-file-alt"></i></div><h4>Application Form</h4><p>Trade License application form as per municipal body</p></div>
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-id-card"></i></div><h4>Identity Proof</h4><p>PAN, Aadhar, Passport</p></div>
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-certificate"></i></div><h4>Business Entity Proof</h4><p>Incorporation Certificate / Partnership Deed</p></div>
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-home"></i></div><h4>Premises Proof</h4><p>Rent agreement, ownership deed, utility bills</p></div>
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-drafting-compass"></i></div><h4>Layout Plan</h4><p>Building plan for manufacturing/high risk trades</p></div>
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-receipt"></i></div><h4>Tax Receipts</h4><p>Latest property tax receipts</p></div>
                </div>

                <div className="section-lottie" data-lottie="business-growth" data-lottie-width="350px" data-lottie-height="300px"></div>

                <h2 id="process">Step-by-Step Process for Trade License Registration</h2>
                <p>Typical process Mundra Legal follows:</p>
                <div className="process-timeline">
                  <div className="timeline-item"><div className="timeline-marker"><i className="fas fa-search"></i></div><div className="timeline-content"><h4>Step 1: Initial Assessment</h4><p>We analyze activity, location and jurisdiction.</p></div></div>
                  <div className="timeline-item"><div className="timeline-marker"><i className="fas fa-folder-open"></i></div><div className="timeline-content"><h4>Step 2: Document Collection & Clearances</h4><p>Gather proofs and necessary NOCs.</p></div></div>
                  <div className="timeline-item"><div className="timeline-marker"><i className="fas fa-paper-plane"></i></div><div className="timeline-content"><h4>Step 3: Application Submission</h4><p>Filing form, uploading docs, paying fees.</p></div></div>
                  <div className="timeline-item"><div className="timeline-marker"><i className="fas fa-eye"></i></div><div className="timeline-content"><h4>Step 4: Inspection</h4><p>Local authority inspection.</p></div></div>
                  <div className="timeline-item"><div className="timeline-marker"><i className="fas fa-check-double"></i></div><div className="timeline-content"><h4>Step 5: Approval & Issuance</h4><p>Municipal authority issues certificate.</p></div></div>
                  <div className="timeline-item"><div className="timeline-marker"><i className="fas fa-clipboard-check"></i></div><div className="timeline-content"><h4>Step 6: Display & Compliance</h4><p>License must be displayed; comply with conditions.</p></div></div>
                  <div className="timeline-item"><div className="timeline-marker"><i className="fas fa-sync"></i></div><div className="timeline-content"><h4>Step 7: Renewal</h4><p>Renew before due date; usually annual.</p></div></div>
                </div>

                <h2 id="fees">Fees, Validity & Renewal</h2>
                <div className="highlight-box">
                  <ul>
                    <li><strong>Validity Period:</strong> Usually one year.</li>
                    <li><strong>Fees:</strong> Depend on trade type, area and city rules.</li>
                    <li><strong>Renewal Window:</strong> Delayed renewals may involve late fees.</li>
                    <li><strong>Online Processes:</strong> Many ULBs provide online portals for renewal.</li>
                  </ul>
                </div>

                <div className="section-lottie" data-lottie="business-analytics" data-lottie-width="350px" data-lottie-height="300px"></div>

                <h2 id="penalties">Penalties & Consequences of Non-Compliance</h2>
                <div className="feature-grid">
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-exclamation-triangle"></i></div><h4>Fines</h4><p>Operating without a valid license.</p></div>
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-door-closed"></i></div><h4>Business Closure</h4><p>Premises may be shut or sealed.</p></div>
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-ban"></i></div><h4>License Revocation</h4><p>License may be cancelled if conditions violated.</p></div>
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-gavel"></i></div><h4>Legal Consequences</h4><p>Damage to reputation and eligibility.</p></div>
                </div>

                <h2>Recent Trends & State-Level Variations</h2>
                <ul>
                  <li><strong>Digitalization:</strong> Online applications & portals.</li>
                  <li><strong>Uniform Licensing Rules:</strong> Single-window initiatives in some states.</li>
                  <li><strong>Updated Rules:</strong> Some states mandate trade licenses for all trades.</li>
                </ul>

                <div className="section-lottie" data-lottie="investment-growth" data-lottie-width="350px" data-lottie-height="300px"></div>

                <h2 id="benefits">Benefits of a Trade License</h2>
                <p>Obtaining a trade license offers many advantages.</p>
                <div className="feature-grid">
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-balance-scale"></i></div><h4>Legal Standing</h4><p>Operate without enforcement risk.</p></div>
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-star"></i></div><h4>Market Credibility</h4><p>Customers prefer compliant businesses.</p></div>
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-money-bill-wave"></i></div><h4>Access to Finance</h4><p>Often essential for loans/subsidies.</p></div>
                </div>

                <div className="section-lottie" data-lottie="team-collaboration" data-lottie-width="350px" data-lottie-height="300px"></div>

                <h2>How Mundra Legal Helps</h2>
                <div className="callout">
                  <ul>
                    <li>Assessment of jurisdiction & NOC needs</li>
                    <li>Prepare & verify documentation</li>
                    <li>End-to-end filing & follow up</li>
                    <li>Renewal management and appeals support</li>
                  </ul>
                </div>

                <h2 id="faqs">Frequently Asked Questions (FAQs)</h2>
                <div className="highlight-box"><h3>Q1. How long does it take?</h3><p>Typically 7-15 working days depending on municipality and docs.</p></div>
                <div className="highlight-box"><h3>Q2. Validity?</h3><p>Generally one year; renewals vary by city.</p></div>
                <div className="highlight-box"><h3>Q3. Can it be renewed online?</h3><p>Yes, many municipalities offer online renewal.</p></div>

                <div className="section-lottie" data-lottie="contact-connect" data-lottie-width="350px" data-lottie-height="300px"></div>

                <h2>Conclusion / Call to Action</h2>
                <div className="callout">
                  <p>If you're launching a business or expanding operations, securing a valid <strong>Trade License</strong> is essential. <strong>Mundra Legal Consultants</strong> can help you start and stay compliant.</p>
                  <p style={{ textAlign: 'center', marginTop: 24 }}>
                    <strong style={{ fontSize: '1.1rem', color: 'var(--primary-color)' }}>📞 Reach out to us today to start your Trade License registration.</strong>
                  </p>
                </div>
              </article>

              <aside className="trade-sidebar" aria-label="Contact form">
                <div className="sidebar-scroll-wrapper">
                  {/* Use SidebarForm component instead of inline form */}
                  <SidebarForm />

                  <div className="contact-card" style={{ marginTop: 12 }}>
                    <div data-lottie="services-feature" data-lottie-width="100%" data-lottie-height="250px"></div>
                  </div>
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

export default TradeLicense;
