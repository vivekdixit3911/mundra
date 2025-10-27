import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServiceHero from '../../components/ServiceHero';
import SidebarForm from '../../components/SidebarForm';
import LottieAnimation from '../../components/LottieAnimation';
import styled from 'styled-components';

const PageSection = styled.section`
  background: #fff;
  padding: 2.5rem 1rem 6rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const Main = styled.main``;

const Sidebar = styled.aside`
  @media (min-width: 768px) {
    position: sticky;
    top: 110px; /* keep below fixed header */
    align-self: start;
  }
`;

const HeroRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Heading = styled.h1`
  font-size: clamp(1.8rem, 3.2vw, 2.6rem);
  margin: 0 0 0.5rem 0;
  font-weight: 900;
  line-height: 1.02;
  background: linear-gradient(90deg,#1C2951 0%, #2D4A7C 40%, #D4AF37 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Byline = styled.p`
  color: #374151;
  margin: 0 0 0.6rem 0;
  max-width: 70ch;
`;

const Illustration = styled.div`
  width: 260px;
  height: 160px;
  flex: 0 0 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(36,58,102,0.06), rgba(212,175,55,0.06));
  border-radius: 14px;
  box-shadow: 0 8px 30px rgba(28,41,81,0.04);

  svg { width: 90%; height: auto; }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const Section = styled.section`
  margin-top: 1.25rem;
`;

const SubHeading = styled.h2`
  font-size: 1.05rem;
  color: #1C2951;
  margin-bottom: 0.6rem;
  font-weight: 700;
`;

const Text = styled.p`
  color: #4b5563;
  line-height: 1.7;
`;

const GridTable = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
  gap: 0.8rem;
  margin-top: 1rem;
`;

const Card = styled.div`
  background: #fff;
  border: 1px solid #eef2f7;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 6px 22px rgba(28,41,81,0.03);
`;

const StackList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StackItem = styled.li`
  background: #f8fafc;
  color: #1c2951;
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.9rem;
`;

const CTA = styled.div`
  margin-top: 1.25rem;
`;

const Checklist = styled.ul`
  margin-left: 1rem;
  list-style: disc;
  color: #4b5563;
  line-height: 1.7;
  li { margin-bottom: 0.6rem; }
