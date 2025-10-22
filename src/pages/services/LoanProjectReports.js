
import React, { useEffect, useRef, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServiceHero from '../../components/ServiceHero';

import {
    GlobalLoanPageStyle,
    LoanSection,
    LoanContainer,
    LoanMain,
    LoanByline,
    HighlightBox,
    FeatureGrid,
    FeatureCard,
    ComparisonTable,
    SectionLottie,
    LoanSidebar,
    SidebarWrapper,
    ContactCard,
    QuickForm,
    SubmitButton,
    OrDivider,
    ContactInfo,
    BackToTopButton
} from './LoanProjectReports.styles.js';

const LoanSidebarForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your interest! Our team will contact you shortly to discuss your project report requirements.');
        e.target.reset();
    };

    return (
        <ContactCard>
            <h4>Get Project Report Assistance</h4>
            <p className="muted">Fill the form below for quick consultation</p>

            <QuickForm onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name *" required />
                <input type="email" name="email" placeholder="Your Email *" required />
                <input type="tel" name="phone" placeholder="Your Phone *" required />
                <select name="loanType">
                    <option value="">Select Loan Type</option>
                    <option value="term-loan">Term Loan</option>
                    <option value="working-capital">Working Capital Loan</option>
                    <option value="startup-dpr">Business Startup DPR</option>
                    <option value="expansion">Expansion Project</option>
                    <option value="msme">MSME Loan</option>
                    <option value="industrial">Industrial Project</option>
                    <option value="other">Other</option>
                </select>
                <input type="text" name="loanAmount" placeholder="Approx. Loan Amount" />
                <textarea name="message" placeholder="Brief Project Details"></textarea>
                <SubmitButton type="submit">
                    <i className="fas fa-paper-plane"></i> Submit Request
                </SubmitButton>
            </QuickForm>

            <OrDivider>OR</OrDivider>

            <ContactInfo>
                <p><i className="fas fa-phone"></i> <a href="tel:+918506874280">+91 85068 74280</a></p>
                <p><i className="fas fa-envelope"></i> <a href="mailto:mundralegal@gmail.com">mundralegal@gmail.com</a></p>
                <p><i className="fas fa-clock"></i> Mon - Sat: 9:00 AM - 6:00 PM</p>
            </ContactInfo>
        </ContactCard>
    );
}

