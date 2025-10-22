
import styled from 'styled-components';

export const LitigationSection = styled.section`
  padding: 60px 24px;
  background: linear-gradient(180deg, #f8f9fb 0%, #ffffff 50%, #f8f9fb 100%);
`;

export const LitigationContainer = styled.div`
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

export const LitigationMain = styled.main`
  background: white;
  padding: 48px 40px;
  border-radius: 20px;
  box-shadow: 0 16px 48px rgba(28, 41, 81, 0.16);
  border: 1px solid rgba(28, 41, 81, 0.08);

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
      width: 72px;
      height: 5px;
      background: linear-gradient(90deg, #1C2951, #D4AF37);
      border-radius: 3px;
      box-shadow: 0 4px 12px rgba(212, 175, 55, 0.08);
    }
  }

  ul {
    list-style-position: inside;
    padding-left: 0;
    li {
        margin-bottom: 10px;
        line-height: 1.8;
        color: #4a5568;
    }
  }

  ol {
    list-style-position: inside;
    padding-left: 0;
    li {
        margin-bottom: 10px;
        line-height: 1.8;
        color: #4a5568;
    }
  }
`;

export const LitigationByline = styled.div`
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

export const LitigationFeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  margin: 32px 0;
`;

export const LitigationFeatureCard = styled.div`
  background: linear-gradient(180deg, #fff, #f7fafc);
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(28, 41, 81, 0.12);
  border-left: 6px solid #D4AF37;
  transition: transform 0.28s, box-shadow 0.28s;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 48px rgba(28, 41, 81, 0.16);
  }

  h3 {
      color: #1C2951;
      margin-bottom: 10px;
  }
`;

export const IconBox = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.08), rgba(28, 41, 81, 0.06));
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  font-size: 2rem;
  color: #D4AF37;
`;

export const FaqTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  box-shadow: 0 2px 8px rgba(35, 63, 148, 0.08);
  border-radius: 12px;
  overflow: hidden;
  margin: 32px 0;

  th,
  td {
    padding: 16px;
    border-bottom: 1px solid #eee;
    text-align: left;
  }

  th {
    background: #F4E9C1;
    color: #1C2951;
    font-weight: 700;
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

export const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 32px 0;

  li {
    margin-bottom: 16px;
    font-size: 1.08rem;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .fa-check-circle {
    color: #D4AF37;
    font-size: 1.2rem;
  }
`;

export const LitigationSidebar = styled.aside`
  position: relative;

  @media (max-width: 900px) {
    margin-top: 30px;
  }
`;

export const SidebarWrapper = styled.div`
    background: linear-gradient(180deg, #fff, #f7fafc);
    border: 1px solid rgba(28,41,81,0.04);
    box-shadow: 0 8px 24px rgba(28, 41, 81, 0.12);
    padding: 22px;
    border-radius: 16px;
`;

export const LottieWrapper = styled.div`
    width: 180px;
    height: 180px;
    float: right;
    margin: 0 0 18px 18px;
    border-radius: 14px;
    padding: 10px;
    background: linear-gradient(135deg, rgba(212,175,55,0.12), rgba(28,41,81,0.04));
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #eee;

    @media (max-width: 900px) {
        float: none;
        margin: 16px auto;
        display: block;
    }
`;

export const QuickLink = styled.a`
    text-decoration: none;
    padding: 8px 10px;
    border-radius: 999px;
    background: #fff;
    color: #1C2951;
    font-weight: 700;
    box-shadow: 0 8px 22px rgba(28,41,81,0.06);
    cursor: pointer;
`;
