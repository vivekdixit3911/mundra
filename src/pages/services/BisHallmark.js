import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServiceHero from '../../components/ServiceHero';
import { PageContent } from './ServicePage.styles.js';

export const BailMattersContainer = styled.div`
  --primary-gold: #d4af37;
  --light-gold: #f4e9c1;
  --primary-color: #1c2951;
  --secondary-color: #d4af37;
  --mundra-dark: #1c2951;
  --text-primary: #2d3748;
  --text-secondary: #4a5568;
  --text-muted: #718096;
  --bg-light: #fefefe;
  --bg-soft: #f7fafc;
  --shadow-sm: 0 2px 8px rgba(28, 41, 81, 0.08);
  --shadow-md: 0 8px 24px rgba(28, 41, 81, 0.12);
  --shadow-lg: 0 16px 48px rgba(28, 41, 81, 0.16);

  font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: var(--text-primary);
  background: #ffffff;

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', Georgia, serif;
    font-weight: 700;
  }

  .bail-section {
    padding: 60px 24px;
    background: linear-gradient(180deg, #fff8f0 0%, #ffffff 50%, #fffbf5 100%);
  }

  .bail-container {
    display: grid;
    grid-template-columns: 1fr;
    max-width: 1100px;
    margin: 0 auto;
    gap: 40px;
  }

  .bail-main {
    background: white;
    padding: 48px 40px;
    border-radius: 20px;
    box-shadow: var(--shadow-lg);
    border: 1px solid rgba(28, 41, 81, 0.08);
  }

  .bail-main h1 {
    font-size: clamp(2rem, 4vw, 3rem);
    background: linear-gradient(135deg, var(--primary-color), var(--primary-gold));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 12px;
  }

  .bail-main h2 {
    color: var(--primary-color);
    font-size: 1.8rem;
    margin-top: 40px;
    margin-bottom: 16px;
    position: relative;
  }

  .bail-main h2::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-color), var(--primary-gold));
    border-radius: 2px;
  }

  .bail-main p {
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 16px;
  }

  .highlight-box {
    background: linear-gradient(135deg, #fff5eb 0%, #fffbf5 100%);
    border: 2px solid var(--primary-gold);
    border-radius: 16px;
    padding: 28px;
    margin: 24px 0;
    box-shadow: var(--shadow-md);
  }

  ul {
    margin: 16px 0;
    padding-left: 24px;
  }

  ul li {
    margin-bottom: 12px;
    color: var(--text-secondary);
    line-height: 1.7;
  }

  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
    margin: 24px 0;
  }

  .feature-card {
    background: white;
    border: 2px solid rgba(28, 41, 81, 0.1);
    border-radius: 16px;
    padding: 24px;
    box-shadow: var(--shadow-sm);
    transition: all 0.3s ease;
  }

  .feature-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
    border-color: var(--primary-gold);
  }

  .feature-card h4 {
    color: var(--primary-color);
    margin-bottom: 12px;
  }

  .feature-card p {
    color: var(--text-secondary);
  }

  @media (max-width: 768px) {
    .bail-main {
      padding: 32px 20px;
    }
  }
`;

const BisHallmark = () => {
  return (
    <>
      <Header />
      <ServiceHero
        title="BIS / Hallmark Certification"
        subtitle="Get expert assistance for BIS Hallmark Registration, Certification & Compliance."
        breadcrumb="BIS / Hallmark"
      />
      <PageContent>
        <BailMattersContainer>
          <section className="bail-section">
            <div className="bail-container">
              <div className="bail-main">
                <h1>BIS Hallmarking of Gold in India</h1>
                <p>
                  Hallmarking is the official certification of the purity and fineness of gold jewellery,
                  regulated by the <strong>Bureau of Indian Standards (BIS)</strong>. Since 16 June 2021,
                  hallmarking has been made <strong>mandatory</strong> across India to ensure purity and consumer trust.
                </p>

                <div className="highlight-box">
                  <p>
                    <strong>Mundra Legal</strong> offers end-to-end assistance for obtaining
                    BIS Hallmark Certification and setting up a BIS-recognized Hallmarking Centre.
                  </p>
                </div>

                <h2>Types of Hallmarking</h2>
                <div className="feature-grid">
                  <div className="feature-card">
                    <h4>Stamp Hallmark</h4>
                    <p>
                      The traditional method of marking purity directly on jewellery. However,
                      it can sometimes deform delicate items.
                    </p>
                  </div>
                  <div className="feature-card">
                    <h4>Laser Hallmark</h4>
                    <p>
                      A modern, damage-free method using laser engraving.
                      Ideal for high-value or intricate designs.
                    </p>
                  </div>
                </div>

                <h2>How to Read Gold Hallmarks</h2>
                <ul>
                  <li><strong>BIS Logo</strong> — Confirms certification from the Bureau of Indian Standards.</li>
                  <li><strong>Purity Mark</strong> — Indicates karat and fineness (e.g., 22K916, 18K750).</li>
                  <li><strong>HUID Code</strong> — A unique 6-digit alphanumeric identification number.</li>
                </ul>

                <h2>Gold Purity Levels</h2>
                <ul>
                  <li>24K – 99.9% pure (999)</li>
                  <li>22K – 91.6% pure (916) – ideal for jewellery</li>
                  <li>18K – 75.0% pure (750) – used in designer jewellery</li>
                  <li>14K – 58.5% pure (585) – durable and affordable</li>
                </ul>

                <h2>Check Gold Hallmark at Home</h2>
                <p>To verify the authenticity of gold jewellery:</p>
                <ol>
                  <li>Look for the <strong>BIS logo</strong> and purity mark.</li>
                  <li>Find the <strong>6-digit HUID code</strong>.</li>
                  <li>Use the <strong>BIS CARE App</strong> (available on Android & iOS) → “Verify HUID”.</li>
                </ol>

                <h2>Why Buy Hallmarked Gold?</h2>
                <div className="feature-grid">
                  <div className="feature-card"><h4>Guaranteed Purity</h4><p>Certified by BIS, ensuring authenticity.</p></div>
                  <div className="feature-card"><h4>High Resale Value</h4><p>Trusted nationwide for resale and valuation.</p></div>
                  <div className="feature-card"><h4>Loan Eligibility</h4><p>Get higher loan value (up to 75%) on hallmarked gold.</p></div>
                  <div className="feature-card"><h4>Consumer Protection</h4><p>Ensures standardized and regulated quality.</p></div>
                </div>
                
                <h2>Legal Penalties for Fake or Missing Hallmark</h2>
                <p>
                  Selling gold without hallmark certification is an offence under the <strong>BIS Act, 2016</strong>:
                </p>
                <ul>
                  <li>Imprisonment up to <strong>1 year</strong></li>
                  <li>Fine of at least ₹1,00,000 or 5× the value of gold</li>
                  <li>Seizure and license cancellation for jewellers</li>
                </ul>

                <h2>Why is KDM Gold Banned?</h2>
                <p>
                  KDM gold used <strong>cadmium</strong> in soldering, which is toxic to health and harmful to
                  the environment. Hence, only BIS-approved gold is legally allowed in India.
                </p>

                <div className="highlight-box">
                  <h3>Get Your BIS Hallmark Certification with Mundra Legal</h3>
                  <p>
                    Our experts handle complete BIS registration, documentation, and compliance for jewellers,
                    manufacturers, and hallmark centres.
                  </p>
                  <p><strong>📞 Contact Mundra Legal today to get started.</strong></p>
                </div>
              </div>
            </div>
          </section>
        </BailMattersContainer>
      </PageContent>
      <Footer />
    </>
  );
};

export default BisHallmark;
