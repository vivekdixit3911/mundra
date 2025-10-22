import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import SidebarForm from "../../components/SidebarForm";
import LottieAnimation from "../../components/LottieAnimation";
import styled from "styled-components";

const PropertySection = styled.section`
  padding: 60px 24px;
  background: linear-gradient(180deg, #f8f9fb 0%, #ffffff 50%, #f8f9fb 100%);
  font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: #2d3748;

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
    font-weight: 700;
  }
`;

const PropertyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 40px;
  max-width: 1280px;
  margin: 0 auto;
  align-items: start;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 320px;
    gap: 32px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const PropertyMain = styled.article`
  background: white;
  padding: 48px 40px;
  border-radius: 20px;
  box-shadow: 0 16px 48px rgba(28, 41, 81, 0.16);
  border: 1px solid rgba(28, 41, 81, 0.08);

  @media (max-width: 640px) {
    padding: 32px 24px;
  }

  h1 {
    font-size: clamp(2rem, 4vw, 3.5rem);
    background: linear-gradient(135deg, #1C2951 0%, #D4AF37 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 12px;
    letter-spacing: 0.5px;
    line-height: 1.2;
  }

  .property-byline {
    color: #718096;
    font-size: 1.05rem;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 8px;

    &::before {
      content: '';
      display: inline-block;
      width: 4px;
      height: 18px;
      background: linear-gradient(180deg, #1C2951, #D4AF37);
      border-radius: 2px;
    }
  }

  p {
    color: #4a5568;
    line-height: 1.8;
    margin-bottom: 16px;
    font-size: 1.05rem;
  }

  h2 {
    color: #1C2951;
    font-size: clamp(1.6rem, 2.8vw, 2.2rem);
    margin-top: 40px;
    margin-bottom: 20px;
    position: relative;
    padding-bottom: 12px;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60px;
      height: 4px;
      background: linear-gradient(90deg, #1C2951, #D4AF37);
      border-radius: 2px;
    }
  }

  h3 {
    color: #2d3748;
    font-size: clamp(1.3rem, 2.2vw, 1.7rem);
    margin-top: 32px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 10px;

    &::before {
      content: '●';
      color: #D4AF37;
      font-size: 0.7em;
    }
  }

  ul, ol {
    margin: 20px 0;
    padding-left: 24px;

    li {
      color: #4a5568;
      line-height: 1.7;
      margin-bottom: 8px;
      padding-left: 8px;

      strong {
        color: #1C2951;
        font-weight: 700;
      }
    }
  }

  ul li::marker {
    color: #D4AF37;
    font-weight: bold;
  }

  ol li::marker {
    color: #1C2951;
    font-weight: bold;
  }
`;

const Callout = styled.div`
  background: linear-gradient(135deg, rgba(28, 41, 81, 0.05) 0%, rgba(212, 175, 55, 0.08) 100%);
  border-left: 5px solid #1C2951;
  padding: 20px 24px;
  border-radius: 12px;
  margin: 24px 0;
  box-shadow: 0 2px 8px rgba(28, 41, 81, 0.08);

  p {
    margin-bottom: 0;
    font-weight: 500;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin: 32px 0;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: white;
  padding: 32px 24px;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(28, 41, 81, 0.12);
  border: 1px solid rgba(28, 41, 81, 0.08);
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(28, 41, 81, 0.16);
  }

  .icon-box {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #1C2951, #D4AF37);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    box-shadow: 0 8px 24px rgba(28, 41, 81, 0.12);

    i {
      font-size: 2rem;
      color: white;
    }
  }

  h4 {
    color: #1C2951;
    font-size: 1.3rem;
    margin-bottom: 12px;
  }

  p {
    color: #4a5568;
    line-height: 1.6;
    margin: 0;
  }
`;

const ComparisonTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 32px 0;
  box-shadow: 0 8px 24px rgba(28, 41, 81, 0.12);
  border-radius: 12px;
  overflow: hidden;

  th {
    background: linear-gradient(90deg, #1C2951, #D4AF37);
    color: white;
    padding: 16px;
    text-align: left;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-size: 0.9rem;
  }

  td {
    padding: 16px;
    border-bottom: 1px solid rgba(28, 41, 81, 0.1);
    background: white;
  }

  tr:last-child td {
    border-bottom: none;
  }

  tr:hover {
    background: rgba(28, 41, 81, 0.02);
  }
`;

const ProcessTimeline = styled.div`
  position: relative;
  padding-left: 40px;
  margin: 40px 0;

  &::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, #1C2951, #D4AF37);
    border-radius: 2px;
  }

  @media (max-width: 640px) {
    padding-left: 30px;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 40px;
  padding-left: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineMarker = styled.div`
  position: absolute;
  left: -47px;
  top: 0;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #1C2951, #D4AF37);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(28, 41, 81, 0.12);
  z-index: 1;

  @media (max-width: 640px) {
    width: 32px;
    height: 32px;
    left: -39px;
  }

  i {
    color: white;
    font-size: 1.1rem;
  }
`;

const TimelineContent = styled.div`
  h4 {
    color: #1C2951;
    font-size: 1.3rem;
    margin-bottom: 8px;
  }

  p {
    color: #4a5568;
    line-height: 1.6;
    margin: 0;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 32px 0;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background: linear-gradient(135deg, rgba(28, 41, 81, 0.05), rgba(212, 175, 55, 0.08));
  padding: 24px;
  border-radius: 12px;
  text-align: center;
  border: 1px solid rgba(28, 41, 81, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  .stat-number {
    font-size: 2.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, #1C2951, #D4AF37);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 8px;
  }

  .stat-label {
    color: #4a5568;
    font-size: 0.95rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

const HighlightBox = styled.div`
  background: linear-gradient(135deg, #f8f9fb 0%, #ffffff 100%);
  border: 2px solid rgba(212, 175, 55, 0.2);
  border-radius: 16px;
  padding: 24px;
  margin: 24px 0;
  position: relative;
  box-shadow: 0 8px 24px rgba(28, 41, 81, 0.12);

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, #1C2951, #D4AF37);
    border-radius: 18px;
    z-index: -1;
    opacity: 0.1;
  }

  h4 {
    color: #1C2951;
    margin-bottom: 16px;
  }

  p {
    margin: 0;
  }
`;

const SectionLottie = styled.div`
  width: 100%;
  max-width: 400px;
  height: 300px;
  margin: 40px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PropertySidebar = styled.aside`
  position: sticky;
  top: 20px;

  @media (max-width: 900px) {
    position: relative;
    top: 0;
  }
`;

const SidebarScrollWrapper = styled.div`
  max-height: calc(100vh - 40px);
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #D4AF37 rgba(28, 41, 81, 0.1);

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(28, 41, 81, 0.05);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #D4AF37;
    border-radius: 3px;
  }
`;

const PropertyRegistry = () => {
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
        title="Property Registration Services"
        subtitle="Complete Land & Property Registry Solutions in India"
        breadcrumb="Property Registry"
      />
      
      <PropertySection>
        <PropertyContainer>
          <PropertyMain>
            <h1>Property Registration Services</h1>
            <p className="property-byline">Complete Land & Property Registry Solutions in India</p>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/a9d1932b-a76e-4018-ac59-2cea2224c812/g6AAJ5F0wu.lottie"
                width="300px"
                height="300px"
              />
            </SectionLottie>

            <p>Property registration is a crucial legal process that establishes ownership rights and provides legal protection to property buyers in India. Under the <strong>Registration Act, 1908</strong>, all property transactions involving sale, transfer, lease (above 11 months), gift, or mortgage must be registered with the Sub-Registrar office.</p>

            <p>Proper property registration ensures clear title, prevents fraud, protects against future disputes, and provides legal evidence of ownership. It's mandatory to register property within <strong>4 months of the transaction date</strong> to avoid penalties and legal complications.</p>

            <p>At Mundra Legal, we provide end-to-end property registration services including document verification, stamp duty calculation, registration assistance, and post-registration support across India.</p>

            <Callout>
              <p><i className="fas fa-file-contract" style={{color: '#D4AF37', marginRight: '8px'}}></i> <strong>Legal Mandate:</strong> Property registration is mandatory under Indian law. Unregistered property documents have no legal validity in court.</p>
            </Callout>

            <h2 id="what-is">What is Property Registration?</h2>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/aa67c09e-32f8-473b-9255-419e321b484b/9BXu5Bhfyw.lottie"
                width="300px"
                height="300px"
              />
            </SectionLottie>

            <p>Property registration is the legal process of recording property ownership transfer documents with the government's Sub-Registrar office. This process creates a permanent public record of the transaction and establishes legal ownership rights.</p>

            <FeatureGrid>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-certificate"></i>
                </div>
                <h4>Legal Ownership</h4>
                <p>Establishes and proves legal ownership of the property in courts of law.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h4>Fraud Protection</h4>
                <p>Prevents fraudulent claims and protects against illegal property transactions.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-gavel"></i>
                </div>
                <h4>Legal Evidence</h4>
                <p>Registered documents are admissible as primary evidence in court proceedings.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-hand-holding-usd"></i>
                </div>
                <h4>Loan Eligibility</h4>
                <p>Banks and financial institutions require registered property for loan approval.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-file-invoice-dollar"></i>
                </div>
                <h4>Tax Benefits</h4>
                <p>Enables claims for income tax deductions under various sections.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-users"></i>
                </div>
                <h4>Inheritance Rights</h4>
                <p>Facilitates smooth transfer of property to legal heirs and successors.</p>
              </FeatureCard>
            </FeatureGrid>

            <h2 id="document-types">Types of Property Documents Requiring Registration</h2>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/3c3cb7ee-7106-430f-9451-202c033965c9/drWrh1bZhB.lottie"
                width="300px"
                height="300px"
              />
            </SectionLottie>

            <p>Under Indian law, the following property documents must be compulsorily registered:</p>

            <FeatureGrid>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-file-signature"></i>
                </div>
                <h4>Sale Deed</h4>
                <p>Document transferring property ownership from seller to buyer through sale.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-gift"></i>
                </div>
                <h4>Gift Deed</h4>
                <p>Transfer of property as a gift without monetary consideration.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-home"></i>
                </div>
                <h4>Lease Deed</h4>
                <p>Rental agreements exceeding 11 months duration (long-term leases).</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-university"></i>
                </div>
                <h4>Mortgage Deed</h4>
                <p>Documents creating a charge on property for securing a loan.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-exchange-alt"></i>
                </div>
                <h4>Exchange Deed</h4>
                <p>Mutual transfer of properties between two parties.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-divide"></i>
                </div>
                <h4>Partition Deed</h4>
                <p>Division of jointly owned property among co-owners.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-handshake"></i>
                </div>
                <h4>Power of Attorney</h4>
                <p>Authorization to act on behalf of property owner (in some states).</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-book"></i>
                </div>
                <h4>Will/Testament</h4>
                <p>Optional but recommended registration for property inheritance documents.</p>
              </FeatureCard>
            </FeatureGrid>

            <h2 id="documents-required">Documents Required for Property Registration</h2>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/c195821a-b69d-4b7d-b98d-7ed787ceb0f0/ulNalBOVgu.lottie"
                width="300px"
                height="300px"
              />
            </SectionLottie>

            <p>To register a property in India, you need to submit the following documents:</p>

            <ComparisonTable>
              <thead>
                <tr>
                  <th>Document Category</th>
                  <th>Specific Documents Required</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Identity Proof</strong></td>
                  <td>Aadhaar Card, PAN Card, Passport, Voter ID, Driving License (Both Buyer & Seller)</td>
                </tr>
                <tr>
                  <td><strong>Address Proof</strong></td>
                  <td>Aadhaar Card, Passport, Utility Bills, Voter ID (Both Buyer & Seller)</td>
                </tr>
                <tr>
                  <td><strong>PAN Card</strong></td>
                  <td>Mandatory for both parties for transactions above ₹5 lakhs</td>
                </tr>
                <tr>
                  <td><strong>Sale Agreement</strong></td>
                  <td>Stamped and signed sale deed/agreement on stamp paper</td>
                </tr>
                <tr>
                  <td><strong>Title Documents</strong></td>
                  <td>Previous sale deeds, chain of title documents, encumbrance certificate</td>
                </tr>
                <tr>
                  <td><strong>Property Tax Receipts</strong></td>
                  <td>Latest property tax paid receipts from municipal corporation</td>
                </tr>
                <tr>
                  <td><strong>NOC/Clearances</strong></td>
                  <td>Society NOC, Building Completion Certificate, Occupancy Certificate</td>
                </tr>
                <tr>
                  <td><strong>Payment Proof</strong></td>
                  <td>Bank statements, cheque copies, transaction receipts showing consideration amount</td>
                </tr>
                <tr>
                  <td><strong>Photographs</strong></td>
                  <td>Passport-sized photographs of buyer and seller (2 copies each)</td>
                </tr>
                <tr>
                  <td><strong>Power of Attorney</strong></td>
                  <td>If authorized representative is signing (original + notarized copy)</td>
                </tr>
                <tr>
                  <td><strong>Encumbrance Certificate</strong></td>
                  <td>EC for past 13-30 years proving clear title without liens</td>
                </tr>
                <tr>
                  <td><strong>Approved Plan</strong></td>
                  <td>Sanctioned building plan from local authority (for constructed properties)</td>
                </tr>
              </tbody>
            </ComparisonTable>

            <Callout>
              <p><i className="fas fa-info-circle" style={{color: '#D4AF37', marginRight: '8px'}}></i> <strong>Note:</strong> Additional documents may be required based on property type, state regulations, and specific transaction circumstances.</p>
            </Callout>

            <h2 id="stamp-duty">Stamp Duty & Registration Charges</h2>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/4c07e908-ca58-44c5-92bb-1ac770adc086/F0TEajCvsT.lottie"
                width="300px"
                height="300px"
              />
            </SectionLottie>

            <p>Stamp duty and registration charges are government fees payable during property registration. These vary by state and property type:</p>

            <h3>Understanding Stamp Duty</h3>

            <p><strong>Stamp duty</strong> is a tax levied by state governments on property transactions. The rate varies from 3% to 10% of the property value depending on the state, gender of buyer, and property location.</p>

            <HighlightBox>
              <h4>Stamp Duty Rates Across Major Indian States (2024-25):</h4>
              <ul>
                <li><strong>Maharashtra:</strong> 5% for men, 4% for women (urban areas); Additional 1% metro cess in Mumbai</li>
                <li><strong>Delhi:</strong> 4% for women, 6% for men; 2% for joint ownership (women included)</li>
                <li><strong>Karnataka:</strong> 3% for women, 5% for men (Bangalore); varies in other districts</li>
                <li><strong>Tamil Nadu:</strong> 7% general rate; reduced rates for women in certain categories</li>
                <li><strong>Gujarat:</strong> 4.9% general rate; lower rates for affordable housing</li>
                <li><strong>Uttar Pradesh:</strong> 7% general; 6% for women</li>
                <li><strong>Rajasthan:</strong> 5% for properties in municipal areas; 6% outside municipal limits</li>
                <li><strong>West Bengal:</strong> 6-7% depending on property value and location</li>
                <li><strong>Telangana:</strong> 4% for women, 5% for men (Hyderabad); varies elsewhere</li>
                <li><strong>Haryana:</strong> 7% for men, 5% for women in urban areas</li>
              </ul>
            </HighlightBox>

            <h3>Registration Charges</h3>

            <p>Registration fees are typically <strong>1% of the property value</strong> (capped at ₹30,000 in most states). Some states have fixed slabs based on property value ranges.</p>

            <FeatureGrid>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-calculator"></i>
                </div>
                <h4>Stamp Duty Calculation</h4>
                <p>Calculated on higher of market value or transaction value as per state circle rates.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-credit-card"></i>
                </div>
                <h4>Payment Methods</h4>
                <p>E-stamping, physical stamp paper, online payment, or demand draft.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-female"></i>
                </div>
                <h4>Women Concession</h4>
                <p>Reduced stamp duty rates (1-2% lower) when property is in woman's name.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-home"></i>
                </div>
                <h4>Affordable Housing</h4>
                <p>Lower rates for properties under affordable housing schemes (varies by state).</p>
              </FeatureCard>
            </FeatureGrid>

            <h2 id="registration-process">Step-by-Step Property Registration Process</h2>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/bbe018c8-4581-41d6-abc5-1ce8fd8cc3c5/0qlZ2tqGl9.lottie"
                width="300px"
                height="300px"
              />
            </SectionLottie>

            <p>Follow these comprehensive steps to register your property legally and securely:</p>

            <ProcessTimeline>
              <TimelineItem>
                <TimelineMarker>
                  <i className="fas fa-search"></i>
                </TimelineMarker>
                <TimelineContent>
                  <h4>Step 1: Property Verification & Due Diligence</h4>
                  <p>Verify property title, ownership chain, encumbrance certificate, approved plans, and check for legal disputes or pending litigation. Conduct physical site verification and confirm property boundaries.</p>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineMarker>
                  <i className="fas fa-file-alt"></i>
                </TimelineMarker>
                <TimelineContent>
                  <h4>Step 2: Draft Sale Agreement/Deed</h4>
                  <p>Prepare comprehensive sale deed on stamp paper including all terms, conditions, property description, consideration amount, and rights/obligations. Get it reviewed by legal expert.</p>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineMarker>
                  <i className="fas fa-calculator"></i>
                </TimelineMarker>
                <TimelineContent>
                  <h4>Step 3: Calculate & Pay Stamp Duty</h4>
                  <p>Calculate applicable stamp duty based on state rates and property value. Pay through e-stamping, purchase stamp paper, or online payment. Keep payment receipts safely.</p>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineMarker>
                  <i className="fas fa-calendar-check"></i>
                </TimelineMarker>
                <TimelineContent>
                  <h4>Step 4: Schedule Appointment with Sub-Registrar</h4>
                  <p>Book online appointment at nearest Sub-Registrar office for document registration. Select convenient date and time slot. Some states offer online pre-verification.</p>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineMarker>
                  <i className="fas fa-users"></i>
                </TimelineMarker>
                <TimelineContent>
                  <h4>Step 5: Presence of Parties & Witnesses</h4>
                  <p>Buyer, seller, and two witnesses must be physically present at registration office with original documents and identity proofs. Authorized representatives can appear with valid Power of Attorney.</p>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineMarker>
                  <i className="fas fa-fingerprint"></i>
                </TimelineMarker>
                <TimelineContent>
                  <h4>Step 6: Biometric Verification & Photo</h4>
                  <p>All parties undergo biometric fingerprint scanning and photograph capture. Signatures are obtained on sale deed and official registers maintained by Sub-Registrar.</p>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineMarker>
                  <i className="fas fa-money-bill-wave"></i>
                </TimelineMarker>
                <TimelineContent>
                  <h4>Step 7: Pay Registration Fees</h4>
                  <p>Pay registration charges (typically 1% of property value, maximum ₹30,000). Additional charges may apply for document scanning, extra copies, and other services.</p>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineMarker>
                  <i className="fas fa-stamp"></i>
                </TimelineMarker>
                <TimelineContent>
                  <h4>Step 8: Document Verification & Registration</h4>
                  <p>Sub-Registrar verifies all documents, stamps, and signatures. Official seal and registration number are affixed on the sale deed. Document is scanned and digitally archived.</p>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineMarker>
                  <i className="fas fa-certificate"></i>
                </TimelineMarker>
                <TimelineContent>
                  <h4>Step 9: Receive Registered Documents</h4>
                  <p>Collect registered sale deed with official seal and registration receipt. Original is given to buyer; seller receives a copy. Soft copy may be available on state's registration portal.</p>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineMarker>
                  <i className="fas fa-sync"></i>
                </TimelineMarker>
                <TimelineContent>
                  <h4>Step 10: Post-Registration Formalities</h4>
                  <p>Update property records with municipal corporation, apply for property tax in buyer's name, update electricity/water connections, and obtain new encumbrance certificate reflecting recent transaction.</p>
                </TimelineContent>
              </TimelineItem>
            </ProcessTimeline>

            <h2 id="time-cost">Registration Timeline & Costs</h2>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/608bb0ee-75d0-4c06-bbc6-fffd96c00e3a/6TWHywiLM0.lottie"
                width="300px"
                height="300px"
              />
            </SectionLottie>

            <FeatureGrid>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-clock"></i>
                </div>
                <h4>Processing Time</h4>
                <p>Same-day registration at Sub-Registrar office. Document collection within 1-3 working days.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-hourglass-half"></i>
                </div>
                <h4>Time Limit</h4>
                <p>Must register within 4 months of execution. Penalty for delays beyond deadline.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-rupee-sign"></i>
                </div>
                <h4>Government Fees</h4>
                <p>Stamp duty (3-10% of value) + Registration charges (1% capped at ₹30,000).</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-user-tie"></i>
                </div>
                <h4>Professional Fees</h4>
                <p>Legal assistance, document drafting, verification services from ₹5,000 onwards.</p>
              </FeatureCard>
            </FeatureGrid>

            <h2 id="common-mistakes">Common Mistakes to Avoid During Registration</h2>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/e22c2746-b465-41f9-9f1c-b8e0dc0d5ec2/PDjV3Pgj0u.lottie"
                width="300px"
                height="300px"
              />
            </SectionLottie>

            <FeatureGrid>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-exclamation-triangle"></i>
                </div>
                <h4>Incomplete Documentation</h4>
                <p>Missing or improper documents can delay or reject registration. Ensure complete paperwork.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-search-minus"></i>
                </div>
                <h4>Skipping Due Diligence</h4>
                <p>Not verifying property title, encumbrance status, or legal disputes can lead to fraud.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-money-check-alt"></i>
                </div>
                <h4>Undervaluing Property</h4>
                <p>Showing lower transaction value to save stamp duty is illegal and attracts heavy penalties.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-calendar-times"></i>
                </div>
                <h4>Missing Deadline</h4>
                <p>Failing to register within 4 months incurs penalty (10% extra in most states).</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-ban"></i>
                </div>
                <h4>Not Checking Encumbrances</h4>
                <p>Property with existing mortgages, liens, or legal cases can't be freely sold/transferred.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-user-slash"></i>
                </div>
                <h4>Absence of Parties</h4>
                <p>Both buyer and seller must be present (or send authorized representative with PoA).</p>
              </FeatureCard>
            </FeatureGrid>

            <h2 id="benefits">Benefits of Proper Property Registration</h2>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/3c3cb7ee-7106-430f-9451-202c033965c9/drWrh1bZhB.lottie"
                width="300px"
                height="300px"
              />
            </SectionLottie>

            <FeatureGrid>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h4>Legal Ownership Proof</h4>
                <p>Registered document is conclusive proof of ownership admissible in courts.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h4>Protection from Fraud</h4>
                <p>Prevents duplicate sales, forged documents, and illegal encroachments.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-hand-holding-usd"></i>
                </div>
                <h4>Loan Eligibility</h4>
                <p>Banks require registered property documents for home loans and mortgages.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h4>Easy Resale</h4>
                <p>Registered properties have higher resale value and buyer confidence.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-piggy-bank"></i>
                </div>
                <h4>Tax Deductions</h4>
                <p>Claim income tax benefits under Section 80C, 24(b) for home loans.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-users"></i>
                </div>
                <h4>Inheritance Rights</h4>
                <p>Clear succession and smooth transfer to legal heirs without disputes.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-building"></i>
                </div>
                <h4>Municipal Benefits</h4>
                <p>Access to property tax records, utility connections, and civic amenities.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-gavel"></i>
                </div>
                <h4>Legal Remedy</h4>
                <p>Strong legal position in case of disputes, encroachments, or litigation.</p>
              </FeatureCard>
            </FeatureGrid>

            <h2 id="why-mundra">Why Choose Mundra Legal for Property Registration?</h2>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/297c24ce-8977-4a9a-97c0-2cc005016993/4KX0MA0YAd.lottie"
                width="300px"
                height="300px"
              />
            </SectionLottie>

            <FeatureGrid>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-user-graduate"></i>
                </div>
                <h4>Expert Legal Team</h4>
                <p>Experienced property lawyers and registration specialists across India.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-search"></i>
                </div>
                <h4>Complete Due Diligence</h4>
                <p>Thorough title verification, encumbrance check, and legal document scrutiny.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-file-contract"></i>
                </div>
                <h4>Document Preparation</h4>
                <p>Professional drafting of sale deed, agreements, and all required paperwork.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-calculator"></i>
                </div>
                <h4>Stamp Duty Calculation</h4>
                <p>Accurate calculation based on state rates, property type, and buyer profile.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-hands-helping"></i>
                </div>
                <h4>Registration Assistance</h4>
                <p>End-to-end support from appointment booking to document collection.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-headset"></i>
                </div>
                <h4>Post-Registration Support</h4>
                <p>Property tax transfer, utility updates, and encumbrance certificate services.</p>
              </FeatureCard>
            </FeatureGrid>

            <StatsGrid>
              <StatCard>
                <div className="stat-number">5000+</div>
                <div className="stat-label">Properties Registered</div>
              </StatCard>
              <StatCard>
                <div className="stat-number">Same Day</div>
                <div className="stat-label">Registration Service</div>
              </StatCard>
              <StatCard>
                <div className="stat-number">100%</div>
                <div className="stat-label">Legal Compliance</div>
              </StatCard>
              <StatCard>
                <div className="stat-number">24/7</div>
                <div className="stat-label">Expert Support</div>
              </StatCard>
            </StatsGrid>

            <h2 id="faqs">Frequently Asked Questions About Property Registration</h2>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/8d9a8d8a-8b77-4c07-ab09-a6001c90fd5e/EFZQyaOAzd.lottie"
                width="300px"
                height="300px"
              />
            </SectionLottie>

            <HighlightBox>
              <h4>Q1: Is property registration mandatory in India?</h4>
              <p>Yes, under the <strong>Registration Act, 1908</strong>, all property transactions involving sale, gift, lease (&gt;11 months), mortgage, or exchange must be compulsorily registered.</p>
            </HighlightBox>

            <HighlightBox>
              <h4>Q2: What is the time limit for property registration?</h4>
              <p>Property must be registered within <strong>4 months from the date of execution</strong> of the sale deed. Delay attracts penalty of 10% additional stamp duty in most states.</p>
            </HighlightBox>

            <HighlightBox>
              <h4>Q3: Can property be registered online?</h4>
              <p>Many states offer <strong>partial online registration</strong> where you can book appointments, upload documents, and pay fees online. However, physical presence at Sub-Registrar office is still mandatory for biometric verification and signatures.</p>
            </HighlightBox>

            <HighlightBox>
              <h4>Q4: What happens if property is not registered?</h4>
              <p>Unregistered property documents have <strong>no legal validity</strong> in courts. You cannot claim ownership rights, cannot get loans, cannot sell the property, and risk losing property to fraud or illegal claims.</p>
            </HighlightBox>

            <HighlightBox>
              <h4>Q5: How much stamp duty is charged for property registration?</h4>
              <p>Stamp duty varies by state, ranging from <strong>3% to 10%</strong> of property value. Women buyers often get 1-2% concession. Check your state's circle rate and applicable stamp duty rates.</p>
            </HighlightBox>

            <HighlightBox>
              <h4>Q6: Can someone else register property on my behalf?</h4>
              <p>Yes, you can authorize a representative through a <strong>notarized Power of Attorney (PoA)</strong>. The PoA holder can sign documents and complete registration on your behalf at the Sub-Registrar office.</p>
            </HighlightBox>

            <HighlightBox>
              <h4>Q7: What documents are needed for property registration?</h4>
              <p>Key documents include: Identity & address proof (both parties), PAN cards, sale deed on stamp paper, title documents, encumbrance certificate, property tax receipts, NOCs, payment proofs, and photographs.</p>
            </HighlightBox>

            <HighlightBox>
              <h4>Q8: How long does the registration process take?</h4>
              <p>The actual registration at Sub-Registrar office takes <strong>1-3 hours</strong>. You receive registered documents the same day or within 1-3 working days depending on the state.</p>
            </HighlightBox>

            <Callout style={{background: 'linear-gradient(135deg, #1C2951 0%, #D4AF37 100%)', border: 'none', color: 'white', marginTop: '48px'}}>
              <h3 style={{color: 'white', marginBottom: '16px'}}><i className="fas fa-phone-alt" style={{marginRight: '8px'}}></i> Register Your Property with Confidence</h3>
              <p style={{color: 'white', fontSize: '1.1rem', marginBottom: '0'}}>Get expert assistance for hassle-free property registration. Complete legal verification, document preparation, stamp duty calculation, and registration support. Contact Mundra Legal today!</p>
            </Callout>
          </PropertyMain>

          <PropertySidebar>
            <SidebarScrollWrapper>
              <SidebarForm />
            </SidebarScrollWrapper>
          </PropertySidebar>
        </PropertyContainer>
      </PropertySection>

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

export default PropertyRegistry;
