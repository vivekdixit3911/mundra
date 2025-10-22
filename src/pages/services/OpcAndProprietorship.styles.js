
import styled from 'styled-components';

export const OpcSection = styled.section`
    padding: 60px 24px;
    background: linear-gradient(180deg, #f8f9fb 0%, #ffffff 50%, #f8f9fb 100%);
    font-family: 'Inter', system-ui, sans-serif;
    color: #2d3748;
`;

export const OpcContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 380px;
    gap: 40px;
    max-width: 1280px;
    margin: 0 auto;
    align-items: start;

    @media (max-width: 1100px) {
        grid-template-columns: 1fr 320px;
        gap: 30px;
    }
    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

export const OpcMain = styled.div`
    background: white;
    padding: 48px 40px;
    border-radius: 20px;
    box-shadow: 0 16px 48px rgba(28, 41, 81, 0.16);
    border: 1px solid rgba(28, 41, 81, 0.08);

    h1, h2, h3 {
        font-family: 'Playfair Display', serif;
    }

    h1 {
        font-size: clamp(2rem, 4vw, 3.5rem);
        background: linear-gradient(135deg, #1C2951 0%, #D4AF37 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
        margin-bottom: 12px;
    }

    h2 {
        color: #1C2951;
        font-size: clamp(1.6rem, 2.8vw, 2.2rem);
        margin-top: 32px;
        margin-bottom: 18px;
        position: relative;
        padding-bottom: 10px;
        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 60px;
            height: 4px;
            background: linear-gradient(90deg, #1C2951, #D4AF37);
            border-radius: 2px;
        }
    }

    h3 {
        color: #2d3748;
        font-size: clamp(1.2rem, 2.2vw, 1.6rem);
        margin-top: 22px;
        margin-bottom: 12px;
        display: flex;
        gap: 10px;
        align-items: center;
    }

    p {
        line-height: 1.7;
        margin-bottom: 1rem;
    }

    ul, ol {
        padding-left: 20px;
        margin-bottom: 1rem;
    }

    li {
        margin-bottom: 0.5rem;
        line-height: 1.7;
    }
`;

export const Byline = styled.p`
    color: #718096;
    font-size: 1.05rem;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 8px;
    &::before {
        content: '';
        display: inline-block;
        width: 4px;
        height: 18px;
        background: linear-gradient(180deg, #1C2951, #D4AF37);
        border-radius: 2px;
    }
`;

export const ComparisonTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 24px 0;
    box-shadow: 0 2px 8px rgba(28, 41, 81, 0.08);
    display: block;
    overflow-x: auto;
    white-space: nowrap;

    th, td {
        padding: 12px 14px;
        border-bottom: 1px solid rgba(28, 41, 81, 0.08);
        white-space: normal;
    }

    th {
        background: linear-gradient(135deg, #1C2951, #2a3f6f);
        color: white;
        font-weight: 700;
        text-transform: uppercase;
    }
`;

export const OpcSidebar = styled.aside`
    @media (max-width: 900px) {
        margin-top: 2rem;
    }
`;

export const SidebarWrapper = styled.div`
    position: relative;
    width: 370px;
    padding: 24px;
    border-radius: 16px;
    background: white;
    box-shadow: 0 16px 48px rgba(28, 41, 81, 0.16);
    border: 1px solid rgba(28, 41, 81, 0.08);

    @media (max-width: 900px) {
        width: 100%;
        position: static !important;
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
