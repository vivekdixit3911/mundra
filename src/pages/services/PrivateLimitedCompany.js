import React, { useEffect, useState, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SidebarForm from '../../components/SidebarForm';
import ServiceHero from '../../components/ServiceHero';
import LottieAnimation from '../../components/LottieAnimation';

import {
    PLCSection,
    PLCContainer,
    PLCMain,
    PLCByline,
    SectionLottie,
    FeatureGrid,
    FeatureCard,
    IconBox,
    ComparisonTable,
    ProcessTimeline,
    TimelineItem,
    TimelineMarker,
    PLCSidebar,
    SidebarScrollWrapper,
    StatsGrid,
    StatCard,
    BackToTop,
    QuickLinksBar,
    LottieAccent,
    AnchorTarget,
    HighlightBox,
    Callout
} from './PrivateLimitedCompany.styles';

const PrivateLimitedCompany = () => {
    const [isBackToTopVisible, setBackToTopVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setBackToTopVisible(true);
            } else {
                setBackToTopVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const smoothScroll = (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };

        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach(link => link.addEventListener('click', smoothScroll));

        return () => {
            anchorLinks.forEach(link => link.removeEventListener('click', smoothScroll));
        };
    }, []);


    return (
        <>
            <Header />
            <main id="main-content">
                <ServiceHero
                    title="Private Limited Company"
                    subtitle="End-to-end registration and compliance services for your startup."
                    animationName="company-registration"
                />
                <QuickLinksBar aria-label="Quick links">
                    <a href="#plc-heading">Overview</a>
                    <a href="#key-features">Key Features</a>
                    <a href="#types">Types</a>
                    <a href="#process">Registration Steps</a>
                    <a href="#documents">Documents</a>
                    <a href="#compliance">Compliance</a>
                    <a href="#faq">FAQs</a>
                    <a href="#contact-callout" className="cta-link">Get Started</a>
                </QuickLinksBar>

                <PLCSection aria-labelledby="plc-heading">
                    <PLCContainer>
                        <PLCMain>
                            <AnchorTarget id="plc-heading" />
                            <h1>Private Limited Company Registration in India
                                <LottieAccent aria-hidden="true">
                                    <LottieAnimation animationName="company-registration" />
                                </LottieAccent>
                            </h1>
                            <PLCByline>End-to-end Private Limited (Pvt. Ltd.) registration, compliance & startup support</PLCByline>

                            <SectionLottie>
                                <LottieAnimation animationName="company-registration" />
                            </SectionLottie>

                            <p>A Private Limited Company is a privately held business entity that offers <strong>limited liability protection</strong> to its shareholders and a separate legal identity distinct from its owners. This structure is widely chosen by startups and SMEs due to its credibility, governance framework, and ease of raising capital.</p>

                            <AnchorTarget id="who-should" />
                            <h2>Who Should Incorporate as a Private Limited Company?
                                <LottieAccent aria-hidden="true">
                                    <LottieAnimation animationName="investment-growth" />
                                </LottieAccent>
                            </h2>
                            <HighlightBox>
                                <ul>
                                    <li>Startups planning to raise external funding (VCs and angel investors prefer Pvt. Ltd. structure).</li>
                                    <li>Businesses planning to scale and hire employees with formal equity arrangements (ESOPs).</li>
                                    <li>Professionals and founders seeking limited liability protection from business risk.</li>
                                    <li>Companies that require a credible corporate identity to sign contracts and secure suppliers/customers.</li>
                                    <li>Businesses intending to sell or transfer ownership — Pvt. Ltd. provides a smooth exit structure via share transfer.</li>
                                </ul>
                            </HighlightBox>

                            <AnchorTarget id="key-features" />
                            <h2>Key Features of a Private Limited Company
                                <LottieAccent aria-hidden="true">
                                    <LottieAnimation animationName="legal-documents" />
                                </LottieAccent>
                            </h2>

                            <ComparisonTable aria-describedby="key-features">
                                <thead>
                                    <tr><th>Feature</th><th>Description</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>Limited Liability Protection</td><td>Shareholders are liable only up to the amount unpaid on their shares; personal assets are protected.</td></tr>
                                    <tr><td>Separate Legal Entity</td><td>The company can enter contracts, own assets, sue or be sued in its own name.</td></tr>
                                    <tr><td>Minimum Shareholders</td><td>Minimum 2; maximum 200 shareholders.</td></tr>
                                    <tr><td>Minimum Directors</td><td>At least 2 directors, with at least one being an Indian resident.</td></tr>
                                    <tr><td>Minimum Share Capital</td><td>Typically Rs. 1 lakh (subject to change based on company requirements).</td></tr>
                                    <tr><td>Company Name Requirement</td><td>Name must end with 'Private Limited' and be unique.</td></tr>
                                    <tr><td>Restrictions on Share Transfer</td><td>Shares cannot be freely transferred without compliance with AoA and board approvals.</td></tr>
                                    <tr><td>Prohibition on Public Invitation</td><td>Cannot invite the public to subscribe to shares or debentures.</td></tr>
                                    <tr><td>Compliance Requirements</td><td>Mandatory annual filings, audits, AGMs and ROC compliance.</td></tr>
                                </tbody>
                            </ComparisonTable>

                            <AnchorTarget id="types" />
                            <h2>Types of Private Limited Companies
                                <LottieAccent>
                                    <LottieAnimation animationName="team-collaboration" />
                                </LottieAccent>
                            </h2>
                            <FeatureGrid>
                                <FeatureCard><IconBox><i className="fas fa-layer-group"></i></IconBox><h4>Company Limited by Shares</h4><p>Most common type; liability limited to share value.</p></FeatureCard>
                                <FeatureCard><IconBox><i className="fas fa-hand-holding-heart"></i></IconBox><h4>Company Limited by Guarantee</h4><p>Often used for non-profits where members guarantee contribution amount.</p></FeatureCard>
                                <FeatureCard><IconBox><i className="fas fa-project-diagram"></i></IconBox><h4>Unlimited Company</h4><p>Less common; members have unlimited liability.</p></FeatureCard>
                            </FeatureGrid>

                            <h2>Advantages & Disadvantages</h2>
                            <FeatureGrid>
                                <FeatureCard><IconBox><i className="fas fa-shield-alt"></i></IconBox><h4>Advantage: Limited Liability</h4><p>Protects personal assets of shareholders.</p></FeatureCard>
                                <FeatureCard><IconBox><i className="fas fa-hand-holding-usd"></i></IconBox><h4>Advantage: Ease of Funding</h4><p>Attractive to investors, VCs and banks.</p></FeatureCard>
                                <FeatureCard><IconBox><i className="fas fa-balance-scale"></i></IconBox><h4>Disadvantage: Compliance Burden</h4><p>Annual filings, audits and statutory requirements increase administrative effort.</p></FeatureCard>
                                <FeatureCard><IconBox><i className="fas fa-file-contract"></i></IconBox><h4>Disadvantage: Public Disclosure</h4><p>Financials and company details are publicly available on MCA portal.</p></FeatureCard>
                                <FeatureCard><IconBox><i className="fas fa-file-invoice-dollar"></i></IconBox><h4>Disadvantage: Complex Setup</h4><p>Higher documentation, stamping and registration costs compared to proprietorships.</p></FeatureCard>
                                <FeatureCard><IconBox><i className="fas fa-user-slash"></i></IconBox><h4>Disadvantage: Share Limits & Exit Complexity</h4><p>Maximum 200 shareholders and formal procedures for transferring or exiting shares can be restrictive.</p></FeatureCard>
                                <FeatureCard><IconBox><i className="fas fa-hourglass-end"></i></IconBox><h4>Disadvantage: Slower Decision-Making</h4><p>Board and shareholder approvals may delay strategic decisions compared to proprietorships.</p></FeatureCard>
                            </FeatureGrid>

                            <h2>Requirements for Private Limited Company Registration in India</h2>
                            <p>Before you begin incorporation, ensure you meet the statutory requirements for directors, shareholders and the registered office.</p>

                            <h3>Directors and Members</h3>
                            <HighlightBox>
                                <ul>
                                    <li>Minimum <strong>2 directors</strong> and <strong>2 shareholders</strong> (maximum 200 shareholders).</li>
                                    <li>At least <strong>one director must be an Indian resident</strong> (residing 182+ days in India in the previous calendar year).</li>
                                    <li>All directors must obtain a <strong>Director Identification Number (DIN)</strong>.</li>
                                    <li>Directors should provide valid identity and address proofs, PAN, and any statutory affidavits required.</li>
                                </ul>
                            </HighlightBox>

                            <h3>Company Name</h3>
                            <HighlightBox>
                                <p>The proposed name must reflect the business activity, be unique, and <strong>end with “Private Limited”</strong>. It must not be identical or deceptively similar to existing companies. Name reservation is done using <strong>SPICe+ Part A</strong>.</p>
                            </HighlightBox>

                            <h3>Registered Office</h3>
                            <HighlightBox>
                                <p>You must provide a permanent registered office address for communications with the Registrar of Companies. Supporting documents include a rental/lease agreement or ownership proof, a recent utility bill (≤ 2 months), and NOC from the owner if applicable.</p>
                            </HighlightBox>

                            <h2>Company Registration Certificate (COI)</h2>
                            <p>After successful incorporation, MCA issues a <strong>Certificate of Incorporation (COI)</strong>, which legally confirms company formation.</p>

                            <h3>Purpose</h3>
                            <HighlightBox>
                                <p>The COI is legal confirmation of company formation — it authorizes operations under Indian law, allows opening bank accounts, statutory registrations, entering contracts and fundraising.</p>
                            </HighlightBox>

                            <h3>Contents of the COI</h3>
                            <ComparisonTable>
                                <thead><tr><th>Field</th><th>Description</th></tr></thead>
                                <tbody>
                                    <tr><td>Company Name</td><td>Approved during SPICe+ filing</td></tr>
                                    <tr><td>Corporate Identification Number (CIN)</td><td>Unique MCA-issued identifier</td></tr>
                                    <tr><td>Date of Incorporation</td><td>The official registration date</td></tr>
                                    <tr><td>PAN & TAN</td><td>Tax identification numbers provided post-incorporation</td></tr>
                                    <tr><td>Company Structure</td><td>Private Limited, LLP, OPC, etc.</td></tr>
                                    <tr><td>Registered Office</td><td>Address for statutory communications</td></tr>
                                </tbody>
                            </ComparisonTable>

                            <AnchorTarget id="process" />
                            <h2>Step-by-Step Registration Process
                                <LottieAccent>
                                    <LottieAnimation animationName="services-feature" />
                                </LottieAccent>
                            </h2>
                            <ProcessTimeline>
                                <TimelineItem><TimelineMarker><i className="fas fa-key"></i></TimelineMarker><div><h4>Step 1: Acquire Digital Signature Certificate (DSC)</h4><p>Required for directors and subscribers to sign electronic forms (documents: passport-sized photo, PAN, Aadhaar, email, phone). Foreign nationals require notarized & apostilled documents.</p></div></TimelineItem>
                                <TimelineItem><TimelineMarker><i className="fas fa-id-badge"></i></TimelineMarker><div><h4>Step 2: Obtain Director Identification Number (DIN)</h4><p>DIN is mandatory for all directors and is included in the incorporation forms.</p></div></TimelineItem>
                                <TimelineItem><TimelineMarker><i className="fas fa-file-signature"></i></TimelineMarker><div><h4>Step 3: Name Reservation (SPICe+ Part A)</h4><p>Propose up to two names; MCA reviews and approves the company name.</p></div></TimelineItem>
                                <TimelineItem><TimelineMarker><i className="fas fa-pencil-alt"></i></TimelineMarker><div><h4>Step 4: Submission of Company Details (SPICe+ Part B)</h4><p>Submit capital structure, registered office, director & shareholder info, MOA & AOA, PAN & TAN application, stamp duty and fees.</p></div></TimelineItem>
                                <TimelineItem><TimelineMarker><i className="fas fa-file-upload"></i></TimelineMarker><div><h4>Step 5: Incorporation Documents (MOA & AOA)</h4><p>Draft MOA & AOA, obtain digital signatures and submit to MCA.</p></div></TimelineItem>
                                <TimelineItem><TimelineMarker><i className="fas fa-cogs"></i></TimelineMarker><div><h4>Step 6: AGILE-PRO-S Filing</h4><p>One-stop registration for GST, EPFO/ESI, bank account opening, and Shop & Establishment registration.</p></div></TimelineItem>
                                <TimelineItem><TimelineMarker><i className="fas fa-certificate"></i></TimelineMarker><div><h4>Step 7: Certificate of Incorporation (COI)</h4><p>MCA issues COI, CIN, PAN & TAN after verification—company is legally formed.</p></div></TimelineItem>
                                <TimelineItem><TimelineMarker><i className="fas fa-file-alt"></i></TimelineMarker><div><h4>Step 8: Post-Incorporation Filings & Bank Account</h4><p>Open company bank account, file incorporation forms, obtain PAN/TAN, and complete any state-level registrations.</p></div></TimelineItem>
                            </ProcessTimeline>

                            <h3>SPICe+ (Simplified Proforma for Incorporating Company Electronically) – What’s inside?</h3>
                            <HighlightBox>
                                <p>SPICe+ is a single multi-purpose form that simplifies incorporation by combining several services into one electronic filing. It includes:</p>
                                <ul>
                                    <li>Part A – Name reservation</li>
                                    <li>Part B – Incorporation details, DIN allotment, PAN/TAN application</li>
                                    <li>e-MOA & e-AOA uploads</li>
                                    <li>AGILE-PRO-S for GST/EPFO/ESI/shop registration</li>
                                    <li>INC-9 declarations and subscriber affidavits</li>
                                </ul>
                                <p>Using SPICe+ reduces manual steps and speeds up incorporation when documents are ready.</p>
                            </HighlightBox>

                            <AnchorTarget id="documents" />
                            <h2>Documents Required for Registration
                                <LottieAccent>
                                    <LottieAnimation animationName="legal-services" />
                                </LottieAccent>
                            </h2>
                            <ComparisonTable>
                                <thead><tr><th>Applicant</th><th>Documents</th></tr></thead>
                                {/* <tbody>
                                    <tr><td>Indian Directors/Subscribers</td><td>Affidavit of consent, ID & address proof, PAN, utility bill (<=2 months), registered office proof (rent agreement + NOC)</td></tr>
                                    <tr><td>Foreign Nationals</td><td>Passport, notarized & apostilled documents, address proof, residential proof, bank statement</td></tr>
                                    <tr><td>Registered Office</td><td>Rental agreement/ownership documents, NOC from owner, utility bill (<=2 months)</td></tr>
                                    <tr><td>Others</td><td>Passport photos, DSC, proof of professional (if applicable), board resolution (if existing company)</td></tr>
                                </tbody> */}
                            </ComparisonTable>

                            <h2>Timeframe & Fees</h2>
                            <FeatureGrid>
                                <FeatureCard><IconBox><i className="fas fa-clock"></i></IconBox><h4>Typical Time</h4><p>7–10 working days via SPICe+ including DIN & name approval (subject to MCA processing).</p></FeatureCard>
                                <FeatureCard><IconBox><i className="fas fa-rupee-sign"></i></IconBox><h4>Government Fees</h4><p>Stamp duty + ROC fees depending on authorized capital and state. Small companies may pay lower ROC fees.</p></FeatureCard>
                                <FeatureCard><IconBox><i className="fas fa-user-tie"></i></IconBox><h4>Professional Fees</h4><p>Legal & filing support from Mundra Legal starting at reasonable rates; pricing varies by complexity.</p></FeatureCard>
                                <FeatureCard><IconBox><i className="fas fa-balance-scale-left"></i></IconBox><h4>Post-Incorporation</h4><p>Statutory compliance: AGM, financial statements, auditor appointment, director KYC. Ongoing bookkeeping and tax filings are essential.</p></FeatureCard>
                            </FeatureGrid>

                            <h3>Estimated Fees & Timeline (Sample)</h3>
                            <ComparisonTable>
                                <thead><tr><th>Service</th><th>Estimated Time</th><th>Estimated Cost (INR)</th></tr></thead>
                                <tbody>
                                    <tr><td>Name reservation (SPICe+ Part A)</td><td>1–3 days</td><td>1,000–2,500</td></tr>
                                    <tr><td>DIN & DSC</td><td>1–2 days</td><td>1,500–3,500 per person</td></tr>
                                    <tr><td>SPICe+ filing & COI</td><td>5–10 days</td><td>5,000–15,000 (govt + stamp duty varies)</td></tr>
                                    <tr><td>AGILE-PRO-S & other registrations</td><td>3–7 days</td><td>Included / state-specific</td></tr>
                                </tbody>
                            </ComparisonTable>

                            <h3>First-year Compliance Timeline (recommended)</h3>
                            <ol>
                                <li>Within 7–14 days: Open bank account; finalise share certificates and statutory registers.</li>
                                <li>Within 30 days: File incorporation related forms and apply for PAN/TAN if not auto-generated.</li>
                                <li>Within 90 days: Appoint auditor and prepare initial accounting records.</li>
                                <li>Within 180 days: Prepare first 6 months financials and ensure GST/EPFO/ESI registrations are configured correctly.</li>
                                <li>Before 270 days: Complete director KYC, and any other ROC-specific filings.</li>
                            </ol>

                            <h3>Common Mistakes to Avoid</h3>
                            <ul>
                                <li>Poor name checks — choose unique names and do trademark checks to avoid objections.</li>
                                <li>Incomplete or inconsistent KYC documents for directors — ensures PAN/Aadhaar consistency.</li>
                                <li>Delaying AGILE & bank setup — opens gaps in tax registrations and vendor onboarding.</li>
                                <li>Ignoring stamp duty differences across states — this can cause rejections or additional fees.</li>
                                <li>Weak MOA/AOA drafting — invest in clear objects clauses to avoid scope disputes later.</li>
                            </ul>

                            <h3>Case Study: Low-cost startup incorporation</h3>
                            <HighlightBox>
                                <p>A fintech startup approached Mundra Legal with a tight timeline to onboard investors. We conducted a name availability check, prepared e-MOA/e-AOA, coordinated DSC/DIN for directors, and completed SPICe+ filing within 7 days. The early completion helped the startup close seed funding two weeks later.</p>
                            </HighlightBox>

                            <AnchorTarget id="compliance" />
                            <h2>Post-Registration Compliance Checklist
                                <LottieAccent>
                                    <LottieAnimation animationName="business-analytics" />
                                </LottieAccent>
                            </h2>
                            <ComparisonTable>
                                <thead><tr><th>Form/Requirement</th><th>Due Date / Note</th></tr></thead>
                                <tbody>
                                    <tr><td>DIR-3 KYC</td><td>30th Sept each year — DIN KYC for directors</td></tr>
                                    <tr><td>Form AOC-4</td><td>Within 30 days of AGM — Financial Statements filing</td></tr>
                                    <tr><td>Form MGT-7</td><td>Annual return — due as per ROC schedule</td></tr>
                                    <tr><td>Form ADT-1</td><td>Within 15 days of auditor appointment</td></tr>
                                    <tr><td>ITR-6</td><td>Income Tax Return (timeline depends on audit status)</td></tr>
                                </tbody>
                            </ComparisonTable>

                            <h3>MCA Compliance Timeline (FY 2023–24)</h3>
                            <ComparisonTable>
                                <thead><tr><th>Form</th><th>Compliance</th><th>Due Date</th><th>Penalty</th></tr></thead>
                                <tbody>
                                    <tr><td>DIR-3 KYC</td><td>DIN KYC</td><td>30th Sept 2024</td><td>Rs. 5,000, possible disqualification</td></tr>
                                    <tr><td>Form AOC-4</td><td>Financial Statements</td><td>29th Oct 2024</td><td>Late fees applicable</td></tr>
                                    <tr><td>Form MGT-7</td><td>Annual Returns</td><td>28th Nov 2024</td><td>Late fees applicable</td></tr>
                                    <tr><td>Form ADT-1</td><td>Auditor Appointment</td><td>15 days from appointment</td><td>Late fees applicable</td></tr>
                                    <tr><td>ITR-6</td><td>Income Tax Return (non-audit/audit)</td><td>31st July / 31st Oct</td><td>Penalty for delay</td></tr>
                                </tbody>
                            </ComparisonTable>

                            <p>For LLPs, the mandatory filings include <strong>Form 11</strong> (Annual Return), <strong>Form 8</strong> (Statement of Accounts & Solvency), and <strong>DIR-3 KYC</strong> where applicable.</p>

                            <h2>Comparison: Proprietorship vs LLP vs Private Limited</h2>
                            <ComparisonTable>
                                <thead><tr><th>Feature</th><th>Proprietorship</th><th>LLP</th><th>Private Limited</th></tr></thead>
                                <tbody>
                                    <tr><td>Ownership</td><td>Single owner</td><td>2+ partners</td><td>2+ shareholders (max 200)</td></tr>
                                    <tr><td>Liability</td><td>Unlimited</td><td>Limited</td><td>Limited to shareholding</td></tr>
                                    <tr><td>Compliance</td><td>Minimal</td><td>Moderate</td><td>High</td></tr>
                                    <tr><td>Funding</td><td>Self/Loans</td><td>External funding possible</td><td>Easy to raise capital via shares</td></tr>
                                    <tr><td>Continuity</td><td>Ends with owner</td><td>Continues</td><td>Continues despite changes</td></tr>
                                </tbody>
                            </ComparisonTable>

                            <h2>Why Choose Mundra Legal?</h2>
                            <FeatureGrid>
                                <FeatureCard><IconBox><i className="fas fa-user-graduate"></i></IconBox><h4>End-to-End Service</h4><p>Name reservation to COI and post-incorporation compliance.</p></FeatureCard>
                                <FeatureCard><IconBox><i className="fas fa-file-signature"></i></IconBox><h4>Expert Consultation</h4><p>Guidance tailored to business type and location.</p></FeatureCard>
                                <FeatureCard><IconBox><i className="fas fa-bolt"></i></IconBox><h4>Fast & Efficient</h4><p>Minimize delays and ensure correct filings.</p></FeatureCard>
                                <FeatureCard><IconBox><i className="fas fa-lock"></i></IconBox><h4>Compliance Management</h4><p>Ongoing support for statutory filings, audits, and returns.</p></FeatureCard>
                            </FeatureGrid>

                            <StatsGrid>
                                <StatCard><div>1000+</div><div>Companies Registered</div></StatCard>
                                <StatCard><div>7-10</div><div>Working Days</div></StatCard>
                                <StatCard><div>24/7</div><div>Support</div></StatCard>
                                <StatCard><div>100%</div><div>ROC Compliance</div></StatCard>
                            </StatsGrid>

                            <AnchorTarget id="faq" />
                            <h2>FAQs</h2>
                            <HighlightBox><h4>How do I register a private limited company in India?</h4><p>Follow DSC -> DIN -> Name reservation (SPICe+ Part A) -> SPICe+ Part B filing -> MOA/AOA -> AGILE-PRO-S -> COI issuance.</p></HighlightBox>
                            <HighlightBox><h4>What is the registration fee?</h4><p>Fees vary with authorized capital and state. ROC & stamp duty apply as per slabs; Mundra Legal provides fee estimates during consultation.</p></HighlightBox>
                            <HighlightBox><h4>Can NRIs or foreign nationals register?</h4><p>Yes. Foreign nationals need notarized/apostilled identity & address proofs, and other compliance for foreign investment (FEMA) if applicable.</p></HighlightBox>
                            <HighlightBox><h4>What documents are required?</h4><p>Identity & address proofs, PAN, registered office proof, utility bills, DSC, MOA/AOA drafts, affidavits, and photographs.</p></HighlightBox>
                            <HighlightBox><h4>How long does it take?</h4><p>Typically 7–10 working days via SPICe+ depending on MCA processing and verification timings.</p></HighlightBox>

                            <AnchorTarget id="contact-callout" />
                            <Callout>
                                <h3><i className="fas fa-phone-alt"></i> Ready to register your Pvt. Ltd. company?</h3>
                                <p>Contact Mundra Legal for a free consultation and fast incorporation service.</p>
                            </Callout>
                        </PLCMain>

                        <PLCSidebar>
                            <SidebarScrollWrapper>
                                <SidebarForm />
                            </SidebarScrollWrapper>
                        </PLCSidebar>
                    </PLCContainer>
                </PLCSection>
            </main>

            <Footer />

            <BackToTop onClick={scrollToTop} className={isBackToTopVisible ? 'visible' : ''} aria-label="Back to top">
                <i className="fas fa-chevron-up"></i>
            </BackToTop>
        </>
    );
};

export default PrivateLimitedCompany;
