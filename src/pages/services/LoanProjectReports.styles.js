
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalLoanPageStyle = createGlobalStyle`
  :root {
    --primary-color: #1C2951;
    --primary-gold: #D4AF37;
    --light-gold: #F4E9C1;
    --text-primary: #2d3748;
    --text-secondary: #4a5568;
    --text-muted: #718096;
    --shadow-sm: 0 2px 8px rgba(28, 41, 81, 0.08);
    --shadow-md: 0 8px 24px rgba(28, 41, 81, 0.12);
    --shadow-lg: 0 16px 48px rgba(28, 41, 81, 0.16);
  }
`;

export const LoanSection = styled.section`
    padding: 60px 24px;
    background: linear-gradient(180deg, #f8f9fb 0%, #ffffff 50%, #f8f9fb 100%);
    font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    color: var(--text-primary);
`;

export const LoanContainer = styled.div`
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

export const LoanMain = styled.article`
    background: white;
    padding: 48px 40px;
    border-radius: 20px;
    box-shadow: var(--shadow-lg);
    border: 1px solid rgba(28, 41, 81, 0.08);

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
        font-weight: 700;
    }

    h1 {
        font-size: clamp(2rem, 4vw, 3.5rem);
        background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-gold) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 12px;
        letter-spacing: 0.5px;
        line-height: 1.2;
    }

    p {
        color: var(--text-secondary);
        line-height: 1.8;
        margin-bottom: 16px;
        font-size: 1.05rem;
    }

    h2 {
        color: var(--primary-color);
        font-size: clamp(1.6rem, 2.8vw, 2.2rem);
        margin-top: 40px;
        margin-bottom: 20px;
        position: relative;
        padding-bottom: 12px;
        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 60px;
            height: 4px;
            background: linear-gradient(90deg, var(--primary-color), var(--primary-gold));
            border-radius: 2px;
        }
    }

    h3 {
        color: var(--text-primary);
        font-size: clamp(1.3rem, 2.2vw, 1.7rem);
        margin-top: 32px;
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        gap: 10px;
        &::before {
            content: '●';
            color: var(--primary-gold);
            font-size: 0.7em;
        }
    }

    ul, ol {
        margin: 20px 0;
        padding-left: 24px;
    }
    li {
        color: var(--text-secondary);
        line-height: 1.7;
        margin-bottom: 8px;
        padding-left: 8px;
    }
    ul li::marker {
        color: var(--primary-gold);
        font-weight: bold;
    }
    ol li::marker {
        color: var(--primary-color);
        font-weight: bold;
    }
    li strong {
        color: var(--primary-color);
        font-weight: 700;
    }

    @media (max-width: 1100px) {
        padding: 36px 28px;
    }
    @media (max-width: 640px) {
        padding: 24px 20px;
        border-radius: 12px;
        h1 {
            font-size: 1.8rem;
        }
    }
`;

export const LoanByline = styled.p`
    color: var(--text-muted);
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
        background: linear-gradient(180deg, var(--primary-color), var(--primary-gold));
        border-radius: 2px;
    }
