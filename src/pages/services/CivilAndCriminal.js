import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServiceHero from '../../components/ServiceHero';
import { CivilAndCriminalContainer } from './CivilAndCriminal.styles.js';

const CivilAndCriminal = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert('Thanks — your case details have been submitted. Our team will reach out shortly.');
        e.target.reset();
    };

  return (
    <>
      <Header />
      <ServiceHero
        title="Civil & Criminal Law"
        subtitle="Comprehensive litigation, arbitration, criminal defense and family law services."
        breadcrumb="Civil & Criminal Law"
      />
      <CivilAndCriminalContainer>
        <section className="cc-section" aria-labelledby="services-heading">
            <div className="cc-container">
                <article className="cc-main">
                    <div style={{display:'flex',gap:'14px',alignItems:'center',flexWrap:'wrap'}}>
                        <h1 id="services-heading">Civil & Criminal Law Services</h1>
                        <div className="cc-byline">Litigation, arbitration, mediation, criminal defence, matrimonial disputes and evidence management</div>
                    </div>

                    <div className="section-lottie">
                        <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_qm2j8zwz.json" background="transparent" speed="0.9" loop autoplay></lottie-player>
                    </div>

                    <p>Mundra Legal provides end-to-end civil and criminal law services across India. Our litigators, arbitration counsel, and investigative team manage matters from initial assessment and evidence preservation to courtroom hearings, arbitration tribunals, and appellate work.</p>

                    <h2>Our Civil Practice Areas</h2>
                    <div className="feature-grid">
                        <div className="feature-card small-animate"><i className="fas fa-file-contract" style={{color:'var(--primary-gold)'}}></i><h4>Contract Disputes</h4><p style={{color:'var(--text-secondary)',margin:'6px 0 0'}}>Breach, remedies, specific performance, injunctions, declaratory relief.</p></div>
                        <div className="feature-card small-animate"><i className="fas fa-building" style={{color:'var(--primary-gold)'}}></i><h4>Property & Real Estate</h4><p style={{color:'var(--text-secondary)',margin:'6px 0 0'}}>Title disputes, partition, possession suits, land acquisition matters.</p></div>
                        <div className="feature-card small-animate"><i className="fas fa-balance-scale" style={{color:'var(--primary-gold)'}}></i><h4>Commercial Litigation & Arbitration</h4><p style={{color:'var(--text-secondary)',margin:'6px 0 0'}}>Arbitration support, evidence bundles, enforcement and interim reliefs.</p></div>
                        <div className="feature-card small-animate"><i className="fas fa-users" style={{color:'var(--primary-gold)'}}></i><h4>Family & Matrimonial</h4><p style={{color:'var(--text-secondary)',margin:'6px 0 0'}}>Divorce, maintenance, custody, domestic violence and related proceedings.</p></div>
                    </div>

                    <h2>Our Criminal Practice Areas</h2>
                    <div className="feature-grid">
                        <div className="feature-card small-animate"><i className="fas fa-gavel" style={{color:'var(--primary-gold)'}}></i><h4>Criminal Defence</h4><p style={{color:'var(--text-secondary)',margin:'6px 0 0'}}>Representation in FIRs, bails, trials, appeals and sentencing mitigation.</p></div>
                        <div className="feature-card small-animate"><i className="fas fa-user-secret" style={{color:'var(--primary-gold)'}}></i><h4>Financial & White-Collar Crime</h4><p style={{color:'var(--text-secondary)',margin:'6px 0 0'}}>Fraud, money laundering, cybercrime, regulatory investigations.</p></div>
                        <div className="feature-card small-animate"><i className="fas fa-exclamation-triangle" style={{color:'var(--primary-gold)'}}></i><h4>Non-bailable & Serious Offences</h4><p style={{color:'var(--text-secondary)',margin:'6px 0 0'}}>Serious criminal matters requiring specialist defence strategies.</p></div>
                        <div className="feature-card small-animate"><i className="fas fa-handshake" style={{color:'var(--primary-gold)'}}></i><h4>Victim Representation & Remedies</h4><p style={{color:'var(--text-secondary)',margin:'6px 0 0'}}>Assistance for complainants: FIR drafting, evidence preservation and compensation claims.</p></div>
                    </div>

                    <h2>Typical Civil & Criminal Process (Overview)</h2>
                    <table className="comparison-table">
                        <thead><tr><th>Stage</th><th>Civil</th><th>Criminal</th></tr></thead>
                        <tbody>
                            <tr><td>Initial assessment</td><td>Claim analysis, limitation check</td><td>FIR assessment, evidence preservation</td></tr>
                            <tr><td>Interim relief</td><td>Injunctions, attachments</td><td>Bail, interim orders</td></tr>
                            <tr><td>Primary tribunal</td><td>Civil court/tribunal</td><td>Criminal court</td></tr>
                            <tr><td>Evidence</td><td>Affidavits, certified copies, expert reports</td><td>Forensic reports, medical records, witness statements</td></tr>
                            <tr><td>Appeal</td><td>Higher civil courts, appellate tribunals</td><td>Sessions/Appellate courts</td></tr>
                        </tbody>
                    </table>

                    <h2>Arbitration & Matrimonial Intersections</h2>
                    <p>Many commercial disputes proceed to arbitration; family disputes may run parallel with civil or criminal proceedings. We provide integrated strategies where arbitration, family law and criminal aspects overlap — for example, business disputes involving allegations of criminal conduct, or matrimonial proceedings where financial disputes or harassment lead to criminal complaints.</p>

                    <div className="highlight-box">
                        <h3><i className="fas fa-balance-scale"></i> Arbitration Support</h3>
                        <p>We prepare evidence bundles, witness statements, and represent clients in arbitration hearings and emergency injunction applications. We also handle enforcement of arbitral awards before courts.</p>
                    </div>

                    <div className="highlight-box">
                        <h3><i className="fas fa-ring"></i> Matrimonial Matters with Criminal Overlap</h3>
                        <p>When matrimonial disputes involve criminal allegations (dowry, domestic violence, harassment), our team coordinates criminal defence, protective orders, and family court representation with sensitivity to evidence collection and confidentiality.</p>
                    </div>

                    <h2>Fees & Timelines (Indicative)</h2>
                    <table className="comparison-table">
                        <thead><tr><th>Service</th><th>Indicative timeline</th></tr></thead>
                        <tbody>
                            <tr><td>Filing civil suit</td><td>Initial filing 1-3 weeks (drafting & verification)</td></tr>
                            <tr><td>Filing criminal complaint / FIR</td><td>Immediate to 3 days (depending on police response)</td></tr>
                            <tr><td>Bail application</td><td>1-7 days (depending on court schedule)</td></tr>
                            <tr><td>Arbitration claim</td><td>Preparation 2-6 weeks; hearing schedule varies</td></tr>
                        </tbody>
                    </table>

                    <h2>Why Choose Mundra Legal?</h2>
                    <div className="feature-grid">
                        <div className="feature-card"><i className="fas fa-user-tie" style={{color:'var(--primary-color)'}}></i><h4>Experienced Trial Advocates</h4><p style={{color:'var(--text-secondary)',margin:'6px 0 0'}}>Seasoned advocates across civil and criminal benches</p></div>
                        <div className="feature-card"><i className="fas fa-search" style={{color:'var(--primary-color)'}}></i><h4>Investigations & Forensics</h4><p style={{color:'var(--text-secondary)',margin:'6px 0 0'}}>Coordination with investigators and forensic experts</p></div>
                        <div className="feature-card"><i className="fas fa-shield-alt" style={{color:'var(--primary-color)'}}></i><h4>Client Confidentiality</h4><p style={{color:'var(--text-secondary)',margin:'6px 0 0'}}>Strict confidentiality and ethical handling of sensitive matters</p></div>
                        <div className="feature-card"><i className="fas fa-bolt" style={{color:'var(--primary-color)'}}></i><h4>Timely Representation</h4><p style={{color:'var(--text-secondary)',margin:'6px 0 0'}}>Urgent hearings and emergency applications handled promptly</p></div>
                    </div>

                    <h2>FAQs</h2>
                    <div className="highlight-box">
                        <h3><i className="fas fa-question-circle"></i> What if I need both civil and criminal remedies?</h3>
                        <p>We design parallel strategies: filing civil suits for relief and initiating criminal complaints where offences are suspected. Coordination ensures evidence is preserved and legal positions are aligned.</p>
                    </div>

                    <div className="highlight-box">
                        <h3><i className="fas fa-question-circle"></i> How quickly can I get an injunction?</h3>
                        <p>Interim relief timing depends on urgency and court availability. We prepare emergency applications and seek ex parte orders when necessary.</p>
                    </div>

                    <div style={{textAlign:'center',marginTop:'20px'}}>
                        <a href="#cc-contact" onClick={(e) => {e.preventDefault(); document.getElementById('cc-contact').scrollIntoView({behavior: 'smooth'})}} className="btn-primary" style={{maxWidth:'320px',display:'inline-block'}}>Request a Consultation</a>
                    </div>
                </article>

                <aside className="cc-sidebar">
                    <div className="sidebar-card">
                        <h3 style={{margin:'0 0 12px 0',color:'var(--primary-color)'}}>Get a Case Review</h3>
                        <p style={{color:'var(--text-secondary)',margin:'0 0 12px 0'}}>Brief us about the issue and we will advise next steps and likely remedies.</p>
                        <form id="cc-contact" onSubmit={handleFormSubmit}>
                            <input className="form-control" name="name" placeholder="Full name *" required />
                            <input className="form-control" name="email" type="email" placeholder="Email *" required />
                            <input className="form-control" name="phone" placeholder="Phone *" required />
                            <select className="form-control" name="caseType">
                                <option value="">Select case type</option>
                                <option value="civil">Civil</option>
                                <option value="criminal">Criminal</option>
                                <option value="family">Family / Matrimonial</option>
                                <option value="arbitration">Arbitration</option>
                            </select>
                            <textarea className="form-control" name="details" placeholder="Brief facts / urgency"></textarea>
                            <button className="btn-primary" type="submit"><i className="fas fa-paper-plane"></i> Submit</button>
                        </form>
                    </div>

                    <div className="sidebar-card">
                        <h4 style={{margin:'0 0 8px 0',color:'var(--primary-color)'}}>Emergency Help</h4>
                        <p style={{margin:'0 0 8px 0',color:'var(--text-secondary)'}}><i className="fas fa-phone-alt" style={{color:'var(--primary-gold)',marginRight:'8px'}}></i> Police / Emergency: 100</p>
                        <p style={{margin:'0 0 8px 0',color:'var(--text-secondary)'}}><i className="fas fa-phone" style={{color:'var(--primary-gold)',marginRight:'8px'}}></i> Mundra Helpline: <a href="tel:+919876543210" style={{color:'var(--primary-color)',textDecoration:'none'}}>+91 98765 43210</a></p>
                    </div>

                    <div className="sidebar-card">
                        <div style={{marginBottom:'12px'}}>
                            <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_ktwnwv5m.json" background="transparent" speed="1" style={{width:'100%',height:'160px'}} loop autoplay></lottie-player>
                        </div>
                        <div style={{fontWeight:700,color:'var(--primary-color)'}}>Experienced Trial Team</div>
                        <div style={{color:'var(--text-secondary)',fontSize:'0.95rem',marginTop:'8px'}}>Court appearances across high courts and lower benches.</div>
                    </div>
                </aside>
            </div>
        </section>
      </CivilAndCriminalContainer>
      <Footer />
    </>
  );
};

export default CivilAndCriminal;
