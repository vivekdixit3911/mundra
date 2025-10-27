import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LegalDisclaimer from "./components/LegalDisclaimer";
import AboutEnhanced from "./components/AboutEnhanced";
import ISOCertificates from "./components/ISOCertificates";
import Footer from "./components/Footer";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Events from "./pages/Events";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Sitemap from "./pages/Sitemap";
import LeaseDeed from "./pages/services/LeaseDeed";
import StampPaperNotary from "./pages/services/StampPaperNotary";
import PropertyRegistry from "./pages/services/PropertyRegistry";
import ContractDrafting from "./pages/services/ContractDrafting";
import RelationshipCertificate from "./pages/services/RelationshipCertificate";
import CourtMarriage from "./pages/services/CourtMarriage";
import LegalNotices from "./pages/services/LegalNotices";
import FranchiseAgreement from "./pages/services/FranchiseAgreement";
import CertifiedCopy from "./pages/services/CertifiedCopy";
import PrivateLimitedCompany from "./pages/services/PrivateLimitedCompany";
import PublicLimitedCompany from "./pages/services/PublicLimitedCompany";
import OpcAndProprietorship from "./pages/services/OpcAndProprietorship";
import NbfcRegistration from "./pages/services/NbfcRegistration";
import SocietyAndTrust from "./pages/services/SocietyAndTrust";
import GstRegistrationAndReturns from "./pages/services/GstRegistrationAndReturns";
import ItrFiling from "./pages/services/ItrFiling";
import AnnualFilingAndRoc from "./pages/services/AnnualFilingAndRoc";
import BookKeepingAndAudit from "./pages/services/BookKeepingAndAudit";
import TrademarkRegistration from "./pages/services/TrademarkRegistration";
import CopyrightRegistration from "./pages/services/CopyrightRegistration";
import PatentFiling from "./pages/services/PatentFiling";
import FssaiLicense from "./pages/services/FssaiLicense";
import TradeLicense from "./pages/services/TradeLicense";
import ImportExportCode from "./pages/services/ImportExportCode";
import IsoCertification from "./pages/services/IsoCertification";
import LegalMetrology from "./pages/services/LegalMetrology";
import EprCertificate from "./pages/services/EprCertificate";
import BisHallmark from "./pages/services/BisHallmark";
import PsaraLicense from "./pages/services/PsaraLicense";
import WpcVno from "./pages/services/WpcVno";
import BpoLicense from "./pages/services/BpoLicense";
import ApedaRegistration from "./pages/services/ApedaRegistration";
import BailMatters from "./pages/services/BailMatters";
import CyberFraud from "./pages/services/CyberFraud";
import CivilAndCriminal from "./pages/services/CivilAndCriminal";
import CompanyFormation from "./pages/services/CompanyFormation";
import ConsumerComplaint from "./pages/services/ConsumerComplaint";
import CriminalCases from "./pages/services/CriminalCases";
import DocumentAttestation from "./pages/services/DocumentAttestation";
import LitigationServices from "./pages/services/LitigationServices";
import Notarization from "./pages/services/Notarization";
import LoanProjectReports from "./pages/services/LoanProjectReports";
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import ChattyAssistant from './components/PiriyaAssistant';
import ShiftingRegisteredOffice from "./pages/services/ShiftingRegisteredOffice";

// Main App Container
const AppContainer = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
`;

// Services Section
const ServicesSection = styled.section`
  padding: 5rem 0;
  background: #f8fafc;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const ServicesShowcase = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    gap: 1.5rem;
    padding: 1rem 1rem 2rem 1rem;
    margin: 0 -1rem;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    &::after {
      content: "← Swipe to explore more services →";
      display: block;
      text-align: center;
      color: #64748b;
      font-size: 0.85rem;
      margin-top: 1rem;
      font-weight: 600;
      animation: pulse 2s ease-in-out infinite;
      position: absolute;
      width: 100%;
      left: 0;
    }
  }

  @media (max-width: 480px) {
    gap: 1rem;
    padding: 1rem 0.5rem 2rem 0.5rem;
  }
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(28, 41, 81, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(212, 175, 55, 0.2);
  }

  &.featured {
    border: 2px solid #d4af37;

    &::before {
      content: "Most Popular";
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: #d4af37;
      color: #1c2951;
      padding: 0.3rem 0.8rem;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 700;
      z-index: 2;
    }
  }

  @media (max-width: 768px) {
    flex: 0 0 85%;
    max-width: 350px;
    scroll-snap-align: center;
    margin: 0;
  }

  @media (max-width: 480px) {
    flex: 0 0 90%;
    max-width: 320px;
  }
