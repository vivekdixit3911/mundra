import React, { useState, useEffect, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServiceHero from '../../components/ServiceHero';
import SidebarForm from '../../components/SidebarForm';

import {
    NotarySection,
    NotaryContainer,
    NotaryMain,
    NotaryByline,
    FeatureGrid,
    FeatureCard,
    ComparisonTable,
    NotarySidebar,
    QuickLinksNav,
    BackToTopButton
} from './Notarization.styles.js';

const Notarization = () => {
    const [isQuickLinksVisible, setQuickLinksVisible] = useState(false);
    const [isBackToTopVisible, setBackToTopVisible] = useState(false);

    const heroRef = useRef(null);

    // Refs for smooth scrolling
    const overviewRef = useRef(null);
    const servicesRef = useRef(null);
    const documentsRef = useRef(null);
    const processRef = useRef(null);
    const faqRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            // Quick links visibility
            if (heroRef.current) {
                const heroBottom = heroRef.current.getBoundingClientRect().bottom;
                setQuickLinksVisible(heroBottom < 0);
            }
            // Back to top visibility
            setBackToTopVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToRef = (ref) => {
        if (ref.current) {
            const offset = 80;
            const top = ref.current.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    const handleDownloadClick = (e) => {
        e.preventDefault();
        alert("Template not available for download at the moment.");
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <Header />
            <div ref={heroRef}>
                <ServiceHero
                    title="Stamp Paper & Notary Services"
                    subtitle="Professional document authentication and notarization services by Mundra Legal Consultants"
                    breadcrumb="Notarization"
                />
            </div>

            <QuickLinksNav className={isQuickLinksVisible ? 'visible' : ''}>
                <div className="ql-container">
                    <button onClick={() => scrollToRef(overviewRef)}>Overview</button>
                    <button onClick={() => scrollToRef(servicesRef)}>Services</button>
                    <button onClick={() => scrollToRef(documentsRef)}>Documents</button>
                    <button onClick={() => scrollToRef(processRef)}>Process</button>
                    <button onClick={() => scrollToRef(faqRef)}>FAQs</button>
                </div>
            </QuickLinksNav>

            <NotarySection ref={overviewRef}>
                <NotaryContainer>
                    <NotaryMain>
                        <h1>Stamp Paper & Notary Services</h1>
                        <NotaryByline>Professional document authentication and notarization services — Mundra Legal Consultants</NotaryByline>

                        <p>A <strong>Relationship Certificate</strong> and notarized documents serve many legal purposes: stamp paper procurement, affidavits, power of attorney, agreement attestation, and more. Mundra Legal Consultants handle documentation, verification and stamp duty compliance across India.</p>

                        <h2 ref={servicesRef}>Our Notarization Services</h2>
                        <FeatureGrid>
                            <FeatureCard>
                                <div className="icon-box"><i className="fas fa-stamp fa-lg"></i></div>
                                <h4>Stamp Paper Procurement</h4>
                                <p>e-Stamp and physical stamp paper procurement in required denominations with verification and delivery.</p>
                            </FeatureCard>
                            <FeatureCard>
                                <div className="icon-box"><i className="fas fa-certificate fa-lg"></i></div>
                                <h4>Notarization & Attestation</h4>
                                <p>Notary services for affidavits, agreements, POAs, and educational/identity documents.</p>
                            </FeatureCard>
                            <FeatureCard>
                                <div className="icon-box"><i className="fas fa-user-check fa-lg"></i></div>
                                <h4>Identity Verification</h4>
                                <p>Witnessing signatures, verifying identity documents and ensuring legal compliance.</p>
                            </FeatureCard>
                            <FeatureCard>
                                <div className="icon-box"><i className="fas fa-truck fa-lg"></i></div>
                                <h4>Home Visit Service</h4>
                                <p>Convenient home visits for elderly or bulk notarizations within serviceable areas.</p>
                            </FeatureCard>
                        </FeatureGrid>

                        <h2 ref={documentsRef}>Documents Required</h2>
                        <p>Commonly required documents (may vary by case):</p>
                        <ComparisonTable>
                            <thead>
                                <tr><th>Document</th><th>Notes</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Original Document</td><td>Document to be notarized (original)</td></tr>
                                <tr><td>Photo ID</td><td>Aadhar / PAN / Passport</td></tr>
                                <tr><td>Address Proof</td><td>Utility bill / Rental agreement</td></tr>
                                <tr><td>Supporting Documents</td><td>As applicable (witness IDs, authorization letters)</td></tr>
                            </tbody>
                        </ComparisonTable>

                        <h2 ref={processRef}>Notarization Process (Step-by-step)</h2>
                        <ol>
                            <li><strong>Initial Assessment:</strong> We assess the document, stamp duty needs and verification required.</li>
                            <li><strong>Document Preparation:</strong> Prepare / format document for stamping and notarization.</li>
                            <li><strong>Stamp Paper Procurement:</strong> Procure required denomination and complete stamp duty formalities.</li>
                            <li><strong>Notarization:</strong> Witnessing, sealing and signature by certified notary.</li>
                            <li><strong>Delivery:</strong> Safe delivery or collection of notarized documents.</li>
                        </ol>

                        <h2 id="fees">Fees & Charges</h2>
                        <p>Our fees are transparent and depend on the document type, urgency and any travel/home-visit charges. Below is a typical fee matrix (indicative):</p>
                        <ComparisonTable>
                            <thead><tr><th>Service</th><th>Typical Fee (INR)</th><th>Turnaround</th></tr></thead>
                            <tbody>
                                <tr><td>Simple Notarization (single signature)</td><td>₹300 - ₹600</td><td>Same day</td></tr>
                                <tr><td>Affidavit Drafting + Notarization</td><td>₹800 - ₹2,500</td><td>1-2 working days</td></tr>
                                <tr><td>Power of Attorney (draft + notarize)</td><td>₹1,000 - ₹3,000</td><td>1-2 working days</td></tr>
                                <tr><td>Home Visit Notarization (local)</td><td>₹1,500 - ₹3,500</td><td>Same day (by appointment)</td></tr>
                            </tbody>
                        </ComparisonTable>

                        <h2 id="templates">Downloadable Templates</h2>
                        <p>Use our ready templates for common notarized documents. Click to download and then reach out for review & notarization:</p>
                        <ul>
                            <li><button onClick={handleDownloadClick}>Affidavit Template (DOCX)</button></li>
                            <li><button onClick={handleDownloadClick}>Power of Attorney Template (DOCX)</button></li>
                            <li><button onClick={handleDownloadClick}>Settlement Agreement (DOCX)</button></li>
                        </ul>

                        <h2 ref={faqRef}>Frequently Asked Questions</h2>
                        <FeatureGrid>
                            <FeatureCard><h4>How long does notarization take?</h4><p>Simple notarizations take 30-60 minutes; complex matters may take longer.</p></FeatureCard>
                            <FeatureCard><h4>Is e-Stamp valid?</h4><p>Yes — e-Stamp has the same legal validity and is often preferred for security and verification.</p></FeatureCard>
                            <FeatureCard><h4>Do you provide home service?</h4><p>Yes, for certain areas and with prior appointment.</p></FeatureCard>
                            <FeatureCard><h4>Do you notarize international documents?</h4><p>We can notarize documents for international use and advise on apostille/attestation requirements.</p></FeatureCard>
                        </FeatureGrid>

                    </NotaryMain>
                    <NotarySidebar>
                        <SidebarForm />
                    </NotarySidebar>
                </NotaryContainer>
            </NotarySection>

            <Footer />

            <BackToTopButton className={isBackToTopVisible ? 'visible' : ''} onClick={scrollToTop}>
                <i className="fas fa-chevron-up"></i>
            </BackToTopButton>
        </>
    );
};

export default Notarization;
