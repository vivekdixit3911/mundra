import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import SidebarForm from "../../components/SidebarForm";
import LottieAnimation from "../../components/LottieAnimation";
import styled from "styled-components";

const PsaraSection = styled.section`
  padding: 60px 24px;
  background: linear-gradient(180deg, #f8f9fb 0%, #ffffff 50%, #f8f9fb 100%);
  font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: #2d3748;

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
    font-weight: 700;
  }
`;

const PsaraContainer = styled.div`
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

const PsaraMain = styled.article`
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

  .psara-byline {
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

  ul {
    margin-top: 12px;
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

const PsaraSidebar = styled.aside`
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

const PsaraLicense = () => {
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
        title="Private Security Agency Licensing in India"
        subtitle="Understanding PSARA: Your Gateway to Legal Security Operations"
        breadcrumb="PSARA License"
      />
      
      <PsaraSection>
        <PsaraContainer>
          <PsaraMain>
            <h1>Private Security Agency Licensing in India</h1>
            <p className="psara-byline">Understanding PSARA: Your Gateway to Legal Security Operations</p>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/3c3cb7ee-7106-430f-9451-202c033965c9/drWrh1bZhB.lottie"
                width="300px"
                height="300px"
              />
            </SectionLottie>

            <p>The <strong>Private Security Agencies Regulation Act (PSARA), 2005</strong> is a comprehensive legislation aimed at regulating private security services across India. Its core objective is to ensure professional, accountable, and legally compliant security agencies operate within the country.</p>

            <p>A PSARA license is mandatory for any private security agency intending to provide services like armed/unarmed guards, event security, surveillance, or residential/commercial security. Operating without a license can lead to heavy penalties, legal action, and closure of business operations.</p>

            <p>By obtaining a PSARA license, agencies ensure they are aligned with Indian security standards, provide trained and verified personnel, and maintain professional credibility with clients and regulatory authorities.</p>

            <Callout>
              <p><i className="fas fa-shield-alt" style={{color: '#D4AF37', marginRight: '8px'}}></i> <strong>Legal Mandate:</strong> PSARA licensing is not optional—it's a legal requirement for all private security service providers in India.</p>
            </Callout>

            <h2 id="who-requires">Who Requires a Private Security Agency License?</h2>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/e22c2746-b465-41f9-9f1c-b8e0dc0d5ec2/PDjV3Pgj0u.lottie"
                width="300px"
                height="300px"
              />
            </SectionLottie>

            <p>Private security licenses are not just formalities—they are legal necessities for anyone offering private security services. The following entities are required to obtain a PSARA license:</p>

            <FeatureGrid>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-user-shield"></i>
                </div>
                <h4>Manned Guarding Services</h4>
                <p>Private security agencies offering manned guarding services.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-user-lock"></i>
                </div>
                <h4>Armed/Unarmed Guards</h4>
                <p>Companies providing armed or unarmed security guards.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-building"></i>
                </div>
                <h4>Event & Corporate Security</h4>
                <p>Firms engaged in event management security, corporate office protection, or residential security solutions.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-truck"></i>
                </div>
                <h4>Escort & Transport Security</h4>
                <p>Agencies offering escort services, transport security, and cash-in-transit services.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-user-tie"></i>
                </div>
                <h4>Security Consultancy</h4>
                <p>Individuals or organizations supplying security consultancy services that involve personnel deployment.</p>
              </FeatureCard>
            </FeatureGrid>

            <Callout>
              <p><i className="fas fa-exclamation-triangle" style={{color: '#D4AF37', marginRight: '8px'}}></i> <strong>Note:</strong> Even if an agency is small or unregistered under other acts, providing security services without a PSARA license is illegal.</p>
            </Callout>

            <h2 id="why-crucial">Why a PSARA License is Crucial for Your Security Agency</h2>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/bbe018c8-4581-41d6-abc5-1ce8fd8cc3c5/0qlZ2tqGl9.lottie"
                width="300px"
                height="300px"
              />
            </SectionLottie>

            <p>Obtaining a PSARA license offers multiple benefits, ensuring legal compliance and business growth:</p>

            <FeatureGrid>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-certificate"></i>
                </div>
                <h4>Legal Recognition</h4>
                <p>Establishes your agency as a legally compliant entity in India.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-handshake"></i>
                </div>
                <h4>Client Confidence</h4>
                <p>Clients prefer licensed agencies for professional reliability and verified personnel.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-file-shield"></i>
                </div>
                <h4>Insurance Eligibility</h4>
                <p>Licensed agencies can easily obtain liability and employee insurance.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h4>Training Standardization</h4>
                <p>Security guards receive government-recognized training, improving service quality.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-landmark"></i>
                </div>
                <h4>Government Contracts</h4>
                <p>Only licensed agencies can bid for government tenders requiring certified security services.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-users"></i>
                </div>
                <h4>Employee Welfare</h4>
                <p>Ensures employees are protected under labor laws and eligible for statutory benefits like PF, ESI, etc.</p>
              </FeatureCard>
            </FeatureGrid>

            <h2 id="eligibility">Eligibility Criteria for Directors and Security Personnel</h2>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/c195821a-b69d-4b7d-b98d-7ed787ceb0f0/ulNalBOVgu.lottie"
                width="300px"
                height="300px"
              />
            </SectionLottie>

            <h3>Requirements for Principal Officers / Directors</h3>

            <p>To become a director or principal officer of a PSARA-licensed agency:</p>

            <HighlightBox>
              <ul>
                <li>Must be <strong>Indian citizens</strong>.</li>
                <li>Should be at least <strong>18 years old</strong>.</li>
                <li>Must not have any <strong>criminal convictions</strong>.</li>
                <li>Should have sufficient <strong>financial resources</strong> to run the agency.</li>
                <li>Must be capable of overseeing operations, ensuring compliance with PSARA regulations.</li>
              </ul>
            </HighlightBox>

            <h3>Requirements for Security Guards</h3>

            <p>Security personnel employed under a licensed agency must:</p>

            <HighlightBox>
              <ul>
                <li>Be <strong>Indian citizens</strong> aged <strong>18-65 years</strong>.</li>
                <li>Meet <strong>physical and medical standards</strong> set by PSARA rules.</li>
                <li>Have completed <strong>mandatory training</strong> from recognized institutes.</li>
                <li>Maintain a <strong>clean criminal record</strong> and character verification.</li>
                <li>Not have been <strong>dismissed from government service</strong> previously.</li>
              </ul>
            </HighlightBox>

            <h2 id="business-structures">Eligible Business Structures for Security Agencies</h2>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/608bb0ee-75d0-4c06-bbc6-fffd96c00e3a/6TWHywiLM0.lottie"
                width="300px"
                height="300px"
              />
            </SectionLottie>

            <p>PSARA allows different types of entities to apply:</p>

            <FeatureGrid>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-user"></i>
                </div>
                <h4>Sole Proprietorship</h4>
                <p>Individual ownership with full control and liability</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-user-friends"></i>
                </div>
                <h4>Partnership Firms</h4>
                <p>Two or more partners sharing profits and responsibilities</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-building"></i>
                </div>
                <h4>Private Limited Company</h4>
                <p>Corporate structure with limited liability protection</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-user-circle"></i>
                </div>
                <h4>One Person Company (OPC)</h4>
                <p>Single person ownership with corporate benefits</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-handshake"></i>
                </div>
                <h4>Limited Liability Partnership (LLP)</h4>
                <p>Partnership with limited liability for partners</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-users-cog"></i>
                </div>
                <h4>Association of Persons (AOP)</h4>
                <p>Group of individuals coming together for business</p>
              </FeatureCard>
            </FeatureGrid>

            <h2 id="documents">Essential Documents for PSARA License Application</h2>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/a9d1932b-a76e-4018-ac59-2cea2224c812/g6AAJ5F0wu.lottie"
                width="300px"
                height="300px"
              />
            </SectionLottie>

            <p>To apply, agencies must submit a robust set of documents to ensure smooth verification:</p>

            <HighlightBox>
              <h4>Mandatory Documents:</h4>
              <ul>
                <li><strong>PAN Card</strong> of the company or individual applicant.</li>
                <li><strong>Proof of registered office</strong> (rental agreement or ownership documents).</li>
                <li><strong>GST registration certificate</strong>.</li>
                <li><strong>Income Tax Returns</strong> of directors/partners.</li>
                <li><strong>Registration under the Contract Labour Act, 1970</strong>.</li>
                <li><strong>Employees' State Insurance (ESI)</strong> registration.</li>
                <li><strong>Shops & Establishment Act</strong> registration (state-specific).</li>
                <li><strong>Certificate of incorporation</strong> (for companies).</li>
                <li><strong>Provident Fund (PF)</strong> registration documents.</li>
                <li><strong>Affidavit</strong> declaring clean criminal record on non-judicial stamp paper.</li>
                <li><strong>Passport-sized photographs</strong> of directors and key personnel.</li>
              </ul>

              <h4>Optional but Recommended:</h4>
              <ul>
                <li>Security guard training certificates.</li>
                <li>Board resolution approving agency registration.</li>
              </ul>
            </HighlightBox>

            <h2 id="state-guidelines">State-Specific PSARA Guidelines Across India</h2>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/297c24ce-8977-4a9a-97c0-2cc005016993/4KX0MA0YAd.lottie"
                width="300px"
                height="300px"
              />
            </SectionLottie>

            <p>Each state in India can have additional requirements or modifications to the central PSARA Act:</p>

            <ComparisonTable>
              <thead>
                <tr>
                  <th>State/Region</th>
                  <th>Special Requirements</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Delhi & NCR</strong></td>
                  <td>Police verification is stricter, requiring local and central verification of directors.</td>
                </tr>
                <tr>
                  <td><strong>Maharashtra</strong></td>
                  <td>Must undergo state-level security training institute approvals.</td>
                </tr>
                <tr>
                  <td><strong>Karnataka</strong></td>
                  <td>Fire license mandatory for all armed security agencies.</td>
                </tr>
                <tr>
                  <td><strong>Bihar</strong></td>
                  <td>Police verification of all directors and security personnel is strictly enforced.</td>
                </tr>
                <tr>
                  <td><strong>Tamil Nadu & Kerala</strong></td>
                  <td>Additional compliance with ESI and PF registration before license approval.</td>
                </tr>
              </tbody>
            </ComparisonTable>

            <p>Mundra Legal ensures state-wise compliance, streamlining the application process for clients across India.</p>

            <h2 id="registration-guide">Step-by-Step Guide to Register Your Security Agency Under PSARA</h2>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/aa67c09e-32f8-473b-9255-419e321b484b/9BXu5Bhfyw.lottie"
                width="300px"
                height="300px"
              />
            </SectionLottie>

            <ProcessTimeline>
              <TimelineItem>
                <TimelineMarker>
                  <i className="fas fa-comments"></i>
                </TimelineMarker>
                <TimelineContent>
                  <h4>Step 1: Expert Consultation & Document Preparation</h4>
                  <p>Consult our team of legal experts to:</p>
                  <ul>
                    <li>Compile all required documents.</li>
                    <li>Verify eligibility of directors and employees.</li>
                    <li>Provide guidance on legal and compliance standards.</li>
                  </ul>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineMarker>
                  <i className="fas fa-file-contract"></i>
                </TimelineMarker>
                <TimelineContent>
                  <h4>Step 2: Security Training Institute MOU</h4>
                  <p>Sign a Memorandum of Understanding (MOU) with a recognized training institute. Ensure security guards receive mandatory PSARA-compliant training.</p>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineMarker>
                  <i className="fas fa-search"></i>
                </TimelineMarker>
                <TimelineContent>
                  <h4>Step 3: Police Verification & Background Checks</h4>
                  <ul>
                    <li>Police verification for directors and key personnel.</li>
                    <li>Character verification for all security personnel.</li>
                    <li>Check for criminal history and past employment issues.</li>
                  </ul>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineMarker>
                  <i className="fas fa-file-alt"></i>
                </TimelineMarker>
                <TimelineContent>
                  <h4>Step 4: Application Filing & Submission</h4>
                  <ul>
                    <li>Fill out Form I and other required forms.</li>
                    <li>Submit documents to the Controlling Authority in the respective state.</li>
                    <li>Track application progress online.</li>
                  </ul>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineMarker>
                  <i className="fas fa-building"></i>
                </TimelineMarker>
                <TimelineContent>
                  <h4>Step 5: State Verification & Office Inspection</h4>
                  <ul>
                    <li>Physical verification of the registered office by state authorities.</li>
                    <li>Inspect training facilities and security systems.</li>
                  </ul>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineMarker>
                  <i className="fas fa-check-circle"></i>
                </TimelineMarker>
                <TimelineContent>
                  <h4>Step 6: PSARA License Approval & Issuance</h4>
                  <p>License issued after all checks are completed. <strong>Validity: 5 years</strong>, with mandatory renewal before expiry.</p>
                </TimelineContent>
              </TimelineItem>
            </ProcessTimeline>

            <h2 id="additional-requirements">Additional Regulatory Requirements for Security Agencies</h2>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/4c07e908-ca58-44c5-92bb-1ac770adc086/F0TEajCvsT.lottie"
                width="300px"
                height="300px"
              />
            </SectionLottie>

            <p>Apart from PSARA, agencies may need:</p>

            <FeatureGrid>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-building"></i>
                </div>
                <h4>Company Registration</h4>
                <p>Pvt Ltd, LLP, OPC, or Partnership registration</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-file-invoice"></i>
                </div>
                <h4>GST Registration</h4>
                <p>Goods and Services Tax registration for tax compliance</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-store"></i>
                </div>
                <h4>Shop & Establishment</h4>
                <p>License as per state Shop & Establishment Act</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-user-check"></i>
                </div>
                <h4>Police Clearance</h4>
                <p>PCC for directors and key management personnel</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-fire"></i>
                </div>
                <h4>Fire License & NOC</h4>
                <p>Fire safety clearance for office premises</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-rupee-sign"></i>
                </div>
                <h4>Professional Tax</h4>
                <p>State-specific professional tax registration</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-wallet"></i>
                </div>
                <h4>EPF & ESI</h4>
                <p>Employee Provident Fund and State Insurance registration</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-gun"></i>
                </div>
                <h4>Gun License</h4>
                <p>If armed security services are provided</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-award"></i>
                </div>
                <h4>ISO Certification</h4>
                <p>For professional credibility and quality assurance</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-leaf"></i>
                </div>
                <h4>Pollution Control</h4>
                <p>PCC if applicable to business operations</p>
              </FeatureCard>
            </FeatureGrid>

            <h2 id="mundra-advantages">Advantages of Registering Through Mundra Legal</h2>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/c195821a-b69d-4b7d-b98d-7ed787ceb0f0/ulNalBOVgu.lottie"
                width="300px"
                height="300px"
              />
            </SectionLottie>

            <FeatureGrid>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-user-graduate"></i>
                </div>
                <h4>Expert Guidance</h4>
                <p>PSARA experts simplify the application process with years of experience.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-map-marked-alt"></i>
                </div>
                <h4>State-Wise Compliance</h4>
                <p>All state-specific requirements handled professionally.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-clock"></i>
                </div>
                <h4>Time-Saving</h4>
                <p>We manage documentation, verifications, and follow-ups efficiently.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-check-double"></i>
                </div>
                <h4>Assured Accuracy</h4>
                <p>Reduce risk of rejection with thorough pre-submission checks.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-life-ring"></i>
                </div>
                <h4>End-to-End Support</h4>
                <p>Training, verification, license application, and renewal assistance.</p>
              </FeatureCard>
            </FeatureGrid>

            <StatsGrid>
              <StatCard>
                <div className="stat-number">60-90</div>
                <div className="stat-label">Days Processing</div>
              </StatCard>
              <StatCard>
                <div className="stat-number">5 Years</div>
                <div className="stat-label">License Validity</div>
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

            <h2 id="faqs">Frequently Asked Questions About PSARA License in India</h2>

            <SectionLottie>
              <LottieAnimation
                src="https://lottie.host/8d9a8d8a-8b77-4c07-ab09-a6001c90fd5e/EFZQyaOAzd.lottie"
                width="300px"
                height="300px"
              />
            </SectionLottie>

            <HighlightBox>
              <h4>Q1: How long does it take to get a PSARA license?</h4>
              <p>Usually <strong>60–90 days</strong>, depending on state verification and police checks.</p>
            </HighlightBox>

            <HighlightBox>
              <h4>Q2: Can a PSARA license be renewed?</h4>
              <p>Yes, before expiry; typically <strong>five-year validity</strong>.</p>
            </HighlightBox>

            <HighlightBox>
              <h4>Q3: What happens if a security agency operates without a PSARA license?</h4>
              <p>Heavy fines, legal action, and potential <strong>business closure</strong>.</p>
            </HighlightBox>

            <HighlightBox>
              <h4>Q4: Is training mandatory for security guards?</h4>
              <p>Yes, all personnel must complete <strong>PSARA-approved training</strong>.</p>
            </HighlightBox>

            <HighlightBox>
              <h4>Q5: Are there state-specific variations?</h4>
              <p>Yes, police verification, office inspection, and additional licenses vary by state.</p>
            </HighlightBox>

            <HighlightBox>
              <h4>Q6: Who can apply for a PSARA license?</h4>
              <p>Any Indian citizen or registered entity providing private security services, including <strong>Pvt Ltd, LLP, OPC, partnership, and AOP</strong>.</p>
            </HighlightBox>

            <Callout style={{background: 'linear-gradient(135deg, #1C2951 0%, #D4AF37 100%)', border: 'none', color: 'white', marginTop: '48px'}}>
              <h3 style={{color: 'white', marginBottom: '16px'}}><i className="fas fa-phone-alt" style={{marginRight: '8px'}}></i> Get Your PSARA License Today</h3>
              <p style={{color: 'white', fontSize: '1.1rem', marginBottom: '0'}}>Start your private security agency with complete legal compliance. Contact Mundra Legal for expert assistance with PSARA license registration, documentation, and state-wise compliance.</p>
            </Callout>
          </PsaraMain>

          <PsaraSidebar>
            <SidebarScrollWrapper>
              <SidebarForm />
            </SidebarScrollWrapper>
          </PsaraSidebar>
        </PsaraContainer>
      </PsaraSection>

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

export default PsaraLicense;
