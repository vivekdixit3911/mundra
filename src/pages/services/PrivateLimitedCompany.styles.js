import styled from 'styled-components';

export const PLCSection = styled.section`
  background: linear-gradient(180deg, rgba(244,233,193,0.25) 0%, rgba(255,255,255,0) 100%);
  padding: 4rem 0 6rem;
`;

export const PLCContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 48px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
    gap: 28px;
  }
`;

export const PLCMain = styled.main`
  background: white;
  border-radius: 16px;
  padding: 36px;
  box-shadow: 0 12px 30px rgba(28,41,81,0.06);
`;

export const PLCByline = styled.p`
  color: #64748b;
  margin-bottom: 18px;
  line-height: 1.65;
`;

export const SectionLottie = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 18px 0 32px;
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
  margin: 18px 0 28px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled.div`
  background: linear-gradient(180deg, #fff 0%, #fbfaf7 100%);
  border: 1px solid rgba(28,41,81,0.06);
  padding: 18px;
  border-radius: 12px;
`;

export const IconBox = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background: var(--light-gold);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  font-weight: 700;
  margin-right: 12px;
`;

export const ComparisonTable = styled.div`
  overflow-x: auto;
  margin: 18px 0 28px;
`;

export const ProcessTimeline = styled.ol`
  list-style: none;
  padding-left: 0;
  margin: 0;
`;

export const TimelineItem = styled.li`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

export const TimelineMarker = styled.span`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--secondary-color);
  color: var(--primary-color);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;

export const PLCSidebar = styled.aside`
  position: sticky;
  top: 110px;
  align-self: start;

  @media (max-width: 900px) {
    position: relative;
    top: auto;
  }
`;

export const SidebarScrollWrapper = styled.div`
  .sidebar-card {
    width: 100%;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin: 18px 0 28px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  background: var(--primary-color);
  color: white;
  padding: 12px;
  border-radius: 10px;
  text-align: center;
`;

export const BackToTop = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background: var(--gradient-secondary);
  color: var(--primary-color);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(230, 197, 127, 0.3);
  transition: all 0.3s ease;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);

  &.visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  i { font-size: 1rem; }
`;

export const QuickLinksBar = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: nowrap;
  margin: 12px 0 18px;
  position: sticky;
  top: 100px;
  z-index: 1200;
  background: white;
  padding: 8px;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(28,41,81,0.06);
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  a {
    white-space: nowrap;
  }

  @media (max-width: 900px) {
    top: 80px;
  }
`;

export const LottieAccent = styled.div`
  max-width: 360px;
  margin: 0 auto 18px;
`;

export const AnchorTarget = styled.div`
  margin-top: -110px;
  padding-top: 110px;
`;

export const HighlightBox = styled.div`
  background: var(--light-gold);
  border-left: 4px solid var(--secondary-color);
  padding: 16px;
  border-radius: 8px;
  margin: 12px 0 18px;
`;

export const TableScroll = styled.div`
  overflow-x: auto;
`;

export const Callout = styled.div`
  background: linear-gradient(90deg, rgba(212,175,55,0.08), rgba(28,41,81,0.03));
  border: 1px dashed rgba(28,41,81,0.06);
  padding: 16px;
  border-radius: 12px;
  margin: 18px 0 24px;
`;

export default {};
