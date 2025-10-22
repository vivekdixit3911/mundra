import styled from 'styled-components';

export const PageContent = styled.section`
  padding: 60px 24px;
  background: linear-gradient(180deg, #f8f9fb 0%, #ffffff 50%, #f8f9fb 100%);
  font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

  .container {
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 1024px) {
      max-width: 100%;
      padding: 0 1rem;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
    color: #1C2951;
    font-weight: 700;
  }

  h1 {
    font-size: clamp(2rem, 4vw, 3.5rem);
    margin-bottom: 1rem;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: clamp(1.8rem, 3.5vw, 2.8rem);
    }
  }

  h2 {
    font-size: clamp(1.6rem, 2.8vw, 2.2rem);
    margin-top: 2rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: clamp(1.4rem, 2.5vw, 1.9rem);
      margin-top: 1.5rem;
    }
  }

  h3 {
    font-size: clamp(1.3rem, 2.2vw, 1.7rem);
    margin-top: 1.5rem;
    margin-bottom: 0.8rem;

    @media (max-width: 768px) {
      font-size: clamp(1.2rem, 2vw, 1.5rem);
      margin-top: 1.2rem;
    }
  }

  p {
    color: #4a5568;
    line-height: 1.8;
    font-size: 1.05rem;
    margin: 0 0 1rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  .wpc-container {
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

  .wpc-main {
    background: white;
    padding: 48px 40px;
    border-radius: 20px;
    box-shadow: 0 16px 48px rgba(28, 41, 81, 0.16);
    border: 1px solid rgba(28, 41, 81, 0.08);

    @media (max-width: 768px) {
      padding: 32px 24px;
    }

    @media (max-width: 480px) {
      padding: 24px 16px;
    }
  }

  .wpc-sidebar {
    position: sticky;
    top: 100px;
    background: white;
    border-radius: 20px;
    box-shadow: 0 16px 48px rgba(28, 41, 81, 0.16);
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

    @media (max-width: 768px) {
      padding: 20px;
    }
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
      box-shadow: 0 8px 24px rgba(28, 41, 81, 0.12);
    }
  }

  .back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #1C2951, #D4AF37);
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
    box-shadow: 0 8px 24px rgba(28, 41, 81, 0.12);

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
      box-shadow: 0 12px 32px rgba(28, 41, 81, 0.16);
    }
  }

  @media (max-width: 768px) {
    padding: 40px 16px;
  }

  @media (max-width: 480px) {
    padding: 30px 12px;
  }
`;


