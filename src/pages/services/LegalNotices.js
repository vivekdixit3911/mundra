import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import SidebarForm from "../../components/SidebarForm";
import LottieAnimation from "../../components/LottieAnimation";
import "./styles/LegalNotices.css";

const LegalNotices = () => {
  useEffect(() => {
    document.title =
      "Legal Notices & Compliance Services | Mundra Legal Consultants";
  }, []);

  return (
    <>
      <Header />
      <ServiceHero
        title="Legal Notice Services"
        subtitle="Professional Legal Notice Drafting & Response Services"
      />

      <main id="main-content">
        <section className="legal-section" aria-labelledby="legal-heading">
          <div className="legal-container">
            <article className="legal-main">
              <div className="lottie-container">
                <LottieAnimation
                  src="https://assets5.lottiefiles.com/packages/lf20_ndl8h3e1.json"
                  className="lottie-float"
                />
              </div>

              <h1 id="legal-heading">Legal Notice Services</h1>
              <p className="legal-byline">
                Professional Legal Notice Drafting & Response Services
              </p>

              <div className="highlight-box">
                <h3>
                  <i className="fas fa-gavel"></i> Understanding Legal Notices
                </h3>
                <p>
                  A legal notice is a formal written communication between
                  parties that puts forth the grievances and demands of the
                  sender. It serves as an official intimation to the other party
                  about potential legal action if the matter is not resolved
                  amicably. Our expert legal team specializes in drafting
                  comprehensive legal notices that are precise, legally sound,
                  and effective in protecting your rights and interests.
                </p>
              </div>

              <h2>Our Legal Notice Services</h2>
              <p>
                We provide comprehensive legal notice solutions tailored to your
                specific needs. Our services cover all aspects of legal notices,
                from drafting to response and follow-up actions.
              </p>
              <div className="feature-grid">
                <div className="feature-card">
                  <div className="icon-box">
                    <i className="fas fa-file-contract"></i>
                  </div>
                  <h3>Legal Notice Drafting</h3>
                  <p>
                    Professionally drafted legal notices for various purposes
                    including recovery, property disputes, defamation, and
                    breach of contract.
                  </p>
                </div>
                <div className="feature-card">
                  <div className="icon-box">
                    <i className="fas fa-reply"></i>
                  </div>
                  <h3>Notice Response</h3>
                  <p>
                    Strategic responses to legal notices received, protecting
                    your rights and interests while seeking amicable
                    resolutions.
                  </p>
                </div>
                <div className="feature-card">
                  <div className="icon-box">
                    <i className="fas fa-balance-scale"></i>
                  </div>
                  <h3>Legal Consultation</h3>
                  <p>
                    Expert legal advice on the implications of legal notices and
                    the best course of action for your specific situation.
                  </p>
                </div>
              </div>

              <h2>Types of Legal Notices We Handle</h2>
              <div
                className="feature-grid"
                style={{ gridTemplateColumns: "1fr 1fr" }}
              >
                <div className="highlight-box">
                  <h4>
                    <i className="fas fa-rupee-sign"></i> Money Recovery Notices
                  </h4>
                  <p>
                    For recovery of loans, dues, or any outstanding payments.
                  </p>
                </div>
                <div className="highlight-box">
                  <h4>
                    <i className="fas fa-home"></i> Property Dispute Notices
                  </h4>
                  <p>
                    Resolving property disputes, illegal possession, and
                    partition suits.
                  </p>
                </div>
                <div className="highlight-box">
                  <h4>
                    <i className="fas fa-user-shield"></i> Defamation Notices
                  </h4>
                  <p>
                    Protecting your reputation against false statements, libel,
                    or slander.
                  </p>
                </div>
                <div className="highlight-box">
                  <h4>
                    <i className="fas fa-handshake"></i> Breach of Contract
                  </h4>
                  <p>
                    Addressing violations of contractual obligations and seeking
                    remedies.
                  </p>
                </div>
              </div>

              <h2>Our Legal Notice Process</h2>
              <div className="process-steps">
                <div className="step">
                  <div className="step-content">
                    <h3>Initial Consultation & Document Review</h3>
                    <p>
                      We discuss your situation in detail and review all
                      relevant documents to build a strong case.
                    </p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-content">
                    <h3>Drafting the Notice</h3>
                    <p>
                      Our legal experts draft a precise and legally sound
                      notice, stating your grievances and the relief sought.
                    </p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-content">
                    <h3>Client Review & Approval</h3>
                    <p>
                      We provide the draft for your review and make any
                      necessary revisions before finalizing the document.
                    </p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-content">
                    <h3>Dispatch & Follow-up</h3>
                    <p>
                      We serve the notice through registered post with
                      acknowledgment due and follow up on the response.
                    </p>
                  </div>
                </div>
              </div>

              <h2>Frequently Asked Questions</h2>
              <div className="highlight-box">
                <h3>
                  <i className="fas fa-question-circle"></i> What is the purpose
                  of a legal notice?
                </h3>
                <p>
                  A legal notice serves as a formal warning to the recipient
                  that the sender is considering legal action. It provides an
                  opportunity to resolve the dispute without going to court.
                </p>
              </div>
              <div className="highlight-box">
                <h3>
                  <i className="fas fa-question-circle"></i> Is it mandatory to
                  send a legal notice before filing a case?
                </h3>
                <p>
                  In many civil cases, it is a legal requirement to send a
                  notice before filing a suit. Even when not mandatory, it is
                  advisable as it shows the court an attempt was made to settle
                  the matter amicably.
                </p>
              </div>
              <div className="highlight-box">
                <h3>
                  <i className="fas fa-question-circle"></i> What should I do if
                  I receive a legal notice?
                </h3>
                <p>
                  Do not ignore it. Contact a lawyer immediately to understand
                  your legal position and draft an appropriate reply within the
                  stipulated time frame.
                </p>
              </div>
            </article>

            <aside className="legal-sidebar">
              <SidebarForm />
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default LegalNotices;
