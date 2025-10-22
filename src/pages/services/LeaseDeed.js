import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import SidebarForm from "../../components/SidebarForm";
import LottieAnimation from "../../components/LottieAnimation";
import "./styles/LeaseDeed.css";

const LeaseDeed = () => {
  useEffect(() => {
    document.title =
      "Lease and Rent Agreement Services | Mundra Legal Consultants";
  }, []);

  return (
    <>
      <Header />
      <ServiceHero
        title="Lease & Rent Agreement Services"
        subtitle="Expert Legal Services for Drafting, Reviewing & Registering Lease Agreements in India"
      />

      <main id="main-content">
        <section
          id="lease-content"
          className="lease-section"
          aria-labelledby="lease-heading"
        >
          <div className="lease-container">
            <article className="lease-main">
              <h1 id="lease-heading">
                Lease & Rent Agreement Services in India
              </h1>
              <p className="lease-byline">
                Complete Legal Guide by Mundra Legal Consultants
              </p>

              <div className="section-lottie">
                <LottieAnimation src="https://lottie.host/297c24ce-8977-4a9a-97c0-2cc005016993/4KX0MA0YAd.lottie" />
              </div>

              <p>
                A <strong>Lease Agreement</strong> or{" "}
                <strong>Rent Agreement</strong> is a legally binding contract
                between a landlord (lessor) and a tenant (lessee) that outlines
                the terms and conditions under which a property is rented. It
                serves as crucial protection for both parties and defines
                rights, responsibilities, rent amount, duration, and other
                important conditions.
              </p>

              <p>
                At <strong>Mundra Legal Consultants</strong>, we provide
                comprehensive lease and rent agreement services across India —
                from drafting customized agreements to registration, renewal,
                and dispute resolution.
              </p>

              <h2 id="what-is">What is a Lease Agreement</h2>
              <p>
                A lease agreement is a legal document defining property rental
                terms. Key types include residential lease, commercial lease,
                leave and license, and sublease agreements.
              </p>

              <div className="callout">
                <p>
                  <strong>Important:</strong> Lease agreements exceeding 11
                  months must be registered under the Registration Act, 1908.
                </p>
              </div>

              <h2 id="legal-framework">Legal Framework</h2>
              <p>
                Governed by the Transfer of Property Act 1882, Registration Act
                1908, Indian Contract Act 1872, and state-specific rent control
                laws.
              </p>

              <h2 id="types">Types of Lease Agreements</h2>
              <p>
                We handle all types: residential, commercial, industrial, leave
                and license, sublease, and specialized rental agreements.
              </p>

              <h2 id="clauses">Essential Clauses</h2>
              <p>
                Every lease should include party details, property description,
                tenure, rent amount, security deposit, maintenance terms, and
                termination conditions.
              </p>

              <h2 id="documents">Documents Required</h2>
              <p>
                ID proofs, address proofs, property documents, NOCs, PAN cards,
                and bank details from both parties.
              </p>

              <h2 id="process">Registration Process</h2>
              <p>
                We assist with drafting, review, stamp duty payment, execution,
                and registration at Sub-Registrar's office.
              </p>

              <h2 id="stamp-duty">Stamp Duty & Fees</h2>
              <p>
                Stamp duty varies by state (2-7% of annual rent). Registration
                fees typically ₹500-5000.
              </p>

              <h2 id="benefits">Benefits</h2>
              <p>
                Legal protection, evidence in disputes, clarity on terms,
                enforceability, and peace of mind for both parties.
              </p>

              <h2 id="faqs">FAQs</h2>
              <div className="highlight-box">
                <h3>Is registration mandatory?</h3>
                <p>
                  Yes, for leases exceeding 11 months as per Registration Act,
                  1908.
                </p>
              </div>

              <div className="highlight-box">
                <h3>What is stamp duty?</h3>
                <p>
                  State tax on lease documents, typically 2-7% of annual rent
                  value.
                </p>
              </div>

              <div className="callout">
                <p style={{ textAlign: "center" }}>
                  <strong>
                    Contact Mundra Legal Consultants today for expert lease
                    agreement services!
                  </strong>
                </p>
              </div>
            </article>

            <aside className="lease-sidebar" aria-label="Contact form">
              <SidebarForm />
              <div className="contact-card" style={{ marginTop: "24px" }}>
                <LottieAnimation src="https://lottie.host/b7e8e1e3-76d9-4d73-86f4-6f2c7d3b5e8f/Q6UVKy8YGh.lottie" />
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default LeaseDeed;
