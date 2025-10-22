import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// Keyframe animations
const floating = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.6;
  }
  25% {
    transform: translateY(-20px) rotate(5deg);
    opacity: 0.8;
  }
  50% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.6;
  }
  75% {
    transform: translateY(-10px) rotate(-5deg);
    opacity: 0.8;
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulseGlow = keyframes`
  0%, 100% {
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.3);
  }
  50% {
    box-shadow: 0 8px 35px rgba(212, 175, 55, 0.5);
  }
`;

// Styled Components
const HeroSection = styled.section`
  position: relative;
  min-height: 65vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 120px 20px 60px;
  background: linear-gradient(135deg, #2B4A7C 0%, #3B5A9A 50%, #4A6FB8 100%);

  @media screen and (max-width: 768px) {
    min-height: 55vh;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
`;

const FloatingShape = styled.div`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(212, 175, 55, 0.1), rgba(230, 197, 127, 0.05));
  animation: ${floating} 8s ease-in-out infinite;

  &.shape-1 {
    top: 15%;
    left: 10%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }
  &.shape-2 {
    bottom: 20%;
    right: 15%;
    width: 100px;
    height: 100px;
    animation-delay: 2s;
  }
  &.shape-3 {
    top: 50%;
    left: 80%;
    width: 60px;
    height: 60px;
    animation-delay: 4s;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const HeroContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroContent = styled.div`
  text-align: center;
  color: white;
  width: 100%;
`;

const HeroBreadcrumb = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
  font-size: 15px;
  line-height: 1.5;
`;

const BreadcrumbLink = styled(Link)`
  color: #D4AF37;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: #E6C57F;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: #E6C57F;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const BreadcrumbSeparator = styled.span`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
`;

const BreadcrumbCurrent = styled.span`
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 24px;
  background: linear-gradient(135deg, #FFFFFF 0%, #E6C57F 50%, #D4AF37 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  animation: ${fadeInUp} 0.8s ease-out;
  font-family: 'Playfair Display', serif;
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 300;
  max-width: 700px;
  margin: 0 auto 40px;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;
`;

const HeroCtaGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  animation: ${fadeInUp} 0.8s ease-out 0.4s both;
`;

const CtaButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;
  cursor: pointer;
  white-space: nowrap;

  i {
    font-size: 18px;
  }

  &.primary {
    background: linear-gradient(135deg, #D4AF37 0%, #E6C57F 100%);
    color: #1C2951;
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.3);
    animation: ${pulseGlow} 2s ease-in-out infinite;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 35px rgba(212, 175, 55, 0.5);
    }
  }

  &.secondary {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: 2px solid #D4AF37;
    backdrop-filter: blur(10px);

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      border-color: #E6C57F;
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(212, 175, 55, 0.2);
    }
  }
`;

const ServiceHero = ({ title, subtitle, breadcrumb }) => {
  return (
    <HeroSection>
      <HeroBackground>
        <FloatingShape className="shape-1" />
        <FloatingShape className="shape-2" />
        <FloatingShape className="shape-3" />
      </HeroBackground>
      <HeroContainer>
        <HeroContent>
          <HeroBreadcrumb aria-label="Breadcrumb">
            <BreadcrumbLink to="/">Home</BreadcrumbLink>
            <BreadcrumbSeparator><i className="fas fa-chevron-right"></i></BreadcrumbSeparator>
            <BreadcrumbLink to="/services">Services</BreadcrumbLink>
            <BreadcrumbSeparator><i className="fas fa-chevron-right"></i></BreadcrumbSeparator>
            <BreadcrumbCurrent>{breadcrumb}</BreadcrumbCurrent>
          </HeroBreadcrumb>
          <HeroTitle>{title}</HeroTitle>
          <HeroSubtitle>{subtitle}</HeroSubtitle>
          <HeroCtaGroup>
            <CtaButton to="/contact" className="primary">
              <i className="fas fa-rocket"></i>
              <span>Get Started</span>
            </CtaButton>
            <CtaButton as="a" href="tel:+918506874280" className="secondary">
              <i className="fas fa-phone"></i>
              <span>Call Expert</span>
            </CtaButton>
          </HeroCtaGroup>
        </HeroContent>
      </HeroContainer>
    </HeroSection>
  );
};

export default ServiceHero;
