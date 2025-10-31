import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(212, 175, 55, 0.2);

  &.scrolled {
    background: rgba(255, 255, 255, 0.99);
    box-shadow: 0 4px 40px rgba(0, 0, 0, 0.15);
  }
`;

const HeaderTop = styled.div`
  background: linear-gradient(135deg, #D4AF37 0%, #E6C57F 100%);
  padding: 0.4rem 0;
  font-size: 0.8rem;
  color: #1C2951;
  font-weight: 600;

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding: 0.3rem 0;
  }
`;

const TopContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TopLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  i {
    color: #1C2951;
    font-size: 0.8rem;
  }
`;

const TopRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  a {
    color: #1C2951;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
      color: #2D4A7C;
      transform: translateY(-1px);
    }
  }
`;

const HeaderMain = styled.div`
  padding: 0.8rem 0;
  
  @media (max-width: 768px) {
    padding: 0.5rem 0;
  }
`;

const MainContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  /* Allow content to wrap on very small screens to avoid overflow */
  @media (max-width: 480px) {
    padding: 0 0.5rem;
    gap: 8px;
    align-items: center;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: inherit;
  
  /* Prevent the logo from overflowing on small screens */
  max-width: 60%;
  flex: 0 1 auto;

  img {
    height: 50px;
    width: auto;
    max-width: 160px;
    object-fit: contain;
    display: block;
  }

  .logo-text {
    display: flex;
    flex-direction: column;
    
    /* Allow the text to shrink and truncate on narrow widths */
    min-width: 0;

    .main-text {
      font-size: 1.8rem;
      font-weight: 800;
      background: linear-gradient(135deg, #1C2951 0%, #D4AF37 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      line-height: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .sub-text {
      font-size: 0.8rem;
      color: #64748b;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  }

  @media (max-width: 768px) {
    .logo-text {
      display: flex;
      flex-direction: column;
      .main-text {
        font-size: 1.2rem;
      }

      .sub-text {
        font-size: 0.6rem;
      }
    }
  }

  @media (max-width: 480px) {
    .logo-text {
      .main-text {
        font-size: 1rem;
      }

      /* Hide the sub-text on very small screens to save space */
      .sub-text {
        display: none;
      }
    }
  }

  @media (max-width: 480px) {
    img {
      height: 36px;
      max-width: 120px;
    }
  }

  /* Ultra small screens: show icon-only logo to preserve space */
  @media (max-width: 360px) {
    .logo-text {
      display: none;
    }

    img {
      height: 40px;
      max-width: 90px;
    }
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavItem = styled.div`
  position: relative;

  .nav-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 1.2rem;
    color: #1C2951;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    border-radius: 12px;
    transition: all 0.3s ease;
    position: relative;
    border: 2px solid transparent;

    &:hover {
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
      color: #D4AF37;
      transform: translateY(-2px);
      border-color: rgba(212, 175, 55, 0.3);
      box-shadow: 0 4px 15px rgba(212, 175, 55, 0.1);
    }

    &.active {
      background: linear-gradient(135deg, #D4AF37 0%, #E6C57F 100%);
      color: #1C2951;
      box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
    }

    i {
      font-size: 0.8rem;
      transition: transform 0.3s ease;
    }

    &.dropdown-open i {
      transform: rotate(180deg);
    }
  }
`;

const MegaMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(212, 175, 55, 0.2);
  padding: 2rem;
  margin-top: 1rem;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.$isOpen ? 'translateY(0)' : 'translateY(-15px)'};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  min-width: 900px;

  @media (max-width: 1200px) {
    min-width: 700px;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const MegaMenuContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  align-items: start;
`;

const MegaMenuLeft = styled.div`
  .category-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .category-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border-radius: 12px;
    text-decoration: none;
    color: #1C2951;
    font-weight: 600;
    transition: all 0.3s ease;
    border: 2px solid transparent;

    &:hover {
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
      border-color: #D4AF37;
      transform: translateX(5px);
    }

    &.active {
      background: linear-gradient(135deg, #D4AF37 0%, #E6C57F 100%);
      color: #1C2951;
    }

    .category-icon {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #1C2951 0%, #2D4A7C 100%);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.1rem;
    }

    .category-text {
      flex: 1;
    }

    .category-arrow {
      color: #64748b;
      font-size: 0.9rem;
    }
  }
`;

