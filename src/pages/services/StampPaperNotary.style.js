import styled from 'styled-components';

export const PageContent = styled.div`
  /* Basic theme variables */
  :root {
    --primary-color: #1C2951;
    --primary-gold: #D4AF37;
    --text-primary: #2d3748;
    --text-secondary: #4a5568;
    --bg-soft: #f8f9fb;
  }

  /* Hero override from provided HTML */
  .hero {
    background: linear-gradient(135deg, rgba(28,41,81,0.95) 0%, rgba(43,63,107,0.9) 50%, rgba(59,89,152,0.85) 100%), url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') !important;
    background-size: cover !important;
    background-position: center !important;
    min-height: 60vh !important;
    display: flex;
    align-items: center;
    color: white;
  }

  /* Page layout */
  .service-overview, .modern-section, .service-process, .service-pricing, .service-cta {
    padding: 60px 16px;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
  }

  .overview-grid {
    display: grid;
    grid-template-columns: 1fr 420px;
    gap: 32px;
    align-items: center;
  }
  .overview-content h2 {
    color: var(--primary-color);
    font-family: 'Playfair Display', serif;
    font-size: 2.4rem;
    margin-bottom: 12px;
  }
  .lead-text { color: var(--text-secondary); font-size: 1.1rem; margin-bottom: 12px; }

  .key-benefits { display: flex; gap: 16px; margin-top: 20px; flex-wrap: wrap; }
  .benefit-item { display:flex; gap:12px; align-items:flex-start; background: white; padding:12px; border-radius:10px; box-shadow: 0 8px 24px rgba(28,41,81,0.06); }
  .benefit-item i { color: var(--primary-gold); font-size: 1.6rem; }

  .overview-image img { width:100%; border-radius:14px; display:block; }
  .image-badge { display:flex; gap:8px; align-items:center; margin-top:12px; color:var(--primary-color); font-weight:700; }

  /* Services grid */
  .services-grid { display:grid; grid-template-columns: repeat(auto-fit,minmax(240px,1fr)); gap:20px; margin-top:28px; }
  .service-card { background:white; padding:20px; border-radius:12px; box-shadow: 0 8px 24px rgba(28,41,81,0.06); }
  .service-card .service-icon i { font-size: 1.8rem; color: var(--primary-gold); margin-bottom:10px; }

  /* Process timeline */
  .process-timeline { margin-top:30px; display:grid; gap:18px; }
  .process-step { display:flex; gap:18px; background:white; padding:18px; border-radius:12px; box-shadow: 0 8px 24px rgba(28,41,81,0.06); }
  .step-number { width:56px; height:56px; border-radius:50%; background: linear-gradient(135deg,var(--primary-color),var(--primary-gold)); color:white; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:1.2rem; }

  /* Documents grid */
  .documents-grid { display:grid; grid-template-columns: repeat(auto-fit,minmax(220px,1fr)); gap:18px; margin-top:24px; }
  .document-category { background:white; padding:18px; border-radius:12px; box-shadow: 0 8px 24px rgba(28,41,81,0.06); }
  .document-list li { margin:8px 0; color:var(--text-secondary); }

  /* Pricing */
  .pricing-grid { display:grid; grid-template-columns: repeat(auto-fit,minmax(240px,1fr)); gap:18px; margin-top:24px; }
  .pricing-card { background:white; padding:20px; border-radius:12px; box-shadow: 0 8px 24px rgba(28,41,81,0.06); text-align:left; }
  .pricing-card.featured { border: 2px solid var(--primary-gold); }

  /* CTA */
  .service-cta { background: linear-gradient(90deg, rgba(28,41,81,0.03), rgba(212,175,55,0.03)); border-radius:12px; text-align:center; padding:48px 16px; }
  .btn { display:inline-block; padding:12px 18px; border-radius:8px; text-decoration:none; margin:8px; }
  .btn-primary { background: linear-gradient(135deg,var(--primary-color),var(--primary-gold)); color:white; }
  .btn-outline { border:1px solid var(--primary-color); color:var(--primary-color); background:transparent; }

  /* Back to top */
  .back-to-top { position: fixed; bottom: 28px; right: 28px; width:46px; height:46px; border-radius:50%; background:linear-gradient(135deg,var(--primary-color),var(--primary-gold)); color:white; display:flex; align-items:center; justify-content:center; transform: translateY(120px); opacity:0; transition: all .25s ease; z-index:999; }
  .back-to-top.visible { opacity:1; transform: translateY(0); }

  /* Responsive */
  @media (max-width: 900px) {
    .overview-grid { grid-template-columns: 1fr; }
  }
`;
