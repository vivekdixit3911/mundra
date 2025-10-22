import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LottieAnimation from "../../components/LottieAnimation";
import { GstReturnsContainer } from "./GstReturns.styles.js";

const GstRegistrationAndReturns = () => {
  return (
    <>
      <Header />
      <GstReturnsContainer>
        <main id="main-content">
          <section className="legal-overview">
            <div className="container">
              <div className="section-header" data-aos="fade-up">
                <div className="service-badge">
                  Complete GST Compliance
                </div>
                <div className="hero-content">
                  <div className="hero-text">
                    <h2 className="gradient-text">
                      GST Return Filing Services
                    </h2>
                    <p className="hero-description">
                      Expert GST compliance solutions covering all legal
                      requirements, documentation, and timely filing procedures as
                      per the Goods and Services Tax Act, 2017
                    </p>
                  </div>
                  <div className="hero-animation">
                    <LottieAnimation
                      src="/assets/Drafts/Business%20analytics%20animation.json"
                      width="250px"
                      height="250px"
                    />
                  </div>
                </div>
              </div>

              <div
                style={{ textAlign: "center", marginBottom: "4rem" }}
                data-aos="fade-up"
              >
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(26, 54, 93, 0.1), rgba(16, 185, 129, 0.1))",
                    padding: "3rem",
                    borderRadius: "20px",
                    marginBottom: "3rem",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80) center/cover",
                      opacity: 0.1,
                      borderRadius: "20px",
                    }}
                  ></div>
                  <div style={{ position: "relative", zIndex: 2 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "2rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <div style={{ textAlign: "center" }}>
                        <div style={{ margin: "0 auto 1rem" }}>
                          <LottieAnimation
                            src="/assets/Drafts/Investment.json"
                            width="80px"
                            height="80px"
                          />
                        </div>
                        <h3
                          style={{
                            color: "var(--primary-color)",
                            fontSize: "1.5rem",
                            fontWeight: 700,
                            margin: 0,
                          }}
                        >
                          Tax Calculation
                        </h3>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <div style={{ margin: "0 auto 1rem" }}>
                          <LottieAnimation
                            src="/assets/Drafts/registration.json"
                            width="80px"
                            height="80px"
                          />
                        </div>
                        <h3
                          style={{
                            color: "var(--primary-color)",
                            fontSize: "1.5rem",
                            fontWeight: 700,
                            margin: 0,
                          }}
                        >
                          Online Filing
                        </h3>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <div style={{ margin: "0 auto 1rem" }}>
                          <LottieAnimation
                            src="/assets/Drafts/Business%20team.json"
                            width="80px"
                            height="80px"
                          />
                        </div>
                        <h3
                          style={{
                            color: "var(--primary-color)",
                            fontSize: "1.5rem",
                            fontWeight: 700,
                            margin: 0,
                          }}
                        >
                          Compliance
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "2rem",
                  marginBottom: "4rem",
                }}
              >
                <div
                  className="info-card"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  style={{
                    background: "white",
                    padding: "2rem",
                    borderRadius: "20px",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                    border: "1px solid #e2e8f0",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-20px",
                      right: "-20px",
                      width: "100px",
                      height: "100px",
                      background:
                        "url(https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80) center/cover",
                      opacity: 0.1,
                      borderRadius: "50%",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      marginBottom: "1.5rem",
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    <LottieAnimation
                      src="/assets/Drafts/light%20bulb.json"
                      width="50px"
                      height="50px"
                    />
                  </div>
                  <h3
                    style={{
                      color: "var(--primary-color)",
                      marginBottom: "1rem",
                      fontSize: "1.3rem",
                      fontWeight: 600,
                    }}
                  >
                    Legal Framework
                  </h3>
                  <p
                    style={{
                      color: "#64748b",
                      lineHeight: 1.6,
                      margin: 0,
                      fontSize: "0.95rem",
                    }}
                  >
                    <strong>GST Act 2017:</strong> Complete compliance with
                    Central Goods and Services Tax Act, 2017, State GST Acts,
                    and Integrated GST Act as amended from time to time.
                  </p>
                </div>

                <div
                  className="info-card"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  style={{
                    background: "white",
                    padding: "2rem",
                    borderRadius: "20px",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                    border: "1px solid #e2e8f0",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-20px",
                      right: "-20px",
                      width: "100px",
                      height: "100px",
                      background:
                        "url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80) center/cover",
                      opacity: 0.1,
                      borderRadius: "50%",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      marginBottom: "1.5rem",
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    <LottieAnimation
                      src="/assets/Drafts/FAQ%20web%20page.json"
                      width="50px"
                      height="50px"
                    />
                  </div>
                  <h3
                    style={{
                      color: "var(--primary-color)",
                      marginBottom: "1rem",
                      fontSize: "1.3rem",
                      fontWeight: 600,
                    }}
                  >
                    Regulatory Compliance
                  </h3>
                  <p
                    style={{
                      color: "#64748b",
                      lineHeight: 1.6,
                      margin: 0,
                      fontSize: "0.95rem",
                    }}
                  >
                    <strong>CBIC Guidelines:</strong> Adherence to Central Board
                    of Indirect Taxes and Customs notifications, circulars, and
                    procedural guidelines for seamless compliance.
                  </p>
                </div>

                <div
                  className="info-card"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  style={{
                    background: "white",
                    padding: "2rem",
                    borderRadius: "20px",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                    border: "1px solid #e2e8f0",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <LottieAnimation
                      src="/assets/Drafts/Business.json"
                      width="50px"
                      height="50px"
                    />
                  </div>
                  <h3
                    style={{
                      color: "var(--primary-color)",
                      marginBottom: "1rem",
                      fontSize: "1.3rem",
                      fontWeight: 600,
                    }}
                  >
                    Penalty Protection
                  </h3>
                  <p
                    style={{
                      color: "#64748b",
                      lineHeight: 1.6,
                      margin: 0,
                      fontSize: "0.95rem",
                    }}
                  >
                    <strong>Risk Mitigation:</strong> Professional filing to
                    avoid penalties under Section 47, late fees under Section
                    47, and interest charges under Section 50 of GST Act.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </GstReturnsContainer>
      <Footer />
    </>
  );
};

export default GstRegistrationAndReturns;
