import React, { useEffect, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import SidebarForm from "../../components/SidebarForm";
import LottieAnimation from "../../components/LottieAnimation";

import {
  LitigationSection,
  LitigationContainer,
  LitigationMain,
  LitigationByline,
  LitigationFeatureGrid,
  LitigationFeatureCard,
  IconBox,
  FaqTable,
  BenefitsList,
  LitigationSidebar,
  LottieWrapper,
  SidebarWrapper,
  QuickLink,
} from "./LitigationServices.styles.js";

const LitigationServices = () => {
  const processRef = useRef(null);
  const typesRef = useRef(null);
  const faqRef = useRef(null);

  const handleScroll = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.5/dist/dotlottie-wc.js";
    script.type = "module";
    document.body.appendChild(script);

    const faders = document.querySelectorAll(".fade-in");
    const appearOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    };
    const appearOnScroll = new IntersectionObserver(function (
      entries,
      appearOnScroll,
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      });
    }, appearOptions);

    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleBrochureDownload = () => {
    alert("Brochure not available. Please request via the contact form.");
  };

  return (
    <>
      <style>{`
                .fade-in {
                    opacity: 0;
                    transition: opacity 0.6s ease-in, transform 0.6s ease-in;
                    transform: translateY(20px);
                }
                .appear {
                    opacity: 1;
                    transform: translateY(0);
                }
            `}</style>
      <Header />
      <ServiceHero
        title="Litigation Services"
        subtitle="Expert Legal Representation Across India"
        breadcrumb="Litigation Services"
      />
      <LitigationSection>
        <LitigationContainer>
          <LitigationMain>
            <LottieWrapper>
              <dotlottie-player
                src="https://lottie.host/7e2e2e2d-legal-litigation.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></dotlottie-player>
            </LottieWrapper>
            <h1>Litigation Services at Mundra Legal</h1>
            <LitigationByline>
              Expert Legal Representation Across India
            </LitigationByline>
            <p>
              <strong>What Is Litigation?</strong>
            </p>
            <p>
              Litigation is the formal process of resolving legal disputes
              through the judicial system. It involves one party (the plaintiff)
              bringing a claim against another (the defendant) to enforce or
              defend a legal right. The process typically includes filing a case
              in court, presenting evidence, examining witnesses, and securing a
              verdict or judgment from the court.
            </p>
            <p>
              At Mundra Legal, we simplify this complex process by providing
              end-to-end litigation services — from case assessment and
              documentation to representation and final resolution. Our team of
              seasoned advocates and litigation consultants ensures every case
              is handled with precision, professionalism, and confidentiality.
            </p>

            <h2 ref={typesRef}>Types of Litigation We Handle</h2>
            <LitigationFeatureGrid>
              <LitigationFeatureCard className="fade-in">
                <IconBox>
                  <i className="fa-solid fa-gavel"></i>
                </IconBox>
                <h3>Civil Litigation</h3>
                <p>
                  Contract breaches, property disputes, recovery of money,
                  defamation, family and inheritance cases. Meticulous case
                  preparation and representation before courts and tribunals.
                </p>
              </LitigationFeatureCard>
              <LitigationFeatureCard className="fade-in">
                <IconBox>
                  <i className="fa-solid fa-briefcase"></i>
                </IconBox>
                <h3>Commercial Litigation</h3>
                <p>
                  Breach of contract, partnership conflicts, corporate fraud,
                  trade disputes, arbitration. Strategic solutions for
                  businesses to mitigate risk and resolve disputes swiftly.
                </p>
              </LitigationFeatureCard>
              <LitigationFeatureCard className="fade-in">
                <IconBox>
                  <i className="fa-solid fa-people-arrows"></i>
                </IconBox>
                <h3>Divorce & Family Litigation</h3>
                <p>
                  Mutual and contested divorce, custody, alimony, asset
                  disputes. Sensitive, professional handling for amicable or
                  contested separations.
                </p>
              </LitigationFeatureCard>
              <LitigationFeatureCard className="fade-in">
                <IconBox>
                  <i className="fa-solid fa-building"></i>
                </IconBox>
                <h3>Real Estate & RERA Litigation</h3>
                <p>
                  Delayed projects, builder-buyer disputes, RERA complaints,
                  title conflicts. Timely justice and expert representation
                  under RERA.
                </p>
              </LitigationFeatureCard>
              <LitigationFeatureCard className="fade-in">
                <IconBox>
                  <i className="fa-solid fa-user-shield"></i>
                </IconBox>
                <h3>POSH & Employment Law</h3>
                <p>
                  POSH policy drafting, committee setup, investigations, legal
                  representation. Ensuring safe workplaces and legal compliance
                  for organizations.
                </p>
              </LitigationFeatureCard>
              <LitigationFeatureCard className="fade-in">
                <IconBox>
                  <i className="fa-solid fa-balance-scale"></i>
                </IconBox>
                <h3>Consumer Protection Litigation</h3>
                <p>
                  Defective products, poor services, unfair trade practices,
                  online grievances. Swift filing, documentation, and
                  representation in consumer courts.
                </p>
              </LitigationFeatureCard>
              <LitigationFeatureCard className="fade-in">
                <IconBox>
                  <i className="fa-solid fa-landmark"></i>
                </IconBox>
                <h3>Property & Land Dispute Resolution</h3>
                <p>
                  Ownership, possession, encroachments, boundary conflicts,
                  inheritance, registration issues. Securing property rights
                  through legal expertise and negotiation.
                </p>
              </LitigationFeatureCard>
              <LitigationFeatureCard className="fade-in">
                <IconBox>
                  <i className="fa-solid fa-users"></i>
                </IconBox>
                <h3>Corporate & Shareholder Litigation</h3>
                <p>
                  Breach of fiduciary duty, mismanagement, contractual
                  violations, regulatory investigations. Protecting business
                  interests and reputation.
                </p>
              </LitigationFeatureCard>
              <LitigationFeatureCard className="fade-in">
                <IconBox>
                  <i className="fa-solid fa-lightbulb"></i>
                </IconBox>
                <h3>Intellectual Property & Patent Litigation</h3>
                <p>
                  Trademark, copyright, patent disputes, trade secret
                  misappropriation, brand protection. Safeguarding IP rights
                  under Indian and international law.
                </p>
              </LitigationFeatureCard>
            </LitigationFeatureGrid>

            <h2>Civil Litigation — What we cover</h2>
            <p>
              Our civil litigation practice covers a wide range of disputes
              including contract enforcement, property and partition matters,
              recovery suits, defamation actions, and tort claims for negligence
              or damages.
            </p>
            <ul>
              <li>
                <strong>Contract breaches and agreement disputes:</strong>{" "}
                Drafting pleadings, injunctions, and pursuing remedies through
                specific performance or damages.
              </li>
              <li>
                <strong>Property ownership and partition cases:</strong> Title
                verification, survey coordination, filing suits for partition
                and possession.
              </li>
              <li>
                <strong>Recovery of money and damages:</strong> Summons,
                execution proceedings and representation in debt recovery
                tribunals where applicable.
              </li>
              <li>
                <strong>Defamation and reputation protection:</strong>{" "}
                Injunctive relief, takedown requests, and damages recovery.
              </li>
              <li>
                <strong>Family & inheritance disputes:</strong> Civil remedies
                for inheritance, testamentary issues, and partition suits.
              </li>
            </ul>

            <h2>Commercial Litigation — For businesses</h2>
            <p>
              Commercial disputes demand speed and strategy. We focus on
              minimizing business disruption while protecting commercial
              interests through:
            </p>
            <ul>
              <li>Breach of contract and non-performance actions</li>
              <li>
                Partnership and shareholder conflicts — oppression &
                mismanagement petitions
              </li>
              <li>Corporate fraud and regulatory investigations</li>
              <li>Recovery of commercial dues and trade disputes</li>
              <li>Arbitration management and enforcement of arbitral awards</li>
            </ul>

            <h2 ref={processRef}>Litigation Process & Timeline (Typical)</h2>
            <FaqTable>
              <thead>
                <tr>
                  <th>Stage</th>
                  <th>What Happens</th>
                  <th>Typical Timeframe</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Consultation & Case Assessment</td>
                  <td>Case evaluation, initial advice, documents checklist</td>
                  <td>1–7 days</td>
                </tr>
                <tr>
                  <td>Drafting & Filing</td>
                  <td>
                    Drafting plaint/petition, affidavits and filing in
                    appropriate forum
                  </td>
                  <td>1–3 weeks</td>
                </tr>
                <tr>
                  <td>Interim Orders & Hearings</td>
                  <td>
                    Applications for interim relief, injunctions, or temporary
                    orders
                  </td>
                  <td>Weeks to months</td>
                </tr>
                <tr>
                  <td>Evidence & Trial</td>
                  <td>
                    Evidence collection, witness statements, cross examination
                  </td>
                  <td>Months to years (varies)</td>
                </tr>
                <tr>
                  <td>Judgment & Execution</td>
                  <td>Final orders and enforcement steps</td>
                  <td>Months</td>
                </tr>
              </tbody>
            </FaqTable>

            <h2>Why Choose Mundra Legal for Litigation Support</h2>
            <BenefitsList>
              <li>
                <i className="fa-solid fa-check-circle"></i> Streamlined
                litigation process from consultation to resolution
              </li>
              <li>
                <i className="fa-solid fa-check-circle"></i> Strong
                representation by domain-specific advocates
              </li>
              <li>
                <i className="fa-solid fa-check-circle"></i> Transparent,
                predictable, and fair legal fees
              </li>
              <li>
                <i className="fa-solid fa-check-circle"></i> Secure handling of
                all confidential documents and data
              </li>
              <li>
                <i className="fa-solid fa-check-circle"></i> Access to legal
                experts across multiple jurisdictions in India
              </li>
            </BenefitsList>

            <h2 ref={faqRef}>Frequently Asked Questions (FAQs)</h2>
            <FaqTable>
              <thead>
                <tr>
                  <th>Question</th>
                  <th>Answer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>What is litigation, and how does it work in India?</td>
                  <td>
                    Litigation is the process of taking legal action through the
                    court system. It involves case filing, hearings, evidence
                    examination, and final judgment. Mundra Legal manages this
                    process efficiently from start to finish.
                  </td>
                </tr>
                <tr>
                  <td>How long does a litigation case take in India?</td>
                  <td>
                    The duration varies depending on the complexity of the case,
                    court workload, and type of dispute. Our experts aim to
                    expedite the process through proper documentation and timely
                    filings.
                  </td>
                </tr>
                <tr>
                  <td>
                    Can I get litigation support online from Mundra Legal?
                  </td>
                  <td>
                    Yes. You can start your case online through document upload,
                    consultation scheduling, and e-filing. We provide remote
                    legal support and virtual case tracking.
                  </td>
                </tr>
                <tr>
                  <td>
                    How is a litigation lawyer different from a corporate
                    lawyer?
                  </td>
                  <td>
                    A litigation lawyer represents clients in court, while a
                    corporate lawyer focuses on compliance, contracts, and
                    advisory work outside the courtroom. Mundra Legal has both
                    teams in-house.
                  </td>
                </tr>
                <tr>
                  <td>
                    What is the difference between litigation and arbitration?
                  </td>
                  <td>
                    Litigation is court-based and leads to a judgment, while
                    arbitration is a private dispute resolution process leading
                    to an enforceable award. Mundra Legal offers both services
                    depending on your case type.
                  </td>
                </tr>
                <tr>
                  <td>How much does litigation cost at Mundra Legal?</td>
                  <td>
                    Legal costs depend on the case complexity, court
                    jurisdiction, and type of representation. We provide
                    transparent estimates before engagement with no hidden fees.
                  </td>
                </tr>
              </tbody>
            </FaqTable>
          </LitigationMain>
          <LitigationSidebar>
            <SidebarWrapper>
              <SidebarForm />
              <hr
                style={{
                  margin: "16px 0",
                  border: "none",
                  height: "1px",
                  background: "#eee",
                }}
              />
              <button
                onClick={handleBrochureDownload}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "10px",
                  border: "1px solid rgba(28,41,81,0.06)",
                  background: "linear-gradient(90deg,#1C2951,#D4AF37)",
                  color: "#fff",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              >
                Download Brochure
              </button>
              <div
                style={{
                  marginTop: "12px",
                  display: "flex",
                  gap: "8px",
                  flexWrap: "wrap",
                }}
              >
                <QuickLink onClick={() => handleScroll(typesRef)}>
                  Services
                </QuickLink>
                <QuickLink onClick={() => handleScroll(processRef)}>
                  Process
                </QuickLink>
                <QuickLink onClick={() => handleScroll(faqRef)}>FAQ</QuickLink>
              </div>
            </SidebarWrapper>
          </LitigationSidebar>
        </LitigationContainer>
      </LitigationSection>
      <Footer />
    </>
  );
};

export default LitigationServices;
