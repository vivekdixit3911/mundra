import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServiceHero from '../../components/ServiceHero';
import SidebarForm from '../../components/SidebarForm';
import { PageContent } from './ServicePage.styles.js';

const PublicLimitedCompany = () => {
  useEffect(() => {
    // Load dotlottie webcomponent (module)
    const dotlottieScript = document.createElement('script');
    dotlottieScript.type = 'module';
    dotlottieScript.src = 'https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.5/dist/dotlottie-wc.js';
    document.head.appendChild(dotlottieScript);

    // Attempt to load lottie-animations script from public/includes (adjust path if needed)
    const lottieScript = document.createElement('script');
    lottieScript.src = '/includes/lottie-animations.js';
    lottieScript.async = true;
    document.body.appendChild(lottieScript);

    // Smooth scrolling for anchor links
    const handleAnchorClicks = (e) => {
      if (e.target && e.target.matches('a[href^="#"]')) {
        const href = e.target.getAttribute('href');
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
    document.addEventListener('click', handleAnchorClicks);

    // Back-to-top button visibility
    const bt = document.getElementById('backToTop');
    const onScroll = () => {
      if (!bt) return;
      if (window.scrollY > 500) bt.classList.add('visible');
      else bt.classList.remove('visible');
    };
    window.addEventListener('scroll', onScroll);

    // Back-to-top click handler
    const btClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    if (bt) bt.addEventListener('click', btClick);

    // Year updater (if an element with id 'year' exists)
    try { const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear(); } catch (e) {}

    return () => {
      document.removeEventListener('click', handleAnchorClicks);
      window.removeEventListener('scroll', onScroll);
      if (bt) bt.removeEventListener('click', btClick);
      // Note: dynamically inserted scripts are left; remove here if desired.
    };
  }, []);

  return (
    <>
      <Header />
      <ServiceHero
        title="Public Limited Company"
        subtitle="Expert guidance on Public Limited Company incorporation and legal requirements."
        breadcrumb="Public Limited Company"
      />

      <PageContent>
        {/* Inline page styles copied from provided HTML head style block */}
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
              --primary-color: #1C2951;
              --primary-gold: #D4AF37;
              --light-gold: #F4E9C1;
              --mundra-dark: #1C2951;
              --text-primary: #2d3748;
              --text-secondary: #4a5568;
              --text-muted: #718096;
              --bg-light: #fefefe;
              --bg-soft: #f7fafc;
              --shadow-sm: 0 2px 8px rgba(28, 41, 81, 0.08);
              --shadow-md: 0 8px 24px rgba(28, 41, 81, 0.12);
              --shadow-lg: 0 16px 48px rgba(28, 41, 81, 0.16);
          }
          body, .plc-section { font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; color: var(--text-primary); }
          h1, h2, h3, h4, h5, h6 { font-family: 'Playfair Display', Georgia, 'Times New Roman', serif; font-weight: 700; }
          .plc-section { padding: 60px 24px; background: linear-gradient(180deg, #f8f9fb 0%, #ffffff 50%, #f8f9fb 100%); }
          .plc-container { display: grid; grid-template-columns: 1fr 380px; gap: 40px; max-width: 1280px; margin: 0 auto; align-items: start; }
          .plc-main { background: white; padding: 48px 40px; border-radius: 20px; box-shadow: var(--shadow-lg); border: 1px solid rgba(28, 41, 81, 0.08); }
          .plc-main h1 { font-size: clamp(2rem, 4vw, 3.5rem); background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-gold) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 12px; letter-spacing: 0.5px; line-height: 1.2; }
          .plc-byline { color: var(--text-muted); font-size: 1.05rem; margin-bottom: 24px; display: flex; align-items: center; gap: 8px; }
          .plc-byline::before { content: ''; display: inline-block; width: 4px; height: 18px; background: linear-gradient(180deg, var(--primary-color), var(--primary-gold)); border-radius: 2px; }
          .plc-main p { color: var(--text-secondary); line-height: 1.8; margin-bottom: 16px; font-size: 1.05rem; }
          .plc-main h2 { color: var(--primary-color); font-size: clamp(1.6rem, 2.8vw, 2.2rem); margin-top: 40px; margin-bottom: 20px; position: relative; padding-bottom: 12px; }
          .plc-main h2::after { content: ''; position: absolute; bottom: 0; left: 0; width: 60px; height: 4px; background: linear-gradient(90deg, var(--primary-color), var(--primary-gold)); border-radius: 2px; }
          .plc-main h3 { color: var(--text-primary); font-size: clamp(1.3rem, 2.2vw, 1.7rem); margin-top: 32px; margin-bottom: 16px; display: flex; align-items: center; gap: 10px; }
          .plc-main h3::before { content: '●'; color: var(--primary-gold); font-size: 0.7em; }
          .callout { background: linear-gradient(135deg, rgba(28, 41, 81, 0.05) 0%, rgba(212, 175, 55, 0.08) 100%); border-left: 5px solid var(--primary-color); padding: 20px 24px; border-radius: 12px; margin: 24px 0; box-shadow: var(--shadow-sm); }
          .callout p { margin-bottom: 0; font-weight: 500; }
          .badge { display: inline-block; background: linear-gradient(90deg, var(--primary-color), var(--primary-gold)); color: white; padding: 8px 16px; border-radius: 20px; font-weight: 700; font-size: 0.95rem; margin-bottom: 12px; box-shadow: var(--shadow-sm); text-transform: uppercase; letter-spacing: 0.5px; }
          .highlight-box { background: linear-gradient(135deg, #f8f9fb 0%, #ffffff 100%); border: 2px solid rgba(212, 175, 55, 0.2); border-radius: 16px; padding: 24px; margin: 24px 0; position: relative; box-shadow: var(--shadow-md); }
          .highlight-box::before { content: ''; position: absolute; top: -2px; left: -2px; right: -2px; bottom: -2px; background: linear-gradient(135deg, var(--primary-color), var(--primary-gold)); border-radius: 18px; z-index: -1; opacity: 0.1; }
          .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin: 32px 0; }
          .feature-card { background: white; padding: 32px 24px; border-radius: 16px; box-shadow: var(--shadow-md); border: 1px solid rgba(28, 41, 81, 0.08); transition: all 0.3s ease; text-align: center; }
          .feature-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
          .feature-card .icon-box { width: 80px; height: 80px; background: linear-gradient(135deg, var(--primary-color), var(--primary-gold)); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; box-shadow: var(--shadow-md); }
          .feature-card .icon-box i { font-size: 2rem; color: white; }
          .feature-card h4 { color: var(--primary-color); font-size: 1.3rem; margin-bottom: 12px; }
          .feature-card p { color: var(--text-secondary); line-height: 1.6; margin: 0; }
          .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 32px 0; }
          .stat-card { background: linear-gradient(135deg, rgba(28, 41, 81, 0.05), rgba(212, 175, 55, 0.08)); padding: 24px; border-radius: 12px; text-align: center; border: 1px solid rgba(28, 41, 81, 0.1); transition: all 0.3s ease; }
          .stat-card:hover { transform: scale(1.02); }
          .stat-card .stat-number { font-size: 2.5rem; font-weight: 800; background: linear-gradient(135deg, var(--primary-color), var(--primary-gold)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 8px; }
          .stat-card .stat-label { color: var(--text-secondary); font-size: 0.95rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
          .process-timeline { position: relative; padding-left: 40px; margin: 40px 0; }
          .process-timeline::before { content: ''; position: absolute; left: 20px; top: 0; bottom: 0; width: 3px; background: linear-gradient(to bottom, var(--primary-color), var(--primary-gold)); border-radius: 2px; }
          .timeline-item { position: relative; margin-bottom: 40px; padding-left: 40px; }
          .timeline-item:last-child { margin-bottom: 0; }
          .timeline-marker { position: absolute; left: -47px; top: 0; width: 40px; height: 40px; background: linear-gradient(135deg, var(--primary-color), var(--primary-gold)); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-md); z-index: 1; }
          .timeline-marker i { color: white; font-size: 1.1rem; }
          .timeline-content h4 { color: var(--primary-color); font-size: 1.3rem; margin-bottom: 8px; }
          .timeline-content p { color: var(--text-secondary); line-height: 1.6; margin: 0; }
          .comparison-table { width: 100%; border-collapse: collapse; margin: 32px 0; box-shadow: var(--shadow-md); border-radius: 12px; overflow: hidden; }
          .comparison-table th { background: linear-gradient(90deg, var(--primary-color), var(--primary-gold)); color: white; padding: 16px; text-align: left; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; font-size: 0.9rem; }
          .comparison-table td { padding: 16px; border-bottom: 1px solid rgba(28, 41, 81, 0.1); background: white; }
          .comparison-table tr:last-child td { border-bottom: none; }
          .comparison-table tr:hover { background: rgba(28, 41, 81, 0.02); }
          .plc-main ul, .plc-main ol { margin: 20px 0; padding-left: 24px; }
          .plc-main li { color: var(--text-secondary); line-height: 1.7; margin-bottom: 8px; padding-left: 8px; }
          .plc-main ul li::marker { color: var(--primary-gold); font-weight: bold; }
          .plc-main ol li::marker { color: var(--primary-color); font-weight: bold; }
          .plc-main li strong { color: var(--primary-color); font-weight: 700; }
          .inline-lottie { display: inline-block; width: 120px; height: 120px; margin: 20px; vertical-align: middle; }
          .inline-lottie dotlottie-wc { width: 100%; height: 100%; }
          .section-lottie { width: 100%; max-width: 400px; height: 300px; margin: 40px auto; }
          .section-lottie dotlottie-wc { width: 100%; height: 100%; }
          .plc-sidebar { position: sticky; top: 20px; }
          .sidebar-scroll-wrapper { max-height: calc(100vh - 40px); overflow-y: auto; scrollbar-width: thin; scrollbar-color: var(--primary-gold) rgba(28, 41, 81, 0.1); }
          .sidebar-scroll-wrapper::-webkit-scrollbar { width: 6px; }
          .sidebar-scroll-wrapper::-webkit-scrollbar-track { background: rgba(28, 41, 81, 0.05); border-radius: 3px; }
          .sidebar-scroll-wrapper::-webkit-scrollbar-thumb { background: var(--primary-gold); border-radius: 3px; }
          .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0; }
          .back-to-top { position: fixed; bottom: 30px; right: 30px; width: 50px; height: 50px; background: linear-gradient(135deg, var(--primary-color), var(--primary-gold)); color: white; border: none; border-radius: 50%; cursor: pointer; opacity: 0; transform: translateY(100px); transition: all 0.3s ease; box-shadow: var(--shadow-lg); z-index: 999; }
          .back-to-top:hover { transform: translateY(0) scale(1.1); }
          .back-to-top.visible { opacity: 1; transform: translateY(0); }
          @media (max-width: 1100px) { .plc-container { grid-template-columns: 1fr 320px; gap: 32px; } }
          @media (max-width: 900px) { .plc-container { grid-template-columns: 1fr; gap: 40px; } .plc-sidebar { position: relative; top: 0; } }
          @media (max-width: 640px) { .plc-section { padding: 40px 16px; } .plc-main { padding: 32px 24px; } .feature-grid { grid-template-columns: 1fr; } .stats-grid { grid-template-columns: 1fr; } .process-timeline { padding-left: 30px; } .timeline-marker { width: 32px; height: 32px; left: -39px; } }
        ` }} />

        {/* Main page content converted into JSX from provided HTML body */}
        <main id="main-content">
          <section id="plc-content" className="plc-section" aria-labelledby="plc-heading">
            <div className="plc-container">
              <article className="plc-main">
                <h1 id="plc-heading">Public Limited Company Registration</h1>
                <p className="plc-byline">Meaning, Advantages & Complete Registration Process</p>

                <div className="section-lottie" data-lottie="company-registration"></div>

                <p>Are you planning to launch a large-scale business? A Public Limited Company (PLC) may be the ideal business structure for your venture. A PLC is a distinct legal entity, separate from its shareholders, with unique benefits, access to capital, and regulatory obligations.</p>

                <p>At Mundra Legal, we simplify the PLC registration process, helping you establish a compliant and fully operational public company in India.</p>

                <div className="callout">
                  <p><i className="fas fa-chart-line" style={{ color: 'var(--primary-gold)', marginRight: 8 }}></i> <strong>Scale Your Business:</strong> Public Limited Companies offer unparalleled access to capital markets and investment opportunities.</p>
                </div>

                <h2 id="what-is-plc">What is a Public Limited Company?</h2>

                <div className="section-lottie" data-lottie="business-growth"></div>

                <p>A Public Limited Company (PLC) is a business entity whose shares are publicly traded on the stock market. Governed under the <strong>Companies Act, 2013</strong>, PLCs allow investment from the general public through an Initial Public Offering (IPO).</p>

                <div className="highlight-box">
                  <h3>Key Characteristics</h3>
                  <ul>
                    <li><strong>Separate Legal Entity</strong> – PLCs exist independently of their shareholders.</li>
                    <li><strong>Limited Liability</strong> – Shareholders' personal assets are protected.</li>
                    <li><strong>Regulatory Compliance</strong> – Required to submit financial statements, maintain transparency, and adhere to corporate governance standards.</li>
                    <li><strong>Public Investment</strong> – Shares are offered to the general public, making it easier to raise capital.</li>
                  </ul>
                </div>

                <p>PLCs can be <strong>listed or unlisted</strong> on stock exchanges. Once listed, they must provide annual financial reports to investors and regulatory authorities.</p>

                <h2 id="requirements">Requirements to Start a Public Limited Company</h2>

                <div className="section-lottie" data-lottie="legal-documents"></div>

                <p>Starting a PLC requires strict compliance with legal regulations:</p>

                <div className="feature-grid">
                  {/* ...feature cards... */}
                  <div className="feature-card">
                    <div className="icon-box"><i className="fas fa-users"></i></div>
                    <h4>Minimum 7 Members</h4>
                    <p>As shareholders for company formation</p>
                  </div>
                  <div className="feature-card">
                    <div className="icon-box"><i className="fas fa-user-tie"></i></div>
                    <h4>Minimum 3 Directors</h4>
                    <p>To oversee company operations and governance</p>
                  </div>
                  <div className="feature-card">
                    <div className="icon-box"><i className="fas fa-rupee-sign"></i></div>
                    <h4>Minimum Capital</h4>
                    <p>₹5 lakh paid-up capital requirement</p>
                  </div>
                  <div className="feature-card">
                    <div className="icon-box"><i className="fas fa-fingerprint"></i></div>
                    <h4>DSC & DIN</h4>
                    <p>Digital Signature Certificates and Director Identification Numbers for all directors</p>
                  </div>
                  <div className="feature-card">
                    <div className="icon-box"><i className="fas fa-signature"></i></div>
                    <h4>Company Name Approval</h4>
                    <p>Ensure it follows ROC guidelines and is unique</p>
                  </div>
                  <div className="feature-card">
                    <div className="icon-box"><i className="fas fa-file-contract"></i></div>
                    <h4>MoA & AoA</h4>
                    <p>Memorandum and Articles of Association outlining objectives and company rules</p>
                  </div>
                  <div className="feature-card">
                    <div className="icon-box"><i className="fas fa-folder-open"></i></div>
                    <h4>Supporting Documents</h4>
                    <p>Form DIR-12, identity/address proofs, board resolutions</p>
                  </div>
                  <div className="feature-card">
                    <div className="icon-box"><i className="fas fa-credit-card"></i></div>
                    <h4>Registration Fee</h4>
                    <p>Payment as per ROC requirements</p>
                  </div>
                  <div className="feature-card">
                    <div className="icon-box"><i className="fas fa-certificate"></i></div>
                    <h4>Business Commencement</h4>
                    <p>Certificate marking official start of operations</p>
                  </div>
                </div>

                <h2 id="advantages">Advantages of a Public Limited Company</h2>

                <div className="section-lottie" data-lottie="investment-growth"></div>

                <p>PLCs provide several strategic and operational benefits:</p>

                <div className="feature-grid">
                  <div className="feature-card">
                    <div className="icon-box"><i className="fas fa-shield-alt"></i></div>
                    <h4>1. Limited Liability Protection</h4>
                    <p>Shareholders' personal assets remain secure against company debts and liabilities.</p>
                  </div>
                  <div className="feature-card">
                    <div className="icon-box"><i className="fas fa-money-bill-wave"></i></div>
                    <h4>2. Access to Capital & Liquidity</h4>
                    <p>Raise funds via public share issuance, IPOs, or debentures. Shares are easily transferable, providing flexibility to investors.</p>
                  </div>
                  <div className="feature-card">
                    <div className="icon-box"><i className="fas fa-user-friends"></i></div>
                    <h4>3. Professional Management</h4>
                    <p>Managed by a board of directors and senior executives, ensuring strategic decisions and corporate governance.</p>
                  </div>
                  <div className="feature-card">
                    <div className="icon-box"><i className="fas fa-landmark"></i></div>
                    <h4>4. Enhanced Government Support</h4>
                    <p>Eligible for subsidies, tax incentives, and economic development initiatives.</p>
                  </div>
                  <div className="feature-card">
                    <div className="icon-box"><i className="fas fa-award"></i></div>
                    <h4>5. Trust & Reputation</h4>
                    <p>Being publicly listed increases credibility with investors, banks, and stakeholders.</p>
                  </div>
                  <div className="feature-card">
                    <div className="icon-box"><i className="fas fa-gifts"></i></div>
                    <h4>6. Employee Incentives</h4>
                    <p>PLCs can offer ESOPs, RSUs, and other equity-based incentives to attract and retain talent.</p>
                  </div>
                </div>

                <h2 id="comparison">Public vs Private Limited Company</h2>

                <div className="section-lottie" data-lottie="business-analytics"></div>

                <table className="comparison-table">
                  <thead>
                    <tr><th>Parameter</th><th>Public Limited Company</th><th>Private Limited Company</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Definition</strong></td><td>Listed on stock exchange, shares publicly tradable</td><td>Closely held, not publicly traded</td></tr>
                    <tr><td><strong>Minimum Members</strong></td><td>7</td><td>2</td></tr>
                    <tr><td><strong>Minimum Directors</strong></td><td>3</td><td>2</td></tr>
                    <tr><td><strong>Paid-Up Capital</strong></td><td>₹5 lakh</td><td>₹1 lakh</td></tr>
                    <tr><td><strong>Public Subscription</strong></td><td>Allowed</td><td>Not allowed</td></tr>
                    <tr><td><strong>Director Retirement</strong></td><td>⅔ retire by rotation</td><td>No mandatory rotation</td></tr>
                  </tbody>
                </table>

                <h2 id="documents">Documents Required for PLC Registration</h2>

                <div className="section-lottie" data-lottie="legal-services"></div>

                <div className="highlight-box">
                  <ul>
                    <li><strong>Memorandum of Association (MoA)</strong></li>
                    <li><strong>Articles of Association (AoA)</strong></li>
                    <li><strong>DIN & DSC</strong> of directors</li>
                    <li><strong>Identity & address proofs</strong></li>
                    <li><strong>Form DIR-12, INC-7, INC-22</strong></li>
                    <li><strong>Board resolutions</strong> approving incorporation</li>
                    <li><strong>PAN & TAN</strong> of the company</li>
                    <li><strong>Bank statements</strong> & registered office proof</li>
                    <li><strong>Certificate of Incorporation (COI)</strong> & Business Commencement Certificate</li>
                  </ul>
                </div>

                <h2 id="registration-process">Step-by-Step Registration Process</h2>

                <div className="section-lottie" data-lottie="legal-consultation"></div>

                <div className="process-timeline">
                  <div className="timeline-item">
                    <div className="timeline-marker"><i className="fas fa-id-card"></i></div>
                    <div className="timeline-content">
                      <h4>Obtain DIN</h4>
                      <p>Director Identification Number via MCA portal for all directors.</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker"><i className="fas fa-certificate"></i></div>
                    <div className="timeline-content">
                      <h4>Acquire DSC</h4>
                      <p>Digital signature for signing documents electronically.</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker"><i className="fas fa-pen"></i></div>
                    <div className="timeline-content">
                      <h4>Draft MoA & AoA</h4>
                      <p>Define company objectives and rules governing operations.</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker"><i className="fas fa-check-circle"></i></div>
                    <div className="timeline-content">
                      <h4>Company Name Approval</h4>
                      <p>File with ROC for unique name verification and approval.</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker"><i className="fas fa-file-alt"></i></div>
                    <div className="timeline-content">
                      <h4>Submit Incorporation Forms</h4>
                      <p>File INC-7, INC-22, DIR-12 with required documentation.</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker"><i className="fas fa-credit-card"></i></div>
                    <div className="timeline-content">
                      <h4>Pay Registration Fees</h4>
                      <p>Online payment of government and registration fees.</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker"><i className="fas fa-search"></i></div>
                    <div className="timeline-content">
                      <h4>Verification by ROC</h4>
                      <p>Upon approval, Certificate of Incorporation (COI) is issued.</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker"><i className="fas fa-flag-checkered"></i></div>
                    <div className="timeline-content">
                      <h4>Commence Business</h4>
                      <p>Apply for Business Commencement Certificate to start operations.</p>
                    </div>
                  </div>
                </div>

                <h2 id="additional-advantages">Additional Advantages of PLCs</h2>

                <div className="section-lottie" data-lottie="global-trade"></div>

                <div className="feature-grid">
                  <div className="feature-card">
                    <div className="icon-box"><i className="fas fa-exchange-alt"></i></div>
                    <h4>Market Liquidity</h4>
                    <p>Shares can be bought and sold freely on stock exchanges, providing easy exit options for investors.</p>
                  </div>
                  <div className="feature-card">
                    <div className="icon-box"><i className="fas fa-user-check"></i></div>
                    <h4>Employee Benefits</h4>
                    <p>Flexible equity plans, ESOPs, long-term incentive plans to attract top talent.</p>
                  </div>
                  <div className="feature-card">
                    <div className="icon-box"><i className="fas fa-star"></i></div>
                    <h4>Enhanced Reputation</h4>
                    <p>Public scrutiny and regular reporting build trust with stakeholders and customers.</p>
                  </div>
                  <div className="feature-card">
                    <div className="icon-box"><i className="fas fa-rocket"></i></div>
                    <h4>Expansion Opportunities</h4>
                    <p>Access to large-scale capital for growth, R&D, acquisitions, or entering new markets.</p>
                  </div>
                </div>

                <h2 id="risks">Risks of Becoming a Public Limited Company</h2>

                <div className="section-lottie" data-lottie="team-collaboration"></div>

                <div className="highlight-box">
                  <div className="feature-grid">
                    <div className="feature-card">
                      <div className="icon-box"><i className="fas fa-file-invoice-dollar"></i></div>
                      <h4>High Compliance Costs</h4>
                      <p>Statutory and financial reporting overhead requires dedicated resources.</p>
                    </div>
                    <div className="feature-card">
                      <div className="icon-box"><i className="fas fa-user-slash"></i></div>
                      <h4>Loss of Control</h4>
                      <p>Majority shareholders may influence decisions, reducing founder control.</p>
                    </div>
                    <div className="feature-card">
                      <div className="icon-box"><i className="fas fa-eye"></i></div>
                      <h4>Market Scrutiny</h4>
                      <p>Public and media attention on revenue, profits, and management decisions.</p>
                    </div>
                  </div>
                </div>

                <h2 id="go-public">Should Private Companies Go Public?</h2>

                <div className="callout">
                  <p>Going public is ideal for <strong>mature companies</strong> with stable revenue, market leadership, and growth potential. It offers access to capital and employee incentives but comes with regulatory scrutiny and governance responsibilities.</p>
                </div>

                <p>Consider the following factors before going public:</p>

                <ul>
                  <li><strong>Revenue Stability</strong> – Consistent and predictable revenue streams</li>
                  <li><strong>Market Position</strong> – Strong market presence and competitive advantage</li>
                  <li><strong>Growth Plans</strong> – Clear expansion strategy requiring capital</li>
                  <li><strong>Governance Readiness</strong> – Ability to comply with regulatory requirements</li>
                  <li><strong>Shareholder Expectations</strong> – Willingness to be accountable to public investors</li>
                </ul>

                <h2 id="mundra-services">Mundra Legal – Your PLC Registration Partner</h2>

                <p>At Mundra Legal, we simplify the entire process of PLC incorporation:</p>

                <div className="feature-grid">
                  <div className="feature-card">
                    <div className="icon-box"><i className="fas fa-handshake"></i></div>
                    <h4>End-to-End Consultation</h4>
                    <p>Complete guidance and documentation support throughout the registration process.</p>
                  </div>
                  <div className="feature-card">
                    <div className="icon-box"><i className="fas fa-file-signature"></i></div>
                    <h4>Filing MoA, AoA & Forms</h4>
                    <p>Professional drafting and submission of incorporation documents.</p>
                  </div>
                  <div className="feature-card">
                    <div className="icon-box"><i className="fas fa-tasks"></i></div>
                    <h4>DIN, DSC, PAN, TAN</h4>
                    <p>Assistance with all statutory requirements and ROC approvals.</p>
                  </div>
                  <div className="feature-card">
                    <div className="icon-box"><i className="fas fa-chart-bar"></i></div>
                    <h4>IPO & Governance Guidance</h4>
                    <p>Expert advice on compliance, IPO readiness, and corporate governance.</p>
                  </div>
                </div>

                <p>Our experts ensure a smooth, compliant, and fast registration so your business can scale confidently.</p>

                <div className="stats-grid">
                  <div className="stat-card"><div className="stat-number">500+</div><div className="stat-label">Companies Registered</div></div>
                  <div className="stat-card"><div className="stat-number">15-20</div><div className="stat-label">Days Processing</div></div>
                  <div className="stat-card"><div className="stat-number">100%</div><div className="stat-label">Legal Compliance</div></div>
                  <div className="stat-card"><div className="stat-number">24/7</div><div className="stat-label">Expert Support</div></div>
                </div>

                <h2 id="faqs">Frequently Asked Questions (FAQs)</h2>

                <div className="section-lottie" data-lottie="contact-connect"></div>

                <div className="highlight-box">
                  <h4>Q1. What is a Public Limited Company?</h4>
                  <p>A PLC is a business entity whose shares are publicly traded and offers limited liability to its shareholders.</p>
                </div>

                <div className="highlight-box">
                  <h4>Q2. How many members are required for a PLC?</h4>
                  <p>Minimum <strong>7 members</strong> and <strong>3 directors</strong> are required to form a Public Limited Company.</p>
                </div>

                <div className="highlight-box">
                  <h4>Q3. What is the minimum capital requirement?</h4>
                  <p><strong>₹5 lakh paid-up capital</strong> is required to start a PLC in India.</p>
                </div>

                <div className="highlight-box">
                  <h4>Q4. Can PLC shares be traded publicly?</h4>
                  <p>Yes, PLC shares can be listed on a stock exchange and freely traded by investors.</p>
                </div>

                <div className="highlight-box">
                  <h4>Q5. What are the compliance requirements?</h4>
                  <p>PLCs must file annual reports, audits, and adhere to corporate governance standards as per the Companies Act, 2013.</p>
                </div>

                <div className="callout" style={{ background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-gold) 100%)', border: 'none', color: 'white', marginTop: 48 }}>
                  <h3 style={{ color: 'white', marginBottom: 16 }}><i className="fas fa-phone-alt" style={{ marginRight: 8 }}></i> Contact Mundra Legal Today</h3>
                  <p style={{ color: 'white', fontSize: '1.1rem', marginBottom: 0 }}>Register your Public Limited Company and take the first step toward growth and credibility. Our experts are ready to guide you through every step of the process.</p>
                </div>
              </article>

              <aside className="plc-sidebar">
                <div className="sidebar-scroll-wrapper">
                  {/* Replace the fetch-based sidebar placeholder with the SidebarForm component */}
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

export default PublicLimitedCompany;
