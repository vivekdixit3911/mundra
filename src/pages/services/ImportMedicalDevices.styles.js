import styled from "styled-components";

export const MDImportPageContainer = styled.div`
  --primary-gold: #d4af37;
  --primary-color: #1c2951;
  --text-primary: #2d3748;
  --text-muted: #718096;
  --shadow-sm: 0 2px 8px rgba(28, 41, 81, 0.08);
  --shadow-md: 0 8px 24px rgba(28, 41, 81, 0.12);

  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  color: var(--text-primary);

  .md-section {
    padding: 60px 20px;
    background: linear-gradient(180deg, #fffdf8 0%, #ffffff 50%);
  }

  .md-container {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 380px;
    gap: 36px;
    align-items: start;
  }

  .md-main {
    background: #fff;
    padding: 44px 36px;
    border-radius: 16px;
    box-shadow: var(--shadow-md);
    border: 1px solid rgba(28, 41, 81, 0.06);
  }

  .md-main h1 {
    font-family: "Playfair Display", serif;
    font-weight: 700;
    font-size: clamp(1.6rem, 3.5vw, 2.6rem);
    color: var(--primary-color);
    margin-bottom: 8px;
  }

  .byline {
    color: var(--text-muted);
    margin-bottom: 18px;
  }

  .callout {
    background: linear-gradient(135deg, rgba(212,175,55,0.04), rgba(255,250,245,0.06));
    border-left: 4px solid var(--primary-gold);
    padding: 16px 20px;
    border-radius: 10px;
    margin: 20px 0;
    box-shadow: var(--shadow-sm);
  }

  .md-main p {
    color: var(--text-muted);
    line-height: 1.8;
    margin-bottom: 14px;
  }

  .md-main h2 {
    color: var(--primary-color);
    margin-top: 28px;
    margin-bottom: 14px;
  }

  .highlight-box {
    background: linear-gradient(135deg, #fff7f0 0%, #fffefc 100%);
    border: 1px solid rgba(212, 175, 55, 0.12);
    border-radius: 12px;
    padding: 16px;
    margin: 16px 0;
  }

  .fee-grid {
    display: flex;
    gap: 12px;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .fee-grid > div {
    background: #fff;
    border-radius: 8px;
    padding: 12px;
    flex: 1 1 200px;
    box-shadow: var(--shadow-sm);
    border: 1px solid rgba(28,41,81,0.04);
  }

  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
    margin: 16px 0;
  }

  .feature-card {
    background: white;
    border-radius: 12px;
    padding: 16px;
    border: 1px solid rgba(28,41,81,0.06);
    box-shadow: var(--shadow-sm);
  }

  .section-lottie {
    display: flex;
    justify-content: center;
    margin: 28px 0;
  }

  .md-sidebar {
    position: relative;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .sidebar-lottie {
    text-align: center;
  }

  ul,
  ol {
    padding-left: 20px;
    margin-bottom: 12px;
  }

  @media (max-width: 900px) {
    .md-container {
      grid-template-columns: 1fr;
      padding: 0 12px;
    }

    .md-main {
      padding: 28px 18px;
    }
  }

  @media (max-width: 480px) {
    .md-main h1 {
      font-size: 1.4rem;
    }
  }
`;
