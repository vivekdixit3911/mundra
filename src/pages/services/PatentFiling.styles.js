
import styled from 'styled-components';

export const PatentSection = styled.section`
    padding: 60px 20px;
    background: linear-gradient(180deg, #f8f9fb 0, #fff 50%);
    font-family: 'Inter', sans-serif;
    color: #2d3748;
`;

export const PatentContainer = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 380px;
    gap: 36px;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

export const PatentMain = styled.article`
    background: #fff;
    padding: 40px;
    border-radius: 18px;
    box-shadow: 0 16px 48px rgba(28, 41, 81, 0.08);
    border: 1px solid rgba(28, 41, 81, 0.04);

    h1, h2, h3 {
        font-family: 'Playfair Display', serif;
    }

    h1 {
        font-size: clamp(1.9rem, 3.8vw, 2.6rem);
        background: linear-gradient(135deg, #1C2951, #D4AF37);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        margin-bottom: 0.5rem;
    }

    h2 {
        color: #1C2951;
        margin-top: 2rem;
        margin-bottom: 1rem;
        scroll-margin-top: 120px;
    }

    p {
        line-height: 1.7;
        margin-bottom: 1rem;
    }
`;

export const PatentByline = styled.p`
    color: #718096;
    margin-bottom: 14px;
`;

export const ComparisonTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 18px 0;
    box-shadow: 0 8px 24px rgba(28, 41, 81, 0.06);
    border-radius: 12px;
    overflow: hidden;
    display: block;
    overflow-x: auto;

    th, td {
        padding: 12px;
        border-bottom: 1px solid rgba(28, 41, 81, 0.06);
        white-space: normal;
    }

    th {
        background: linear-gradient(90deg, #1C2951, #D4AF37);
        color: #fff;
        text-align: left;
    }

    td {
        background: #fff;
    }
`;

export const FeatureGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 18px;
    margin-top: 1rem;
`;

export const FeatureCard = styled.div`
    background: #fff;
    padding: 18px;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(28, 41, 81, 0.06);
    text-align: left;

    .icon-box {
        font-size: 1.5rem;
        color: #D4AF37;
        margin-bottom: 1rem;
    }

    h4 {
        font-size: 1.1rem;
        color: #1C2951;
        margin-bottom: 0.5rem;
    }
`;

export const PatentSidebar = styled.aside`
    position: sticky;
    top: 20px;
    @media (max-width: 900px) {
        position: relative;
        top: auto;
        margin-top: 2rem;
    }
`;

export const SidebarWrapper = styled.div`
    max-height: calc(100vh - 40px);
    overflow-y: auto;
`;

export const HighlightBox = styled.div`
    background: #f7fafc;
    border-left: 4px solid #D4AF37;
    padding: 16px;
    margin-bottom: 1rem;
    border-radius: 0 8px 8px 0;

    h4 {
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
    }
`;

export const QuickLinksBar = styled.nav`
    position: sticky;
    top: 72px; /* Adjust based on header height */
    z-index: 60;
    background: rgba(28, 41, 81, 0.98);
    color: #fff;
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 10px 14px;
    border-bottom: 3px solid #D4AF37;
    overflow-x: auto;

    a {
        color: #fff;
        text-decoration: none;
        padding: 8px 10px;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.03);
        font-weight: 600;
        white-space: nowrap;
        cursor: pointer;

        &:hover {
            background: rgba(212, 175, 55, 0.12);
            color: #D4AF37;
        }
    }
`;

export const BackToTopButton = styled.button`
    position: fixed;
    right: 28px;
    bottom: 24px;
    background: linear-gradient(135deg, #1C2951, #D4AF37);
    color: #fff;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 12px 36px rgba(28, 41, 81, 0.12);
    opacity: 0;
    transform: translateY(40px);
    transition: all .26s;
    cursor: pointer;

    &.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
