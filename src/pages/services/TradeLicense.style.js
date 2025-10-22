import styled from 'styled-components';

export const PageContent = styled.div`
  :root {
    --primary-color: #1C2951;
    --primary-gold: #D4AF37;
    --text-primary: #2d3748;
    --text-secondary: #4a5568;
    --text-muted: #718096;
    --shadow-sm: 0 2px 8px rgba(28,41,81,0.08);
    --shadow-md: 0 8px 24px rgba(28,41,81,0.12);
    --shadow-lg: 0 16px 48px rgba(28,41,81,0.16);
  }

  body, .trade-section { font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; color: var(--text-primary); }
  h1,h2,h3,h4,h5,h6 { font-family: 'Playfair Display', serif; font-weight:700; }

  .trade-section { padding: 60px 24px; background: linear-gradient(180deg,#f8f9fb 0%,#fff 50%,#f8f9fb 100%); }
  .trade-container { display:grid; grid-template-columns: 1fr 380px; gap:40px; max-width:1280px; margin:0 auto; align-items:start; }

  .trade-main { background:white; padding:48px 40px; border-radius:20px; box-shadow:var(--shadow-lg); border:1px solid rgba(28,41,81,0.08); }
  .trade-main h1 { font-size:clamp(2rem,4vw,3.5rem); background:linear-gradient(135deg,var(--primary-color),var(--primary-gold)); -webkit-background-clip:text; -webkit-text-fill-color:transparent; margin-bottom:12px; line-height:1.2; }
  .trade-byline { color:var(--text-muted); font-size:1.05rem; margin-bottom:24px; display:flex; align-items:center; gap:8px; }
  .trade-byline::before { content:''; width:4px; height:18px; background:linear-gradient(180deg,var(--primary-color),var(--primary-gold)); border-radius:2px; display:inline-block; }

  .trade-main p { color:var(--text-secondary); line-height:1.8; margin-bottom:16px; font-size:1.05rem; }
  .trade-main h2 { color:var(--primary-color); font-size:clamp(1.6rem,2.8vw,2.2rem); margin-top:40px; margin-bottom:20px; position:relative; padding-bottom:12px; }
  .trade-main h2::after { content:''; position:absolute; bottom:0; left:0; width:60px; height:4px; background:linear-gradient(90deg,var(--primary-color),var(--primary-gold)); border-radius:2px; }

  .callout { background: linear-gradient(135deg, rgba(28,41,81,0.05), rgba(212,175,55,0.08)); border-left:5px solid var(--primary-color); padding:20px 24px; border-radius:12px; margin:24px 0; box-shadow:var(--shadow-sm); }
  .highlight-box { background: linear-gradient(135deg,#f8f9fb 0%,#fff 100%); border:2px solid rgba(212,175,55,0.2); border-radius:16px; padding:24px; margin:24px 0; position:relative; box-shadow:var(--shadow-md); }
  .feature-grid { display:grid; grid-template-columns: repeat(auto-fit,minmax(280px,1fr)); gap:24px; margin:32px 0; }
  .feature-card { background:white; padding:32px 24px; border-radius:16px; box-shadow:var(--shadow-md); border:1px solid rgba(28,41,81,0.08); text-align:center; transition:all .3s ease; }
  .feature-card .icon-box { width:80px; height:80px; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 20px; background:linear-gradient(135deg,var(--primary-color),var(--primary-gold)); color:white; box-shadow:var(--shadow-md); }
  .feature-card h4 { color:var(--primary-color); margin-bottom:12px; }

  .stats-grid { display:grid; grid-template-columns: repeat(auto-fit,minmax(200px,1fr)); gap:20px; margin:32px 0; }
  .stat-card { background: linear-gradient(135deg, rgba(28,41,81,0.05), rgba(212,175,55,0.08)); padding:24px; border-radius:12px; text-align:center; border:1px solid rgba(28,41,81,0.1); }
  .stat-card .stat-number { font-size:2.2rem; font-weight:700; color:var(--primary-color); margin-bottom:8px; }

  .process-timeline { position:relative; padding-left:40px; margin:40px 0; }
  .process-timeline::before { content:''; position:absolute; left:20px; top:0; bottom:0; width:3px; background: linear-gradient(to bottom, var(--primary-color), var(--primary-gold)); border-radius:2px; }
  .timeline-item { position:relative; margin-bottom:40px; padding-left:40px; }
  .timeline-marker { position:absolute; left:-47px; top:0; width:40px; height:40px; border-radius:50%; display:flex; align-items:center; justify-content:center; background:linear-gradient(135deg,var(--primary-color),var(--primary-gold)); color:white; box-shadow:var(--shadow-md); }

  .comparison-table { width:100%; border-collapse:collapse; margin:32px 0; box-shadow:var(--shadow-md); border-radius:12px; overflow:hidden; }
  .comparison-table th { background:linear-gradient(90deg,var(--primary-color),var(--primary-gold)); color:white; padding:16px; text-align:left; font-weight:700; text-transform:uppercase; }
  .comparison-table td { padding:16px; border-bottom:1px solid rgba(28,41,81,0.1); background:white; }

  .trade-sidebar { position:sticky; top:20px; }
  .sidebar-scroll-wrapper { max-height: calc(100vh - 40px); overflow-y:auto; scrollbar-width:thin; scrollbar-color: var(--primary-gold) rgba(28,41,81,0.1); }
  .contact-card { background:white; padding:32px 24px; border-radius:16px; box-shadow:var(--shadow-lg); border:1px solid rgba(28,41,81,0.08); margin-bottom:24px; }
  .contact-card h4 { color:var(--primary-color); font-size:1.4rem; margin-bottom:8px; text-align:center; }
  .contact-card .muted { color:var(--text-muted); text-align:center; margin-bottom:16px; }

  .quick-form input, .quick-form textarea { width:100%; padding:14px 16px; border:2px solid rgba(28,41,81,0.1); border-radius:8px; margin-bottom:16px; font-family:inherit; }
  .btn-primary { width:100%; background: linear-gradient(135deg,var(--primary-color),var(--primary-gold)); color:white; border:none; padding:16px; border-radius:8px; font-weight:700; cursor:pointer; }

  .quick-links { position:fixed; top:0; left:0; right:0; background:rgba(255,255,255,0.95); backdrop-filter: blur(10px); border-bottom:1px solid rgba(28,41,81,0.1); transform: translateY(-100%); transition: transform .3s ease; z-index:1000; box-shadow:var(--shadow-sm); }
  .quick-links.visible { transform: translateY(0); }
  .ql-container { max-width:1280px; margin:0 auto; padding:12px 24px; display:flex; gap:24px; overflow-x:auto; }

  .sr-only { position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0; }

  .back-to-top { position:fixed; bottom:30px; right:30px; width:50px; height:50px; border-radius:50%; background:linear-gradient(135deg,var(--primary-color),var(--primary-gold)); color:white; display:none; align-items:center; justify-content:center; box-shadow:var(--shadow-lg); z-index:999; transition: all .3s ease; }
  .back-to-top.visible { display:flex; transform: translateY(0); }

  @media (max-width:1100px) { .trade-container { grid-template-columns: 1fr 320px; gap:32px; } }
  @media (max-width:900px) { .trade-container { grid-template-columns: 1fr; } .trade-sidebar { position:static; } .sidebar-scroll-wrapper { max-height:none; overflow:visible; } .quick-links { position:static; transform:none; } }
  @media (max-width:640px) { .trade-main { padding:24px 20px; border-radius:12px; } .trade-main h1 { font-size:1.8rem; } .feature-grid { grid-template-columns:1fr; } .stats-grid { grid-template-columns:1fr; } }
`;
