import styled from "styled-components";

export const PatentSection = styled.section`
	padding: 60px 20px;
	background: linear-gradient(180deg, #fff 0%, #fbfdff 100%);
	box-sizing: border-box;

	@media (max-width: 640px) {
		padding: 36px 12px;
	}
`;

export const PatentContainer = styled.div`
	max-width: 1280px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 360px;
	gap: 36px;
	align-items: start;
	padding: 0 16px;

	@media (max-width: 1000px) {
		grid-template-columns: 1fr 320px;
		gap: 28px;
	}

	@media (max-width: 900px) {
		grid-template-columns: 1fr;
		gap: 20px;
	}
`;

export const PatentMain = styled.main`
	background: white;
	padding: 44px 36px;
	border-radius: 18px;
	box-shadow: 0 16px 40px rgba(16,24,40,0.06);
	border: 1px solid rgba(16,24,40,0.04);

	@media (max-width: 900px) {
		padding: 24px 16px;
		border-radius: 12px;
	}

	h1 {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: clamp(1.9rem, 4.5vw, 2.8rem);
		margin: 0 0 12px 0;
		line-height: 1.05;
		background: linear-gradient(90deg, #1C2951 0%, #D4AF37 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	h2 {
		color: #1C2951;
		font-size: 1.25rem;
		margin-top: 20px;
		margin-bottom: 12px;
	}

	p {
		color: #475569;
		line-height: 1.7;
		margin-bottom: 12px;
		font-size: 1rem;
		word-break: break-word;
	}
`;

export const PatentByline = styled.div`
	color: #64748b;
	margin-bottom: 18px;
`;

export const ComparisonTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	margin: 18px 0;
	th, td { padding: 12px 10px; }
	th { background: linear-gradient(90deg,#D4AF37,#F4E9C1); color:#1C2951; text-align:left; }
	tr { border-bottom: 1px solid rgba(16,24,40,0.04); }
	tr:last-child { border-bottom: none; }
`;

export const FeatureGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(220px,1fr));
	gap: 16px;
	margin: 16px 0 8px;
`;

export const FeatureCard = styled.div`
	background: linear-gradient(180deg,#fff,#fbfbff);
	padding: 16px;
	border-radius: 12px;
	box-shadow: 0 6px 18px rgba(16,24,40,0.04);
	border: 1px solid rgba(16,24,40,0.04);
	text-align: left;

	h4 { margin: 0 0 8px; color:#1C2951; }
	p { margin: 0; color:#475569; font-size:0.98rem }
`;

export const PatentSidebar = styled.aside`
	position: relative;
	width: 100%;

	@media (max-width: 900px) {
		width: 100%;
	}
`;

export const SidebarWrapper = styled.div`
	position: sticky;
	top: 110px;
	max-height: calc(100vh - 140px);
	overflow-y: auto;
	padding: 8px;
	z-index: 6;

	&::-webkit-scrollbar { width: 8px }
	&::-webkit-scrollbar-thumb { background: #D4AF37; border-radius: 6px }

	@media (max-width: 900px) {
		position: relative;
		top: 0;
		max-height: none;
		overflow: visible;
	}
`;

export const HighlightBox = styled.div`
	background: linear-gradient(180deg,#fff8e6, #fff);
	padding: 14px;
	border-radius: 10px;
	border: 1px solid rgba(212,175,55,0.12);
	margin-bottom: 14px;
`;

export const QuickLinksBar = styled.div`
	display:flex; gap:8px; flex-wrap:wrap; margin-bottom:12px;
	button{ background:#1C2951;color:#fff;border:none;padding:8px 10px;border-radius:8px;cursor:pointer}
`;

export const BackToTopButton = styled.button`
	position: fixed;
	right: 20px;
	bottom: 24px;
	background: #1C2951;
	color: white;
	border: none;
	padding: 10px 12px;
	border-radius: 8px;
	box-shadow: 0 6px 18px rgba(0,0,0,0.12);
	cursor: pointer;
	z-index: 9999;
	opacity: 0; transform: translateY(6px); transition: all .2s ease;

	&.visible { opacity: 1; transform: translateY(0); }
`;

export default {};
