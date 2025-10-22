import React, { useState, useEffect } from "react";
import styled from "styled-components";

const DisclaimerModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  opacity: ${(props) => (props.show ? 1 : 0)};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  transition: all 0.3s ease;
  pointer-events: ${(props) => (props.show ? "auto" : "none")};
`;

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(28, 41, 81, 0.95);
  backdrop-filter: blur(8px);
`;

const ModalContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 650px;
  max-height: 90vh;
  background: white;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  animation: ${(props) => (props.show ? "modalSlideIn 0.4s ease-out" : "none")};
  border: 3px solid #d4af37;

  @keyframes modalSlideIn {
    from {
      opacity: 0;
      transform: translateY(-50px) scale(0.9);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @media (max-width: 768px) {
    max-width: 95%;
    border-radius: 18px;
    max-height: 92vh;
  }

  @media (max-width: 480px) {
    border-radius: 16px;
    border-width: 2px;
    max-height: 94vh;
  }
`;

const ModalClose = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  background: rgba(212, 175, 55, 0.1);
  border: 2px solid #d4af37;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: #d4af37;
    transform: rotate(90deg);

    i {
      color: white;
    }
  }

  i {
    color: #d4af37;
    font-size: 1.2rem;
    transition: color 0.3s ease;
  }
`;

const ModalContent = styled.div`
  padding: 2rem 1.75rem 1.75rem;
  overflow-y: auto;
  max-height: 90vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 1.75rem 1.3rem 1.3rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem 1rem;
  }
`;

const ModalHeader = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ModalLogo = styled.div`
  margin-bottom: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  order: -1;

  img {
    max-width: 150px;
    height: auto;
    display: block;
    margin: 0 auto;

    @media (max-width: 768px) {
      max-width: 130px;
    }

    @media (max-width: 480px) {
      max-width: 110px;
    }

    @media (max-width: 360px) {
      max-width: 95px;
    }
  }
`;

const ModalTitle = styled.h2`
  font-size: clamp(1.3rem, 3.5vw, 1.75rem);
  color: #1c2951;
  font-family: "Playfair Display", serif;
  font-weight: 700;
  margin: 0 0 0.75rem;

  @media (max-width: 768px) {
    font-size: clamp(1.2rem, 3.5vw, 1.5rem);
  }

  @media (max-width: 480px) {
    font-size: 1.15rem;
    margin-bottom: 0.6rem;
  }

  @media (max-width: 360px) {
    font-size: 1.05rem;
  }
`;

const DecorativeLine = styled.div`
  width: 70px;
  height: 2.5px;
  background: linear-gradient(90deg, transparent, #d4af37, transparent);
  margin: 0 auto;

  @media (max-width: 480px) {
    width: 55px;
    height: 2px;
  }
`;

const ModalBody = styled.div`
  margin-bottom: 1rem;
  flex: 1;
  overflow-y: auto;

  p {
    font-size: 0.82rem;
    line-height: 1.6;
    color: #4a5568;
    margin-bottom: 0.85rem;
    text-align: left;

    &:last-of-type {
      margin-bottom: 1rem;
    }

    @media (max-width: 768px) {
      font-size: 0.78rem;
      line-height: 1.55;
    }

    @media (max-width: 480px) {
      font-size: 0.75rem;
      line-height: 1.5;
      margin-bottom: 0.7rem;
    }

    @media (max-width: 360px) {
      font-size: 0.72rem;
    }
  }
`;

const ModalFeatures = styled.div`
  display: flex;
  gap: 0.6rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    gap: 0.45rem;
    margin-top: 0.75rem;
  }
`;

const FeatureBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 0.85rem;
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.1),
    rgba(212, 175, 55, 0.05)
  );
  border: 1.5px solid #d4af37;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #1c2951;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #d4af37, #c5982d);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);

    i {
      color: white;
    }
  }

  i {
    font-size: 0.9rem;
    color: #d4af37;
    transition: color 0.3s ease;
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 0.45rem 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 0.65rem;
    padding: 0.4rem 0.65rem;
    gap: 0.35rem;

    i {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 360px) {
    font-size: 0.62rem;
    padding: 0.35rem 0.6rem;
  }
`;

const ModalFooter = styled.div`
  display: flex;
  gap: 0.85rem;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 1.25rem;
  border-top: 2px solid rgba(212, 175, 55, 0.2);
  flex-shrink: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }

  @media (max-width: 480px) {
    gap: 0.7rem;
    padding-top: 1rem;
  }
