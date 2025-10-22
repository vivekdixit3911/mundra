
import styled from 'styled-components';

export const PLCSection = styled.section`
  padding: 60px 24px;
  background: linear-gradient(180deg, #f8f9fb 0, #fff 50%);
  font-family: 'Inter', sans-serif;
  color: #2d3748;

  h1, h2, h3 {
    font-family: 'Playfair Display', serif;
  }
`;

export const PLCContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const PLCMain = styled.article`
  background: #fff;
  padding: 48px;
  border-radius: 20px;
  box-shadow: 0 16px 48px rgba(28, 41, 81, 0.12);
  border: 1px solid rgba(28, 41, 81, 0.06);

  h1 {
    font-size: clamp(2rem, 4vw, 3rem);
    background: linear-gradient(135deg, #1C2951, #D4AF37);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

export const PLCByline = styled.p`
  color: #718096;
  margin-bottom: 18px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const SectionLottie = styled.div`
  width: 100%;
  max-width: 420px;
  height: 320px;
  margin: 30px auto;
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin: 28px 0;
`;

export const FeatureCard = styled.div`
  background: #fff;
  padding: 22px;
  border-radius: 14px;
  box-shadow: 0 8px 24px rgba(28, 41, 81, 0.08);
  border: 1px solid rgba(28, 41, 0.04);
  text-align: left;
`;

export const IconBox = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: linear-gradient(135deg, #1C2951, #D4AF37);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 20px;
  margin-bottom: 12px;
`;

export const ComparisonTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  box-shadow: 0 8px 24px rgba(28, 41, 81, 0.06);
  border-radius: 12px;
  overflow: hidden;

  th {
    background: linear-gradient(90deg, #1C2951, #D4AF37);
    color: #fff;
    padding: 12px;
    text-align: left;
  }

  td {
    padding: 12px;
    border-bottom: 1px solid rgba(28, 41, 81, 0.06);
    background: #fff;
  }
`;

export const ProcessTimeline = styled.div`
  position: relative;
  padding-left: 40px;
  margin: 30px 0;

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
`;

export const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 26px;
  padding-left: 36px;
`;

export const TimelineMarker = styled.div`
  position: absolute;
  left: -44px;
  top: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1C2951, #D4AF37);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export const PLCSidebar = styled.aside`
  position: relative;
`;

export const SidebarScrollWrapper = styled.div`
  max-height: calc(100vh - 40px);
  overflow-y: auto;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
  margin: 20px 0;
`;

export const StatCard = styled.div`
  padding: 16px;
  border-radius: 10px;
  background: linear-gradient(135deg, rgba(28, 41, 81, 0.05), rgba(212, 175, 55, 0.06));
  text-align: center;
`;

export const BackToTop = styled.button`
  position: fixed;
  right: 30px;
  bottom: 28px;
  background: linear-gradient(135deg, #1C2951, #D4AF37);
  color: #fff;
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 36px rgba(28, 41, 81, 0.12);
  opacity: 0;
  transform: translateY(80px);
  transition: all 0.3s;
  z-index: 100;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const QuickLinksBar = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 72px;
  z-index: 60;
  background: rgba(28, 41, 81, 0.98);
  color: #fff;
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 10px 16px;
  border-bottom: 3px solid #D4AF37;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  a {
    color: #fff;
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.03);
    font-weight: 600;
    white-space: nowrap;

    &:focus,
    &:hover {
      background: rgba(212, 175, 55, 0.14);
      color: #D4AF37;
    }
  }

  @media (max-width: 640px) {
    top: 60px;
    padding: 8px 10px;
  }
`;

export const LottieAccent = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;
  width: 40px;
  height: 40px;
`;

export const AnchorTarget = styled.div`
  scroll-margin-top: 120px;
`;

export const HighlightBox = styled.div`
    background: #f8f9fb;
    padding: 20px;
    border-radius: 12px;
    margin: 20px 0;
    border: 1px solid rgba(28,41,81,0.06);
`;

export const Callout = styled.div`
    background: linear-gradient(135deg, #1C2951, #D4AF37);
    color: #fff;
    border: none;
    margin-top: 24px;
    padding: 20px;
    border-radius: 12px;

    h3 {
        margin: 0;
    }

    p {
        margin: 8px 0 0;
    }
`;
