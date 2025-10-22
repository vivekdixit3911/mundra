import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterWrapper = styled.footer`
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.05;
    background: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='25' cy='25' r='2' fill='%23ffffff'/><circle cx='75' cy='75' r='2' fill='%23ffffff'/><circle cx='75' cy='25' r='1' fill='%23ffffff'/><circle cx='25' cy='75' r='1' fill='%23ffffff'/></svg>")
      repeat;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem 2rem 1.5rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 2rem 1rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem 1rem;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  h3 {
    font-family: "Playfair Display", serif;
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #e6c57f;

    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #e6c57f;

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  p,
  a,
  li {
    color: #cbd5e1;
    line-height: 1.6;
    font-size: 0.9rem;

    @media (max-width: 480px) {
      font-size: 0.85rem;
    }
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;

      a {
        color: #cbd5e1;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: #e6c57f;
          text-decoration: none;
        }
      }
    }
  }

  .company-info {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      justify-content: center;
    }

    img {
      height: 70px;
      width: auto;
      margin-right: 0.8rem;
      filter: brightness(0) invert(1);
    }
  }

  .company-description {
    font-size: 0.9rem;
    line-height: 1.5;
    opacity: 0.8;
    margin-bottom: 1rem;
    color: #cbd5e1;
  }

  .social-links {
    display: flex;
    gap: 0.8rem;

    @media (max-width: 768px) {
      justify-content: center;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 35px;
      height: 35px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      color: #cbd5e1;
      text-decoration: none;
      transition: all 0.3s ease;

      &:hover {
        background: #e6c57f;
        color: #1c2951;
        transform: translateY(-2px);
      }

      i {
        font-size: 0.9rem;
      }
    }
  }

  .contact-item {
    display: flex;
    align-items: center;
    margin-bottom: 0.6rem;

    @media (max-width: 768px) {
      justify-content: center;
    }

    i {
      color: #e6c57f;
      margin-right: 0.8rem;
      font-size: 0.9rem;
      width: 15px;
    }

    a {
      color: #cbd5e1;
      text-decoration: none;
      font-size: 0.85rem;
      transition: color 0.3s ease;

      &:hover {
        color: #e6c57f;
      }
    }
  }

  .working-hours {
    margin-top: 1rem;
    padding: 0.8rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    border-left: 3px solid #e6c57f;

    .hours-title {
      display: flex;
      align-items: center;
      margin-bottom: 0.3rem;

      @media (max-width: 768px) {
        justify-content: center;
      }

      i {
        color: #e6c57f;
        margin-right: 0.5rem;
        font-size: 0.8rem;
      }

      span {
        font-size: 0.85rem;
        font-weight: 600;
        color: white;
      }
    }

    p {
      margin: 0;
      color: #cbd5e1;
      line-height: 1.3;
      font-size: 0.8rem;
    }
  }
`;

const NewsletterSection = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h4 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.3rem;
    color: #e6c57f;
    text-align: center;
  }

  p {
    color: #cbd5e1;
    margin: 0 0 1rem 0;
    font-size: 0.9rem;
    text-align: center;
  }

  .newsletter-form {
    display: flex;
    max-width: 400px;
    margin: 0 auto;
    gap: 0.8rem;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 0.5rem;
    }

    input {
      flex: 1;
      padding: 0.6rem 1rem;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.1);
      color: white;
      font-size: 0.9rem;
      outline: none;
      transition: border-color 0.3s ease;

      &:focus {
        border-color: #e6c57f;
      }

      &::placeholder {
        color: rgba(255, 255, 255, 0.6);
      }
    }

    button {
      padding: 0.6rem 1.5rem;
      background: linear-gradient(135deg, #e6c57f 0%, #d4af37 100%);
      color: #1c2951;
      border: none;
      border-radius: 20px;
      font-weight: 600;
      font-size: 0.9rem;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-1px);
      }
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }

  p {
    margin: 0;
    color: #94a3b8;
    font-size: 0.85rem;
  }

  .footer-links {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      justify-content: center;
    }

    a {
      color: #94a3b8;
      text-decoration: none;
      font-size: 0.85rem;
      transition: color 0.3s ease;

      &:hover {
        color: #e6c57f;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <div className="company-info">
              <img src="/assets/logo.png" alt="Mundra Legal" />
            </div>
            <p className="company-description">
              Premier legal Consultants providing comprehensive solutions with
              integrity and excellence.
            </p>

            <div className="social-links">
              <a href="https://facebook.com/profile.php?id=61580492310059">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://linkedin.com/company/mundra-legal">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://twitter.com/mundralegal">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com/mundralegalconsultants">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </FooterSection>

          <FooterSection>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/testimonials">Testimonials</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h4>Top Services</h4>
            <ul>
              <li>
                <a href="/services/court-marriage">Court Marriage</a>
              </li>
              <li>
                <a href="/services/private-limited">Company Setup</a>
              </li>
              <li>
                <a href="/services/trademark">Trademark</a>
              </li>
              <li>
                <a href="/services/gst-returns">GST Returns</a>
              </li>
              <li>
                <a href="/services/property-registry">Property Registry</a>
              </li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h4>Contact Info</h4>

            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <p>
                  Best Sky Tower, 1307, plot no F-5, Netaji Subhash Place,
                  Pitampura, Delhi, 110034
                </p>
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <a href="tel:+918506874280">
                +91 85068 74280
                <br />
                +91 93557 00507
              </a>
            </div>

            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:mundralegal@gmail.com">mundralegal@gmail.com</a>
            </div>

            <div className="working-hours">
              <div className="hours-title">
                <i className="fas fa-clock"></i>
                <span>Working Hours</span>
              </div>
              <p>
                Mon-Fri: 9AM-7PM
                <br />
                Sat: 10AM-5PM
              </p>
            </div>
          </FooterSection>
        </FooterGrid>

        <NewsletterSection>
          <h4>Legal Updates & Insights</h4>
          <p>Subscribe for expert legal advice and updates</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </div>
        </NewsletterSection>

        <FooterBottom>
          <p>© 2025 Mundra Legal Consultants. All rights reserved.</p>
          <div className="footer-links">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/sitemap">Sitemap</a>
          </div>
        </FooterBottom>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
