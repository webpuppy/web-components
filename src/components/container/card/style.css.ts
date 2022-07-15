import { css } from '../../../globals/exports';

export default css`
:host, .wp-card {
	--br: 1rem;
	cursor: pointer;
	display: block;
	transition: 390ms ease-in-out;
	width: 320px;
}

.wp-card {
	background-color: var(--wp-navy);
	color: var(--wp-btn-txt-00);
	margin-bottom: 2rem;
}

figure img {
	margin: 0 auto;
	max-width: 100%;
}

.wp-card--rounded {
	border-radius: var(--br);
}

.wp-card-title {
	text-align: center;
}

.wp-card-slot {
	background-color: var(--wp-white);
	border-radius: 2rem;
	box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
	color: var(--wp-base-black);
	padding: 1.5rem;
	position: relative;
	top: 2rem;
}

@media(prefers-reduced-motion: no-preference) {
	.wp-card:hover {
		box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
	}
}
`;