const LoanProjectReports = () => {
    const [isBackToTopVisible, setBackToTopVisible] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.5/dist/dotlottie-wc.js";
        script.type = "module";
        document.body.appendChild(script);

        const handleScroll = () => {
            if (window.scrollY > 300) {
                setBackToTopVisible(true);
            } else {
                setBackToTopVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <GlobalLoanPageStyle />
            <Header />
            <ServiceHero
                title="Loan & Project Report Preparation"
                subtitle="Professional Bankable DPRs for Business Loans - Expert Financial Projections & Market Analysis"
                breadcrumb="Loan & Project Reports"
            />

            <LoanSection id="loan-content">
                <LoanContainer>
                    <LoanMain>
                        <h1>Loan & Project Report Preparation Services</h1>
                        <LoanByline>Professional DPR & Bankable Project Reports by Mundra Legal Consultants</LoanByline>

                        <SectionLottie>
                            <dotlottie-wc src="/assets/lottiefiles/Business analytics animation.lottie" autoplay loop></dotlottie-wc>
                        </SectionLottie>

                        <p>A <strong>Project Report</strong> (also known as Detailed Project Report or DPR) is a comprehensive document that outlines the complete plan for a business venture or expansion. It is essential for securing loans from banks and financial institutions, attracting investors, and demonstrating project viability.</p>
                        <p>At <strong>Mundra Legal Consultants</strong>, we prepare professional, bankable project reports that meet lender requirements and regulatory standards. Our reports include detailed financial projections, technical assessments, market analysis, and compliance documentation.</p>

                        <h2 id="what-is">What is a Loan/Project Report & Why is it Essential</h2>
                        <HighlightBox>
                            <h3>A Project Report Includes:</h3>
                            <ul>
                                <li><strong>Executive Summary</strong> — Brief overview of the project, objectives, and expected outcomes.</li>
                                <li><strong>Business/Project Description</strong> — Nature of business, products/services, operational model.</li>
                                <li><strong>Market Analysis</strong> — Industry overview, target market, competition, demand assessment.</li>
                                <li><strong>Technical Feasibility</strong> — Technology requirements, production process, infrastructure needs.</li>
                                <li><strong>Financial Projections</strong> — Cost estimates, revenue projections, profit & loss, cash flow, balance sheet.</li>
                                <li><strong>Risk Analysis</strong> — Identification of risks and mitigation strategies.</li>
                                <li><strong>Implementation Timeline</strong> — Project milestones and execution schedule.</li>
                                <li><strong>Supporting Documents</strong> — Licenses, permits, clearances, agreements.</li>
                            </ul>
                        </HighlightBox>

                        <h3 id="importance">Why Project Reports are Critical:</h3>
                        <FeatureGrid>
                            <FeatureCard>
                                <div className="icon-box"><i className="fas fa-university"></i></div>
                                <h4>Bank Loan Approval</h4>
                                <p>Banks require detailed project reports to assess creditworthiness and loan repayment capacity.</p>
                            </FeatureCard>
                            <FeatureCard>
                                <div className="icon-box"><i className="fas fa-chart-line"></i></div>
                                <h4>Investor Confidence</h4>
                                <p>Professional reports demonstrate project viability and attract potential investors.</p>
                            </FeatureCard>
                            <FeatureCard>
                                <div className="icon-box"><i className="fas fa-clipboard-check"></i></div>
                                <h4>Strategic Planning</h4>
                                <p>Helps in systematic planning, risk assessment, and resource allocation.</p>
                            </FeatureCard>
                            <FeatureCard>
                                <div className="icon-box"><i className="fas fa-file-contract"></i></div>
                                <h4>Regulatory Compliance</h4>
                                <p>Ensures all legal and regulatory requirements are documented and met.</p>
                            </FeatureCard>
                        </FeatureGrid>

                        <h2 id="types">Types of Loan & Project Reports We Prepare</h2>
                        <ComparisonTable>
                            <thead>
                                <tr><th>Report Type</th><th>Purpose</th><th>Key Features</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Term Loan Project Report</strong></td><td>For purchasing fixed assets, machinery, land, building</td><td>Capital expenditure details, asset justification, long-term financial projections</td></tr>
                                <tr><td><strong>Working Capital Loan Report</strong></td><td>For day-to-day operational expenses</td><td>Current asset/liability analysis, operating cycle assessment, cash flow projections</td></tr>
                                <tr><td><strong>Business Startup DPR</strong></td><td>For new business ventures</td><td>Market research, competitive analysis, startup costs, break-even analysis</td></tr>
                                <tr><td><strong>Expansion Project Report</strong></td><td>For business growth and expansion</td><td>Incremental investment, capacity enhancement, revenue growth projections</td></tr>
                                <tr><td><strong>MSME Loan Report</strong></td><td>For MSME-specific loan schemes</td><td>Udyam registration details, MSME benefits, subsidy eligibility</td></tr>
                                <tr><td><strong>Industrial Project Report</strong></td><td>For manufacturing and industrial units</td><td>Plant layout, machinery specifications, production capacity, technical feasibility</td></tr>
                            </tbody>
                        </ComparisonTable>

                        <h2 id="financial">Detailed Financial Projections</h2>
                        <p>Financial projections are the backbone of any project report. Our financial analysis includes:</p>
                        <FeatureGrid>
                            <FeatureCard>
                                <div className="icon-box"><i className="fas fa-file-invoice-dollar"></i></div>
                                <h4>Profit & Loss Statement</h4>
                                <p>5-7 year projected income statement with revenue, expenses, and profitability analysis.</p>
                            </FeatureCard>
                            <FeatureCard>
                                <div className="icon-box"><i className="fas fa-hand-holding-usd"></i></div>
                                <h4>Cash Flow Statement</h4>
                                <p>Monthly and yearly cash flow projections showing liquidity and fund management.</p>
                            </FeatureCard>
                            <FeatureCard>
                                <div className="icon-box"><i className="fas fa-balance-scale"></i></div>
                                <h4>Balance Sheet</h4>
                                <p>Projected assets, liabilities, and equity position over the project period.</p>
                            </FeatureCard>
                            <FeatureCard>
                                <div className="icon-box"><i className="fas fa-percentage"></i></div>
                                <h4>Financial Ratios</h4>
                                <p>Key ratios like DSCR, ROI, ROE, payback period, and break-even analysis.</p>
                            </FeatureCard>
                        </FeatureGrid>

                        <h2 id="documents">Documents Required for Project Report Preparation</h2>
                        <p>To prepare a comprehensive project report, we require the following documents:</p>
                        <FeatureGrid>
                            <FeatureCard>
                                <div className="icon-box"><i className="fas fa-id-card"></i></div>
                                <h4>Identity Documents</h4>
                                <p>PAN Card, Aadhar Card, and Address Proof of promoters/directors</p>
                            </FeatureCard>
                            <FeatureCard>
                                <div className="icon-box"><i className="fas fa-certificate"></i></div>
                                <h4>Business Registration</h4>
                                <p>Company incorporation certificate, partnership deed, or proprietorship registration</p>
                            </FeatureCard>
                            <FeatureCard>
                                <div className="icon-box"><i className="fas fa-file-invoice"></i></div>
                                <h4>Financial Statements</h4>
                                <p>Last 2-3 years audited financials, ITR, GST returns (if existing business)</p>
                            </FeatureCard>
                        </FeatureGrid>

                        <h2 id="faqs">Frequently Asked Questions (FAQs)</h2>
                        <HighlightBox>
                            <h3>Q1. What is the typical timeframe to prepare a project report?</h3>
                            <p>Depending on project complexity, we typically deliver project reports within 7-15 working days from receipt of all documents.</p>
                        </HighlightBox>
                        <HighlightBox>
                            <h3>Q2. Do you provide support during bank meetings?</h3>
                            <p>Yes, we provide comprehensive support including attending bank meetings and clarifying project details if required.</p>
                        </HighlightBox>
                        <HighlightBox>
                            <h3>Q3. Can you prepare reports for startups with no financial history?</h3>
                            <p>Absolutely! We specialize in startup DPRs with industry benchmarking and market research-based projections.</p>
                        </HighlightBox>
                    </LoanMain>

                    <LoanSidebar>
                        <SidebarWrapper>
                            <LoanSidebarForm />
                            <ContactCard>
                                <SectionLottie style={{ height: '250px', margin: '0' }}>
                                    <dotlottie-wc src="/assets/lottiefiles/Man and robot with computers sitting together in workplace.lottie" autoplay loop></dotlottie-wc>
                                </SectionLottie>
                                <p style={{ textAlign: 'center', marginTop: '16px', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                    <strong>Professional Project Reports</strong><br />
                                    Trusted by 500+ businesses across India
                                </p>
                            </ContactCard>
                        </SidebarWrapper>
                    </LoanSidebar>
                </LoanContainer>
            </LoanSection>

            <Footer />

            <BackToTopButton className={isBackToTopVisible ? 'visible' : ''} onClick={scrollToTop}>
                <i className="fas fa-chevron-up"></i>
            </BackToTopButton>
        </>
    );
};

export default LoanProjectReports;
