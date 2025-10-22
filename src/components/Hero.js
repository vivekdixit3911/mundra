import React, { useState, useEffect } from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #003459 0%, #005792 100%);
  overflow: hidden;
`;

const HeroBgMedia = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  overflow: hidden;

  video {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    min-width: 100%;
    min-height: 100%;
    max-width: 100vw;
    max-height: 100vh;
    filter: brightness(0.65);

    @media (max-width: 768px) {
      object-position: center;
    }
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
      rgba(0, 52, 89, 0.75) 0%,
      rgba(0, 31, 61, 0.65) 100%
    );
  }
`;

const HeroFloatingIcons = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  pointer-events: none;
  overflow: hidden;

  i {
    position: absolute;
    color: rgba(230, 197, 127, 0.15);
    animation: float 6s ease-in-out infinite;

    &:nth-child(1) {
      top: 12%;
      left: 8%;
      font-size: 3.5rem;
      animation-duration: 6s;
    }

    &:nth-child(2) {
      top: 60%;
      left: 85%;
      font-size: 4.2rem;
      color: rgba(230, 197, 127, 0.12);
      animation-duration: 7s;
      animation-delay: 1s;
    }

    &:nth-child(3) {
      top: 28%;
      left: 75%;
      font-size: 3.2rem;
      color: rgba(230, 197, 127, 0.18);
      animation-duration: 5s;
      animation-delay: 0.5s;
    }

    &:nth-child(4) {
      top: 75%;
      left: 15%;
      font-size: 3.8rem;
      color: rgba(230, 197, 127, 0.14);
      animation-duration: 6.5s;
      animation-delay: 2s;
    }

    &:nth-child(5) {
      top: 45%;
      left: 12%;
      font-size: 3.6rem;
      color: rgba(230, 197, 127, 0.16);
      animation-duration: 5.5s;
      animation-delay: 1.5s;
    }

    @media (max-width: 768px) {
      font-size: 2rem !important;
      opacity: 0.6;
    }
  }
`;

const HeroMain = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 950px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  box-sizing: border-box;
  padding: 3rem 1.5rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    gap: 1.5rem;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.75rem;
    gap: 1.3rem;
  }

  @media (max-width: 360px) {
    gap: 1.1rem;
    padding: 1.2rem 0.5rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.8rem, 7vw, 4.5rem);
  font-weight: 700;
  line-height: 1.2;
  color: #fff;
  margin-bottom: 0;
  max-width: 100vw;
  overflow-wrap: break-word;

  .main-title {
    display: block;
    font-family: "Playfair Display", serif;
    font-style: italic;
    font-size: clamp(3rem, 8vw, 5rem);
    color: #fff;
    font-weight: 900;
    margin-bottom: 0.3em;
    letter-spacing: 2px;
    text-shadow:
      0 4px 20px rgba(0, 0, 0, 0.9),
      0 2px 10px rgba(0, 0, 0, 0.8);
    padding: 0.2em 0;

    @media (max-width: 768px) {
      font-size: clamp(2.2rem, 9vw, 3.5rem);
    }

    @media (max-width: 480px) {
      font-size: clamp(1.8rem, 10vw, 2.8rem);
      letter-spacing: 1px;
    }

    @media (max-width: 360px) {
      font-size: 1.6rem;
      letter-spacing: 0.5px;
    }
  }

  .sub-title {
    display: block;
    font-size: clamp(2.5rem, 7vw, 4rem);
    font-weight: 900;
    font-family: "Playfair Display", serif;
    font-style: italic;
    margin-top: 0.3em;
    color: #fff;

    span {
      font-weight: 900;
      letter-spacing: 1px;
      text-shadow:
        0 4px 20px rgba(0, 0, 0, 0.9),
        0 2px 10px rgba(0, 0, 0, 0.8);
    }

    @media (max-width: 768px) {
      font-size: clamp(1.8rem, 7vw, 2.8rem);
    }

    @media (max-width: 480px) {
      font-size: clamp(1.5rem, 8vw, 2.3rem);
    }

    @media (max-width: 360px) {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 768px) {
    color: #fff;
  }
`;

