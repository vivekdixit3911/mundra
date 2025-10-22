import styled from 'styled-components';

export const CompanyFormationContainer = styled.div`
    --primary-gold: #D4AF37;
    --light-gold: #F4E9C1;
    --primary-color: #1C2951;
    --text-primary:#2d3748;
    --text-secondary:#4a5568;
    --text-muted:#718096;
    --shadow-sm:0 2px 8px rgba(28,41,81,0.08);
    --shadow-md:0 8px 24px rgba(28,41,81,0.12);
    --shadow-lg:0 16px 48px rgba(28,41,81,0.16);

    font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    color:var(--text-primary);

    h1,h2,h3,h4,h5,h6{ font-family: 'Playfair Display', Georgia, 'Times New Roman', serif; font-weight:700; }

    .company-section{
        padding:60px 24px;
        background: linear-gradient(180deg, #fff8f0 0%, #ffffff 50%, #fffbf5 100%);
    }
    .company-container{
        display:grid;
        grid-template-columns: 1fr 380px;
        gap:40px;
        max-width:1280px;
        margin:0 auto;
        align-items:start;
    }

    .company-main{
        background: white;
        padding:48px 40px;
        border-radius:20px;
        box-shadow:var(--shadow-lg);
        border:1px solid rgba(28,41,81,0.08);
    }

    .company-main h1{
        font-size:clamp(2rem, 4vw, 3.5rem);
        background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-gold) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom:12px;
        letter-spacing:0.5px;
        line-height:1.2;
    }

    .company-byline{
        color:var(--text-muted);
        font-size:1.05rem;
        margin-bottom:24px;
        display:flex;
        align-items:center;
        gap:8px;
    }
    .company-byline::before{
        content:'';
        display:inline-block;
        width:4px;
        height:18px;
        background:linear-gradient(180deg, var(--primary-color), var(--primary-gold));
        border-radius:2px;
    }

    .company-main p{
        color:var(--text-secondary);
        line-height:1.8;
        margin-bottom:16px;
        font-size:1.05rem;
    }

    .company-main h2{
        color:var(--primary-color);
        font-size:clamp(1.6rem, 2.8vw, 2.2rem);
        margin-top:40px;
        margin-bottom:20px;
        position:relative;
        padding-bottom:12px;
    }
    .company-main h2::after{
        content:'';
        position:absolute;
        bottom:0;
        left:0;
        width:60px;
        height:4px;
        background:linear-gradient(90deg, var(--primary-color), var(--primary-gold));
        border-radius:2px;
    }

    .company-main h3{
        color:var(--text-primary);
        font-size:clamp(1.3rem, 2.2vw, 1.7rem);
        margin-top:32px;
        margin-bottom:16px;
        display:flex;
        align-items:center;
        gap:10px;
    }
    .company-main h3::before{
        content:'●';
        color:var(--primary-gold);
        font-size:0.7em;
    }

    .callout{
        background: linear-gradient(135deg, rgba(212,175,55,0.05) 0%, rgba(244,233,193,0.08) 100%);
        border-left:5px solid var(--primary-gold);
        padding:20px 24px;
        border-radius:12px;
        margin:24px 0;
        box-shadow:var(--shadow-sm);
    }
    .callout p{ margin-bottom:0; font-weight:500; }

    .highlight-box{
        background:linear-gradient(135deg, #fff5eb 0%, #fffbf5 100%);
        border:2px solid var(--primary-gold);
        border-radius:16px;
        padding:28px;
        margin:24px 0;
        box-shadow:var(--shadow-md);
        position:relative;
        overflow:hidden;
    }

    .feature-grid{
        display:grid;
        grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));
        gap:20px;
        margin:24px 0;
    }
    .feature-card{
        background:white;
        border:2px solid rgba(28,41,81,0.1);
        border-radius:16px;
        padding:24px;
        transition:all 0.3s ease;
        box-shadow:var(--shadow-sm);
    }
    .feature-card:hover{
        transform:translateY(-4px);
        box-shadow:var(--shadow-md);
        border-color:var(--primary-gold);
    }
    .feature-card h4{
        color:var(--primary-color);
        margin:0 0 12px 0;
        font-size:1.15rem;
    }

    .company-main ul, .company-main ol{
        padding-left:24px;
        margin:16px 0;
    }
    .company-main li{
        margin-bottom:12px;
        color:var(--text-secondary);
        line-height:1.7;
        padding-left:8px;
    }

    .icon-box{
        display:inline-flex;
        align-items:center;
        justify-content:center;
        width:48px;
        height:48px;
        background:linear-gradient(135deg, rgba(28,41,81,0.1), rgba(212,175,55,0.1));
        border-radius:12px;
        margin-right:12px;
    }
    .icon-box svg{
        width:24px;
        height:24px;
        fill:var(--primary-gold);
    }
    .feature-card .icon-box{
        width:56px;
        height:56px;
        margin-bottom:16px;
    }
    .feature-card .icon-box svg{
        width:28px;
        height:28px;
    }

    .comparison-table{
        width:100%;
        border-collapse:collapse;
        margin:24px 0;
        background:white;
        border-radius:12px;
        overflow:hidden;
        box-shadow:var(--shadow-sm);
        font-size:0.95rem;
    }
    .comparison-table th,
    .comparison-table td{
        padding:12px 14px;
        text-align:left;
        border-bottom:1px solid rgba(28,41,81,0.08);
    }
    .comparison-table th{
        background:linear-gradient(135deg, var(--primary-color), #2a3f6f);
        color:white;
        font-weight:700;
        text-transform:uppercase;
        font-size:0.85rem;
        letter-spacing:0.5px;
    }
    .comparison-table tbody tr:hover{
        background:rgba(212,175,55,0.05);
    }
    .comparison-table td strong{
        color:var(--primary-color);
    }

    .process-timeline{
        position:relative;
        padding:20px 0 20px 60px;
        margin:30px 0;
    }
    .process-timeline::before{
        content:'';
        position:absolute;
        left:20px;
        top:0;
        bottom:0;
        width:3px;
        background:linear-gradient(180deg, var(--primary-color), var(--primary-gold));
    }
    .process-step{
        position:relative;
        margin-bottom:30px;
        padding:20px;
        background:white;
        border-radius:12px;
        box-shadow:var(--shadow-sm);
        border-left:4px solid var(--primary-gold);
    }
    .process-step::before{
        content:'';
        position:absolute;
        left:-52px;
        top:24px;
        width:16px;
        height:16px;
        background:var(--primary-gold);
        border-radius:50%;
        border:3px solid white;
        box-shadow:0 0 0 3px var(--primary-color);
    }
    .process-step h4{
        color:var(--primary-color);
        margin:0 0 10px 0;
        font-size:1.2rem;
    }
    .process-step p{
        margin:0;
        color:var(--text-secondary);
        line-height:1.6;
    }

    @media (max-width:900px){
        .company-container{
            grid-template-columns:1fr;
        }
        .comparison-table{
            display:block;
            overflow-x:auto;
        }
    }
`;
