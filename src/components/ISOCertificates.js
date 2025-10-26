import React from "react";
import styled from "styled-components";

const ISOSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='25' cy='25' r='2' fill='%231C2951' opacity='0.05'/><circle cx='75' cy='75' r='2' fill='%231C2951' opacity='0.05'/></svg>") repeat;
    opacity: 0.3;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const ISOContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const ISOGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

const ISOCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 24px rgba(28, 41, 81, 0.08);
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(212, 175, 55, 0.2);
    border-color: rgba(212, 175, 55, 0.3);
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
  }
`;

const ISOImage = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, rgba(230, 197, 127, 0.05) 0%, rgba(212, 175, 55, 0.05) 100%);
  border-radius: 12px;
  transition: all 0.3s ease;

  img {
    max-width: 90px;
    max-height: 90px;
    object-fit: contain;
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
    transition: all 0.3s ease;
  }

  ${ISOCard}:hover & {
    background: linear-gradient(135deg, rgba(230, 197, 127, 0.1) 0%, rgba(212, 175, 55, 0.1) 100%);

    img {
      transform: scale(1.1);
      filter: drop-shadow(0 4px 12px rgba(212, 175, 55, 0.3));
    }
  }

  @media (max-width: 768px) {
    height: 100px;

    img {
      max-width: 75px;
      max-height: 75px;
    }
  }

  @media (max-width: 480px) {
    height: 80px;

    img {
      max-width: 60px;
      max-height: 60px;
    }
  }
`;

const ISOTitle = styled.h4`
  font-size: 0.9rem;
  color: #1C2951;
  font-weight: 600;
  margin-bottom: 0.5rem;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin-bottom: 0.3rem;
  }
`;

const ISODescription = styled.p`
  font-size: 0.8rem;
  color: #64748b;
  line-height: 1.5;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
    line-height: 1.4;
  }
`;

const ViewAllCertificates = styled.div`
  text-align: center;
  margin-top: 3rem;

  .view-all-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    background: linear-gradient(135deg, #D4AF37 0%, #F4E9C1 100%);
    color: #1C2951;
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
      background: linear-gradient(135deg, #F4E9C1 0%, #D4AF37 100%);
      text-decoration: none;
      color: #1C2951;
    }

    @media (max-width: 768px) {
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      padding: 0.7rem 1.3rem;
      font-size: 0.95rem;
    }
  }
`;

const VideosSection = styled.section`
  margin-top: 3.5rem;
  padding: 2.5rem 0 1rem;
  background: linear-gradient(180deg, rgba(230,197,127,0.03) 0%, transparent 100%);
  border-radius: 12px;
`;

const VideosContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const VideosHeader = styled.div`
  text-align: center;
  margin-bottom: 1.25rem;

  h3 {
    font-size: 1.5rem;
    color: #1C2951;
    margin: 0 0 0.5rem;
    font-weight: 700;
  }

  p {
    margin: 0;
    color: #64748b;
    font-size: 0.95rem;
  }
`;

const VideosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const VideoCard = styled.div`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 24px rgba(28,41,81,0.06);
  border: 1px solid rgba(226,232,240,0.6);
`;

const VideoFrameWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 9/16; /* portrait to mimic shorts */
  background: #000;

  iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
  }
