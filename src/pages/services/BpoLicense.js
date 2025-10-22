import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import { BpoLicenseContainer } from "./BpoLicense.styles.js";

const BpoLicense = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    e.target.reset();
  };

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100, // Offset for fixed header
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Header />
      <ServiceHero
        title="BPO License Services"
        subtitle="Complete Business Process Outsourcing Solutions."
        breadcrumb="BPO License"
      />
      <BpoLicenseContainer>
        <section className="bpo-section" aria-labelledby="bpo-heading">
          <div className="bpo-container">
            <article className="bpo-main">
              <div className="hero-animation">
                <lottie-player
                  src="https://assets5.lottiefiles.com/packages/lf20_ndl8h3e1.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </div>

              <h1 id="bpo-heading">BPO License & Registration Services</h1>
              <p className="bpo-byline">
                Complete Business Process Outsourcing Solutions
              </p>

              <div className="highlight-box">
                <h3>
                  <i className="fas fa-building"></i> Why BPO Licensing Matters
                </h3>
                <p>
                  Obtaining the proper BPO license is crucial for operating
                  legally and building trust with clients. Our comprehensive BPO
                  registration services ensure your business meets all
                  regulatory requirements, from IT permits to data security
                  compliance. We guide you through the entire process, making it
                  seamless and efficient.
                </p>
              </div>

              <h2>Our BPO License Services</h2>
              <p>
                We offer end-to-end solutions for BPO license registration and
                compliance, tailored to your specific business needs. Our
                services cover all aspects of BPO operations, from initial setup
                to ongoing compliance management.
              </p>

              <div className="feature-grid">
                <div className="feature-card animate-fade-in-up delay-100">
                  <div className="icon-box">
                    <i className="fas fa-file-contract"></i>
                  </div>
                  <h3>BPO License Registration</h3>
                  <p>
                    Complete assistance with BPO company registration, including
                    STPI/SEZ registration and compliance with local regulations.
                  </p>
                </div>

                <div className="feature-card animate-fade-in-up delay-200">
                  <div className="icon-box">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <h3>Data Security Compliance</h3>
                  <p>
                    Ensure your BPO meets all data protection and IT security
                    requirements with our comprehensive compliance solutions.
                  </p>
                </div>

                <div className="feature-card animate-fade-in-up delay-300">
                  <div className="icon-box">
                    <i className="fas fa-headset"></i>
                  </div>
                  <h3>Call Center Licensing</h3>
                  <p>
                    Specialized services for call center operations, including
                    OSP/ISP licensing and telecom compliance.
                  </p>
                </div>
              </div>

              <h2 id="requirements">BPO License Requirements</h2>
              <p>
                To obtain a BPO license in India, your business must meet
                specific requirements. Here's what you need to know:
              </p>

              <div
                className="feature-grid"
                style={{ gridTemplateColumns: "1fr 1fr" }}
              >
                <div className="highlight-box">
                  <h4>
                    <i className="fas fa-file-alt"></i> Document Requirements
                  </h4>
                  <ul style={{ marginTop: "12px", paddingLeft: "20px" }}>
                    <li>Company incorporation certificate</li>
                    <li>MOA and AOA documents</li>
                    <li>PAN and TAN certificates</li>
                    <li>Director identification details</li>
                    <li>Office lease agreement</li>
                    <li>IT infrastructure details</li>
                  </ul>
                </div>

                <div className="highlight-box">
                  <h4>
                    <i className="fas fa-shield-alt"></i> Compliance
                    Requirements
                  </h4>
                  <ul style={{ marginTop: "12px", paddingLeft: "20px" }}>
                    <li>Data security policy implementation</li>
                    <li>Employee background verification</li>
                    <li>IT security audit certification</li>
                    <li>Privacy policy documentation</li>
                    <li>Quality management systems</li>
                    <li>Disaster recovery planning</li>
                  </ul>
                </div>
              </div>

              <h2 id="process">BPO License Registration Process</h2>
              <p>
                Our streamlined process ensures a hassle-free BPO license
                registration experience:
              </p>

              <div className="process-timeline">
                <div className="timeline-item">
                  <div className="timeline-marker">
                    <i className="fas fa-search"></i>
                  </div>
                  <div className="timeline-content">
                    <h3>Initial Consultation</h3>
                    <p>
                      We analyze your business model and requirements to
                      determine the appropriate BPO license type and structure.
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker">
                    <i className="fas fa-file-alt"></i>
                  </div>
                  <div className="timeline-content">
                    <h3>Document Preparation</h3>
                    <p>
                      Our experts prepare and organize all necessary documents
                      for BPO license application.
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker">
                    <i className="fas fa-paper-plane"></i>
                  </div>
                  <div className="timeline-content">
                    <h3>Application Submission</h3>
                    <p>
                      We handle the entire application process with the relevant
                      authorities, ensuring accuracy and compliance.
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div className="timeline-content">
                    <h3>License Approval</h3>
                    <p>
                      We track your application and assist with any additional
                      requirements until your BPO license is approved.
                    </p>
                  </div>
                </div>
              </div>

              <h2 id="industry-solutions">Industry-Specific BPO Solutions</h2>
              <p>
                We understand that different industries have unique BPO
                requirements. Our services are tailored to meet the specific
                needs of various sectors:
              </p>

              <div className="feature-grid">
                <div
                  className="feature-card"
                  style={{
                    background:
                      "linear-gradient(135deg, #f8f9fb 0%, #ffffff 100%)",
                  }}
                >
                  <h3>
                    <i
                      className="fas fa-phone-volume"
                      style={{ color: "var(--primary-gold)" }}
                    ></i>{" "}
                    Call Centers
                  </h3>
                  <p>
                    Complete solutions for inbound/outbound call centers,
                    including telecom licensing and compliance.
                  </p>
                </div>

                <div
                  className="feature-card"
                  style={{
                    background:
                      "linear-gradient(135deg, #f8f9fb 0%, #ffffff 100%)",
                  }}
                >
                  <h3>
                    <i
                      className="fas fa-laptop-code"
                      style={{ color: "var(--primary-gold)" }}
                    ></i>{" "}
                    IT Services
                  </h3>
                  <p>
                    BPO licensing for software development, technical support,
                    and IT-enabled services.
                  </p>
                </div>

                <div
                  className="feature-card"
                  style={{
                    background:
                      "linear-gradient(135deg, #f8f9fb 0%, #ffffff 100%)",
                  }}
                >
                  <h3>
                    <i
                      className="fas fa-heartbeat"
                      style={{ color: "var(--primary-gold)" }}
                    ></i>{" "}
                    Healthcare BPO
                  </h3>
                  <p>
                    Specialized licensing for medical transcription, billing,
                    and healthcare support services.
                  </p>
                </div>

                <div
                  className="feature-card"
                  style={{
                    background:
                      "linear-gradient(135deg, #f8f9fb 0%, #ffffff 100%)",
                  }}
                >
                  <h3>
                    <i
                      className="fas fa-chart-line"
                      style={{ color: "var(--primary-gold)" }}
                    ></i>{" "}
                    Financial Services
                  </h3>
                  <p>
                    Compliance solutions for banking, insurance, and financial
                    process outsourcing.
                  </p>
                </div>
              </div>

              <h2 id="faq">Frequently Asked Questions</h2>

              <div className="highlight-box">
                <h3>
                  <i className="fas fa-question-circle"></i> What is a BPO
                  license and why is it required?
                </h3>
                <p>
                  A BPO (Business Process Outsourcing) license is a legal
                  requirement for companies providing outsourcing services. It
                  ensures compliance with data protection laws, IT security
                  standards, and business regulations. Operating without the
                  proper license can result in penalties and legal consequences.
                </p>
              </div>

              <div className="highlight-box">
                <h3>
                  <i className="fas fa-question-circle"></i> How long does it
                  take to get a BPO license?
                </h3>
                <p>
                  The processing time for a BPO license typically ranges from 15
                  to 45 working days, depending on the type of BPO services and
                  the completeness of your documentation. Our team works
                  efficiently to expedite the process while ensuring all
                  requirements are met.
                </p>
              </div>

              <div className="highlight-box">
                <h3>
                  <i className="fas fa-question-circle"></i> What are the costs
                  involved in BPO license registration?
                </h3>
                <p>
                  The cost varies based on several factors including the type of
                  BPO services, company structure, and specific compliance
                  requirements. We provide transparent pricing with no hidden
                  fees, starting from ₹25,000 for basic BPO registration.
                </p>
              </div>

              <div className="highlight-box">
                <h3>
                  <i className="fas fa-question-circle"></i> Do I need a
                  physical office to get a BPO license?
                </h3>
                <p>
                  Yes, a registered office space is typically required for BPO
                  license approval. The office should meet certain
                  infrastructure requirements, including IT security measures
                  and adequate space for operations. We can guide you on the
                  specific requirements based on your business model.
                </p>
              </div>

              <div
                className="highlight-box"
                style={{
                  textAlign: "center",
                  background:
                    "linear-gradient(135deg, rgba(28, 41, 81, 0.05) 0%, rgba(212, 175, 55, 0.1) 100%)",
                }}
              >
                <h2>Ready to Start Your BPO Business?</h2>
                <p>
                  Contact us today to schedule a free consultation and discover
                  how our BPO license services can help your business thrive.
                </p>
                <a
                  href="#contact-form"
                  onClick={(e) => smoothScroll(e, "contact-form")}
                  className="btn-primary"
                  style={{ maxWidth: "300px", margin: "20px auto 0" }}
                >
                  <i className="fas fa-paper-plane"></i> Get Started Now
                </a>
              </div>
            </article>

            <aside className="bpo-sidebar">
              <div className="sidebar-card" id="contact-form">
                <div className="sidebar-header">
                  <i className="fas fa-envelope"></i>
                  Request a Free Consultation
                </div>
                <div className="sidebar-content">
                  <form id="bpoContactForm" onSubmit={handleFormSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">
                        Full Name <span style={{ color: "#e53e3e" }}>*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">
                        Email Address{" "}
                        <span style={{ color: "#e53e3e" }}>*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-control"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="business">Business Name</label>
                      <input
                        type="text"
                        id="business"
                        name="business"
                        className="form-control"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="services">Services Interested In</label>
                      <select
                        id="services"
                        name="services"
                        className="form-control"
                      >
                        <option value="">Select a service</option>
                        <option value="bpo-license">
                          BPO License Registration
                        </option>
                        <option value="data-processing">
                          Data Processing License
                        </option>
                        <option value="call-center">Call Center License</option>
                        <option value="compliance">
                          Compliance Management
                        </option>
                        <option value="other">Other Services</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">
                        How Can We Help You?{" "}
                        <span style={{ color: "#e53e3e" }}>*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-control"
                        required
                      ></textarea>
                    </div>

                    <button type="submit" className="btn-primary">
                      <i className="fas fa-paper-plane"></i> Send Message
                    </button>
                  </form>
                </div>
              </div>

              <div className="sidebar-card">
                <div className="sidebar-header">
                  <i className="fas fa-link"></i>
                  Quick Links
                </div>
                <div className="sidebar-content">
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: "10px" }}>
                      <a
                        href="#bpo-heading"
                        onClick={(e) => smoothScroll(e, "bpo-heading")}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          color: "var(--text-primary)",
                          textDecoration: "none",
                          padding: "8px 0",
                          transition: "color 0.2s",
                        }}
                      >
                        <i
                          className="fas fa-chevron-right"
                          style={{
                            color: "var(--primary-gold)",
                            fontSize: "0.8rem",
                          }}
                        ></i>
                        Our Services
                      </a>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <a
                        href="#requirements"
                        onClick={(e) => smoothScroll(e, "requirements")}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          color: "var(--text-primary)",
                          textDecoration: "none",
                          padding: "8px 0",
                          transition: "color 0.2s",
                        }}
                      >
                        <i
                          className="fas fa-chevron-right"
                          style={{
                            color: "var(--primary-gold)",
                            fontSize: "0.8rem",
                          }}
                        ></i>
                        License Requirements
                      </a>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <a
                        href="#process"
                        onClick={(e) => smoothScroll(e, "process")}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          color: "var(--text-primary)",
                          textDecoration: "none",
                          padding: "8px 0",
                          transition: "color 0.2s",
                        }}
                      >
                        <i
                          className="fas fa-chevron-right"
                          style={{
                            color: "var(--primary-gold)",
                            fontSize: "0.8rem",
                          }}
                        ></i>
                        Registration Process
                      </a>
                    </li>
                    <li>
                      <a
                        href="#faq"
                        onClick={(e) => smoothScroll(e, "faq")}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          color: "var(--text-primary)",
                          textDecoration: "none",
                          padding: "8px 0",
                          transition: "color 0.2s",
                        }}
                      >
                        <i
                          className="fas fa-chevron-right"
                          style={{
                            color: "var(--primary-gold)",
                            fontSize: "0.8rem",
                          }}
                        ></i>
                        FAQs
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="sidebar-card">
                <div className="sidebar-header">
                  <i className="fas fa-award"></i>
                  Why Choose Us
                </div>
                <div className="sidebar-content">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: "16px",
                    }}
                  >
                    <div
                      style={{
                        background: "rgba(212, 175, 55, 0.1)",
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginRight: "12px",
                      }}
                    >
                      <i
                        className="fas fa-user-tie"
                        style={{ color: "var(--primary-gold)" }}
                      ></i>
                    </div>
                    <div>
                      <h4
                        style={{
                          margin: "0 0 4px 0",
                          fontSize: "1rem",
                          color: "var(--primary-color)",
                        }}
                      >
                        Expert Team
                      </h4>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "0.85rem",
                          color: "var(--text-secondary)",
                        }}
                      >
                        Certified professionals with years of experience
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: "16px",
                    }}
                  >
                    <div
                      style={{
                        background: "rgba(28, 41, 81, 0.1)",
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginRight: "12px",
                      }}
                    >
                      <i
                        className="fas fa-lock"
                        style={{ color: "var(--primary-color)" }}
                      ></i>
                    </div>
                    <div>
                      <h4
                        style={{
                          margin: "0 0 4px 0",
                          fontSize: "1rem",
                          color: "var(--primary-color)",
                        }}
                      >
                        Data Security
                      </h4>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "0.85rem",
                          color: "var(--text-secondary)",
                        }}
                      >
                        Bank-level encryption for all your business data
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: "16px",
                    }}
                  >
                    <div
                      style={{
                        background: "rgba(212, 175, 55, 0.1)",
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginRight: "12px",
                      }}
                    >
                      <i
                        className="fas fa-headset"
                        style={{ color: "var(--primary-gold)" }}
                      ></i>
                    </div>
                    <div>
                      <h4
                        style={{
                          margin: "0 0 4px 0",
                          fontSize: "1rem",
                          color: "var(--primary-color)",
                        }}
                      >
                        Dedicated Support
                      </h4>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "0.85rem",
                          color: "var(--text-secondary)",
                        }}
                      >
                        Personalized assistance throughout the process
                      </p>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <div
                      style={{
                        background: "rgba(28, 41, 81, 0.1)",
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginRight: "12px",
                      }}
                    >
                      <i
                        className="fas fa-hand-holding-usd"
                        style={{ color: "var(--primary-color)" }}
                      ></i>
                    </div>
                    <div>
                      <h4
                        style={{
                          margin: "0 0 4px 0",
                          fontSize: "1rem",
                          color: "var(--primary-color)",
                        }}
                      >
                        Cost-Effective
                      </h4>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "0.85rem",
                          color: "var(--text-secondary)",
                        }}
                      >
                        Affordable packages for businesses of all sizes
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sidebar-card">
                <div className="sidebar-header">
                  <i className="fas fa-quote-left"></i>
                  Client Testimonial
                </div>
                <div className="sidebar-content">
                  <div
                    style={{
                      position: "relative",
                      padding: "20px",
                      background: "#f8f9fb",
                      borderRadius: "8px",
                      marginBottom: "16px",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "-12px",
                        left: "20px",
                        background: "white",
                        width: "24px",
                        height: "24px",
                        transform: "rotate(45deg)",
                      }}
                    ></div>
                    <p
                      style={{
                        fontStyle: "italic",
                        margin: "0 0 16px 0",
                        color: "var(--text-secondary)",
                      }}
                    >
                      "Mundra Legal's team made our BPO license registration
                      process incredibly smooth. Their attention to detail and
                      proactive approach saved us both time and money."
                    </p>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          background: "var(--primary-gold)",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        AS
                      </div>
                      <div>
                        <div
                          style={{
                            fontWeight: 600,
                            color: "var(--primary-color)",
                          }}
                        >
                          Amit Sharma
                        </div>
                        <div
                          style={{
                            fontSize: "0.8rem",
                            color: "var(--text-muted)",
                          }}
                        >
                          CEO, TechCall Solutions
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "8px",
                      }}
                    >
                      <i
                        className="fas fa-star"
                        style={{ color: "#fbbf24", margin: "0 2px" }}
                      ></i>
                      <i
                        className="fas fa-star"
                        style={{ color: "#fbbf24", margin: "0 2px" }}
                      ></i>
                      <i
                        className="fas fa-star"
                        style={{ color: "#fbbf24", margin: "0 2px" }}
                      ></i>
                      <i
                        className="fas fa-star"
                        style={{ color: "#fbbf24", margin: "0 2px" }}
                      ></i>
                      <i
                        className="fas fa-star"
                        style={{ color: "#fbbf24", margin: "0 2px" }}
                      ></i>
                    </div>
                    <a
                      href="#"
                      style={{
                        color: "var(--primary-color)",
                        fontSize: "0.85rem",
                        textDecoration: "none",
                        fontWeight: 500,
                        display: "inline-flex",
                        alignItems: "center",
                      }}
                    >
                      Read more reviews{" "}
                      <i
                        className="fas fa-arrow-right"
                        style={{ marginLeft: "4px", fontSize: "0.8rem" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </BpoLicenseContainer>
      <Footer />
    </>
  );
};

export default BpoLicense;
