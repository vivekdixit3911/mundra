import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SidebarForm from "../../components/SidebarForm";
import ServiceHero from '../../components/ServiceHero';
import { Player } from '@lottiefiles/react-lottie-player';
import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #fff;
`;

const ContentSection = styled.main`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px 80px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 28px 16px 60px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 28px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 300px;
  }

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const Article = styled.article`
  h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 4.6vw, 3.6rem);
    margin-bottom: 12px;
    color: #1C2951;
    display: inline-block;
    background: linear-gradient(180deg, #ffffff 0%, #fbfbfd 100%);
    padding: 26px 34px;
    border-radius: 22px;
    border: 1px solid rgba(212,175,55,0.08);
    box-shadow: 0 18px 50px rgba(28,41,81,0.08), 0 6px 18px rgba(0,0,0,0.04);
    line-height: 1.02;
    -webkit-font-smoothing: antialiased;
  }

  h1 .gradient {
    display: inline-block;
    background: linear-gradient(90deg, #1C2951 0%, #2D4A7C 40%, #D4AF37 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 800;
    letter-spacing: -0.5px;
    padding-right: 4px;
  }

  p {
    color: #334155;
    line-height: 1.7;
    margin-bottom: 14px;
  }

  h2 {
    margin-top: 20px;
    margin-bottom: 12px;
    color: #1C2951;
  }

  ul { margin-left: 20px; }
`;

const Side = styled.aside`
  position: relative;
  align-self: start;

  @media (min-width: 821px) {
    position: sticky;
    top: 120px;
    height: calc(100vh - 140px);
  }

  .sidebar-inner {
    height: 100%;
    overflow: auto;
    padding-right: 6px;
  }
`;

const VisualRow = styled.div`
  display:flex;
  gap:18px;
  align-items:center;
  margin: 18px 0;

  .player-box { width: 320px; max-width: 40%; }

  @media (max-width: 820px) {
    flex-direction: column;
    .player-box { width: 100%; max-width: 100%; }
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 12px;

  @media (max-width: 820px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .feature-card {
    display:flex;
    gap:12px;
    align-items:center;
    padding:12px;
    background: #f8fafc;
    border-radius:8px;
    border: 1px solid rgba(28,41,81,0.04);
  }
`;

