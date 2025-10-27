import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GlobalStyles from "../styles/GlobalStyles";

// Animations
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

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
`;

// Main container
const AboutPageContainer = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
`;

// Hero Section (simplified and decluttered)
const AboutHero = styled.section`
  min-height: 78vh;
  display: flex;
  align-items: center;
  position: relative;
  background: linear-gradient(180deg, #16213a 0%, #1c2951 60%);
  overflow: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    /* subtle overlay for contrast */
    background: linear-gradient(180deg, rgba(12,18,34,0.55), rgba(28,41,81,0.45));
    z-index: 1;
    pointer-events: none;
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;

  .element {
    position: absolute;
    background: rgba(212,175,55,0.08);
    border-radius: 50%;
    animation: ${float} 8s ease-in-out infinite;
    filter: blur(6px);

    &.element-1 {
      width: 56px;
      height: 56px;
      top: 18%;
      left: 6%;
      animation-delay: 0s;
    }

    &.element-2 {
      width: 48px;
      height: 48px;
      top: 62%;
      right: 12%;
      animation-delay: 2s;
    }

    /* reduced elements for less clutter */
  }
 
  @media (max-width: 768px) {
    display: none; /* hide decorative floats on small screens */
  }
`;

const HeroContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 2.5rem;
  align-items: center;
  position: relative;
  z-index: 4;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    text-align: center;
    align-items: center;
    justify-items: center;
    padding: 0 1rem;
  }
`;

const HeroContent = styled.div`
  color: white;

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(212,175,55,0.12);
    color: #e6c57f;
    padding: 0.35rem 0.85rem;
    border-radius: 999px;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 1rem;
    border: 1px solid rgba(212,175,55,0.14);
    animation: ${fadeInUp} 0.9s ease-out 0.05s both;

    i {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 900px) {
    .hero-badge { justify-content: center; }
    h1 { text-align: center; }
    .hero-description { margin-left: auto; margin-right: auto; text-align: center; }
  }

  h1 {
    font-size: clamp(2rem, 4.5vw, 3rem);
    font-family: "Playfair Display", serif;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 1rem;
    animation: ${fadeInUp} 0.9s ease-out 0.15s both;

    color: #ffffff; /* ensure main heading is white */

    .highlight-text {
      color: #e6c57f;
      display: inline-block;
      font-style: normal;
    }

    .h1-secondary {
      color: #ffffff; /* trailing text explicitly white */
      display: inline-block;
      margin-left: 0.35rem;
      font-weight: 600;
      font-size: 0.95em;
    }
  }

  .hero-description {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    color: rgba(255, 255, 255, 0.95);
    max-width: 58ch;
    animation: ${fadeInUp} 0.9s ease-out 0.25s both;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 2rem;
  animation: ${fadeInUp} 0.9s ease-out 0.3s both;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
    align-items: stretch;
  }

  .btn-primary,
  .btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.7rem 1.2rem;
    border-radius: 999px;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.22s ease;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    .btn-primary, .btn-secondary {
      width: 100%;
      justify-content: center;
      padding-left: 1rem;
      padding-right: 1rem;
      border-radius: 12px;
    }
  }

  .btn-primary {
    background: linear-gradient(90deg, #e6c57f 0%, #d4af37 100%);
    color: #102035;
    border: none;
  }

  .btn-secondary {
    background: transparent;
    color: rgba(255,255,255,0.95);
    border: 1.6px solid rgba(255,255,255,0.12);
  }
`;

const HeroCredentials = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
  animation: ${fadeInUp} 0.9s ease-out 0.4s both;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }

  .credential-item {
    text-align: center;

    .credential-number {
      font-size: 1.6rem;
      font-weight: 900;
      color: #e6c57f;
      font-family: "Inter", sans-serif;
      animation: ${zoomIn} 0.9s ease-out 0.5s both;
    }

    .credential-text {
      font-size: 0.85rem;
      color: rgba(255, 255, 255, 0.85);
      font-weight: 600;
    }
  }
`;

const HeroImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeInLeft} 0.9s ease-out 0.5s both;

  @media (max-width: 900px) {
    order: 2;
  }