`;

export const HighlightBox = styled.div`
    background: linear-gradient(135deg, #f8f9fb 0%, #ffffff 100%);
    border: 2px solid rgba(212, 175, 55, 0.2);
    border-radius: 16px;
    padding: 24px;
    margin: 24px 0;
    position: relative;
    box-shadow: var(--shadow-md);
`;

export const FeatureGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    margin: 32px 0;
    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`;

export const FeatureCard = styled.div`
    background: white;
    padding: 32px 24px;
    border-radius: 16px;
    box-shadow: var(--shadow-md);
    border: 1px solid rgba(28, 41, 81, 0.08);
    transition: all 0.3s ease;
    text-align: center;
    &:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-lg);
    }
    .icon-box {
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, var(--primary-color), var(--primary-gold));
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 20px;
        box-shadow: var(--shadow-md);
        i {
            font-size: 2rem;
            color: white;
        }
    }
    h4 {
        color: var(--primary-color);
        font-size: 1.3rem;
        margin-bottom: 12px;
    }
    p {
        color: var(--text-secondary);
        line-height: 1.6;
        margin: 0;
    }
`;

export const ComparisonTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 32px 0;
    box-shadow: var(--shadow-md);
    border-radius: 12px;
    overflow: hidden;
    th {
        background: linear-gradient(90deg, var(--primary-color), var(--primary-gold));
        color: white;
        padding: 16px;
        text-align: left;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        font-size: 0.9rem;
    }
    td {
        padding: 16px;
        border-bottom: 1px solid rgba(28, 41, 81, 0.1);
        background: white;
    }
    tr:last-child td {
        border-bottom: none;
    }
    tr:hover {
        background: rgba(28, 41, 81, 0.02);
    }
`;

export const SectionLottie = styled.div`
    width: 100%;
    max-width: 400px;
    height: 300px;
    margin: 40px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    dotlottie-wc {
        width: 100%;
        height: 100%;
    }
`;

export const LoanSidebar = styled.aside`
    position: sticky;
    top: 20px;
    @media (max-width: 900px) {
        position: static;
    }
`;

export const SidebarWrapper = styled.div`
    max-height: calc(100vh - 40px);
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--primary-gold) rgba(28, 41, 81, 0.1);
    &::-webkit-scrollbar {
        width: 6px;
    }
    &::-webkit-scrollbar-track {
        background: rgba(28, 41, 81, 0.05);
        border-radius: 3px;
    }
    &::-webkit-scrollbar-thumb {
        background: var(--primary-gold);
        border-radius: 3px;
    }
    @media (max-width: 900px) {
        max-height: none;
        overflow-y: visible;
    }
`;

export const ContactCard = styled.div`
    background: white;
    padding: 32px 24px;
    border-radius: 16px;
    box-shadow: var(--shadow-lg);
    border: 1px solid rgba(28, 41, 81, 0.08);
    margin-bottom: 24px;
    h4 {
        color: var(--primary-color);
        font-size: 1.4rem;
        margin-bottom: 8px;
        text-align: center;
        font-family: 'Playfair Display', serif;
    }
    .muted {
        color: var(--text-muted);
        font-size: 0.9rem;
        text-align: center;
        margin-bottom: 24px;
    }
`;

export const QuickForm = styled.form`
    input, textarea, select {
        width: 100%;
        padding: 14px 16px;
        border: 2px solid rgba(28, 41, 81, 0.1);
        border-radius: 8px;
        font-size: 1rem;
        margin-bottom: 16px;
        transition: all 0.3s ease;
        font-family: inherit;
        box-sizing: border-box;
    }
    textarea {
        resize: vertical;
        min-height: 100px;
    }
    input:focus, textarea:focus, select:focus {
        outline: none;
        border-color: var(--primary-gold);
        box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
    }
`;

export const SubmitButton = styled.button`
    width: 100%;
    background: linear-gradient(135deg, var(--primary-color), var(--primary-gold));
    color: white;
    border: none;
    padding: 16px 24px;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    box-shadow: var(--shadow-md);
    &:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-lg);
    }
`;

export const OrDivider = styled.div`
    text-align: center;
    margin: 20px 0;
    position: relative;
    color: var(--text-muted);
    font-size: 0.9rem;
    &::before, &::after {
        content: '';
        position: absolute;
        top: 50%;
        width: 40%;
        height: 1px;
        background: rgba(28, 41, 81, 0.1);
    }
    &::before { left: 0; }
    &::after { right: 0; }
`;

export const ContactInfo = styled.div`
    margin-top: 20px;
    p {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 12px;
        color: var(--text-secondary);
        font-size: 1rem;
    }
    i {
        color: var(--primary-gold);
        width: 20px;
    }
    a {
        color: var(--primary-color);
        text-decoration: none;
        font-weight: 600;
        &:hover {
            color: var(--primary-gold);
        }
    }
`;

export const BackToTopButton = styled.button`
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, var(--primary-color), var(--primary-gold));
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-lg);
    transition: all 0.3s ease;
    z-index: 999;
    &.visible {
        display: flex;
    }
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(28, 41, 81, 0.3);
    }
`;
