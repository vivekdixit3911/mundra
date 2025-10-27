import React from 'react';
import styled from 'styled-components';
import WhatsAppButtonComponent from './WhatsAppButton';
import ChattyAssistant from './PiriyaAssistant';

const FloatingButtonsContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-end;

  @media (max-width: 768px) {
    bottom: 15px;
    right: 15px;
    gap: 12px;
  }
`;

const FloatingButtons = () => {
  return (
    <FloatingButtonsContainer>
  <WhatsAppButtonComponent />
  <ChattyAssistant />
    </FloatingButtonsContainer>
  );
};

export default FloatingButtons;
