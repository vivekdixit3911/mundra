import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SidebarForm from '../../components/SidebarForm';
import LottieAnimation from '../../components/LottieAnimation';
import ServiceHero from '../../components/ServiceHero';

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
    
    LottieAccent,
    AnchorTarget,
    HighlightBox,
    TableScroll,
    Callout
} from './PrivateLimitedCompany.styles';

const PrivateLimitedCompany = () => {
    const [isBackToTopVisible, setBackToTopVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => setBackToTopVisible(window.pageYOffset > 500);
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    

    return (
        <>
            <Header />

            <ServiceHero
                title="Private Limited Company Registration"
                subtitle="End-to-end Pvt. Ltd. registration, compliance & startup support for Indian startups and businesses."
                breadcrumb="Home / Services / Private Limited Company"
            />
            <PLCSection>
                <PLCContainer>
                    <PLCMain>
                        <h1 className="section-title">Private Limited Company Registration in India</h1>
                        <PLCByline>
                            End-to-end Private Limited (Pvt. Ltd.) registration, compliance & startup support. A Private Limited
                            Company is a privately held business entity offering limited liability protection and a separate legal
                            identity — ideal for startups and SMEs.
                        </PLCByline>

                        {/* Quick links removed as requested */}

                        <SectionLottie className="section-lottie">
                            {/* Optional: use a Lottie animation from public assets/Drafts */}
                            <LottieAccent>
                                <LottieAnimation src={encodeURI('/assets/Drafts/Business.json')} />
                            </LottieAccent>
                        </SectionLottie>

                        {/* FAQ placed immediately after hero as requested */}
                        

                        <AnchorTarget id="who" />
                        <h2 className="section-title">Who Should Incorporate as a Private Limited Company?</h2>
                        <PLCByline>
                            - Startups planning to raise external funding (VCs and angel investors prefer Pvt. Ltd.).<br />
                            - Businesses planning to scale and hire employees with formal equity arrangements (ESOPs).<br />
                            - Professionals and founders seeking limited liability protection from business risk.<br />
                            - Companies that require a credible corporate identity to sign contracts and secure suppliers/customers.<br />
                            - Businesses intending to sell or transfer ownership — Pvt. Ltd. provides a smooth exit structure via share transfer.
                        </PLCByline>

                        <AnchorTarget id="features" />
                        <h2 className="section-title">Key Features of a Private Limited Company</h2>
                        <FeatureGrid className="feature-grid">
                            <FeatureCard>
                                <h4>Limited Liability Protection</h4>
                                <PLCByline>Shareholders are liable only up to the amount unpaid on their shares; personal assets are protected.</PLCByline>
                            </FeatureCard>
                            <FeatureCard>
                                <h4>Separate Legal Entity</h4>
                                <PLCByline>The company can enter contracts, own assets, sue or be sued in its own name.</PLCByline>
                            </FeatureCard>
                            <FeatureCard>
                                <h4>Minimum Shareholders & Directors</h4>
                                <PLCByline>Minimum 2 shareholders (max 200) and at least 2 directors, one must be Indian resident.</PLCByline>
                            </FeatureCard>
                            <FeatureCard>
                                <h4>Company Name Requirements</h4>
                                <PLCByline>Name must end with 'Private Limited' and be unique; reservation via SPICe+ Part A.</PLCByline>
                            </FeatureCard>
                        </FeatureGrid>

                        <AnchorTarget id="types" />
                        <h2 className="section-title">Types of Private Limited Companies</h2>
                        <PLCByline>
                            <strong>Company Limited by Shares:</strong> Most common type; liability limited to share value.
                        </PLCByline>
                        <PLCByline>
                            <strong>Company Limited by Guarantee:</strong> Often used for non-profits where members guarantee a contribution amount.
                        </PLCByline>
                        <PLCByline>
                            <strong>Unlimited Company:</strong> Less common; members have unlimited liability.
                        </PLCByline>

                        <AnchorTarget id="advantages" />
                        <h2 className="section-title">Advantages & Disadvantages</h2>
                        <FeatureGrid>
                            <FeatureCard>
                                <h4>Advantages</h4>
                                <ul>
                                    <li>Limited Liability: Protects personal assets of shareholders.</li>
                                    <li>Ease of Funding: Attractive to investors, VCs and banks.</li>
                                </ul>
                            </FeatureCard>
                            <FeatureCard>
                                <h4>Disadvantages</h4>
                                <ul>
                                    <li>Compliance Burden: Annual filings, audits and statutory requirements.</li>
                                    <li>Public Disclosure: Financials and company details are publicly available on MCA portal.</li>
                                </ul>
                            </FeatureCard>
                        </FeatureGrid>

                        <AnchorTarget id="requirements" />
                        <h2 className="section-title">Requirements for Private Limited Company Registration</h2>
                        <PLCByline>
                            Before you begin incorporation, ensure you meet the statutory requirements for directors, shareholders and the registered office.
                        </PLCByline>

                        <h3>Directors and Members</h3>
                        <PLCByline>
                            Minimum 2 directors and 2 shareholders (maximum 200). At least one director must be an Indian resident (residing 182+ days in India
                            in the previous calendar year). All directors must obtain a Director Identification Number (DIN) and provide valid identity/address proofs.
                        </PLCByline>

                        <h3>Company Name</h3>
                        <PLCByline>
                            Proposed name must end with “Private Limited”, be unique and not deceptively similar to existing companies. Name reservation is via SPICe+ Part A.
                        </PLCByline>

                        <h3>Registered Office</h3>
                        <PLCByline>
                            Provide a permanent registered office address and supporting documents: rental/lease agreement or ownership proof, recent utility bill (≤ 2 months), and NOC from the owner if applicable.
                        </PLCByline>

                        <AnchorTarget id="process" />
                        <h2 className="section-title">Step-by-Step Registration Process</h2>

                        <ProcessTimeline>
                            <TimelineItem>
                                <TimelineMarker>1</TimelineMarker>
                                <div>
                                    <h4>Acquire Digital Signature Certificate (DSC)</h4>
                                    <PLCByline>Required for directors & subscribers to sign electronic forms. Documents: passport-sized photo, PAN, Aadhaar, email, phone. Foreign nationals require notarized & apostilled documents.</PLCByline>
                                </div>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineMarker>2</TimelineMarker>
                                <div>
                                    <h4>Obtain Director Identification Number (DIN)</h4>
                                    <PLCByline>DIN is mandatory for all directors and is included in the incorporation forms.</PLCByline>
                                </div>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineMarker>3</TimelineMarker>
                                <div>
                                    <h4>Name Reservation (SPICe+ Part A)</h4>
                                    <PLCByline>Propose up to two names; MCA reviews and approves the company name.</PLCByline>
                                </div>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineMarker>4</TimelineMarker>
                                <div>
                                    <h4>Submission (SPICe+ Part B)</h4>
                                    <PLCByline>Submit capital structure, registered office, director & shareholder info, MOA & AOA, PAN & TAN application, stamp duty and fees.</PLCByline>
                                </div>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineMarker>5</TimelineMarker>
                                <div>
                                    <h4>MOA & AOA</h4>
                                    <PLCByline>Draft MOA & AOA, obtain digital signatures and submit to MCA.</PLCByline>
                                </div>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineMarker>6</TimelineMarker>
                                <div>
                                    <h4>AGILE-PRO-S Filing</h4>
                                    <PLCByline>One-stop registration for GST, EPFO/ESI, bank account opening, and Shop & Establishment registration.</PLCByline>
                                </div>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineMarker>7</TimelineMarker>
                                <div>
                                    <h4>Certificate of Incorporation (COI)</h4>
                                    <PLCByline>MCA issues COI, CIN, PAN & TAN after verification — company is legally formed.</PLCByline>
                                </div>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineMarker>8</TimelineMarker>
                                <div>
                                    <h4>Post-Incorporation Filings & Bank Setup</h4>
                                    <PLCByline>Open company bank account, finalize share certificates and statutory registers, and complete state-level registrations as needed.</PLCByline>
                                </div>
                            </TimelineItem>
                        </ProcessTimeline>

                        <AnchorTarget id="documents" />
                        <h2 className="section-title">Documents Required for Registration</h2>
                        <PLCByline>
                            Identity & address proofs, PAN, registered office proof, utility bills, DSC, MOA/AOA drafts, affidavits, and photographs for directors and subscribers as applicable.
                        </PLCByline>

                        <AnchorTarget id="fees" />
                        <h2 className="section-title">Timeframe & Fees</h2>
                        <TableScroll>
                            <table className="comparison-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr>
                                        <th style={{ textAlign: 'left', padding: '8px' }}>Service</th>
                                        <th style={{ textAlign: 'left', padding: '8px' }}>Estimated Time</th>
                                        <th style={{ textAlign: 'left', padding: '8px' }}>Estimated Cost (INR)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ padding: '8px' }}>Name reservation (SPICe+ Part A)</td>
                                        <td style={{ padding: '8px' }}>1–3 days</td>
                                        <td style={{ padding: '8px' }}>1,000–2,500</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '8px' }}>DIN & DSC</td>
                                        <td style={{ padding: '8px' }}>1–2 days</td>
                                        <td style={{ padding: '8px' }}>1,500–3,500 per person</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '8px' }}>SPICe+ filing & COI</td>
                                        <td style={{ padding: '8px' }}>5–10 days</td>
                                        <td style={{ padding: '8px' }}>5,000–15,000 (govt + stamp duty varies)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </TableScroll>

                        <AnchorTarget id="post" />
                        <h2 className="section-title">Post-Incorporation</h2>
                        <PLCByline>
                            Statutory compliance: AGM, financial statements, auditor appointment, director KYC. Ongoing bookkeeping and tax filings are essential.
                        </PLCByline>

                        <HighlightBox>
                            <strong>Estimated first-year timeline (recommended):</strong>
                            <ul>
                                <li>Within 7–14 days: Open bank account; finalize share certificates and statutory registers.</li>
                                <li>Within 30 days: File incorporation related forms and validate PAN/TAN.</li>
                                <li>Within 90 days: Appoint auditor and prepare initial accounting records.</li>
                                <li>Within 180 days: Prepare first 6 months financials and configure GST/EPFO/ESI.</li>
                            </ul>
                        </HighlightBox>

                        <Callout>
                            <strong>Common Mistakes to Avoid:</strong>
                            <ul>
                                <li>Poor name checks — choose unique names and do trademark checks to avoid objections.</li>
                                <li>Incomplete or inconsistent KYC documents for directors — ensure PAN/Aadhaar consistency.</li>
                                <li>Delaying AGILE & bank setup — opens gaps in tax registrations and vendor onboarding.</li>
                                <li>Ignoring stamp duty differences across states — this can cause rejections or additional fees.</li>
                            </ul>
                        </Callout>

                        <AnchorTarget id="faq" />
                        <h2 className="section-title">FAQs</h2>
                        <h4>How do I register a private limited company in India?</h4>
                        <PLCByline>Follow DSC → DIN → Name reservation (SPICe+ Part A) → SPICe+ Part B filing → MOA/AOA → AGILE-PRO-S → COI issuance.</PLCByline>

                        <h4>Can NRIs or foreign nationals register?</h4>
                        <PLCByline>Yes. Foreign nationals need notarized/apostilled identity & address proofs, and other compliance for foreign investment (FEMA) if applicable.</PLCByline>

                        <h4>How long does it take?</h4>
                        <PLCByline>Typically 7–10 working days via SPICe+ depending on MCA processing and verification timings.</PLCByline>

                        <Callout>
                            <strong>Ready to register your Pvt. Ltd. company?</strong>
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

            <Footer />

            <BackToTop onClick={scrollToTop} className={isBackToTopVisible ? 'visible' : ''} aria-label="Back to top">
                <i className="fas fa-chevron-up"></i>
            </BackToTop>
        </>
    );
};

export default PrivateLimitedCompany;
