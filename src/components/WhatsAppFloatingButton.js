import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 3000;
  display: flex;
  align-items: center;
  gap: 12px;
  pointer-events: auto;

  @media (max-width: 480px) {
    right: 16px;
    bottom: 16px;
  }
`;

const FloatingButton = styled.a`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
  box-shadow: 0 10px 30px rgba(37, 211, 102, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 40px rgba(37, 211, 102, 0.28);
  }

  i {
    font-size: 1.35rem;
  }

  @media (max-width: 480px) {
    width: 56px;
    height: 56px;
  }
`;

const PhoneBubble = styled.div`
  background: rgba(0,0,0,0.75);
  color: white;
  padding: 8px 12px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.95rem;
  white-space: nowrap;
  transform-origin: right center;
  transition: opacity 0.2s ease, transform 0.2s ease;
  opacity: 0;
  pointer-events: none;

  /* position relative to the wrapper so it stays attached to the button */
  @media (min-width: 0px) {
    display: block;
  }

  /* show bubble on hover (desktop) */
  ${Wrapper}:hover & {
    opacity: 1;
    pointer-events: auto;
    transform: translateX(0);
  }

  @media (min-width: 1025px) {
    opacity: 1; /* always visible on large screens */
    pointer-events: auto;
  }
`;

const WhatsAppFloatingButton = ({ number = '918506874280', label = 'Chat with us' }) => {
  const href = `https://wa.me/${number.replace(/[^0-9]/g, '')}`;

  return (
    <Wrapper>
      <PhoneBubble>{label}</PhoneBubble>
      <FloatingButton href={href} target="_blank" rel="noreferrer noopener" aria-label="Chat on WhatsApp">
        <i className="fab fa-whatsapp" aria-hidden="true"></i>
      </FloatingButton>
    </Wrapper>
  );
};

export default WhatsAppFloatingButton;