const MegaMenuRight = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  .content-section {
    .section-title {
      font-size: 1.2rem;
      font-weight: 700;
      color: #1C2951;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      i {
        color: #D4AF37;
      }
    }
    
    .services-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    .service-item {
      padding: 0.8rem 1rem;
      border-radius: 8px;
      text-decoration: none;
      color: #1C2951;
      font-weight: 500;
      transition: all 0.3s ease;
      border: 1px solid #e2e8f0;
      display: block;
      width: 100%;
      text-align: left;

      &:hover {
        background: linear-gradient(135deg, #D4AF37 0%, #E6C57F 100%);
        color: #1C2951;
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(212, 175, 55, 0.2);
      }
    }
  }

  /* Animation section removed to optimize mega menu for desktop performance */
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 1024px) {
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    .desktop-only {
      display: none; // Hide Expert and Consultation buttons on mobile
    }
  }
`;

const ExpertButton = styled.div`
  position: relative;

  .expert-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 1.5rem;
    background: linear-gradient(135deg, #D4AF37 0%, #E6C57F 100%);
    color: #1C2951;
    border: none;
    border-radius: 30px;
    font-weight: 700;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.2);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 35px rgba(212, 175, 55, 0.4);
      background: linear-gradient(135deg, #E6C57F 0%, #D4AF37 100%);
    }

    i {
      font-size: 0.8rem;
      transition: transform 0.3s ease;
    }

    &.dropdown-open i {
      transform: rotate(180deg);
    }
  }
`;

const ExpertDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(212, 175, 55, 0.2);
  padding: 1.5rem;
  margin-top: 0.5rem;
  min-width: 300px;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.$isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all 0.3s ease;
  z-index: 1000;

  .expert-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border-radius: 12px;
    text-decoration: none;
    color: #1C2951;
    transition: all 0.3s ease;
    margin-bottom: 0.5rem;

    &:hover {
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
      transform: translateX(5px);
    }

    .expert-icon {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #1C2951 0%, #2D4A7C 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1rem;
    }

    .expert-info {
      flex: 1;

      .expert-title {
        font-weight: 700;
        font-size: 0.9rem;
        margin-bottom: 0.2rem;
      }

      .expert-number {
        color: #D4AF37;
        font-weight: 600;
        font-size: 0.85rem;
      }
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #1C2951;
  font-size: 1.8rem; // Increased size for better visibility
  cursor: pointer;
  padding: 0.5rem;
  margin-left: auto; // Push to the right

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px; // Fixed width for better touch target
    height: 44px; // Fixed height for better touch target
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
    margin-left: 0;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(28, 41, 81, 0.95);
  backdrop-filter: blur(10px);
  z-index: 2000;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  overflow: hidden;

  @media (max-width: 480px) {
    background: #fff;
  }
`;

