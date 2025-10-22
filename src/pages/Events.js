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

  const pastEvents = [
    {
      title: "GST Compliance Workshop",
      date: "January 20, 2024",
      description: "Comprehensive workshop on GST registration, filing, and compliance requirements.",
      attendees: "50+ participants"
    },
    {
      title: "Trademark Registration Seminar",
      date: "January 15, 2024",
      description: "Learn about intellectual property protection and trademark registration process.",
      attendees: "35+ participants"
    },
    {
      title: "Legal Documentation Clinic",
      date: "January 10, 2024",
      description: "Free legal documentation assistance for individuals and small businesses.",
      attendees: "75+ participants"
    }
  ];

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

          <EventsGrid>
            {pastEvents.map((event, index) => (
              <EventCard key={index}>
                <EventDate>
                  <i className="fas fa-calendar-check"></i>
                  {event.date}
                </EventDate>
                <EventTitle>{event.title}</EventTitle>
                <EventDescription>{event.description}</EventDescription>
                <EventDetails>
                  <div>
                    <i className="fas fa-users"></i>
                    {event.attendees}
                  </div>
                </EventDetails>
                <EventButton href="/contact">
                  <i className="fas fa-info-circle"></i>
                  Learn More
                </EventButton>
              </EventCard>
            ))}
          </EventsGrid>

          <ContactSection>
            <h2>Want to Organize an Event?</h2>
            <p>
              We regularly organize legal workshops, seminars, and consultation sessions. 
              Contact us to know about upcoming events or to request a custom event for your organization.
            </p>
            <a href="tel:+918506874280">
              <i className="fas fa-phone"></i>
              Contact Us: +91 85068 74280
            </a>
          </ContactSection>
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
