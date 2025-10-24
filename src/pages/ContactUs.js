import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Styled Components for ContactUs
const ContactHero = styled.section`
  min-height: 50vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 120px 0 80px;
  background: linear-gradient(135deg, rgba(28,41,81,0.95) 0%, rgba(43,63,107,0.9) 50%, rgba(59,89,152,0.85) 100%), url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    padding: 100px 0 60px;
    min-height: 40vh;
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
`;

const FloatingElement = styled.div`
  position: absolute;
  background: linear-gradient(45deg, rgba(212, 175, 55, 0.15), rgba(184, 148, 31, 0.1));
  border-radius: ${props => props.shape === 'circle' ? '50%' : '20px'};
  display: flex;
  align-items: center;
  justify-content: center;
  animation: float 6s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};

  i {
    font-size: ${props => props.iconSize || '2rem'};
    color: rgba(212, 175, 55, 0.5);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
`;

const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  margin-bottom: 2.5rem;
  font-size: 1rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }
`;

const BreadcrumbLink = styled.a`
  color: #D4AF37;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    color: #E6C57F;
    text-decoration: none;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  background: linear-gradient(135deg, #ffffff 0%, #D4AF37 50%, #B8941F 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const HeroDescription = styled.p`
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  margin-bottom: 3rem;
  opacity: 0.95;
  line-height: 1.6;
  font-weight: 300;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  color: #f1f5f9;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    font-size: 1rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justifyContent: center;
  flexWrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;

const HeroButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem 2.5rem;
  background: ${props => props.primary ? 'linear-gradient(135deg, #D4AF37, #B8941F)' : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.primary ? '#1C2951' : 'white'};
  text-decoration: none;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  border: ${props => props.primary ? 'none' : '2px solid rgba(212, 175, 55, 0.4)'};
  backdrop-filter: ${props => props.primary ? 'none' : 'blur(10px)'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.primary ? '0 10px 30px rgba(212, 175, 55, 0.4)' : '0 8px 24px rgba(0, 0, 0, 0.2)'};
    text-decoration: none;
    color: ${props => props.primary ? '#1C2951' : 'white'};
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1rem;
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
`;

const ContactDetailed = styled.section`
  padding: 100px 0;
  background: #f8fafc;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  color: #1C2951;
  margin-bottom: 1rem;
  font-weight: 700;

  @media (max-width: 768px) {
    margin-bottom: 0.8rem;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.3rem;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactFormContainer = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 25px;
  box-shadow: 0 20px 60px rgba(28, 41, 81, 0.12);
  border: 1px solid rgba(212, 175, 55, 0.2);

  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 20px;
  }
`;

const FormHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;

  h3 {
    color: #1C2951;
    margin-bottom: 0.5rem;
    font-size: 2rem;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    color: #64748b;
    font-size: 1.1rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--primary-color);
    font-weight: 600;
    font-size: 0.95rem;
  }
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem 1.2rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #fafbfc;

  &:focus {
    border-color: #D4AF37;
    background: white;
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
    outline: none;
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 1rem 1.2rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #fafbfc;

  &:focus {
    border-color: #D4AF37;
    background: white;
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
    outline: none;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem 1.2rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #fafbfc;
  resize: vertical;
  min-height: 120px;

  &:focus {
    border-color: #D4AF37;
    background: white;
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
    outline: none;
  }
`;

const ConsentRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 1rem 0;

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    accent-color: #D4AF37;
  }

  label {
    color: #64748b;
    font-size: 0.9rem;
    line-height: 1.4;
    margin: 0;

    a {
      color: #D4AF37;
      text-decoration: none;
    }
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #D4AF37, #B8941F);
  color: #1C2951;
  padding: 1.2rem 2rem;
  border: none;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(212, 175, 55, 0.5);
  }

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    font-size: 1rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(28, 41, 81, 0.1);
  border-left: 5px solid #D4AF37;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const InfoHeader = styled.h3`
  color: #1C2951;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  i {
    color: #D4AF37;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #D4AF37, #B8941F);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  i {
    color: white;
    font-size: 1.2rem;
  }