const MobileMenuContent = styled.div`
  background: white;
  height: 100vh;
  width: 100%;
  max-width: 100%;
  padding: 1rem;
  overflow-y: auto;
  transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease;

  .mobile-category {
    margin-bottom: 0.8rem;
    background: #f8fafc;
    border-radius: 8px;
    overflow: hidden;
    
    .category-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      cursor: pointer;
      
      i:first-child {
        width: 24px;
        color: #1C2951;
        margin-right: 10px;
      }

      i:last-child {
        color: #64748b;
      }
    }

    .category-services {
      padding: 0;
      background: #fff;
      border: 1px solid #e2e8f0;
      border-top: none;
      border-radius: 0 0 8px 8px;
      
      .service-link {
        display: block;
        padding: 0.8rem 1rem;
        color: #1C2951;
        text-decoration: none;
        border-bottom: 1px solid #f1f5f9;
        font-size: 0.9rem;
        
        &:active {
          background: #f8fafc;
        }
        
        &:last-child {
          border-bottom: none;
        }
      }
    }
  }

  .mobile-actions {
    margin: 1rem 0;
    padding: 1rem;
    background: #f8fafc;
    border-radius: 8px;
    
    .expert-item {
      display: flex;
      align-items: center;
      padding: 1rem;
      margin-bottom: 0.8rem;
      border-radius: 8px;
      background: #fff;
      border: 1px solid #e2e8f0;
      text-decoration: none;
      color: #1C2951;
      
      .expert-icon {
        width: 40px;
        height: 40px;
        margin-right: 1rem;
        background: linear-gradient(135deg, #1C2951 0%, #2D4A7C 100%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
      }
      
      .expert-info {
        flex: 1;
        
        .expert-title {
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 0.2rem;
        }
        
        .expert-number {
          color: #D4AF37;
          font-weight: 500;
          font-size: 0.85rem;
        }
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .mobile-consultation-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin: 1rem 0;
    padding: 1rem;
    width: 100%;
    border-radius: 8px;
    background: linear-gradient(135deg, #1C2951 0%, #2D4A7C 100%);
    color: white;
    font-weight: 600;
    text-decoration: none;
    border: none;
    
    i {
      font-size: 1.1rem;
    }
  }

  .mobile-close {
    position: fixed;
    top: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 50%;
    border: 1px solid #e2e8f0;
    color: #1C2951;
    font-size: 1.2rem;
    cursor: pointer;
    z-index: 2001;
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('company-registration');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleMobileDropdownToggle = (dropdown) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };

  const handleCategoryClick = (categoryKey) => {
    setSelectedCategory(categoryKey);
  };
  const servicesData = {
    'company-registration': {
      title: 'Company Registration',
      icon: 'fas fa-building',
      services: [
        { name: 'Company Formation', url: '/services/company-formation' },
        { name: 'Private Limited Company', alias: 'Private Limited', url: '/services/private-limited-company' },
        { name: 'Public Limited Company', alias: 'Public Limited', url: '/services/public-limited-company' },
  { name: 'OPC & Proprietorship', alias: 'OPC', url: '/services/opc-proprietorship' },
        { name: 'NBFC Registration', alias: 'NBFC', url: '/services/nbfc-registration' },
        { name: 'Society & Trust', url: '/services/society-trust' },
        
      ]
    },

    'secretarial-services': {
      title: 'Secretarial Services',
      icon: 'fas fa-calculator',
      services: [
        { name: 'Annual Filing', alias: 'Annual Filing (ROC)', url: '/services/annual-filing' },
        { name: 'Bookkeeping & Audit', url: '/services/bookkeeping-audit' },
        { name: 'Loan & Project Reports', url: '/services/loan-project-reports' },
        { name: 'Shifting Registered Office', alias: 'Shift Registered Office', url: '/services/shifting-registered-office' },
        { name: 'GST Registration & Returns', alias: 'GST', url: '/services/gst-registration-returns' },
        { name: 'Income Tax Filing', url: '/services/itr-filing' },
        
      ]
    },

    'intellectual-property': {
      title: 'Intellectual Property',
      icon: 'fas fa-trademark',
      services: [
        { name: 'Trademark Registration', alias: 'Trademark', url: '/services/trademark-registration' },
        { name: 'Copyright Registration', url: '/services/copyright-registration' },
        { name: 'Patent Filing', url: '/services/patent-filing' }
      ]
    },

    'licenses-registrations': {
      title: 'Licenses & Registrations',
      icon: 'fas fa-certificate',
      services: [
        { name: 'GST Registration & Returns', alias: 'GST', url: '/services/gst-registration-returns' },
        { name: 'FSSAI License', alias: 'FSSAI', url: '/services/fssai-license' },
        { name: 'Trade License', url: '/services/trade-license' },
        { name: 'Import Export Code (IEC)', url: '/services/import-export-code' },
        { name: 'ISO Certification', alias: 'ISO', url: '/services/iso-certification' },
        { name: 'Legal Metrology (LMPC)', url: '/services/legal-metrology' },
        { name: 'EPR Certificate', url: '/services/epr-certificate' },
        { name: 'BIS Hallmark', url: '/services/bis-hallmark' },
        { name: 'PSARA License', alias: 'PSARA', url: '/services/psara-license' },
        { name: 'WPC VNO', url: '/services/wpc-vno' },
        { name: 'BPO License', url: '/services/bpo-license' },
        { name: 'APEDA Registration', url: '/services/apeda-registration' }
        ,{ name: 'Import Medical Devices (MD-14 & MD-15)', alias: 'MD-14/MD-15', url: '/services/import-medical-devices' }
      ]
    },

    'legal-services': {
      title: 'Legal Services',
      icon: 'fas fa-balance-scale',
      services: [
        { name: 'Bail Matters', url: '/services/bail-matters' },
        { name: 'Cyber Fraud', alias: 'Call Centre Crime', url: '/services/cyber-fraud' },
        { name: 'Civil & Criminal', url: '/services/civil-criminal' },
        { name: 'Consumer Complaint', url: '/services/consumer-complaint' },
        { name: 'Criminal Cases', url: '/services/criminal-cases' },
        { name: 'Court Marriage', url: '/services/court-marriage' },
        { name: 'Litigation Services', url: '/services/litigation' },
        { name: 'Document Attestation', url: '/services/document-attestation' },
        { name: 'Notarization', url: '/services/notarization' },
        { name: 'Contract Drafting', url: '/services/contract-drafting' }
      ]
    },

    'property-services': {
      title: 'Property Services',
      icon: 'fas fa-home',
      services: [
        { name: 'Property Registry', url: '/services/property-registry' },
        { name: 'Lease Deed', url: '/services/lease-deed' },
        { name: 'Stamp Paper & Notary', url: '/services/stamp-paper-notary' }
      ]
    },

    'web-development': {
      title: 'Web Development',
      icon: 'fas fa-laptop-code',
      services: [
        { name: 'Website Development', url: '/services/web-development' },
        { name: 'Ecommerce Development', alias: 'Ecommerce', url: '/services/ecommerce-development' }
      ]
    }
  };

  const expertContacts = [
    {
      title: 'Talk to Expert',
      number: '+91 85068 74280',
      icon: 'fas fa-user-tie'
    },
    {
      title: 'Business Expert',
      number: '+91 99953 756717',
      icon: 'fas fa-briefcase'
    },
    {
      title: 'IP/Trademark Lawyer',
      number: '+91 70420 32325',
      icon: 'fas fa-trademark'
    },
    {
      title: 'Company Secretary',
      number: '+91 92118 40295',
      icon: 'fas fa-file-contract'
    }
  ];

  return (
    <>
      <HeaderContainer className={isScrolled ? 'scrolled' : ''}>
        <HeaderTop>
          <TopContent>
            <TopLeft>
              <span>
                <i className="fas fa-map-marker-alt"></i>
                Best Sky Tower, 1307, Netaji Subhash Place, Pitampura, Delhi
              </span>
              <span>
                <i className="fas fa-clock"></i>
                Mon - SAT: 10:00 AM - 6:00 PM
              </span>
            </TopLeft>
            <TopRight>
              <a href="mailto:mundralegal@gmail.com">
                <i className="fas fa-envelope"></i>
                mundralegal@gmail.com
              </a>
              <a href="tel:+918506874280">
                <i className="fas fa-phone"></i>
                +91 85068 74280
              </a>
            </TopRight>
          </TopContent>
        </HeaderTop>

        <HeaderMain>
          <MainContent>
            <Logo to="/">
              <img src="/assets/logo.png" alt="Mundra Legal" />
            </Logo>

            <Navigation>
              <NavItem>
                <Link 
                  to="/" 
                  className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                >
                  Home
                </Link>
              </NavItem>

              <NavItem>
                <button
                  className={`nav-link ${activeDropdown === 'services' ? 'dropdown-open' : ''}`}
                  onClick={() => handleDropdownToggle('services')}
                >
                  Services
                  <i className="fas fa-chevron-down"></i>
                </button>
                <MegaMenu $isOpen={activeDropdown === 'services'}>
                  <MegaMenuContent>
                    <MegaMenuLeft>
                      <div className="category-list">
                        {Object.entries(servicesData).map(([key, category]) => (
                          <button
                            key={key}
                            className="category-item"
                            onClick={() => handleCategoryClick(key)}
                          >
                            <div className="category-icon">
                              <i className={category.icon}></i>
                            </div>
                            <div className="category-text">{category.title}</div>
                            <i className="fas fa-chevron-right category-arrow"></i>
                          </button>
                        ))}
                      </div>
                    </MegaMenuLeft>
                    <MegaMenuRight>
                      <div className="content-section">
                          <div className="section-title">
                            {selectedCategory ? servicesData[selectedCategory].title : 'Our Services'}
                          </div>
                          <div className="services-grid">
                            {selectedCategory && 
                              servicesData[selectedCategory].services.map(service => (
                                <Link
                                  key={service.url}
                                  to={service.url}
                                  className="service-item"
                                  onClick={() => handleDropdownToggle('services')}
                                >
                                  {service.alias ? `${service.name} (${service.alias})` : service.name}
                                </Link>
                              ))
                            }
                          </div>
                        </div>
                    </MegaMenuRight>
                  </MegaMenuContent>
                </MegaMenu>
              </NavItem>

              <NavItem>
                <Link 
                  to="/about" 
                  className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                >
                  About
                </Link>
              </NavItem>

              <NavItem>
                <Link 
                  to="/events" 
                  className={`nav-link ${location.pathname === '/events' ? 'active' : ''}`}
                >
                  Events
                </Link>
              </NavItem>

              <NavItem>
                <Link 
                  to="/contact" 
                  className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                >
                  Contact
                </Link>
              </NavItem>
            </Navigation>

            <HeaderActions>
              <div className="desktop-only">
                <ExpertButton>
                  <button
                    className={`expert-btn ${activeDropdown === 'expert' ? 'dropdown-open' : ''}`}
                    onClick={() => handleDropdownToggle('expert')}
                  >
                    <i className="fas fa-phone"></i>
                    Talk to Expert
                    <i className="fas fa-chevron-down"></i>
                  </button>
                  <ExpertDropdown $isOpen={activeDropdown === 'expert'}>
                    {expertContacts.map((expert, index) => (
                      <a
                        key={index}
                        href={`tel:${expert.number.replace(/\s+/g, '')}`}
                        className="expert-item"
                      >
                        <div className="expert-icon">
                          <i className={expert.icon}></i>
                        </div>
                        <div className="expert-info">
                          <div className="expert-title">{expert.title}</div>
                          <div className="expert-number">{expert.number}</div>
                        </div>
                      </a>
                    ))}
                  </ExpertDropdown>
                </ExpertButton>
              </div>

              <MobileMenuButton onClick={() => setIsMobileMenuOpen(true)}>
                <i className="fas fa-bars"></i>
              </MobileMenuButton>
            </HeaderActions>
          </MainContent>
        </HeaderMain>
      </HeaderContainer>

      <MobileMenu $isOpen={isMobileMenuOpen}>
        <MobileMenuContent $isOpen={isMobileMenuOpen}>
          <button 
            className="mobile-close"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>

          <div className="mobile-logo" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', padding: '0.75rem', background: '#f8fafc', borderRadius: '12px' }}>
            <img src="/assets/logo.png" alt="Mundra Legal" style={{ height: '40px', width: 'auto', maxWidth: '140px' }} />
            {/* <div className="logo-text">
              <div className="main-text" style={{ fontSize: '1.2rem', fontWeight: '700', color: '#1C2951', marginBottom: '0.2rem' }}>Mundra Legal</div>
              <div className="sub-text" style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: '500' }}>ODR • TM • Registrations & Compliance</div>
            </div> */}
          </div>

          <div className="mobile-actions">
            {expertContacts.map((expert, index) => (
              <a
                key={index}
                href={`tel:${expert.number.replace(/\s+/g, '')}`}
                className="expert-item"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="expert-icon">
                  <i className={expert.icon}></i>
                </div>
                <div className="expert-info">
                  <div className="expert-title">{expert.title}</div>
                  <div className="expert-number">{expert.number}</div>
                </div>
              </a>
            ))}
          </div>

          <nav className="mobile-nav">
            {Object.entries(servicesData).map(([key, category]) => (
              <div key={key} className="mobile-category">
                <div className="category-header" onClick={() => handleMobileDropdownToggle(key)}>
                  <i className={category.icon}></i>
                  {category.title}
                  <i className={`fas fa-chevron-${mobileDropdowns[key] ? 'up' : 'down'}`}></i>
                </div>
                {mobileDropdowns[key] && (
                  <div className="category-services">
                    {category.services.map(service => (
                      <Link
                        key={service.url}
                        to={service.url}
                        className="service-link"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.alias ? `${service.name} (${service.alias})` : service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </MobileMenuContent>
      </MobileMenu>
    </>
  );
};

export default Header;