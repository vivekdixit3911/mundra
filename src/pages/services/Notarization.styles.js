
import styled from 'styled-components';

export const NotarySection = styled.section`
    padding: 60px 24px;
    background: linear-gradient(180deg, #f8f9fb 0%, #fff 50%, #f8f9fb 100%);
    font-family: 'Inter', system-ui, sans-serif;
    color: #2d3748;
`;

export const NotaryContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 380px;
    gap: 40px;
    max-width: 1280px;
    margin: 0 auto;
    align-items: start;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

export const NotaryMain = styled.article`
    background: white;
    padding: 48px 40px;
    border-radius: 20px;
    box-shadow: 0 16px 48px rgba(28, 41, 81, 0.12);
    border: 1px solid rgba(28, 41, 81, 0.06);

    h1, h2, h3, h4 {
        font-family: 'Playfair Display', Georgia, serif;
        font-weight: 700;
    }

    h1 {
        font-size: clamp(2rem, 4vw, 3.5rem);
        background: linear-gradient(135deg, #1C2951 0%, #D4AF37 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 12px;
        line-height: 1.2;
    }

    h2 {
        color: #1C2951;
        margin-top: 2rem;
        margin-bottom: 1rem;
    }

    p {
        color: #4a5568;
        font-size: 1.05rem;
        line-height: 1.75;
        margin-bottom: 16px;
    }

    ul, ol {
        padding-left: 20px;
    }

    li {
        margin-bottom: 0.5rem;
        line-height: 1.7;
    }
`;

export const NotaryByline = styled.p`
    color: #718096;
    font-size: 1.05rem;
    margin-bottom: 18px;
    display: flex;
    gap: 8px;
    align-items: center;
`;

export const FeatureGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    margin: 24px 0;
`;

export const FeatureCard = styled.div`
    background: white;
    padding: 24px;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(28, 41, 81, 0.08);
    border: 1px solid rgba(28, 41, 81, 0.06);
    text-align: center;

    .icon-box {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 16px;
        background: linear-gradient(135deg, #1C2951, #D4AF37);
        color: white;
    }

    h4 {
        color: #1C2951;
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }
`;

export const ComparisonTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 24px 0;
    box-shadow: 0 8px 24px rgba(28, 41, 81, 0.08);
    border-radius: 12px;
    overflow: hidden;

    th {
        background: linear-gradient(90deg, #1C2951, #D4AF37);
        color: white;
        padding: 12px;
        text-align: left;
    }

    td {
        padding: 12px;
        border-bottom: 1px solid rgba(28, 41, 81, 0.08);
        background: white;
    }

    tbody tr:last-child td {
        border-bottom: none;
    }
`;

export const NotarySidebar = styled.aside`
    position: sticky;
    top: 20px;

    @media (max-width: 900px) {
        position: relative;
        top: 0;
        margin-top: 2rem;
    }
`;

export const QuickLinksNav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(28, 41, 81, 0.1);
    transform: translateY(-100%);
    transition: transform .3s ease;
    z-index: 1000;

    &.visible {
        transform: translateY(0);
    }

    .ql-container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 12px 24px;
        display: flex;
        gap: 18px;
        overflow-x: auto;
    }

    .ql-container a {
        color: #4a5568;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.95rem;
        padding: 8px 12px;
        border-radius: 20px;
        white-space: nowrap;
        cursor: pointer;

        &:hover {
            background-color: #f0f0f0;
        }
    }
`;

export const BackToTopButton = styled.button`
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #1C2951, #D4AF37);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 24px rgba(28, 41, 81, 0.12);
    z-index: 999;
    &.visible {
        display: flex;
    }
`;
