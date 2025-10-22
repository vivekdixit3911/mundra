import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import SidebarForm from "../../components/SidebarForm";
import { BailMattersContainer } from "./BailMatters.styles.js";

const BailMatters = () => {
  return (
    <>
      <Header />
      <ServiceHero
        title="Bail Matters"
        subtitle="Dedicated legal assistance for securing anticipatory and regular bail."
        breadcrumb="Bail Matters"
      />
      <BailMattersContainer>
        <section
          id="bail-content"
          className="bail-section"
          aria-labelledby="bail-heading"
        >
          <div className="bail-container">
            <div className="bail-main">
              <h1 id="bail-heading">Bail Matters & Criminal Defense</h1>
              <p className="bail-byline">
                Expert Legal Assistance for All Types of Bail Applications
              </p>

              <div className="inline-lottie">
                <dotlottie-wc
                  src="https://lottie.host/3c3cb7ee-7106-430f-9451-202c033965c9/drWrh1bZhB.lottie"
                  autoplay
                  loop
                ></dotlottie-wc>
              </div>

              <p>
                At <strong>Mundra Legal Consultants</strong>, we understand that
                facing criminal charges or being arrested can be an extremely
                stressful and overwhelming experience. Our experienced criminal
                defense attorneys specialize in bail matters and provide swift,
                effective legal assistance to secure your release from custody.
              </p>

              <p>
                With years of expertise in criminal law and bail applications,
                we have successfully represented numerous clients across various
                courts, ensuring their fundamental right to liberty is
                protected. Our dedicated team works around the clock to provide
                immediate legal support when you need it most.
              </p>

              <div className="callout">
                <p>
                  <strong>🚨 Emergency Legal Assistance Available 24/7</strong>
                  <br />
                  We understand bail matters require urgent attention. Our team
                  is available round-the-clock to assist you with bail
                  applications and criminal defense representation.
                </p>
              </div>

              <h2 id="bail-types">Types of Bail We Handle</h2>

              <div className="feature-grid">
                <div className="feature-card">
                  <div className="icon-box">
                    <i
                      className="fas fa-gavel"
                      style={{ color: "var(--primary-gold)", fontSize: "28px" }}
                    ></i>
                  </div>
                  <h4>Regular Bail</h4>
                  <p>
                    Application for bail after arrest in non-bailable offenses.
                    We prepare comprehensive applications addressing all legal
                    grounds for release.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="icon-box">
                    <i
                      className="fas fa-shield-alt"
                      style={{ color: "var(--primary-gold)", fontSize: "28px" }}
                    ></i>
                  </div>
                  <h4>Anticipatory Bail</h4>
                  <p>
                    Pre-arrest bail under Section 438 CrPC when you anticipate
                    arrest. We file comprehensive applications with supporting
                    evidence and arguments.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="icon-box">
                    <i
                      className="fas fa-clock"
                      style={{ color: "var(--primary-gold)", fontSize: "28px" }}
                    ></i>
                  </div>
                  <h4>Interim Bail</h4>
                  <p>
                    Temporary bail granted for a short period pending disposal
                    of the main bail application. Immediate relief when time is
                    critical.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="icon-box">
                    <i
                      className="fas fa-balance-scale"
                      style={{ color: "var(--primary-gold)", fontSize: "28px" }}
                    ></i>
                  </div>
                  <h4>Default Bail</h4>
                  <p>
                    Automatic bail under Section 167 CrPC when investigation is
                    not completed within prescribed time limits (60/90 days).
                  </p>
                </div>

                <div className="feature-card">
                  <div className="icon-box">
                    <i
                      className="fas fa-file-contract"
                      style={{ color: "var(--primary-gold)", fontSize: "28px" }}
                    ></i>
                  </div>
                  <h4>Bail Cancellation Defense</h4>
                  <p>
                    Defense against bail cancellation applications. We protect
                    your liberty with strong legal arguments and evidence.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="icon-box">
                    <i
                      className="fas fa-user-tie"
                      style={{ color: "var(--primary-gold)", fontSize: "28px" }}
                    ></i>
                  </div>
                  <h4>Surety Arrangement</h4>
                  <p>
                    Assistance in arranging suitable sureties and completing
                    bail formalities including bond execution and documentation.
                  </p>
                </div>
              </div>

              <h2 id="process">Our Bail Application Process</h2>

              <div className="process-timeline">
                <div className="process-step">
                  <h4>Step 1: Immediate Consultation</h4>
                  <p>
                    Contact us immediately upon arrest or when you anticipate
                    arrest. Our team provides immediate legal consultation and
                    case assessment, available 24/7.
                  </p>
                </div>

                <div className="process-step">
                  <h4>Step 2: Case Analysis & Strategy</h4>
                  <p>
                    We thoroughly analyze your case, review the charges, examine
                    evidence, and develop a comprehensive legal strategy for
                    your bail application.
                  </p>
                </div>

                <div className="process-step">
                  <h4>Step 3: Documentation Preparation</h4>
                  <p>
                    Our team prepares all necessary documents including bail
                    application, affidavits, supporting evidence, and legal
                    citations within the shortest possible time.
                  </p>
                </div>

                <div className="process-step">
                  <h4>Step 4: Filing & Court Representation</h4>
                  <p>
                    We file the bail application in the appropriate court and
                    provide expert representation before the judge, presenting
                    strong legal arguments for your release.
                  </p>
                </div>

                <div className="process-step">
                  <h4>Step 5: Bail Execution & Release</h4>
                  <p>
                    Upon bail grant, we assist with completing all formalities
                    including surety arrangement, bond execution, and ensuring
                    your prompt release from custody.
                  </p>
                </div>

                <div className="process-step">
                  <h4>Step 6: Ongoing Legal Support</h4>
                  <p>
                    We continue to provide legal support throughout your case,
                    including trial defense, bail compliance guidance, and
                    protection against cancellation applications.
                  </p>
                </div>
              </div>

              <h2 id="documents">Documents Required for Bail Application</h2>

              <div className="highlight-box">
                <h3>Essential Documents Checklist</h3>
                <ul>
                  <li>
                    <strong>Personal Documents:</strong> Aadhar Card, PAN Card,
                    Passport (if applicable), Address Proof, Passport-size
                    photographs
                  </li>
                  <li>
                    <strong>Case Documents:</strong> Copy of FIR, Arrest memo,
                    Remand papers, Charge sheet (if filed), Medical reports (if
                    applicable)
                  </li>
                  <li>
                    <strong>Supporting Evidence:</strong> Character
                    certificates, Employment/business proof, Property documents,
                    Family background details
                  </li>
                  <li>
                    <strong>Surety Documents:</strong> Surety's identity proof,
                    Address proof, Property documents, Income proof, Affidavit
                  </li>
                  <li>
                    <strong>Legal Documents:</strong> Advocate's vakalatnama,
                    Bail application draft, Affidavits, Previous bail orders (if
                    any)
                  </li>
                </ul>
              </div>

              <p>
                <strong>Note:</strong> Document requirements may vary depending
                on the nature of the offense, court, and specific circumstances.
                Our team will provide a customized checklist based on your case.
              </p>

              <h2>Offenses We Handle</h2>

              <div className="feature-grid">
                <div className="feature-card">
                  <h4>📋 Economic Offenses</h4>
                  <p>
                    Fraud, cheating, criminal breach of trust, embezzlement,
                    money laundering (PMLA), GST violations
                  </p>
                </div>

                <div className="feature-card">
                  <h4>🚔 NDPS Cases</h4>
                  <p>
                    Narcotic drugs and psychotropic substances cases under NDPS
                    Act with specialized bail strategies
                  </p>
                </div>

                <div className="feature-card">
                  <h4>⚖️ White Collar Crimes</h4>
                  <p>
                    Corporate fraud, insider trading, financial irregularities,
                    cyber crimes, banking offenses
                  </p>
                </div>

                <div className="feature-card">
                  <h4>🏛️ Criminal Cases</h4>
                  <p>
                    Assault, theft, wrongful confinement, trespassing,
                    defamation, and other IPC offenses
                  </p>
                </div>

                <div className="feature-card">
                  <h4>🚨 Special Acts</h4>
                  <p>
                    SC/ST Act, Domestic Violence Act, Arms Act, Motor Vehicles
                    Act violations
                  </p>
                </div>

                <div className="feature-card">
                  <h4>💼 Business Disputes</h4>
                  <p>
                    Partnership disputes, contractual violations, corporate
                    criminal matters, director liability
                  </p>
                </div>
              </div>

              <h2 id="why-us">Why Choose Mundra Legal for Bail Matters?</h2>

              <div className="stats-grid">
                <div className="stat-card">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">
                    Successful Bail Applications
                  </span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Emergency Legal Support</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">95%</span>
                  <span className="stat-label">Success Rate</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
              </div>

              <div className="highlight-box">
                <h3>Our Commitments to You</h3>
                <ul>
                  <li>
                    <strong>Immediate Response:</strong> 24/7 availability for
                    urgent bail matters and emergency consultations
                  </li>
                  <li>
                    <strong>Expert Representation:</strong> Experienced criminal
                    defense lawyers with proven track record in bail matters
                  </li>
                  <li>
                    <strong>Comprehensive Strategy:</strong> Thorough case
                    analysis and customized legal strategy for maximum success
                  </li>
                  <li>
                    <strong>Swift Action:</strong> Quick preparation and filing
                    of bail applications to minimize custody time
                  </li>
                  <li>
                    <strong>Court Expertise:</strong> Strong representation
                    across Sessions Courts, High Courts, and Supreme Court
                  </li>
                  <li>
                    <strong>Complete Support:</strong> End-to-end assistance
                    from application to release and ongoing case management
                  </li>
                  <li>
                    <strong>Transparent Communication:</strong> Regular updates
                    and clear explanation of legal proceedings and options
                  </li>
                  <li>
                    <strong>Confidentiality:</strong> Strict attorney-client
                    privilege and complete discretion in all matters
                  </li>
                </ul>
              </div>

              <h2>Legal Grounds for Bail</h2>

              <p>
                Our experienced advocates present compelling legal arguments
                based on established principles:
              </p>

              <ul>
                <li>
                  <strong>Bail as a Rule, Jail as Exception:</strong>{" "}
                  Fundamental principle under Indian jurisprudence for securing
                  liberty
                </li>
                <li>
                  <strong>No Flight Risk:</strong> Demonstrating strong
                  community ties, family responsibilities, and roots in society
                </li>
                <li>
                  <strong>No Tampering with Evidence:</strong> Assurance that
                  investigation won't be hampered or witnesses influenced
                </li>
                <li>
                  <strong>Health & Humanitarian Grounds:</strong> Medical
                  conditions, age, family circumstances requiring immediate
                  attention
                </li>
                <li>
                  <strong>Weak Prosecution Case:</strong> Lack of evidence,
                  prima facie weak case, possibility of acquittal
                </li>
                <li>
                  <strong>Default Bail Rights:</strong> Investigation not
                  completed within statutory time limits (Section 167 CrPC)
                </li>
                <li>
                  <strong>Parity with Co-accused:</strong> When co-accused
                  persons have been granted bail in similar circumstances
                </li>
                <li>
                  <strong>Lengthy Trial Period:</strong> Protracted trial likely
                  to exceed the maximum sentence for the offense
                </li>
              </ul>

              <h2 id="faq">Frequently Asked Questions</h2>

              <div className="feature-grid">
                <div className="feature-card">
                  <h4>
                    What is the difference between bailable and non-bailable
                    offenses?
                  </h4>
                  <p>
                    Bailable offenses allow automatic bail as a matter of right
                    (e.g., simple hurt, defamation). Non-bailable offenses
                    require a bail application before court (e.g., murder, rape,
                    serious fraud).
                  </p>
                </div>

                <div className="feature-card">
                  <h4>How long does it take to get bail?</h4>
                  <p>
                    Regular bail applications are typically heard within 2-7
                    days depending on court schedules. Anticipatory bail may
                    take 1-3 weeks. We prioritize urgent hearings when
                    necessary.
                  </p>
                </div>

                <div className="feature-card">
                  <h4>Can bail be granted in serious offenses?</h4>
                  <p>
                    Yes, even in serious offenses like murder or rape, bail can
                    be granted based on various factors including evidence,
                    likelihood of conviction, health, age, and duration of
                    custody.
                  </p>
                </div>

                <div className="feature-card">
                  <h4>What is anticipatory bail and when should I apply?</h4>
                  <p>
                    Anticipatory bail (Section 438 CrPC) is pre-arrest bail when
                    you anticipate arrest. Apply immediately when you learn
                    about potential FIR or investigation against you.
                  </p>
                </div>

                <div className="feature-card">
                  <h4>What happens if bail is rejected?</h4>
                  <p>
                    If bail is rejected, we can file a fresh application after
                    some time with additional grounds, or file a revision/appeal
                    in higher courts (High Court/Supreme Court).
                  </p>
                </div>

                <div className="feature-card">
                  <h4>Can bail be cancelled after being granted?</h4>
                  <p>
                    Yes, bail can be cancelled if you violate conditions,
                    interfere with investigation, threaten witnesses, or
                    abscond. We provide guidance on bail compliance to prevent
                    cancellation.
                  </p>
                </div>
              </div>

              <h2>Bail Conditions & Compliance</h2>

              <p>
                Courts typically impose certain conditions while granting bail.
                We ensure you understand and comply with all requirements:
              </p>

              <div className="callout">
                <p>
                  <strong>Common Bail Conditions:</strong>
                </p>
                <ul>
                  <li>
                    Personal bond and/or surety amount as specified by court
                  </li>
                  <li>Surrender of passport (in certain cases)</li>
                  <li>Regular appearance before police/court as directed</li>
                  <li>Not to leave jurisdiction without court permission</li>
                  <li>Not to contact victims or witnesses</li>
                  <li>Not to commit any offense while on bail</li>
                  <li>Cooperate with investigation</li>
                </ul>
              </div>

              <h2>Our Service Areas</h2>

              <p>We represent clients in bail matters across:</p>

              <ul>
                <li>
                  <strong>Magistrate Courts:</strong> First-level criminal
                  courts for cognizable and non-cognizable offenses
                </li>
                <li>
                  <strong>Sessions Courts:</strong> Trial courts for serious
                  criminal offenses with enhanced punishments
                </li>
                <li>
                  <strong>High Courts:</strong> Revision petitions, appeals
                  against bail rejection, and anticipatory bail applications
                </li>
                <li>
                  <strong>Supreme Court:</strong> Special Leave Petitions (SLP)
                  and appeals in matters of national importance
                </li>
                <li>
                  <strong>Special Courts:</strong> CBI Courts, Economic Offenses
                  Courts, NDPS Courts, SC/ST Courts
                </li>
              </ul>

              <h2>Contact Us for Immediate Assistance</h2>

              <div className="highlight-box">
                <h3>🚨 Need Urgent Legal Help?</h3>
                <p>
                  Bail matters require immediate attention. Don't wait – contact
                  us now for swift legal assistance.
                </p>
                <p>
                  <strong>24/7 Emergency Helpline:</strong> Available round the
                  clock
                </p>
                <p>
                  <strong>Quick Response Time:</strong> We respond to urgent
                  bail matters within hours
                </p>
                <p>
                  <strong>Expert Consultation:</strong> Initial case assessment
                  and legal guidance provided immediately
                </p>
                <p style={{ marginTop: "20px" }}>
                  Fill the form on the right or call us directly for immediate
                  assistance. Your freedom is our priority.
                </p>
              </div>

              <div className="callout">
                <p>
                  <strong>Remember:</strong> Time is critical in bail matters.
                  The sooner you engage legal representation, the better your
                  chances of securing bail. Contact Mundra Legal Consultants
                  today for expert criminal defense and bail assistance.
                </p>
              </div>
            </div>

            <aside className="bail-sidebar">
              <div className="sidebar-scroll-wrapper">
                <SidebarForm />
              </div>
            </aside>
          </div>
        </section>
      </BailMattersContainer>
      <Footer />
    </>
  );
};

export default BailMatters;