const HeroSubtitle = styled.div`
  font-size: clamp(1.15rem, 4vw, 1.45rem);
  color: #fff;
  font-weight: 400;
  margin-bottom: 0.3em;
  max-width: 750px;
  line-height: 1.6;
  font-family: "Playfair Display", serif;
  font-style: italic;
  text-shadow:
    0 3px 15px rgba(0, 0, 0, 0.8),
    0 0 20px rgba(230, 197, 127, 0.4);
  letter-spacing: 0.5px;
  padding: 0 1rem;

  .highlight {
    color: #e6c57f;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: clamp(1rem, 4vw, 1.2rem);
    padding: 0 0.5rem;
    color: #fff;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.5;
    color: #fff;
  }

  @media (max-width: 360px) {
    font-size: 0.95rem;
    color: #fff;
  }
`;

const HeroSearchContainer = styled.div`
  width: 100%;
  max-width: 750px;
  margin: 1rem auto 0;
  position: relative;
  padding: 0 1rem;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 0.5rem;
  }
`;

const HeroSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background: rgba(255, 255, 255, 0.12);
  padding: 0.5rem;
  border-radius: 3rem;
  backdrop-filter: blur(20px);
  border: 2px solid rgba(230, 197, 127, 0.4);
  box-shadow:
    0 12px 48px rgba(0, 0, 0, 0.4),
    0 0 30px rgba(230, 197, 127, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transition: border-color 0.3s ease;

  &:focus-within {
    border-color: #e6c57f;
  }

  @media (max-width: 768px) {
    padding: 0.3rem;
  }

  .search-icon {
    position: absolute;
    left: 2rem;
    top: 50%;
    transform: translateY(-50%);
    color: #e6c57f;
    font-size: 1.6rem;
    pointer-events: none;
    z-index: 5;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));

    @media (max-width: 768px) {
      left: 1.2rem;
      font-size: 1.3rem;
    }
  }

  input {
    width: 100%;
    padding: 1.3rem 1.5rem 1.3rem 4.2rem;
    border-radius: 2.5rem;
    border: none;
    font-size: 1.2rem;
    background: rgba(255, 255, 255, 0.95);
    color: #1c2951;
    box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.1);
    outline: none;
    transition: all 0.3s ease;
    font-weight: 500;
    letter-spacing: 0.3px;

    &:focus {
      background: rgba(255, 255, 255, 1);
      box-shadow:
        inset 0 2px 12px rgba(0, 0, 0, 0.15),
        0 0 20px rgba(230, 197, 127, 0.5);
    }

    &::placeholder {
      color: #94a3b8;
    }

    @media (max-width: 768px) {
      padding: 1rem 1rem 1rem 3.5rem;
      font-size: 1rem;
      color: #1c2951;
    }

    @media (max-width: 480px) {
      padding: 0.9rem 0.9rem 0.9rem 3.2rem;
      font-size: 0.95rem;
      color: #1c2951;
    }

    /* Prevents zoom on iOS */
    @media (hover: none) and (pointer: coarse) {
      font-size: 16px;
    }
  }
`;

const SearchResults = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.8rem 0 0 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.98);
  border-radius: 1.5rem;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.25);
  display: none;
  max-height: 300px;
  overflow-y: auto;
  position: absolute;
  z-index: 10;
  top: 110%;
  left: 0;
  backdrop-filter: blur(20px);
  border: 2px solid rgba(230, 197, 127, 0.3);

  &.show {
    display: block;
  }

  li {
    padding: 0.85rem 1.2rem;
    cursor: pointer;
    border-bottom: 1px solid #e5e7eb;
    background: rgba(255, 255, 255, 0.1);
    color: #1c2951;
    font-size: 1.05rem;
    transition:
      background 0.18s,
      color 0.18s;

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      background: rgba(34, 197, 94, 0.13);
      color: #22c55e;
    }
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-wrap: nowrap;
  justify-content: flex-start;
  margin-top: 1.2rem;
  max-width: 100%;
  padding: 0 1rem;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: #e6c57f rgba(255, 255, 255, 0.1);
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #e6c57f;
    border-radius: 10px;
  }

  @media (min-width: 769px) {
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    gap: 0.7rem;
    padding: 0 0.5rem;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    gap: 0.7rem;
    padding: 0 0.5rem;
    flex-direction: column;
  }
`;

