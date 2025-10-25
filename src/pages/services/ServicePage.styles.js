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

  /* WPC / VNO specific styles */
  /* Left-anchored quick-links: always visible on desktop, horizontally scrollable when needed (no arrows). */
  .quick-links {
    /* hide by default on large screens; show only on small screens via media queries */
    display: none;
    position: fixed;
    left: 20px;
    top: 120px;
    z-index: 995;
    transition: all 0.2s ease;
    pointer-events: auto;
    width: auto;
    max-width: calc(100% - 40px);
  }

  .quick-links .ql-container {
    display: inline-flex;
    gap: 8px;
    background: rgba(255,255,255,0.98);
    padding: 8px 10px;
    border-radius: 999px;
    box-shadow: 0 8px 24px rgba(28,41,81,0.08);
    border: 1px solid rgba(28,41,81,0.06);
    align-items: center;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none; /* Firefox */
  }

  /* hide scrollbars but keep scrollable */
  .quick-links .ql-container::-webkit-scrollbar { display: none; }

  .quick-links .ql-container a {
    color: var(--primary-color, #1C2951);
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 0.95rem;
    transition: all 0.14s ease;
    white-space: nowrap;
    flex: 0 0 auto;
  }

  .quick-links .ql-container a:hover,
  .quick-links .ql-container a:focus {
    background: linear-gradient(135deg, rgba(212,175,55,0.12), rgba(212,175,55,0.06));
    color: var(--primary-color, #1C2951);
  }

  @media (max-width: 1100px) {
    .quick-links { top: 100px; left: 16px; }
  }

  /* On small screens, place quick-links within flow at the top of the content so it doesn't cover text */
  @media (max-width: 900px) {
    .quick-links {
      display: block;
      position: relative;
      left: 0;
      top: 0;
      margin-bottom: 12px;
      width: 100%;
      max-width: 100%;
    }

    .quick-links .ql-container {
      display: flex;
      gap: 8px;
      padding: 8px 6px;
      border-radius: 12px;
      overflow-x: auto;
    }

    .quick-links .ql-container a { padding: 6px 10px; font-size: 0.92rem; }
  }

  .wpc-byline {
    color: #64748b;
    margin-bottom: 1rem;
    font-size: 1.05rem;
  }

  .callout {
    background: linear-gradient(90deg, rgba(212,175,55,0.06), rgba(28,41,81,0.02));
    border-left: 4px solid var(--primary-gold, #D4AF37);
    padding: 12px 16px;
    border-radius: 8px;
    margin: 16px 0;
    color: #1c2951;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 12px;
    margin: 18px 0;
  }

  .stat-card {
    background: white;
    padding: 16px;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 8px 24px rgba(28,41,81,0.06);
  }

  .stat-number {
    font-size: 1.6rem;
    font-weight: 800;
    color: var(--primary-gold, #D4AF37);
  }

  .inline-lottie, .section-lottie {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 16px 0;
  }

  @media (max-width: 900px) {
    .quick-links { top: 80px; }
    .quick-links .ql-container a { padding: 6px 10px; font-size: 0.9rem; }
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

  /* ========================================
     UNIVERSAL RESPONSIVE ENHANCEMENTS
     ======================================== */

  /* Lists - better mobile spacing */
  ul, ol {
    padding-left: 24px;
    margin: 16px 0;

    @media (max-width: 768px) {
      padding-left: 20px;
      margin: 14px 0;
    }

    @media (max-width: 480px) {
      padding-left: 18px;
      margin: 12px 0;
    }
  }

  li {
    margin-bottom: 10px;
    line-height: 1.7;

    @media (max-width: 768px) {
      margin-bottom: 8px;
      font-size: 0.98rem;
    }

    @media (max-width: 480px) {
      margin-bottom: 6px;
      font-size: 0.95rem;
    }
  }

  /* Tables - full responsive with horizontal scroll */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 1rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.85rem;
    }
  }

  /* Wrapper for table overflow */
  .table-wrapper,
  div[style*="overflowX"] {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    margin: 20px 0;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);

    @media (max-width: 768px) {
      margin: 16px -8px;
    }
  }

  th, td {
    padding: 12px;
    text-align: left;

    @media (max-width: 768px) {
      padding: 10px 8px;
    }

    @media (max-width: 480px) {
      padding: 8px 6px;
    }
  }

  /* Images and media - responsive */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Lottie players and animations */
  lottie-player,
  .lottie-wrapper {
    max-width: 100%;
    height: auto !important;

    @media (max-width: 768px) {
      width: 100% !important;
      max-width: 300px;
      margin: 0 auto;
    }

    @media (max-width: 480px) {
      max-width: 240px;
    }
  }

  /* Flex layouts - wrap on mobile */
  [style*="display: flex"],
  [style*="display:flex"] {
    @media (max-width: 768px) {
      flex-wrap: wrap;
      gap: 16px !important;
    }
  }

  /* Fixed width elements - make responsive */
  [style*="width: 220"],
  [style*="width:220"] {
    @media (max-width: 768px) {
      width: 180px !important;
    }

    @media (max-width: 480px) {
      width: 140px !important;
    }
  }

  /* Strong/bold text - better sizing */
  strong {
    font-weight: 600;
    color: var(--primary-color, #1C2951);
  }

  /* Buttons and links - touch friendly */
  a, button {
    @media (max-width: 768px) {
      min-height: 44px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }

  /* Better spacing for small screens */
  @media (max-width: 480px) {
    h1 { margin-bottom: 0.8rem; }
    h2 { margin-top: 1.5rem; margin-bottom: 0.8rem; }
    h3 { margin-top: 1.2rem; margin-bottom: 0.6rem; }
    p { margin-bottom: 0.8rem; }
  }

  /* Callouts and highlight boxes */
  .callout,
  .highlight-box {
    @media (max-width: 768px) {
      padding: 14px;
      margin: 14px 0;
    }

    @media (max-width: 480px) {
      padding: 12px;
      margin: 12px 0;
      font-size: 0.95rem;
    }
  }

  /* Stats grid - single column on very small screens */
  .stats-grid {
    @media (max-width: 480px) {
      grid-template-columns: 1fr;
      gap: 10px;
    }
  }

  /* Better SVG icon sizing */
  svg {
    @media (max-width: 768px) {
      width: auto;
      max-width: 100%;
      height: auto;
    }
  }

  /* Inline styles override - flex wrapping */
  .wpc-main > div[style*="display: flex"],
  .wpc-main > div[style*="display:flex"] {
    @media (max-width: 768px) {
      flex-direction: column !important;
      align-items: flex-start !important;
      gap: 16px !important;
    }
  }

  /* Better code/pre blocks */
  code, pre {
    overflow-x: auto;
    word-wrap: break-word;
    
    @media (max-width: 768px) {
      font-size: 0.85rem;
    }
  }

  /* Ensure no horizontal overflow */
  * {
    max-width: 100%;
  }

  /* Better select/input on touch devices */
  select, input, textarea {
    @media (max-width: 768px) {
      font-size: 16px; /* Prevent zoom on iOS */
    }
  }
`;