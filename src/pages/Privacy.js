import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PrivacyWrapper = styled.main`
  max-width: 1000px;
  margin: 4rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 30px rgba(16, 24, 40, 0.06);
  line-height: 1.7;
  color: #111827;

  h1 {
    font-family: "Playfair Display", serif;
    color: #1c2951;
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }

  h2 {
    color: #1c2951;
    margin-top: 1.2rem;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  p,
  li {
    color: #374151;
    font-size: 0.98rem;
  }

  ul {
    margin-left: 1.25rem;
  }
`;

const Privacy = () => {
  return (
    <>
      <Header />
      <PrivacyWrapper>
          <h1>Privacy Policy</h1>
          <p>Last Updated: September 21, 2025</p>

          <h2>Introduction</h2>
          <p>
              At Mundra Legal Consultants, we are committed to protecting your
              privacy and ensuring the security of your personal information. This
              Privacy Policy explains how we collect, use, disclose, and safeguard
              your information when you visit our website or use our services.
          </p>
          <p>
              By accessing our website or using our services, you agree to the
              collection and use of information in accordance with this policy.
          </p>

          <h2>Information We Collect</h2>
          <h3>Personal Information</h3>
          <ul>
              <li>Name and contact information (email, phone number, address)</li>
              <li>Business information and requirements</li>
              <li>Legal documentation and case details (when provided)</li>
              <li>Payment information for billing purposes</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <ul>
              <li>IP address and browser information</li>
              <li>Website usage data and analytics</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Device information and preferences</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <ul>
              <li>Service Delivery: To provide legal consultation and services</li>
              <li>Communication: To respond to inquiries and provide updates</li>
              <li>Legal Compliance: To meet legal and regulatory requirements</li>
              <li>Service Improvement: To enhance our website and services</li>
              <li>Marketing: To send relevant legal updates (with your consent)</li>
          </ul>

          <h2>Information Sharing and Disclosure</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
          <ul>
              <li>Legal Requirements: When required by law or legal process</li>
              <li>Service Providers: With trusted third-party service providers who assist in our operations</li>
              <li>Professional Advisors: With lawyers, accountants, or other professional advisors</li>
              <li>Business Transfers: In connection with a merger, acquisition, or sale of assets</li>
              <li>Consent: With your explicit consent for specific purposes</li>
          </ul>

          <h2>Data Security</h2>
          <p>
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
              <li>Access and review your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict processing of your information</li>
              <li>Data portability (receive your data in a structured format)</li>
              <li>Withdraw consent for marketing communications</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
          </p>
          <p>
              Email: mundralegal@gmail.com<br />
              Phone: +91 85068 74280<br />
              Address: Best Sky Tower, 1307, plot no F-5, Netaji Subhash Place, Pitampura, Delhi, 110034
          </p>
      </PrivacyWrapper>
      <Footer />
    </>
  );
};

export default Privacy;
