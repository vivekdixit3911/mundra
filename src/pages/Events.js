import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

const EventsSection = styled.section`
  padding: 120px 20px 80px;
  background: linear-gradient(180deg, #f8f9fb 0%, #ffffff 50%, #f8f9fb 100%);
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 100px 16px 60px;
  }
`;

const EventsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const EventsHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    background: linear-gradient(135deg, #1C2951 0%, #D4AF37 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 20px;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
  }

  p {
    font-size: 1.2rem;
    color: #64748b;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const EventCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 8px 24px rgba(28, 41, 81, 0.12);
  border: 1px solid rgba(28, 41, 81, 0.08);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 48px rgba(28, 41, 81, 0.16);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #1C2951, #D4AF37);
  }
`;

const EventDate = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  color: #D4AF37;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  i {
    font-size: 1.1rem;
  }
`;

const EventTitle = styled.h3`
  font-size: 1.5rem;
  color: #1C2951;
  margin-bottom: 15px;
  font-family: 'Playfair Display', serif;
  font-weight: 600;
`;

const EventDescription = styled.p`
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const EventDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #475569;
    font-size: 0.9rem;

    i {
      color: #D4AF37;
      width: 16px;
    }
  }
`;

const EventButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #1C2951, #D4AF37);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(28, 41, 81, 0.2);
    text-decoration: none;
    color: white;
  }
`;

const UpcomingEvents = styled.div`
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 8px 24px rgba(28, 41, 81, 0.12);
  border: 1px solid rgba(28, 41, 81, 0.08);
  margin-bottom: 40px;

  h2 {
    font-size: 2rem;
    color: #1C2951;
    margin-bottom: 30px;
    text-align: center;
    font-family: 'Playfair Display', serif;
    font-weight: 600;
  }
`;

const EventList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const EventListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: #f8f9fb;
  border-radius: 12px;
  border-left: 4px solid #D4AF37;
  transition: all 0.3s ease;

  &:hover {
    background: #f1f5f9;
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
`;

const EventDateBadge = styled.div`
  background: linear-gradient(135deg, #1C2951, #D4AF37);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  text-align: center;
  min-width: 100px;
  font-weight: 600;

  .day {
    font-size: 1.2rem;
    display: block;
  }

  .month {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

const EventInfo = styled.div`
  flex: 1;

  h4 {
    color: #1C2951;
    font-size: 1.2rem;
    margin-bottom: 5px;
    font-weight: 600;
  }

  p {
    color: #64748b;
    margin: 0;
    font-size: 0.9rem;
  }
`;

const EventAction = styled.a`
  background: #D4AF37;
  color: #1C2951;
  padding: 10px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: #1C2951;
    color: white;
    text-decoration: none;
  }
`;

const ContactSection = styled.div`
  background: linear-gradient(135deg, #1C2951, #D4AF37);
  color: white;
  padding: 40px;
  border-radius: 16px;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    font-family: 'Playfair Display', serif;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 30px;
    opacity: 0.9;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: white;
    color: #1C2951;
    padding: 15px 30px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
      text-decoration: none;
      color: #1C2951;
    }
  }
`;

// Diwali gallery styled components
const DiwaliGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

// wrapper to limit visible rows and allow expand/collapse
const GalleryPreviewWrapper = styled.div`
  overflow: hidden;
  transition: max-height 0.45s ease;
  max-height: ${props => props.$expanded ? 'none' : '540px'}; /* ~2 rows of 260px images + gap */
`;

const DiwaliCard = styled.div`
  position: relative;
  background: linear-gradient(180deg, #fff 0%, #fff 100%);
  border-radius: 14px;
  overflow: visible;
  display: block;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  cursor: pointer;

  /* decorative frame using pseudo-element */
  &::before {
    content: '';
    position: absolute;
    inset: -8px;
    border-radius: 18px;
    background: linear-gradient(135deg, rgba(212,175,55,0.18), rgba(44,74,124,0.06));
    z-index: -2;
    filter: blur(6px);
    transition: transform 0.35s ease, opacity 0.35s ease;
    opacity: 0.95;
  }

  &::after {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 16px;
    padding: 2px;
    background: linear-gradient(90deg, rgba(212,175,55,0.85), rgba(28,41,81,0.85));
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
    opacity: 0.06;
    transition: opacity 0.35s ease;
  }

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 30px 60px rgba(2,6,23,0.18);
  }
`;

const DiwaliImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  display: block;
  border-radius: 12px;
  transition: transform 0.45s ease;

  ${DiwaliCard}:hover & {
    transform: scale(1.03);
  }
`;

