import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import SidebarForm from "../../components/SidebarForm";
import LottieAnimation from "../../components/LottieAnimation";
import {
  RelationshipSection,
  RelationshipContainer,
  RelationshipMain,
  Callout,
  FeatureGrid,
  FeatureCard,
  ComparisonTable,
  ProcessTimeline,
  TimelineItem,
  TimelineMarker,
  TimelineContent,
  StatsGrid,
  StatCard,
  HighlightBox,
  SectionLottie,
  RelationshipSidebar,
  SidebarScrollWrapper
} from "./RelationshipCertificate.styles.js";

const RelationshipCertificate = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <ServiceHero
        title="Relationship Certificate – Apply Online"
        subtitle="Get Your Relationship Certificate Hassle-Free with Mundra Legal"
        breadcrumb="Relationship Certificate"
      />
      
      <RelationshipSection>
        <RelationshipContainer>
          <RelationshipMain>
            <h1>Relationship Certificate – Apply Online</h1>
            <p className="relationship-byline">Get Your Relationship Certificate Hassle-Free with Mundra Legal</p>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/e22c2746-b465-41f9-9f1c-b8e0dc0d5ec2/PDjV3Pgj0u.lottie"
                width="300px"
                height="300px"
              />
            </SectionLottie>

            <p>A Relationship Certificate is an essential legal document that verifies the relationship between family members. It is often required for purposes such as visa applications, property inheritance, pension claims, and government benefits.</p>

            <p>At Mundra Legal, we make the process simple, transparent, and efficient. Our legal experts manage the documentation, verification, and filing—ensuring you receive your certificate without unnecessary delays or stress.</p>

            <Callout>
              <p><i className="fas fa-certificate" style={{color: '#D4AF37', marginRight: '8px'}}></i> <strong>Quick & Reliable:</strong> Get your Relationship Certificate processed within 7-15 working days with complete legal support from Mundra Legal.</p>
            </Callout>

            <h2 id="how-to-get">How to Get a Relationship Certificate with Mundra Legal</h2>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/a9d1932b-a76e-4018-ac59-2cea2224c812/g6AAJ5F0wu.lottie"
                width="300px"
                height="300px"
              />
            </SectionLottie>

            <ProcessTimeline>
              <TimelineItem>
                <TimelineMarker>
                  <i className="fas fa-upload"></i>
                </TimelineMarker>
                <TimelineContent>
                  <h4>1. Upload Documents</h4>
                  <p>Submit your required documents, including identity proof and relationship evidence, through our secure online portal.</p>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineMarker>
                  <i className="fas fa-user-tie"></i>
                </TimelineMarker>
                <TimelineContent>
                  <h4>2. Consult Our Expert</h4>
                  <p>A dedicated legal advisor will review your case, guide you on the required documents, and prepare the necessary affidavits or applications.</p>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineMarker>
                  <i className="fas fa-file-signature"></i>
                </TimelineMarker>
                <TimelineContent>
                  <h4>3. Application Filing</h4>
                  <p>We handle the complete filing process with the relevant authorities, ensuring accuracy and compliance at every stage.</p>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineMarker>
                  <i className="fas fa-certificate"></i>
                </TimelineMarker>
                <TimelineContent>
                  <h4>4. Get Your Certificate</h4>
                  <p>Once approved, you'll receive your certified Relationship Certificate, ready for use in visa, inheritance, or legal applications.</p>
                </TimelineContent>
              </TimelineItem>
            </ProcessTimeline>

            <h2 id="importance">Importance of a Relationship Certificate</h2>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/c195821a-b69d-4b7d-b98d-7ed787ceb0f0/ulNalBOVgu.lottie"
                width="300px"
                height="300px"
              />
            </SectionLottie>

            <p>A Relationship Certificate holds significant legal and administrative value in India. It is required in several personal, financial, and government-related matters:</p>

            <FeatureGrid>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-plane-departure"></i>
                </div>
                <h4>Visa & Immigration</h4>
                <p>Mandatory for family visas, dependent visas, and sponsorships when traveling or settling abroad.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-home"></i>
                </div>
                <h4>Property Inheritance</h4>
                <p>Essential for claiming ancestral property, legal succession, or joint assets after the death of a family member.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-money-check-alt"></i>
                </div>
                <h4>Pension & Insurance Claims</h4>
                <p>Required for pension settlements, life insurance claims, or family nominee verification.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-hand-holding-usd"></i>
                </div>
                <h4>Government Schemes & Benefits</h4>
                <p>Helps you avail subsidies, welfare programs, and financial assistance under various state and central schemes.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-gavel"></i>
                </div>
                <h4>Legal & Identification Purposes</h4>
                <p>Serves as an official proof of family relation for bank accounts, court submissions, and documentation processes.</p>
              </FeatureCard>
            </FeatureGrid>

            <h2 id="benefits">Benefits of Having a Relationship Certificate</h2>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/608bb0ee-75d0-4c06-bbc6-fffd96c00e3a/6TWHywiLM0.lottie"
                width="300px"
                height="300px"
              />
            </SectionLottie>

            <p>A Relationship Certificate issued through Mundra Legal provides several practical and legal advantages:</p>

            <HighlightBox>
              <ul>
                <li><i className="fas fa-check-circle" style={{color: '#D4AF37', marginRight: '8px'}}></i> <strong>Legal Proof of Relationship</strong> – Officially validates family ties (parent-child, spouse, siblings, etc.).</li>
                <li><i className="fas fa-check-circle" style={{color: '#D4AF37', marginRight: '8px'}}></i> <strong>Smooth Visa & Immigration Approvals</strong> – Required by embassies for dependent and family visa applications.</li>
                <li><i className="fas fa-check-circle" style={{color: '#D4AF37', marginRight: '8px'}}></i> <strong>Simplified Property Inheritance</strong> – Avoids legal disputes during property transfers or succession proceedings.</li>
                <li><i className="fas fa-check-circle" style={{color: '#D4AF37', marginRight: '8px'}}></i> <strong>Essential for Pension & Insurance</strong> – Required by financial institutions and insurance companies.</li>
                <li><i className="fas fa-check-circle" style={{color: '#D4AF37', marginRight: '8px'}}></i> <strong>Access to Government Benefits</strong> – Necessary for applying to welfare schemes and family-based grants.</li>
                <li><i className="fas fa-check-circle" style={{color: '#D4AF37', marginRight: '8px'}}></i> <strong>Accepted for Legal and Official Use</strong> – Used in court, banks, and various administrative offices.</li>
              </ul>
            </HighlightBox>

            <h2 id="documents">Documents Required for a Relationship Certificate</h2>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/3c3cb7ee-7106-430f-9451-202c033965c9/drWrh1bZhB.lottie"
                width="300px"
                height="300px"
              />
            </SectionLottie>

            <p>To process your application, the following documents are generally required (depending on your relationship type and state authority):</p>

            <ComparisonTable>
              <thead>
                <tr>
                  <th>Document Type</th>
                  <th>Examples / Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Identity Proof</strong></td>
                  <td>Aadhaar Card, PAN Card, Voter ID, or Passport of applicant and family members</td>
                </tr>
                <tr>
                  <td><strong>Address Proof</strong></td>
                  <td>Ration Card, Utility Bill, Aadhaar Card, or Rental Agreement</td>
                </tr>
                <tr>
                  <td><strong>Birth Certificates</strong></td>
                  <td>Proof of birth for children or family relationships</td>
                </tr>
                <tr>
                  <td><strong>Affidavit (if required)</strong></td>
                  <td>Sworn declaration confirming relationship details</td>
                </tr>
                <tr>
                  <td><strong>Marriage Certificate</strong></td>
                  <td>If applying for a spousal relationship certificate</td>
                </tr>
                <tr>
                  <td><strong>Passport-sized Photographs</strong></td>
                  <td>Recent photos of applicant and related family members</td>
                </tr>
                <tr>
                  <td><strong>Other Supporting Documents</strong></td>
                  <td>Family register, guardianship orders, or succession documents (if applicable)</td>
                </tr>
              </tbody>
            </ComparisonTable>

            <Callout>
              <p><i className="fas fa-info-circle" style={{color: '#D4AF37', marginRight: '8px'}}></i> <strong>Note:</strong> Our legal experts will guide you on the exact documents required based on your specific case and state regulations.</p>
            </Callout>

            <h2 id="registration-process">Registration Process at Mundra Legal</h2>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/aa67c09e-32f8-473b-9255-419e321b484b/9BXu5Bhfyw.lottie"
                width="300px"
                height="300px"
              />
            </SectionLottie>

            <p>We simplify the entire process into four quick steps:</p>

            <FeatureGrid>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-cloud-upload-alt"></i>
                </div>
                <h4>1️⃣ Upload Documents</h4>
                <p>Submit ID and relationship proofs securely through our online portal.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-comments"></i>
                </div>
                <h4>2️⃣ Consult Our Expert</h4>
                <p>Receive personalized legal guidance from experienced professionals.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-folder-open"></i>
                </div>
                <h4>3️⃣ Application Filing</h4>
                <p>Our team prepares and submits your case to the relevant authority.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-shipping-fast"></i>
                </div>
                <h4>4️⃣ Certificate Delivery</h4>
                <p>Receive your approved certificate online or by courier.</p>
              </FeatureCard>
            </FeatureGrid>

            <h2 id="deliverables">Deliverables from Mundra Legal</h2>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/4c07e908-ca58-44c5-92bb-1ac770adc086/F0TEajCvsT.lottie"
                width="300px"
                height="300px"
              />
            </SectionLottie>

            <FeatureGrid>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-user-graduate"></i>
                </div>
                <h4>Expert Consultation</h4>
                <p>With a certified legal or succession lawyer</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-clipboard-check"></i>
                </div>
                <h4>Document Review & Verification</h4>
                <p>For accuracy and compliance</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-pen-fancy"></i>
                </div>
                <h4>Application Drafting & Filing</h4>
                <p>With relevant authorities</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-clock"></i>
                </div>
                <h4>Timely Delivery</h4>
                <p>Of your official Relationship Certificate</p>
              </FeatureCard>
            </FeatureGrid>

            <h2 id="why-choose">Why Choose Mundra Legal</h2>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/bbe018c8-4581-41d6-abc5-1ce8fd8cc3c5/0qlZ2tqGl9.lottie"
                width="300px"
                height="300px"
              />
            </SectionLottie>

            <FeatureGrid>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h4>Reliable & Trusted</h4>
                <p>Thousands of satisfied clients across India trust Mundra Legal for their legal and documentation needs. Our platform ensures complete accuracy and compliance.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-bolt"></i>
                </div>
                <h4>Fast & Efficient</h4>
                <p>We value your time. Get your Relationship Certificate processed quickly with minimal effort—typically within 7-15 working days (depending on local authority timelines).</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-lock"></i>
                </div>
                <h4>Secure & Confidential</h4>
                <p>Your documents and information remain completely private and encrypted. Mundra Legal follows strict confidentiality and data protection standards.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-balance-scale"></i>
                </div>
                <h4>Expert Legal Support</h4>
                <p>Every case is handled by a qualified legal professional experienced in documentation, succession, and family law.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-map-marked-alt"></i>
                </div>
                <h4>All-India Service</h4>
                <p>No matter where you are in India, Mundra Legal can help you obtain your Relationship Certificate seamlessly.</p>
              </FeatureCard>
            </FeatureGrid>

            <StatsGrid>
              <StatCard>
                <div className="stat-number">15K+</div>
                <div className="stat-label">Certificates Issued</div>
              </StatCard>
              <StatCard>
                <div className="stat-number">7-15</div>
                <div className="stat-label">Days Processing</div>
              </StatCard>
              <StatCard>
                <div className="stat-number">100%</div>
                <div className="stat-label">Legal Compliance</div>
              </StatCard>
              <StatCard>
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Available</div>
              </StatCard>
            </StatsGrid>

            <h2 id="faqs">Frequently Asked Questions (FAQs)</h2>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/8d9a8d8a-8b77-4c07-ab09-a6001c90fd5e/EFZQyaOAzd.lottie"
                width="300px"
                height="300px"
              />
            </SectionLottie>

            <HighlightBox>
              <h4>1. What is a Relationship Certificate and why is it needed?</h4>
              <p>A Relationship Certificate is an official government document that certifies the family relationship between two or more individuals. It is required for legal, immigration, inheritance, pension, and documentation purposes.</p>
            </HighlightBox>

            <HighlightBox>
              <h4>2. How can I apply for a Relationship Certificate online in India?</h4>
              <p>You can apply through Mundra Legal's online service. Simply upload your documents, consult our experts, and we handle the filing on your behalf.</p>
            </HighlightBox>

            <HighlightBox>
              <h4>3. What documents are required for a Relationship Certificate?</h4>
              <p>You'll need identity proof, address proof, birth or marriage certificates, photographs, and an affidavit (if required). Our team will guide you on the exact requirements.</p>
            </HighlightBox>

            <HighlightBox>
              <h4>4. How long does it take to get a Relationship Certificate?</h4>
              <p>Processing time varies by state but usually takes <strong>7–15 working days</strong> once documents are verified.</p>
            </HighlightBox>

            <HighlightBox>
              <h4>5. Can I use a Relationship Certificate for visa and immigration?</h4>
              <p>Yes. It's a mandatory document for family and dependent visa applications, proving your relationship with the sponsor or applicant.</p>
            </HighlightBox>

            <HighlightBox>
              <h4>6. Does Mundra Legal handle the complete process?</h4>
              <p>Yes. We provide end-to-end service—document review, application filing, authority coordination, and delivery of your certificate.</p>
            </HighlightBox>

            <Callout style={{background: 'linear-gradient(135deg, #1C2951 0%, #D4AF37 100%)', border: 'none', color: 'white', marginTop: '48px'}}>
              <h3 style={{color: 'white', marginBottom: '16px'}}>Apply for Your Relationship Certificate Today</h3>
              <p style={{color: 'white', fontSize: '1.1rem', marginBottom: '0'}}>Get your Relationship Certificate quickly, securely, and without stress. Let the professionals at Mundra Legal handle the process for you.</p>
            </Callout>
          </RelationshipMain>

          <RelationshipSidebar>
            <SidebarScrollWrapper>
              <SidebarForm />
            </SidebarScrollWrapper>
          </RelationshipSidebar>
        </RelationshipContainer>
      </RelationshipSection>

      <Footer />

      {/* Back to Top Button */}
      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '50px',
          height: '50px',
          background: 'linear-gradient(135deg, #1C2951, #D4AF37)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          opacity: showBackToTop ? 1 : 0,
          transform: showBackToTop ? 'translateY(0)' : 'translateY(100px)',
          transition: 'all 0.3s ease',
          boxShadow: '0 16px 48px rgba(28, 41, 81, 0.16)',
          zIndex: 999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </>
  );
};

export default RelationshipCertificate;
