import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(212, 175, 55, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(212, 175, 55, 0);
  }
`;

const PiriyaButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #D4AF37, #B8941F);
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
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
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
    animation: none;
  }

  &:active {
    transform: translateY(-1px) scale(1.02);
  }

  i {
    font-size: 24px;
    z-index: 2;
    position: relative;

    @media (max-width: 768px) {
      font-size: 20px;
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

const OnlineStatus = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 18px;
  height: 18px;
  background: #25D366;
  border: 3px solid white;
  border-radius: 50%;
  animation: ${bounce} 2s infinite;

  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
    top: -4px;
    right: -4px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6px;
    height: 6px;
    background: white;
    border-radius: 50%;

    @media (max-width: 768px) {
      width: 5px;
      height: 5px;
    }
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

  ${PiriyaButton}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 20px;
  padding: 30px;
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  transform: ${props => props.isOpen ? 'scale(1)' : 'scale(0.8)'};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 20px;
    width: 95%;
  }
`;

const ModalHeader = styled.div`
  text-align: center;
  margin-bottom: 25px;
`;

const PiriyaAvatar = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #D4AF37, #B8941F);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
  position: relative;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }

  i {
    font-size: 32px;
    color: white;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }
`;

const OnlineIndicator = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 20px;
  height: 20px;
  background: #25D366;
  border: 3px solid white;
  border-radius: 50%;
  animation: ${bounce} 2s infinite;

  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

const PiriyaName = styled.h3`
  color: #1C2951;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 5px;
  font-family: 'Playfair Display', serif;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const OnlineText = styled.p`
  color: #25D366;
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  color: #1C2951;
  font-weight: 600;
  font-size: 14px;
`;

const Input = styled.input`
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 16px;
  transition: all 0.3s ease;
  background: #f8fafc;

  @media (max-width: 768px) {
    padding: 10px 14px;
    font-size: 14px;
  }

  &:focus {
    outline: none;
    border-color: #D4AF37;
    background: white;
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #1C2951, #D4AF37);
  color: white;
  border: none;
  padding: 15px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 14px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(28, 41, 81, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  color: #94a3b8;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #1C2951;
  }
`;

const PiriyaAssistant = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you can add logic to send the data to your backend
    console.log('Piriya Assistant Form Data:', formData);
    
    // Show success message
    alert(`Thank you ${formData.name}! Piriya will contact you soon at ${formData.email} or ${formData.phone}`);
    
    // Reset form and close modal
    setFormData({ name: '', phone: '', email: '' });
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <PiriyaButton 
        onClick={() => setIsModalOpen(true)}
        aria-label="Open Piriya AI Assistant"
      >
        <i className="fas fa-robot"></i>
        <OnlineStatus />
        <Tooltip>Chat with Piriya AI Assistant</Tooltip>
      </PiriyaButton>

      <ModalOverlay isOpen={isModalOpen} onClick={handleCloseModal}>
        <ModalContent isOpen={isModalOpen} onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={handleCloseModal}>
            <i className="fas fa-times"></i>
          </CloseButton>
          
          <ModalHeader>
            <PiriyaAvatar>
              <i className="fas fa-robot"></i>
              <OnlineIndicator />
            </PiriyaAvatar>
            <PiriyaName>Piriya</PiriyaName>
            <OnlineText>
              <i className="fas fa-circle"></i>
              Currently Online
            </OnlineText>
          </ModalHeader>

          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                required
              />
            </FormGroup>

            <SubmitButton type="submit">
              Start Chatting with Piriya
            </SubmitButton>
          </Form>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default PiriyaAssistant;
