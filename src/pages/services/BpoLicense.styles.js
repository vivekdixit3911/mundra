import styled from 'styled-components';

export const BpoLicenseContainer = styled.div`
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

    .bpo-section {
        padding: 60px 24px;
        background: linear-gradient(180deg, #f8f9fb 0%, #ffffff 50%, #f8f9fb 100%);
    }

    .bpo-container {
        display: grid;
        grid-template-columns: 1fr 380px;
        gap: 40px;
        max-width: 1280px;
        margin: 0 auto;
        align-items: start;
    }

    .bpo-main {
        background: white;
        padding: 48px 40px;
        border-radius: 20px;
        box-shadow: var(--shadow-lg);
        border: 1px solid rgba(28, 41, 81, 0.08);
        position: relative;
        overflow: hidden;
    }

    .bpo-main h1 {
        font-size: clamp(2rem, 4vw, 3.5rem);
        background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-gold) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 12px;
        letter-spacing: 0.5px;
        line-height: 1.2;
        position: relative;
        z-index: 2;
    }

    .bpo-byline {
        color: var(--text-muted);
        font-size: 1.1rem;
        margin-bottom: 24px;
        display: flex;
        align-items: center;
        gap: 8px;
        position: relative;
        z-index: 2;
    }

    .bpo-byline::before {
        content: '';
        display: inline-block;
        width: 4px;
        height: 18px;
        background: linear-gradient(180deg, var(--primary-color), var(--primary-gold));
        border-radius: 2px;
    }

    .hero-animation {
        position: absolute;
        top: 0;
        right: 0;
        width: 300px;
        height: 300px;
        opacity: 0.1;
        z-index: 1;
        pointer-events: none;
    }

    .highlight-box {
        background: linear-gradient(135deg, #f8f9fb 0%, #ffffff 100%);
        border-left: 4px solid var(--primary-gold);
        border-radius: 8px;
        padding: 24px;
        margin: 32px 0;
        box-shadow: var(--shadow-sm);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .highlight-box:hover {
        transform: translateY(-3px);
        box-shadow: var(--shadow-md);
    }

    .highlight-box h3 {
        color: var(--primary-color);
        margin-top: 0;
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .highlight-box h3 i {
        color: var(--primary-gold);
    }

    .feature-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 24px;
        margin: 40px 0;
    }

    .feature-card {
        background: white;
        border-radius: 12px;
        padding: 28px 24px;
        box-shadow: var(--shadow-sm);
        border: 1px solid rgba(28, 41, 81, 0.05);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    .feature-card:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-md);
    }

    .feature-card .icon-box {
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, rgba(28, 41, 81, 0.05) 0%, rgba(212, 175, 55, 0.1) 100%);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 20px;
        color: var(--primary-gold);
        font-size: 24px;
    }

    .feature-card h3 {
        font-size: 1.25rem;
        margin: 0 0 12px 0;
        color: var(--primary-color);
        text-align: center;
    }

    .feature-card p {
        color: var(--text-secondary);
        margin: 0;
        font-size: 0.95rem;
        line-height: 1.6;
        text-align: center;
    }

    .process-timeline {
        position: relative;
        max-width: 900px;
        margin: 40px auto;
    }

    .process-timeline::before {
        content: '';
        position: absolute;
        width: 4px;
        background-color: var(--primary-gold);
        top: 0;
        bottom: 0;
        left: 50%;
        margin-left: -2px;
    }

    .timeline-item {
        padding: 10px 40px;
        position: relative;
        width: 50%;
        box-sizing: border-box;
        margin-bottom: 30px;
    }

    .timeline-item:nth-child(odd) {
        left: 0;
    }

    .timeline-item:nth-child(even) {
        left: 50%;
    }

    .timeline-marker {
        position: absolute;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: var(--primary-color);
        top: 15px;
        right: -20px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        z-index: 1;
    }

    .timeline-item:nth-child(even) .timeline-marker {
        left: -20px;
        right: auto;
    }

    .timeline-content {
        padding: 20px;
        background: white;
        border-radius: 8px;
        box-shadow: var(--shadow-sm);
        border: 1px solid rgba(28, 41, 81, 0.05);
    }

    .bpo-sidebar {
        position: sticky;
        top: 100px;
    }

    .sidebar-card {
        background: white;
        border-radius: 16px;
        box-shadow: var(--shadow-lg);
        overflow: hidden;
        margin-bottom: 24px;
        border: 1px solid rgba(28, 41, 81, 0.05);
    }

    .sidebar-header {
        background: linear-gradient(135deg, var(--primary-color), #2c3e6b);
        color: white;
        padding: 18px 24px;
        font-size: 1.25rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .sidebar-header i {
        color: var(--primary-gold);
    }

    .sidebar-content {
        padding: 24px;
    }

    .form-group {
        margin-bottom: 16px;
    }

    .form-group label {
        display: block;
        margin-bottom: 6px;
        font-weight: 500;
        color: var(--text-primary);
        font-size: 0.9rem;
    }

    .form-control {
        width: 100%;
        padding: 10px 14px;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        font-size: 0.95rem;
        transition: border-color 0.2s, box-shadow 0.2s;
        background-color: #f8fafc;
    }

    .form-control:focus {
        outline: none;
        border-color: var(--primary-gold);
        box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2);
        background-color: white;
    }

    textarea.form-control {
        min-height: 100px;
        resize: vertical;
    }

    .btn-primary {
        width: 100%;
        background: linear-gradient(135deg, var(--primary-color), var(--primary-gold));
        color: white;
        border: none;
        padding: 14px;
        border-radius: 8px;
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }

    .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(28, 41, 81, 0.15);
    }

    .btn-primary:active {
        transform: translateY(0);
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .animate-fade-in-up {
        animation: fadeInUp 0.6s ease-out forwards;
    }

    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }

    @media (max-width: 1024px) {
        .bpo-container {
            grid-template-columns: 1fr;
            gap: 30px;
        }

        .bpo-sidebar {
            position: static;
            max-width: 600px;
            margin: 0 auto;
            width: 100%;
        }
    }

    @media (max-width: 768px) {
        .bpo-main {
            padding: 32px 24px;
            border-radius: 16px;
        }

        .feature-grid {
            grid-template-columns: 1fr;
        }

        .process-timeline::before {
            left: 31px;
        }

        .timeline-item {
            width: 100%;
            padding-left: 70px;
            padding-right: 25px;
        }

        .timeline-item:nth-child(even) {
            left: 0;
        }

        .timeline-marker {
            left: 11px !important;
            right: auto !important;
        }
    }

    @media (max-width: 480px) {
        .bpo-section {
            padding: 40px 16px;
        }

        .bpo-main {
            padding: 24px 16px;
            border-radius: 12px;
        }

        .highlight-box {
            padding: 20px 16px;
            margin: 24px 0;
        }
    }
`;
