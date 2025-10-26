import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SidebarForm from '../../components/SidebarForm';
import LottieAnimation from '../../components/LottieAnimation';
import ServiceHero from '../../components/ServiceHero';
import '../../pages/services/styles/PublicLimitedCompany.css';

const PublicLimitedCompany = () => {
	return (
		<>
			<Header />

					<div>
						<ServiceHero
							title={"Public Limited Company Registration "}
							subtitle={"A Public Limited Company (PLC) may be the ideal business structure for large-scale ventures. Mundra Legal helps you register and comply with ease."}
							breadcrumb={"Public Limited Company"}
						/>

						<section className="legal-section">
							<div className="legal-container">
								<main className="legal-main">
						<section className="service-section">
							<h2>What is a Public Limited Company?</h2>
							<p>A Public Limited Company (PLC) is a business entity whose shares are publicly traded on the stock market. Governed under the Companies Act, 2013, PLCs allow investment from the general public through an Initial Public Offering (IPO).</p>

							<h3>Key Characteristics</h3>
							<ul>
								<li><strong>Separate Legal Entity</strong> – PLCs exist independently of their shareholders.</li>
								<li><strong>Limited Liability</strong> – Shareholders' personal assets are protected.</li>
								<li><strong>Regulatory Compliance</strong> – Required to submit financial statements, maintain transparency, and adhere to corporate governance standards.</li>
								<li><strong>Public Investment</strong> – Shares are offered to the general public, making it easier to raise capital.</li>
							</ul>
						</section>

						<section className="service-section">
							<h2>Requirements to Start a Public Limited Company</h2>
							<p>Starting a PLC requires strict compliance with legal regulations:</p>
							<ul className="plc-bullets">
								<li>Minimum 7 Members — As shareholders for company formation</li>
								<li>Minimum 3 Directors — To oversee company operations and governance</li>
								<li>Minimum Capital — ₹5 lakh paid-up capital requirement</li>
								<li>DSC &amp; DIN — Digital Signature Certificates and Director Identification Numbers for all directors</li>
								<li>Company Name Approval — Ensure it follows ROC guidelines and is unique</li>
								<li>MoA &amp; AoA — Memorandum and Articles of Association outlining objectives and company rules</li>
								<li>Supporting Documents — Form DIR-12, identity/address proofs, board resolutions</li>
								<li>Registration Fee — Payment as per ROC requirements</li>
								<li>Business Commencement — Certificate marking official start of operations</li>
							</ul>
						</section>

						<section className="service-section">
							<h2>Advantages of a Public Limited Company</h2>
							<ol className="plc-bullets">
								<li><strong>Limited Liability Protection</strong> — Shareholders' personal assets remain secure against company debts and liabilities.</li>
								<li><strong>Access to Capital &amp; Liquidity</strong> — Raise funds via public share issuance, IPOs, or debentures. Shares are easily transferable, providing flexibility to investors.</li>
								<li><strong>Professional Management</strong> — Managed by a board of directors and senior executives, ensuring strategic decisions and corporate governance.</li>
								<li><strong>Enhanced Government Support</strong> — Eligible for subsidies, tax incentives, and economic development initiatives.</li>
								<li><strong>Trust &amp; Reputation</strong> — Being publicly listed increases credibility with investors, banks, and stakeholders.</li>
								<li><strong>Employee Incentives</strong> — PLCs can offer ESOPs, RSUs, and other equity-based incentives to attract and retain talent.</li>
							</ol>
						</section>

						<section className="service-section">
							<h2>Public vs Private Limited Company</h2>
							<table className="plc-compare-table" aria-label="Public vs Private Limited Company comparison">
								<thead>
									<tr>
										<th>Parameter</th>
										<th>Public Limited Company</th>
										<th>Private Limited Company</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Definition</td>
										<td>Listed on stock exchange, shares publicly tradable</td>
										<td>Closely held, not publicly traded</td>
									</tr>
									<tr>
										<td>Minimum Members</td>
										<td>7</td>
										<td>2</td>
									</tr>
									<tr>
										<td>Minimum Directors</td>
										<td>3</td>
										<td>2</td>
									</tr>
									<tr>
										<td>Paid-Up Capital</td>
										<td>₹5 lakh</td>
										<td>₹1 lakh</td>
									</tr>
									<tr>
										<td>Public Subscription</td>
										<td>Allowed</td>
										<td>Not allowed</td>
									</tr>
									<tr>
										<td>Director Retirement</td>
										<td>⅔ retire by rotation</td>
										<td>No mandatory rotation</td>
									</tr>
								</tbody>
							</table>
						</section>

						<section className="service-section">
							<h2>Documents Required for PLC Registration</h2>
							<ul>
								<li>Memorandum of Association (MoA)</li>
								<li>Articles of Association (AoA)</li>
								<li>DIN &amp; DSC of directors</li>
								<li>Identity &amp; address proofs</li>
								<li>Form DIR-12, INC-7, INC-22</li>
								<li>Board resolutions approving incorporation</li>
								<li>PAN &amp; TAN of the company</li>
								<li>Bank statements &amp; registered office proof</li>
								<li>Certificate of Incorporation (COI) &amp; Business Commencement Certificate</li>
							</ul>
						</section>

						<section className="service-section">
							<h2>Step-by-Step Registration Process</h2>
							<ol className="plc-bullets">
								<li><strong>Obtain DIN</strong> — Director Identification Number via MCA portal for all directors.</li>
								<li><strong>Acquire DSC</strong> — Digital signature for signing documents electronically.</li>
								<li><strong>Draft MoA &amp; AoA</strong> — Define company objectives and rules governing operations.</li>
								<li><strong>Company Name Approval</strong> — File with ROC for unique name verification and approval.</li>
								<li><strong>Submit Incorporation Forms</strong> — File INC-7, INC-22, DIR-12 with required documentation.</li>
								<li><strong>Pay Registration Fees</strong> — Online payment of government and registration fees.</li>
								<li><strong>Verification by ROC</strong> — Upon approval, Certificate of Incorporation (COI) is issued.</li>
								<li><strong>Commence Business</strong> — Apply for Business Commencement Certificate to start operations.</li>
							</ol>
						</section>

						<section className="service-section">
							<h2>Additional Advantages of PLCs</h2>
							<ul>
								<li><strong>Market Liquidity</strong> — Shares can be bought and sold freely on stock exchanges.</li>
								<li><strong>Employee Benefits</strong> — Flexible equity plans, ESOPs, long-term incentive plans.</li>
								<li><strong>Enhanced Reputation</strong> — Public scrutiny and regular reporting build trust with stakeholders.</li>
								<li><strong>Expansion Opportunities</strong> — Access to large-scale capital for growth, R&amp;D, acquisitions, or entering new markets.</li>
							</ul>
						</section>

						<section className="service-section">
							<h2>Risks of Becoming a Public Limited Company</h2>
							<ul>
								<li><strong>High Compliance Costs</strong> — Statutory and financial reporting overhead requires dedicated resources.</li>
								<li><strong>Loss of Control</strong> — Majority shareholders may influence decisions, reducing founder control.</li>
								<li><strong>Market Scrutiny</strong> — Public and media attention on revenue, profits, and management decisions.</li>
							</ul>
						</section>

						<section className="service-section">
							<h2>Should Private Companies Go Public?</h2>
							<p>Going public is ideal for mature companies with stable revenue, market leadership, and growth potential. It offers access to capital and employee incentives but comes with regulatory scrutiny and governance responsibilities.</p>

							<h3>Consider the following factors before going public:</h3>
							<ul>
								<li>Revenue Stability – Consistent and predictable revenue streams</li>
								<li>Market Position – Strong market presence and competitive advantage</li>
								<li>Growth Plans – Clear expansion strategy requiring capital</li>
								<li>Governance Readiness – Ability to comply with regulatory requirements</li>
								<li>Shareholder Expectations – Willingness to be accountable to public investors</li>
							</ul>
						</section>

						<div className="section-divider" />

						<section className="service-section">
							<h2>Mundra Legal – Your PLC Registration Partner</h2>
							<p>At Mundra Legal, we simplify the entire process of PLC incorporation with:</p>
							<ul>
								<li>End-to-End Consultation — Complete guidance and documentation support throughout the registration process.</li>
								<li>Filing MoA, AoA &amp; Forms — Professional drafting and submission of incorporation documents.</li>
								<li>DIN, DSC, PAN, TAN — Assistance with all statutory requirements and ROC approvals.</li>
								<li>IPO &amp; Governance Guidance — Expert advice on compliance, IPO readiness, and corporate governance.</li>
							</ul>

							<div className="stats-row">
								<div className="stat-card"><strong>500+</strong><span>Companies Registered</span></div>
								<div className="stat-card"><strong>15-20</strong><span>Days Processing</span></div>
								<div className="stat-card"><strong>100%</strong><span>Legal Compliance</span></div>
								<div className="stat-card"><strong>24/7</strong><span>Expert Support</span></div>
							</div>
						</section>

						<section className="service-section" aria-labelledby="faqs">
							<h2 id="faqs">Frequently Asked Questions (FAQs)</h2>
							<h3>Q1. What is a Public Limited Company?</h3>
							<p>A PLC is a business entity whose shares are publicly traded and offers limited liability to its shareholders.</p>

							<h3>Q2. How many members are required for a PLC?</h3>
							<p>Minimum 7 members and 3 directors are required to form a Public Limited Company.</p>

							<h3>Q3. What is the minimum capital requirement?</h3>
							<p>₹5 lakh paid-up capital is required to start a PLC in India.</p>

							<h3>Q4. Can PLC shares be traded publicly?</h3>
							<p>Yes, PLC shares can be listed on a stock exchange and freely traded by investors.</p>

							<h3>Q5. What are the compliance requirements?</h3>
							<p>PLCs must file annual reports, audits, and adhere to corporate governance standards as per the Companies Act, 2013.</p>
						</section>

									</main>

									<aside className="legal-sidebar" aria-label="Contact and enquiry">
										<div className="sidebar-card">
											<div className="sidebar-header"><i className="fas fa-briefcase"></i> Register your Public Limited Company</div>
											<div className="sidebar-content">
												<p className="small-muted">Contact Mundra Legal and take the first step toward growth and credibility.</p>
												<a id="contact" href="#contact" className="btn-primary" style={{marginTop:8}}>Get Started</a>
											</div>
										</div>

										<div className="sidebar-card">
											<div className="sidebar-content">
												<SidebarForm />
											</div>
										</div>
									</aside>
								</div>
							</section>
						</div>

			<Footer />
		</>
	);
};

export default PublicLimitedCompany;