`;

const ServiceImage = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(28, 41, 81, 0.7) 0%,
      rgba(28, 41, 81, 0.3) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${ServiceCard}:hover & {
    img {
      transform: scale(1.05);
    }

    &::after {
      opacity: 1;
    }
  }
`;

const ServiceContent = styled.div`
  padding: 1.5rem;

  h3 {
    font-size: 1.3rem;
    color: #1c2951;
    font-family: "Playfair Display", serif;
    font-weight: 700;
    margin-bottom: 0.8rem;
    line-height: 1.3;
  }

  p {
    color: #64748b;
    line-height: 1.6;
    margin-bottom: 1rem;
    font-size: 0.95rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 1.5rem;

    li {
      color: #1c2951;
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      i {
        color: #d4af37;
        font-size: 0.8rem;
      }
    }
  }

  .service-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: linear-gradient(135deg, #e6c57f 0%, #d4af37 100%);
    color: #1c2951;
    padding: 0.7rem 1.5rem;
    border-radius: 25px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 0.9rem;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(230, 197, 127, 0.4);
      text-decoration: none;
      color: #1c2951;
    }

    i {
      font-size: 0.8rem;
    }
  }
`;

const ViewAllServices = styled.div`
  text-align: center;
  margin-top: 3rem;

  .view-all-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    background: linear-gradient(135deg, #d4af37 0%, #f4e9c1 100%);
    color: #1c2951;
    padding: 1rem 2rem;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1.1rem;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
      background: linear-gradient(135deg, #f4e9c1 0%, #d4af37 100%);
      text-decoration: none;
      color: #1c2951;
    }
  }
`;

// Practice Areas Section
const PracticeAreasSection = styled.section`
  padding: 5rem 0;
  background: #fff;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const PracticeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
    padding: 0.8rem;
  }
`;

const PracticeItem = styled.a`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  display: block;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);
    text-decoration: none;
    color: inherit;
    border-color: rgba(212, 175, 55, 0.3);

    .practice-icon {
      color: #d4af37;
      transform: scale(1.1);
    }

    h4 {
      color: #d4af37;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }

  .practice-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #e6c57f 0%, #d4af37 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    transition: all 0.3s ease;

    @media (max-width: 480px) {
      width: 50px;
      height: 50px;
    }

    i {
      font-size: 1.5rem;
      color: #1c2951;

      @media (max-width: 480px) {
        font-size: 1.3rem;
      }
    }
  }

  h4 {
    font-size: 1.2rem;
    color: #1c2951;
    font-weight: 600;
    margin-bottom: 0.8rem;
    transition: color 0.3s ease;

    @media (max-width: 480px) {
      font-size: 0.95rem;
    }
  }

  p {
    color: #64748b;
    line-height: 1.6;
    font-size: 0.95rem;

    @media (max-width: 480px) {
      font-size: 0.85rem;
    }
  }
`;

// Testimonials Section
const TestimonialsSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #1c2951 0%, #2b3f6b 100%);
  position: relative;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const TestimonialsSlider = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    gap: 1.5rem;
    padding: 1rem 1rem 2rem 1rem;
    margin: 0 -1rem;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    &::after {
      content: "← Swipe to read more reviews →";
      display: block;
      text-align: center;
      color: #64748b;
      font-size: 0.85rem;
      margin-top: 1rem;
      font-weight: 600;
      animation: pulse 2s ease-in-out infinite;
      position: absolute;
      width: 100%;
      left: 0;
    }
  }

  @media (max-width: 480px) {
    gap: 1rem;
    padding: 1rem 0.5rem 2rem 0.5rem;
  }
