import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import SidebarForm from "../../components/SidebarForm";

import { PageContent } from "./ServicePage.styles.js";

const FranchiseAgreement = () => {
  return (
    <>
      <Header />
      <ServiceHero
        title="Franchise Agreement"
        subtitle="Drafting, negotiating and reviewing franchise agreements across India."
        breadcrumb="Franchise Agreement"
      />

      <PageContent>
        <div className="wpc-container">
          <main className="wpc-main">
            <h1 className="playfair">Franchise Agreement Services</h1>
            <p className="wpc-byline">
              We draft practical and enforceable franchise agreements that protect
              your brand, define territory and commercial terms, and reduce
              future disputes.
            </p>

            <h2>What we cover</h2>
            <ul>
              <li>Drafting franchise agreements (single-unit & multi-unit)</li>
              <li>Territory & exclusivity clauses</li>
              <li>Fees, royalties and payment mechanisms</li>
              <li>Training & operational manuals, IP licensing</li>
              <li>Quality control and audit rights</li>
              <li>Termination, assignment and dispute resolution</li>
            </ul>

            <div className="callout">
              <strong>Tip:</strong> A clear franchise agreement prevents most
              downstream litigation — we aim to balance commercial flexibility
              with enforceable protections.
            </div>

            <h2>Benefits of a professionally drafted agreement</h2>
            <div className="feature-grid">
              <div className="feature-card">
                <h4>Protect your brand</h4>
                <p>
                  Licensed usage terms and IP safeguards keep brand consistency
                  and prevent unauthorised use.
                </p>
              </div>
              <div className="feature-card">
                <h4>Clear commercial terms</h4>
                <p>
                  Royalties, upfront fees and payment structures tailored for
                  your business model.
                </p>
              </div>
              <div className="feature-card">
                <h4>Operational clarity</h4>
                <p>
                  Well-defined SOPs, training obligations and quality control
                  reduce friction between franchisor and franchisee.
                </p>
              </div>
            </div>

            <h2>Typical Process</h2>
            <ol>
              <li>Initial consultation & information gathering</li>
              <li>Drafting commercial and IP schedules</li>
              <li>Review & negotiation with counterparty</li>
              <li>Finalisation, execution and registration (if required)</li>
              <li>Post-execution support (compliance & enforcement)</li>
            </ol>

            <h2>Documents typically required</h2>
            <ul>
              <li>Proof of identity and address of parties</li>
              <li>Existing brand and trademark details</li>
              <li>Proposed territory and commercial term sheet</li>
              <li>Operations manual or sample SOPs (if available)</li>
            </ul>

            <h2>Frequently Asked Questions</h2>
            <h3>Do I need to register the franchise agreement?</h3>
            <p>
              Franchise agreements are contracts. There is no special central
              registry but certain transactions (like stamping) are governed by
              local Stamp Acts — we advise and assist with stamping and
              compliance for enforceability.
            </p>

            <h3>Can I transfer a franchise?</h3>
            <p>
              Assignment clauses are negotiated in the agreement. We draft clear
              assignment and transfer rules to protect your business.
            </p>
          </main>

          <aside className="wpc-sidebar">
            <div className="sidebar-scroll-wrapper">
              <SidebarForm />
            </div>
          </aside>
        </div>
      </PageContent>

      <Footer />
    </>
  );
};

export default FranchiseAgreement;