const HappyDiwaliBanner = styled.div`
  text-align: center;
  margin-bottom: 18px;

  h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2.4rem;
    color: #D97706;
    margin: 0 0 8px 0;
    animation: glow 2.5s ease-in-out infinite;
  }

  p {
    color: #475569;
    margin: 0 0 12px 0;
  }

  @keyframes glow {
    0% { text-shadow: 0 0 6px rgba(212,175,55,0.2); transform: translateY(0); }
    50% { text-shadow: 0 0 18px rgba(212,175,55,0.6); transform: translateY(-4px); }
    100% { text-shadow: 0 0 6px rgba(212,175,55,0.2); transform: translateY(0); }
  }
`;

const OfficeOutingBanner = styled(HappyDiwaliBanner)`
  h2 { color: #0ea5a4; }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
`;

const ModalContent = styled.div`
  max-width: 900px;
  width: 100%;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(2,6,23,0.4);
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(0,0,0,0.6);
  color: white;
  border: none;
  padding: 8px 10px;
  border-radius: 6px;
  cursor: pointer;
`;

const ShowMoreButton = styled.button`
  display: inline-block;
  margin: 18px auto 0;
  background: linear-gradient(135deg, #1C2951, #D4AF37);
  color: white;
  padding: 10px 18px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  transition: transform 0.18s ease;

  &:hover { transform: translateY(-3px); }
`;