`;

const ModalButton = styled.button`
  flex: 1;
  min-width: 180px;
  padding: 0.9rem 1.3rem;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  text-decoration: none;

  &.primary {
    background: linear-gradient(135deg, #d4af37, #c5982d);
    color: white;
    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 25px rgba(212, 175, 55, 0.5);
    }
  }

  &.secondary {
    background: white;
    color: #d4af37;
    border: 2px solid #d4af37;

    &:hover {
      background: #d4af37;
      color: white;
      transform: translateY(-3px);
      box-shadow: 0 6px 25px rgba(212, 175, 55, 0.4);
    }
  }

  @media (max-width: 768px) {
    min-width: 100%;
    font-size: 0.9rem;
    padding: 0.85rem 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 0.8rem 1rem;
  }

  @media (max-width: 360px) {
    font-size: 0.82rem;
    padding: 0.75rem 0.9rem;
  }
`;

const LegalDisclaimer = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show modal after 2 seconds
    const timer = setTimeout(() => {
      setShow(true);
      document.body.style.overflow = "hidden";
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setShow(false);
    document.body.style.overflow = "";
  };

  const handleOverlayClick = (e) => {
    // Prevent closing by clicking overlay (user must agree)
    e.preventDefault();
  };

  // Prevent escape key from closing
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && show) {
        e.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [show]);

  return (
    <DisclaimerModal show={show}>
      <ModalOverlay onClick={handleOverlayClick} />
      <ModalContainer show={show}>
        <ModalContent>
          <ModalHeader>
            <ModalLogo>
              <img src="/assets/logo.png" alt="Mundra Legal Consultants" />
            </ModalLogo>
            <ModalTitle>Legal Disclaimer</ModalTitle>
            <DecorativeLine />
          </ModalHeader>

          <ModalBody>
            <p>
              As per the rules of the Bar Council of India, law firms are not
              permitted to solicit work and advertise. By clicking the 'I Agree'
              button and accessing this website (https://www.mundralegal.com/)
              the user fully accepts that you are seeking information of your
              own accord and volition and that no form of solicitation has taken
              place by the Firm or its members.
            </p>
            <p>
              The information provided under this website is solely available at
              your request for information purposes only. It should not be
              interpreted as soliciting or advertisement.
            </p>
            <p>
              The firm is not liable for any consequence of any action taken by
              the user relying on material / information provided under this
              website. In cases where the user has any legal issues, he/she in
              all cases must seek independent legal advice.
            </p>

            <ModalFeatures>
              <FeatureBadge>
                <i className="fas fa-gavel"></i>
                <span>Independent Legal Advice</span>
              </FeatureBadge>
              <FeatureBadge>
                <i className="fas fa-shield-alt"></i>
                <span>No Solicitation</span>
              </FeatureBadge>
              <FeatureBadge>
                <i className="fas fa-balance-scale"></i>
                <span>Bar Council Compliance</span>
              </FeatureBadge>
            </ModalFeatures>
          </ModalBody>

          <ModalFooter>
            <ModalButton className="primary" onClick={closeModal}>
              <span>I Agree & Continue</span>
              <i className="fas fa-check-circle"></i>
            </ModalButton>
            <ModalButton as="a" href="tel:+918506874280" className="secondary">
              <i className="fas fa-phone-alt"></i>
              <span>Call Us Now</span>
            </ModalButton>
          </ModalFooter>
        </ModalContent>
      </ModalContainer>
    </DisclaimerModal>
  );
};

export default LegalDisclaimer;
