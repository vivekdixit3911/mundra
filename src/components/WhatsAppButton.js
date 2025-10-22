import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
`;

const WhatsAppButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #25D366, #128C7E);
  border-radius: 50%;
  color: white;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.3);
  transition: all 0.3s ease;
  animation: ${pulse} 2s infinite;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
  }

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
    animation: none;
  }

  &:active {
    transform: translateY(-1px) scale(1.02);
  }

  i {
    font-size: 28px;
    z-index: 2;
    position: relative;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.2) 50%, transparent 70%);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover::before {
    transform: translateX(100%);
  }
`;

const Tooltip = styled.div`
  position: absolute;
  right: 70px;
  top: 50%;
  transform: translateY(-50%);
  background: #1C2951;
  color: white;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(28, 41, 81, 0.2);

  @media (max-width: 768px) {
    right: 65px;
    font-size: 12px;
    padding: 6px 10px;
  }

  &::after {
    content: '';
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 6px solid transparent;
    border-left-color: #1C2951;
  }

  ${WhatsAppButton}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

const WhatsAppButtonComponent = () => {
  const phoneNumber = "+918506874280"; // Replace with your WhatsApp number
  const message = "Hello! I'm interested in your legal services. Can you help me?";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <WhatsAppButton 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
      <Tooltip>Chat with us on WhatsApp</Tooltip>
    </WhatsAppButton>
  );
};

export default WhatsAppButtonComponent;