`;

const HeroCard = styled.div`
  background: rgba(255,255,255,0.06);
  border-radius: 16px;
  padding: 1.4rem;
  text-align: center;
  max-width: 320px;
  border: 1px solid rgba(255,255,255,0.06);

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 1rem;
  }

  .card-icon {
    width: 64px;
    height: 64px;
    background: linear-gradient(90deg, #e6c57f 0%, #d4af37 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 0.8rem;

    i {
      font-size: 1.6rem;
      color: #102035;
    }
  }

  h3 {
    font-size: 1.15rem;
    color: #fff;
    font-family: "Playfair Display", serif;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255,255,255,0.85);
    line-height: 1.5;
    font-size: 0.95rem;
    margin: 0;
  }
`;

// About Content Section
const AboutSection = styled.section`
  padding: 5rem 0;
  background: #fff;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutText = styled.div`
  .section-header {
    margin-bottom: 2rem;

    .section-badge {
      display: inline-block;
      background: linear-gradient(135deg, #e6c57f 0%, #d4af37 100%);
      color: #1c2951;
      padding: 0.5rem 1rem;
      border-radius: 50px;
      font-size: 0.85rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 1rem;
    }

    .section-title {
      font-size: clamp(2rem, 4vw, 2.5rem);
      color: #1c2951;
      font-family: "Playfair Display", serif;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 1rem;

      .highlight-text {
        color: #e6c57f;
      }
    }

    .section-description {
      font-size: 1.1rem;
      color: #64748b;
      line-height: 1.7;
    }
  }

  .about-details {
    p {
      font-size: 1rem;
      line-height: 1.8;
      color: #64748b;
      margin-bottom: 1.5rem;
    }
  }
`;

const AboutFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  .feature-icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #e6c57f 0%, #d4af37 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    i {
      font-size: 1.2rem;
      color: #1c2951;
    }
  }

  .feature-content {
    h4 {
      font-size: 1.1rem;
      color: #1c2951;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    p {
      color: #64748b;
      line-height: 1.6;
      font-size: 0.95rem;
      margin: 0;
    }
  }
`;

const AboutImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .image-wrapper {
    position: relative;
    width: 100%;
    max-width: 400px;
  }
`;

const AboutCard = styled.div`
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 2px solid #e6c57f;

  .card-content {
    text-align: center;

    .card-icon {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, #e6c57f 0%, #d4af37 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;

      i {
        font-size: 2rem;
        color: #1c2951;
      }
    }

    .card-stats {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;

      .stat-item {
        text-align: center;

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 900;
          color: #d4af37;
          font-family: "Inter", sans-serif;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #64748b;
          font-weight: 500;
        }
      }
    }
  }
`;

// Values Section
const ValuesSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);

  @media (max-width: 768px) {
    padding: 3rem 0;
  }

  .section-header {
    text-align: center;
    margin-bottom: 3rem;

    .section-badge {
      display: inline-block;
      background: linear-gradient(135deg, #e6c57f 0%, #d4af37 100%);
      color: #1c2951;
      padding: 0.5rem 1rem;
      border-radius: 50px;
      font-size: 0.85rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 1rem;
    }

    .section-title {
      font-size: clamp(2rem, 4vw, 2.5rem);
      color: #1c2951;
      font-family: "Playfair Display", serif;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 1rem;

      .highlight-text {
        color: #e6c57f;
      }
    }

    .section-description {
      font-size: 1.1rem;
      color: #64748b;
      line-height: 1.7;
      max-width: 600px;
      margin: 0 auto;
    }
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ValueCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  border: 2px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(212, 175, 55, 0.15);
    border-color: rgba(212, 175, 55, 0.3);
  }

  .value-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #e6c57f 0%, #d4af37 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    transition: transform 0.3s ease;

    i {
      font-size: 2rem;
      color: #1c2951;
    }
  }

  &:hover .value-icon {
    transform: scale(1.1);
  }

  h3 {
    font-size: 1.3rem;
    color: #1c2951;
    font-weight: 700;
    margin-bottom: 1rem;
    font-family: "Playfair Display", serif;
  }

  p {
    color: #64748b;
    line-height: 1.7;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    .value-icon {
      width: 70px;
      height: 70px;

      i {
        font-size: 1.8rem;
      }
    }

    h3 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.95rem;
    }
  }
`;

