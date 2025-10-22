import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServiceHero from '../../components/ServiceHero';
import SidebarForm from '../../components/SidebarForm';
import { PageContent } from './rto-gst-challan.style.js';

const RtoGstChallan = () => {
  useEffect(() => {
    // load dotlottie webcomponent
    const dotlottie = document.createElement('script');
    dotlottie.type = 'module';
    dotlottie.src = 'https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.5/dist/dotlottie-wc.js';
    document.head.appendChild(dotlottie);

    // load lottie animations script (adjust path if needed)
    const lottieScript = document.createElement('script');
    lottieScript.src = '/includes/lottie-animations.js';
    lottieScript.async = true;
    document.body.appendChild(lottieScript);

    // smooth anchor scrolling
    const onClick = (e) => {
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
    document.addEventListener('click', onClick);

    // back-to-top
    const bt = document.getElementById('backToTop');
    const onScroll = () => {
      if (!bt) return;
      if (window.scrollY > 500) bt.classList.add('visible');
      else bt.classList.remove('visible');
    };
    window.addEventListener('scroll', onScroll);
    const onBtClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    if (bt) bt.addEventListener('click', onBtClick);

    // year updater
    try { const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear(); } catch (e) {}

    return () => {
      document.removeEventListener('click', onClick);
      window.removeEventListener('scroll', onScroll);
      if (bt) bt.removeEventListener('click', onBtClick);
    };
  }, []);

  return (
    <>
      <Header />
      <ServiceHero
        title="GST Challan Download & Payment Guide"
        subtitle="Complete GST Compliance & Tax Management Services"
        breadcrumb="GST Challan"
      />

      <PageContent>
        {/* Main content converted to JSX, preserving all content */}
        <main id="main-content">
          <section id="gst-content" className="gst-section" aria-labelledby="gst-heading">
            <div className="gst-container">
              <article className="gst-main">
                <h1 id="gst-heading">GST Challan Download & Payment Guide</h1>
                <p className="gst-byline">Complete GST Compliance & Tax Management Services</p>

                <div className="section-lottie" data-lottie="legal-documents"></div>

                <p>A GST challan is a key document under India's Goods and Services Tax (GST) system. It acts as an official proof of payment for tax, interest, penalty, or other dues. Whether you are a registered taxpayer, a business owner, or an unregistered user making specific GST payments, generating and downloading a GST challan is a mandatory step to maintain proper compliance and accounting records.</p>

                <p>At Mundra Legal, we help businesses, professionals, and entrepreneurs manage their GST payments, filing, and compliance seamlessly. In this guide, you'll learn everything about what a GST challan is, its importance, how to download it, and the correct process to make your GST payments online or offline.</p>

                <div className="callout">
                  <p><i className="fas fa-info-circle" style={{ color: 'var(--primary-gold)', marginRight: 8 }}></i> <strong>Pro Tip:</strong> Always download and save your GST challan as proof of payment for future reference and audit purposes.</p>
                </div>

                <h2 id="what-is-gst-challan">What is a GST Challan?</h2>

                <div className="section-lottie" data-lottie="business-analytics"></div>

                <p>A GST challan (Form PMT-06) is an official document generated through the GST portal for paying GST liabilities such as:</p>

                <div className="feature-grid">
                  <div className="feature-card">
                    <div className="icon-box"><i className="fas fa-building"></i></div>
                    <h4>CGST</h4>
                    <p>Central Goods and Services Tax collected by the Central Government</p>
                  </div>
                  <div className="feature-card">
                    <div className="icon-box"><i className="fas fa-landmark"></i></div>
                    <h4>SGST</h4>
                    <p>State Goods and Services Tax collected by the State Government</p>
                  </div>
                  <div className="feature-card">
                    <div className="icon-box"><i className="fas fa-globe"></i></div>
                    <h4>IGST</h4>
                    <p>Integrated Goods and Services Tax for inter-state transactions</p>
                  </div>
                  <div className="feature-card">
                    <div className="icon-box"><i className="fas fa-coins"></i></div>
                    <h4>Cess & Fees</h4>
                    <p>Cess, interest, penalty, and late fees as applicable</p>
                  </div>
                </div>

                <p>It can be generated by any taxpayer — registered or unregistered — when making payments related to GST returns or notices.</p>

                <p>The challan provides a <strong>Common Portal Identification Number (CPIN)</strong>, which acts as a unique reference number for tracking payment status and maintaining records.</p>

                <div className="highlight-box">
                  <h3>Why is GST Challan Important?</h3>
                  <p>Timely creation and use of a GST challan are crucial for:</p>
                  <ul>
                    <li><strong>Avoiding penalties and late fees</strong></li>
                    <li><strong>Maintaining compliance</strong> under the GST law</li>
                    <li><strong>Ensuring smooth GST return filing</strong> (like GSTR-3B and GSTR-1)</li>
                    <li><strong>Tracking payment history</strong> for accounting and audits</li>
                  </ul>
                </div>

                <h2 id="key-uses">Key Uses of GST Challan</h2>

                <div className="section-lottie" data-lottie="legal-consultation"></div>

                <p>Every taxpayer should understand the practical uses of a GST challan. It helps in:</p>

                <div className="feature-grid">
                  <div className="feature-card">
                    <div className="icon-box"><i className="fas fa-money-check-alt"></i></div>
                    <h4>Pay GST Liabilities</h4>
                    <p>Including taxes, interest, penalty, or late fees under GST law</p>
                  </div>
                  <div className="feature-card">
                    <div className="icon-box"><i className="fas fa-piggy-bank"></i></div>
                    <h4>Deposit Advance Tax</h4>
                    <p>Deposit advance tax or other statutory dues as required</p>
                  </div>
                  <div className="feature-card">
                    <div className="icon-box"><i className="fas fa-receipt"></i></div>
                    <h4>Proof of Payment</h4>
                    <p>Maintain official proof for accounting and audit purposes</p>
                  </div>
                  <div className="feature-card">
                    <div className="icon-box"><i className="fas fa-file-invoice"></i></div>
                    <h4>Enable Return Filing</h4>
                    <p>Ensure all dues are cleared before GST return submission</p>
                  </div>
                  <div className="feature-card">
                    <div className="icon-box"><i className="fas fa-chart-line"></i></div>
                    <h4>Track Transactions</h4>
                    <p>Monitor GST transactions for business transparency and compliance</p>
                  </div>
                </div>

                <h2 id="download-process">Step-by-Step Process to Download GST Challan</h2>

                <div className="section-lottie" data-lottie="company-registration"></div>

                <p>You can download a GST challan easily through the GST portal. The process differs slightly for registered and unregistered users.</p>

                <h3>For Registered Users</h3>

                <div className="process-timeline">
                  <div className="timeline-item">
                    <div className="timeline-marker"><i className="fas fa-globe"></i></div>
                    <div className="timeline-content">
                      <h4>Visit GST Portal</h4>
                      <p>Visit the official GST portal at <a href="https://www.gst.gov.in" target="_blank" rel="noopener noreferrer">www.gst.gov.in</a></p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker"><i className="fas fa-sign-in-alt"></i></div>
                    <div className="timeline-content">
                      <h4>Login with Credentials</h4>
                      <p>Log in using your valid GSTIN and credentials</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker"><i className="fas fa-bars"></i></div>
                    <div className="timeline-content">
                      <h4>Navigate to Challan History</h4>
                      <p>Go to <strong>Services &gt; Payments &gt; Challan History</strong></p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker"><i className="fas fa-list"></i></div>
                    <div className="timeline-content">
                      <h4>View Challan List</h4>
                      <p>A list of generated challans will appear on your screen</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker"><i className="fas fa-mouse-pointer"></i></div>
                    <div className="timeline-content">
                      <h4>Select CPIN Link</h4>
                      <p>Click the CPIN link of the challan you want to download</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker"><i className="fas fa-eye"></i></div>
                    <div className="timeline-content">
                      <h4>View Details</h4>
                      <p>Review the challan details and payment status</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker"><i className="fas fa-download"></i></div>
                    <div className="timeline-content">
                      <h4>Download Challan</h4>
                      <p>Click <strong>DOWNLOAD</strong> to save the challan as a PDF</p>
                    </div>
                  </div>
                </div>

                <h3>For Unregistered Users</h3>

                <div className="process-timeline">
                  <div className="timeline-item">
                    <div className="timeline-marker"><i className="fas fa-home"></i></div>
                    <div className="timeline-content">
                      <h4>Visit GST Homepage</h4>
                      <p>Visit the GST portal homepage at <a href="https://www.gst.gov.in" target="_blank" rel="noopener noreferrer">www.gst.gov.in</a></p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker"><i className="fas fa-search"></i></div>
                    <div className="timeline-content">
                      <h4>Track Payment Status</h4>
                      <p>Go to <strong>Services &gt; Payments &gt; Track Payment Status</strong></p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker"><i className="fas fa-keyboard"></i></div>
                    <div className="timeline-content">
                      <h4>Enter CPIN or Temporary ID</h4>
                      <p>Enter your CPIN or Temporary ID in the given field</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker"><i className="fas fa-shield-alt"></i></div>
                    <div className="timeline-content">
                      <h4>Complete Captcha</h4>
                      <p>Complete the captcha verification and click Track Status</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker"><i className="fas fa-file-alt"></i></div>
                    <div className="timeline-content">
                      <h4>View Challan</h4>
                      <p>Click <strong>View Challan</strong> once displayed</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker"><i className="fas fa-download"></i></div>
                    <div className="timeline-content">
                      <h4>Download PDF</h4>
                      <p>Select <strong>DOWNLOAD</strong> to save the challan as a PDF copy</p>
                    </div>
                  </div>
                </div>

                <h2 id="payment-methods">How to Make GST Payment</h2>

                <div className="section-lottie" data-lottie="investment-growth"></div>

                <p>After generating the challan, payment can be made through multiple methods:</p>

                <h3>1. Online Payment (Preferred Method)</h3>

                <div className="highlight-box">
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: 16 }}>Online Payment Steps</h4>
                  <ol>
                    <li>Log in to the GST portal</li>
                    <li>Navigate to <strong>Services &gt; Payments &gt; Create Challan</strong></li>
                    <li>Enter liability details and generate the challan</li>
                    <li>Select payment mode: <strong>Net Banking, Debit/Credit Card, or UPI</strong></li>
                    <li>Complete the payment securely through your chosen gateway</li>
                    <li>The payment receipt and challan are automatically updated in the GST portal</li>
                  </ol>
                </div>

                <div className="feature-grid">
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-university"></i></div><h4>Net Banking</h4><p>Pay directly from your bank account via internet banking</p></div>
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-credit-card"></i></div><h4>Debit/Credit Card</h4><p>Use your debit or credit card for instant payment</p></div>
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-mobile-alt"></i></div><h4>UPI</h4><p>Quick and secure payment through UPI apps</p></div>
                </div>

                <h3>2. Offline Payment</h3>

                <p>You can pay via authorized banks or payment centers by presenting the challan and paying in cash, cheque, or demand draft. Once the payment is cleared, the status is reflected on the portal within a few hours.</p>

                <div className="callout">
                  <p><i className="fas fa-exclamation-triangle" style={{ color: 'var(--primary-gold)', marginRight: 8 }}></i> <strong>Important:</strong> Always verify that your payment status is updated on the GST portal before filing your returns.</p>
                </div>

                <h2 id="compliance">GST Payment Compliance and Return Filing</h2>

                <div className="section-lottie" data-lottie="legal-services"></div>

                <p>Timely payment through GST challans is critical for maintaining compliance. Without paying your dues, you cannot file returns such as:</p>

                <table className="comparison-table">
                  <thead>
                    <tr><th>Return Type</th><th>Description</th><th>Due Date</th><th>Frequency</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>GSTR-3B</strong></td><td>Summary return of outward and inward supplies</td><td>20th of next month</td><td>Monthly</td></tr>
                    <tr><td><strong>GSTR-1</strong></td><td>Details of outward supplies (sales)</td><td>11th of next month</td><td>Monthly/Quarterly</td></tr>
                    <tr><td><strong>GSTR-9</strong></td><td>Annual return for regular taxpayers</td><td>31st December</td><td>Annually</td></tr>
                    <tr><td><strong>GSTR-9C</strong></td><td>Reconciliation statement & audit report</td><td>31st December</td><td>Annually</td></tr>
                  </tbody>
                </table>

                <div className="highlight-box">
                  <h3>Consequences of Non-Payment or Late Payment</h3>
                  <div className="feature-grid">
                    <div className="feature-card"><div className="icon-box"><i className="fas fa-percentage"></i></div><h4>Interest Charges</h4><p>18% per annum on outstanding tax amount</p></div>
                    <div className="feature-card"><div className="icon-box"><i className="fas fa-exclamation-circle"></i></div><h4>Late Fees</h4><p>₹50 per day (CGST + SGST = ₹100/day) up to ₹5,000</p></div>
                    <div className="feature-card"><div className="icon-box"><i className="fas fa-ban"></i></div><h4>ITC Blocked</h4><p>Input Tax Credit claims will be blocked or restricted</p></div>
                    <div className="feature-card"><div className="icon-box"><i className="fas fa-gavel"></i></div><h4>Legal Notices</h4><p>Show cause notices and potential legal action</p></div>
                  </div>
                </div>

                <p>At Mundra Legal, our experts ensure your GST payments, challans, and return filings are managed on time and error-free — reducing compliance risks and preventing unnecessary penalties.</p>

                <h2 id="benefits">Benefits of Managing GST Challans with Mundra Legal</h2>

                <div className="section-lottie" data-lottie="business-growth"></div>

                <p>Mundra Legal provides a comprehensive GST compliance package designed for startups, SMEs, and large enterprises. Our services include:</p>

                <div className="feature-grid">
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-user-plus"></i></div><h4>GST Registration</h4><p>Get your GSTIN with expert assistance and complete documentation support</p></div>
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-file-invoice-dollar"></i></div><h4>GST Return Filing</h4><p>Timely filing of GSTR-1, GSTR-3B, and annual returns with accuracy</p></div>
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-money-bill-wave"></i></div><h4>Payment Assistance</h4><p>Help in generating and tracking GST challans for all your transactions</p></div>
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-balance-scale"></i></div><h4>ITC Reconciliation</h4><p>Ensuring your input credits match supplier filings and maximize savings</p></div>
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-search-dollar"></i></div><h4>GST Audit Support</h4><p>Full compliance support for GSTR-9 & GSTR-9C annual return filing</p></div>
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-bell"></i></div><h4>Compliance Alerts</h4><p>Automated notifications for upcoming due dates and filing reminders</p></div>
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-user-tie"></i></div><h4>Dedicated Experts</h4><p>Professional help in notices, disputes, and tax advisory services</p></div>
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-headset"></i></div><h4>24/7 Support</h4><p>Round-the-clock assistance for all your GST compliance queries</p></div>
                </div>

                <div className="callout">
                  <p><i className="fas fa-star" style={{ color: 'var(--primary-gold)', marginRight: 8 }}></i> With Mundra Legal, your GST obligations are simplified — allowing you to focus on business growth while we handle the complexities of tax compliance.</p>
                </div>

                <h2 id="why-choose">Why Choose Mundra Legal?</h2>

                <div className="section-lottie" data-lottie="team-collaboration"></div>

                <div className="stats-grid">
                  <div className="stat-card"><div className="stat-number">10K+</div><div className="stat-label">Clients Served</div></div>
                  <div className="stat-card"><div className="stat-number">99.8%</div><div className="stat-label">Compliance Rate</div></div>
                  <div className="stat-card"><div className="stat-number">24/7</div><div className="stat-label">Support Available</div></div>
                  <div className="stat-card"><div className="stat-number">15+</div><div className="stat-label">Years Experience</div></div>
                </div>

                <div className="feature-grid">
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-shield-alt"></i></div><h4>Trusted Platform</h4><p>Trusted by professionals and enterprises across India for tax compliance</p></div>
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-tasks"></i></div><h4>End-to-End Support</h4><p>Complete GST and business compliance support from registration to audit</p></div>
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-rupee-sign"></i></div><h4>Affordable Pricing</h4><p>Transparent pricing with no hidden charges or surprise fees</p></div>
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-clock"></i></div><h4>7 Days a Week</h4><p>Online and offline assistance available throughout the week</p></div>
                  <div className="feature-card"><div className="icon-box"><i className="fas fa-graduation-cap"></i></div><h4>Legal Expertise</h4><p>Expert knowledge in taxation, company law, and business registration</p></div>
                </div>

                <p>Mundra Legal has earned its reputation for accuracy, professionalism, and reliability in financial and legal compliance — making it one of the fastest-growing legal and taxation platforms in India.</p>

                <h2 id="faqs">Frequently Asked Questions (FAQs)</h2>

                <div className="section-lottie" data-lottie="contact-connect"></div>

                <div className="highlight-box"><h4>1. What is a GST challan?</h4><p>It's an official document (Form PMT-06) used for making payments of GST dues like tax, interest, or penalty through the GST portal.</p></div>

                <div className="highlight-box"><h4>2. How can I download a GST challan?</h4><p>You can download it from <strong>Services &gt; Payments &gt; Challan History</strong> on the GST portal if you are registered, or <strong>Track Payment Status</strong> if you are unregistered.</p></div>

                <div className="highlight-box"><h4>3. Why should I download my GST challan?</h4><p>It acts as proof of payment and is required for accounting, audit, and future compliance verification.</p></div>

                <div className="highlight-box"><h4>4. Can I pay GST without generating a challan?</h4><p>No. A challan must be generated first, as it provides the CPIN for tracking and payment.</p></div>

                <div className="highlight-box"><h4>5. What happens if I pay GST late?</h4><p>Late payment attracts <strong>interest (18% per annum)</strong> and <strong>penalties</strong> under Section 50 of the CGST Act and may delay your return filings.</p></div>

                <div className="highlight-box"><h4>6. Can I download past challans?</h4><p>Yes. All your past challans are stored under the <strong>Challan History</strong> section on the GST portal.</p></div>

                <div className="highlight-box"><h4>7. Does Mundra Legal provide GST challan generation services?</h4><p>Yes, we assist clients with challan generation, payment processing, and reconciliation to ensure full compliance.</p></div>

                <h2 id="conclusion">Conclusion</h2>

                <p>A GST challan is more than a payment form — it's a vital compliance document under the GST regime. Keeping accurate challan records ensures smooth audits, timely returns, and legal compliance.</p>

                <p>Mundra Legal offers complete assistance in GST registration, challan generation, payment tracking, and return filing, ensuring your business stays compliant and penalty-free.</p>

                <div className="callout" style={{ background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-gold) 100%)', border: 'none', color: 'white' }}>
                  <p style={{ color: 'white', fontSize: '1.1rem' }}><i className="fas fa-phone-alt" style={{ marginRight: 8 }}></i> <strong>Ready to simplify your GST compliance?</strong> Contact Mundra Legal today and let our experts handle your GST challans, returns, and tax management seamlessly!</p>
                </div>
              </article>

              <aside className="gst-sidebar">
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

export default RtoGstChallan;
