import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServiceHero from '../../components/ServiceHero';
import SidebarForm from '../../components/SidebarForm';
import { PageContent } from './StampPaperNotary.style.js';

const StampPaperNotary = () => {
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

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', onScroll);
      if (btn) btn.removeEventListener('click', onBtClick);
    };
  }, []);

  return (
    <>
      <Header />
      <ServiceHero
        title="Stamp Paper & Notary"
        subtitle="Comprehensive services for stamp paper procurement and document notarization."
        breadcrumb="Stamp Paper & Notary"
      />

      <PageContent>
        <main id="main-content">
          <section className="service-overview">
            <div className="container">
              <div className="overview-grid">
                <div className="overview-content" data-aos="fade-right">
                  <h2>Professional Stamp Paper & Notary Services</h2>
                  <p className="lead-text">Ensure legal validity and authentication of your important documents with our expert stamp paper and notarization services.</p>
                  <p>Our certified notaries provide comprehensive document authentication services including stamp paper selection, notarization, and attestation. We ensure all documents meet legal requirements and provide proper authentication for use in courts, government offices, and business transactions.</p>

                  <div className="key-benefits">
                    <div className="benefit-item">
                      <i className="fas fa-certificate"></i>
                      <div>
                        <h4>Certified Notaries</h4>
                        <p>Licensed and experienced notary professionals</p>
                      </div>
                    </div>
                    <div className="benefit-item">
                      <i className="fas fa-balance-scale"></i>
                      <div>
                        <h4>Legal Compliance</h4>
                        <p>Ensures all documents meet legal standards</p>
                      </div>
                    </div>
                    <div className="benefit-item">
                      <i className="fas fa-clock"></i>
                      <div>
                        <h4>Quick Turnaround</h4>
                        <p>Same-day service for urgent requirements</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="overview-image" data-aos="fade-left">
                  <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop" alt="Stamp Paper & Notary Services" />
                  <div className="image-badge">
                    <i className="fas fa-stamp"></i>
                    <span>Document Authentication</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="modern-section light-professional document-types">
            <div className="container">
              <div className="modern-section-header centered" data-aos="fade-up" data-aos-duration="1000">
                <div className="section-badge light" data-aos="zoom-in" data-aos-delay="200">
                  <i className="fas fa-file-alt"></i>
                  <span>DOCUMENT TYPES</span>
                </div>
                <h2 className="modern-section-title" data-aos="fade-up" data-aos-delay="300">
                  Documents We <span className="title-highlight gradient">Authenticate</span>
                </h2>
                <p className="modern-section-subtitle" data-aos="fade-up" data-aos-delay="400">
                  Comprehensive notarization services for all types of legal and business documents.
                </p>
              </div>

              <div className="services-grid">
                <div className="service-card" data-aos="flip-left" data-aos-delay="200">
                  <div className="service-icon"><i className="fas fa-handshake"></i></div>
                  <h3>Agreements & Contracts</h3>
                  <p>Business agreements, partnership deeds, service contracts, and commercial documents.</p>
                  <ul className="service-features">
                    <li>Partnership Agreements</li>
                    <li>Service Contracts</li>
                    <li>Business MOUs</li>
                    <li>Non-Disclosure Agreements</li>
                  </ul>
                </div>

                <div className="service-card" data-aos="flip-left" data-aos-delay="300">
                  <div className="service-icon"><i className="fas fa-home"></i></div>
                  <h3>Property Documents</h3>
                  <p>Property deeds, sale agreements, lease documents, and real estate transactions.</p>
                  <ul className="service-features">
                    <li>Sale Deeds</li>
                    <li>Lease Agreements</li>
                    <li>Property Transfers</li>
                    <li>Rental Agreements</li>
                  </ul>
                </div>

                <div className="service-card" data-aos="flip-left" data-aos-delay="400">
                  <div className="service-icon"><i className="fas fa-user-tie"></i></div>
                  <h3>Personal Documents</h3>
                  <p>Affidavits, declarations, power of attorney, and personal legal documents.</p>
                  <ul className="service-features">
                    <li>Affidavits</li>
                    <li>Power of Attorney</li>
                    <li>Declarations</li>
                    <li>Undertakings</li>
                  </ul>
                </div>

                <div className="service-card" data-aos="flip-left" data-aos-delay="500">
                  <div className="service-icon"><i className="fas fa-building"></i></div>
                  <h3>Corporate Documents</h3>
                  <p>Company incorporation documents, board resolutions, and corporate agreements.</p>
                  <ul className="service-features">
                    <li>Board Resolutions</li>
                    <li>Corporate Agreements</li>
                    <li>Authorization Letters</li>
                    <li>Company Documents</li>
                  </ul>
                </div>

                <div className="service-card" data-aos="flip-left" data-aos-delay="600">
                  <div className="service-icon"><i className="fas fa-graduation-cap"></i></div>
                  <h3>Educational Documents</h3>
                  <p>Educational certificates, transcripts, and academic document authentication.</p>
                  <ul className="service-features">
                    <li>Degree Certificates</li>
                    <li>Mark Sheets</li>
                    <li>Academic Transcripts</li>
                    <li>Educational Affidavits</li>
                  </ul>
                </div>

                <div className="service-card" data-aos="flip-left" data-aos-delay="700">
                  <div className="service-icon"><i className="fas fa-passport"></i></div>
                  <h3>Identity Documents</h3>
                  <p>Identity verification, passport applications, and government document notarization.</p>
                  <ul className="service-features">
                    <li>Identity Verification</li>
                    <li>Passport Applications</li>
                    <li>Government Forms</li>
                    <li>Visa Documents</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="service-process">
            <div className="container">
              <div className="modern-section-header centered" data-aos="fade-up">
                <div className="section-badge" data-aos="zoom-in" data-aos-delay="200">
                  <i className="fas fa-tasks"></i>
                  <span>OUR PROCESS</span>
                </div>
                <h2 className="modern-section-title" data-aos="fade-up" data-aos-delay="300">
                  Notarization <span className="title-highlight">Process</span>
                </h2>
                <p className="modern-section-subtitle" data-aos="fade-up" data-aos-delay="400">
                  Step-by-step process for professional document authentication and notarization.
                </p>
              </div>

              <div className="process-timeline">
                <div className="process-step" data-aos="fade-right" data-aos-delay="200">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h3>Document Review & Consultation</h3>
                    <p>Initial review of documents and consultation on requirements.</p>
                    <div className="step-details">
                      <span><i className="fas fa-clock"></i> 30 Minutes</span>
                      <span><i className="fas fa-eye"></i> Document Check</span>
                    </div>
                    <ul className="step-requirements">
                      <li>Document examination for completeness</li>
                      <li>Stamp paper value determination</li>
                      <li>Legal requirement assessment</li>
                      <li>Cost estimation and timeline</li>
                    </ul>
                  </div>
                </div>

                <div className="process-step" data-aos="fade-left" data-aos-delay="300">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h3>Stamp Paper Procurement</h3>
                    <p>Selection and procurement of appropriate stamp paper value.</p>
                    <div className="step-details">
                      <span><i className="fas fa-clock"></i> 1-2 Hours</span>
                      <span><i className="fas fa-stamp"></i> Official Stamp</span>
                    </div>
                    <ul className="step-requirements">
                      <li>Appropriate stamp value selection</li>
                      <li>Genuine stamp paper procurement</li>
                      <li>State-specific compliance check</li>
                      <li>Document preparation on stamp paper</li>
                    </ul>
                  </div>
                </div>

                <div className="process-step" data-aos="fade-right" data-aos-delay="400">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h3>Identity Verification</h3>
                    <p>Verification of signatory identity and document authentication.</p>
                    <div className="step-details">
                      <span><i className="fas fa-clock"></i> 15 Minutes</span>
                      <span><i className="fas fa-id-card"></i> ID Verification</span>
                    </div>
                    <ul className="step-requirements">
                      <li>Identity document verification</li>
                      <li>Signatory presence confirmation</li>
                      <li>Witness arrangement if required</li>
                      <li>Document content review</li>
                    </ul>
                  </div>
                </div>

                <div className="process-step" data-aos="fade-left" data-aos-delay="500">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h3>Notarization & Attestation</h3>
                    <p>Official notarization with seal and signature by certified notary.</p>
                    <div className="step-details">
                      <span><i className="fas fa-clock"></i> 10 Minutes</span>
                      <span><i className="fas fa-certificate"></i> Official Seal</span>
                    </div>
                    <ul className="step-requirements">
                      <li>Document signing in notary presence</li>
                      <li>Official notary seal application</li>
                      <li>Notary signature and date</li>
                      <li>Register entry maintenance</li>
                    </ul>
                  </div>
                </div>

                <div className="process-step" data-aos="fade-right" data-aos-delay="600">
                  <div className="step-number">5</div>
                  <div className="step-content">
                    <h3>Document Delivery & Support</h3>
                    <p>Final document delivery with ongoing support for any queries.</p>
                    <div className="step-details">
                      <span><i className="fas fa-clock"></i> Same Day</span>
                      <span><i className="fas fa-headset"></i> Ongoing Support</span>
                    </div>
                    <ul className="step-requirements">
                      <li>Notarized document delivery</li>
                      <li>Additional copies if required</li>
                      <li>Usage guidance and instructions</li>
                      <li>Future support for queries</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="modern-section gradient-professional required-documents">
            <div className="container">
              <div className="modern-section-header centered" data-aos="fade-up" data-aos-duration="1000">
                <div className="section-badge gradient" data-aos="zoom-in" data-aos-delay="200">
                  <i className="fas fa-folder-open"></i>
                  <span>REQUIREMENTS</span>
                </div>
                <h2 className="modern-section-title" data-aos="fade-up" data-aos-delay="300">
                  Required Documents for <span className="title-highlight glow">Notarization</span>
                </h2>
                <p className="modern-section-subtitle" data-aos="fade-up" data-aos-delay="400">
                  Essential documents and information needed for professional notarization services.
                </p>
              </div>

              <div className="documents-grid">
                <div className="document-category" data-aos="fade-up" data-aos-delay="200">
                  <div className="category-header"><i className="fas fa-user"></i><h3>Identity Documents</h3></div>
                  <ul className="document-list">
                    <li><i className="fas fa-check-circle"></i> Government Photo ID (Aadhar/PAN/Passport)</li>
                    <li><i className="fas fa-check-circle"></i> Address Proof</li>
                    <li><i className="fas fa-check-circle"></i> Contact Information</li>
                    <li><i className="fas fa-check-circle"></i> Recent Photograph</li>
                  </ul>
                </div>

                <div className="document-category" data-aos="fade-up" data-aos-delay="300">
                  <div className="category-header"><i className="fas fa-file-alt"></i><h3>Document Details</h3></div>
                  <ul className="document-list">
                    <li><i className="fas fa-check-circle"></i> Original Document to be Notarized</li>
                    <li><i className="fas fa-check-circle"></i> Supporting Documents (if any)</li>
                    <li><i className="fas fa-check-circle"></i> Previous Versions (if applicable)</li>
                    <li><i className="fas fa-check-circle"></i> Reference Documents</li>
                  </ul>
                </div>

                <div className="document-category" data-aos="fade-up" data-aos-delay="400">
                  <div className="category-header"><i className="fas fa-users"></i><h3>Witness Requirements</h3></div>
                  <ul className="document-list">
                    <li><i className="fas fa-check-circle"></i> Witness Identity Proof (if required)</li>
                    <li><i className="fas fa-check-circle"></i> Witness Contact Information</li>
                    <li><i className="fas fa-check-circle"></i> Relationship Declaration</li>
                    <li><i className="fas fa-check-circle"></i> Witness Photographs</li>
                  </ul>
                </div>

                <div className="document-category" data-aos="fade-up" data-aos-delay="500">
                  <div className="category-header"><i className="fas fa-info-circle"></i><h3>Additional Information</h3></div>
                  <ul className="document-list">
                    <li><i className="fas fa-check-circle"></i> Purpose of Notarization</li>
                    <li><i className="fas fa-check-circle"></i> Urgency Requirements</li>
                    <li><i className="fas fa-check-circle"></i> Number of Copies Needed</li>
                    <li><i className="fas fa-check-circle"></i> Special Instructions</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="service-pricing">
            <div className="container">
              <div className="modern-section-header centered" data-aos="fade-up">
                <div className="section-badge" data-aos="zoom-in" data-aos-delay="200"><i className="fas fa-tag"></i><span>PRICING</span></div>
                <h2 className="modern-section-title" data-aos="fade-up" data-aos-delay="300">Affordable Notary <span className="title-highlight">Services</span></h2>
                <p className="modern-section-subtitle" data-aos="fade-up" data-aos-delay="400">Transparent pricing for all types of notarization and stamp paper services.</p>
              </div>

              <div className="pricing-grid">
                <div className="pricing-card" data-aos="zoom-in" data-aos-delay="200">
                  <div className="pricing-header"><h3>Basic Notarization</h3><div className="price">Make a call, we'll discuss in detail</div><span className="price-note">Per Document</span></div>
                  <ul className="pricing-features">
                    <li><i className="fas fa-check"></i> Single Document Notarization</li>
                    <li><i className="fas fa-check"></i> Identity Verification</li>
                    <li><i className="fas fa-check"></i> Official Seal & Signature</li>
                    <li><i className="fas fa-check"></i> Register Entry</li>
                  </ul>
                  <a href="/contact" className="pricing-btn btn btn-primary">Get Started</a>
                </div>

                <div className="pricing-card featured" data-aos="zoom-in" data-aos-delay="300">
                  <div className="pricing-badge">Most Popular</div>
                  <div className="pricing-header"><h3>Complete Package</h3><div className=" price">Make a call, we'll discuss in detail</div><span className="price-note">Includes Stamp Paper</span></div>
                  <ul className="pricing-features">
                    <li><i className="fas fa-check"></i> Document Preparation</li>
                    <li><i className="fas fa-check"></i> Stamp Paper (call for details)</li>
                    <li><i className="fas fa-check"></i> Professional Notarization</li>
                    <li><i className="fas fa-check"></i> 2 Certified Copies</li>
                    <li><i className="fas fa-check"></i> Legal Consultation</li>
                  </ul>
                  <a href="/contact" className="pricing-btn btn btn-primary">Choose Plan</a>
                </div>

                <div className="pricing-card" data-aos="zoom-in" data-aos-delay="400">
                  <div className="pricing-header"><h3>Bulk Services</h3><div className="price">Make a call, we'll discuss in detail</div><span className="price-note">Per Document (10+)</span></div>
                  <ul className="pricing-features">
                    <li><i className="fas fa-check"></i> Volume Discounts</li>
                    <li><i className="fas fa-check"></i> Priority Processing</li>
                    <li><i className="fas fa-check"></i> Dedicated Support</li>
                    <li><i className="fas fa-check"></i> Multiple Copies</li>
                    <li><i className="fas fa-check"></i> Pick-up/Delivery Option</li>
                  </ul>
                  <a href="/contact" className="pricing-btn btn btn-primary">Contact Us</a>
                </div>
              </div>
            </div>
          </section>

          <section className="service-cta">
            <div className="container">
              <div className="cta-content" data-aos="fade-up">
                <h2>Need Professional Document Notarization?</h2>
                <p>Get expert stamp paper and notary services with legal validity and compliance assurance</p>
                <div className="cta-buttons">
                  <a href="/contact" className="btn btn-primary">Get Notarization Now</a>
                  <a href="tel:+918506874280" className="btn btn-outline">Call Expert</a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <aside style={{ position: 'fixed', left: '-9999px', visibility: 'hidden' }} aria-hidden>
          {/* nothing; sidebar is rendered below inside layout */}
        </aside>

        <div style={{ position: 'fixed', bottom: 16, right: 16, display: 'none' }}>
          {/* placeholder for potential floating elements */}
        </div>

        {/* Sidebar Form placed within page flow */}
        <div className="container" style={{ maxWidth: 1200, marginTop: 24 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 24 }}>
            <div>{/* left column intentionally empty here (content already above) */}</div>
            <aside>
              <SidebarForm />
            </aside>
          </div>
        </div>

        <button className="back-to-top" id="backToTop" aria-label="Back to top"><i className="fas fa-chevron-up"></i></button>
      </PageContent>

      <Footer />
    </>
  );
};

export default StampPaperNotary;
