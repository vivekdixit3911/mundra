import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServiceHero from '../../components/ServiceHero';
import SidebarForm from '../../components/SidebarForm';
import LottieAnimation from '../../components/LottieAnimation';
import { CompanyFormationContainer } from './CompanyFormation.styles.js';

const CompanyFormation = () => {

  return (
    <>
      <Header />
      <ServiceHero
        title="Company Formation in India"
        subtitle="Expert Business Registration Services by Mundra Legal Consultants."
        breadcrumb="Company Formation"
      />
      <CompanyFormationContainer>
        <section id="company-content" className="company-section" aria-labelledby="company-heading">
            <div className="company-container">
                <div className="company-main">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                        <div style={{ flex: 1 }}>
                            <h1 id="company-heading">Company Formation in India — A Complete Overview</h1>
                            <p className="company-byline">Expert Business Registration Services by Mundra Legal Consultants</p>
                        </div>
                        <div style={{ flex: '0 0 200px' }}>
                            <LottieAnimation
                                src="/assets/Drafts/Business.json"
                                width="200px"
                                height="200px"
                            />
                        </div>
                    </div>

                    <h2 id="overview">Company Formation — An Overview</h2>

                    <p>
                        Forming a company in India is the first and most crucial step towards establishing a legally recognized business. At <strong>Mundra Legal Consultants</strong>, we simplify the company formation process for entrepreneurs, startups, and growing enterprises across India.
                    </p>

                    <p>
                        Company formation gives a business its <strong>legal identity, limited liability protection, and corporate credibility</strong> under the Companies Act, 2013. It allows the business to function as a separate legal entity—capable of owning property, entering into contracts, and continuing operations regardless of ownership changes.
                    </p>

                    <div className="callout">
                        <p><strong>Depending on the business goals, one can choose from several structures such as:</strong></p>
                        <ul style={{marginTop:'12px'}}>
                            <li>Private Limited Company (Pvt. Ltd.)</li>
                            <li>One Person Company (OPC)</li>
                            <li>Limited Liability Partnership (LLP)</li>
                            <li>Public Limited Company</li>
                            <li>Section 8 (Non-Profit) Company</li>
                            <li>Partnership Firm or Proprietorship</li>
                        </ul>
                    </div>

                    <p>
                        Each structure carries its own compliance framework, tax benefits, and suitability for business size and nature. Our experts at <strong>Mundra Legal guide you through selection, documentation, registration, and post-formation compliance</strong>.
                    </p>

                    <h2 id="why-important">Why is Company Formation Important?</h2>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                        <div style={{ flex: 1 }}>
                            <p>
                                Company formation legally establishes your business as an independent entity. It strengthens your credibility, protects personal assets, and provides a professional foundation for sustainable growth.
                            </p>
                        </div>
                        <div style={{ flex: '0 0 150px' }}>
                            <LottieAnimation
                                src="/assets/Drafts/Business%20analytics%20animation.json"
                                width="150px"
                                height="150px"
                            />
                        </div>
                    </div>

                    <div className="feature-grid">
                        <div className="feature-card">
                            <div className="icon-box">
                                <i className="fas fa-certificate" style={{color:'var(--primary-gold)', fontSize:'28px'}}></i>
                            </div>
                            <h4>Legal Recognition</h4>
                            <p>Enables your business to operate under Indian law with full legal protection.</p>
                        </div>

                        <div className="feature-card">
                            <div className="icon-box">
                                <i className="fas fa-building" style={{color:'var(--primary-gold)', fontSize:'28px'}}></i>
                            </div>
                            <h4>Separate Legal Identity</h4>
                            <p>The company can own assets, sue, and be sued independently of its owners.</p>
                        </div>

                        <div className="feature-card">
                            <div className="icon-box">
                                <i className="fas fa-shield-alt" style={{color:'var(--primary-gold)', fontSize:'28px'}}></i>
                            </div>
                            <h4>Limited Liability</h4>
                            <p>Protects owners' personal assets from business debts and liabilities.</p>
                        </div>

                        <div className="feature-card">
                            <div className="icon-box">
                                <i className="fas fa-hand-holding-usd" style={{color:'var(--primary-gold)', fontSize:'28px'}}></i>
                            </div>
                            <h4>Funding Access</h4>
                            <p>Helps raise capital from investors, banks, and financial institutions.</p>
                        </div>

                        <div className="feature-card">
                            <div className="icon-box">
                                <i className="fas fa-infinity" style={{color:'var(--primary-gold)', fontSize:'28px'}}></i>
                            </div>
                            <h4>Perpetual Succession</h4>
                            <p>The company continues regardless of ownership changes or death of founders.</p>
                        </div>

                        <div className="feature-card">
                            <div className="icon-box">
                                <i className="fas fa-award" style={{color:'var(--primary-gold)', fontSize:'28px'}}></i>
                            </div>
                            <h4>Brand Credibility</h4>
                            <p>Registered businesses gain trust from customers, vendors, and partners.</p>
                        </div>

                        <div className="feature-card">
                            <div className="icon-box">
                                <i className="fas fa-percentage" style={{color:'var(--primary-gold)', fontSize:'28px'}}></i>
                            </div>
                            <h4>Tax Benefits</h4>
                            <p>Companies are eligible for various deductions, incentives, and GST benefits.</p>
                        </div>
                    </div>

                    <h2 id="advantages">Advantages of Registering Your Company with Mundra Legal</h2>

                    <div className="highlight-box">
                        <h3>Key Benefits of Company Registration</h3>
                        <ul>
                            <li><strong>Limited Liability Protection:</strong> Protects personal wealth from company liabilities, ensuring financial safety for shareholders</li>
                            <li><strong>Separate Legal Entity:</strong> The company operates independently of its owners, maintaining distinct legal status</li>
                            <li><strong>Increased Credibility:</strong> A registered entity builds confidence among clients, banks, and investors</li>
                            <li><strong>Access to Capital:</strong> Enables fundraising through equity, loans, or venture investments</li>
                            <li><strong>Perpetual Existence:</strong> The business remains unaffected by the death or withdrawal of shareholders</li>
                            <li><strong>Tax Efficiency:</strong> Eligible for corporate tax deductions, start-up incentives, and GST benefits</li>
                            <li><strong>Ease of Expansion:</strong> Registered entities can easily scale operations, hire staff, and open branches</li>
                        </ul>
                    </div>

                    <h2>Eligibility Criteria for Company Formation in India</h2>

                    <p>
                        As per the <strong>Ministry of Corporate Affairs (MCA)</strong>, the general eligibility requirements include:
                    </p>

                    <ul>
                        <li>Minimum two directors (one must be an Indian resident)</li>
                        <li>Minimum two shareholders (can be the same individuals)</li>
                        <li>A unique company name approved by the Registrar of Companies (ROC)</li>
                        <li>A registered office address in India</li>
                        <li>Mandatory PAN, TAN, and GST registration</li>
                        <li>Preparation of Memorandum of Association (MoA) and Articles of Association (AoA)</li>
                        <li>Appointment of a Chartered Accountant as company auditor</li>
                    </ul>

                    <p>
                        Our professionals at <strong>Mundra Legal ensure every eligibility requirement is met before filing</strong> to avoid rejection or delay.
                    </p>

                    <h2 id="documents">Documents Required for Company Formation</h2>

                    <h3>For Directors and Shareholders</h3>

                    <ul>
                        <li><strong>PAN Card</strong> (for Indian nationals) / <strong>Passport</strong> (for foreign nationals)</li>
                        <li>Aadhaar Card / Voter ID / Driving Licence</li>
                        <li>Passport-size photograph</li>
                        <li>Digital Signature Certificate (DSC)</li>
                        <li>Director Identification Number (DIN)</li>
                        <li>Proof of address — utility bill, bank statement, or rent agreement (not older than 2 months)</li>
                    </ul>

                    <h3>For Registered Office</h3>

                    <ul>
                        <li>Proof of ownership (Sale Deed) or Rent Agreement</li>
                        <li>NOC from the property owner</li>
                        <li>Latest electricity, water, or gas bill</li>
                    </ul>

                    <h3>Other Supporting Documents</h3>

                    <ul>
                        <li>Draft MoA and AoA</li>
                        <li>Consent letters of directors and subscribers</li>
                        <li>Declaration of compliance (Form INC-9)</li>
                        <li>Professional verification by a practicing CA/CS</li>
                    </ul>

                    <div className="callout">
                        <p>
                            <strong>Mundra Legal handles document drafting, verification, and filing with the MCA portal.</strong>
                        </p>
                    </div>

                    <h2 id="process">Step-by-Step Company Formation Process with Mundra Legal</h2>

                    <div style={{ display: 'flex', justifyContent: 'center', margin: '30px 0' }}>
                        <LottieAnimation
                            src="/assets/Drafts/registration.json"
                            width="250px"
                            height="200px"
                        />
                    </div>

                    <div className="process-timeline">
                        <div className="process-step">
                            <h4>Step 1: Initial Consultation</h4>
                            <p>We assess your business model and advise on the most suitable company structure.</p>
                        </div>

                        <div className="process-step">
                            <h4>Step 2: Digital Signature (DSC) & DIN Application</h4>
                            <p>We obtain DSCs for all directors and apply for their Director Identification Numbers.</p>
                        </div>

                        <div className="process-step">
                            <h4>Step 3: Company Name Reservation</h4>
                            <p>We reserve a unique name through the MCA's RUN or SPICe+ system, ensuring compliance with Rule 8 of the Companies (Incorporation) Rules.</p>
                        </div>

                        <div className="process-step">
                            <h4>Step 4: Preparation of Incorporation Documents</h4>
                            <p>Drafting and filing SPICe+, e-MoA (INC-33), and e-AoA (INC-34) forms online.</p>
                        </div>

                        <div className="process-step">
                            <h4>Step 5: Submission to MCA</h4>
                            <p>All incorporation documents are filed electronically with the Registrar of Companies (ROC).</p>
                        </div>

                        <div className="process-step">
                            <h4>Step 6: Verification and Approval</h4>
                            <p>The ROC reviews your application. Upon approval, the Certificate of Incorporation (COI) is issued along with PAN and TAN.</p>
                        </div>

                        <div className="process-step">
                            <h4>Step 7: Post-Incorporation Formalities</h4>
                            <p>Opening a corporate bank account, GST registration, EPF/ESI registration, and setting up statutory records.</p>
                        </div>
                    </div>

                    <div className="callout">
                        <p><strong>Typical Timeline:</strong> 10–15 working days (depending on government processing).</p>
                    </div>

                    <h2 id="types">Types of Business Entities in India</h2>

                    <div style={{ display: 'flex', justifyContent: 'center', margin: '30px 0' }}>
                        <LottieAnimation
                            src="/assets/Drafts/World%20map%2C%20Tallinn.json"
                            width="250px"
                            height="200px"
                        />
                    </div>

                    <div style={{overflowX:'auto'}}>
                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    <th>Business Type</th>
                                    <th>Legal Act</th>
                                    <th>No. of Owners</th>
                                    <th>Separate Legal Entity</th>
                                    <th>Liability</th>
                                    <th>Audit</th>
                                    <th>Foreign Ownership</th>
                                    <th>Ideal For</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Private Limited Company</strong></td>
                                    <td>Companies Act, 2013</td>
                                    <td>2–200</td>
                                    <td>Yes</td>
                                    <td>Limited</td>
                                    <td>Mandatory</td>
                                    <td>Permitted</td>
                                    <td>Startups, SMEs</td>
                                </tr>
                                <tr>
                                    <td><strong>One Person Company (OPC)</strong></td>
                                    <td>Companies Act, 2013</td>
                                    <td>1</td>
                                    <td>Yes</td>
                                    <td>Limited</td>
                                    <td>Mandatory</td>
                                    <td>Not Permitted</td>
                                    <td>Solo founders</td>
                                </tr>
                                <tr>
                                    <td><strong>Limited Liability Partnership (LLP)</strong></td>
                                    <td>LLP Act, 2008</td>
                                    <td>2+</td>
                                    <td>Yes</td>
                                    <td>Limited</td>
                                    <td>Conditional</td>
                                    <td>Permitted</td>
                                    <td>Professionals, small firms</td>
                                </tr>
                                <tr>
                                    <td><strong>Public Limited Company</strong></td>
                                    <td>Companies Act, 2013</td>
                                    <td>7+</td>
                                    <td>Yes</td>
                                    <td>Limited</td>
                                    <td>Mandatory</td>
                                    <td>Permitted</td>
                                    <td>Large-scale enterprises</td>
                                </tr>
                                <tr>
                                    <td><strong>Section 8 Company</strong></td>
                                    <td>Companies Act, 2013</td>
                                    <td>2+</td>
                                    <td>Yes</td>
                                    <td>Limited</td>
                                    <td>Mandatory</td>
                                    <td>Permitted</td>
                                    <td>NGOs, charitable orgs</td>
                                </tr>
                                <tr>
                                    <td><strong>Partnership Firm</strong></td>
                                    <td>Partnership Act, 1932</td>
                                    <td>2–50</td>
                                    <td>No</td>
                                    <td>Unlimited</td>
                                    <td>Not mandatory</td>
                                    <td>Limited</td>
                                    <td>Traditional businesses</td>
                                </tr>
                                <tr>
                                    <td><strong>Proprietorship</strong></td>
                                    <td>Not governed by specific act</td>
                                    <td>1</td>
                                    <td>No</td>
                                    <td>Unlimited</td>
                                    <td>Not mandatory</td>
                                    <td>No</td>
                                    <td>Freelancers, small traders</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p>
                        <strong>Mundra Legal helps you select and register the entity best aligned with your business goals.</strong>
                    </p>

                    <h2 id="compliance">Post-Incorporation Compliance</h2>

                    <p>
                        After company formation, maintaining compliance is mandatory under Indian corporate law. We provide <strong>end-to-end assistance for all ongoing filings and statutory obligations</strong>.
                    </p>

                    <div className="highlight-box">
                        <h3>Mandatory Compliance Includes:</h3>
                        <ul>
                            <li><strong>First Board Meeting</strong> within 30 days of incorporation</li>
                            <li><strong>Appointment of First Auditor</strong> within 30 days</li>
                            <li><strong>Issuance of Share Certificates</strong> within 60 days</li>
                            <li><strong>Annual General Meeting (AGM)</strong> within six months of financial year-end</li>
                            <li><strong>Filing of Annual Return</strong> (Form MGT-7)</li>
                            <li><strong>Filing of Financial Statements</strong> (Form AOC-4)</li>
                            <li><strong>Income Tax Return Filing</strong></li>
                            <li><strong>Maintenance of Statutory Registers</strong> (members, directors, charges, etc.)</li>
                            <li><strong>Display of Company Name and CIN</strong> on all official materials</li>
                        </ul>
                    </div>

                    <p>
                        <strong>Mundra Legal's compliance team ensures timely filings and avoids penalties.</strong>
                    </p>

                    <h2>Why Choose Mundra Legal for Company Formation?</h2>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                        <div style={{ flex: 1 }}>
                            <div className="highlight-box">
                                <ul>
                                    <li><strong>✅ Expert Legal Advisors:</strong> In-house team of corporate lawyers, CAs, and CS professionals</li>
                                    <li><strong>📋 End-to-End Assistance:</strong> From planning and documentation to incorporation and compliance</li>
                                    <li><strong>💰 Transparent Pricing:</strong> No hidden fees, clear cost structure</li>
                                    <li><strong>⚡ Faster Processing:</strong> Optimized filing and name approval timelines</li>
                                    <li><strong>🆔 PAN, TAN & GST Setup:</strong> Included with all formation packages</li>
                                    <li><strong>📊 Post-Incorporation Support:</strong> Annual filings, audit setup, and corporate compliance</li>
                                    <li><strong>🇮🇳 Nationwide Reach:</strong> Services available across all Indian states</li>
                                    <li><strong>💻 100% Digital Process:</strong> Paperless, efficient, and MCA-approved online workflow</li>
                                </ul>
                            </div>
                        </div>
                        <div style={{ flex: '0 0 150px' }}>
                            <LottieAnimation
                                src="/assets/Drafts/Business%20team.json"
                                width="150px"
                                height="150px"
                            />
                        </div>
                    </div>

                    <div className="callout">
                        <p>
                            <strong>Ready to form your company?</strong> Contact Mundra Legal Consultants today for expert guidance and seamless business registration. Fill the form on the right or call us directly!
                        </p>
                    </div>
                </div>

                <aside className="company-sidebar">
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <LottieAnimation
                            src="/assets/Drafts/Man%20and%20robot%20with%20computers%20sitting%20together%20in%20workplace.json"
                            width="200px"
                            height="200px"
                        />
                    </div>
                    <div className="sidebar-scroll-wrapper">
                        <SidebarForm />
                    </div>
                </aside>
            </div>
        </section>
      </CompanyFormationContainer>
      <Footer />
    </>
  );
};

export default CompanyFormation;