const Events = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const upcomingEvents = [
    {
      id: 1,
      title: "Legal Awareness Workshop",
      date: "2024-02-15",
      time: "10:00 AM - 2:00 PM",
      location: "Mundra Legal Office, Mumbai",
      description: "Learn about your legal rights and responsibilities in this comprehensive workshop.",
      type: "Workshop"
    },
    {
      id: 2,
      title: "Business Registration Seminar",
      date: "2024-02-22",
      time: "2:00 PM - 5:00 PM",
      location: "Online Event",
      description: "Everything you need to know about starting and registering your business in India.",
      type: "Seminar"
    },
    {
      id: 3,
      title: "Property Law Consultation Day",
      date: "2024-03-01",
      time: "9:00 AM - 6:00 PM",
      location: "Mundra Legal Office, Mumbai",
      description: "Free consultation on property registration, documentation, and legal issues.",
      type: "Consultation"
    }
  ];

  // Diwali images found in public/assets/events/diwali
  const diwaliImages = [
    'WhatsApp Image 2025-10-24 at 10.59.24 AM (1).jpeg',
    'WhatsApp Image 2025-10-24 at 10.59.24 AM (2).jpeg',
    'WhatsApp Image 2025-10-24 at 10.59.24 AM.jpeg',
    'WhatsApp Image 2025-10-24 at 10.59.25 AM (1).jpeg',
    'WhatsApp Image 2025-10-24 at 10.59.25 AM (2).jpeg',
    'WhatsApp Image 2025-10-24 at 10.59.25 AM (3).jpeg',
    'WhatsApp Image 2025-10-24 at 10.59.25 AM.jpeg',
    'WhatsApp Image 2025-10-24 at 10.59.26 AM (1).jpeg',
    'WhatsApp Image 2025-10-24 at 10.59.26 AM (2).jpeg',
    'WhatsApp Image 2025-10-24 at 10.59.26 AM.jpeg',
    'WhatsApp Image 2025-10-24 at 10.59.27 AM (1).jpeg',
    'WhatsApp Image 2025-10-24 at 10.59.27 AM.jpeg'
  ];

  // Office outing images found in public/assets/events/Office_visit
  const officeImages = [
    'WhatsApp Image 2025-10-24 at 11.54.07 AM.jpeg',
    'WhatsApp Image 2025-10-24 at 11.54.08 AM (1).jpeg',
    'WhatsApp Image 2025-10-24 at 11.54.08 AM.jpeg',
    'WhatsApp Image 2025-10-24 at 11.54.09 AM.jpeg'
  ];

  const [showAllDiwali, setShowAllDiwali] = useState(false);
  const [showAllOffice, setShowAllOffice] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => {
    setSelectedImage(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  return (
    <>
      <Header />
      <EventsSection>
        <EventsContainer>
          <EventsHeader>
            <h1>Legal Events & Workshops</h1>
            <p>
              Join our expert-led workshops, seminars, and consultation sessions to stay updated with the latest legal developments and get professional guidance.
            </p>
          </EventsHeader>

          {/* Diwali gallery section: shows event photos from public/assets/events/diwali */}
          <UpcomingEvents>
            <HappyDiwaliBanner>
              <h2>Happy Diwali</h2>
              <p>Enjoy highlights from our Diwali events and designs.</p>
            </HappyDiwaliBanner>

            <GalleryPreviewWrapper $expanded={showAllDiwali}>
              <DiwaliGallery>
                {diwaliImages && diwaliImages.length > 0 ? (
                  diwaliImages.map((img, idx) => (
                    <DiwaliCard key={idx} onClick={() => openModal(img)} style={{ cursor: 'pointer' }}>
                      <DiwaliImage src={`/assets/events/diwali/${img}`} alt={`Diwali ${idx + 1}`} />
                    </DiwaliCard>
                  ))
                ) : (
                  <p style={{ color: '#475569' }}>No Diwali images found. Please add images to <code>/public/assets/events/diwali</code>.</p>
                )}
              </DiwaliGallery>
            </GalleryPreviewWrapper>

            {diwaliImages && diwaliImages.length > 6 && (
              <div style={{ textAlign: 'center' }}>
                <ShowMoreButton onClick={() => setShowAllDiwali(prev => !prev)}>
                  {showAllDiwali ? 'Show less' : 'Show more'}
                </ShowMoreButton>
              </div>
            )}
          </UpcomingEvents>

          {/* Upcoming Events (kept below the Diwali gallery) */}
          {/* Office outing gallery */}
          <UpcomingEvents>
            <OfficeOutingBanner>
              <h2>Office Outing</h2>
              <p>Memories from our recent office visit and team outing.</p>
            </OfficeOutingBanner>

            <GalleryPreviewWrapper $expanded={showAllOffice}>
              <DiwaliGallery as={DiwaliGallery}>
                {officeImages && officeImages.length > 0 ? (
                  officeImages.map((img, idx) => (
                    <DiwaliCard key={idx} onClick={() => openModal(img)} style={{ cursor: 'pointer' }}>
                      <DiwaliImage src={`/assets/events/Office_visit/${img}`} alt={`Office ${idx + 1}`} />
                    </DiwaliCard>
                  ))
                ) : (
                  <p style={{ color: '#475569' }}>No office outing images found. Please add images to <code>/public/assets/events/Office_visit</code>.</p>
                )}
              </DiwaliGallery>
            </GalleryPreviewWrapper>

            {officeImages && officeImages.length > 6 && (
              <div style={{ textAlign: 'center' }}>
                <ShowMoreButton onClick={() => setShowAllOffice(prev => !prev)}>
                  {showAllOffice ? 'Show less' : 'Show more'}
                </ShowMoreButton>
              </div>
            )}
          </UpcomingEvents>

          <UpcomingEvents>
            <h2>Upcoming Events</h2>
            <EventList>
              {upcomingEvents.map((event) => (
                <EventListItem key={event.id}>
                  <EventDateBadge>
                    <span className="day">{new Date(event.date).getDate()}</span>
                    <span className="month">{new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}</span>
                  </EventDateBadge>
                  <EventInfo>
                    <h4>{event.title}</h4>
                    <p>{event.description}</p>
                    <div style={{ display: 'flex', gap: '20px', marginTop: '10px', fontSize: '0.85rem', color: '#64748b' }}>
                      <span><i className="fas fa-clock"></i> {event.time}</span>
                      <span><i className="fas fa-map-marker-alt"></i> {event.location}</span>
                    </div>
                  </EventInfo>
                  <EventAction href="tel:+918506874280">
                    Register Now
                  </EventAction>
                </EventListItem>
              ))}
            </EventList>
          </UpcomingEvents>

          {/* Modal for full-size image */}
          {modalOpen && (
            <ModalOverlay onClick={closeModal}>
              <ModalContent onClick={(e) => e.stopPropagation()}>
                <div style={{ position: 'relative' }}>
                  <CloseButton onClick={closeModal}>Close</CloseButton>
                  <ModalImage src={`/assets/events/diwali/${selectedImage}`} alt="Selected Diwali" />
                </div>
              </ModalContent>
            </ModalOverlay>
          )}
        </EventsContainer>
      </EventsSection>

      <Footer />

      {/* Back to Top Button */}
      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '50px',
          height: '50px',
          background: 'linear-gradient(135deg, #1C2951, #D4AF37)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          opacity: showBackToTop ? 1 : 0,
          transform: showBackToTop ? 'translateY(0)' : 'translateY(100px)',
          transition: 'all 0.3s ease',
          boxShadow: '0 16px 48px rgba(28, 41, 81, 0.16)',
          zIndex: 999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </>
  );
};

export default Events;
