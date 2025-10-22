import styled from 'styled-components';

export const ContractDraftingContainer = styled.div`
    --primary-color:#1C2951;
    --primary-gold:#D4AF37;
    --light-gold:#F4E9C1;
    --text-primary:#2d3748;
    --text-muted:#718096;
    --shadow-lg:0 16px 48px rgba(28,41,81,0.16);

    font-family: 'Inter', system-ui, Arial, sans-serif;
    color:var(--text-primary);
    background:#f7fafc;

    h1,h2,h3{ font-family:'Playfair Display', serif; }
    .bc-section{ padding:64px 20px; }
    .bc-container{ max-width:1280px; margin:0 auto; display:grid; grid-template-columns:1fr 380px; gap:36px; align-items:start; }
    .bc-main{ background:#fff; padding:44px; border-radius:18px; box-shadow:var(--shadow-lg); border:1px solid rgba(28,41,81,0.06); }
    .bc-hero{ display:flex; gap:20px; align-items:center; margin-bottom:18px; }
    .bc-hero h1{ font-size:clamp(2rem,4vw,3rem); margin:0; background:linear-gradient(135deg,var(--primary-color),var(--primary-gold)); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; }
    .bc-byline{ color:var(--text-muted); margin-bottom:22px; }
    .lottie-hero{ width:220px; height:220px; border-radius:18px; padding:8px; background:linear-gradient(135deg, rgba(212,175,55,0.08), #fff); display:flex; align-items:center; justify-content:center; border:1px solid rgba(28,41,81,0.04); }
    .bc-feature-grid{ display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:18px; margin:22px 0; }
    .feature{ background:linear-gradient(180deg,#fff,#fbfdff); padding:18px; border-radius:12px; box-shadow:0 8px 28px rgba(28,41,81,0.06); }
    .feature .icon{ width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,rgba(212,175,55,0.08),rgba(28,41,81,0.04)); display:flex; align-items:center; justify-content:center; font-size:1.4rem; color:var(--primary-gold); margin-bottom:10px }
    .bc-main h2{ color:var(--primary-color); margin-top:28px; margin-bottom:14px; }
    .faq-table{ width:100%; border-collapse:collapse; margin-top:16px; }
    .faq-table th, .faq-table td{ padding:14px; border-bottom:1px solid #eee; text-align:left; }
    .faq-table th{ background:var(--light-gold); color:var(--primary-color); }

    /* sidebar */
    .bc-sidebar{ position:relative; }
    .sidebar-card{ padding:20px; border-radius:12px; background:linear-gradient(180deg,#fff,#f7fafc); box-shadow:0 12px 36px rgba(28,41,81,0.06); border:1px solid rgba(28,41,81,0.04); }
    .contact-form{ display:flex; flex-direction:column; gap:12px; }
    .contact-form input, .contact-form textarea, .contact-form select{ padding:10px; border-radius:8px; border:1px solid #ddd; }
    .contact-form button{ background:linear-gradient(90deg,var(--primary-color),var(--primary-gold)); color:#fff; padding:10px; border-radius:10px; border:none; font-weight:700; cursor:pointer }

    @media (max-width:900px){ .bc-container{ grid-template-columns:1fr; } .lottie-hero{ width:160px;height:160px } }
`;
