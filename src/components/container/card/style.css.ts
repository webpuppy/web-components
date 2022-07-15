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
	background-color: var(--wp-ocean);
	color: var(--wp-btn-txt-00);
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

::slotted(p),
::slotted(wp-text) {
	background-color: var(--wp-white);
	border-color: var(--wp-ocean);
	border-style: solid;
	border-width: .15em;
	color: var(--wp-base-black);
	margin-block: 0;
	padding: 1rem;
}

@media(prefers-reduced-motion: no-preference) {
	.wp-card:hover {
		box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
	}
}
`;
