import styled from 'styled-components';

export const OpcSection = styled.section`
	padding: 3.5rem 0;
	background: linear-gradient(180deg, rgba(244,233,193,0.06), #fff 40%);
`;

export const OpcContainer = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 2rem;
	display: grid;
	grid-template-columns: 1fr 340px;
	gap: 36px;

	@media (max-width: 900px) {
		grid-template-columns: 1fr;
		padding: 0 1rem;
	}
`;

export const OpcMain = styled.main`
	background: white;
	padding: 32px;
	border-radius: 12px;
	box-shadow: 0 10px 30px rgba(28,41,81,0.05);
`;

export const Byline = styled.p`
	color: #64748b;
	line-height: 1.7;
	margin-bottom: 1rem;
`;

export const ComparisonTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	margin: 1rem 0 2rem;

	th, td {
		padding: 12px 10px;
		border: 1px solid rgba(28,41,81,0.06);
		text-align: left;
	}

	thead th {
		background: var(--light-gold);
		color: var(--primary-color);
		font-weight: 700;
	}
`;

export const OpcSidebar = styled.aside`
	position: sticky;
	top: 110px;
	align-self: start;

	@media (max-width: 900px) {
		position: relative;
		top: auto;
	}
`;

export const SidebarWrapper = styled.div`
	.sidebar-card {
		width: 100%;
	}
`;

export const QuickLinksNav = styled.nav`
	display: flex;
	gap: 8px;
	flex-wrap: wrap;
	margin-bottom: 12px;

	a {
		display: inline-block;
		padding: 8px 12px;
		background: var(--secondary-color);
		color: var(--primary-color);
		border-radius: 8px;
		text-decoration: none;
		font-weight: 700;
	}
`;

export const BackToTopButton = styled.button`
	position: fixed;
	bottom: 2rem;
	right: 2rem;
	width: 48px;
	height: 48px;
	background: var(--gradient-secondary);
	color: var(--primary-color);
	border: none;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 6px 18px rgba(28,41,81,0.08);
	opacity: 0;
	visibility: hidden;
	transform: translateY(20px);
	transition: all 0.25s ease;

	&.visible {
		opacity: 1;
		visibility: visible;
		transform: translateY(0);
	}
`;

export default {};