`;

const InfoContent = styled.div`
  h4 {
    color: #1C2951;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    font-weight: 600;
  }

  p {
    color: #64748b;
    margin: 0;
    line-height: 1.5;
    font-size: 1rem;

    a {
      color: #D4AF37;
      text-decoration: none;
      font-weight: 600;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const WhyChooseCard = styled.div`
  background: linear-gradient(135deg, #1C2951 0%, #2B3F6B 100%);
  padding: 2.5rem;
  border-radius: 20px;
  color: white;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const WhyChooseList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const WhyChooseItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  i {
    color: #D4AF37;
    font-size: 1.1rem;
  }

  span {
    font-size: 1rem;
    opacity: 0.9;
  }
`;

const MapSection = styled.section`
  padding: 0;
  background: #f8fafc;
`;

const MapHeader = styled.div`
  background: white;
  padding: 3rem 0;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const MapTitle = styled.h3`
  color: #1C2951;
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const MapDescription = styled.p`
  color: #64748b;
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const MapContainer = styled.div`
  height: 500px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 400px;
  }
`;

const MapOverlay = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(28, 41, 81, 0.2);
  max-width: 300px;
  border-left: 4px solid #D4AF37;

  @media (max-width: 768px) {
    top: 1rem;
    left: 1rem;
    right: 1rem;
    max-width: none;
    padding: 1rem;
  }

  h4 {
    color: #1C2951;
    margin-bottom: 0.8rem;
    font-size: 1.2rem;
    font-weight: 700;
  }

  p {
    color: #64748b;
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.4;

    i {
      color: #D4AF37;
      margin-right: 0.5rem;
    }
  }
`;

const FAQSection = styled.section`
  padding: 100px 0;
  background: white;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  background: #f8fafc;
  margin-bottom: 1rem;
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
`;

const FAQQuestion = styled.div`
  padding: 1.5rem 2rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-bottom: 1px solid #e2e8f0;

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }

  h4 {
    color: #1C2951;
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  i {
    color: #D4AF37;
    transition: transform 0.3s ease;
  }
`;

const FAQAnswer = styled.div`
  padding: 0 2rem;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  p {
    color: #64748b;
    padding: 1.5rem 0;
    margin: 0;
    line-height: 1.6;

    @media (max-width: 768px) {
      padding: 1rem 0;
    }
  }
`;

const ContactUs = () => {
  useEffect(() => {
    // Initialize AOS
    const AOS = window.AOS;
    if (AOS) {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });
    }

    // Form Enhancement
    const form = document.getElementById("contactForm");
    if (form) {
      const inputs = form.querySelectorAll("input, select, textarea");

      const handleFocus = (e) => {
        e.target.style.borderColor = "#D4AF37";
        e.target.style.boxShadow = "0 0 0 3px rgba(212, 175, 55, 0.1)";
      };

      const handleBlur = (e) => {
        e.target.style.borderColor = "#e2e8f0";
        e.target.style.boxShadow = "none";
      };

      inputs.forEach((input) => {
        input.addEventListener("focus", handleFocus);
        input.addEventListener("blur", handleBlur);
      });

      const handleSubmit = (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;
        const consent = document.getElementById("consent").checked;

        if (!name || !email || !phone || !subject || !message || !consent) {
          alert("Please fill in all required fields and provide consent.");
          return;
        }

        const submitBtn = form.querySelector(".submit-btn");
        const originalText = submitBtn.innerHTML;

        submitBtn.innerHTML =
          '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        setTimeout(() => {
          submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
          submitBtn.style.background =
            "linear-gradient(135deg, #D4AF37, #B8941F)";

          setTimeout(() => {
            form.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background =
              "linear-gradient(135deg, #D4AF37, #B8941F)";
            alert(
              "Thank you for your message! We will get back to you within 24 hours."
            );
          }, 2000);
        }, 1500);
      };

      form.addEventListener("submit", handleSubmit);

      // Cleanup function
      return () => {
        inputs.forEach((input) => {
          input.removeEventListener("focus", handleFocus);
          input.removeEventListener("blur", handleBlur);
        });
        form.removeEventListener("submit", handleSubmit);
      };
    }
  }, []);

  const toggleFAQ = (element) => {
    const answer = element.nextElementSibling;
    const icon = element.querySelector("i");

    if (answer.style.maxHeight === "0px" || answer.style.maxHeight === "") {
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.style.transform = "rotate(180deg)";
      element.style.backgroundColor = "#f8fafc";
    } else {
      answer.style.maxHeight = "0px";
      icon.style.transform = "rotate(0deg)";
      element.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Header />
      <main id="main-content">
        <ContactHero>
          <FloatingElements>
            <FloatingElement shape="circle" style={{ top: '15%', left: '10%', width: '80px', height: '80px' }}>
              <i className="fas fa-gavel"></i>
            </FloatingElement>
            <FloatingElement shape="square" delay="2s" style={{ top: '25%', right: '15%', width: '60px', height: '60px' }}>
              <i className="fas fa-balance-scale"></i>
            </FloatingElement>
            <FloatingElement shape="circle" delay="4s" style={{ bottom: '20%', left: '20%', width: '70px', height: '70px' }}>
              <i className="fas fa-file-contract"></i>
            </FloatingElement>
          </FloatingElements>

          <Container>
            <HeroContent>
              <Breadcrumb>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                <i className="fas fa-chevron-right" style={{ fontSize: '0.8rem', opacity: 0.7 }}></i>
                <span style={{ opacity: 0.8 }}>Contact Us</span>
              </Breadcrumb>

              <HeroTitle>Contact Mundra Legal Consultants</HeroTitle>

              <HeroDescription>
                Get professional legal consultation and comprehensive legal services. Our expert team is here to secure your legal rights and provide trusted solutions.
              </HeroDescription>

              <HeroButtons>
                <HeroButton primary href="tel:+91 85068 74280">
                  <i className="fas fa-phone"></i>
                  Call Now
                </HeroButton>
                <HeroButton href="mailto:mundralegal@gmail.com">
                  <i className="fas fa-envelope"></i>
                  Email Us
                </HeroButton>
                <HeroButton href="#contact-form">
                  <i className="fas fa-comment-dots"></i>
                  Send Message
                </HeroButton>
              </HeroButtons>
            </HeroContent>
          </Container>
        </ContactHero>

        <ContactDetailed>
          <Container>
            <SectionHeader>
              <SectionTitle>Get in Touch</SectionTitle>
              <SectionDescription>
                Ready to secure your legal rights? Contact our expert legal team for comprehensive consultation and professional services.
              </SectionDescription>
            </SectionHeader>

            <ContactContent>
              <ContactFormContainer id="contact-form">
                <FormHeader>
                  <h3>Send Us a Message</h3>
                  <p>Fill out the form below and we'll get back to you within 24 hours</p>
                </FormHeader>

                <ContactForm id="contactForm">
                  <FormRow>
                    <FormGroup>
                      <label htmlFor="name">Full Name *</label>
                      <FormInput type="text" id="name" name="name" required />
                    </FormGroup>
                    <FormGroup>
                      <label htmlFor="email">Email Address *</label>
                      <FormInput type="email" id="email" name="email" required />
                    </FormGroup>
                  </FormRow>

                  <FormRow>
                    <FormGroup>
                      <label htmlFor="phone">Phone Number *</label>
                      <FormInput type="tel" id="phone" name="phone" required />
                    </FormGroup>
                    <FormGroup>
                      <label htmlFor="urgency">Urgency Level</label>
                      <FormSelect id="urgency" name="urgency">
                        <option value="normal">Normal</option>
                        <option value="urgent">Urgent</option>
                        <option value="emergency">Emergency</option>
                      </FormSelect>
                    </FormGroup>
                  </FormRow>

                  <FormGroup>
                    <label htmlFor="subject">Service Category *</label>
                    <FormSelect id="subject" name="subject" required>
                      <option value="">Select a service category</option>
                      <option value="documentation">Documentation Services</option>
                      <option value="legal">Legal Services & Litigation</option>
                      <option value="ipr">IPR Registration (Trademark, Copyright, Patent)</option>
                      <option value="challan">Challan Services (Traffic, RTO, GST)</option>
                      <option value="company">Company Setup & Registration</option>
                      <option value="taxation">Taxation & Filing Services</option>
                      <option value="certifications">License & Certifications</option>
                      <option value="criminal">Criminal Cases & Bail Matters</option>
                      <option value="civil">Civil & Property Disputes</option>
                      <option value="matrimonial">Matrimonial & Family Law</option>
                      <option value="corporate">Corporate Law & Contracts</option>
                      <option value="consultation">General Legal Consultation</option>
                      <option value="other">Other Legal Services</option>
                    </FormSelect>
                  </FormGroup>

                  <FormGroup>
                    <label htmlFor="case-details">Case/Service Details</label>
                    <FormInput type="text" id="case-details" name="case-details" placeholder="Brief description of your case or service needed" />
                  </FormGroup>

                  <FormGroup>
                    <label htmlFor="message">Detailed Message *</label>
                    <FormTextarea id="message" name="message" rows="5" required placeholder="Please provide detailed information about your legal requirements, case background, or any specific questions you have..."></FormTextarea>
                  </FormGroup>

                  <ConsentRow>
                    <input type="checkbox" id="consent" name="consent" required />
                    <label htmlFor="consent">
                      I agree to the <a href="privacy">Privacy Policy</a> and consent to being contacted regarding my inquiry.
                    </label>
                  </ConsentRow>

                  <SubmitButton type="submit">
                    <i className="fas fa-paper-plane"></i>Send Message
                  </SubmitButton>
                </ContactForm>
              </ContactFormContainer>

              <ContactInfo>
                <InfoCard>
                  <InfoHeader>
                    <i className="fas fa-building"></i>
                    Contact Information
                  </InfoHeader>

                  <InfoItem>
                    <InfoIcon>
                      <i className="fas fa-envelope"></i>
                    </InfoIcon>
                    <InfoContent>
                      <h4>Email</h4>
                      <p>
                        <a href="mailto:mundralegal@gmail.com">mundralegal@gmail.com</a>
                      </p>
                    </InfoContent>
                  </InfoItem>

                  <InfoItem>
                    <InfoIcon>
                      <i className="fas fa-phone"></i>
                    </InfoIcon>
                    <InfoContent>
                      <h4>Phone</h4>
                      <p>
                        <a href="tel:+91 85068 74280">+91 85068 74280</a>
                      </p>
                    </InfoContent>
                  </InfoItem>

                  <div
                    className="info-item"
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        background:
                          "linear-gradient(135deg, #D4AF37, #F4E4A3)",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <i
                        className="fas fa-map-marker-alt"
                        style={{ color: "#1C2951", fontSize: "1.2rem" }}
                      ></i>
                    </div>
                    <div>
                      <h4
                        style={{
                          color: "#1C2951",
                          marginBottom: "0.5rem",
                          fontSize: "1.1rem",
                          fontWeight: 600,
                        }}
                      >
                        Address
                      </h4>
                      <p
                        style={{
                          color: "#64748b",
                          margin: 0,
                          lineHeight: 1.5,
                          fontSize: "1rem",
                        }}
                      >
                        <strong>Mundra Legal Consultants</strong>
                        <br />
                        Best Sky Tower, 1307, Plot No F-5 Netaji Subhash Place,
                        Pitampura, Delhi, 110034
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      marginTop: "2rem",
                      paddingTop: "1.5rem",
                      borderTop: "1px solid #e2e8f0",
                    }}
                  >
                    <h4
                      style={{
                        color: "var(--primary-color)",
                        marginBottom: "1rem",
                        fontSize: "1.1rem",
                        fontWeight: 600,
                      }}
                    >
                      Social Media
                    </h4>
                    <div style={{ display: "flex", gap: "1rem" }}>
                      <a
                        href="https://facebook.com/profile.php?id=61580492310059"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          width: "50px",
                          height: "50px",
                          background: "#1877f2",
                          borderRadius: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          textDecoration: "none",
                          transition: "transform 0.3s ease",
                        }}
                      >
                        <i
                          className="fab fa-facebook-f"
                          style={{ fontSize: "1.3rem" }}
                        ></i>
                      </a>
                      <a
                        href="https://instagram.com/mundralegalconsultants"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          width: "50px",
                          height: "50px",
                          background:
                            "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                          borderRadius: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          textDecoration: "none",
                          transition: "transform 0.3s ease",
                        }}
                      >
                        <i
                          className="fab fa-instagram"
                          style={{ fontSize: "1.3rem" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                </InfoCard>
              </ContactInfo>

                <div
                  style={{
                    background:
                      "linear-gradient(135deg, #1C2951 0%, #2B3F6B 100%)",
                    padding: "2.5rem",
                    borderRadius: "20px",
                    color: "white",
                  }}
                >
                  <h3
                    style={{
                      color: "white",
                      marginBottom: "1.5rem",
                      fontSize: "1.8rem",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.8rem",
                    }}
                  >
                    <i className="fas fa-award" style={{ color: "#D4AF37" }}></i>
                    Why Choose Mundra Legal Consultants?
                  </h3>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.8rem",
                      }}
                    >
                      <i
                        className="fas fa-check-circle"
                        style={{ color: "#D4AF37", fontSize: "1.1rem" }}
                      ></i>
                      <span style={{ fontSize: "1rem", opacity: 0.9 }}>
                        Expert legal professionals with 15+ years experience
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.8rem",
                      }}
                    >
                      <i
                        className="fas fa-check-circle"
                        style={{ color: "#D4AF37", fontSize: "1.1rem" }}
                      ></i>
                      <span style={{ fontSize: "1rem", opacity: 0.9 }}>
                        Comprehensive legal services under one roof
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.8rem",
                      }}
                    >
                      <i
                        className="fas fa-check-circle"
                        style={{ color: "#D4AF37", fontSize: "1.1rem" }}
                      ></i>
                      <span style={{ fontSize: "1rem", opacity: 0.9 }}>
                        24/7 emergency legal support available
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.8rem",
                      }}
                    >
                      <i
                        className="fas fa-check-circle"
                        style={{ color: "#D4AF37", fontSize: "1.1rem" }}
                      ></i>
                      <span style={{ fontSize: "1rem", opacity: 0.9 }}>
                        Transparent pricing with no hidden costs
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.8rem",
                      }}
                    >
                      <i
                        className="fas fa-check-circle"
                        style={{ color: "#D4AF37", fontSize: "1.1rem" }}
                      ></i>
                      <span style={{ fontSize: "1rem", opacity: 0.9 }}>
                        High success rate in legal cases and matters
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.8rem",
                      }}
                    >
                      <i
                        className="fas fa-check-circle"
                        style={{ color: "#D4AF37", fontSize: "1.1rem" }}
                      ></i>
                      <span style={{ fontSize: "1rem", opacity: 0.9 }}>
                        Personalized attention and dedicated support
                      </span>
                    </div>
                  </div>
                </div>
              </ContactContent>
            </Container>
        </ContactDetailed>

        <section className="map-section" style={{ padding: 0, background: "#f8fafc" }}>
          <div style={{ background: "white", padding: "3rem 0" }}>
            <div className="container">
              <div
                style={{ textAlign: "center", marginBottom: "3rem" }}
                data-aos="fade-up"
              >
                <h3
                  style={{
                    color: "#1C2951",
                    marginBottom: "1rem",
                    fontSize: "2.5rem",
                    fontWeight: 700,
                  }}
                >
                  Find Our Office
                </h3>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "1.2rem",
                    maxWidth: "600px",
                    margin: "0 auto",
                  }}
                >
                  Located in the heart of Delhi's legal district, easily
                  accessible by metro, bus, and private transport.
                </p>
              </div>
            </div>
          </div>

          <div
            className="map-container"
            style={{ height: "500px", position: "relative", overflow: "hidden" }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.674994357786!2d77.21666761504785!3d28.63309538239985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3f48c6c4c9%3A0x8e4f0e0a9c0a0a0a!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1640995200000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(20%)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div
              style={{
                position: "absolute",
                top: "2rem",
                left: "2rem",
                background: "white",
                padding: "1.5rem",
                borderRadius: "15px",
                boxShadow: "0 10px 30px rgba(28, 41, 81, 0.2)",
                maxWidth: "300px",
                borderLeft: "4px solid #D4AF37",
              }}
            >
              <h4
                style={{
                  color: "#1C2951",
                  marginBottom: "0.8rem",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                }}
              >
                Mundra Legal Consultants
              </h4>
              <p
                style={{
                  color: "#64748b",
                  margin: 0,
                  fontSize: "0.95rem",
                  lineHeight: 1.4,
                }}
              >
                <i
                  className="fas fa-map-marker-alt"
                  style={{ color: "#D4AF37", marginRight: "0.5rem" }}
                ></i>
                Best Sky Tower, 1307, Plot No F-5 Netaji Subhash Place,
                Pitampura, Delhi, 110034
              </p>
              <div
                style={{
                  marginTop: "1rem",
                  paddingTop: "1rem",
                  borderTop: "1px solid #e2e8f0",
                }}
              >
                <p
                  style={{
                    color: "#64748b",
                    margin: 0,
                    fontSize: "0.9rem",
                  }}
                >
                  <i
                    className="fas fa-subway"
                    style={{ color: "#1C2951", marginRight: "0.5rem" }}
                  ></i>
                  Nearest Metro: Pitampura (5 min walk)
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="faq-section"
          style={{ padding: "100px 0", background: "white" }}
        >
          <div className="container">
            <div
              style={{ textAlign: "center", marginBottom: "4rem" }}
              data-aos="fade-up"
            >
              <h3
                style={{
                  color: "#1C2951",
                  marginBottom: "1rem",
                  fontSize: "2.5rem",
                  fontWeight: 700,
                }}
              >
                Frequently Asked Questions
              </h3>
              <p
                style={{
                  color: "#64748b",
                  fontSize: "1.2rem",
                  maxWidth: "700px",
                  margin: "0 auto",
                }}
              >
                Quick answers to common questions about our legal services and
                consultation process.
              </p>
            </div>

            <div
              style={{ maxWidth: "800px", margin: "0 auto" }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div
                className="faq-item"
                style={{
                  background: "#f8fafc",
                  marginBottom: "1rem",
                  borderRadius: "15px",
                  overflow: "hidden",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div
                  className="faq-question"
                  onClick={(e) => toggleFAQ(e.currentTarget)}
                  style={{
                    padding: "1.5rem 2rem",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "white",
                    borderBottom: "1px solid #e2e8f0",
                  }}
                >
                  <h4
                    style={{
                      color: "#1C2951",
                      margin: 0,
                      fontSize: "1.1rem",
                      fontWeight: 600,
                    }}
                  >
                    How quickly can I get a consultation?
                  </h4>
                  <i
                    className="fas fa-chevron-down"
                    style={{ color: "#D4AF37", transition: "transform 0.3s ease" }}
                  ></i>
                </div>
                <div
                  className="faq-answer"
                  style={{
                    padding: "0 2rem",
                    maxHeight: 0,
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                  }}
                >
                  <p
                    style={{
                      color: "#64748b",
                      padding: "1.5rem 0",
                      margin: 0,
                      lineHeight: 1.6,
                    }}
                  >
                    We offer same-day consultation scheduling for urgent matters.
                    For regular consultations, we typically schedule within 24-48
                    hours. Emergency legal support is available 24/7 for
                    critical situations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
