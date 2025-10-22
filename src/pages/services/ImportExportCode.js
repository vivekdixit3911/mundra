import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SidebarForm from "../../components/SidebarForm";
import { ImportExportCodeContainer } from "./ImportExportCode.styles.js";

const ImportExportCode = () => {
  return (
    <>
      <Header />
      <ImportExportCodeContainer>
        <main id="main-content">
          <section className="iec-overview">
            <div className="container">
              <div className="section-header" data-aos="fade-up">
                <h2 className="section-title">Import Export Code Services</h2>
                <p className="section-subtitle">
                  Complete support for international trade and business
                  expansion
                </p>
              </div>

              <div
                className="cards-grid info-cards"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <article className="service-card" data-variant="blue">
                  <div className="card-top">
                    <div className="card-badge" aria-hidden="true">
                      <i className="fas fa-globe"></i>
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">IEC Registration</h3>
                    <p className="card-excerpt">
                      Fast and efficient IEC code registration for import-export
                      business.
                    </p>
                  </div>
                </article>

                <article className="service-card" data-variant="green">
                  <div className="card-top">
                    <div className="card-badge" aria-hidden="true">
                      <i className="fas fa-ship"></i>
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Trade Compliance</h3>
                    <p className="card-excerpt">
                      International trade compliance and regulatory support.
                    </p>
                  </div>
                </article>

                <article className="service-card" data-variant="amber">
                  <div className="card-top">
                    <div className="card-badge" aria-hidden="true">
                      <i className="fas fa-certificate"></i>
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">License Renewal</h3>
                    <p className="card-excerpt">
                      IEC renewal and ongoing compliance support services.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section
            className="enhanced-cta"
            style={{
              padding: "100px 0",
              background:
                "linear-gradient(135deg, #1C2951 0%, #2D4A7C 50%, #3B5A9A 100%)",
              color: "white",
            }}
          >
            <div className="container">
              <div
                className="cta-content"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h2
                  className="cta-title"
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    fontWeight: 800,
                    marginBottom: "1.5rem",
                    background:
                      "linear-gradient(135deg, #ffffff 0%, #3b82f6 50%, #2563eb 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: 1.2,
                  }}
                >
                  Start Your Export Business?
                </h2>
                <p
                  className="cta-subtitle"
                  style={{
                    fontSize: "1.3rem",
                    color: "rgba(255, 255, 255, 0.8)",
                    marginBottom: "3rem",
                    maxWidth: "600px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    lineHeight: 1.6,
                  }}
                >
                  Get your Import Export Code registered and expand your
                  business globally!
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "2rem",
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <a
                    href="../contact"
                    className="pulse-glow"
                    style={{
                      display: "inline-block",
                      padding: "1.2rem 3rem",
                      background: "linear-gradient(135deg, #D4AF37, #E6C57F)",
                      color: "#1C2951",
                      textDecoration: "none",
                      borderRadius: "50px",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      transition: "all 0.3s ease",
                      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                    }}
                  >
                    <i
                      className="fas fa-globe"
                      style={{ marginRight: "0.5rem" }}
                    ></i>
                    Get IEC Code
                  </a>
                  <a
                    href="tel:+918506874280"
                    style={{
                      display: "inline-block",
                      padding: "1.2rem 3rem",
                      background: "rgba(255, 255, 255, 0.1)",
                      color: "white",
                      textDecoration: "none",
                      borderRadius: "50px",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      border: "2px solid rgba(255, 255, 255, 0.3)",
                      backdropFilter: "blur(10px)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <i
                      className="fas fa-phone"
                      style={{ marginRight: "0.5rem" }}
                    ></i>
                    Call Expert
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section style={{ padding: "80px 0", background: "white" }}>
            <div
              className="container"
              style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "0 2rem",
              }}
            >
              <div
                data-aos="fade-up"
                style={{ textAlign: "center", marginBottom: "3rem" }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "80px",
                    height: "80px",
                    background: "linear-gradient(135deg, #D4AF37, #E6C57F)",
                    borderRadius: "20px",
                    marginBottom: "1.5rem",
                    boxShadow: "0 10px 30px rgba(212, 175, 55, 0.3)",
                  }}
                >
                  <svg
                    style={{ width: "40px", height: "40px", color: "#1C2951" }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                  </svg>
                </div>
                <h2
                  style={{
                    fontSize: "clamp(2rem, 4vw, 2.8rem)",
                    fontWeight: 700,
                    marginBottom: "1rem",
                    background:
                      "linear-gradient(135deg, #1C2951 0%, #2D4A7C 50%, #D4AF37 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Understanding Import Export Code (IEC)
                </h2>
                <div
                  style={{
                    width: "80px",
                    height: "4px",
                    background: "linear-gradient(90deg, #D4AF37, #E6C57F)",
                    margin: "0 auto",
                    borderRadius: "2px",
                  }}
                ></div>
              </div>

              <div style={{ display: "grid", gap: "2.5rem" }}>
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  style={{
                    background:
                      "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)",
                    padding: "2.5rem",
                    borderRadius: "20px",
                    borderLeft: "5px solid #D4AF37",
                    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1.5rem",
                    }}
                  >
                    <div
                      style={{
                        flexShrink: 0,
                        width: "50px",
                        height: "50px",
                        background: "linear-gradient(135deg, #D4AF37, #E6C57F)",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 12px rgba(212, 175, 55, 0.3)",
                      }}
                    >
                      <svg
                        style={{
                          width: "24px",
                          height: "24px",
                          color: "white",
                        }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                      <p
                        style={{
                          fontSize: "1.1rem",
                          lineHeight: 1.8,
                          color: "#334155",
                          margin: 0,
                          textAlign: "justify",
                        }}
                      >
                        Import Export Code (IEC) is a unique 10-digit
                        identification number mandatory for businesses engaged
                        in import or export of goods and services. In India, it
                        is issued by the Directorate General of Foreign Trade
                        (DGFT) under the Foreign Trade Policy and serves as a
                        primary identifier for international trade operations.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  style={{
                    background:
                      "linear-gradient(135deg, #FFF9E6 0%, #ffffff 100%)",
                    padding: "2.5rem",
                    borderRadius: "20px",
                    borderLeft: "5px solid #2D4A7C",
                    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1.5rem",
                    }}
                  >
                    <div
                      style={{
                        flexShrink: 0,
                        width: "50px",
                        height: "50px",
                        background: "linear-gradient(135deg, #2D4A7C, #3B5A9A)",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 12px rgba(45, 74, 124, 0.3)",
                      }}
                    >
                      <svg
                        style={{
                          width: "24px",
                          height: "24px",
                          color: "white",
                        }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3
                        style={{
                          fontSize: "1.3rem",
                          fontWeight: 700,
                          color: "#1C2951",
                          marginBottom: "1rem",
                        }}
                      >
                        The Application Process
                      </h3>
                      <p
                        style={{
                          fontSize: "1.1rem",
                          lineHeight: 1.8,
                          color: "#334155",
                          margin: 0,
                          textAlign: "justify",
                        }}
                      >
                        The IEC application process involves online registration
                        on the DGFT portal, filling Aayaat Niryaat Form (ANF
                        2A), uploading required documents including PAN card,
                        bank certificate, photograph, and address proof, and
                        paying the prescribed fees. The process is simple and
                        straightforward, with most applications approved within
                        2-3 working days after submission.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  style={{
                    background:
                      "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)",
                    padding: "2.5rem",
                    borderRadius: "20px",
                    borderLeft: "5px solid #D4AF37",
                    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1.5rem",
                    }}
                  >
                    <div
                      style={{
                        flexShrink: 0,
                        width: "50px",
                        height: "50px",
                        background: "linear-gradient(135deg, #D4AF37, #E6C57F)",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 12px rgba(212, 175, 55, 0.3)",
                      }}
                    >
                      <svg
                        style={{
                          width: "24px",
                          height: "24px",
                          color: "white",
                        }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3
                        style={{
                          fontSize: "1.3rem",
                          fontWeight: 700,
                          color: "#1C2951",
                          marginBottom: "1rem",
                        }}
                      >
                        After Registration
                      </h3>
                      <p
                        style={{
                          fontSize: "1.1rem",
                          lineHeight: 1.8,
                          color: "#334155",
                          margin: 0,
                          textAlign: "justify",
                        }}
                      >
                        Once issued, the IEC code has lifetime validity and does
                        not require renewal. However, businesses must update
                        their IEC details in case of changes in business
                        information. The IEC code is mandatory for customs
                        clearance, availing export benefits, opening foreign
                        currency accounts, and participating in international
                        trade agreements.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-delay="400"
                  style={{
                    background:
                      "linear-gradient(135deg, #1C2951 0%, #2D4A7C 100%)",
                    padding: "2.5rem",
                    borderRadius: "20px",
                    boxShadow: "0 10px 30px rgba(28, 41, 81, 0.3)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-50px",
                      right: "-50px",
                      width: "200px",
                      height: "200px",
                      background:
                        "radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)",
                      borderRadius: "50%",
                    }}
                  ></div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1.5rem",
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    <div
                      style={{
                        flexShrink: 0,
                        width: "50px",
                        height: "50px",
                        background: "linear-gradient(135deg, #D4AF37, #E6C57F)",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 12px rgba(212, 175, 55, 0.4)",
                      }}
                    >
                      <svg
                        style={{
                          width: "24px",
                          height: "24px",
                          color: "#1C2951",
                        }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3
                        style={{
                          fontSize: "1.3rem",
                          fontWeight: 700,
                          color: "#E6C57F",
                          marginBottom: "1rem",
                        }}
                      >
                        How We Help You
                      </h3>
                      <p
                        style={{
                          fontSize: "1.1rem",
                          lineHeight: 1.8,
                          color: "rgba(255, 255, 255, 0.9)",
                          margin: "0 0 1.5rem 0",
                          textAlign: "justify",
                        }}
                      >
                        At Mundra & Associates, we expedite the IEC registration
                        process by providing expert assistance with online
                        application, documentation, and ensuring quick approval.
                        Our experienced international trade consultants help you
                        obtain your IEC code hassle-free and guide you through
                        import-export regulations and compliance requirements.
                      </p>
                      <div
                        style={{
                          display: "flex",
                          gap: "1rem",
                          flexWrap: "wrap",
                        }}
                      >
                        <a
                          href="tel:+918506874280"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            padding: "0.9rem 2rem",
                            background:
                              "linear-gradient(135deg, #D4AF37, #E6C57F)",
                            color: "#1C2951",
                            textDecoration: "none",
                            borderRadius: "50px",
                            fontWeight: 700,
                            transition: "all 0.3s ease",
                            boxShadow: "0 8px 20px rgba(212, 175, 55, 0.4)",
                          }}
                        >
                          <svg
                            style={{
                              width: "18px",
                              height: "18px",
                              marginRight: "0.7rem",
                            }}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                          </svg>
                          Call: +91 85068 74280
                        </a>
                        <a
                          href="../contact"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            padding: "0.9rem 2rem",
                            background: "rgba(255, 255, 255, 0.1)",
                            color: "white",
                            textDecoration: "none",
                            borderRadius: "50px",
                            fontWeight: 700,
                            border: "2px solid #D4AF37",
                            backdropFilter: "blur(10px)",
                            transition: "all 0.3s ease",
                          }}
                        >
                          <svg
                            style={{
                              width: "18px",
                              height: "18px",
                              marginRight: "0.7rem",
                            }}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                          </svg>
                          Get Free Consultation
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </ImportExportCodeContainer>
      <Footer />
    </>
  );
};

export default ImportExportCode;
