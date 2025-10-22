import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import SidebarForm from "../../components/SidebarForm";
import LottieAnimation from "../../components/LottieAnimation";
import "./styles/ItrFiling.css";

const ItrFiling = () => {
  useEffect(() => {
    document.title = "ITR Filing Services | Mundra Legal Consultants";
  }, []);

  return (
    <>
      <Header />
      <ServiceHero
        title="ITR Filing Services"
        subtitle="Comprehensive guidance for filing your Income Tax Return"
      />

      <main id="main-content">
        <section className="itr-section" aria-labelledby="itr-heading">
          <div className="itr-container">
            <article className="itr-main">
              <h1 id="itr-heading">Income Tax Return (ITR) Filing Services</h1>
              <div className="byline">
                Comprehensive Guidance for Filing Your Income Tax Return —
                accurate, compliant, and stress-free
              </div>

              <div className="section-lottie">
                <LottieAnimation src="https://assets10.lottiefiles.com/packages/lf20_j2pcck2v.json" />
              </div>

              <p>
                Filing your Income Tax Return (ITR) is not just a legal
                responsibility — it’s a crucial part of managing your personal
                and business finances. At Mundra Legal Consultants, our
                Chartered Accountants and tax professionals ensure your ITR
                filing is accurate, compliant and optimised.
              </p>

              <h2>Understanding Income Tax Return (ITR) Filing</h2>
              <p>
                An Income Tax Return (ITR) is a document submitted to the
                Government of India declaring your total income, deductions and
                taxes paid during a financial year. Filing your return annually
                is mandatory if your income exceeds the prescribed exemption
                limit or if you meet certain prescribed conditions.
              </p>

              <h2>Major Sources of Income</h2>
              <div className="feature-grid">
                <div className="feature-card small-animate">
                  <i
                    className="fas fa-briefcase"
                    style={{ color: "var(--primary-gold)" }}
                  ></i>
                  <h4>Income from Salary</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Wages, allowances, bonuses, leave encashments and pensions.
                  </p>
                </div>
                <div className="feature-card small-animate">
                  <i
                    className="fas fa-home"
                    style={{ color: "var(--primary-gold)" }}
                  ></i>
                  <h4>Income from House Property</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Rental income or deemed rent from owned properties.
                  </p>
                </div>
                <div className="feature-card small-animate">
                  <i
                    className="fas fa-chart-line"
                    style={{ color: "var(--primary-gold)" }}
                  ></i>
                  <h4>Profits & Gains from Business/Profession</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Applicable to freelancers, consultants, professionals and
                    business owners.
                  </p>
                </div>
                <div className="feature-card small-animate">
                  <i
                    className="fas fa-coins"
                    style={{ color: "var(--primary-gold)" }}
                  ></i>
                  <h4>Capital Gains</h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: "6px 0 0",
                    }}
                  >
                    Earnings from sale of shares, mutual funds, land or
                    buildings.
                  </p>
                </div>
              </div>

              <h2>Advantages of Filing with Mundra Legal</h2>
              <ul>
                <li>
                  <strong>Refunds Made Simple:</strong> Claim excess tax paid
                  directly to your account.
                </li>
                <li>
                  <strong>Financial Legitimacy:</strong> ITR acts as income
                  proof for loans, visas and mortgages.
                </li>
                <li>
                  <strong>Avoid Penalties:</strong> Timely filing prevents fines
                  under Section 234F and interest under 234A.
                </li>
                <li>
                  <strong>Carry Forward Losses:</strong> Set off business or
                  capital losses against future profits.
                </li>
                <li>
                  <strong>Peace of Mind:</strong> Secure data handling and
                  expert validation.
                </li>
              </ul>

              <h2>Documents Required</h2>
              <div className="highlight-box">
                <h3>
                  <i className="fas fa-file-alt"></i>For Salaried Employees
                </h3>
                <p>
                  PAN, Aadhaar, Form 16, salary slips, bank statements,
                  investment proofs (ELSS/LIC/PPF), rent receipts (for HRA).
                </p>
              </div>
              <div className="highlight-box">
                <h3>
                  <i className="fas fa-briefcase"></i>For Business or
                  Self-Employed
                </h3>
                <p>
                  GST returns, profit & loss statements, balance sheet, bank
                  statements, Form 26AS (tax credit statement).
                </p>
              </div>

              <h2>Types of ITR Forms</h2>
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Form</th>
                    <th>Applicable For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ITR-1</td>
                    <td>Salaried individuals with income ≤ ₹50 lakh</td>
                  </tr>
                  <tr>
                    <td>ITR-2</td>
                    <td>
                      Individuals with multiple properties or capital gains
                    </td>
                  </tr>
                  <tr>
                    <td>ITR-3</td>
                    <td>Professionals and business owners</td>
                  </tr>
                  <tr>
                    <td>ITR-4</td>
                    <td>Presumptive income taxpayers</td>
                  </tr>
                  <tr>
                    <td>ITR-5</td>
                    <td>Partnership firms, LLPs</td>
                  </tr>
                  <tr>
                    <td>ITR-6</td>
                    <td>Companies (not claiming Section 11 exemptions)</td>
                  </tr>
                  <tr>
                    <td>ITR-7</td>
                    <td>Trusts, NGOs, political parties</td>
                  </tr>
                </tbody>
              </table>

              <h2>Fees & Pricing (Indicative)</h2>
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Indicative Fee (INR)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Salaried ITR (ITR-1) — Basic</td>
                    <td>₹999</td>
                  </tr>
                  <tr>
                    <td>Salaried with investments / HRA (ITR-1/2)</td>
                    <td>₹1,999</td>
                  </tr>
                  <tr>
                    <td>Self-employed / Business (ITR-3/4)</td>
                    <td>₹3,999 — ₹8,999 (depending on complexity)</td>
                  </tr>
                  <tr>
                    <td>Company / LLP filings (ITR-6/5)</td>
                    <td>Custom quote</td>
                  </tr>
                  <tr>
                    <td>Belated / Revised filing</td>
                    <td>₹1,499 — ₹4,999</td>
                  </tr>
                </tbody>
              </table>

              <h2>FAQs</h2>
              <div className="highlight-box">
                <h3>Can I file without Form 16?</h3>
                <p>
                  Yes — we can compute income using salary slips, bank
                  statements and Form 26AS.
                </p>
              </div>
              <div className="highlight-box">
                <h3>How do NRIs file?</h3>
                <p>
                  NRIs can file online using Indian income details and
                  coordinate with our team for verifications and signatures.
                </p>
              </div>

              <div style={{ textAlign: "center", marginTop: "18px" }}>
                <a
                  href="#itr-contact-form"
                  className="btn-primary"
                  style={{ maxWidth: "300px" }}
                >
                  Start Filing Your ITR
                </a>
              </div>
            </article>

            <aside className="itr-sidebar">
              <div id="itr-contact-form">
                <SidebarForm />
              </div>

              <div className="sidebar-card">
                <h4
                  style={{ margin: "0 0 8px 0", color: "var(--primary-color)" }}
                >
                  Estimated Turnaround
                </h4>
                <p
                  style={{
                    margin: "0 0 8px 0",
                    color: "var(--text-secondary)",
                  }}
                >
                  Document collection & expert review: 2–5 business days. Filing
                  & verification: 1–3 business days (post documents &
                  e-verification).
                </p>
              </div>

              <div className="sidebar-card">
                <div style={{ marginBottom: "12px" }}>
                  <LottieAnimation src="https://assets4.lottiefiles.com/packages/lf20_0yfsb3a1.json" />
                </div>
                <div style={{ fontWeight: 700, color: "var(--primary-color)" }}>
                  Secure Portal
                </div>
                <div
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.95rem",
                    marginTop: "8px",
                  }}
                >
                  Upload documents safely; we use end-to-end encryption.
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ItrFiling;
