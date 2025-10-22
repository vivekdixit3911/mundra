import styled from "styled-components";

export const ApedaPageContainer = styled.div`
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

  font-family:
    "Inter",
    system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    sans-serif;
  color: var(--text-primary);

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Playfair Display", Georgia, "Times New Roman", serif;
    font-weight: 700;
  }

  .apeda-section {
    padding: 60px 24px;
    background: linear-gradient(180deg, #fff8f0 0%, #ffffff 50%, #fffbf5 100%);
  }
  .apeda-container {
    display: grid;
    grid-template-columns: 1fr 380px;
    gap: 40px;
    max-width: 1280px;
    margin: 0 auto;
    align-items: start;
  }

  .apeda-main {
    background: white;
    padding: 48px 40px;
    border-radius: 20px;
    box-shadow: var(--shadow-lg);
    border: 1px solid rgba(28, 41, 81, 0.08);
  }

  .apeda-main h1 {
    font-size: clamp(2rem, 4vw, 3.5rem);
    background: linear-gradient(
      135deg,
      var(--primary-color) 0%,
      var(--primary-gold) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 12px;
    letter-spacing: 0.5px;
    line-height: 1.2;
  }

  .apeda-byline {
    color: var(--text-muted);
    font-size: 1.05rem;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .apeda-byline::before {
    content: "";
    display: inline-block;
    width: 4px;
    height: 18px;
    background: linear-gradient(
      180deg,
      var(--primary-color),
      var(--primary-gold)
    );
    border-radius: 2px;
  }

  .apeda-main p {
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 16px;
    font-size: 1.05rem;
  }

  .apeda-main h2 {
    color: var(--primary-color);
    font-size: clamp(1.6rem, 2.8vw, 2.2rem);
    margin-top: 40px;
    margin-bottom: 20px;
    position: relative;
    padding-bottom: 12px;
  }
  .apeda-main h2::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(
      90deg,
      var(--primary-color),
      var(--primary-gold)
    );
    border-radius: 2px;
  }

  .apeda-main h3 {
    color: var(--text-primary);
    font-size: clamp(1.3rem, 2.2vw, 1.7rem);
    margin-top: 32px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .apeda-main h3::before {
    content: "●";
    color: var(--primary-gold);
    font-size: 0.7em;
  }

  .callout {
    background: linear-gradient(
      135deg,
      rgba(212, 175, 55, 0.05) 0%,
      rgba(244, 233, 193, 0.08) 100%
    );
    border-left: 5px solid var(--primary-gold);
    padding: 20px 24px;
    border-radius: 12px;
    margin: 24px 0;
    box-shadow: var(--shadow-sm);
  }
  .callout p {
    margin-bottom: 0;
    font-weight: 500;
  }

  .badge {
    display: inline-block;
    background: linear-gradient(
      90deg,
      var(--primary-color),
      var(--primary-gold)
    );
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    font-weight: 700;
    font-size: 0.95rem;
    margin-bottom: 12px;
    box-shadow: var(--shadow-sm);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .highlight-box {
    background: linear-gradient(135deg, #fff5eb 0%, #fffbf5 100%);
    border: 2px solid var(--primary-gold);
    border-radius: 16px;
    padding: 28px;
    margin: 24px 0;
    box-shadow: var(--shadow-md);
    position: relative;
    overflow: hidden;
  }
  .highlight-box::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(212, 175, 55, 0.1) 0%,
      transparent 70%
    );
    pointer-events: none;
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
    transition: all 0.3s ease;
    box-shadow: var(--shadow-sm);
  }
  .feature-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
    border-color: var(--primary-gold);
  }
  .feature-card h4 {
    color: var(--primary-color);
    margin: 0 0 12px 0;
    font-size: 1.15rem;
  }

  .apeda-main ul,
  .apeda-main ol {
    padding-left: 24px;
    margin: 16px 0;
  }
  .apeda-main li {
    margin-bottom: 12px;
    color: var(--text-secondary);
    line-height: 1.7;
    padding-left: 8px;
  }
  .apeda-main ul li::marker {
    color: var(--primary-gold);
    font-size: 1.2em;
  }
  .apeda-main ol li::marker {
    color: var(--primary-color);
    font-weight: 700;
  }
  .apeda-main li strong {
    color: var(--text-primary);
  }

  .lottie-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    padding: 20px;
    background: rgba(212, 175, 55, 0.05);
    border-radius: 16px;
  }
  dotlottie-wc {
    display: block !important;
    width: 100% !important;
    height: auto !important;
    min-height: 220px;
    max-width: 380px;
  }
  .inline-lottie {
    width: 180px;
    height: 180px;
    float: right;
    margin: 0 0 24px 28px;
    background: rgba(212, 175, 55, 0.05);
    border-radius: 16px;
    padding: 16px;
    display: flex !important;
    align-items: center;
    justify-content: center;
  }
  .inline-lottie dotlottie-wc {
    width: 100% !important;
    height: 100% !important;
    min-height: unset;
    max-width: unset;
  }
  .section-lottie {
    display: flex;
    justify-content: center;
    margin: 40px 0;
  }
  .section-lottie dotlottie-wc {
    width: 200px !important;
    height: 200px !important;
    min-height: unset;
    max-width: unset;
  }

  /* LottieAnimation component styles */
  .inline-lottie > div {
    width: 100% !important;
    height: 100% !important;
  }

  .section-lottie > div {
    width: 100% !important;
    height: 100% !important;
  }

  .sidebar-lottie > div {
    width: 100% !important;
    height: 100% !important;
  }

  .icon-box {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: linear-gradient(
      135deg,
      rgba(28, 41, 81, 0.1),
      rgba(212, 175, 55, 0.1)
    );
    border-radius: 12px;
    margin-right: 12px;
  }
  .icon-box svg {
    width: 24px;
    height: 24px;
    fill: var(--primary-color);
  }
  .feature-card .icon-box {
    width: 56px;
    height: 56px;
    margin-bottom: 16px;
  }
  .feature-card .icon-box svg {
    width: 28px;
    height: 28px;
    fill: var(--primary-gold);
  }

  .apeda-sidebar {
    position: relative;
    height: fit-content;
  }

  @media (max-width: 900px) {
    .apeda-container {
      grid-template-columns: 1fr;
    }
    .inline-lottie {
      float: none;
      margin: 20px auto;
      display: block;
    }
    .apeda-main {
      padding: 32px 24px;
    }
  }
  @media (max-width: 640px) {
    .apeda-section {
      padding: 40px 16px;
    }
    .apeda-main {
      padding: 24px 20px;
    }
    .apeda-main h1 {
      font-size: 1.75rem;
    }
    .apeda-main h2 {
      font-size: 1.4rem;
    }
    .feature-grid {
      grid-template-columns: 1fr;
    }
  }
`;