`;

const VideoMeta = styled.div`
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .title {
    font-size: 0.95rem;
    color: #1C2951;
    font-weight: 600;
  }

  .play-badge {
    background: linear-gradient(135deg,#D4AF37 0%,#E6C57F 100%);
    color: #122244;
    padding: 0.35rem 0.6rem;
    border-radius: 999px;
    font-weight: 700;
    font-size: 0.8rem;
  }
`;

const ISOCertificates = () => {
  const certificates = [
    {
      image: "/assets/iso_images/ISO-9001-2015.png",
      title: "ISO 9001:2015",
      description: "Quality Management System"
    },
    {
      image: "/assets/iso_images/ISO-14001.png",
      title: "ISO 14001",
      description: "Environmental Management"
    },
    {
      image: "/assets/iso_images/ISO-27001.png",
      title: "ISO 27001",
      description: "Information Security"
    },
    {
      image: "/assets/iso_images/ISO-22000-2018.png",
      title: "ISO 22000:2018",
      description: "Food Safety Management"
    },
    {
      image: "/assets/iso_images/HACCP.png",
      title: "HACCP",
      description: "Hazard Analysis Critical Control"
    },
    {
      image: "/assets/iso_images/ISO-13485-2003.png",
      title: "ISO 13485:2003",
      description: "Medical Devices Quality"
    },
    {
      image: "/assets/iso_images/ISO-50001-2011.png",
      title: "ISO 50001:2011",
      description: "Energy Management System"
    },
    {
      image: "/assets/iso_images/ISO-20000.png",
      title: "ISO 20000",
      description: "IT Service Management"
    },
    {
      image: "/assets/iso_images/ce.png",
      title: "CE Marking",
      description: "European Conformity"
    },
    {
      image: "/assets/iso_images/rohs.png",
      title: "RoHS",
      description: "Restriction of Hazardous Substances"
    },
    {
      image: "/assets/iso_images/halal.png",
      title: "Halal Certification",
      description: "Islamic Dietary Standards"
    },
    {
      image: "/assets/iso_images/organic.png",
      title: "Organic Certification",
      description: "Organic Product Standards"
    }
  ];

  return (
    <ISOSection>
      <ISOContainer>
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-tag" style={{
            display: 'inline-block',
            background: '#E6C57F',
            color: '#1C2951',
            padding: '0.6rem 1.8rem',
            borderRadius: '2rem',
            fontSize: '0.9rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '1rem'
          }}>ISO Certifications</span>
          <h2 className="section-title" style={{
            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
            color: '#1C2951',
            fontFamily: "'Playfair Display', serif",
            fontWeight: '700',
            marginBottom: '1rem',
            lineHeight: '1.2'
          }}>
            Get Your Business <span style={{ color: '#E6C57F' }}>ISO Certified</span>
          </h2>
          <p className="section-description" style={{
            fontSize: '1.1rem',
            color: '#64748b',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            We help businesses achieve international standards compliance with comprehensive
            ISO certification services across various industry domains.
          </p>
        </div>

        <ISOGrid>
          {certificates.map((cert, index) => (
            <ISOCard key={index}>
              <ISOImage>
                <img
                  src={cert.image}
                  alt={cert.title}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </ISOImage>
              <ISOTitle>{cert.title}</ISOTitle>
              <ISODescription>{cert.description}</ISODescription>
            </ISOCard>
          ))}
        </ISOGrid>

        <ViewAllCertificates>
          <a href="/services/iso-certificate" className="view-all-btn">
            Get ISO Certified <i className="fas fa-arrow-right"></i>
          </a>
        </ViewAllCertificates>

        {/* Videos / Shorts Section */}
        <VideosSection aria-labelledby="iso-videos-heading">
          <VideosContainer>
            <VideosHeader>
              <h3 id="iso-videos-heading">Certification Shorts</h3>
              <p>Quick shorts to help you understand our Services, process and success stories — play right here.</p>
            </VideosHeader>

            <VideosGrid>
              {[
                { id: 'tvF30W9nmdU', title: 'Document Attestation' },
                { id: 'QuzbDTV29QY', title: 'LMPC, WPC & EPR Registration ' },
                { id: 'fIiBPay0Kac', title: 'Guide to Trademark Registration ' }
              ].map((v) => (
                <VideoCard key={v.id}>
                  <VideoFrameWrap>
                    <iframe
                      title={v.title}
                      src={`https://www.youtube.com/embed/${v.id}?rel=0&autoplay=0`}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </VideoFrameWrap>
                  <VideoMeta>
                    <div className="title">{v.title}</div>
                    <div className="play-badge">Shorts</div>
                  </VideoMeta>
                </VideoCard>
              ))}
            </VideosGrid>
          </VideosContainer>
        </VideosSection>
      </ISOContainer>
    </ISOSection>
  );
};

export default ISOCertificates;
