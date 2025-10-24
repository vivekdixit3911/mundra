import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServiceHero from '../../components/ServiceHero';
import { PageContent } from './ServicePage.styles.js';
import SidebarForm from '../../components/SidebarForm';
import { Player } from '@lottiefiles/react-lottie-player';

const AnnualFilingAndRoc = () => {
  return (
    <>
      <Header />
      <ServiceHero
        title="Annual Filing & ROC"
        subtitle="Ensuring your company's compliance with annual filing and ROC requirements."
        breadcrumb="Annual Filing & ROC"
      />

      <PageContent>
        <div className="container wpc-container">
          <main className="wpc-main">
            <div style={{display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '18px'}}>
              <div style={{flex: 1}}>
                <h1>Annual Filing of Company – Ensure 100% Compliance with Mundra Legal</h1>
                <p>Under the Companies Act, 2013, every registered company in India — whether Private Limited, Public Limited, One Person Company (OPC), or Section 8 Company — must complete its annual filing with the Registrar of Companies (ROC). These filings provide a transparent record of the company’s financial performance, shareholding structure, and management details.</p>
                <p>At Mundra Legal, we simplify your annual compliance process — from preparing accurate financial statements to filing AOC-4, MGT-7, and other mandatory forms — ensuring full legal adherence and zero penalties.</p>
              </div>
              <div style={{width: 220}}>
                {/* single Lottie player instance (renders as SVG in DOM) */}
                <Player
                  src="/assets/Drafts/Business.json"
                  loop
                  autoplay
                  style={{ width: 220, height: 220 }}
                />
              </div>
            </div>

            <h2>Why Annual Filing Matters</h2>
            <p>Annual filing is more than a routine task — it’s a legal obligation and a sign of corporate integrity. Failure to comply can lead to heavy penalties, loss of active status, or even the company being struck off from the ROC.</p>

            <h3>Importance of Annual Filing</h3>
            <ul>
              <li>Maintains the company’s legal status and credibility</li>
              <li>Builds investor and stakeholder confidence</li>
              <li>Ensures transparency and accountability</li>
              <li>Helps in loan processing and government tenders</li>
              <li>Prevents penalties and legal consequences</li>
            </ul>

            <h3>Checklist for Annual Filing</h3>
            <p>Here’s a complete checklist of the annual compliance tasks every company must fulfill:</p>
            <ol>
              <li><strong>Preparation of Financial Statements</strong><br/>Including Balance Sheet, Profit &amp; Loss Account, and Notes to Accounts.</li>
              <li><strong>Filing of Form AOC-4</strong><br/>Submission of audited financial statements to the ROC within the prescribed timeline.</li>
              <li><strong>Filing of Form MGT-7 / MGT-7A</strong><br/>Annual return containing company details such as shareholding, directorship, and ownership pattern.</li>
              <li><strong>Filing of Form ADT-1</strong><br/>Declaration of appointment or reappointment of the statutory auditor.</li>
              <li><strong>Annual General Meeting (AGM) Compliance</strong><br/>Conducting AGM, recording minutes, and filing related resolutions with the ROC.</li>
            </ol>

            <h3>Documents Required for Annual Filing</h3>
            <ul>
              <li>Audited Balance Sheet and Profit &amp; Loss Account</li>
              <li>Board Report and Auditor’s Report</li>
              <li>Details of directors, shareholders, and shareholding</li>
              <li>AGM notices, minutes, and resolutions</li>
              <li>Proof of major financial transactions and bank statements</li>
              <li>Digital Signatures (DSCs) of directors for e-filing</li>
            </ul>

            <h3>Annual Compliance Requirements for Private Limited Companies</h3>
            <p>Every Private Limited Company must comply with specific annual filing norms to remain active and penalty-free under the MCA (Ministry of Corporate Affairs).</p>

            <ol>
              <li><strong>Certificate of Commencement of Business</strong><br/>Companies incorporated after November 2019 must obtain this certificate within 180 days of incorporation. Penalty: ₹50,000 for the company and ₹1,000 per day for directors until compliance.</li>
              <li><strong>Appointment of Auditor (Form ADT-1)</strong><br/>Every company must appoint its first statutory auditor within 30 days of incorporation. Penalty: ₹300 per month of delay, and business operations may be restricted until appointment.</li>
              <li><strong>Filing of Income Tax Return (ITR-6)</strong><br/>Every company — active or dormant, profit-making or loss-incurring — must file its Income Tax Return annually.</li>
              <li><strong>Filing of Form AOC-4</strong><br/>Companies must file Form AOC-4 to submit audited financial statements and board reports within 30 days of AGM (usually by October 30 each year). Penalty: ₹200 per day of default.</li>
              <li><strong>Filing of Form MGT-7 / MGT-7A</strong><br/>An annual return containing shareholding and company details must be filed within 60 days of the AGM (usually by November 28). Penalty: ₹200 per day of default.</li>
              <li><strong>DIN e-KYC Filing</strong><br/>Every director with a Director Identification Number (DIN) must complete DIN e-KYC annually to keep their DIN active and valid.</li>
              <li><strong>Annual General Meeting (AGM)</strong><br/>Every company must hold an AGM within six months of the financial year’s end to approve financials, discuss operations, and declare dividends.</li>
              <li><strong>Director’s Report (Section 134)</strong><br/>Directors must prepare and submit an annual report outlining the company’s performance, CSR activities, financial highlights, and governance compliance.</li>
            </ol>

            <h3>Other Key Annual Compliances</h3>
            <p>Besides ROC filings, companies must also fulfill other periodic obligations under tax and labour laws:</p>
            <ul>
              <li>GST Returns: Monthly, quarterly, and annual</li>
              <li>TDS Return Filing: Quarterly</li>
              <li>Advance Tax Payments</li>
              <li>Tax Audit Report (if applicable)</li>
              <li>PF and ESI Returns</li>
              <li>Professional Tax Returns</li>
              <li>Environmental and Industrial Law Compliance</li>
            </ul>

            <h3>Due Dates for Annual Filings (FY 2024–25)</h3>
            <div style={{overflowX: 'auto'}}>
              <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '12px'}}>
                <thead>
                  <tr style={{background: '#f1f5f9'}}>
                    <th style={{textAlign: 'left', padding: '12px', borderBottom: '1px solid #e2e8f0'}}>Compliance</th>
                    <th style={{textAlign: 'left', padding: '12px', borderBottom: '1px solid #e2e8f0'}}>Form</th>
                    <th style={{textAlign: 'left', padding: '12px', borderBottom: '1px solid #e2e8f0'}}>Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{padding: '12px', borderBottom: '1px solid #edf2f7'}}>Appointment of Auditor</td>
                    <td style={{padding: '12px', borderBottom: '1px solid #edf2f7'}}>ADT-1</td>
                    <td style={{padding: '12px', borderBottom: '1px solid #edf2f7'}}>Within 30 days of AGM</td>
                  </tr>
                  <tr>
                    <td style={{padding: '12px', borderBottom: '1px solid #edf2f7'}}>Financial Statement Filing</td>
                    <td style={{padding: '12px', borderBottom: '1px solid #edf2f7'}}>AOC-4</td>
                    <td style={{padding: '12px', borderBottom: '1px solid #edf2f7'}}>Within 30 days of AGM</td>
                  </tr>
                  <tr>
                    <td style={{padding: '12px', borderBottom: '1px solid #edf2f7'}}>Annual Return Filing</td>
                    <td style={{padding: '12px', borderBottom: '1px solid #edf2f7'}}>MGT-7 / MGT-7A</td>
                    <td style={{padding: '12px', borderBottom: '1px solid #edf2f7'}}>Within 60 days of AGM</td>
                  </tr>
                  <tr>
                    <td style={{padding: '12px', borderBottom: '1px solid #edf2f7'}}>Director KYC</td>
                    <td style={{padding: '12px', borderBottom: '1px solid #edf2f7'}}>DIR-3 KYC</td>
                    <td style={{padding: '12px', borderBottom: '1px solid #edf2f7'}}>30 September</td>
                  </tr>
                  <tr>
                    <td style={{padding: '12px'}}>Income Tax Return</td>
                    <td style={{padding: '12px'}}>ITR-6</td>
                    <td style={{padding: '12px'}}>31 October</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Penalties for Non-Compliance</h3>
            <p>Failure to meet annual filing deadlines can lead to:</p>
            <ul>
              <li>Penalty of ₹200 per day per form (AOC-4, MGT-7)</li>
              <li>Company marked as “Inactive” or “Defaulting” in MCA records</li>
              <li>Disqualification of directors under Section 164(2)</li>
              <li>In severe cases, strike-off under Section 248</li>
            </ul>

            <h3>How Mundra Legal Assists in Annual Compliance</h3>
            <ol>
              <li><strong>Accounting &amp; Financial Statement Preparation</strong><br/>We maintain your books of accounts, reconcile transactions, and prepare your audited financial statements in line with Indian Accounting Standards (Ind-AS).</li>
              <li><strong>Secretarial Compliance Support</strong><br/>Our compliance team drafts board meeting notices, AGM minutes, director reports, and annual reports as per the Companies Act, 2013.</li>
              <li><strong>ROC Filing &amp; MCA Portal Submission</strong><br/>We prepare and file AOC-4, MGT-7, ADT-1, and related forms through the MCA portal using your registered DSCs.</li>
              <li><strong>Income Tax Return Filing</strong><br/>We assist in preparing and filing your company’s ITR-6, ensuring accuracy and optimization of deductions.</li>
              <li><strong>Continuous Compliance Monitoring</strong><br/>Our system sends automated reminders and updates to ensure no due date is missed.</li>
            </ol>

            <h3>Why Choose Mundra Legal for Annual Company Filing</h3>
            <ul>
              <li>Expert Corporate Compliance Team — Specialized CAs and CSs with deep ROC experience</li>
              <li>End-to-End Service — Accounting, audit coordination, and legal filings handled under one roof</li>
              <li>Nationwide Assistance — For all MCA ROCs across India</li>
              <li>Affordable Pricing &amp; Transparent Process</li>
              <li>Dedicated Relationship Manager for Each Client</li>
              <li>High Accuracy &amp; On-Time Filing Guarantee</li>
            </ul>

            <h3>Frequently Asked Questions (FAQs)</h3>
            <ol>
              <li><strong>What are the key annual compliance deadlines for FY 2024–25?</strong><br/>AOC-4 (30 days post-AGM), MGT-7 (60 days post-AGM), DIR-3 KYC (by 30 September), and ITR (by 31 October).</li>
              <li><strong>What if a company misses its annual filing deadline?</strong><br/>You will face per-day penalties, and directors may be disqualified for persistent non-compliance.</li>
              <li><strong>Is annual compliance applicable to dormant or inactive companies?</strong><br/>Yes, even dormant companies must file annual returns and financials.</li>
              <li><strong>Are startups or small private limited companies exempt from filing?</strong><br/>No. All registered companies must comply, regardless of turnover or activity level.</li>
              <li><strong>Can compliance be managed completely online?</strong><br/>Yes. Mundra Legal offers fully digital filing and e-signing for all forms.</li>
              <li><strong>Are foreign-owned companies subject to the same compliance?</strong><br/>Yes, Indian subsidiaries or companies with foreign directors must also file annual returns and financial statements.</li>
              <li><strong>Do LLPs follow the same compliance rules?</strong><br/>LLPs have separate forms (LLP-8, LLP-11) but must also comply annually with MCA regulations.</li>
            </ol>

            <h3>Stay Compliant, Stay Protected</h3>
            <p>With Mundra Legal, you never miss a compliance date again. We handle every step of your annual filing and ROC compliance so your company remains legally active, transparent, and credible.</p>
            <p style={{fontWeight: 700}}>📞 Get in touch today to speak with our corporate compliance expert and ensure a stress-free annual filing for your company.</p>

          </main>

          <aside className="wpc-sidebar">
            <div className="sidebar-scroll-wrapper">
              <SidebarForm />
              <div style={{marginTop: 18, textAlign: 'center'}}>
                <h4 style={{marginBottom: 8}}>Download Checklist</h4>
                <p style={{color: '#718096', marginBottom: 12}}>Get a printable PDF checklist of required documents and due dates.</p>
                <a href="/assets/checklists/annual-filing-checklist.txt" download="annual-filing-checklist.txt" style={{display: 'inline-block', padding: '10px 16px', background: '#1C2951', color: 'white', borderRadius: 8, textDecoration: 'none'}}>Download Checklist</a>
              </div>
            </div>
          </aside>
        </div>
      </PageContent>

      <Footer />
    </>
  );
};

export default AnnualFilingAndRoc;