// Team Section
const TeamSection = styled.section`
  padding: 5rem 0;
  background: white;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TeamMember = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  border: 2px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(212, 175, 55, 0.15);
    border-color: rgba(212, 175, 55, 0.3);
  }

  .member-image {
    margin-bottom: 1.5rem;

    .image-placeholder {
      width: 120px;
      height: 120px;
      background: linear-gradient(135deg, #e6c57f 0%, #d4af37 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;

      i {
        font-size: 3rem;
        color: #1c2951;
      }
    }
  }

  .member-info {
    h3 {
      font-size: 1.4rem;
      color: #1c2951;
      font-weight: 700;
      margin-bottom: 0.5rem;
      font-family: "Playfair Display", serif;
    }

    .member-role {
      color: #e6c57f;
      font-weight: 600;
      font-size: 1rem;
      margin-bottom: 1rem;
    }

    .member-description {
      color: #64748b;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      font-size: 0.95rem;
    }

    .member-specialties {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      justify-content: center;

      .specialty {
        background: rgba(230, 197, 127, 0.1);
        color: #d4af37;
        padding: 0.3rem 0.8rem;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 600;
        border: 1px solid rgba(230, 197, 127, 0.3);
      }
    }
  }
`;

// Why Choose Us Section
const WhyChooseSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #1c2951 0%, #2b3f6b 100%);

  @media (max-width: 768px) {
    padding: 3rem 0;
  }

  .section-header {
    text-align: center;
    margin-bottom: 3rem;

    .section-badge {
      display: inline-block;
      background: linear-gradient(135deg, #e6c57f 0%, #d4af37 100%);
      color: #1c2951;
      padding: 0.5rem 1rem;
      border-radius: 50px;
      font-size: 0.85rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 1rem;
    }

    .section-title {
      font-size: clamp(2rem, 4vw, 2.5rem);
      color: white;
      font-family: "Playfair Display", serif;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 1rem;

      .highlight-text {
        color: #e6c57f;
      }
    }

    .section-description {
      font-size: 1.1rem;
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.7;
      max-width: 600px;
      margin: 0 auto;
    }
  }
`;

const ChooseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ChooseCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-5px);
    border-color: rgba(230, 197, 127, 0.3);
  }

  .choose-icon {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, #e6c57f 0%, #d4af37 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    transition: transform 0.3s ease;

    i {
      font-size: 1.8rem;
      color: #1c2951;
    }
  }

  &:hover .choose-icon {
    transform: scale(1.1);
  }

  h4 {
    font-size: 1.2rem;
    color: white;
    font-weight: 700;
    margin-bottom: 1rem;
    font-family: "Playfair Display", serif;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    .choose-icon {
      width: 60px;
      height: 60px;

      i {
        font-size: 1.6rem;
      }
    }

    h4 {
      font-size: 1.1rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

// CTA Section
const CTASection = styled.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #e6c57f 0%, #d4af37 100%);

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const CTAContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;

  .cta-text {
    margin-bottom: 2rem;

    h2 {
      font-size: clamp(2rem, 4vw, 2.5rem);
      color: #1c2951;
      font-family: "Playfair Display", serif;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.1rem;
      color: rgba(28, 41, 81, 0.8);
      line-height: 1.6;
    }
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 0.8rem;
      max-width: 300px;
      margin: 0 auto;
    }

    .btn-primary,
    .btn-secondary {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.8rem 1.5rem;
      border-radius: 50px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;
      font-size: 1rem;

      @media (max-width: 768px) {
        justify-content: center;
        padding: 0.9rem 1.5rem;
      }
    }

    .btn-primary {
      background: #1c2951;
      color: white;
      border: 2px solid #1c2951;

      &:hover {
        background: transparent;
        color: #1c2951;
        text-decoration: none;
      }
    }

    .btn-secondary {
      background: transparent;
      color: #1c2951;
      border: 2px solid #1c2951;

      &:hover {
        background: #1c2951;
        color: white;
        text-decoration: none;
      }
    }
  }
`;

// Footer

// Back to Top Button
const BackToTop = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #e6c57f 0%, #d4af37 100%);
  color: #1c2951;
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

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(230, 197, 127, 0.5);
  }

  i {
    font-size: 1.2rem;
  }
