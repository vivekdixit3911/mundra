import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Wrapper = styled.main`
  max-width: 1000px;
  margin: 3.5rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(2,6,23,0.06);

  h1 {
    font-family: "Playfair Display", serif;
    color: #1c2951;
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 0.5rem 1rem;
  }

  li {
    padding: 0.4rem 0.6rem;
    border-radius: 6px;
    transition: background 0.15s ease;

    a {
      color: #1c2951;
      text-decoration: none;
      font-weight: 600;
    }

    &:hover { background: #f8fafc; }
  }
`;

const Sitemap = () => {
  // List of site routes (kept in sync with App.js)
  const routes = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/events", label: "Events" },
    { path: "/terms", label: "Terms of Service" },
    { path: "/privacy", label: "Privacy Policy" },
    { path: "/contact", label: "Contact" },
    { path: "/services", label: "Services" },
    { path: "/testimonials", label: "Testimonials" },
    // services and aliases
    { path: "/services/company-formation", label: "Company Formation" },
    { path: "/services/private-limited", label: "Private Limited (alias)" },
    { path: "/services/private-limited-company", label: "Private Limited Company" },
    { path: "/services/public-limited", label: "Public Limited (alias)" },
    { path: "/services/public-limited-company", label: "Public Limited Company" },
    { path: "/services/opc-proprietorship", label: "OPC & Proprietorship" },
    { path: "/services/nbfc", label: "NBFC Registration" },
    { path: "/services/nbfc-registration", label: "NBFC Registration (alias)" },
    { path: "/services/society-trust", label: "Society & Trust" },
    { path: "/services/gst-returns", label: "GST Registration & Returns" },
    { path: "/services/gst-registration-returns", label: "GST (alias)" },
    { path: "/services/itr-filing", label: "ITR Filing" },
    { path: "/services/annual-filing", label: "Annual Filing" },
    { path: "/services/annual-filing-roc", label: "Annual Filing (ROC)" },
    { path: "/services/bookkeeping-audit", label: "Bookkeeping & Audit" },
    { path: "/services/trademark", label: "Trademark Registration" },
    { path: "/services/trademark-registration", label: "Trademark (alias)" },
    { path: "/services/copyright-registration", label: "Copyright Registration" },
    { path: "/services/patent-filing", label: "Patent Filing" },
    { path: "/services/fssai", label: "FSSAI License" },
    { path: "/services/fssai-license", label: "FSSAI (alias)" },
    { path: "/services/trade-license", label: "Trade License" },
    { path: "/services/import-export-code", label: "Import Export Code (IEC)" },
    { path: "/services/iso-certificate", label: "ISO Certification" },
    { path: "/services/iso-certification", label: "ISO (alias)" },
    { path: "/services/legal-metrology", label: "Legal Metrology" },
    { path: "/services/epr-certificate", label: "EPR Certificate" },
    { path: "/services/bis-hallmark", label: "BIS Hallmark" },
    { path: "/services/psara", label: "PSARA License" },
    { path: "/services/psara-license", label: "PSARA (alias)" },
    { path: "/services/wpc-vno", label: "WPC VNO" },
    { path: "/services/bpo-license", label: "BPO License" },
    { path: "/services/apeda-registration", label: "APEDA Registration" },
    { path: "/services/bail-matters", label: "Bail Matters" },
    { path: "/services/cyber-fraud", label: "Cyber Fraud" },
    { path: "/services/call-centre-crime", label: "Call Centre Crime (alias)" },
    { path: "/services/civil-criminal", label: "Civil & Criminal" },
    { path: "/services/company-formation", label: "Company Formation" },
    { path: "/services/consumer-complaint", label: "Consumer Complaint" },
    { path: "/services/criminal-cases", label: "Criminal Cases" },
    { path: "/services/document-attestation", label: "Document Attestation" },
    { path: "/services/litigation", label: "Litigation Services" },
    { path: "/services/notarization", label: "Notarization" },
    { path: "/services/loan-project-reports", label: "Loan & Project Reports" },
    { path: "/services/shifting-registered-office", label: "Shifting Registered Office" },
    { path: "/services/shift-registered-office", label: "Shifting Registered Office (alias)" },
    { path: "/services/court-marriage", label: "Court Marriage" },
    { path: "/services/contract-drafting", label: "Contract Drafting" },
    { path: "/services/property-registry", label: "Property Registry" },
    { path: "/services/lease-deed", label: "Lease Deed" },
    { path: "/services/stamp-paper-notary", label: "Stamp Paper & Notary" },
  ];

  return (
    <>
      <Header />
      <Wrapper>
        <h1>Sitemap</h1>
        <p>Quick links to all pages on this site.</p>

        <ul>
          {routes.map((r, idx) => (
            <li key={idx}>
              <Link to={r.path}>{r.label} <small style={{color:'#6b7280', fontWeight:400}}>({r.path})</small></Link>
            </li>
          ))}
        </ul>
        <div style={{marginTop: '1.5rem'}}>
          <a href="/sitemap.xml">Download XML sitemap</a>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Sitemap;