`;

const TestimonialCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (max-width: 768px) {
    flex: 0 0 85%;
    max-width: 350px;
    scroll-snap-align: center;
    margin: 0;
  }

  @media (max-width: 480px) {
    flex: 0 0 90%;
    max-width: 320px;
  }

  .quote-icon {
    color: #d4af37;
    font-size: 2rem;
    margin-bottom: 1rem;

    i {
      opacity: 0.6;
    }
  }

  .testimonial-text {
    color: #1c2951;
    font-style: italic;
    line-height: 1.7;
    margin-bottom: 1.5rem;
    flex-grow: 1;
  }

  .client-info {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: auto;

    .client-avatar {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #e6c57f 0%, #d4af37 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;

      i {
        color: #1c2951;
        font-size: 1.2rem;
      }
    }

    .client-details {
      h5 {
        color: #1c2951;
        font-weight: 600;
        margin-bottom: 0.2rem;
      }

      span {
        color: #64748b;
        font-size: 0.9rem;
      }
    }
  }
`;

// Contact Section
const ContactSection = styled.section`
  padding: 5rem 0;
  background: #f8fafc;

  @media (max-width: 768px) {
    padding: 3rem 0;
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

const ContactInfo = styled.div`
  .contact-details {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;
  }

  .contact-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;

    .contact-icon {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #e6c57f 0%, #d4af37 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;

      i {
        color: #1c2951;
        font-size: 1.2rem;
      }
    }

    .contact-text {
      h4 {
        color: #1c2951;
        font-weight: 600;
        margin-bottom: 0.5rem;
      }

      p {
        color: #64748b;
        line-height: 1.6;
        margin: 0;
      }
    }
  }
`;

const ContactForm = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

  h3 {
    color: #1c2951;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-align: center;
  }

  p {
    color: #64748b;
    text-align: center;
    margin-bottom: 2rem;
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .form-group {
    display: flex;
    flex-direction: column;

    label {
      color: #1c2951;
      font-weight: 600;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;

      .required {
        color: #ef4444;
      }
    }

    .input-wrapper {
      position: relative;

      .input-icon {
        position: absolute;
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
        color: #94a3b8;
        font-size: 1rem;
      }

      input,
      select,
      textarea {
        width: 100%;
        padding: 0.875rem 1rem 0.875rem 2.75rem;
        border: 2px solid #e2e8f0;
        border-radius: 10px;
        font-size: 0.95rem;
        transition: all 0.3s ease;
        background: #f8fafc;
        font-family: inherit;

        &:focus {
          border-color: #e6c57f;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(230, 197, 127, 0.1);
          outline: none;
        }

        &::placeholder {
          color: #94a3b8;
        }
      }

      select {
        appearance: none;
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right 1rem center;
        background-size: 1.2rem;
        cursor: pointer;
      }

      textarea {
        resize: vertical;
        min-height: 120px;
        line-height: 1.6;
      }
    }
  }

  .submit-btn {
    width: 100%;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #e6c57f 0%, #d4af37 100%);
    color: #1c2951;
    border: none;
    border-radius: 10px;
    font-size: 1.05rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(230, 197, 127, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 25px rgba(230, 197, 127, 0.4);
    }

    i {
      font-size: 1rem;
    }
  }

  .form-note {
    text-align: center;
    margin-top: 1.5rem;
    font-size: 0.85rem;
    color: #64748b;

    i {
      color: #e6c57f;
      margin-right: 0.3rem;
    }
  }
`;

