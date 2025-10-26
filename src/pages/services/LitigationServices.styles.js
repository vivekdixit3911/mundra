import styled from 'styled-components';

export const LitigationSection = styled.section`
  padding: 56px 18px;
  background: linear-gradient(180deg,#fff 0%, #fbfdff 100%);
  box-sizing: border-box;

  @media (max-width:640px){ padding:36px 12px; }
`;

export const LitigationContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 32px;
  align-items: start;
  position: relative;

  @media (max-width: 980px){ grid-template-columns: 1fr 320px; gap:24px; }
  @media (max-width: 820px){ display:flex; flex-direction:column; }
`;

export const LitigationMain = styled.main`
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 16px 40px rgba(16,24,40,0.06);
  border: 1px solid rgba(16,24,40,0.04);

  h1{ font-family:'Playfair Display',serif; font-size:clamp(1.8rem,4vw,2.6rem); margin:0 0 10px; background:linear-gradient(90deg,#1C2951,#D4AF37); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
  h2{ color:#1C2951; margin-top:20px; margin-bottom:10px }
  h3{ color:#1C2951; font-size:1.05rem; margin-top:14px }
  p{ color:#475569; line-height:1.7; margin-bottom:12px }

  ul{ margin-left:18px }
  li{ margin-bottom:8px }

  @media (max-width:820px){
    padding: 20px;
    border-radius:12px;
  }
`;

export const TopicGrid = styled.div`
  display:grid; grid-template-columns: repeat(auto-fit,minmax(160px,1fr)); gap:12px; margin-top:12px;
`;

export const TopicCard = styled.div`
  background:#fff; padding:14px; border-radius:12px; border:1px solid rgba(16,24,40,0.04); box-shadow:0 8px 24px rgba(16,24,40,0.04);
  h4{ margin:0 0 6px; color:#1C2951 }
  p{ margin:0; color:#475569 }
  @media (max-width:640px){ padding:10px; h4{ font-size:1rem } p{ font-size:0.95rem } }
`;

export const LottieWrap = styled.div`
  width:100%; max-width:520px; margin:18px auto; display:flex; justify-content:center; align-items:center;
  > div{ width:100% !important; height:auto !important; max-width:520px }
  @media (max-width:640px){ margin:12px 0 }
`;

export const Sidebar = styled.aside`
  position: relative; width:100%;
`;

export const SidebarStick = styled.div`
  position: sticky; top:110px; max-height: calc(100vh - 140px); overflow-y:auto; padding:8px; z-index:6;
  &::-webkit-scrollbar{ width:8px } &::-webkit-scrollbar-thumb{ background:#D4AF37; border-radius:6px }
  @media (max-width:820px){ position:relative; top:0; max-height:none; overflow:visible }
`;

export const TimelineTable = styled.table`
  width:100%; border-collapse:collapse; margin:12px 0; th, td{ padding:10px; text-align:left }
  th{ background:linear-gradient(90deg,#D4AF37,#F4E9C1); color:#1C2951 }
`;

export const FAQTable = styled.table`
  width:100%; border-collapse:collapse; margin:12px 0; th, td{ padding:10px; vertical-align:top }
  th{ width:30%; color:#1C2951 }
  td{ color:#475569 }
`;

export default {};
