import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServiceHero from '../../components/ServiceHero';
import { PageContent } from './ServicePage.styles.js';
import SidebarForm from '../../components/SidebarForm';
import { Player } from '@lottiefiles/react-lottie-player';

const ShiftingRegisteredOffice = () => {
  return (
    <>
      <Header />

      <ServiceHero
        title="Shifting of Registered Office"
        subtitle="Seamless handling of ROC formalities for shifting your company's registered office — local, inter-ROC or inter-state."
        breadcrumb="Shifting of Registered Office"
      />

      <PageContent>
        <div className="container wpc-container">
          <main className="wpc-main">
            <div style={{display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '18px', flexWrap: 'wrap'}}>
              <div style={{flex: '1 1 300px', minWidth: '280px'}}>
                <h1>Shifting of Registered Office of the Company</h1>
                <p>Moving a company's registered office requires compliance with the Companies Act, 2013 and coordination with the Registrar of Companies (ROC). Mundra Legal handles the entire process — drafting resolutions, preparing and filing the required forms, coordinating with the ROC and local authorities, and ensuring a smooth shift of address without disruption to your business.</p>
              </div>
              <div style={{width: '220px', maxWidth: '100%', flexShrink: 0}}>
                <Player
                  src="/assets/Drafts/registration.json"
                  loop
                  autoplay
                  style={{ width: '100%', maxWidth: 220, height: 'auto' }}
                />
              </div>
            </div>

            <h2>Types of Shifts Covered</h2>
            <ul>
              <li><strong>Within the same city, town, or village</strong> — Simple change of address within the same ROC jurisdiction.</li>
              <li><strong>From one ROC jurisdiction to another within the same state</strong> — Requires certain filings and updated ROC records.</li>
              <li><strong>From one state to another</strong> — Inter-state shift which requires approval of the Regional Director (RD) and alteration of the Memorandum of Association (MOA) where necessary.</li>
            </ul>

            <h2>Procedure</h2>
            <ol>
              <li><strong>Board Meeting</strong> — Convene a board meeting to approve the proposal for shifting the registered office and authorize filing of necessary forms.</li>
              <li><strong>Shareholder Approval</strong> — If required by the Articles or by law, obtain members’ approval through a special resolution passed at a general meeting or by postal ballot.</li>
              <li><strong>Draft Resolutions</strong> — Prepare board and shareholder resolutions reflecting the new registered office address and effective date of shift.</li>
              <li><strong>Prepare and File Forms</strong> — File Form INC-22 (notice of situation or change of registered office) and MGT-14 (filing of resolutions) where applicable. For inter-state shifts, additional filings and RD approval may be required.</li>
              <li><strong>ROC Coordination</strong> — Submit documents to the ROC, respond to any queries, and obtain updated incorporation records.</li>
              <li><strong>Update MOA/ALA</strong> — For inter-state shifts, draft altered MOA clauses and file necessary paperwork to reflect the change in jurisdiction.</li>
              <li><strong>Local Compliances</strong> — Liaise with the landlord for NOC, verify lease and possession documents, and update local registrations (GST, Shops & Establishment, trade licenses) as needed.</li>
            </ol>

            <h2>Our Deliverables</h2>
            <ul>
              <li>Drafting of Board and Shareholder Resolutions</li>
              <li>Preparing &amp; filing Forms INC-22 and MGT-14 (if applicable)</li>
              <li>Coordination with ROC and Central authorities</li>
              <li>Drafting altered MOA clauses for inter-state shifts</li>
              <li>Liaising for landlord NOC and document verification</li>
              <li>Assistance for updating GST, PAN, and other registrations after shift</li>
            </ul>

            <h2>Documents Typically Required</h2>
            <ul>
              <li>Board resolution and certified copy of minutes</li>
              <li>Shareholders’ resolution (where applicable) and MGT-14 filing proof</li>
              <li>Proof of new registered office — rent/lease agreement, utility bill, or property ownership documents</li>
              <li>Landlord NOC (if premises are leased)</li>
              <li>Updated MOA (if jurisdiction change requires alteration)</li>
              <li>Address proof and identity proofs of directors (where required)</li>
            </ul>

            <h2>Timeline &amp; Fees</h2>
            <p>Timeline depends on the type of shift. Simple intra-city shifts may complete within 7–14 working days post documentation. Inter-state shifts requiring RD approval can take longer depending on RD timelines and queries. Contact us for a tailored quote — we provide transparent pricing and an estimated timeline after reviewing your documents.</p>

            <h2>Why Choose Mundra Legal</h2>
            <ul>
              <li>End-to-end handling — from drafting to ROC coordination</li>
              <li>Experienced Company Secretaries and legal team</li>
              <li>Nationwide reach — we handle ROC interactions across India</li>
              <li>Clear timelines and regular status updates</li>
            </ul>

            <p style={{fontWeight: 700}}>Ready to shift your registered office? Fill the form on the right and our compliance team will contact you with next steps.</p>
          </main>

          <aside className="wpc-sidebar">
            <div className="sidebar-scroll-wrapper">
              <SidebarForm />

              <div style={{marginTop: 18, textAlign: 'center'}}>
                <h4 style={{marginBottom: 8}}>Helpful Drafts &amp; Templates</h4>
                <p style={{color: '#718096', marginBottom: 12}}>Download sample drafts and checklists to prepare documents.</p>
                <a href="/assets/Drafts/registration.json" download style={{display: 'inline-block', padding: '10px 16px', background: '#1C2951', color: 'white', borderRadius: 8, textDecoration: 'none'}}>Download Drafts</a>
              </div>
            </div>
          </aside>
        </div>
      </PageContent>

      <Footer />
    </>
  );
};

export default ShiftingRegisteredOffice;
