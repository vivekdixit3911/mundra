import styled from "styled-components";

export const TrademarkSection = styled.section`
  padding: 60px 24px;
  background: linear-gradient(180deg, #f8f9fb 0%, #ffffff 50%, #f8f9fb 100%);
  font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: #2d3748;
  box-sizing: border-box;
  width: 100%;

  /* Prevent accidental horizontal overflow on small devices */
  overflow-x: hidden;

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
    font-weight: 700;
  }

  @media (max-width: 640px) {
    padding: 40px 12px;
  }
`;

export const TrademarkContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 40px;
  max-width: 1280px;
  margin: 0 auto;
  align-items: start;
  box-sizing: border-box;
  width: 100%;
  padding: 0 16px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 320px;
    gap: 32px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 0 12px;
  }
`;

export const TrademarkMain = styled.article`
  background: white;
  padding: 48px 40px;
  border-radius: 20px;
  box-shadow: 0 16px 48px rgba(28, 41, 81, 0.16);
  border: 1px solid rgba(28, 41, 81, 0.08);
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1100px) {
    padding: 36px 28px;
  }

  @media (max-width: 640px) {
    padding: 22px 16px;
    border-radius: 12px;
  }

  h1 {
    font-size: clamp(1.8rem, 4vw, 2.6rem);
    background: linear-gradient(135deg, #1C2951 0%, #D4AF37 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 12px;
    letter-spacing: 0.2px;
    line-height: 1.15;
    word-break: break-word;
  }

  .trademark-byline {
    color: #718096;
    font-size: 1rem;
    margin-bottom: 18px;
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
  }

  p {
    color: #4a5568;
    line-height: 1.75;
    margin-bottom: 16px;
    font-size: 1rem;
    overflow-wrap: break-word;
  }

  h2 {
    color: #1C2951;
    font-size: clamp(1.3rem, 2.4vw, 1.6rem);
    margin-top: 28px;
    margin-bottom: 16px;
    position: relative;
    padding-bottom: 10px;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 56px;
      height: 4px;
      background: linear-gradient(90deg, #1C2951, #D4AF37);
      border-radius: 2px;
    }
  }

  ul, ol {
    margin: 18px 0;
    padding-left: 22px;
  }

  li {
    color: #4a5568;
    line-height: 1.7;
    margin-bottom: 8px;
    padding-left: 8px;
    word-break: break-word;
  }
`;

export const TrademarkSidebar = styled.aside`
  /* Keep the container flow normal; inner wrapper will be sticky */
  position: relative;
  align-self: start;
  width: 100%;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const SidebarScrollWrapper = styled.div`
  /* Make the inner wrapper sticky so the form follows the user's scroll */
  position: sticky;
  top: 110px; /* adjust this if your header height is different */
  max-height: calc(100vh - 140px);
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #D4AF37 rgba(28, 41, 81, 0.08);
  padding-bottom: 8px;
  z-index: 5;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #D4AF37;
    border-radius: 6px;
  }

  @media (max-width: 900px) {
    position: relative;
    top: 0;
    max-height: none;
    overflow: visible;
  }
`;

export const SectionLottie = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 36px auto 0;
  display: flex;
  align-items: center;
  justify-content: center;

  > div, > svg {
    width: 100% !important;
    height: auto !important;
    max-width: 420px;
  }

  @media (max-width: 640px) {
    margin-top: 24px;
    max-width: 100%;
    > div, > svg {
      max-width: 320px;
    }
  }
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin: 24px 0 8px;
`;

export const FeatureCard = styled.div`
  background: white;
  padding: 20px 18px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(28, 41, 81, 0.08);
  border: 1px solid rgba(28, 41, 81, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-align: center;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 48px rgba(28, 41, 81, 0.12);
  }

  .icon-box {
    width: 64px;
    height: 64px;
    background: linear-gradient(135deg, #1C2951, #D4AF37);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 12px;
  }

  h4 {
    color: #1C2951;
    font-size: 1rem;
    margin: 0 0 8px;
    word-break: break-word;
  }

  p {
    color: #4a5568;
    font-size: 0.95rem;
    margin: 0;
  }
`;

export const TypesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin: 20px 0 28px;
`;

export const TypeCard = styled.div`
  background: linear-gradient(180deg, #fff 0%, #fbfbfb 100%);
  padding: 16px;
  border-radius: 12px;
  border: 1px solid rgba(28,41,81,0.06);
  display: flex;
  gap: 12px;
  align-items: flex-start;

  img {
    width: 44px;
    height: 44px;
    object-fit: contain;
    flex-shrink: 0;
  }

  h4 {
    margin: 0 0 6px;
    font-size: 1rem;
    color: #1C2951;
  }

  p {
    margin: 0;
    color: #4a5568;
    font-size: 0.95rem;
  }
`;

export const StepsList = styled.ol`
  margin: 12px 0 20px 18px;
  color: #4a5568;
  line-height: 1.7;

  li {
    margin-bottom: 10px;
    font-size: 1rem;
  }
`;

export const SymbolRow = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 12px;

  .symbol {
    background: white;
    padding: 12px 14px;
    border-radius: 10px;
    box-shadow: 0 6px 16px rgba(16,24,40,0.04);
    border: 1px solid rgba(28,41,81,0.04);
    min-width: 160px;
  }

  .symbol b {
    display: block;
    font-size: 1.1rem;
    color: #1C2951;
  }
`;

/* small helper for inline icons */
export const SmallIcon = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
`;
