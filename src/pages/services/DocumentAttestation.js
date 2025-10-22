import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { DocumentAttestationContainer } from './DocumentAttestation.styles.js';

const DocumentAttestation = () => {

  return (
    <>
      <Header />
      <DocumentAttestationContainer>
        <main id="main-content">
            <section className="document-hero">
                <div className="container hero-content">
                    <div className="hero-badge">
                        <i className="fas fa-stamp"></i>
                        <span>Secure & Verified</span>
                    </div>
                    <h1 className="hero-title">Document Attestation Services</h1>
                    <p className="hero-subtitle">Professional document verification, authentication, and attestation for all your legal, business, and personal document needs.</p>
                    <div className="hero-buttons">
                        <a href="../contact" className="btn-primary">
                            <i className="fas fa-rocket"></i>
                            Get Started
                        </a>
                        <a href="tel:+918506874280" className="btn-secondary">
                            <i className="fas fa-phone"></i>
                            Call Expert Now
                        </a>
                    </div>
                </div>
            </section>

            <section className="services-modern">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Document Attestation Services</h2>
                        <p className="section-subtitle">Comprehensive document verification, authentication, and attestation services for all your legal, business, and personal document needs.</p>
                    </div>

                    <div className="services-grid">
                        <div className="service-category">
                            <div className="category-header">
                                <div className="category-icon blue">
                                    <i className="fas fa-file-certificate"></i>
                                </div>
                                <h3 className="category-title">Legal Document Attestation</h3>
                            </div>
                            <ul className="service-list">
                                <li className="service-item">
                                    <div className="service-check">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="service-details">
                                        <h4>Property Documents</h4>
                                        <p>Sale deeds, purchase agreements, property titles, and registration documents</p>
                                    </div>
                                </li>
                                <li className="service-item">
                                    <div className="service-check">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="service-details">
                                        <h4>Court Documents</h4>
                                        <p>Judgments, decrees, affidavits, and legal orders attestation</p>
                                    </div>
                                </li>
                                <li className="service-item">
                                    <div className="service-check">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="service-details">
                                        <h4>Contracts & Agreements</h4>
                                        <p>Business contracts, partnership deeds, and legal agreements</p>
                                    </div>
                                </li>
                                <li className="service-item">
                                    <div className="service-check">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="service-details">
                                        <h4>Power of Attorney</h4>
                                        <p>General and special power of attorney document attestation</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="service-category">
                            <div className="category-header">
                                <div className="category-icon green">
                                    <i className="fas fa-building"></i>
                                </div>
                                <h3 className="category-title">Business Document Attestation</h3>
                            </div>
                            <ul className="service-list">
                                <li className="service-item">
                                    <div className="service-check">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="service-details">
                                        <h4>Company Registration</h4>
                                        <p>MOA, AOA, incorporation certificates, and company documents</p>
                                    </div>
                                </li>
                                <li className="service-item">
                                    <div className="service-check">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="service-details">
                                        <h4>Financial Documents</h4>
                                        <p>Bank statements, financial reports, and audit certificates</p>
                                    </div>
                                </li>
                                <li className="service-item">
                                    <div className="service-check">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="service-details">
                                        <h4>Trade Licenses</h4>
                                        <p>Business licenses, permits, and regulatory approvals</p>
                                    </div>
                                </li>
                                <li className="service-item">
                                    <div className="service-check">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="service-details">
                                        <h4>Export-Import Documents</h4>
                                        <p>Shipping documents, invoices, and trade certificates</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="service-category">
                            <div className="category-header">
                                <div className="category-icon orange">
                                    <i className="fas fa-user-graduate"></i>
                                </div>
                                <h3 className="category-title">Personal Document Attestation</h3>
                            </div>
                            <ul className="service-list">
                                <li className="service-item">
                                    <div className="service-check">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="service-details">
                                        <h4>Educational Certificates</h4>
                                        <p>Degree certificates, mark sheets, and diploma attestation</p>
                                    </div>
                                </li>
                                <li className="service-item">
                                    <div className="service-check">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="service-details">
                                        <h4>Marriage Certificates</h4>
                                        <p>Marriage registration certificates and related documents</p>
                                    </div>
                                </li>
                                <li className="service-item">
                                    <div className="service-check">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="service-details">
                                        <h4>Birth & Death Certificates</h4>
                                        <p>Municipal and government-issued vital records attestation</p>
                                    </div>
                                </li>
                                <li className="service-item">
                                    <div className="service-check">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="service-details">
                                        <h4>Identity Documents</h4>
                                        <p>Passport, Aadhaar, PAN card, and other identity proofs</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="process-timeline">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Attestation Process</h2>
                        <p className="section-subtitle">Simple, efficient, and secure document attestation process with complete transparency</p>
                    </div>

                    <div className="timeline-container">
                        <div className="timeline-line"></div>

                        <div className="timeline-item">
                            <div className="timeline-content">
                                <h3>Document Collection & Review</h3>
                                <p>We collect your documents and perform a thorough review to ensure they meet attestation requirements. Our experts verify document authenticity and completeness.</p>
                            </div>
                            <div className="timeline-number">1</div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-content">
                                <h3>Verification & Authentication</h3>
                                <p>Documents are verified with issuing authorities and authenticated through proper legal channels. We ensure all verification requirements are met.</p>
                            </div>
                            <div className="timeline-number">2</div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-content">
                                <h3>Official Attestation</h3>
                                <p>Documents are officially attested by authorized government bodies, notaries, or designated authorities as per legal requirements.</p>
                            </div>
                            <div className="timeline-number">3</div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-content">
                                <h3>Quality Check & Delivery</h3>
                                <p>Final quality check to ensure all attestations are complete and accurate, followed by secure delivery of your attested documents.</p>
                            </div>
                            <div className="timeline-number">4</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pricing-modern">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Transparent Pricing</h2>
                        <p className="section-subtitle">Choose the right package for your document attestation needs with transparent, affordable pricing</p>
                    </div>

                    <div className="pricing-grid">
                        <div className="pricing-card">
                            <div className="pricing-icon basic">
                                <i className="fas fa-file-alt"></i>
                            </div>
                            <h3 className="pricing-title">Basic Attestation</h3>
                            <div className="pricing-price">Make a call, we'll discuss in detail</div>

                            <ul className="pricing-features">
                                <li><i className="fas fa-check"></i> Single document attestation</li>
                                <li><i className="fas fa-check"></i> Standard processing (5-7 days)</li>
                                <li><i className="fas fa-check"></i> Document verification</li>
                                <li><i className="fas fa-check"></i> Basic support</li>
                                <li><i className="fas fa-check"></i> Secure handling</li>
                            </ul>

                            <a href="../contact" className="pricing-cta secondary">
                                Get Started
                            </a>
                        </div>

                        <div className="pricing-card featured">
                            <div className="pricing-icon premium">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <h3 className="pricing-title">Premium Attestation</h3>
                            <div className="pricing-price">Make a call, we'll discuss in detail</div>

                            <ul className="pricing-features">
                                <li><i className="fas fa-check"></i> Priority processing (3-4 days)</li>
                                <li><i className="fas fa-check"></i> Multiple document types</li>
                                <li><i className="fas fa-check"></i> Enhanced verification</li>
                                <li><i className="fas fa-check"></i> Digital copies included</li>
                                <li><i className="fas fa-check"></i> Tracking & updates</li>
                                <li><i className="fas fa-check"></i> Dedicated support</li>
                            </ul>

                            <a href="../contact" className="pricing-cta primary">
                                Choose Premium
                            </a>
                        </div>

                        <div className="pricing-card">
                            <div className="pricing-icon enterprise">
                                <i className="fas fa-building"></i>
                            </div>
                            <h3 className="pricing-title">Enterprise</h3>
                            <div className="pricing-price">Custom<span>/package</span></div>

                            <ul className="pricing-features">
                                <li><i className="fas fa-check"></i> Bulk document processing</li>
                                <li><i className="fas fa-check"></i> Express processing (1-2 days)</li>
                                <li><i className="fas fa-check"></i> Dedicated account manager</li>
                                <li><i className="fas fa-check"></i> Custom verification protocols</li>
                                <li><i className="fas fa-check"></i> 24/7 priority support</li>
                                <li><i className="fas fa-check"></i> Special pricing for volume</li>
                            </ul>

                            <a href="../contact" className="pricing-cta secondary">
                                Contact Sales
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-modern">
                <div className="container">
                    <h2 className="cta-title">Ready to Get Your Documents Attested?</h2>
                    <p className="cta-subtitle">Let our experts handle your document attestation with complete security, authenticity, and legal compliance. Get started today!</p>

                    <div className="cta-buttons">
                        <a href="../contact" className="btn-primary">
                            <i className="fas fa-rocket"></i>
                            Start Your Application
                        </a>
                        <a href="tel:+918506874280" className="btn-secondary">
                            <i className="fas fa-phone"></i>
                            Call Expert Now
                        </a>
                    </div>
                </div>
            </section>
        </main>
      </DocumentAttestationContainer>
      <Footer />
    </>
  );
};

export default DocumentAttestation;
