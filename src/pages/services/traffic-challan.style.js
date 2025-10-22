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

  body, .traffic-section { font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; color: var(--text-primary); }
  h1,h2,h3,h4,h5,h6 { font-family: 'Playfair Display', serif; font-weight:700; }

  .traffic-section { padding:60px 24px; background: linear-gradient(180deg,#f8f9fb 0%,#fff 50%,#f8f9fb 100%); }
  .traffic-container { display:grid; grid-template-columns:1fr 380px; gap:40px; max-width:1280px; margin:0 auto; align-items:start; }

  .traffic-main { background:white; padding:48px 40px; border-radius:20px; box-shadow:var(--shadow-lg); border:1px solid rgba(28,41,81,0.08); }
  .traffic-main h1 { font-size:clamp(2rem,4vw,3.5rem); background:linear-gradient(135deg,var(--primary-color),var(--primary-gold)); -webkit-background-clip:text; -webkit-text-fill-color:transparent; margin-bottom:12px; line-height:1.2; }
  .traffic-byline { color:var(--text-muted); font-size:1.05rem; margin-bottom:24px; display:flex; align-items:center; gap:8px; }
  .traffic-byline::before { content:''; width:4px; height:18px; background:linear-gradient(180deg,var(--primary-color),var(--primary-gold)); border-radius:2px; display:inline-block; }

  .callout { background: linear-gradient(135deg, rgba(28,41,81,0.05), rgba(212,175,55,0.08)); border-left:5px solid var(--primary-color); padding:20px 24px; border-radius:12px; margin:24px 0; box-shadow:var(--shadow-sm); }
  .highlight-box { background: linear-gradient(135deg,#f8f9fb 0%,#fff 100%); border:2px solid rgba(212,175,55,0.2); border-radius:16px; padding:24px; margin:24px 0; box-shadow:var(--shadow-md); }

  .feature-grid { display:grid; grid-template-columns: repeat(auto-fit,minmax(280px,1fr)); gap:24px; margin:32px 0; }
  .feature-card { background:white; padding:32px 24px; border-radius:16px; box-shadow:var(--shadow-md); border:1px solid rgba(28,41,81,0.08); text-align:center; transition:all .3s ease; }
  .feature-card .icon-box { width:80px; height:80px; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 20px; background:linear-gradient(135deg,var(--primary-color),var(--primary-gold)); color:white; box-shadow:var(--shadow-md); }

  .stats-grid { display:grid; grid-template-columns: repeat(auto-fit,minmax(200px,1fr)); gap:20px; margin:32px 0; }
  .stat-card { background: linear-gradient(135deg, rgba(28,41,81,0.05), rgba(212,175,55,0.08)); padding:24px; border-radius:12px; text-align:center; border:1px solid rgba(28,41,81,0.1); }

  .process-timeline { position:relative; padding-left:40px; margin:40px 0; }
  .process-timeline::before { content:''; position:absolute; left:20px; top:0; bottom:0; width:3px; background: linear-gradient(to bottom, var(--primary-color), var(--primary-gold)); border-radius:2px; }
  .timeline-item { position:relative; margin-bottom:40px; padding-left:40px; }
  .timeline-marker { position:absolute; left:-47px; top:0; width:40px; height:40px; border-radius:50%; display:flex; align-items:center; justify-content:center; background:linear-gradient(135deg,var(--primary-color),var(--primary-gold)); color:white; box-shadow:var(--shadow-md); }

  .comparison-table { width:100%; border-collapse:collapse; margin:32px 0; box-shadow:var(--shadow-md); border-radius:12px; overflow:hidden; }
  .comparison-table th { background:linear-gradient(90deg,var(--primary-color),var(--primary-gold)); color:white; padding:16px; text-align:left; font-weight:700; }
  .comparison-table td { padding:16px; border-bottom:1px solid rgba(28,41,81,0.1); background:white; }

  .traffic-sidebar { position:sticky; top:20px; }
  .sidebar-scroll-wrapper { max-height: calc(100vh - 40px); overflow-y:auto; scrollbar-width:thin; scrollbar-color: var(--primary-gold) rgba(28,41,81,0.1); }
  .contact-card { background:white; padding:32px 24px; border-radius:16px; box-shadow:var(--shadow-lg); border:1px solid rgba(28,41,81,0.08); }

  .quick-links { position:fixed; top:0; left:0; right:0; background:rgba(255,255,255,0.95); backdrop-filter: blur(10px); border-bottom:1px solid rgba(28,41,81,0.1); transform: translateY(-100%); transition: transform .3s ease; z-index:1000; box-shadow:var(--shadow-sm); }
  .quick-links.visible { transform: translateY(0); }
  .ql-container { max-width:1280px; margin:0 auto; padding:12px 24px; display:flex; gap:24px; overflow-x:auto; }

  .inline-lottie { display:inline-block; width:120px; height:120px; margin:20px; vertical-align:middle; }
  .section-lottie { width:100%; max-width:400px; height:300px; margin:40px auto; }

  .back-to-top { position:fixed; bottom:30px; right:30px; width:50px; height:50px; border-radius:50%; background:linear-gradient(135deg,var(--primary-color),var(--primary-gold)); color:white; display:none; align-items:center; justify-content:center; box-shadow:var(--shadow-lg); z-index:999; transition: all .3s ease; }
  .back-to-top.visible { display:flex; }

  @media (max-width:1100px) { .traffic-container { grid-template-columns: 1fr 320px; } }
  @media (max-width:900px) { .traffic-container { grid-template-columns:1fr; } .traffic-sidebar { position:static; } .sidebar-scroll-wrapper { max-height:none; overflow:visible; } .quick-links { position:static; transform:none; } }
`;
