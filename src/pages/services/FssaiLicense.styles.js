import styled from 'styled-components';

export const FssaiLicenseContainer = styled.div`
    --primary-color: #1C2951;
    --primary-gold: #D4AF37;
    --text-secondary: #4a5568;

    font-family: 'Inter', sans-serif;
    color: #2d3748;
    background: linear-gradient(180deg, #f8f9fb 0%, #fff 50%, #f8f9fb 100%);

    h1, h2, h3 {
        font-family: 'Playfair Display', serif;
        color: var(--primary-color);
    }

    .fssai-section {
        padding: 48px 22px;

        @media (max-width: 768px) {
            padding: 32px 16px;
        }

        @media (max-width: 480px) {
            padding: 24px 12px;
        }
    }

    .fssai-container {
        max-width: 1240px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 380px;
        gap: 28px;
        align-items: start;

        @media (max-width: 1100px) {
            grid-template-columns: 1fr 320px;
            gap: 24px;
        }

        @media (max-width: 1024px) {
            grid-template-columns: 1fr;
            gap: 28px;
        }
    }

    .fssai-main {
        background: #fff;
        padding: 36px;
        border-radius: 16px;
        box-shadow: 0 12px 36px rgba(28, 41, 81, 0.06);
        border: 1px solid rgba(28, 41, 81, 0.05);

        @media (max-width: 768px) {
            padding: 28px 24px;
        }

        @media (max-width: 480px) {
            padding: 20px 16px;
        }
    }

    .fssai-main h1 {
        font-size: clamp(1.75rem, 3vw, 2.75rem);
        margin-bottom: 6px;

        @media (max-width: 768px) {
            font-size: clamp(1.5rem, 2.8vw, 2.2rem);
        }
    }

    .byline {
        color: var(--text-secondary);
        margin-bottom: 12px;
        font-size: 1.05rem;

        @media (max-width: 768px) {
            font-size: 1rem;
        }
    }

    .section-lottie {
        width: 100%;
        max-width: 460px;
        height: 320px;
        margin: 18px auto;

        @media (max-width: 768px) {
            height: 250px;
            margin: 16px auto;
        }

        @media (max-width: 480px) {
            height: 200px;
            margin: 14px auto;
        }
    }

    .feature-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 14px;
        margin: 22px 0;

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            gap: 12px;
            margin: 18px 0;
        }
    }

    .feature-card {
        background: #fff;
        padding: 16px;
        border-radius: 10px;
        border: 1px solid rgba(28, 41, 81, 0.04);
        box-shadow: 0 8px 22px rgba(28, 41, 81, 0.04);
        transition: all 0.3s ease;

        @media (max-width: 768px) {
            padding: 14px;
        }

        &:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 28px rgba(28, 41, 81, 0.08);
        }
    }

    .feature-card h4 {
        color: var(--primary-color);
        margin: 8px 0;
        font-size: 1.1rem;

        @media (max-width: 768px) {
            font-size: 1rem;
        }
    }

    .comparison-table {
        width: 100%;
        border-collapse: collapse;
        margin: 18px 0;
        border-radius: 12px;
        overflow: hidden;

        @media (max-width: 768px) {
            font-size: 0.9rem;
        }

        @media (max-width: 480px) {
            font-size: 0.8rem;
        }
    }

    .comparison-table th {
        background: linear-gradient(90deg, var(--primary-color), var(--primary-gold));
        color: #fff;
        padding: 12px;
        text-align: left;
        font-weight: 700;

        @media (max-width: 768px) {
            padding: 10px 8px;
        }
    }

    .comparison-table td {
        padding: 12px;
        border-bottom: 1px solid rgba(28, 41, 81, 0.06);
        background: #fff;

        @media (max-width: 768px) {
            padding: 10px 8px;
        }
    }

    .highlight-box {
        background: linear-gradient(135deg, #f8f9fb 0%, #fff 100%);
        padding: 16px;
        border-left: 4px solid var(--primary-gold);
        border-radius: 10px;
        margin: 16px 0;

        @media (max-width: 768px) {
            padding: 14px;
            margin: 14px 0;
        }
    }

    .fssai-sidebar {
        position: sticky;
        top: 22px;

        @media (max-width: 1024px) {
            position: static;
        }
    }

    .sidebar-card {
        background: #fff;
        padding: 18px;
        border-radius: 12px;
        border: 1px solid rgba(28, 41, 81, 0.05);
        box-shadow: 0 12px 28px rgba(28, 41, 81, 0.06);
        margin-bottom: 14px;

        @media (max-width: 768px) {
            padding: 16px;
            margin-bottom: 12px;
        }
    }

    .form-control {
        width: 100%;
        padding: 12px;
        border: 1px solid #e6eef8;
        border-radius: 8px;
        margin-bottom: 10px;
        font-size: 1rem;

        @media (max-width: 768px) {
            padding: 10px;
            font-size: 0.95rem;
        }

        &:focus {
            outline: none;
            border-color: var(--primary-gold);
            box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
        }
    }

    .btn-primary {
        background: linear-gradient(135deg, var(--primary-color), var(--primary-gold));
        color: #fff;
        padding: 12px;
        border-radius: 10px;
        border: none;
        width: 100%;
        font-weight: 700;
        cursor: pointer;
        font-size: 1rem;
        transition: all 0.3s ease;

        @media (max-width: 768px) {
            padding: 10px;
            font-size: 0.95rem;
        }

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(28, 41, 81, 0.2);
        }
    }

    .small-animate {
        transition: transform 0.35s ease, box-shadow 0.35s ease;

        &:hover {
            transform: translateY(-6px);
        }
    }
`;