function App() {

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.target);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const legalMatter = formData.get("legalMatter");
    const message = formData.get("message");

    // Create WhatsApp message
    const whatsappMessage =
      `*New Consultation Request from Website*\n\n` +
      `*Name:* ${firstName} ${lastName}\n` +
      `*Email:* ${email}\n` +
      `*Phone:* ${phone}\n` +
      `*Legal Matter:* ${legalMatter}\n` +
      `*Message:* ${message}\n\n` +
      `*Submitted from:* Mundra Legal Consultants Website`;

    // WhatsApp number
    const whatsappNumber = "918506874280";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Show success message and redirect
    const submitBtn = e.target.querySelector(".submit-btn");
    const originalContent = submitBtn.innerHTML;

    submitBtn.innerHTML =
      '<i class="fas fa-check"></i> Redirecting to WhatsApp...';
    submitBtn.style.background = "#25D366";

    setTimeout(() => {
      window.open(whatsappURL, "_blank");

      // Reset form and button
      e.target.reset();
      submitBtn.innerHTML = originalContent;
      submitBtn.style.background = "";

      alert(
        "Your consultation request has been prepared! Please send the message through WhatsApp to complete your booking.",
      );
    }, 1000);
  };

  const HomePage = () => (
    <AppContainer>
      <Header />
      <Hero />
  <LegalDisclaimer />
      {/* <TrustedCompanies /> */}

      {/* Enhanced About Section with Lottie animations */}
      <AboutEnhanced />

      {/* Services Section */}
      <ServicesSection className="services section" id="services">
        <ServicesContainer>
          <div className="section-header center">
            <span className="section-tag">Our Services</span>
            <h2 className="section-title">
              Comprehensive{" "}
              <span className="text-highlight">Legal Solutions</span>
            </h2>
            <p className="section-description">
              We offer a full spectrum of legal services designed to meet the
              diverse needs of our clients across various industries and legal
              matters.
            </p>
          </div>

          <ServicesShowcase>
            <ServiceCard
              onClick={() =>
                (window.location.href = "/services/company-formation")
              }
            >
              <ServiceImage>
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Corporate Law"
                />
              </ServiceImage>
              <ServiceContent>
                <h3>Corporate Law</h3>
                <p>
                  Complete corporate legal services including Business Setup,
                  compliance, mergers, acquisitions, and corporate
                  restructuring.
                </p>
                <ul>
                  <li>
                    <i className="fas fa-check"></i> Company Registration
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Legal Compliance
                  </li>
                  <li>
                    <i className="fas fa-check"></i> M&A Advisory
                  </li>
                </ul>
                <a href="/services/company-formation" className="service-btn">
                  Learn More <i className="fas fa-arrow-right"></i>
                </a>
              </ServiceContent>
            </ServiceCard>

            <ServiceCard
              className="featured"
              onClick={() =>
                (window.location.href = "/services/civil-criminal")
              }
            >
              <ServiceImage>
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Civil Litigation"
                />
              </ServiceImage>
              <ServiceContent>
                <h3>Civil Litigation</h3>
                <p>
                  Expert representation in civil disputes, property matters,
                  contract disputes, and commercial litigation with proven
                  success.
                </p>
                <ul>
                  <li>
                    <i className="fas fa-check"></i> Court Representation
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Dispute Resolution
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Legal Documentation
                  </li>
                </ul>
                <a href="/services/civil-criminal" className="service-btn">
                  Learn More <i className="fas fa-arrow-right"></i>
                </a>
              </ServiceContent>
            </ServiceCard>

            <ServiceCard
              onClick={() =>
                (window.location.href = "/services/criminal-cases")
              }
            >
              <ServiceImage>
                <img
                  src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Criminal Defense"
                />
              </ServiceImage>
              <ServiceContent>
                <h3>Criminal Defense</h3>
                <p>
                  Comprehensive criminal defense services with experienced
                  advocates dedicated to protecting your rights and freedom.
                </p>
                <ul>
                  <li>
                    <i className="fas fa-check"></i> Bail Applications
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Criminal Trials
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Appeals
                  </li>
                </ul>
                <a href="/services/criminal-cases" className="service-btn">
                  Learn More <i className="fas fa-arrow-right"></i>
                </a>
              </ServiceContent>
            </ServiceCard>

            <ServiceCard
              onClick={() =>
                (window.location.href = "/services/property-registry")
              }
            >
              <ServiceImage>
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Property Law"
                />
              </ServiceImage>
              <ServiceContent>
                <h3>Property Law</h3>
                <p>
                  Complete property legal services including documentation,
                  registration, disputes, and real estate transactions.
                </p>
                <ul>
                  <li>
                    <i className="fas fa-check"></i> Property Documentation
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Title Verification
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Registration
                  </li>
                </ul>
                <a href="/services/property-registry" className="service-btn">
                  Learn More <i className="fas fa-arrow-right"></i>
                </a>
              </ServiceContent>
            </ServiceCard>

            <ServiceCard
              onClick={() => (window.location.href = "/services/gst-returns")}
            >
              <ServiceImage>
                <img
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Tax & GST Services"
                />
              </ServiceImage>
              <ServiceContent>
                <h3>Tax & GST Services</h3>
                <p>
                  Expert tax consultation, GST registration, filing, and
                  representation in tax-related matters and disputes.
                </p>
                <ul>
                  <li>
                    <i className="fas fa-check"></i> GST Registration
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Tax Planning
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Tax Disputes
                  </li>
                </ul>
                <a href="/services/gst-returns" className="service-btn">
                  Learn More <i className="fas fa-arrow-right"></i>
                </a>
              </ServiceContent>
            </ServiceCard>

            <ServiceCard
              onClick={() => (window.location.href = "/services/shifting-registered-office")}
            >
              <ServiceImage>
                <img
                  src="https://images.unsplash.com/photo-1560184897-6c5f1c2b6f3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
                  alt="Registered Office Shift"
                />
              </ServiceImage>
              <ServiceContent>
                <h3>Registered Office Shift</h3>
                <p>
                  We handle the entire process of shifting your company's registered office — intra-city, inter-ROC, or inter-state — including ROC filings and RD approvals.
                </p>
                <ul>
                  <li>
                    <i className="fas fa-check"></i> INC-22 & MGT-14 Filing
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Drafting Resolutions
                  </li>
                  <li>
                    <i className="fas fa-check"></i> RD Approvals (if required)
                  </li>
                </ul>
                <a href="/services/shifting-registered-office" className="service-btn">
                  Learn More <i className="fas fa-arrow-right"></i>
                </a>
              </ServiceContent>
            </ServiceCard>

            <ServiceCard
              onClick={() => (window.location.href = "/services/cyber-fraud")}
            >
              <ServiceImage>
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Cyber Crime Services"
                />
              </ServiceImage>
              <ServiceContent>
                <h3>Cyber Crime & Fraud</h3>
                <p>
                  Specialized legal assistance for cyber crimes, online fraud,
                  and digital security matters with expert investigation.
                </p>
                <ul>
                  <li>
                    <i className="fas fa-check"></i> Cyber Crime Complaints
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Online Fraud Cases
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Digital Evidence
                  </li>
                </ul>
                <a href="/services/cyber-fraud" className="service-btn">
                  Learn More <i className="fas fa-arrow-right"></i>
                </a>
              </ServiceContent>
            </ServiceCard>
          </ServicesShowcase>

          <ViewAllServices>
            <a href="/services" className="view-all-btn">
              View All Services <i className="fas fa-arrow-right"></i>
            </a>
          </ViewAllServices>
        </ServicesContainer>
      </ServicesSection>

      {/* Practice Areas */}
      <PracticeAreasSection
        className="practice-areas section"
        id="practice-areas"
      >
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Practice Areas</span>
            <h2 className="section-title">
              Specialized{" "}
              <span className="text-highlight">Legal Expertise</span>
            </h2>
          </div>

          <PracticeGrid>
            <PracticeItem href="/services/contract-drafting">
              <div className="practice-icon">
                <i className="fas fa-file-contract"></i>
              </div>
              <h4>Contract Law</h4>
              <p>
                Drafting, review, and dispute resolution for all types of
                contracts.
              </p>
            </PracticeItem>

            <PracticeItem href="/services/trademark">
              <div className="practice-icon">
                <i className="fas fa-trademark"></i>
              </div>
              <h4>Intellectual Property</h4>
              <p>
                Protection and enforcement of trademarks, copyrights, and
                patents.
              </p>
            </PracticeItem>

            <PracticeItem href="/services/business-contracts">
              <div className="practice-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <h4>Employment Law</h4>
              <p>
                Workplace disputes, employment contracts, and labor law matters.
              </p>
            </PracticeItem>

            <PracticeItem href="/services/import-export-code">
              <div className="practice-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h4>International Law</h4>
              <p>Cross-border transactions and international legal matters.</p>
            </PracticeItem>

            <PracticeItem href="/services/epr-certificate">
              <div className="practice-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h4>Environmental Law</h4>
              <p>Environmental compliance and regulatory matters.</p>
            </PracticeItem>

            <PracticeItem href="/services/nbfc">
              <div className="practice-icon">
                <i className="fas fa-university"></i>
              </div>
              <h4>Banking & Finance</h4>
              <p>Financial regulations, banking law, and securities matters.</p>
            </PracticeItem>
          </PracticeGrid>
        </div>
      </PracticeAreasSection>

      {/* ISO Certificates Section */}
      <ISOCertificates />

      {/* Testimonials */}
      <TestimonialsSection className="testimonials section" id="testimonials">
        <div className="container">
          <div className="section-header center">
            <span className="section-tag">Client Testimonials</span>
            <h2 className="section-title">
              <span style={{ color: "#fff" }}>What Our</span>{" "}
              <span className="text-highlight">Clients Say</span>
            </h2>
          </div>

          <TestimonialsSlider>
            <TestimonialCard>
              <div className="quote-icon">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="testimonial-text">
                "Legal Mundra provided exceptional service during my property
                dispute case. Their professionalism and expertise ensured a
                favorable outcome. Highly recommended!"
              </p>
              <div className="client-info">
                <div className="client-avatar">
                  <i className="fas fa-user"></i>
                </div>
                <div className="client-details">
                  <h5>Ramesh Patel</h5>
                  <span>Business Owner</span>
                </div>
              </div>
            </TestimonialCard>

            <TestimonialCard>
              <div className="quote-icon">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="testimonial-text">
                "Outstanding legal representation in my corporate matter. The
                team's attention to detail and strategic approach made all the
                difference. Truly professional!"
              </p>
              <div className="client-info">
                <div className="client-avatar">
                  <i className="fas fa-user"></i>
                </div>
                <div className="client-details">
                  <h5>Sneha Agarwal</h5>
                  <span>CEO, Tech Solutions</span>
                </div>
              </div>
            </TestimonialCard>

            <TestimonialCard>
              <div className="quote-icon">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="testimonial-text">
                "Excellent support during a difficult family matter. The team
                handled everything with sensitivity and professionalism.
                Grateful for their dedication."
              </p>
              <div className="client-info">
                <div className="client-avatar">
                  <i className="fas fa-user"></i>
                </div>
                <div className="client-details">
                  <h5>Vikash Singh</h5>
                  <span>Government Employee</span>
                </div>
              </div>
            </TestimonialCard>
          </TestimonialsSlider>
        </div>
      </TestimonialsSection>

      {/* Contact Section */}
      <ContactSection className="contact section" id="contact">
        <div className="container">
          <ContactContent>
            <ContactInfo>
              <div className="section-header">
                <span className="section-tag">Get In Touch</span>
                <h2 className="section-title">
                  Schedule Your{" "}
                  <span className="text-highlight">Free Consultation</span>
                </h2>
                <p className="section-description">
                  Ready to discuss your legal needs? Contact us today for a
                  comprehensive consultation with our experienced legal team.
                </p>
              </div>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Office Address</h4>
                    <p>
                      Best Sky Tower, 1307, Plot No F-5 Netaji Subhash Place,
                      Pitampura, Delhi, 110034
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Phone Number</h4>
                    <p>
                      +91 85068 74280
                      <br />
                      +91 93557 00507
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Email Address</h4>
                    <p>mundralegal@gmail.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Working Hours</h4>
                    <p>Mon - SAT: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </ContactInfo>

            <ContactForm>
              <h3>Request Free Consultation</h3>
              <p>
                Get expert legal advice tailored to your needs. Fill out the
                form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleFormSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="firstName">
                      First Name <span className="required">*</span>
                    </label>
                    <div className="input-wrapper">
                      <span className="input-icon">
                        <i className="fas fa-user"></i>
                      </span>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">
                      Last Name <span className="required">*</span>
                    </label>
                    <div className="input-wrapper">
                      <span className="input-icon">
                        <i className="fas fa-user"></i>
                      </span>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address <span className="required">*</span>
                    </label>
                    <div className="input-wrapper">
                      <span className="input-icon">
                        <i className="fas fa-envelope"></i>
                      </span>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john.doe@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">
                      Phone Number <span className="required">*</span>
                    </label>
                    <div className="input-wrapper">
                      <span className="input-icon">
                        <i className="fas fa-phone"></i>
                      </span>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="legalMatter">
                    Select Legal Matter <span className="required">*</span>
                  </label>
                  <div className="input-wrapper">
                    <span className="input-icon">
                      <i className="fas fa-balance-scale"></i>
                    </span>
                    <select id="legalMatter" name="legalMatter" required>
                      <option value="">Choose your legal matter...</option>
                      <option value="corporate">
                        Corporate Law & Business Setup
                      </option>
                      <option value="civil">Civil Litigation & Disputes</option>
                      <option value="criminal">Criminal Defense</option>
                      <option value="family">Family Law & Matrimonial</option>
                      <option value="property">Property & Real Estate</option>
                      <option value="tax">Tax, GST & Compliance</option>
                      <option value="labor">Labor & Employment Law</option>
                      <option value="ipr">Intellectual Property Rights</option>
                      <option value="other">Other Legal Matter</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    Describe Your Legal Matter{" "}
                    <span className="required">*</span>
                  </label>
                  <div className="input-wrapper">
                    <span className="input-icon">
                      <i className="fas fa-comment-dots"></i>
                    </span>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Please provide details about your legal concern so we can better assist you..."
                      rows="5"
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="submit-btn">
                  <i className="fas fa-calendar-check"></i>
                  <span>Schedule Free Consultation</span>
                  <i className="fas fa-arrow-right"></i>
                </button>

                <div className="form-note">
                  <i className="fas fa-lock"></i>
                  Your information is confidential and secure
                </div>
              </form>
            </ContactForm>
          </ContactContent>
        </div>
      </ContactSection>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      {/* <BackToTop
        className={showBackToTop ? "visible" : ""}
        onClick={scrollToTop}
      >*/}
      <i className="fas fa-chevron-up"></i>
      {/* </BackToTop>*/}
    </AppContainer>
  );

  return (
    <Router>
  <GlobalStyles />
  {/* Render Chatty assistant globally above the WhatsApp CTA */}
  <ChattyAssistant />
  <WhatsAppFloatingButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
  <Route path="/terms" element={<Terms />} />
  <Route path="/privacy" element={<Privacy />} />
    <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/events" element={<Events />} />
        <Route path="/services" element={<HomePage />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* Service routes + aliases for navigation compatibility */}
        <Route path="/services/lease-deed" element={<LeaseDeed />} />
        <Route
          path="/services/stamp-paper-notary"
          element={<StampPaperNotary />}
        />
        <Route
          path="/services/property-registry"
          element={<PropertyRegistry />}
        />
        <Route
          path="/services/contract-drafting"
          element={<ContractDrafting />}
        />
        <Route
          path="/services/relationship-certificate"
          element={<RelationshipCertificate />}
        />
        <Route path="/services/court-marriage" element={<CourtMarriage />} />
        <Route path="/services/legal-notices" element={<LegalNotices />} />
        <Route
          path="/services/franchise-agreement"
          element={<FranchiseAgreement />}
        />
        <Route path="/services/certified-copy" element={<CertifiedCopy />} />
        {/* private-limited alias */}
        <Route path="/services/private-limited" element={<PrivateLimitedCompany />} />
        <Route path="/services/private-limited-company" element={<PrivateLimitedCompany />} />
        {/* public-limited alias */}
        <Route path="/services/public-limited" element={<PublicLimitedCompany />} />
        <Route path="/services/public-limited-company" element={<PublicLimitedCompany />} />
        <Route
          path="/services/opc-proprietorship"
          element={<OpcAndProprietorship />}
        />
        {/* nbfc alias */}
        <Route path="/services/nbfc" element={<NbfcRegistration />} />
        <Route path="/services/nbfc-registration" element={<NbfcRegistration />} />
        <Route path="/services/society-trust" element={<SocietyAndTrust />} />
        {/* gst-returns aliases */}
        <Route path="/services/gst-returns" element={<GstRegistrationAndReturns />} />
        <Route path="/services/gst-registration-returns" element={<GstRegistrationAndReturns />} />
        <Route path="/services/itr-filing" element={<ItrFiling />} />
        {/* annual-filing aliases */}
        <Route path="/services/annual-filing" element={<AnnualFilingAndRoc />} />
        <Route path="/services/annual-filing-roc" element={<AnnualFilingAndRoc />} />
        <Route
          path="/services/bookkeeping-audit"
          element={<BookKeepingAndAudit />}
        />
        {/* trademark aliases */}
        <Route path="/services/trademark" element={<TrademarkRegistration />} />
        <Route path="/services/trademark-registration" element={<TrademarkRegistration />} />
        <Route
          path="/services/copyright-registration"
          element={<CopyrightRegistration />}
        />
        <Route path="/services/patent-filing" element={<PatentFiling />} />
        {/* fssai alias */}
        <Route path="/services/fssai" element={<FssaiLicense />} />
        <Route path="/services/fssai-license" element={<FssaiLicense />} />
        <Route path="/services/trade-license" element={<TradeLicense />} />
        <Route
          path="/services/import-export-code"
          element={<ImportExportCode />}
        />
        {/* iso alias */}
        <Route path="/services/iso-certificate" element={<IsoCertification />} />
        <Route path="/services/iso-certification" element={<IsoCertification />} />
        <Route path="/services/legal-metrology" element={<LegalMetrology />} />
        <Route path="/services/epr-certificate" element={<EprCertificate />} />
        <Route path="/services/bis-hallmark" element={<BisHallmark />} />
        {/* psara alias */}
        <Route path="/services/psara" element={<PsaraLicense />} />
        <Route path="/services/psara-license" element={<PsaraLicense />} />
        <Route path="/services/wpc-vno" element={<WpcVno />} />
        <Route path="/services/bpo-license" element={<BpoLicense />} />
        <Route
          path="/services/apeda-registration"
          element={<ApedaRegistration />}
        />
        <Route path="/services/bail-matters" element={<BailMatters />} />
        {/* cyber-fraud alias */}
        <Route path="/services/cyber-fraud" element={<CyberFraud />} />
        <Route path="/services/call-centre-crime" element={<CyberFraud />} />
        <Route path="/services/civil-criminal" element={<CivilAndCriminal />} />
        <Route
          path="/services/company-formation"
          element={<CompanyFormation />}
        />
        <Route
          path="/services/consumer-complaint"
          element={<ConsumerComplaint />}
        />
        <Route path="/services/criminal-cases" element={<CriminalCases />} />
        <Route
          path="/services/document-attestation"
          element={<DocumentAttestation />}
        />
        {/* new route for litigation alias */}
        <Route path="/services/litigation" element={<LitigationServices />} />
        {/* Additional service routes */}
        <Route path="/services/notarization" element={<Notarization />} />
        <Route path="/services/loan-project-reports" element={<LoanProjectReports />} />
        <Route path="/services/shifting-registered-office" element={<ShiftingRegisteredOffice />} />
        <Route path="/services/shift-registered-office" element={<ShiftingRegisteredOffice />} />
        <Route path="/testimonials" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
