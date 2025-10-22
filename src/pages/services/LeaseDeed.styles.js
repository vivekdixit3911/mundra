import styled from 'styled-components';

export const LeasePageContainer = styled.div`
  .lease-section {
    padding: 60px 24px;
    background: linear-gradient(180deg, #f8f9fb 0%, #ffffff 50%, #f8f9fb 100%);
  }
  .lease-container {
    display: grid;
    grid-template-columns: 1fr 380px;
    gap: 40px;
    max-width: 1280px;
    margin: 0 auto;
    align-items: start;
  }
  .lease-main {
    background: white;
    padding: 48px 40px;
    border-radius: 20px;
    box-shadow: 0 16px 48px rgba(28, 41, 81, 0.16);
    border: 1px solid rgba(28, 41, 81, 0.08);
  }
  .lease-main h1 {
    font-size: clamp(2rem, 4vw, 3.5rem);
    background: linear-gradient(135deg, #1c2951 0%, #d4af37 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 12px;
    letter-spacing: 0.5px;
    line-height: 1.2;
    font-family: "Playfair Display", serif;
  }
  .lease-byline {
    color: #718096;
    font-size: 1.05rem;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .lease-byline::before {
    content: "";
    display: inline-block;
    width: 4px;
    height: 18px;
    background: linear-gradient(180deg, #1c2951, #d4af37);
    border-radius: 2px;
  }
  .lease-main p {
    color: #4a5568;
    line-height: 1.8;
    margin-bottom: 16px;
    font-size: 1.05rem;
  }
  .lease-main h2 {
    color: #1c2951;
    font-size: clamp(1.6rem, 2.8vw, 2.2rem);
    margin-top: 40px;
    margin-bottom: 20px;
    position: relative;
    padding-bottom: 12px;
    font-family: "Playfair Display", serif;
  }
  .lease-main h2::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #1c2951, #d4af37);
    border-radius: 2px;
  }
  .callout {
    background: linear-gradient(
      135deg,
      rgba(28, 41, 81, 0.05) 0%,
      rgba(212, 175, 55, 0.08) 100%
    );
    border-left: 5px solid #1c2951;
    padding: 20px 24px;
    border-radius: 12px;
    margin: 24px 0;
    box-shadow: 0 2px 8px rgba(28, 41, 81, 0.08);
  }
  .callout p {
    margin-bottom: 0;
    font-weight: 500;
  }
  .highlight-box {
    background: linear-gradient(135deg, #f8f9fb 0%, #ffffff 100%);
    border: 2px solid rgba(212, 175, 55, 0.2);
    border-radius: 16px;
    padding: 24px;
    margin: 24px 0;
    position: relative;
    box-shadow: 0 8px 24px rgba(28, 41, 81, 0.12);
  }
  .lease-sidebar {
    position: sticky;
    top: 120px;
  }

  /* Responsive Improvements */
  @media (max-width: 900px) {
    .lease-container {
      grid-template-columns: 1fr;
    }
    .lease-sidebar {
      position: static;
      margin-top: 2rem;
    }
  }

  @media (max-width: 600px) {
    .lease-section {
      padding: 40px 16px;
    }
    .lease-main {
      padding: 24px 20px;
    }
    .lease-main h1 {
      font-size: 2rem;
    }
    .lease-main h2 {
      font-size: 1.5rem;
    }
    .lease-main p {
      font-size: 1rem;
    }
  }
`;
