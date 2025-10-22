import React from "react";
import styled from "styled-components";
import Lottie from "lottie-react";

const AboutSection = styled.section`
  padding: 5rem 0;
  background: #fff;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutText = styled.div`
  max-width: 900px;
  text-align: center;

  .section-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .about-description {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #64748b;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.7;
    }
  }
`;

const AboutStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin: 3rem 0;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const StatCard = styled.div`
  background: white;
  padding: 2rem 1.5rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(212, 175, 55, 0.15);
    border-color: rgba(212, 175, 55, 0.3);
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

const StatIcon = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .lottie-animation {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

const StatNumber = styled.h3`
  font-size: 2.5rem;
  font-weight: 900;
  color: #D4AF37;
  margin-bottom: 0.5rem;
  font-family: 'Inter', sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const StatLabel = styled.h4`
  font-size: 1.1rem;
  color: #1C2951;
  font-weight: 600;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const StatDescription = styled.p`
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const AboutFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 3rem;
  }
`;

const FeatureCard = styled.div`
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  position: relative;
  border: 2px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(212, 175, 55, 0.3);
    box-shadow: 0 12px 40px rgba(212, 175, 55, 0.1);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #E6C57F 0%, #D4AF37 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
  transition: all 0.3s ease;

  i {
    font-size: 2rem;
    color: #1C2951;
  }

  ${FeatureCard}:hover & {
    transform: scale(1.1);
    box-shadow: 0 6px 25px rgba(212, 175, 55, 0.4);
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;

    i {
      font-size: 1.8rem;
    }
  }
`;

const FeatureTitle = styled.h4`
  font-size: 1.3rem;
  color: #1C2951;
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const FeatureDescription = styled.p`
  color: #64748b;
  line-height: 1.7;
  font-size: 1rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const AboutEnhanced = () => {
  // Placeholder for Lottie animation data - in a real app, you'd load these from your lottie files
  const businessLottie = null; // You can load from /assets/lottiefiles/Business.lottie
  const analyticsLottie = null; // You can load from /assets/lottiefiles/Business analytics animation.lottie
  const teamLottie = null; // You can load from /assets/lottiefiles/Business team.lottie
  const investmentLottie = null; // You can load from /assets/lottiefiles/Investment.lottie

  return (
    <AboutSection id="about">
      <AboutContainer>
        <AboutContent>
          <AboutText>
            <div className="section-header">
              <span className="section-tag" style={{
                display: 'inline-block',
                background: '#E6C57F',
                color: '#1C2951',
                padding: '0.6rem 1.8rem',
                borderRadius: '2rem',
                fontSize: '0.9rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '1rem'
              }}>About Mundra Legal</span>
              <h2 className="section-title" style={{
                fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                color: '#1C2951',
                fontFamily: "'Playfair Display', serif",
                fontWeight: '700',
                marginBottom: '1rem',
                lineHeight: '1.2'
              }}>
                Committed to Excellence in{" "}
                <span style={{ color: '#E6C57F' }}>Legal Practice</span>
              </h2>
            </div>

            <p className="about-description">
              Mundra Legal Consultants is a premier law firm dedicated to providing
              exceptional legal services across diverse practice areas. With over 15
              years of experience, our team of skilled advocates and legal consultants
              has successfully represented clients in complex legal matters, ensuring
              favorable outcomes through strategic planning and meticulous execution.
            </p>

            <p className="about-description">
              We believe in building lasting relationships with our clients by
              delivering personalized legal solutions that address their unique needs.
              Our commitment to integrity, professionalism, and client satisfaction has
              made us a trusted name in the legal community.
            </p>
          </AboutText>

          <AboutStats>
            <StatCard>
              <StatIcon>
                {businessLottie ? (
                  <Lottie
                    animationData={businessLottie}
                    className="lottie-animation"
                    loop
                    autoplay
                  />
                ) : (
                  <i className="fas fa-briefcase" style={{ fontSize: '2.5rem', color: '#D4AF37' }} />
                )}
              </StatIcon>
              <StatNumber>15+</StatNumber>
              <StatLabel>Years Experience</StatLabel>
              <StatDescription>
                Proven track record in diverse legal matters
              </StatDescription>
            </StatCard>

            <StatCard>
              <StatIcon>
                {analyticsLottie ? (
                  <Lottie
                    animationData={analyticsLottie}
                    className="lottie-animation"
                    loop
                    autoplay
                  />
                ) : (
                  <i className="fas fa-chart-line" style={{ fontSize: '2.5rem', color: '#D4AF37' }} />
                )}
              </StatIcon>
              <StatNumber>1000+</StatNumber>
              <StatLabel>Cases Handled</StatLabel>
              <StatDescription>
                Successfully resolved complex legal disputes
              </StatDescription>
            </StatCard>

            <StatCard>
              <StatIcon>
                {teamLottie ? (
                  <Lottie
                    animationData={teamLottie}
                    className="lottie-animation"
                    loop
                    autoplay
                  />
                ) : (
                  <i className="fas fa-users" style={{ fontSize: '2.5rem', color: '#D4AF37' }} />
                )}
              </StatIcon>
              <StatNumber>50+</StatNumber>
              <StatLabel>Expert Lawyers</StatLabel>
              <StatDescription>
                Specialized advocates across practice areas
              </StatDescription>
            </StatCard>

            <StatCard>
              <StatIcon>
                {investmentLottie ? (
                  <Lottie
                    animationData={investmentLottie}
                    className="lottie-animation"
                    loop
                    autoplay
                  />
                ) : (
                  <i className="fas fa-trophy" style={{ fontSize: '2.5rem', color: '#D4AF37' }} />
                )}
              </StatIcon>
              <StatNumber>98%</StatNumber>
              <StatLabel>Success Rate</StatLabel>
              <StatDescription>
                High client satisfaction and case success
              </StatDescription>
            </StatCard>
          </AboutStats>

          <AboutFeatures>
            <FeatureCard>
              <FeatureIcon>
                <i className="fas fa-user-tie"></i>
              </FeatureIcon>
              <FeatureTitle>Client-Centric Approach</FeatureTitle>
              <FeatureDescription>
                Every client receives personalized attention and tailored legal
                strategies designed to meet their specific needs and objectives.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>
                <i className="fas fa-medal"></i>
              </FeatureIcon>
              <FeatureTitle>Proven Track Record</FeatureTitle>
              <FeatureDescription>
                Extensive experience with a high success rate in diverse legal
                matters, backed by years of courtroom expertise.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>
                <i className="fas fa-clock"></i>
              </FeatureIcon>
              <FeatureTitle>Timely Resolution</FeatureTitle>
              <FeatureDescription>
                Efficient case management ensuring swift and effective legal
                solutions while maintaining the highest quality standards.
              </FeatureDescription>
            </FeatureCard>
          </AboutFeatures>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default AboutEnhanced;
