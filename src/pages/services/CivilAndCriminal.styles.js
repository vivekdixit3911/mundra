import styled from "styled-components";

export const CivilSection = styled.section`
  padding: 56px 18px;
  background: linear-gradient(180deg, #f8fafc 0%, #fff 100%);
  box-sizing: border-box;

  @media (max-width: 640px) {
    padding: 36px 12px;
  }
`;

export const CivilContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 28px;
  align-items: start;
  padding: 0 16px;

  @media (max-width: 940px) {
    grid-template-columns: 1fr 300px;
  }

  @media (max-width: 820px) {
    /* switch to flex column so order controls take effect and sidebar flows after main */
    display: flex;
    flex-direction: column;
  }
`;

export const CivilMain = styled.main`
  background: white;
  padding: 36px;
  border-radius: 14px;
  box-shadow: 0 12px 32px rgba(16,24,40,0.06);
  border: 1px solid rgba(16,24,40,0.04);

  h1 { font-family: 'Playfair Display', serif; font-size: clamp(1.8rem,3.6vw,2.6rem); margin:0 0 8px; background: linear-gradient(90deg,#1C2951,#D4AF37); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
  h2 { color:#1C2951; margin-top:18px; margin-bottom:8px; }
  p { color:#475569; line-height:1.7; margin-bottom:12px; }

  ul { margin-left: 18px; }
  li { margin-bottom:8px; }

  @media (max-width: 820px) {
    order: 1;
  }
`;

export const CivilSidebar = styled.aside`
  position: relative;
  width: 100%;

  @media (max-width: 820px) {
    order: 2;
    margin-top: 12px;
  }
`;

export const SidebarStick = styled.div`
  position: sticky;
  top: 110px;
  max-height: calc(100vh - 140px);
  overflow-y: auto;
  padding: 8px;
  z-index: 6;

  &::-webkit-scrollbar { width: 8px }
  &::-webkit-scrollbar-thumb { background: #D4AF37; border-radius:6px }

  @media (max-width: 820px) {
    position: relative; top:0; max-height:none; overflow:visible;
  }
`;

export const LottieWrap = styled.div`
  width: 100%;
  max-width: 380px;
  margin: 18px auto 0;
  display:flex; align-items:center; justify-content:center;

  > div { width:100% !important; height:auto !important; max-width:340px; }
`;

export const TopicGrid = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(220px,1fr));
  gap:12px;
  margin-top:12px;
`;

export const TopicCard = styled.div`
  background:#fff;
  padding:12px;
  border-radius:10px;
  border:1px solid rgba(16,24,40,0.04);
  box-shadow:0 6px 16px rgba(16,24,40,0.04);

  h4{ margin:0 0 6px; color:#1C2951 }
  p{ margin:0; color:#475569; font-size:0.95rem }
`;

export default {};
