import styled from 'styled-components';

export const PageSection = styled.section`
  padding: 56px 18px;
  background: linear-gradient(180deg,#fff 0%, #fbfdff 100%);
`;

export const PageContainer = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 32px;
  align-items: start;
  position: relative;

  @media (max-width: 980px){ grid-template-columns: 1fr 320px; gap:24px }
  @media (max-width: 820px){ display:flex; flex-direction:column }
`;

export const PageContent = styled.main`
  background: #fff; padding: 36px; border-radius: 14px; box-shadow:0 10px 30px rgba(16,24,40,0.06); border:1px solid rgba(16,24,40,0.04);
  h1{ font-family:'Playfair Display',serif; font-size:clamp(1.6rem,3.6vw,2.4rem); margin:0 0 8px; background:linear-gradient(90deg,#1C2951,#D4AF37); -webkit-background-clip:text; -webkit-text-fill-color:transparent }
  h2{ color:#1C2951; margin-top:18px }
  p{ color:#475569; line-height:1.7 }
  ul{ margin-left:18px }

  @media (max-width:820px){ padding:18px }
`;

export const TopicGrid = styled.div`
  display:grid; grid-template-columns: repeat(auto-fit,minmax(160px,1fr)); gap:12px; margin-top:12px;
`;

export const TopicCard = styled.div`
  background:#fff; padding:12px; border-radius:12px; border:1px solid rgba(16,24,40,0.04); box-shadow:0 8px 20px rgba(16,24,40,0.04);
  h4{ margin:0 0 6px; color:#1C2951 }
  p{ margin:0; color:#475569; font-size:0.95rem }
`;

export const StepsList = styled.ol`
  margin-left:18px; padding-left:18px; li{ margin-bottom:12px }
`;

export const LottieWrap = styled.div`
  width:100%; max-width:520px; margin:18px auto; display:flex; justify-content:center; align-items:center;
  > div{ width:100% !important; height:auto !important; max-width:520px }
`;

export const Sidebar = styled.aside`
  position:relative; width:100%;
`;

export const SidebarStick = styled.div`
  position: sticky; top:110px; max-height: calc(100vh - 140px); overflow-y:auto; padding:8px; z-index:6;
  &::-webkit-scrollbar{ width:8px } &::-webkit-scrollbar-thumb{ background:#D4AF37; border-radius:6px }
  @media (max-width:820px){ position:relative; top:0; max-height:none; overflow:visible }
`;

export default {};
