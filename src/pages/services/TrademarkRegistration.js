import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import SidebarForm from "../../components/SidebarForm";
import LottieAnimation from "../../components/LottieAnimation";
import {
  TrademarkSection,
  TrademarkContainer,
  TrademarkMain,
  Callout,
  FeatureGrid,
  FeatureCard,
  ComparisonTable,
  HighlightBox,
  SectionLottie,
  TrademarkSidebar,
  SidebarScrollWrapper,
  ContentSection,
  ContentGrid,
  ContentCard,
  TrademarkTypesGrid,
  TrademarkTypeCard,
  ProcessGrid,
  ProcessCard,
  WhoCanApplyList,
  WhoCanApplyItem,
  SymbolCard,
  FilingOptionsGrid,
  FilingOptionCard,
  FilingTypeCard,
  CompanyTypesTable,
  DocumentsTable,
  BenefitCard,
  TrademarkClassesSection,
  TrademarkClassesContent,
  ClassesGrid,
  ClassesCard,
  ClassItem,
  PostRegistrationGrid,
  PostRegistrationCard,
  WhyChooseSection,
  WhyChooseContainer,
  WhyChooseText,
  WhyChooseVisual,
  FAQSection,
  FAQContainer,
  FAQList,
  FAQCard
} from "./TrademarkRegistration.styles.js";