`;

const WebsiteDevelopment = () => {
  return (
    <>
      <Header />

      <ServiceHero
        title="Website Development"
        subtitle="Custom websites, landing pages and CMS-powered sites."
        breadcrumb="Web Development / Website"
      />

      <PageSection>
        <Container>
          <Grid>
            <Main>
              <HeroRow>
                <div>
                  <Heading>Website Development Services in India</Heading>
                  <Byline>By Mundra Web — Your Trusted Partner for High-Performance Business Websites. Build. Scale. Succeed.</Byline>
                </div>

                <Illustration aria-hidden>
                  {/* Lottie animation from public assets/Drafts for richer motion */}
                  <LottieAnimation src={encodeURI('/assets/Drafts/Business.json')} width="220px" height="140px" />
                </Illustration>
              </HeroRow>

              <Section>
                <SubHeading>Why Choose Our Website Development Services</SubHeading>
                <GridTable>
                  <Card>
                    <strong>Custom Website Design</strong>
                    <Text>We don’t use generic templates. Each website is custom-designed to reflect your brand identity and attract your target audience.</Text>
                  </Card>
                  <Card>
                    <strong>Fully Responsive & Mobile-Friendly</strong>
                    <Text>Your site will look and function perfectly on all devices — desktops, tablets, and mobiles.</Text>
                  </Card>
                  <Card>
                    <strong>SEO-Optimized Structure</strong>
                    <Text>We follow Google’s best practices to ensure your website ranks well and drives organic traffic from day one.</Text>
                  </Card>
                  <Card>
                    <strong>Speed & Performance Optimization</strong>
                    <Text>Lightweight, fast-loading and optimized pages for the best user experience.</Text>
                  </Card>
                  <Card>
                    <strong>Secure & Scalable</strong>
                    <Text>Built with SSL, firewalls, and updated frameworks, your website will remain secure and future-ready.</Text>
                  </Card>
                  <Card>
                    <strong>Easy CMS Integration</strong>
                    <Text>We integrate WordPress, Webflow, or custom admin panels so you can manage content without code.</Text>
                  </Card>
                </GridTable>
              </Section>

              <Section>
                <SubHeading>Our Website Development Solutions</SubHeading>
                <GridTable>
                  <Card>
                    <strong>Static / Informational Website</strong>
                    <Text>Best for small businesses and personal brands — fast, lightweight, minimal maintenance.</Text>
                  </Card>
                  <Card>
                    <strong>Dynamic Website</strong>
                    <Text>Interactive, CMS-driven and scalable for startups and growing companies.</Text>
                  </Card>
                  <Card>
                    <strong>E-Commerce Website</strong>
                    <Text>Full product catalog, cart, secure checkout and payment integrations.</Text>
                  </Card>
                  <Card>
                    <strong>Corporate Website</strong>
                    <Text>Professional designs and detailed pages for enterprises and organisations.</Text>
                  </Card>
                  <Card>
                    <strong>Portfolio Website</strong>
                    <Text>Visual showcase with galleries and animations for freelancers and agencies.</Text>
                  </Card>
                  <Card>
                    <strong>Landing Pages</strong>
                    <Text>Conversion-focused pages tailored for SEO & PPC campaigns.</Text>
                  </Card>
                </GridTable>
              </Section>

              <Section>
                <SubHeading>Technology Stack We Use</SubHeading>
                <Card>
                  <strong>Frontend:</strong>
                  <StackList>
                    <StackItem>React</StackItem>
                    <StackItem>Next.js</StackItem>
                    <StackItem>Vue.js</StackItem>
                    <StackItem>Tailwind</StackItem>
                    <StackItem>Bootstrap</StackItem>
                  </StackList>

                  <strong>Backend:</strong>
                  <StackList>
                    <StackItem>Node.js</StackItem>
                    <StackItem>Express</StackItem>
                    <StackItem>PHP</StackItem>
                    <StackItem>Django</StackItem>
                  </StackList>

                  <strong>CMS & Hosting:</strong>
                  <StackList>
                    <StackItem>WordPress</StackItem>
                    <StackItem>Shopify</StackItem>
                    <StackItem>Webflow</StackItem>
                    <StackItem>AWS</StackItem>
                    <StackItem>Vercel</StackItem>
                  </StackList>
                </Card>
              </Section>

              <Section>
                <SubHeading>Our Development Process</SubHeading>
                <Text><strong>Requirement Analysis</strong> – Understanding your goals, audience, and competitors.</Text>
                <Text><strong>UI/UX Design</strong> – Wireframes, mockups, and design prototypes.</Text>
                <Text><strong>Development</strong> – Frontend and backend implementation.</Text>
                <Text><strong>Testing & QA</strong> – Performance, security, and browser compatibility checks.</Text>
                <Text><strong>Deployment</strong> – Live server setup and domain configuration.</Text>
                <Text><strong>Support & Maintenance</strong> – Continuous updates and security monitoring.</Text>
              </Section>

              <Section>
                <SubHeading>Add-On Services</SubHeading>
                <Checklist>
                  <li>SEO & Content Writing</li>
                  <li>Logo and Brand Identity Design</li>
                  <li>Web Hosting & SSL Setup</li>
                  <li>Performance Analytics Integration (GTM, GA4)</li>
                  <li>Ongoing Technical Support</li>
                </Checklist>
              </Section>

              <Section>
                <SubHeading>Why Businesses Trust Mundra Web</SubHeading>
                <Checklist>
                  <li>Experienced team of developers & designers</li>
                  <li>100% transparency in pricing</li>
                  <li>End-to-end digital solutions under one roof</li>
                  <li>Timely delivery and long-term client relationships</li>
                </Checklist>

                <CTA>
                  <SubHeading>Get a Free Website Consultation</SubHeading>
                  <Text>Want to launch a stunning, high-performing website for your business? Fill out the quick form on the right — our experts will contact you shortly.</Text>
                </CTA>
              </Section>
            </Main>

            <Sidebar>
              <SidebarForm />
            </Sidebar>
          </Grid>
        </Container>
      </PageSection>

      <Footer />
    </>
  );
};

export default WebsiteDevelopment;
