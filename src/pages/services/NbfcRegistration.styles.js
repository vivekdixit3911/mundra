
import styled from 'styled-components';

// Re-using the naming convention from the HTML for clarity (society-*)
// These styles are specific to the NBFC page but follow a similar layout.

export const NbfcSection = styled.section`
    padding: 60px 24px;
    background: linear-gradient(180deg, #f8f9fb 0%, #ffffff 50%, #f8f9fb 100%);
    font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    color: #2d3748;
`;

export const NbfcContainer = styled.div`
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

export const NbfcMain = styled.article`
    background: white;
    padding: 48px 40px;
    border-radius: 20px;
    box-shadow: 0 16px 48px rgba(28, 41, 81, 0.16);
    border: 1px solid rgba(28, 41, 81, 0.08);

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
        font-weight: 700;
    }

    h1 {
        font-size: clamp(2rem, 4vw, 3.5rem);
        background: linear-gradient(135deg, #1C2951 0%, #D4AF37 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 12px;
        letter-spacing: 0.5px;
        line-height: 1.2;
    }

    h2 {
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #1C2951;
    }

    h3 {
        margin-top: 1.5rem;
        margin-bottom: 1rem;
        color: #1C2951;
    }

    p {
        line-height: 1.7;
        color: #4a5568;
        margin-bottom: 1rem;
    }

    ol, ul {
        padding-left: 20px;
        margin-bottom: 1rem;
    }

    li {
        margin-bottom: 0.5rem;
        line-height: 1.7;
    }

    @media (max-width: 900px) {
        padding: 36px 28px;
    }
`;

export const NbfcByline = styled.p`
    color: #718096;
    font-size: 1.05rem;
    margin-bottom: 24px;
`;

export const FeatureGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    margin: 28px 0;
`;

export const FeatureCard = styled.div`
    background: white;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(28, 41, 81, 0.12);
    border: 1px solid rgba(28, 41, 81, 0.06);

    .icon-box {
        font-size: 2rem;
        color: #D4AF37;
        margin-bottom: 1rem;
    }

    h4 {
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
    }
`;

export const ComparisonTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 28px 0;
    box-shadow: 0 8px 24px rgba(28, 41, 81, 0.12);
    border-radius: 12px;
    overflow: hidden;

    th {
        background: linear-gradient(90deg, #1C2951, #D4AF37);
        color: white;
        padding: 14px;
        text-align: left;
    }

    td {
        padding: 14px;
        border-bottom: 1px solid rgba(28, 41, 81, 0.06);
        background: white;
    }

    tbody tr:last-child td {
        border-bottom: none;
    }
`;

export const NbfcSidebar = styled.aside`
    position: sticky;
    top: 20px;
    @media (max-width: 900px) {
        position: static;
        margin-top: 2rem;
    }
`;

export const Callout = styled.div`
    background: linear-gradient(135deg, rgba(28, 41, 81, 0.05) 0%, rgba(212, 175, 55, 0.08) 100%);
    border-left: 5px solid #1C2951;
    padding: 20px;
    border-radius: 12px;
    margin: 24px 0;
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
    box-shadow: 0 16px 48px rgba(28, 41, 81, 0.16);
    z-index: 999;
    &.visible {
        display: flex;
    }
`;
