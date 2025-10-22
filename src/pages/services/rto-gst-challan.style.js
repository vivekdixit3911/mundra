import styled from 'styled-components';

export const PageContent = styled.div`
  --primary-color: #1C2951;
  --primary-gold: #D4AF37;
  --light-gold: #F4E9C1;
  --mundra-dark: #1C2951;
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
  line-height: 1.7;

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
    font-weight: 700;
    color: var(--primary-color);
  }

  .gst-section {
    padding: 60px 24px;
    background: linear-gradient(180deg, #f8f9fb 0%, #ffffff 50%, #f8f9fb 100%);

    @media (max-width: 768px) {
      padding: 40px 16px;
    }
  }

  .gst-container {
    display: grid;
    grid-template-columns: 1fr 380px;
    gap: 40px;
    max-width: 1280px;
    margin: 0 auto;
    align-items: start;

    @media (max-width: 1100px) {
      grid-template-columns: 1fr 320px;
      gap: 32px;
    }

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  .gst-main {
    background: white;
    padding: 48px 40px;
    border-radius: 20px;
    box-shadow: var(--shadow-lg);
    border: 1px solid rgba(28, 41, 81, 0.08);
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
      padding: 32px 24px;
    }

    @media (max-width: 480px) {
      padding: 24px 16px;
    }
  }

  .gst-main h1 {
    font-size: clamp(2rem, 4vw, 3.5rem);
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-gold) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 12px;
    letter-spacing: 0.5px;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: clamp(1.8rem, 3.5vw, 2.8rem);
    }
  }

  .gst-byline {
    color: var(--text-muted);
    font-size: 1.05rem;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 8px;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  .gst-byline::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 18px;
    background: linear-gradient(180deg, var(--primary-color), var(--primary-gold));
    border-radius: 2px;
  }

  .gst-main p {
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 16px;
    font-size: 1.05rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  .gst-main h2 {
    color: var(--primary-color);
    font-size: clamp(1.6rem, 2.8vw, 2.2rem);
    margin-top: 40px;
    margin-bottom: 20px;
    position: relative;
    padding-bottom: 12px;

    @media (max-width: 768px) {
      font-size: clamp(1.4rem, 2.5vw, 1.9rem);
      margin-top: 32px;
    }
  }

  .gst-main h2::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-color), var(--primary-gold));
    border-radius: 2px;
  }

  .gst-main h3 {
    color: var(--text-primary);
    font-size: clamp(1.3rem, 2.2vw, 1.7rem);
    margin-top: 32px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: 768px) {
      font-size: clamp(1.2rem, 2vw, 1.5rem);
      margin-top: 28px;
    }
  }

  .gst-main h3::before {
    content: '●';
    color: var(--primary-gold);
    font-size: 0.7em;
  }

  .callout {
    background: linear-gradient(135deg, rgba(28, 41, 81, 0.05) 0%, rgba(212, 175, 55, 0.08) 100%);
    border-left: 5px solid var(--primary-color);
    padding: 20px 24px;
    border-radius: 12px;
    margin: 24px 0;
    box-shadow: var(--shadow-sm);

    @media (max-width: 768px) {
      padding: 16px 20px;
      margin: 20px 0;
    }
  }

  .callout p {
    margin-bottom: 0;
    font-weight: 500;
  }

  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    margin: 32px 0;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 20px;
      margin: 24px 0;
    }
  }

  .feature-card {
    background: linear-gradient(135deg, rgba(28, 41, 81, 0.02) 0%, rgba(212, 175, 55, 0.05) 100%);
    padding: 24px;
    border-radius: 16px;
    border: 1px solid rgba(28, 41, 81, 0.08);
    text-align: center;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      padding: 20px;
    }

    &:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-md);
    }
  }

  .icon-box {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, var(--primary-color), var(--primary-gold));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 16px;
    color: white;
    font-size: 1.5rem;
  }

  .feature-card h4 {
    color: var(--primary-color);
    font-size: 1.2rem;
    margin-bottom: 8px;
    font-weight: 700;
  }

  .feature-card p {
    color: var(--text-secondary);
    font-size: 0.95rem;
    margin-bottom: 0;
  }

  .gst-sidebar {
    position: sticky;
    top: 100px;
    background: white;
    border-radius: 20px;
    box-shadow: var(--shadow-lg);
    border: 1px solid rgba(28, 41, 81, 0.08);
    overflow: hidden;

    @media (max-width: 900px) {
      position: relative;
      top: 0;
    }
  }

  .sidebar-scroll-wrapper {
    max-height: calc(100vh - 120px);
    overflow-y: auto;
    padding: 24px;

    @media (max-width: 900px) {
      max-height: none;
    }
  }

  .section-lottie {
    width: 100%;
    height: 200px;
    margin: 24px 0;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      height: 150px;
      margin: 20px 0;
    }
  }

  .badge {
    display: inline-block;
    background: linear-gradient(90deg, var(--primary-color), var(--primary-gold));
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    font-weight: 700;
    font-size: 0.95rem;
    margin-bottom: 12px;
    box-shadow: var(--shadow-sm);
    text-transform: uppercase;
    letter-spacing: 0.5px;

    @media (max-width: 768px) {
      font-size: 0.85rem;
      padding: 6px 12px;
    }
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin: 32px 0;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }

  .stat-card {
    background: linear-gradient(135deg, rgba(28, 41, 81, 0.05) 0%, rgba(212, 175, 55, 0.08) 100%);
    padding: 24px;
    border-radius: 16px;
    text-align: center;
    border: 1px solid rgba(28, 41, 81, 0.1);

    @media (max-width: 768px) {
      padding: 20px;
    }
  }

  .stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 8px;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .stat-label {
    color: var(--text-secondary);
    font-size: 0.95rem;
    font-weight: 600;
  }

  .process-timeline {
    position: relative;
    padding-left: 40px;
    margin: 32px 0;

    @media (max-width: 768px) {
      padding-left: 30px;
    }
  }

  .timeline-item {
    position: relative;
    margin-bottom: 32px;
    padding-bottom: 24px;

    @media (max-width: 768px) {
      margin-bottom: 24px;
      padding-bottom: 20px;
    }
  }

  .timeline-marker {
    position: absolute;
    left: -39px;
    top: 0;
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, var(--primary-color), var(--primary-gold));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: 0.9rem;
    box-shadow: var(--shadow-sm);

    @media (max-width: 768px) {
      width: 32px;
      height: 32px;
      left: -39px;
      font-size: 0.8rem;
    }
  }

  .timeline-content h4 {
    color: var(--primary-color);
    font-size: 1.2rem;
    margin-bottom: 8px;
    font-weight: 700;
  }

  .timeline-content p {
    color: var(--text-secondary);
    margin-bottom: 0;
    font-size: 0.95rem;
  }

  .back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, var(--primary-color), var(--primary-gold));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: var(--shadow-md);

    @media (max-width: 768px) {
      bottom: 20px;
      right: 20px;
      width: 45px;
      height: 45px;
      font-size: 1.1rem;
    }

    &.visible {
      opacity: 1;
      visibility: visible;
    }

    &:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
    }
  }
`;
