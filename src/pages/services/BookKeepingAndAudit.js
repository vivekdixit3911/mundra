import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import { BookKeepingAndAuditContainer } from "./BookKeepingAndAudit.styles.js";

const LinkStyledButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 0;
  font: inherit;
  text-decoration: underline;

  &:hover {
    color: #D4AF37;
  }
`;

const BookKeepingAndAudit = () => {
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
        top: targetElement.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <>
      <Header />
      <ServiceHero
        title="Bookkeeping & Audit"
        subtitle="Professional financial record-keeping, tax compliance, and audit solutions."
        breadcrumb="Bookkeeping & Audit"
      />
      <BookKeepingAndAuditContainer>
        <section
          className="bookkeeping-section"
          aria-labelledby="bookkeeping-heading"
        >
          <div className="bookkeeping-container">
            <article className="bookkeeping-main">
              <div className="hero-animation">
                <lottie-player
                  src="https://assets5.lottiefiles.com/packages/lf20_ndl8h3e1.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </div>

              <h1 id="bookkeeping-heading">
                Professional Bookkeeping & Audit Services
              </h1>
              <p className="bookkeeping-byline">
                Comprehensive Financial Management Solutions for Your Business
              </p>

              <div className="highlight-box">
                <h3>
                  <i className="fas fa-chart-line"></i> Why Professional
                  Bookkeeping Matters
                </h3>
                <p>
                  Accurate bookkeeping is the backbone of any successful
                  business. Our expert bookkeeping services ensure that your
                  financial records are meticulously maintained, giving you
                  clear insights into your business performance and ensuring
                  compliance with regulatory requirements. With our professional
                  audit services, you can have confidence in the accuracy and
                  reliability of your financial statements.
                </p>
              </div>

              <h2>Our Bookkeeping & Audit Services</h2>
              <p>
                We offer a comprehensive range of financial services designed to
                meet the unique needs of your business. Our team of certified
                professionals is dedicated to providing accurate, timely, and
                insightful financial information to support your business
                decisions.
              </p>

              <div className="feature-grid">
                <div className="feature-card animate-fade-in-up delay-100">
                  <div className="icon-box">
                    <i className="fas fa-book"></i>
                  </div>
                  <h3>Daily Bookkeeping</h3>
                  <p>
                    Accurate recording of daily financial transactions including
                    sales, purchases, receipts, and payments to maintain
                    up-to-date financial records.
                  </p>
                </div>

                <div className="feature-card animate-fade-in-up delay-200">
                  <div className="icon-box">
                    <i className="fas fa-file-invoice-dollar"></i>
                  </div>
                  <h3>Accounts Payable/Receivable</h3>
                  <p>
                    Efficient management of your payables and receivables to
                    maintain healthy cash flow and vendor/customer
                    relationships.
                  </p>
                </div>

                <div className="feature-card animate-fade-in-up delay-300">
                  <div className="icon-box">
                    <i className="fas fa-calculator"></i>
                  </div>
                  <h3>Financial Reporting</h3>
                  <p>
                    Preparation of accurate financial statements including
                    balance sheets, income statements, and cash flow statements
                    for better decision-making.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="icon-box">
                    <i className="fas fa-search-dollar"></i>
                  </div>
                  <h3>Statutory Audits</h3>
                  <p>
                    Independent examination of financial statements to ensure
                    accuracy and compliance with accounting standards and
                    regulations.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="icon-box">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <h3>Internal Audits</h3>
                  <p>
                    Evaluation of internal controls, risk management, and
                    governance processes to improve operational efficiency and
                    effectiveness.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="icon-box">
                    <i className="fas fa-file-contract"></i>
                  </div>
                  <h3>Tax Compliance</h3>
                  <p>
                    Ensuring compliance with all tax regulations including GST,
                    TDS, and income tax filing requirements to avoid penalties.
                  </p>
                </div>
              </div>

              <div className="highlight-box">
                <h3>
                  <i className="fas fa-star"></i> Why Choose Our Bookkeeping &
                  Audit Services?
                </h3>
                <ul>
                  <li>
                    <strong>Certified Professionals:</strong> Our team consists
                    of qualified chartered accountants and certified public
                    accountants with extensive industry experience.
                  </li>
                  <li>
                    <strong>Advanced Technology:</strong> We leverage the latest
                    accounting software and tools to ensure accuracy and
                    efficiency in all our services.
                  </li>
                  <li>
                    <strong>Customized Solutions:</strong> We understand that
                    every business is unique, which is why we tailor our
                    services to meet your specific needs.
                  </li>
                  <li>
                    <strong>Timely Delivery:</strong> We value your time and
                    ensure that all financial reports and filings are completed
                    within the stipulated deadlines.
                  </li>
                  <li>
                    <strong>Confidentiality:</strong> We maintain the highest
                    level of confidentiality with all client information and
                    financial data.
                  </li>
                </ul>
              </div>

              <h2 id="audit-process">Our Audit Process</h2>
              <p>
                Our comprehensive audit process is designed to provide you with
                valuable insights into your financial operations while ensuring
                compliance with all regulatory requirements.
              </p>

              <div
                className="feature-grid"
                style={{ gridTemplateColumns: "1fr" }}
              >
                <div className="feature-card">
                  <div
                    className="icon-box"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(28, 41, 81, 0.1) 0%, rgba(212, 175, 55, 0.2) 100%)",
                    }}
                  >
                    <i
                      className="fas fa-clipboard-list"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                  </div>
                  <h3>1. Planning & Preparation</h3>
                  <p>
                    We begin by understanding your business operations, internal
                    controls, and financial reporting processes. This helps us
                    identify key risk areas and develop an effective audit
                    strategy tailored to your organization.
                  </p>
                </div>

                <div className="feature-card">
                  <div
                    className="icon-box"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(28, 41, 81, 0.1) 0%, rgba(212, 175, 55, 0.2) 100%)",
                    }}
                  >
                    <i
                      className="fas fa-search"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                  </div>
                  <h3>2. Fieldwork & Testing</h3>
                  <p>
                    Our team conducts detailed testing of transactions, account
                    balances, and internal controls. We gather sufficient and
                    appropriate audit evidence to form our opinion on the
                    financial statements.
                  </p>
                </div>

                <div className="feature-card">
                  <div
                    className="icon-box"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(28, 41, 81, 0.1) 0%, rgba(212, 175, 55, 0.2) 100%)",
                    }}
                  >
                    <i
                      className="fas fa-chart-pie"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                  </div>
                  <h3>3. Analysis & Reporting</h3>
                  <p>
                    We analyze the findings from our audit procedures and
                    prepare detailed reports highlighting any issues identified,
                    along with recommendations for improvement.
                  </p>
                </div>

                <div className="feature-card">
                  <div
                    className="icon-box"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(28, 41, 81, 0.1) 0%, rgba(212, 175, 55, 0.2) 100%)",
                    }}
                  >
                    <i
                      className="fas fa-handshake"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                  </div>
                  <h3>4. Follow-up & Support</h3>
                  <p>
                    Our relationship doesn't end with the audit report. We
                    provide ongoing support to help you implement our
                    recommendations and address any questions or concerns that
                    may arise.
                  </p>
                </div>
              </div>

              <h2 id="industry-solutions">Industry-Specific Solutions</h2>
              <p>
                We understand that different industries have unique accounting
                and compliance requirements. Our team has experience serving
                clients across various sectors, including:
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
                      className="fas fa-store"
                      style={{ color: "var(--primary-gold)" }}
                    ></i>{" "}
                    Retail & E-commerce
                  </h3>
                  <p>
                    Inventory management, sales tax compliance, and financial
                    reporting tailored for retail businesses.
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
                    Technology Startups
                  </h3>
                  <p>
                    Financial modeling, investor reporting, and compliance for
                    high-growth technology companies.
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
                      className="fas fa-hammer"
                      style={{ color: "var(--primary-gold)" }}
                    ></i>{" "}
                    Manufacturing
                  </h3>
                  <p>
                    Cost accounting, inventory valuation, and production cost
                    analysis for manufacturers.
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
                    Healthcare
                  </h3>
                  <p>
                    Medical billing, insurance claims processing, and
                    healthcare-specific financial reporting.
                  </p>
                </div>
              </div>

              <h2 id="faq">Frequently Asked Questions</h2>

              <div className="highlight-box">
                <h3>
                  <i className="fas fa-question-circle"></i> What is the
                  difference between bookkeeping and accounting?
                </h3>
                <p>
                  Bookkeeping involves the daily recording of financial
                  transactions, while accounting involves interpreting,
                  classifying, analyzing, reporting, and summarizing financial
                  data. Bookkeeping is the foundation of the accounting process,
                  while accounting provides insights and analysis based on
                  bookkeeping data.
                </p>
              </div>

              <div className="highlight-box">
                <h3>
                  <i className="fas fa-question-circle"></i> How often should I
                  update my books?
                </h3>
                <p>
                  For most businesses, we recommend updating books at least
                  monthly. However, businesses with high transaction volumes or
                  specific compliance requirements may need weekly or even daily
                  updates. Regular bookkeeping helps in better cash flow
                  management and timely decision-making.
                </p>
              </div>

              <div className="highlight-box">
                <h3>
                  <i className="fas fa-question-circle"></i> What documents do I
                  need to provide for bookkeeping?
                </h3>
                <p>
                  Common documents include bank statements, invoices, receipts,
                  payroll records, tax returns, and any other financial
                  documents related to your business transactions. We'll provide
                  you with a detailed checklist based on your specific business
                  needs.
                </p>
              </div>

              <div className="highlight-box">
                <h3>
                  <i className="fas fa-question-circle"></i> How can
                  professional bookkeeping help my business grow?
                </h3>
                <p>
                  Professional bookkeeping provides accurate financial data that
                  helps in making informed business decisions, securing funding,
                  managing cash flow effectively, ensuring tax compliance, and
                  identifying areas for cost savings and revenue growth
                  opportunities.
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
                <h2>Ready to Streamline Your Financial Operations?</h2>
                <p>
                  Contact us today to schedule a free consultation and discover
                  how our bookkeeping and audit services can help your business
                  thrive.
                </p>
                <LinkStyledButton
                  onClick={(e) => smoothScroll(e, "contact-form")}
                  className="btn-primary"
                  style={{ maxWidth: "300px", margin: "20px auto 0" }}
                >
                  <i className="fas fa-paper-plane"></i> Get Started Now
                </LinkStyledButton>
              </div>
            </article>

            <aside className="bookkeeping-sidebar">
              <div className="sidebar-card" id="contact-form">
                <div className="sidebar-header">
                  <i className="fas fa-envelope"></i>
                  Request a Free Consultation
                </div>
                <div className="sidebar-content">
                  <form id="bookkeepingContactForm" onSubmit={handleFormSubmit}>
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
                        <option value="bookkeeping">
                          Bookkeeping Services
                        </option>
                        <option value="financial-reporting">
                          Financial Reporting
                        </option>
                        <option value="statutory-audit">Statutory Audit</option>
                        <option value="internal-audit">Internal Audit</option>
                        <option value="tax-compliance">Tax Compliance</option>
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
                      <LinkStyledButton
                        onClick={(e) => smoothScroll(e, "bookkeeping-heading")}
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
                      </LinkStyledButton>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <LinkStyledButton
                        onClick={(e) => smoothScroll(e, "audit-process")}
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
                        Audit Process
                      </LinkStyledButton>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <LinkStyledButton
                        onClick={(e) => smoothScroll(e, "industry-solutions")}
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
                        Industry Solutions
                      </LinkStyledButton>
                    </li>
                    <li>
                      <LinkStyledButton
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
                      </LinkStyledButton>
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
                        Bank-level encryption for all your financial data
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
                        Personalized assistance whenever you need it
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
                      "Mundra Legal's bookkeeping team has been instrumental in
                      helping us streamline our financial operations. Their
                      attention to detail and proactive approach has saved us
                      both time and money."
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
                        RS
                      </div>
                      <div>
                        <div
                          style={{
                            fontWeight: 600,
                            color: "var(--primary-color)",
                          }}
                        >
                          Rajesh Sharma
                        </div>
                        <div
                          style={{
                            fontSize: "0.8rem",
                            color: "var(--text-muted)",
                          }}
                        >
                          CEO, TechNova Solutions
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
                    <LinkStyledButton
                      onClick={handleClick}
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
                    </LinkStyledButton>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </BookKeepingAndAuditContainer>
      <Footer />
    </>
  );
};

export default BookKeepingAndAudit;