const GstRegistrationAndReturns = () => {
  useEffect(() => {
    document.title = 'GST Registration & Returns Services | Mundra Legal Consultants';
    // meta description
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = 'GST registration, GSTR filings, ITC reconciliation and GST advisory by Mundra Legal Consultants. Fast, accurate GST return filing and compliance support across India.';

    // JSON-LD structured data for Service
    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.id = 'ld-gst-service';
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Mundra Legal Consultants - GST Services",
      "description": "GST registration, return filing, ITC reconciliation and GST advisory across India.",
      "url": window.location.href,
      "areaServed": "IN",
      "serviceType": ["GST Registration","GST Returns","GST Advisory"],
      "provider": {
        "@type": "Organization",
        "name": "Mundra Legal Consultants",
        "url": window.location.origin
      }
    });
    // remove previous if exists
    const prev = document.getElementById('ld-gst-service');
    if (prev) prev.remove();
    document.head.appendChild(ld);
  }, []);

  return (
    <PageWrapper>
      <Header />

      <ServiceHero
        title="GST Registration & Returns"
        subtitle="Register for GST, manage returns, and stay compliant — quick, accurate, and reliable service."
        breadcrumb="GST Registration & Returns"
      />

      <ContentSection>
        <Grid>
          <Article>
            <h1><span className="gradient">GST Registration & Returns Services</span></h1>
            <p style={{ marginTop: '6px', color: '#64748b' }}>Professional DPR & Bankable Project Reports by Mundra Legal Consultants</p>

            {/* Lottie JSON visual from Drafts folder */}
            <VisualRow>
              <div className="player-box" aria-hidden>
                <Player
                  src="/assets/Drafts/registration.json"
                  autoplay
                  loop
                  style={{ height: 220, width: '100%' }}
                />
              </div>
              <div>
                <p style={{ margin: 0 }}>
                  Our GST services cover everything from registration to monthly/quarterly returns and advisory. The animation explains the end-to-end flow — how documents move from onboarding to filing and reconciliation.
                </p>
              </div>
            </VisualRow>

            <h2>Services we provide</h2>
            <ul>
              <li>GST Registration for new businesses (Regular, Composition)</li>
              <li>GSTR-1 / GSTR-3B / GSTR-9 filing and reconciliation</li>
              <li>GST advisory, notices & compliance support</li>
              <li>Input tax credit (ITC) reconciliation and advisory</li>
              <li>GST audit support and representation</li>
              <li>GST cancellation and amendment handling</li>
            </ul>

            <h2>Overview: What is GST registration?</h2>
            <p>Goods and Services Tax (GST) is a comprehensive indirect tax on the supply of goods and services across India. Businesses whose turnover exceeds statutory thresholds must register for GST and comply with periodic return filings.</p>

            <h2>Types of GST Registration</h2>
            <p>There are two common registration types for businesses:</p>
            <ul>
              <li><strong>Regular GST:</strong> For most businesses exceeding turnover thresholds.</li>
              <li><strong>Composition Scheme:</strong> Simplified scheme for small taxpayers with lower compliance burden but restricted outward supplies.</li>
            </ul>

            <h2>Who needs to register for GST?</h2>
            <p>Businesses with turnover above the prescribed threshold (varies by state and business type), online sellers, e-commerce operators, and certain inter-state suppliers must register for GST.</p>

            <h2>Documents required for GST registration</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 8 }}>
              <thead>
                <tr style={{ background: '#f1f5f9' }}>
                  <th style={{ padding: 8, textAlign: 'left', border: '1px solid #e6edf3' }}>Document</th>
                  <th style={{ padding: 8, textAlign: 'left', border: '1px solid #e6edf3' }}>Who provides</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: 8, border: '1px solid #e6edf3' }}>PAN of business / proprietor</td>
                  <td style={{ padding: 8, border: '1px solid #e6edf3' }}>Business owner</td>
                </tr>
                <tr>
                  <td style={{ padding: 8, border: '1px solid #e6edf3' }}>Aadhaar / ID proof of promoters</td>
                  <td style={{ padding: 8, border: '1px solid #e6edf3' }}>Directors / Partners</td>
                </tr>
                <tr>
                  <td style={{ padding: 8, border: '1px solid #e6edf3' }}>Business address proof</td>
                  <td style={{ padding: 8, border: '1px solid #e6edf3' }}>Business</td>
                </tr>
                <tr>
                  <td style={{ padding: 8, border: '1px solid #e6edf3' }}>Bank account details</td>
                  <td style={{ padding: 8, border: '1px solid #e6edf3' }}>Business</td>
                </tr>
              </tbody>
            </table>

            <h2>Comparison: Regular vs Composition</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 8 }}>
              <thead>
                <tr style={{ background: '#f8fafc' }}>
                  <th style={{ padding: 8, border: '1px solid #e6edf3' }}>Feature</th>
                  <th style={{ padding: 8, border: '1px solid #e6edf3' }}>Regular GST</th>
                  <th style={{ padding: 8, border: '1px solid #e6edf3' }}>Composition</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: 8, border: '1px solid #e6edf3' }}>Eligibility</td>
                  <td style={{ padding: 8, border: '1px solid #e6edf3' }}>All businesses above threshold</td>
                  <td style={{ padding: 8, border: '1px solid #e6edf3' }}>Small taxpayers (turnover limit)</td>
                </tr>
                <tr>
                  <td style={{ padding: 8, border: '1px solid #e6edf3' }}>Returns</td>
                  <td style={{ padding: 8, border: '1px solid #e6edf3' }}>Monthly/Quarterly returns</td>
                  <td style={{ padding: 8, border: '1px solid #e6edf3' }}>Quarterly returns (simplified)</td>
                </tr>
                <tr>
                  <td style={{ padding: 8, border: '1px solid #e6edf3' }}>Tax credit</td>
                  <td style={{ padding: 8, border: '1px solid #e6edf3' }}>Input tax credit allowed</td>
                  <td style={{ padding: 8, border: '1px solid #e6edf3' }}>No ITC</td>
                </tr>
              </tbody>
            </table>

            <h2>Registration process: Step-by-step</h2>
            <ol>
              <li>Document collection & verification</li>
              <li>Filing application on GST portal</li>
              <li>Verification and ARN issuance</li>
              <li>GSTIN issuance and onboarding</li>
            </ol>

            <h2>Return filing: GSTR types explained</h2>
            <p>Common returns we file:</p>
            <ul>
              <li><strong>GSTR-1:</strong> Outward supplies summary (monthly/quarterly)</li>
              <li><strong>GSTR-3B:</strong> Monthly summary return (tax payment)</li>
              <li><strong>GSTR-9:</strong> Annual return summary</li>
            </ul>

            <h2>Timeline & typical fees</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 8 }}>
              <thead>
                <tr style={{ background: '#f1f5f9' }}>
                  <th style={{ padding: 8, border: '1px solid #e6edf3' }}>Task</th>
                  <th style={{ padding: 8, border: '1px solid #e6edf3' }}>Typical time</th>
                  <th style={{ padding: 8, border: '1px solid #e6edf3' }}>Starting price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: 8, border: '1px solid #e6edf3' }}>GST Registration</td>
                  <td style={{ padding: 8, border: '1px solid #e6edf3' }}>3-7 working days</td>
                  <td style={{ padding: 8, border: '1px solid #e6edf3' }}>₹2,499</td>
                </tr>
                <tr>
                  <td style={{ padding: 8, border: '1px solid #e6edf3' }}>Monthly GSTR-3B filing</td>
                  <td style={{ padding: 8, border: '1px solid #e6edf3' }}>By due date each month</td>
                  <td style={{ padding: 8, border: '1px solid #e6edf3' }}>₹499 / month</td>
                </tr>
                <tr>
                  <td style={{ padding: 8, border: '1px solid #e6edf3' }}>Annual GSTR-9 filing</td>
                  <td style={{ padding: 8, border: '1px solid #e6edf3' }}>Within 3 months of FY end</td>
                  <td style={{ padding: 8, border: '1px solid #e6edf3' }}>₹1,499</td>
                </tr>
              </tbody>
            </table>

            <h2>Compliance & penalties</h2>
            <p>Late filing or incorrect returns can lead to interest and penalties. We provide proactive reminders and reconciliation to minimise risks.</p>

            <h2>Visual: Filing distribution (sample)</h2>
            {/* Simple responsive SVG bar chart */}
            <div style={{ overflowX: 'auto', marginTop: 12 }}>
              <svg viewBox="0 0 600 200" width="100%" height="200" preserveAspectRatio="xMidYMid meet">
                <style>{`.bar { fill: #2D4A7C } .label { font-size: 12px; fill: #334155 }`}</style>
                <rect x="60" y="50" width="80" height="120" className="bar" opacity="0.9"></rect>
                <text x="100" y="180" textAnchor="middle" className="label">GSTR-1</text>
                <rect x="200" y="80" width="80" height="90" className="bar" opacity="0.8"></rect>
                <text x="240" y="180" textAnchor="middle" className="label">GSTR-3B</text>
                <rect x="340" y="110" width="80" height="60" className="bar" opacity="0.7"></rect>
                <text x="380" y="180" textAnchor="middle" className="label">GSTR-9</text>
                <rect x="480" y="30" width="80" height="140" className="bar" opacity="1"></rect>
                <text x="520" y="180" textAnchor="middle" className="label">ITC Reco</text>
                <text x="300" y="20" textAnchor="middle" style={{ fontSize: 14, fill: '#1C2951', fontWeight: 700 }}>Sample filing distribution (relative)</text>
              </svg>
            </div>

            <h2>Frequently asked questions</h2>
            <div>
              <p><strong>Q:</strong> Can I register multiple GSTINs for branches?<br /><strong>A:</strong> Yes — we help register and manage multiple GSTINs including inter-branch filings.</p>
              <p><strong>Q:</strong> Do you handle GST audits?<br /><strong>A:</strong> Yes, we assist with GST audits and notices with full documentation support.</p>
            </div>

            <h2>Get started</h2>
            <p>Contact our GST experts to get a tailored compliance plan for your business. Fill the form on the right or call us for a free consultation.</p>
            <FeatureGrid>
              <div className="feature-card">
                <img src="/assets/Drafts/icon-documents.svg" alt="Docs" style={{ width:44,height:44 }} />
                <div>
                  <strong>Document Handling</strong>
                  <div style={{ fontSize: 13, color:'#64748b' }}>We manage invoices, reconciliations and uploads.</div>
                </div>
              </div>

              <div className="feature-card">
                <img src="/assets/Drafts/icon-growth.svg" alt="Compliance" style={{ width:44,height:44 }} />
                <div>
                  <strong>Accurate Filing</strong>
                  <div style={{ fontSize: 13, color:'#64748b' }}>Minimise errors, avoid penalties, maintain records.</div>
                </div>
              </div>

              <div className="feature-card">
                <img src="/assets/Drafts/icon-investor.svg" alt="Support" style={{ width:44,height:44 }} />
                <div>
                  <strong>Expert Support</strong>
                  <div style={{ fontSize: 13, color:'#64748b' }}>Advisory and representation for notices or assessments.</div>
                </div>
              </div>
            </FeatureGrid>

            <h2>How it works</h2>
            <ol>
              <li>Onboarding & document collection</li>
              <li>Data reconciliation and tax calculation</li>
              <li>Return filing and acknowledgement handling</li>
              <li>Quarterly/yearly review and advisory</li>
            </ol>

            <h2>FAQs</h2>
            <p><strong>Q:</strong> How long does GST registration take?<br /><strong>A:</strong> Usually 3-7 working days after submission of documents and verification.</p>
            <p><strong>Q:</strong> Can you handle multiple registrations for group companies?<br /><strong>A:</strong> Yes — we provide bulk onboarding and filings for groups and branches.</p>
          </Article>

          <Side>
            <div className="sidebar-inner">
              <SidebarForm />
            </div>
          </Side>
        </Grid>
      </ContentSection>

      <Footer />
    </PageWrapper>
  );
};

export default GstRegistrationAndReturns;
