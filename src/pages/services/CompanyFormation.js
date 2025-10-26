import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServiceHero from '../../components/ServiceHero';
import SidebarForm from '../../components/SidebarForm';
import { Player } from '@lottiefiles/react-lottie-player';

const PageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	background: #fff;
`;

const ContentSection = styled.main`
	max-width: 1400px;
	width: 100%;
	margin: 0 auto;
	padding: 48px 20px 80px;
	box-sizing: border-box;

	@media (max-width: 768px) {
		padding: 36px 16px 60px;
	}

	@media (max-width: 480px) {
		padding: 28px 12px 48px;
	}
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 360px;
	gap: 32px;
	align-items: start;

	@media (max-width: 1024px) {
		grid-template-columns: 1fr 320px;
	}

	@media (max-width: 820px) {
		grid-template-columns: 1fr;
	}
`;

const Article = styled.article`
	background: transparent;

	h2 {
		font-family: 'Playfair Display', serif;
		font-size: 1.8rem;
		margin-bottom: 12px;
		color: #1C2951;
	}

	p {
		color: #334155;
		line-height: 1.75;
		margin-bottom: 16px;
		font-size: 1rem;
	}

	ul {
		margin: 8px 0 20px 20px;
		color: #334155;
		li {
			margin-bottom: 8px;
		}
	}

	.cta-row {
		display: flex;
		gap: 12px;
		margin-top: 18px;

		a, button {
			background: linear-gradient(135deg,#D4AF37 0%,#E6C57F 100%);
			color: #1C2951;
			padding: 10px 18px;
			border-radius: 10px;
			font-weight: 700;
			text-decoration: none;
			border: none;
			cursor: pointer;
		}
	}
`;

	const VisualGrid = styled.div`
		display: grid;
		grid-template-columns: 1fr 360px;
		gap: 24px;
		align-items: center;

		@media (max-width: 820px) {
			grid-template-columns: 1fr;
		}

		.visual-box {
			display: flex;
			align-items: center;
			justify-content: center;
			background: #f8fafc;
			border-radius: 12px;
			padding: 18px;
			box-shadow: 0 8px 24px rgba(28,41,81,0.06);
			border: 1px solid rgba(28,41,81,0.04);
		}

		.text-col {
			padding-right: 6px;
		}
	`;

	const TrustRow = styled.div`
		display: flex;
		gap: 12px;
		align-items: center;
		margin-top: 18px;

		img {
			height: 40px;
			width: auto;
		}
	`;

const Side = styled.aside`
	position: relative;
	align-self: start;

	/* Make sidebar sticky on wider screens so the form scrolls with the user */
	@media (min-width: 821px) {
		position: sticky;
		top: 120px; /* leave space for fixed header */
		height: calc(100vh - 140px);
	}

	@media (max-width: 820px) {
		position: relative;
		height: auto;
	}

	.sidebar-inner {
		height: 100%;
		overflow: auto;
		padding-right: 6px; /* allow inner scroll without layout shift */
	}
`;

const CompanyFormation = () => {
	return (
		<PageWrapper>
			<Header />

			<ServiceHero
				title="Company Formation"
				subtitle="Expert guidance to register and structure your business — Private Limited, OPC, LLP and more. Fast, reliable & compliant."
				breadcrumb="Company Formation"
			/>

			<ContentSection>
							<Grid>
								<Article>
									<VisualGrid>
										<div className="text-col">
											<h2>Start your company the right way</h2>
											<p>
												We help entrepreneurs and businesses with end-to-end company formation
												services. From choosing the right entity and drafting incorporation
												documents to compliance and government filings — our team simplifies
												the process so you can focus on growth.
											</p>

											<h3>Why choose us?</h3>
											<ul>
												<li>Expert company secretaries & legal advisors with hands-on experience</li>
												<li>Fast paperwork handling and government liaison</li>
												<li>Transparent pricing and clear timelines</li>
												<li>Post-incorporation compliance support — so you start right</li>
											</ul>
										</div>

										<div className="visual-box" aria-hidden>
											{/* Local lottie animation from public assets Drafts */}
											<Player
												src="/assets/Drafts/registration.json"
												autoplay
												loop
												style={{ height: 260, width: '100%', maxWidth: 320 }}
											/>
										</div>
									</VisualGrid>

									<h3>Our company formation services include:</h3>
									<ul>
										<li>Company type advisory (Private Limited, Public Limited, OPC, LLP)</li>
										<li>Name availability & reservation</li>
										<li>Drafting MOA/AOA and incorporation documents</li>
										<li>DIN & DSC filing, director onboarding</li>
										<li>GST, PAN, TAN registrations and initial compliance setup</li>
									</ul>

									<h3>Simple 4-step process</h3>
									<ol>
										<li>Choose entity & confirm name</li>
										<li>Prepare documents, obtain DSC & DIN for directors</li>
										<li>Submit incorporation filing and follow-up</li>
										<li>Receive certificate & get post-incorporation support</li>
									</ol>

									<p>
										Typical timeline depends on the chosen entity and government processing
										times — most Private Limited registrations complete within 7–14 working
										days after submission. Our package options include documentation,
										stakeholder advisory and 1-year post-incorporation compliance support.
									</p>

									<div className="cta-row">
										<a href="/contact">Request a Consultation</a>
										<a href="tel:+918506874280">Call: +91 85068 74280</a>
									</div>

									<TrustRow>
										<img src="/assets/google-icon-svgrepo-com.svg" alt="Trusted by Google" />
										<div>
											<strong>Trusted by businesses across India</strong>
											<div style={{ color: '#64748b', fontSize: '0.95rem' }}>Over 1,200+ companies assisted</div>
										</div>
									</TrustRow>
								</Article>

											<Side>
												<div className="sidebar-inner">
													<SidebarForm />
												</div>
											</Side>
							</Grid>
			</ContentSection>

			<Footer />
		</PageWrapper>
	);
};

export default CompanyFormation;
