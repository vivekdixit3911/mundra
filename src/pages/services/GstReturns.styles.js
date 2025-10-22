import styled from 'styled-components';

export const GstReturnsContainer = styled.div`
    --primary-color: #1C2951;
    --secondary-color: #D4AF37;
    --accent-color: #D4AF37;
    --text-dark: #374151;
    --text-light: #6b7280;
    --bg-light: #f8fafc;
    --white: #ffffff;
    --gradient-primary: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
    --gradient-secondary: linear-gradient(135deg, #D4AF37 0%, #b59323 100%);
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 8px 25px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 15px 35px rgba(0, 0, 0, 0.12);
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --border-radius: 16px;

    .document-hero {
        min-height: 85vh;
        background: linear-gradient(135deg, #1C2951 0%, #1C2951 50%, #1C2951 100%);
        display: flex;
        align-items: center;
        position: relative;
        overflow: hidden;
        padding-top: 100px;
    }

    .document-hero::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23D4AF37" fill-opacity="0.03"><circle cx="30" cy="30" r="2"/></g></svg>');
        animation: drift 20s infinite linear;
    }

    @keyframes drift {
        from { transform: translateX(0); }
        to { transform: translateX(-60px); }
    }

    .hero-content {
        position: relative;
        z-index: 2;
        color: white;
        text-align: center;
    }

    .legal-overview {
        padding: 80px 0;
        background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        position: relative;

        @media (max-width: 768px) {
            padding: 60px 0;
        }
    }

    .container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 2rem;

        @media (max-width: 768px) {
            padding: 0 1rem;
        }
    }

    .section-header {
        text-align: center;
        margin-bottom: 4rem;

        @media (max-width: 768px) {
            margin-bottom: 3rem;
        }
    }

    .service-badge {
        display: inline-block;
        background: var(--gradient-secondary);
        color: var(--primary-color);
        padding: 0.5rem 1.5rem;
        border-radius: 25px;
        font-size: 0.9rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
        text-transform: uppercase;
        letter-spacing: 1px;

        @media (max-width: 768px) {
            font-size: 0.8rem;
            padding: 0.4rem 1.2rem;
        }
    }

    .hero-content {
        display: flex;
        align-items: center;
        gap: 40px;
        margin-bottom: 2rem;
        flex-wrap: wrap;

        @media (max-width: 768px) {
            flex-direction: column;
            gap: 2rem;
            text-align: center;
        }
    }

    .hero-text {
        flex: 1;
        min-width: 300px;

        @media (max-width: 768px) {
            min-width: auto;
        }
    }

    .gradient-text {
        font-size: clamp(2.5rem, 5vw, 4rem);
        font-weight: 700;
        margin-bottom: 1.5rem;
        line-height: 1.2;

        @media (max-width: 768px) {
            font-size: clamp(2rem, 4vw, 3rem);
            margin-bottom: 1rem;
        }
    }

    .hero-description {
        font-size: 1.2rem;
        color: #64748b;
        max-width: 800px;
        margin: 0 auto;
        line-height: 1.6;

        @media (max-width: 768px) {
            font-size: 1rem;
        }
    }

    .hero-animation {
        flex: 0 0 250px;

        @media (max-width: 768px) {
            flex: none;
        }
    }

    .hero-badge {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        background: rgba(212, 175, 55, 0.15);
        border: 1px solid rgba(212, 175, 55, 0.3);
        color: var(--secondary-color);
        padding: 0.5rem 1.5rem;
        border-radius: 50px;
        font-size: 0.9rem;
        font-weight: 600;
        margin-bottom: 2rem;
        backdrop-filter: blur(10px);
    }

    .hero-title {
        font-size: clamp(2.5rem, 6vw, 5rem);
        font-weight: 800;
        margin-bottom: 1.5rem;
        line-height: 1.1;
        background: linear-gradient(135deg, #ffffff 0%, #D4AF37 50%, #ffffff 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .hero-subtitle {
        font-size: clamp(1.1rem, 2.5vw, 1.4rem);
        color: rgba(255, 255, 255, 0.85);
        margin-bottom: 3rem;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
        line-height: 1.6;
    }

    .hero-buttons {
        display: flex;
        gap: 1.5rem;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 4rem;
    }

    .btn-primary, .btn-secondary {
        padding: 1rem 2.5rem;
        border-radius: 50px;
        font-weight: 600;
        font-size: 1rem;
        text-decoration: none;
        transition: var(--transition);
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
    }

    .btn-primary {
        background: var(--gradient-secondary);
        color: var(--primary-color);
        box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
    }

    .btn-primary:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 40px rgba(212, 175, 55, 0.4);
    }

    .btn-secondary {
        background: rgba(255, 255, 255, 0.1);
        color: white;
        border: 2px solid rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(10px);
    }

    .btn-secondary:hover {
        background: rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 255, 255, 0.5);
        transform: translateY(-3px);
    }

    .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-top: 4rem;
    }

    .feature-card {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: var(--border-radius);
        padding: 2rem;
        text-align: center;
        backdrop-filter: blur(10px);
        transition: var(--transition);
    }

    .feature-card:hover {
        transform: translateY(-5px);
        background: rgba(255, 255, 255, 0.15);
        border-color: rgba(212, 175, 55, 0.4);
    }

    .feature-icon {
        width: 70px;
        height: 70px;
        background: var(--gradient-secondary);
        border-radius: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1.5rem;
        font-size: 1.8rem;
        color: var(--primary-color);
    }

    .services-modern {
        padding: 100px 0;
        background: var(--bg-light);
    }

    .section-header {
        text-align: center;
        margin-bottom: 4rem;
    }

    .section-title {
        font-size: clamp(2rem, 4vw, 3.5rem);
        color: var(--primary-color);
        font-weight: 800;
        margin-bottom: 1rem;
        line-height: 1.2;
    }

    .section-subtitle {
        font-size: 1.2rem;
        color: var(--text-light);
        max-width: 800px;
        margin: 0 auto;
        line-height: 1.6;
    }

    .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 3rem;
    }

    .service-category {
        background: var(--white);
        padding: 3rem;
        border-radius: 24px;
        box-shadow: var(--shadow-md);
        transition: var(--transition);
        border-left: 5px solid transparent;
    }

    .service-category:nth-child(1) { border-left-color: #D4AF37; }
    .service-category:nth-child(2) { border-left-color: #D4AF37; }
    .service-category:nth-child(3) { border-left-color: #E6C57F; }

    .service-category:hover {
        transform: translateY(-8px);
        box-shadow: var(--shadow-lg);
    }

    .category-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 2rem;
    }

    .category-icon {
        width: 60px;
        height: 60px;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        color: white;
    }

    .category-icon.blue { background: linear-gradient(135deg, #2563eb, #1d4ed8); }
    .category-icon.green { background: linear-gradient(135deg, #D4AF37, #E6C57F); }
    .category-icon.orange { background: linear-gradient(135deg, #E6C57F, #C9A02D); }

    .category-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--primary-color);
        margin: 0;
    }

    .service-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .service-item {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        margin-bottom: 1.2rem;
        padding: 1rem 0;
        border-bottom: 1px solid #f1f5f9;
    }

    .service-item:last-child {
        border-bottom: none;
    }

    .service-check {
        width: 24px;
        height: 24px;
        background: linear-gradient(135deg, #D4AF37, #E6C57F);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-top: 0.2rem;
    }

    .service-check i {
        color: white;
        font-size: 0.8rem;
    }

    .service-details h4 {
        font-size: 1rem;
        font-weight: 600;
        color: var(--primary-color);
        margin: 0 0 0.5rem 0;
    }

    .service-details p {
        font-size: 0.9rem;
        color: var(--text-light);
        margin: 0;
        line-height: 1.5;
    }

    .process-timeline {
        padding: 100px 0;
        background: var(--white);
    }

    .timeline-container {
        max-width: 1000px;
        margin: 0 auto;
        position: relative;
    }

    .timeline-line {
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        width: 3px;
        background: linear-gradient(to bottom, var(--secondary-color), var(--accent-color));
        transform: translateX(-50%);
    }

    .timeline-item {
        display: flex;
        align-items: center;
        margin-bottom: 4rem;
        position: relative;
    }

    .timeline-item:nth-child(even) {
        flex-direction: row-reverse;
    }

    .timeline-content {
        width: 45%;
        background: var(--white);
        padding: 2.5rem;
        border-radius: 20px;
        box-shadow: var(--shadow-md);
        position: relative;
        transition: var(--transition);
    }

    .timeline-content:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-lg);
    }

    .timeline-number {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 60px;
        height: 60px;
        background: var(--gradient-secondary);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
        font-size: 1.2rem;
        color: var(--primary-color);
        border: 4px solid var(--white);
    }

    .pricing-modern {
        padding: 100px 0;
        background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    }

    .pricing-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2.5rem;
    }

    .pricing-card {
        background: var(--white);
        border-radius: 24px;
        padding: 3rem;
        text-align: center;
        box-shadow: var(--shadow-md);
        transition: var(--transition);
        position: relative;
        overflow: hidden;
    }

    .pricing-card:hover {
        transform: translateY(-10px);
        box-shadow: var(--shadow-lg);
    }

    .pricing-card.featured {
        border: 2px solid var(--secondary-color);
        transform: scale(1.05);
    }

    .pricing-card.featured::before {
        content: 'Most Popular';
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--gradient-secondary);
        color: var(--primary-color);
        padding: 0.5rem 1.5rem;
        border-radius: 50px;
        font-size: 0.8rem;
        font-weight: 600;
    }

    .pricing-icon {
        width: 80px;
        height: 80px;
        margin: 0 auto 2rem;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        color: white;
    }

    .pricing-icon.basic { background: linear-gradient(135deg, #D4AF37, #E6C57F); }
    .pricing-icon.premium { background: linear-gradient(135deg, #D4AF37, #b59323); }
    .pricing-icon.enterprise { background: linear-gradient(135deg, #D4AF37, #2D4A7C); }

    .pricing-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--primary-color);
        margin-bottom: 1rem;
    }

    .pricing-price {
        font-size: 2.5rem;
        font-weight: 800;
        color: var(--secondary-color);
        margin-bottom: 2rem;
    }

    .pricing-features {
        list-style: none;
        padding: 0;
        margin: 0 0 2.5rem 0;
        text-align: left;
    }

    .pricing-features li {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
        font-size: 0.95rem;
        color: var(--text-dark);
    }

    .pricing-features i {
        color: #D4AF37;
        font-size: 1rem;
    }

    .pricing-cta {
        width: 100%;
        padding: 1rem 2rem;
        border: none;
        border-radius: 50px;
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer;
        transition: var(--transition);
        text-decoration: none;
        display: inline-block;
        text-align: center;
    }

    .pricing-cta.primary {
        background: var(--gradient-secondary);
        color: var(--primary-color);
    }

    .pricing-cta.secondary {
        background: transparent;
        color: var(--primary-color);
        border: 2px solid var(--primary-color);
    }

    .pricing-cta:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    }

    .cta-modern {
        padding: 100px 0;
        background: var(--gradient-primary);
        color: white;
        text-align: center;
    }

    .cta-title {
        font-size: clamp(2.5rem, 5vw, 4rem);
        font-weight: 800;
        margin-bottom: 1.5rem;
        line-height: 1.2;
    }

    .cta-subtitle {
        font-size: 1.3rem;
        color: rgba(255, 255, 255, 0.85);
        margin-bottom: 3rem;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
    }

    .cta-buttons {
        display: flex;
        gap: 2rem;
        justify-content: center;
        flex-wrap: wrap;
    }

    @media (max-width: 1024px) {
        .services-grid {
            grid-template-columns: 1fr;
        }

        .timeline-line {
            left: 30px;
        }

        .timeline-item {
            flex-direction: row !important;
            padding-left: 80px;
        }

        .timeline-content {
            width: 100%;
        }

        .timeline-number {
            left: 30px;
        }
    }

    @media (max-width: 768px) {
        .document-hero {
            min-height: 70vh;
            padding-top: 80px;
        }

        .hero-buttons {
            flex-direction: column;
            align-items: center;
        }

        .btn-primary, .btn-secondary {
            width: 100%;
            max-width: 300px;
        }

        .features-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }

        .services-grid {
            gap: 2rem;
        }

        .service-category {
            padding: 2rem;
        }

        .pricing-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .pricing-card.featured {
            transform: none;
        }

        .cta-buttons {
            flex-direction: column;
            align-items: center;
        }

        section {
            padding: 60px 0;
        }
    }

    @media (max-width: 480px) {
        .feature-card {
            padding: 1.5rem;
        }

        .service-category {
            padding: 1.5rem;
        }

        .timeline-item {
            padding-left: 60px;
        }

        .timeline-number {
            width: 50px;
            height: 50px;
            font-size: 1rem;
        }

        .pricing-card {
            padding: 2rem 1.5rem;
        }

        section {
            padding: 40px 0;
        }
    }
`;
