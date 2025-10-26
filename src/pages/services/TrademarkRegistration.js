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
  SectionLottie,
  TrademarkSidebar,
  SidebarScrollWrapper,
  FeatureGrid,
  FeatureCard,
  TypesGrid,
  TypeCard,
  StepsList,
  SymbolRow,
  SmallIcon,
} from "./TrademarkRegistration.styles";

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
            <h1>Trademark Registration in India</h1>
            <div className="trademark-byline">Protect your brand — register your trademark</div>

            <p>
              A registered trademark gives you exclusive rights to use the mark in
              relation to the goods and services for which it is registered. It
              helps prevent misuse by competitors and increases the commercial
              value of your brand. We help businesses and individuals through
              the end-to-end trademark registration process — from searching for
              similar marks to filing the application and responding to
              objections.
            </p>

            <h2>Our Trademark Services</h2>
            <FeatureGrid>
              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-search" aria-hidden />
                </div>
                <h4>Comprehensive Search</h4>
                <p>Detailed clearance searches to identify potential conflicts.</p>
              </FeatureCard>

              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-file-alt" aria-hidden />
                </div>
                <h4>Application Filing</h4>
                <p>Drafting and filing the trademark application with the registry.</p>
              </FeatureCard>

              <FeatureCard>
                <div className="icon-box">
                  <i className="fas fa-shield-alt" aria-hidden />
                </div>
                <h4>Prosecution &amp; Renewal</h4>
                <p>Handling objections, oppositions and post-registration renewals.</p>
              </FeatureCard>
            </FeatureGrid>

            <h2>The Trade Marks Act, 1999</h2>
            <p>
              The Trade Marks Act, 1999 is the principal statute governing
              trademarks in India. It modernised trademark law and introduced
              clearer procedures for registration, opposition, rectification,
              and remedies.
            </p>

            <h3>Key highlights</h3>
            <ul>
              <li>Defines the scope of registrable trademarks and classes of goods/services (based on the Nice Classification).</li>
              <li>Provides procedure for application, examination, publication, opposition, and registration.</li>
              <li>Introduces remedies for infringement, passing off, and provisions for penalties.</li>
              <li>Allows assignment, licensing, and recordal of transactions affecting trademarks.</li>
              <li><strong>Mundra Legal Consultants</strong> can help with every step under the Act — from selecting a strong mark and clearance searches to filing, prosecution, and enforcement.</li>
            </ul>

            <h2>Why Should You Register a Trademark?</h2>
            <p>Registering a trademark is a strategic business decision that delivers legal protection and commercial benefits:</p>
            <ul>
              <li><strong>Exclusive rights:</strong> Prevents others from using confusingly similar marks for related goods/services.</li>
              <li><strong>Brand value:</strong> Registered marks become valuable intangible assets and increase goodwill.</li>
              <li><strong>Legal remedy:</strong> Easier enforcement against infringers and stronger position in disputes.</li>
              <li><strong>Nationwide protection:</strong> A registered mark in India is protected across the country.</li>
              <li><strong>Licensing &amp; monetization:</strong> Enables licensing, franchising and sale of brand assets.</li>
            </ul>
            <p>If you want, we can run a complimentary clearance search and advise on registrability and suitable classes to maximise protection.</p>

            <h2>Understanding Trademark Registration</h2>
            <p>
              Trademark registration is the process of securing exclusive legal
              rights to your brand name, logo, or symbol. In India, it is
              governed by the Trade Marks Act, 1999, which allows you to protect
              and exclusively use your intellectual property in the marketplace.
            </p>

            <h2>The Application Process</h2>
            <p>
              The trademark application process involves filing Form TM-A with
              the Trademark Office and selecting the appropriate class for your
              goods or services. This classification ensures that your brand
              receives the correct legal protection. The process includes
              trademark search, application filing, examination, publication in
              the Trademark Journal, and registration.
            </p>

            <h2>After Registration</h2>
            <p>
              Once registered, you gain the right to use the ® symbol,
              signifying that your trademark is officially recognized. A
              registered trademark is valid for 10 years and can be renewed
              indefinitely. This provides long-term protection and exclusive
              rights to use your brand identity.
            </p>

            <h2>How We Help You</h2>
            <p>
              At Mundra &amp; Associates, we simplify the online trademark
              registration process by offering expert guidance through trademark
              searches, addressing objections or oppositions, and managing
              renewals. Our experienced trademark attorneys help you secure your
              trademark certificate and safeguard your intellectual property,
              building a strong legal foundation for your brand's identity.
            </p>

            <h2>Types of Trademarks in India</h2>
            <p>Trademarks are categorized into different types, each dedicated to distinguishing goods and services. Here's a breakdown:</p>
            <TypesGrid>
              <TypeCard>
                <img src="/assets/Drafts/icon-documents.svg" alt="product mark" />
                <div>
                  <h4>Product Mark</h4>
                  <p>Identifies and distinguishes goods. Example: Nestle.</p>
                </div>
              </TypeCard>

              <TypeCard>
                <img src="/assets/Drafts/icon-growth.svg" alt="service mark" />
                <div>
                  <h4>Service Mark</h4>
                  <p>Marks identifying services rather than goods. Example: United Airlines.</p>
                </div>
              </TypeCard>

              <TypeCard>
                <img src="/assets/Drafts/icon-investor.svg" alt="certification mark" />
                <div>
                  <h4>Certification Mark</h4>
                  <p>Indicates products/services meet specific standards (e.g., ISI, FSSAI).</p>
                </div>
              </TypeCard>

              <TypeCard>
                <SmallIcon src="/assets/Drafts/icon-documents.svg" alt="collective mark" />
                <div>
                  <h4>Collective Mark</h4>
                  <p>Used by an association/group to identify goods/services from members.</p>
                </div>
              </TypeCard>

              <TypeCard>
                <SmallIcon src="/assets/Drafts/icon-growth.svg" alt="shape mark" />
                <div>
                  <h4>Shape Mark</h4>
                  <p>Protects distinctive product or packaging shapes.</p>
                </div>
              </TypeCard>

              <TypeCard>
                <SmallIcon src="/assets/Drafts/icon-investor.svg" alt="pattern mark" />
                <div>
                  <h4>Pattern Mark</h4>
                  <p>Protects distinctive patterns or designs used on products or packaging.</p>
                </div>
              </TypeCard>
            </TypesGrid>

            <h2>How To Register Trademark In India Online?</h2>
            <p>Registering a trademark online is straightforward with expert guidance — these are the typical steps we follow for clients:</p>
            <StepsList>
              <li><strong>Trademark Search:</strong> Check uniqueness and pick the correct class.</li>
              <li><strong>Vienna Codification Check:</strong> If your mark contains visual elements, we classify it for searching.</li>
              <li><strong>Filing the Application:</strong> File Form TM-A with complete details.</li>
              <li><strong>Formality Check:</strong> Registrar verifies the application for basic errors.</li>
              <li><strong>Trademark Examination:</strong> Officer reviews application; respond to objections if any.</li>
              <li><strong>Trademark Hearings:</strong> We represent you if hearings are required.</li>
              <li><strong>Publication in Journal:</strong> The mark is published for public review.</li>
              <li><strong>Opposition Proceedings:</strong> We handle oppositions and defenses.</li>
              <li><strong>Registration Certificate:</strong> After successful completion, you receive the registration valid for 10 years.</li>
            </StepsList>

            <h3>Post-Registration &amp; Renewal</h3>
            <p>Renew every 10 years using Form TM-R; missed renewals may attract late fees and restoration processes. Use Form TM-P for amendments or assignments.</p>

            <h3>Rectification &amp; Cancellation</h3>
            <p>Rectification (Form TM-26) fixes errors or omissions; cancellation removes a mark from the register for valid reasons.</p>

            <h3>Trademark Infringement &amp; Legal Remedies</h3>
            <p>Infringement happens when someone uses a confusingly similar mark. Remedies include injunctions, damages, and recovery of profits.</p>

            <h3>Who can apply for a Trademark Registration Online?</h3>
            <p>Individuals, proprietorships, partnerships, LLPs, companies (Indian &amp; foreign), trusts, societies and joint owners can apply. MSME certificate holders can avail reduced government fees.</p>

            <h3>Trademark Symbols</h3>
            <SymbolRow>
              <div className="symbol"><b>®</b> Registered (®) — for officially registered trademarks.</div>
              <div className="symbol"><b>™</b> Trademark (™) — used to claim an unregistered mark.</div>
              <div className="symbol"><b>℠</b> Service Mark (℠) — used for unregistered service marks.</div>
            </SymbolRow>
          </TrademarkMain>

          <TrademarkSidebar>
            <SidebarScrollWrapper>
              <SidebarForm />
            </SidebarScrollWrapper>
          </TrademarkSidebar>
        </TrademarkContainer>

        <SectionLottie>
          {/* animationPath points to the Drafts registration JSON placed in public */}
          <LottieAnimation animationPath="/assets/Drafts/registration.json" />
        </SectionLottie>
      </TrademarkSection>

      <Footer />

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          style={{
            position: "fixed",
            right: 20,
            bottom: 24,
            background: "#1C2951",
            color: "#fff",
            border: "none",
            padding: "10px 12px",
            borderRadius: 8,
            boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
            cursor: "pointer",
            zIndex: 9999,
          }}
        >
          ↑ Top
        </button>
      )}
    </>
  );
};

export default TrademarkRegistration;