`;

const About = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AboutPageContainer>
      <GlobalStyles />
      <Header />

      {/* Hero Section */}
      <AboutHero>
        <HeroBackground>
          <FloatingElements>
            <div className="element element-1"></div>
            <div className="element element-2"></div>
            <div className="element element-3"></div>
          </FloatingElements>
        </HeroBackground>

        <HeroContainer>
          <HeroContent>
            <div className="hero-badge">
              <i className="fas fa-award"></i>
              <span>Excellence in Legal Practice Since 2015</span>
            </div>

            <h1>
              About <span className="highlight-text">Mundra Legal Consultants</span>
              <span className="h1-secondary">Your Trusted Legal Partners</span>
            </h1>

            <p className="hero-description">
              We are a premier legal Consultants firm committed to providing
              exceptional legal services with unwavering integrity, expertise,
              and personalized attention. Our mission is to be your trusted
              legal partner in every challenge you face.
            </p>

            <HeroButtons>
              <a href="/contact" className="btn-primary">
                <i className="fas fa-calendar-check"></i>
                Schedule Consultation
              </a>
              <a href="#team" className="btn-secondary">
                <i className="fas fa-users"></i>
                Meet Our Team
              </a>
            </HeroButtons>

            <HeroCredentials>
              <div className="credential-item">
                <div className="credential-number">500+</div>
                <div className="credential-text">Cases Won</div>
              </div>
              <div className="credential-item">
                <div className="credential-number">10+</div>
                <div className="credential-text">Years Experience</div>
              </div>
              <div className="credential-item">
                <div className="credential-number">1000+</div>
                <div className="credential-text">Happy Clients</div>
              </div>
              <div className="credential-item">
                <div className="credential-number">98%</div>
                <div className="credential-text">Success Rate</div>
              </div>
            </HeroCredentials>
          </HeroContent>

          <HeroImage>
            <HeroCard>
              <div className="card-icon">
                <i className="fas fa-balance-scale"></i>
              </div>
              <h3>Professional Excellence</h3>
              <p>
                Committed to delivering outstanding legal services with
                integrity and expertise.
              </p>
            </HeroCard>
          </HeroImage>
        </HeroContainer>
      </AboutHero>

      {/* About Content Section */}
      <AboutSection>
        <Container>
          <AboutContent>
            <AboutText>
              <div className="section-header">
                <span className="section-badge">Our Story</span>
                <h2 className="section-title">
                  Building Trust Through{" "}
                  <span className="highlight-text">Legal Excellence</span>
                </h2>
                <p className="section-description">
                  Founded with a vision to provide accessible and reliable legal
                  services, Mundra Legal Consultants has grown to become a
                  trusted name in the legal industry.
                </p>
              </div>

              <div className="about-details">
                <p>
                  Since our establishment in 2015, we have been dedicated to
                  serving individuals, businesses, and corporations with
                  comprehensive legal solutions. Our team of experienced legal
                  professionals brings together decades of collective expertise
                  across various practice areas.
                </p>

                <p>
                  We believe that every client deserves personalized attention
                  and strategic legal counsel tailored to their unique needs.
                  Our commitment to excellence, integrity, and client
                  satisfaction has earned us a reputation as one of the most
                  trusted legal consultancies in the region.
                </p>

                <AboutFeatures>
                  <FeatureItem>
                    <div className="feature-icon">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <div className="feature-content">
                      <h4>Comprehensive Legal Services</h4>
                      <p>
                        From documentation to complex litigation, we cover all
                        aspects of legal practice.
                      </p>
                    </div>
                  </FeatureItem>

                  <FeatureItem>
                    <div className="feature-icon">
                      <i className="fas fa-users"></i>
                    </div>
                    <div className="feature-content">
                      <h4>Expert Legal Team</h4>
                      <p>
                        Our experienced attorneys bring specialized knowledge
                        across multiple practice areas.
                      </p>
                    </div>
                  </FeatureItem>

                  <FeatureItem>
                    <div className="feature-icon">
                      <i className="fas fa-handshake"></i>
                    </div>
                    <div className="feature-content">
                      <h4>Client-Focused Approach</h4>
                      <p>
                        We prioritize understanding your needs and delivering
                        personalized legal solutions.
                      </p>
                    </div>
                  </FeatureItem>
                </AboutFeatures>
              </div>
            </AboutText>

            <AboutImage>
              <div className="image-wrapper">
                <AboutCard>
                  <div className="card-content">
                    <div className="card-icon">
                      <i className="fas fa-gavel"></i>
                    </div>
                    <div className="card-stats">
                      <div className="stat-item">
                        <span className="stat-number">500+</span>
                        <span className="stat-label">Successful Cases</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-number">98%</span>
                        <span className="stat-label">Client Satisfaction</span>
                      </div>
                    </div>
                  </div>
                </AboutCard>
              </div>
            </AboutImage>
          </AboutContent>
        </Container>
      </AboutSection>

      {/* Values Section */}
      <ValuesSection>
        <Container>
          <div className="section-header">
            <span className="section-badge">Our Values</span>
            <h2 className="section-title">
              What Drives Us <span className="highlight-text">Forward</span>
            </h2>
            <p className="section-description">
              Our core values shape every aspect of our practice and guide our
              commitment to excellence.
            </p>
          </div>

          <ValuesGrid>
            <ValueCard>
              <div className="value-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Integrity</h3>
              <p>
                We maintain the highest ethical standards in all our
                professional dealings and client relationships.
              </p>
            </ValueCard>

            <ValueCard>
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation</h3>
              <p>
                We embrace modern technology and innovative approaches to
                deliver efficient legal solutions.
              </p>
            </ValueCard>

            <ValueCard>
              <div className="value-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Compassion</h3>
              <p>
                We understand that legal matters can be stressful and approach
                each case with empathy and care.
              </p>
            </ValueCard>

            <ValueCard>
              <div className="value-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <h3>Excellence</h3>
              <p>
                We strive for excellence in every case, ensuring the best
                possible outcomes for our clients.
              </p>
            </ValueCard>
          </ValuesGrid>
        </Container>
      </ValuesSection>

      {/* Team Section */}
      <TeamSection id="team">
        <Container>
          <div className="section-header">
            <span className="section-badge">Our Team</span>
            <h2 className="section-title">
              Meet Our <span className="highlight-text">Legal Experts</span>
            </h2>
            <p className="section-description">
              Our dedicated team of legal professionals brings together diverse
              expertise and unwavering commitment to client success.
            </p>
          </div>

          <TeamGrid>
            <TeamMember>
              <div className="member-image">
                <div className="image-placeholder">
                  <i className="fas fa-user-tie"></i>
                </div>
              </div>
              <div className="member-info">
                <h3>Adv. Deepak Dahiya </h3>
                <p className="member-role">Senior Partner & Founder</p>
                <p className="member-description">
                  With over 15 years of experience in corporate law and
                  litigation, Rajesh leads our firm with expertise and vision.
                </p>
                <div className="member-specialties">
                  <span className="specialty">Corporate Law</span>
                  <span className="specialty">Litigation</span>
                  <span className="specialty">Real Estate</span>
                </div>
              </div>
            </TeamMember>

            <TeamMember>
              <div className="member-image">
                <div className="image-placeholder">
                  <i className="fas fa-user-graduate"></i>
                </div>
              </div>
              <div className="member-info">
                <h3>Adv. Madhav Sharma</h3>
                <p className="member-role">Senior Associate</p>
                <p className="member-description">
                  Specializing in family law and criminal defense, Priya brings
                  compassion and expertise to every case.
                </p>
                <div className="member-specialties">
                  <span className="specialty">Family Law</span>
                  <span className="specialty">Criminal Defense</span>
                  <span className="specialty">Consumer Rights</span>
                </div>
              </div>
            </TeamMember>

            <TeamMember>
              <div className="member-image">
                <div className="image-placeholder">
                  <i className="fas fa-user-tie"></i>
                </div>
              </div>
              <div className="member-info">
                <h3>Nikhli Malhotra</h3>
                <p className="member-role">Business License Expert</p>
                <p className="member-description">
                  Expert in intellectual property and taxation law, Amit
                  provides strategic counsel for complex legal matters.
                </p>
                <div className="member-specialties">
                  <span className="specialty">IP Law</span>
                  <span className="specialty">Taxation</span>
                  <span className="specialty">Compliance</span>
                </div>
              </div>
            </TeamMember>
          </TeamGrid>
        </Container>
      </TeamSection>

      {/* Why Choose Us Section */}
      <WhyChooseSection>
        <Container>
          <div className="section-header">
            <span className="section-badge">Why Choose Us</span>
            <h2 className="section-title">
              Your Success Is{" "}
              <span className="highlight-text">Our Priority</span>
            </h2>
            <p className="section-description">
              Discover what makes Mundra Legal Consultants the preferred choice
              for legal services.
            </p>
          </div>

          <ChooseGrid>
            <ChooseCard>
              <div className="choose-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h4>24/7 Support</h4>
              <p>
                Emergency legal support available round the clock for urgent
                matters and critical situations.
              </p>
            </ChooseCard>

            <ChooseCard>
              <div className="choose-icon">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <h4>Transparent Pricing</h4>
              <p>
                Clear, upfront pricing with no hidden fees. We believe in
                transparency in all our dealings.
              </p>
            </ChooseCard>

            <ChooseCard>
              <div className="choose-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h4>Quick Turnaround</h4>
              <p>
                Efficient processing and quick resolution of legal matters
                without compromising on quality.
              </p>
            </ChooseCard>

            <ChooseCard>
              <div className="choose-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h4>Modern Approach</h4>
              <p>
                We leverage technology to streamline processes and provide
                efficient, convenient legal services.
              </p>
            </ChooseCard>

            <ChooseCard>
              <div className="choose-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4>Confidentiality</h4>
              <p>
                Complete client confidentiality and data protection ensuring
                your information remains secure.
              </p>
            </ChooseCard>

            <ChooseCard>
              <div className="choose-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h4>Personal Attention</h4>
              <p>
                Each client receives personalized attention and customized legal
                strategies for their unique needs.
              </p>
            </ChooseCard>
          </ChooseGrid>
        </Container>
      </WhyChooseSection>

      {/* CTA Section */}
      <CTASection>
        <Container>
          <CTAContent>
            <div className="cta-text">
              <h2>Ready to Get Started?</h2>
              <p>
                Let us help you navigate your legal challenges with confidence
                and expertise.
              </p>
            </div>
            <div className="cta-buttons">
              <a href="/contact" className="btn-primary">
                <i className="fas fa-phone"></i>
                Contact Us Today
              </a>
              <a href="/services" className="btn-secondary">
                <i className="fas fa-arrow-right"></i>
                View Our Services
              </a>
            </div>
          </CTAContent>
        </Container>
      </CTASection>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <BackToTop
        className={showBackToTop ? "visible" : ""}
        onClick={scrollToTop}
      >
        <i className="fas fa-chevron-up"></i>
      </BackToTop>
    </AboutPageContainer>
  );
};

export default About;