const TrademarkRegistration = () => {
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
        title="Trademark Registration in India"
        subtitle="Trademark registration in India secures exclusive rights to use a mark for the goods and services it is registered for. It helps prevent competitors from using confusingly similar signs and strengthens your brand value."
        breadcrumb="Trademark Registration"
      />
      
      <TrademarkSection>
        <TrademarkContainer>
          <TrademarkMain>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
              <div style={{ flex: 1 }}>
                <h1>Trademark Registration in India</h1>
                <p className="trademark-byline">Trademark registration in India secures exclusive rights to use a mark for the goods and services it is registered for. It helps prevent competitors from using confusingly similar signs and strengthens your brand value.</p>
              </div>
              <div style={{ flex: '0 0 200px' }}>
                <LottieAnimation
                  src="/assets/Drafts/Business.json"
                  width="200px"
                  height="200px"
                />
              </div>
            </div>

            <ContentGrid>
              <ContentCard>
                <h3>Who can apply?</h3>
                <p>Individuals, startups, companies, and organisations — anyone using or proposing to use a mark in India.</p>
              </ContentCard>
              <ContentCard>
                <h3>What is protected?</h3>
                <p>Names, logos, monograms, wordmarks, slogans, and combinations — protected as long as they are distinctive.</p>
              </ContentCard>
              <ContentCard>
                <h3>Registration term</h3>
                <p>Initial 10-year term from the date of application (or registration) and renewable indefinitely in 10-year blocks.</p>
              </ContentCard>
            </ContentGrid>

            <h2>What is a Trademark?</h2>
            <p>A trademark is a sign capable of distinguishing the goods or services of one enterprise from those of other enterprises. It may include words, logos, symbols, letters, numerals, shape of goods, packaging, and combination of colors. The essential function of a trademark is to identify the commercial origin of products and services.</p>

            <ul>
              <li><strong>Distinctiveness:</strong> Only distinctive marks are registrable; purely descriptive or generic marks are typically refused unless they have acquired distinctiveness through use.</li>
              <li><strong>Exclusive right:</strong> Registration gives the proprietor the exclusive right to use the mark in relation to the goods/services listed in the registration.</li>
              <li><strong>Enforcement:</strong> Registered owners can stop unauthorized use and seek remedies including injunctions and damages.</li>
            </ul>

            <h2>Trademark Act of 1999</h2>
            <p>The Trade Marks Act, 1999 is the principal statute governing trademarks in India. It modernised trademark law and introduced clearer procedures for registration, opposition, rectification, and remedies.</p>

            <h3>Key highlights</h3>
            <ul>
              <li>Defines the scope of registrable trademarks and classes of goods/services (based on the Nice Classification).</li>
              <li>Provides procedure for application, examination, publication, opposition, and registration.</li>
              <li>Introduces remedies for infringement, passing off, and provisions for penalties.</li>
              <li>Allows assignment, licensing, and recordal of transactions affecting trademarks.</li>
            </ul>

            <p>Mundra Legal Consultants can help with every step under the Act — from selecting a strong mark and clearance searches to filing, prosecution, and enforcement.</p>

            <h2>Why Should You Register Trademark?</h2>
            <p>Registering a trademark is a strategic business decision that delivers legal protection and commercial benefits:</p>
            <ul>
              <li><strong>Exclusive rights:</strong> Prevents others from using confusingly similar marks for related goods/services.</li>
              <li><strong>Brand value:</strong> Registered marks become valuable intangible assets and increase goodwill.</li>
              <li><strong>Legal remedy:</strong> Easier enforcement against infringers and stronger position in disputes.</li>
              <li><strong>Nationwide protection:</strong> A registered mark in India is protected across the country.</li>
              <li><strong>Licensing & monetization:</strong> Enables licensing, franchising and sale of brand assets.</li>
            </ul>

            <p>If you want, we can run a complimentary clearance search and advise on registrability and suitable classes to maximise protection.</p>

            <SectionLottie>
              <LottieAnimation
                src="/assets/Drafts/Business%20analytics%20animation.json"
                width="350px"
                height="300px"
              />
            </SectionLottie>

            <h2>Understanding Trademark Registration</h2>
            <p>Trademark registration is the process of securing exclusive legal rights to your brand name, logo, or symbol. In India, it is governed by the Trade Marks Act, 1999, which allows you to protect and exclusively use your intellectual property in the marketplace.</p>

            <h3>The Application Process</h3>
            <p>The trademark application process involves filing Form TM-A with the Trademark Office and selecting the appropriate class for your goods or services. This classification ensures that your brand receives the correct legal protection. The process includes trademark search, application filing, examination, publication in the Trademark Journal, and registration.</p>

            <h3>After Registration</h3>
            <p>Once registered, you gain the right to use the ® symbol, signifying that your trademark is officially recognized. A registered trademark is valid for 10 years and can be renewed indefinitely. This provides long-term protection and exclusive rights to use your brand identity.</p>

            <Callout>
              <p><strong>How We Help You</strong></p>
              <p>At Mundra & Associates, we simplify the online trademark registration process by offering expert guidance through trademark searches, addressing objections or oppositions, and managing renewals. Our experienced trademark attorneys help you secure your trademark certificate and safeguard your intellectual property, building a strong legal foundation for your brand's identity.</p>
            </Callout>

            <h2>Types of Trademarks in India</h2>
            <p>Trademarks are categorized into different types, each dedicated to distinguishing goods and services. Here's a breakdown of the different types of trademarks registered in India:</p>

            <TrademarkTypesGrid>
              <TrademarkTypeCard>
                <div style={{marginBottom: '1rem'}}>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M8 32c0-8 8-16 16-16s16 8 16 16" stroke="#1C2951" strokeWidth="2"/>
                    <path d="M16 32c0-4 4-8 8-8s8 4 8 8" stroke="#D4AF37" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Product Mark</h3>
                <p>Identifies and distinguishes goods rather than services. This includes brand names, logos, or symbols.<br/><span style={{color: '#64748b', fontSize: '0.95rem'}}>The best example is 'Nestle.'</span></p>
              </TrademarkTypeCard>
              <TrademarkTypeCard>
                <div style={{marginBottom: '1rem'}}>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="20" fill="#D4AF37" opacity="0.12"/>
                    <path d="M24 8a16 16 0 1 1 0 32" stroke="#1C2951" strokeWidth="2"/>
                    <path d="M24 24l12-8" stroke="#D4AF37" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Service Mark</h3>
                <p>These marks outline services provided by a company. Brand names or logos identifying a service are called service marks.<br/><span style={{color: '#64748b', fontSize: '0.95rem'}}>For example 'United Airlines', 'Fly the Friendly Skies', the logo of a world map.</span></p>
              </TrademarkTypeCard>
              <TrademarkTypeCard>
                <div style={{marginBottom: '1rem'}}>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="8" y="12" width="32" height="24" rx="6" fill="#D4AF37" opacity="0.12"/>
                    <path d="M16 20h16M16 28h16" stroke="#1C2951" strokeWidth="2"/>
                    <circle cx="24" cy="24" r="4" fill="#D4AF37"/>
                  </svg>
                </div>
                <h3>Certification Mark</h3>
                <p>Indicates that a product or service meets specific standards.<br/><span style={{color: '#64748b', fontSize: '0.95rem'}}>Examples: ISI (Indian Standard Institute) mark, FSSAI mark.</span></p>
              </TrademarkTypeCard>
              <TrademarkTypeCard>
                <div style={{marginBottom: '1rem'}}>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="10" y="18" width="28" height="12" rx="6" fill="#D4AF37" opacity="0.12"/>
                    <text x="24" y="28" textAnchor="middle" fontSize="14" fill="#1C2951" fontFamily="Inter,Arial,sans-serif">CII</text>
                  </svg>
                </div>
                <h3>Collective Mark</h3>
                <p>Used by a group or association to identify goods and services from its members.</p>
              </TrademarkTypeCard>
              <TrademarkTypeCard>
                <div style={{marginBottom: '1rem'}}>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="18" y="10" width="12" height="28" rx="6" fill="#D4AF37" opacity="0.12"/>
                    <rect x="20" y="14" width="8" height="20" rx="4" fill="#1C2951"/>
                  </svg>
                </div>
                <h3>Shape Mark</h3>
                <p>Protects the distinctive shape of a product or its packaging.</p>
              </TrademarkTypeCard>
              <TrademarkTypeCard>
                <div style={{marginBottom: '1rem'}}>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="10" y="10" width="28" height="28" rx="8" fill="#D4AF37" opacity="0.12"/>
                    <path d="M18 18h12M18 24h12M18 30h12" stroke="#1C2951" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Pattern Mark</h3>
                <p>Protects distinctive patterns or designs used on products or packaging.</p>
              </TrademarkTypeCard>
            </TrademarkTypesGrid>

            <SectionLottie>
              <LottieAnimation
                src="/assets/Drafts/Business%20team.json"
                width="350px"
                height="300px"
              />
            </SectionLottie>

            <h2>How To Register Trademark In India Online?</h2>
            <p>Registering a trademark online in India is a straightforward process when you have expert guidance. Here's a friendly, step-by-step guide to help you secure your brand's identity and rights.</p>

            <ProcessGrid>
              <ProcessCard>
                <div style={{marginBottom: '0.7rem'}}>
                  <LottieAnimation
                    src="/assets/Drafts/light%20bulb.json"
                    width="60px"
                    height="60px"
                  />
                </div>
                <h3>Step 1: Trademark Search</h3>
                <p>Check if your mark is unique and not already registered. Get help choosing the right trademark class for your goods/services.</p>
              </ProcessCard>
              <ProcessCard>
                <div style={{marginBottom: '0.7rem'}}><i className="fas fa-palette" style={{fontSize: '2rem', color: '#D4AF37'}}></i></div>
                <h3>Step 2: Vienna Codification Check</h3>
                <p>If your mark has a logo or visual element, it's classified for easier searching and registration.</p>
              </ProcessCard>
              <ProcessCard>
                <div style={{marginBottom: '0.7rem'}}>
                  <LottieAnimation
                    src="/assets/Drafts/registration.json"
                    width="60px"
                    height="60px"
                  />
                </div>
                <h3>Step 3: Filing the Application</h3>
                <p>File Form TM-A with the Trademark Registrar. Our IP lawyers make sure your application is complete and correct.</p>
              </ProcessCard>
              <ProcessCard>
                <div style={{marginBottom: '0.7rem'}}><i className="fas fa-check-circle" style={{fontSize: '2rem', color: '#D4AF37'}}></i></div>
                <h3>Step 4: Formality Check</h3>
                <p>Registrar checks your application for errors. If needed, corrections are made before moving forward.</p>
              </ProcessCard>
              <ProcessCard>
                <div style={{marginBottom: '0.7rem'}}><i className="fas fa-user-check" style={{fontSize: '2rem', color: '#D4AF37'}}></i></div>
                <h3>Step 5: Trademark Examination</h3>
                <p>A trademark officer reviews your application. If there are objections, our experts help you respond and resolve them.</p>
              </ProcessCard>
              <ProcessCard>
                <div style={{marginBottom: '0.7rem'}}><i className="fas fa-gavel" style={{fontSize: '2rem', color: '#D4AF37'}}></i></div>
                <h3>Step 6: Trademark Hearings</h3>
                <p>If objections persist, hearings may be required. Our legal team helps you prepare and represent your case.</p>
              </ProcessCard>
              <ProcessCard>
                <div style={{marginBottom: '0.7rem'}}><i className="fas fa-book-open" style={{fontSize: '2rem', color: '#D4AF37'}}></i></div>
                <h3>Step 7: Publication in Journal</h3>
                <p>Once approved, your trademark is published for public review. If no opposition, it moves to final registration.</p>
              </ProcessCard>
              <ProcessCard>
                <div style={{marginBottom: '0.7rem'}}><i className="fas fa-users" style={{fontSize: '2rem', color: '#D4AF37'}}></i></div>
                <h3>Step 8: Opposition Proceedings</h3>
                <p>If someone opposes, legal proceedings begin. Our team helps you respond and resolve opposition matters.</p>
              </ProcessCard>
              <ProcessCard>
                <div style={{marginBottom: '0.7rem'}}>
                  <LottieAnimation
                    src="/assets/Drafts/Business%20team.json"
                    width="60px"
                    height="60px"
                  />
                </div>
                <h3>Step 9: Registration Certificate</h3>
                <p>After all stages, you receive your Trademark Registration Certificate. Valid for 10 years, renewable indefinitely.</p>
              </ProcessCard>
            </ProcessGrid>

            <h3>Post-Registration & Renewal</h3>
            <ul>
              <li>Renew your trademark every 10 years using Form TM-R. Late renewal and restoration fees apply if missed.</li>
              <li>Amendments, assignments, or transfers are done via Form TM-P.</li>
              <li>Regularly check for potential infringements to protect your rights.</li>
            </ul>

            <h3>Rectification & Cancellation</h3>
            <ul>
              <li>Rectification: Fix mistakes or omissions in the trademark register using Form TM-26.</li>
              <li>Cancellation: Remove a trademark from the register if there are valid grounds.</li>
            </ul>

            <h3>Trademark Infringement & Legal Remedies</h3>
            <ul>
              <li>Trademark infringement occurs when someone uses your mark without permission, causing confusion.</li>
              <li>Legal remedies include injunctions, damages, and recovery of profits. Courts can order infringers to stop and pay compensation.</li>
            </ul>

            <SectionLottie>
              <LottieAnimation
                src="/assets/Drafts/registration.json"
                width="350px"
                height="300px"
              />
            </SectionLottie>

            <h2>Who can apply for a Trademark Registration Online?</h2>
            <p>The person or entity listed as the applicant in the registration form will be considered a trademark owner. The following entities can apply for trademark registration online:</p>

            <WhoCanApplyList>
              <WhoCanApplyItem>
                <svg width="32" height="32" viewBox="0 0 32 32">
                  <circle cx="16" cy="16" r="14" fill="#D4AF37" opacity="0.15"/>
                  <path d="M16 10a4 4 0 1 1 0 8a4 4 0 0 1 0-8zm0 10c-4 0-6 2-6 3v1h12v-1c0-1-2-3-6-3z" fill="#1C2951"/>
                </svg>
                <span>Individuals</span>
              </WhoCanApplyItem>
              <WhoCanApplyItem>
                <svg width="32" height="32" viewBox="0 0 32 32">
                  <rect x="6" y="10" width="20" height="12" rx="6" fill="#D4AF37" opacity="0.15"/>
                  <rect x="10" y="14" width="12" height="4" rx="2" fill="#1C2951"/>
                </svg>
                <span>Joint owners of a company</span>
              </WhoCanApplyItem>
              <WhoCanApplyItem>
                <svg width="32" height="32" viewBox="0 0 32 32">
                  <rect x="8" y="8" width="16" height="16" rx="4" fill="#D4AF37" opacity="0.15"/>
                  <path d="M16 12v8M12 16h8" stroke="#1C2951" strokeWidth="2"/>
                </svg>
                <span>Proprietorship firms</span>
              </WhoCanApplyItem>
              <WhoCanApplyItem>
                <svg width="32" height="32" viewBox="0 0 32 32">
                  <rect x="4" y="10" width="24" height="12" rx="6" fill="#D4AF37" opacity="0.15"/>
                  <rect x="8" y="14" width="16" height="4" rx="2" fill="#1C2951"/>
                </svg>
                <span>Partnership firms (max 10 partners)</span>
              </WhoCanApplyItem>
              <WhoCanApplyItem>
                <svg width="32" height="32" viewBox="0 0 32 32">
                  <rect x="6" y="8" width="20" height="16" rx="6" fill="#D4AF37" opacity="0.15"/>
                  <path d="M10 16h12" stroke="#1C2951" strokeWidth="2"/>
                </svg>
                <span>Limited Liability Partnerships (LLPs)</span>
              </WhoCanApplyItem>
              <WhoCanApplyItem>
                <svg width="32" height="32" viewBox="0 0 32 32">
                  <rect x="8" y="8" width="16" height="16" rx="4" fill="#D4AF37" opacity="0.15"/>
                  <rect x="12" y="12" width="8" height="8" rx="2" fill="#1C2951"/>
                </svg>
                <span>Indian companies</span>
              </WhoCanApplyItem>
              <WhoCanApplyItem>
                <svg width="32" height="32" viewBox="0 0 32 32">
                  <ellipse cx="16" cy="16" rx="12" ry="8" fill="#D4AF37" opacity="0.15"/>
                  <ellipse cx="16" cy="16" rx="6" ry="4" fill="#1C2951"/>
                </svg>
                <span>Foreign companies</span>
              </WhoCanApplyItem>
              <WhoCanApplyItem>
                <svg width="32" height="32" viewBox="0 0 32 32">
                  <rect x="10" y="10" width="12" height="12" rx="4" fill="#D4AF37" opacity="0.15"/>
                  <rect x="12" y="14" width="8" height="4" rx="2" fill="#1C2951"/>
                </svg>
                <span>Trusts</span>
              </WhoCanApplyItem>
              <WhoCanApplyItem>
                <svg width="32" height="32" viewBox="0 0 32 32">
                  <rect x="8" y="8" width="16" height="16" rx="4" fill="#D4AF37" opacity="0.15"/>
                  <rect x="10" y="12" width="12" height="8" rx="2" fill="#1C2951"/>
                </svg>
                <span>Societies</span>
              </WhoCanApplyItem>
            </WhoCanApplyList>

            <h3>Trademark Filing (Individuals, Companies / Entities with MSME Certificate)</h3>
            <p>Trademark registration is available for individuals, companies, and entities holding an MSME certificate. MSME registration can help reduce government fees for trademark filing.</p>

            <h3>Trademark Symbols</h3>
            <div style={{background: 'linear-gradient(135deg,#f7fafc 0%,#fff 100%)', padding: '2.5rem 1.5rem', borderRadius: '18px', boxShadow: '0 6px 32px rgba(16,24,40,0.07)', display: 'flex', gap: '2.5rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
              <SymbolCard>
                <svg width="56" height="56" viewBox="0 0 56 56">
                  <circle cx="28" cy="28" r="24" fill="#D4AF37" opacity="0.18"/>
                  <text x="28" y="38" textAnchor="middle" fontSize="36" fill="#1C2951" fontFamily="Inter,Arial,sans-serif">®</text>
                </svg>
                <span>Registered (®)</span>
                <p>The <strong>®</strong> symbol is used for trademarks that have been officially registered with the trademark office. Only registered marks can use this symbol, and it provides legal protection against infringement.</p>
              </SymbolCard>
              <SymbolCard>
                <svg width="56" height="56" viewBox="0 0 56 56">
                  <circle cx="28" cy="28" r="24" fill="#D4AF37" opacity="0.18"/>
                  <text x="28" y="38" textAnchor="middle" fontSize="36" fill="#1C2951" fontFamily="Inter,Arial,sans-serif">™</text>
                </svg>
                <span>Trademark (™)</span>
                <p>The <strong>™</strong> symbol is used to indicate a claim to a trademark that is not yet registered. It can be used by anyone to show that a word, logo, or phrase is being claimed as a trademark.</p>
              </SymbolCard>
              <SymbolCard>
                <svg width="56" height="56" viewBox="0 0 56 56">
                  <circle cx="28" cy="28" r="24" fill="#D4AF37" opacity="0.18"/>
                  <text x="28" y="38" textAnchor="middle" fontSize="36" fill="#1C2951" fontFamily="Inter,Arial,sans-serif">℠</text>
                </svg>
                <span>Service Mark (℠)</span>
                <p>The <strong>℠</strong> symbol is used for service marks, which identify services rather than goods. Like ™, it is used for unregistered marks but specifically for services.</p>
              </SymbolCard>
            </div>

            <h3>Trademark Filing Options</h3>
            <FilingOptionsGrid>
              <FilingOptionCard>
                <h4>Trademark Filing (Individuals, Companies / Entities with MSME Certificate)</h4>
                <p>Choose from Express or Standard filing options with expert support, class selection guidance, and quick turnaround to register your trademark seamlessly.</p>
                <div style={{display: 'flex', gap: '1.2rem', flexWrap: 'wrap'}}>
                  <FilingTypeCard>
                    <h5>Express Filing</h5>
                    <ul>
                      <li>30-minute consultation with a TM Expert</li>
                      <li>Thorough TM name/logo search</li>
                      <li>Assistance in selecting TM class</li>
                      <li>Form 48 - Complementary</li>
                      <li>TM Filing within 6 hours for one class</li>
                      <li>TM Receipt will be issued within 24 hours</li>
                    </ul>
                    <div>Additional Govt. Fees: <span style={{color: '#1C2951'}}>Rs. 4500</span></div>
                  </FilingTypeCard>
                  <FilingTypeCard>
                    <h5>Standard Filing</h5>
                    <ul>
                      <li>30-minute consultation with a TM Expert</li>
                      <li>Thorough TM name/logo search</li>
                      <li>Assistance in selecting TM class</li>
                      <li>Form 48 - Complementary</li>
                      <li>TM Filing within 3 working days for one class</li>
                      <li>TM Receipt will be issued within 3 working days</li>
                    </ul>
                    <div>Additional Govt. Fees: <span style={{color: '#1C2951'}}>Rs. 4500</span></div>
                  </FilingTypeCard>
                </div>
              </FilingOptionCard>
              <FilingOptionCard>
                <h4>Trademark Filing (Non-MSME, Companies / Entities)</h4>
                <p>Ideal for larger businesses and non-MSME entities, this filing includes expert consultation, trademark class selection, and timely application processing under Express or Standard options.</p>
                <div style={{display: 'flex', gap: '1.2rem', flexWrap: 'wrap'}}>
                  <FilingTypeCard>
                    <h5>Express Filing</h5>
                    <ul>
                      <li>30-minute consultation with a TM Expert</li>
                      <li>Thorough TM name/logo search</li>
                      <li>Assistance in selecting TM class</li>
                      <li>Form 48 - Complementary</li>
                      <li>TM Filing within 6 hours for one class</li>
                      <li>TM Receipt will be issued within 24 hours</li>
                    </ul>
                    <div>Additional Govt. Fees: <span style={{color: '#1C2951'}}>Rs. 9000</span></div>
                  </FilingTypeCard>
                  <FilingTypeCard>
                    <h5>Standard Filing</h5>
                    <ul>
                      <li>30-minute consultation with a TM Expert</li>
                      <li>Thorough TM name/logo search</li>
                      <li>Assistance in selecting TM class</li>
                      <li>Form 48 - Complementary</li>
                      <li>TM Filing within 3 working days for one class</li>
                      <li>TM Receipt will be issued within 3 working days</li>
                    </ul>
                    <div>Additional Govt. Fees: <span style={{color: '#1C2951'}}>Rs. 9000</span></div>
                  </FilingTypeCard>
                </div>
              </FilingOptionCard>
            </FilingOptionsGrid>

            <SectionLottie>
              <LottieAnimation
                src="/assets/Drafts/Investment.json"
                width="350px"
                height="300px"
              />
            </SectionLottie>

            <h2>5 Types of Company Registration in India</h2>
            <p>Under the Companies Act of 2013, different types of business entities can be registered. Each entity has its own set of benefits and drawbacks. Here is a complete outline of different business entities and their corresponding information.</p>

            <CompanyTypesTable>
              <thead>
                <tr>
                  <th>Entities</th>
                  <th>Pvt. Limited</th>
                  <th>One Person</th>
                  <th>LLP</th>
                  <th>Partnership</th>
                  <th>Proprietorship</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Compliance Requirement</strong></td>
                  <td>Companies Act, 2013</td>
                  <td>Companies Act, 2013</td>
                  <td>LLP Act, 2008</td>
                  <td>Partnership Act, 1932</td>
                  <td>No specified Act</td>
                </tr>
                <tr>
                  <td><strong>Registration</strong></td>
                  <td>Mandatory</td>
                  <td>Mandatory</td>
                  <td>Mandatory</td>
                  <td>Optional</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td><strong>Number of Owners</strong></td>
                  <td>2 - 200</td>
                  <td>Only 1</td>
                  <td>2 - Unlimited</td>
                  <td>2 - 50</td>
                  <td>Only 1</td>
                </tr>
                <tr>
                  <td><strong>Separate Legal Entity</strong></td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>No</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td><strong>Liability Protection</strong></td>
                  <td>Limited</td>
                  <td>Limited</td>
                  <td>Limited</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td><strong>Statutory Audit</strong></td>
                  <td>Mandatory</td>
                  <td>Mandatory</td>
                  <td>As Applicable</td>
                  <td>Not Mandatory</td>
                  <td>Not Mandatory</td>
                </tr>
                <tr>
                  <td><strong>Ownership Transfer</strong></td>
                  <td>Yes</td>
                  <td>Yes (Restricted)</td>
                  <td>Yes</td>
                  <td>Yes (Restricted)</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td><strong>Perpetual Existence</strong></td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>No</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td><strong>Foreign Ownership</strong></td>
                  <td>Allowed</td>
                  <td>Not Allowed</td>
                  <td>Allowed</td>
                  <td>Allowed</td>
                  <td>Not Allowed</td>
                </tr>
                <tr>
                  <td><strong>Taxation Liability</strong></td>
                  <td>Moderate</td>
                  <td>Moderate</td>
                  <td>High</td>
                  <td>High</td>
                  <td>Low</td>
                </tr>
                <tr>
                  <td><strong>Compliance Requirement</strong></td>
                  <td>High</td>
                  <td>High</td>
                  <td>Moderate</td>
                  <td>Low</td>
                  <td>Low</td>
                </tr>
              </tbody>
            </CompanyTypesTable>

            <SectionLottie>
              <LottieAnimation
                src="/assets/Drafts/World%20map%2C%20Tallinn.json"
                width="350px"
                height="300px"
              />
            </SectionLottie>

            <h2>Documents Required for Trademark Registration Online in India</h2>
            <p>To register a trademark in India, you need to submit specific documents based on your applicant type. These documents help establish your identity, business status, and the legitimacy of your trademark claim. Below is a detailed breakdown for each applicant type.</p>

            <DocumentsTable>
              <thead>
                <tr>
                  <th>Applicant Type</th>
                  <th>Documents Required</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Individuals & Sole Proprietorship</strong></td>
                  <td>
                    <ul>
                      <li>Form TM-A</li>
                      <li>Logo (if applicable)</li>
                      <li>Power of Attorney (Form-48)</li>
                      <li>Identity Proof (Aadhar, PAN, Passport, Driving License)</li>
                      <li>Address Proof (utility bill, bank statement, voter ID)</li>
                      <li>User Affidavit</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td><strong>Partnership Firms</strong></td>
                  <td>
                    <ul>
                      <li>Form TM-A</li>
                      <li>Logo (if applicable)</li>
                      <li>Power of Attorney (Form-48)</li>
                      <li>Partnership Deed / Firm Registration Certificate</li>
                      <li>Identity & Address Proof of Signatory</li>
                      <li>User Affidavit</li>
                      <li>MSME Certificate</li>
                      <li>Startup Recognition Certificate (DPIIT)</li>
                      <li>Partnership PAN Card</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td><strong>Companies (Private Ltd., Public Ltd., or LLPs)</strong></td>
                  <td>
                    <ul>
                      <li>Form TM-A</li>
                      <li>Incorporation Certificate or LLP deed</li>
                      <li>Power of Attorney (Form-48)</li>
                      <li>Logo (if applicable)</li>
                      <li>Identity & Address Proof of Authorized Signatory</li>
                      <li>User Affidavit</li>
                      <li>MSME Certificate (if applicable)</li>
                      <li>Startup Recognition Certificate (DPIIT)</li>
                      <li>Company PAN Card or LLP PAN Card</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td><strong>Other Applicants (Trusts, NGOs, etc.)</strong></td>
                  <td>
                    <ul>
                      <li>Form TM-A</li>
                      <li>Logo (if applicable)</li>
                      <li>Incorporation Certificate</li>
                      <li>Power of Attorney (Form-48)</li>
                      <li>Identity & Address Proof of Authorized Signatory</li>
                      <li>User Affidavit</li>
                      <li>Trust PAN Card</li>
                      <li>Trust Deed</li>
                      <li>GST Certificate</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </DocumentsTable>

            <p>Each document serves a specific purpose in verifying the applicant's identity, business status, and the authenticity of the trademark claim. Proper documentation ensures a smooth registration process and helps prevent legal disputes or delays. If you need help preparing your documents, our experts can guide you through every step.</p>

            <SectionLottie>
              <LottieAnimation
                src="/assets/Drafts/Business.json"
                width="350px"
                height="300px"
              />
            </SectionLottie>

            <h2>Benefits of Trademark Registration</h2>
            <p>Registering your trademark is more than just paperwork—it's a smart move to protect your brand, stand out, and grow your business with confidence.</p>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto'}}>
              <BenefitCard>
                <div style={{marginBottom: '0.7rem'}}><i className="fas fa-shield-alt" style={{fontSize: '2rem', color: '#D4AF37'}}></i></div>
                <h3>Legal Protection</h3>
                <p>Your brand is safe from copycats and misuse. You get the power to take legal action if someone tries to steal your identity.</p>
              </BenefitCard>
              <BenefitCard>
                <div style={{marginBottom: '0.7rem'}}><i className="fas fa-crown" style={{fontSize: '2rem', color: '#D4AF37'}}></i></div>
                <h3>Exclusive Rights</h3>
                <p>Only you can use your trademark for your products or services. It's your brand, your rules!</p>
              </BenefitCard>
              <BenefitCard>
                <div style={{marginBottom: '0.7rem'}}><i className="fas fa-star" style={{fontSize: '2rem', color: '#D4AF37'}}></i></div>
                <h3>Brand Differentiation</h3>
                <p>Stand out from the crowd! A trademark makes your brand memorable and unique, so customers recognize and trust you.</p>
              </BenefitCard>
              <BenefitCard>
                <div style={{marginBottom: '0.7rem'}}><i className="fas fa-gem" style={{fontSize: '2rem', color: '#D4AF37'}}></i></div>
                <h3>Goodwill & Asset Creation</h3>
                <p>Builds trust and reputation. Your trademark becomes a valuable asset you can license, franchise, or even sell.</p>
              </BenefitCard>
              <BenefitCard>
                <div style={{marginBottom: '0.7rem'}}><i className="fas fa-globe" style={{fontSize: '2rem', color: '#D4AF37'}}></i></div>
                <h3>Global Expansion</h3>
                <p>Ready to go international? Trademark registration helps you protect your brand worldwide and grow beyond borders.</p>
              </BenefitCard>
            </div>

            <TrademarkClassesSection>
              <TrademarkClassesContent>
                <div style={{textAlign: 'center', marginBottom: '4rem'}}>
                  <h2 style={{fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '700', marginBottom: '1.5rem', background: 'linear-gradient(135deg, #1C2951 0%, #D4AF37 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
                    Trademark Classes
                  </h2>
                  <p style={{fontSize: '1.2rem', color: '#64748b', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6'}}>
                    Complete list of all 45 trademark classes as per the Nice Classification system, grouped into Goods (Classes 1-34) and Services (Classes 35-45)
                  </p>
                </div>

                <div style={{marginBottom: '4rem'}}>
                  <div style={{background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)', padding: '3rem', borderRadius: '20px', borderLeft: '5px solid #0284c7'}}>
                    <h3 style={{color: '#1C2951', fontSize: '2.2rem', fontWeight: '700', marginBottom: '2rem', textAlign: 'center'}}>
                      <i className="fas fa-box" style={{marginRight: '0.5rem', color: '#0284c7'}}></i>
                      Goods Classes (1-34)
                    </h3>
                    
                    <ClassesGrid>
                      <ClassesCard>
                        <h4>Classes 1-17</h4>
                        <ClassItem color="#3b82f6" bgColor="#f8fafc">
                          <span>1</span>
                          <span>Chemicals used in industry, science, photography, agriculture, horticulture, and forestry</span>
                        </ClassItem>
                        <ClassItem color="#D4AF37" bgColor="#f0fdf4">
                          <span>2</span>
                          <span>Paints, varnishes, lacquers, colorants, mordants, raw natural resins</span>
                        </ClassItem>
                        <ClassItem color="#E6C57F" bgColor="#fffbeb">
                          <span>3</span>
                          <span>Cleaning, polishing, scouring and abrasive preparations; soaps; perfumery; cosmetics</span>
                        </ClassItem>
                        <ClassItem color="#D4AF37" bgColor="#f8fafc">
                          <span>4</span>
                          <span>Industrial oils and greases; lubricants; fuels; candles and wicks</span>
                        </ClassItem>
                        <ClassItem color="#D4AF37" bgColor="#fef2f2">
                          <span>5</span>
                          <span>Pharmaceutical and veterinary preparations; sanitary preparations; dietetic food for medical use</span>
                        </ClassItem>
                        <ClassItem color="#06b6d4" bgColor="#f0fdfa">
                          <span>6</span>
                          <span>Common metals and their alloys; metal building materials; small metal hardware</span>
                        </ClassItem>
                        <ClassItem color="#ec4899" bgColor="#fdf2f8">
                          <span>7</span>
                          <span>Machines and machine tools; motors and engines (except land vehicles)</span>
                        </ClassItem>
                        <ClassItem color="#84cc16" bgColor="#f7fee7">
                          <span>8</span>
                          <span>Hand tools and implements; cutlery; razors</span>
                        </ClassItem>
                        <ClassItem color="#3b82f6" bgColor="#f8fafc">
                          <span>9</span>
                          <span>Scientific, nautical, surveying, photographic, optical, measuring, signaling apparatus; computers; software</span>
                        </ClassItem>
                        <ClassItem color="#D4AF37" bgColor="#f0fdf4">
                          <span>10</span>
                          <span>Surgical, medical, dental, and veterinary apparatus and instruments; artificial limbs, eyes, and teeth</span>
                        </ClassItem>
                        <ClassItem color="#E6C57F" bgColor="#fffbeb">
                          <span>11</span>
                          <span>Apparatus for lighting, heating, cooking, refrigerating, drying, ventilating, water supply</span>
                        </ClassItem>
                        <ClassItem color="#D4AF37" bgColor="#f8fafc">
                          <span>12</span>
                          <span>Vehicles; apparatus for locomotion by land, air or water</span>
                        </ClassItem>
                        <ClassItem color="#D4AF37" bgColor="#fef2f2">
                          <span>13</span>
                          <span>Firearms; ammunition; explosives; fireworks</span>
                        </ClassItem>
                        <ClassItem color="#06b6d4" bgColor="#f0fdfa">
                          <span>14</span>
                          <span>Precious metals; jewelry; watches and chronometric instruments</span>
                        </ClassItem>
                        <ClassItem color="#ec4899" bgColor="#fdf2f8">
                          <span>15</span>
                          <span>Musical instruments</span>
                        </ClassItem>
                        <ClassItem color="#84cc16" bgColor="#f7fee7">
                          <span>16</span>
                          <span>Paper; cardboard; printed matter; stationery; office requisites; instructional materials</span>
                        </ClassItem>
                        <ClassItem color="#3b82f6" bgColor="#f8fafc">
                          <span>17</span>
                          <span>Rubber, gutta-percha, gum, asbestos, mica; plastics in extruded form; packing and insulating materials</span>
                        </ClassItem>
                      </ClassesCard>

                      <ClassesCard>
                        <h4>Classes 18-34</h4>
                        <ClassItem color="#D4AF37" bgColor="#f0fdf4">
                          <span>18</span>
                          <span>Leather and imitations; trunks and traveling bags; umbrellas; harness and saddlery</span>
                        </ClassItem>
                        <ClassItem color="#E6C57F" bgColor="#fffbeb">
                          <span>19</span>
                          <span>Building materials (non-metallic); non-metallic rigid pipes; monuments not of metal</span>
                        </ClassItem>
                        <ClassItem color="#D4AF37" bgColor="#f8fafc">
                          <span>20</span>
                          <span>Furniture, mirrors, picture frames; goods of wood, cork, reed, bone, plastics</span>
                        </ClassItem>
                        <ClassItem color="#D4AF37" bgColor="#fef2f2">
                          <span>21</span>
                          <span>Household utensils and containers; combs and sponges; brushes; glassware, porcelain and earthenware</span>
                        </ClassItem>
                        <ClassItem color="#06b6d4" bgColor="#f0fdfa">
                          <span>22</span>
                          <span>Ropes, string, nets, tents, sacks, padding and stuffing materials</span>
                        </ClassItem>
                        <ClassItem color="#ec4899" bgColor="#fdf2f8">
                          <span>23</span>
                          <span>Yarns and threads for textile use</span>
                        </ClassItem>
                        <ClassItem color="#84cc16" bgColor="#f7fee7">
                          <span>24</span>
                          <span>Textiles and textile goods; bed and table covers</span>
                        </ClassItem>
                        <ClassItem color="#3b82f6" bgColor="#f8fafc">
                          <span>25</span>
                          <span>Clothing, footwear, headgear</span>
                        </ClassItem>
                        <ClassItem color="#D4AF37" bgColor="#f0fdf4">
                          <span>26</span>
                          <span>Lace, embroidery, ribbons; buttons, pins, artificial flowers</span>
                        </ClassItem>
                        <ClassItem color="#E6C57F" bgColor="#fffbeb">
                          <span>27</span>
                          <span>Carpets, rugs, mats, linoleum; wall hangings (non-textile)</span>
                        </ClassItem>
                        <ClassItem color="#D4AF37" bgColor="#f8fafc">
                          <span>28</span>
                          <span>Games and playthings; gymnastic and sporting articles; decorations for Christmas trees</span>
                        </ClassItem>
                        <ClassItem color="#D4AF37" bgColor="#fef2f2">
                          <span>29</span>
                          <span>Meat, fish, poultry, game; preserved, frozen, dried, cooked fruits and vegetables; milk products; edible oils and fats</span>
                        </ClassItem>
                        <ClassItem color="#06b6d4" bgColor="#f0fdfa">
                          <span>30</span>
                          <span>Coffee, tea, cocoa, rice, flour, bread, pastry, confectionery, sugar, honey, sauces, spices</span>
                        </ClassItem>
                        <ClassItem color="#ec4899" bgColor="#fdf2f8">
                          <span>31</span>
                          <span>Agricultural, horticultural and forestry products; live animals; fresh fruits and vegetables; seeds</span>
                        </ClassItem>
                        <ClassItem color="#84cc16" bgColor="#f7fee7">
                          <span>32</span>
                          <span>Beers; mineral and aerated waters; fruit drinks and juices; syrups and preparations for beverages</span>
                        </ClassItem>
                        <ClassItem color="#3b82f6" bgColor="#f8fafc">
                          <span>33</span>
                          <span>Alcoholic beverages (except beers)</span>
                        </ClassItem>
                        <ClassItem color="#D4AF37" bgColor="#f0fdf4">
                          <span>34</span>
                          <span>Tobacco; smokers' articles; matches</span>
                        </ClassItem>
                      </ClassesCard>
                    </ClassesGrid>
                  </div>
                </div>

                <div style={{marginBottom: '4rem'}}>
                  <div style={{background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)', padding: '3rem', borderRadius: '20px', borderLeft: '5px solid #D4AF37'}}>
                    <h3 style={{color: '#1C2951', fontSize: '2.2rem', fontWeight: '700', marginBottom: '2rem', textAlign: 'center'}}>
                      <i className="fas fa-cogs" style={{marginRight: '0.5rem', color: '#D4AF37'}}></i>
                      Services Classes (35-45)
                    </h3>
                    
                    <ClassesGrid>
                      <ClassesCard>
                        <h4>Classes 35-40</h4>
                        <ClassItem color="#3b82f6" bgColor="#f8fafc">
                          <span>35</span>
                          <span>Advertising; business management; business administration; office functions</span>
                        </ClassItem>
                        <ClassItem color="#D4AF37" bgColor="#f0fdf4">
                          <span>36</span>
                          <span>Insurance; financial affairs; monetary affairs; real estate affairs</span>
                        </ClassItem>
                        <ClassItem color="#E6C57F" bgColor="#fffbeb">
                          <span>37</span>
                          <span>Building construction; repair; installation services</span>
                        </ClassItem>
                        <ClassItem color="#D4AF37" bgColor="#f8fafc">
                          <span>38</span>
                          <span>Telecommunications</span>
                        </ClassItem>
                        <ClassItem color="#D4AF37" bgColor="#fef2f2">
                          <span>39</span>
                          <span>Transport; packaging and storage of goods; travel arrangements</span>
                        </ClassItem>
                        <ClassItem color="#06b6d4" bgColor="#f0fdfa">
                          <span>40</span>
                          <span>Treatment of materials</span>
                        </ClassItem>
                      </ClassesCard>

                      <ClassesCard>
                        <h4>Classes 41-45</h4>
                        <ClassItem color="#ec4899" bgColor="#fdf2f8">
                          <span>41</span>
                          <span>Education; training; entertainment; sporting and cultural activities</span>
                        </ClassItem>
                        <ClassItem color="#84cc16" bgColor="#f7fee7">
                          <span>42</span>
                          <span>Scientific and technological services; industrial research; computer software and hardware design</span>
                        </ClassItem>
                        <ClassItem color="#3b82f6" bgColor="#f8fafc">
                          <span>43</span>
                          <span>Services for providing food and drink; temporary accommodation</span>
                        </ClassItem>
                        <ClassItem color="#D4AF37" bgColor="#f0fdf4">
                          <span>44</span>
                          <span>Medical services; veterinary services; hygienic and beauty care</span>
                        </ClassItem>
                        <ClassItem color="#E6C57F" bgColor="#fffbeb">
                          <span>45</span>
                          <span>Legal services; security services; personal and social services</span>
                        </ClassItem>
                      </ClassesCard>
                    </ClassesGrid>
                  </div>
                </div>

                <div style={{background: 'linear-gradient(135deg, #fef3c7, #fed7aa)', padding: '3rem', borderRadius: '20px', borderLeft: '5px solid #E6C57F'}}>
                  <div style={{textAlign: 'center'}}>
                    <h4 style={{color: '#92400e', fontSize: '1.5rem', marginBottom: '1.5rem'}}>
                      <i className="fas fa-lightbulb" style={{marginRight: '0.5rem'}}></i>
                      Nice Classification System
                    </h4>
                    <p style={{color: '#b45309', marginBottom: '2rem', lineHeight: '1.6', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>
                      The Nice Classification is an international classification system used to classify goods and services for trademark registration purposes. It was established by the Nice Agreement (1957) and is regularly updated to reflect new products and services in the market.
                    </p>
                    
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem'}}>
                      <div style={{background: 'rgba(255,255,255,0.7)', padding: '1.5rem', borderRadius: '12px'}}>
                        <i className="fas fa-box" style={{fontSize: '2rem', color: '#0284c7', marginBottom: '1rem'}}></i>
                        <h5 style={{color: '#92400e', marginBottom: '0.5rem'}}>Classes 1-34</h5>
                        <p style={{color: '#b45309', fontSize: '0.9rem', margin: '0'}}>Goods and Physical Products</p>
                      </div>
                      
                      <div style={{background: 'rgba(255,255,255,0.7)', padding: '1.5rem', borderRadius: '12px'}}>
                        <i className="fas fa-cogs" style={{fontSize: '2rem', color: '#D4AF37', marginBottom: '1rem'}}></i>
                        <h5 style={{color: '#92400e', marginBottom: '0.5rem'}}>Classes 35-45</h5>
                        <p style={{color: '#b45309', fontSize: '0.9rem', margin: '0'}}>Services and Intangible Offerings</p>
                      </div>
                      
                      <div style={{background: 'rgba(255,255,255,0.7)', padding: '1.5rem', borderRadius: '12px'}}>
                        <i className="fas fa-globe" style={{fontSize: '2rem', color: '#D4AF37', marginBottom: '1rem'}}></i>
                        <h5 style={{color: '#92400e', marginBottom: '0.5rem'}}>International Standard</h5>
                        <p style={{color: '#b45309', fontSize: '0.9rem', margin: '0'}}>Recognized in 85+ Countries Worldwide</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TrademarkClassesContent>
            </TrademarkClassesSection>

            <h2>Post-Registration Procedures & Legal Actions</h2>
            <PostRegistrationGrid>
              <PostRegistrationCard>
                <h3>Trademark Renewal Process</h3>
                <p>Renew your trademark every 10 years by filing <strong>Form TM-R</strong> with the Trademark Registry. Required documents include:</p>
                <ul>
                  <li>Form TM-R: Trademark renewal application</li>
                  <li>Trademark Certificate: Certified copy of original registration</li>
                  <li>TM-A Form: Certified copy (or original) of initial registration</li>
                  <li>ID & Address Proof: Government-issued photo ID and address proof</li>
                  <li>Power of Attorney: If represented by agent</li>
                </ul>
                <p>Renewal must be filed within six months before expiry or within six months after expiry (with surcharge).</p>
                <h4>Trademark Renewal Fees</h4>
                <ul>
                  <li>E-filing: ₹9,000 per class</li>
                  <li>Physical Filing: ₹10,000 per class</li>
                  <li>Late Renewal Surcharge: ₹4,500</li>
                  <li>Restoration Fee: ₹9,000</li>
                </ul>
              </PostRegistrationCard>
              <PostRegistrationCard>
                <h3>Trademark Rectification & Cancellation</h3>
                <p>Legal process under the Trademarks Act, 1999 for fixing mistakes or deleting a trademark from the register.</p>
                <h4>Trademark Rectification</h4>
                <ul>
                  <li>Object: Fix mistakes or omissions in the register</li>
                  <li>Reasons: Errors, non-use, breach of conditions</li>
                  <li>Procedure: Submit Form TM-26 with evidence</li>
                  <li>Who Can Submit: Any interested party</li>
                  <li>Authority: Trademark Registrar or IPAB</li>
                </ul>
                <h4>Trademark Cancellation</h4>
                <ul>
                  <li>Objective: Delete a trademark from the register</li>
                  <li>Initiator: Any complaining party</li>
                  <li>Regulated by: Trademarks Act, 1999</li>
                </ul>
              </PostRegistrationCard>
              <PostRegistrationCard>
                <h3>Trademark Infringement & Legal Remedies</h3>
                <p>Trademark infringement occurs when a mark is used without authorization, causing confusion. Legal remedies include:</p>
                <ul>
                  <li>Injunctions: Court orders to stop unauthorized use</li>
                  <li>Damages: Compensation for losses</li>
                  <li>Recovery of Profits: In some cases, </li>
                </ul>
              </PostRegistrationCard>
            </PostRegistrationGrid>
          </TrademarkMain>
        </TrademarkContainer>
      </TrademarkSection>
    </>
  );
}

export default TrademarkRegistration;