const HeroButton = styled.a`
  background: linear-gradient(135deg, #e6c57f 0%, #d4af37 100%);
  color: #1c2951;
  font-weight: 700;
  padding: 0.8rem 1.5rem;
  border-radius: 2rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 15px rgba(230, 197, 127, 0.4);
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  flex: 0 0 auto;
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(230, 197, 127, 0.6);
    text-decoration: none;
    color: #1c2951;
  }

  @media (max-width: 768px) {
    padding: 0.85rem 1.5rem;
    font-size: 1rem;
    width: 100%;
    flex: 1 1 100%;
    justify-content: center;
    color: #1c2951;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.3rem;
    font-size: 0.95rem;
    color: #1c2951;
  }

  @media (max-width: 360px) {
    padding: 0.75rem 1.1rem;
    font-size: 0.9rem;
    color: #1c2951;
  }

  /* Touch optimization for mobile */
  @media (hover: none) and (pointer: coarse) {
    -webkit-tap-highlight-color: rgba(230, 197, 127, 0.3);
    touch-action: manipulation;
  }
`;

const TrustBadge = styled.div`
  margin-bottom: 0;
  max-width: 100vw;
  overflow-x: hidden;
  animation: fadeInDown 1s ease-out;
  display: flex;
  justify-content: center;

  .trust-content {
    display: inline-flex;
    align-items: center;
    background: rgba(28, 41, 81, 0.85);
    color: #fff;
    font-weight: 600;
    font-size: 1.1rem;
    padding: 0.7rem 1.5rem;
    border-radius: 2.5rem;
    letter-spacing: 0.04em;
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.3),
      0 0 20px rgba(230, 197, 127, 0.3);
    backdrop-filter: blur(12px);
    border: 2px solid rgba(230, 197, 127, 0.3);
    gap: 0.6rem;
    flex-wrap: wrap;
    justify-content: center;

    .google-icon {
      height: 30px;
      margin-right: 8px;
      vertical-align: middle;
      background: #fff;
      border-radius: 50%;
      padding: 3px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }

    .client-avatars {
      display: flex;
      margin-right: 10px;

      img {
        height: 30px;
        width: 30px;
        border-radius: 50%;
        margin-right: -10px;
        border: 3px solid #fff;
        vertical-align: middle;
      }

      img:last-child {
        margin-right: 10px;
      }
    }

    .stars {
      font-size: 1.4rem;
      color: #ffd700;
      vertical-align: middle;
      text-shadow: 0 0 10px #ffd700;
      margin-right: 8px;
    }

    .rating-text {
      font-size: 1.15rem;
      color: #fff;
      font-weight: 700;
      margin-left: 8px;
      vertical-align: middle;
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    }

    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 0.5rem 1rem;
      flex-wrap: wrap;
      justify-content: center;

      .google-icon {
        height: 24px;
      }

      .client-avatars img {
        height: 24px;
        width: 24px;
      }

      .stars {
        font-size: 1.1rem;
      }

      .rating-text {
        font-size: 1rem;
      }
    }

    @media (max-width: 480px) {
      padding: 0.4rem 0.8rem;
      font-size: 0.85rem;

      .google-icon {
        height: 22px;
      }

      .client-avatars img {
        height: 22px;
        width: 22px;
      }

      .stars {
        font-size: 1rem;
      }

      .rating-text {
        font-size: 0.9rem;
      }
    }
  }
`;

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  // Search data - matches your original HTML
  const pageList = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Contact", url: "/contact" },
    { name: "Services", url: "/services" },
    { name: "Testimonials", url: "/testimonials" },
    { name: "Business Setup", url: "/services/company-formation" },
    { name: "Civil & Criminal", url: "/services/civil-criminal" },
    { name: "Criminal Cases", url: "/services/criminal-cases" },
    { name: "Property Registry", url: "/services/property-registry" },
    { name: "GST Returns", url: "/services/gst-returns" },
    { name: "Cyber Fraud", url: "/services/cyber-fraud" },
    { name: "Trademark", url: "/services/trademark" },
    { name: "Notarization", url: "/services/notarization" },
    { name: "Court Marriage", url: "/services/court-marriage" },
    { name: "Company Registration", url: "/services/private-limited" },
    { name: "Legal Notices", url: "/services/legal-notices" },
    { name: "Contract Drafting", url: "/services/contract-drafting" },
  ];

  const handleSearchInput = (e) => {
    const query = e.target.value.trim().toLowerCase();
    setSearchQuery(query);

    if (query.length === 0) {
      setShowResults(false);
      return;
    }

    const matches = pageList.filter((page) =>
      page.name.toLowerCase().includes(query),
    );

    setSearchResults(matches);
    setShowResults(matches.length > 0);
  };

  const handleSearchResultClick = (url) => {
    window.location.href = url;
    setShowResults(false);
  };

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".hero-search-container")) {
        setShowResults(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <HeroSection>
      <HeroBgMedia>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/logo.png"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        >
          <source
            src="/assets/video/3129902-uhd_3840_2160_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </HeroBgMedia>

      <HeroFloatingIcons>
        <i className="fas fa-balance-scale"></i>
        <i className="fas fa-gavel"></i>
        <i className="fas fa-briefcase"></i>
        <i className="fas fa-user-shield"></i>
        <i className="fas fa-file-contract"></i>
      </HeroFloatingIcons>

      <HeroMain>
      

        <HeroTitle>
          <span className="main-title">Your Legal Journey</span>
          <span className="sub-title">
            <span>Simplified </span>
            <span>Secured </span>
            <span>Solved!</span>
          </span>
        </HeroTitle>

        <HeroSubtitle>
          Experience <span className="highlight">clarity</span>,{" "}
          <span className="highlight">confidence</span>, and{" "}
          <span className="highlight">care</span>—every step with Mundra Legal
          Consultants.
        </HeroSubtitle>

        <HeroSearchContainer className="hero-search-container">
          <HeroSearchWrapper>
            <span className="search-icon">
              <i className="fas fa-search"></i>
            </span>
            <input
              type="text"
              placeholder="Try 'Trademark Registration', 'GST', 'Company'..."
              value={searchQuery}
              onChange={handleSearchInput}
            />
          </HeroSearchWrapper>
          <SearchResults className={showResults ? "show" : ""}>
            {searchResults.map((result, index) => (
              <li
                key={index}
                onClick={() => handleSearchResultClick(result.url)}
              >
                {result.name}
              </li>
            ))}
          </SearchResults>
        </HeroSearchContainer>

        <HeroButtons>
          <HeroButton href="/services/trademark">
            <i className="fas fa-trademark"></i> Trademark Registration
          </HeroButton>
          <HeroButton href="/services/gst-returns">
            <i className="fas fa-file-invoice-dollar"></i> GST Registration
          </HeroButton>
          <HeroButton href="/services/company-formation">
            <i className="fas fa-building"></i> Company Registration
          </HeroButton>
          <HeroButton href="/contact">
            <i className="fas fa-user-tie"></i> Lawyer Consultation
          </HeroButton>
        </HeroButtons>
      </HeroMain>
    </HeroSection>
  );
};

export default Hero;
