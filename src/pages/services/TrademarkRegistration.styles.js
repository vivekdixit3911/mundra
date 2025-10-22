import styled from "styled-components";

export const TrademarkSection = styled.section`
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

export const TrademarkContainer = styled.div`
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

export const TrademarkMain = styled.article`
  background: white;
  padding: 48px 40px;
  border-radius: 20px;
  box-shadow: 0 16px 48px rgba(28, 41, 81, 0.16);
  border: 1px solid rgba(28, 41, 81, 0.08);

  @media (max-width: 1100px) {
    padding: 36px 28px;
  }

  @media (max-width: 640px) {
    padding: 24px 20px;
    border-radius: 12px;
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

    @media (max-width: 640px) {
      font-size: 1.8rem;
    }
  }

  .trademark-byline {
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

  h3, h4 {
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

export const TrademarkSidebar = styled.aside`
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

export const ContentSection = styled.section`
  padding: 3rem 1.5rem;
  background: linear-gradient(180deg, #fff 0%, #fbfdff 100%);

  @media (max-width: 640px) {
    padding: 2rem 1rem;
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
  margin-top: 1.25rem;
`;

export const ContentCard = styled.article`
  background: white;
  padding: 1.25rem;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(16, 24, 40, 0.06);

  h3 {
    margin: 0 0 0.5rem;
    color: #1C2951;
    font-size: 1.1rem;
  }

  p {
    margin: 0;
    color: #6b7280;
    font-size: 0.95rem;
  }
`;

export const TrademarkTypesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 2rem;
`;

export const TrademarkTypeCard = styled.div`
  background: white;
  padding: 2rem 1.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 18px rgba(16, 24, 40, 0.07);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    font-size: 1.15rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #1C2951;
  }

  p {
    color: #3B5A9A;
    line-height: 1.6;
    margin: 0;
  }
`;

export const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

export const ProcessCard = styled.div`
  background: white;
  padding: 2rem 1.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 18px rgba(16, 24, 40, 0.07);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    font-size: 1.08rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #D4AF37;
  }

  p {
    color: #3B5A9A;
    line-height: 1.6;
    margin: 0;
  }
`;

export const WhoCanApplyList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const WhoCanApplyItem = styled.li`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(16, 24, 40, 0.06);
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    font-weight: 600;
    color: #1C2951;
  }
`;

export const SymbolCard = styled.div`
  background: white;
  padding: 2rem 1.2rem;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(212, 175, 55, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 240px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 32px rgba(212, 175, 55, 0.18);
    transform: translateY(-2px) scale(1.03);
  }

  span {
    font-weight: 700;
    margin-top: 0.7rem;
    font-size: 1.08rem;
    color: #1C2951;
  }

  p {
    color: #3B5A9A;
    font-size: 1rem;
    margin-top: 0.7rem;
    text-align: center;
    line-height: 1.6;
  }
`;

export const FilingOptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
`;

export const FilingOptionCard = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 18px rgba(16, 24, 40, 0.07);
  padding: 2rem 1.5rem;

  h4 {
    font-size: 1.12rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #D4AF37;
  }

  p {
    color: #3B5A9A;
    margin-bottom: 1.2rem;
  }
