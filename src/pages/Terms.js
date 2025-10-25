import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";


const TermsWrapper = styled.main`
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

const Terms = () => {
  return (
    <><Header /><TermsWrapper>
          <h1>Terms of Service</h1>
          <p>Last Updated: September 24, 2025</p>

          <h2>Agreement to Terms</h2>
          <p>
              These Terms of Service ("Terms") govern your use of Mundra Legal
              Consultants's website and services. By accessing our website or using
              our services, you agree to be bound by these Terms.
          </p>
          <p>
              If you do not agree to these Terms, please do not use our website or
              services.
          </p>

          <h2>Our Services</h2>
          <p>
              Mundra Legal Consultants provides legal consultation and advisory
              services including:
          </p>
          <ul>
              <li>Business formation and company registration</li>
              <li>Trademark and intellectual property services</li>
              <li>Legal documentation and contract drafting</li>
              <li>Court marriage and legal procedures</li>
              <li>Tax and compliance services</li>
              <li>Legal consultation and advisory services</li>
          </ul>

          <h2>Your Responsibilities</h2>
          <p>By using our services, you agree to:</p>
          <ul>
              <li>Provide accurate and complete information</li>
              <li>Use our services only for lawful purposes</li>
              <li>Respect intellectual property rights</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Pay all fees and charges in a timely manner</li>
          </ul>

          <h2>Prohibited Uses</h2>
          <p>You may not use our services to:</p>
          <ul>
              <li>Engage in any illegal or fraudulent activities</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the rights of others</li>
              <li>Transmit harmful or malicious content</li>
          </ul>

          <h2>Attorney-Client Relationship</h2>
          <p>
              An attorney-client relationship is established only when you formally
              engage our services through a signed agreement and payment of
              applicable fees. General information provided on our website does not
              constitute legal advice.
          </p>

          <h2>Fees and Payment</h2>
          <p>
              Professional Fees: Ask for quotation (Government fees listed
              separately)
          </p>
          <p>Payment Terms: Payment is typically required before service delivery</p>
          <p>Refund Policy: Refunds are subject to the nature of services provided</p>
          <p>Additional Costs: Government fees and third-party costs are separate</p>
          <p>Late Payments: May result in suspension of services</p>

          <h2>Disclaimers</h2>
          <p>
              Our services are provided "as is" without warranties of any kind. We
              disclaim all warranties, express or implied, including but not limited
              to: merchantability and fitness for a particular purpose, non-
              infringement of third-party rights, accuracy, completeness, or
              timeliness of information, and uninterrupted or error-free service.
          </p>
          <p>
              While we strive to provide excellent service, we cannot guarantee
              specific outcomes or results.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
              In no event shall Mundra Legal Consultants be liable for any indirect,
              incidental, special, consequential, or punitive damages, including
              without limitation, loss of profits, data, use, goodwill, or other
              intangible losses, resulting from your use of our services.
          </p>

          <h2>Governing Law</h2>
          <p>
              These Terms shall be governed by and construed in accordance with the
              laws of India. Any disputes arising under these Terms shall be
              subject to the exclusive jurisdiction of the courts in Delhi, India.
          </p>

          <h2>Contact Us</h2>
          <p>
              If you have any questions about these Terms, please contact us:
          </p>
          <p>
              Email: mundralegal@gmail.com<br />
              Phone: +91 85068 74280<br />
              Address: 1307, Best Sky Tower, Plot No F-5, Netaji Subhash Place,
              Pitampura, New Delhi, 110034
          </p>
      </TermsWrapper>
      <Footer />
      </>
  );
};

export default Terms;
