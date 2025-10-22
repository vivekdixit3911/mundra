import styled from 'styled-components';

export const ConsumerComplaintContainer = styled.div`
    --primary-color:#1C2951;
    --primary-gold:#D4AF37;
    --text-secondary:#4a5568;

    font-family:'Inter',sans-serif;
    color:#2d3748;
    background:linear-gradient(180deg,#f8f9fb 0%,#fff 50%,#f8f9fb 100%);

    h1,h2,h3{font-family:'Playfair Display',serif;color:var(--primary-color)}
    .cc-section{padding:60px 24px}
    .cc-container{max-width:1280px;margin:0 auto;display:grid;grid-template-columns:1fr 380px;gap:36px;align-items:start}
    .cc-main{background:#fff;padding:48px;border-radius:20px;box-shadow:0 16px 48px rgba(28,41,81,0.08);border:1px solid rgba(28,41,81,0.06)}
    .cc-main h1{font-size:clamp(2rem,3.5vw,3rem);margin-bottom:8px}
    .cc-byline{color:var(--text-secondary);margin-bottom:18px}
    .section-lottie{width:100%;max-width:420px;height:300px;margin:20px auto}
    .feature-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:18px;margin:28px 0}
    .feature-card{background:#fff;padding:20px;border-radius:12px;border:1px solid rgba(28,41,81,0.05);box-shadow:0 8px 26px rgba(28,41,81,0.04)}
    .feature-card h4{color:var(--primary-color);margin:8px 0}
    .comparison-table{width:100%;border-collapse:collapse;margin:20px 0;border-radius:12px;overflow:hidden}
    .comparison-table th{background:linear-gradient(90deg,var(--primary-color),var(--primary-gold));color:#fff;padding:14px;text-align:left;font-weight:700}
    .comparison-table td{padding:14px;border-bottom:1px solid rgba(28,41,81,0.06);background:#fff}
    .highlight-box{background:linear-gradient(135deg,#f8f9fb 0%,#fff 100%);padding:20px;border-left:4px solid var(--primary-gold);border-radius:10px;margin:20px 0}
    .cc-sidebar{position:sticky;top:22px}
    .sidebar-card{background:#fff;padding:22px;border-radius:12px;border:1px solid rgba(28,41,81,0.05);box-shadow:0 12px 28px rgba(28,41,81,0.06);margin-bottom:18px}
    .form-control{width:100%;padding:12px;border:1px solid #e6eef8;border-radius:8px;margin-bottom:12px}
    .btn-primary{background:linear-gradient(135deg,var(--primary-color),var(--primary-gold));color:#fff;padding:14px;border-radius:10px;border:none;width:100%;font-weight:700;cursor:pointer}
    .small-animate{transition:transform .35s ease,box-shadow .35s ease}
    .small-animate:hover{transform:translateY(-6px)}
    @media(max-width:1024px){
        .cc-container{grid-template-columns:1fr}
        .cc-sidebar{position:static}
    }
`;