`;

export const FilingTypeCard = styled.div`
  flex: 1;
  background: linear-gradient(135deg, #f7fafc 0%, #fff 100%);
  border-radius: 12px;
  padding: 1.2rem 1rem;
  box-shadow: 0 2px 10px rgba(212, 175, 55, 0.08);
  min-width: 220px;

  h5 {
    font-size: 1.08rem;
    font-weight: 600;
    color: #1C2951;
    margin-bottom: 0.5rem;
  }

  ul {
    color: #3B5A9A;
    font-size: 0.98rem;
    line-height: 1.7;
    margin-bottom: 0.7rem;
    padding-left: 1.1rem;
  }

  div {
    font-weight: 600;
    color: #D4AF37;
    font-size: 1rem;
    margin-bottom: 0.3rem;
  }
`;

export const CompanyTypesTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 1rem;
  font-size: 1.08rem;
  box-shadow: 0 8px 32px rgba(16, 24, 40, 0.07);
  background: white;
  border-radius: 18px;
  overflow: hidden;

  th {
    background: linear-gradient(90deg, #D4AF37 0%, #F4E9C1 100%);
    color: #1C2951;
    padding: 1.2rem 0.7rem;
    font-weight: 700;
    font-size: 1.08rem;
    text-align: left;
  }

  td {
    padding: 1.1rem 0.7rem;
    background: white;
  }

  tr:hover {
    background: linear-gradient(90deg, #F4E9C1 0%, #fff 100%);
  }
`;

export const DocumentsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 1rem;
  font-size: 1.05rem;
  box-shadow: 0 8px 32px rgba(16, 24, 40, 0.07);
  background: white;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid #e2e8f0;

  th {
    background: linear-gradient(90deg, #D4AF37 0%, #F4E9C1 100%);
    color: #1C2951;
    padding: 1.2rem 0.7rem;
    font-weight: 700;
    font-size: 1.08rem;
    text-align: left;
  }

  td {
    padding: 1.1rem 0.7rem;
    background: white;
  }

  tr:nth-child(even) {
    background: #f8fafc;
  }

  tr:nth-child(odd) {
    background: #fff;
  }

  tr:hover {
    background: linear-gradient(90deg, #F4E9C1 0%, #fff 100%);
  }
`;

export const BenefitCard = styled.div`
  background: white;
  padding: 2rem 1.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 18px rgba(16, 24, 40, 0.07);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 32px rgba(212, 175, 55, 0.18);
    transform: translateY(-2px) scale(1.03);
  }

  h3 {
    font-size: 1.15rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #D4AF37;
  }

  p {
    color: #3B5A9A;
    line-height: 1.6;
    margin: 0;
  }
`;

export const TrademarkClassesSection = styled.section`
  padding: 80px 0;
  background: white;
`;

export const TrademarkClassesContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const ClassesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
`;

export const ClassesCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.08);

  h4 {
    color: #1C2951;
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    text-align: center;
    border-bottom: 2px solid #e2e8f0;
    padding-bottom: 0.5rem;
  }
`;

export const ClassItem = styled.div`
  display: flex;
  padding: 0.8rem;
  border-left: 3px solid ${props => props.color || '#D4AF37'};
  background: ${props => props.bgColor || '#f8fafc'};
  margin-bottom: 0.8rem;
  border-radius: 8px;

  span:first-child {
    font-weight: 700;
    color: #D4AF37;
    min-width: 40px;
    margin-right: 1rem;
  }

  span:last-child {
    color: #64748b;
    font-size: 0.9rem;
  }
`;

export const PostRegistrationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2.5rem;
`;

export const PostRegistrationCard = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 18px rgba(16, 24, 40, 0.07);
  padding: 2rem 1.5rem;

  h3 {
    font-size: 1.18rem;
    font-weight: 600;
    margin-bottom: 0.7rem;
    color: #1C2951;
  }

  h4 {
    font-size: 1.08rem;
    font-weight: 600;
    color: #D4AF37;
    margin-bottom: 0.5rem;
  }

  p {
    color: #3B5A9A;
    margin-bottom: 1.2rem;
  }

  ul {
    color: #3B5A9A;
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 0.7rem;
    padding-left: 1.2rem;
  }
`;

export const WhyChooseSection = styled.section`
  padding: 4rem 1.5rem 3rem;
  background: linear-gradient(180deg, #fff 0%, #f7fafc 100%);
`;

export const WhyChooseContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const WhyChooseText = styled.div`
  flex: 1 1 480px;
  min-width: 320px;
  max-width: 650px;

  h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.15;
    margin-bottom: 1.2rem;
    color: #1C2951;
  }

  p {
    color: #3B5A9A;
    font-size: 1.13rem;
    line-height: 1.7;
  }
`;

export const WhyChooseVisual = styled.div`
  flex: 1 1 320px;
  min-width: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FAQSection = styled.section`
  padding: 3.5rem 1.5rem;
  background: linear-gradient(180deg, #f7fafc 0%, #fff 100%);
  margin-bottom: 4rem;
`;

export const FAQContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const FAQList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

export const FAQCard = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 18px rgba(16, 24, 40, 0.07);
  padding: 2rem 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;

  h3 {
    font-size: 1.08rem;
    font-weight: 600;
    color: #D4AF37;
    margin-bottom: 0.5rem;
  }

  p {
    color: #3B5A9A;
    line-height: 1.6;
    margin: 0;
  }
`;
