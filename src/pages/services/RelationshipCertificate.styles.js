import styled from "styled-components";

export const RelationshipSection = styled.section`
  padding: 60px 24px;
  background: linear-gradient(180deg, #f8f9fb 0%, #ffffff 50%, #f8f9fb 100%);
  font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: #2d3748;

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
    font-weight: 700;
  }

  @media (max-width: 640px) {
    padding: 40px 16px;
  }
`;

export const RelationshipContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 40px;
  max-width: 1280px;
  margin: 0 auto;
  align-items: start;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 320px;
    gap: 32px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const RelationshipMain = styled.article`
  background: white;
  padding: 48px 40px;
  border-radius: 20px;
  box-shadow: 0 16px 48px rgba(28, 41, 81, 0.16);
  border: 1px solid rgba(28, 41, 81, 0.08);

  @media (max-width: 640px) {
    padding: 32px 24px;
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

  .relationship-byline {
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
  }

  p {
    color: #4a5568;
    line-height: 1.8;
    margin-bottom: 16px;
    font-size: 1.05rem;
  }

  h2 {
    color: #1C2951;
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
      background: linear-gradient(90deg, #1C2951, #D4AF37);
      border-radius: 2px;
    }
  }

  h3 {
    color: #2d3748;
    font-size: clamp(1.3rem, 2.2vw, 1.7rem);
    margin-top: 32px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 10px;

    &::before {
      content: '●';
      color: #D4AF37;
      font-size: 0.7em;
    }
  }

  ul, ol {
    margin: 20px 0;
    padding-left: 24px;

    li {
      color: #4a5568;
      line-height: 1.7;
      margin-bottom: 8px;
      padding-left: 8px;

      strong {
        color: #1C2951;
        font-weight: 700;
      }
    }
  }

  ul li::marker {
    color: #D4AF37;
    font-weight: bold;
  }

  ol li::marker {
    color: #1C2951;
    font-weight: bold;
  }
`;

export const Callout = styled.div`
  background: linear-gradient(135deg, rgba(28, 41, 81, 0.05) 0%, rgba(212, 175, 55, 0.08) 100%);
  border-left: 5px solid #1C2951;
  padding: 20px 24px;
  border-radius: 12px;
  margin: 24px 0;
  box-shadow: 0 2px 8px rgba(28, 41, 81, 0.08);

  p {
    margin-bottom: 0;
    font-weight: 500;
  }
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
  box-shadow: 0 8px 24px rgba(28, 41, 81, 0.12);
  border: 1px solid rgba(28, 41, 81, 0.08);
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(28, 41, 81, 0.16);
  }

  .icon-box {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #1C2951, #D4AF37);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    box-shadow: 0 8px 24px rgba(28, 41, 81, 0.12);

    i {
      font-size: 2rem;
      color: white;
    }
  }

  h4 {
    color: #1C2951;
    font-size: 1.3rem;
    margin-bottom: 12px;
  }

  p {
    color: #4a5568;
    line-height: 1.6;
    margin: 0;
  }
`;

export const ComparisonTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 32px 0;
  box-shadow: 0 8px 24px rgba(28, 41, 81, 0.12);
  border-radius: 12px;
  overflow: hidden;

  th {
    background: linear-gradient(90deg, #1C2951, #D4AF37);
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

export const ProcessTimeline = styled.div`
  position: relative;
  padding-left: 40px;
  margin: 40px 0;

  &::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, #1C2951, #D4AF37);
    border-radius: 2px;
  }

  @media (max-width: 640px) {
    padding-left: 30px;
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 40px;
  padding-left: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const TimelineMarker = styled.div`
  position: absolute;
  left: -47px;
  top: 0;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #1C2951, #D4AF37);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(28, 41, 81, 0.12);
  z-index: 1;

  @media (max-width: 640px) {
    width: 32px;
    height: 32px;
    left: -39px;
  }

  i {
    color: white;
    font-size: 1.1rem;
  }
`;

export const TimelineContent = styled.div`
  h4 {
    color: #1C2951;
    font-size: 1.3rem;
    margin-bottom: 8px;
  }

  p {
    color: #4a5568;
    line-height: 1.6;
    margin: 0;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 32px 0;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  background: linear-gradient(135deg, rgba(28, 41, 81, 0.05), rgba(212, 175, 55, 0.08));
  padding: 24px;
  border-radius: 12px;
  text-align: center;
  border: 1px solid rgba(28, 41, 81, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  .stat-number {
    font-size: 2.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, #1C2951, #D4AF37);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 8px;
  }

  .stat-label {
    color: #4a5568;
    font-size: 0.95rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

export const HighlightBox = styled.div`
  background: linear-gradient(135deg, #f8f9fb 0%, #ffffff 100%);
  border: 2px solid rgba(212, 175, 55, 0.2);
  border-radius: 16px;
  padding: 24px;
  margin: 24px 0;
  position: relative;
  box-shadow: 0 8px 24px rgba(28, 41, 81, 0.12);

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, #1C2951, #D4AF37);
    border-radius: 18px;
    z-index: -1;
    opacity: 0.1;
  }

  h4 {
    color: #1C2951;
    margin-bottom: 16px;
  }

  p {
    margin: 0;
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
`;

export const RelationshipSidebar = styled.aside`
  position: sticky;
  top: 20px;

  @media (max-width: 900px) {
    position: relative;
    top: 0;
  }
`;

export const SidebarScrollWrapper = styled.div`
  max-height: calc(100vh - 40px);
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #D4AF37 rgba(28, 41, 81, 0.1);

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(28, 41, 81, 0.05);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #D4AF37;
    border-radius: 3px;
  }
`;
