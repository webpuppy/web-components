import { css } from 'lit-exports';

export default css`

:host {
	display: block;
	font-size: 15px;
	line-height: var(--wp-content-line);
	max-height: 50px;
	text-rendering: optimizeLegibility;
	text-size-adjust: auto;
	transition:
	background-color 500ms,
	color 600ms,
	box-shadow 500ms,
	text-shadow 300ms,
	left 500ms, all 350ms ease-in-out;
}

.wp-sbr-item {
	border-radius: var(--wp-border-radius);
	display: inline-block;
	left: 0;
	margin: 1em;
	min-width: 80%;
	position: relative;
	text-decoration: none;
	transition:
	background-color 500ms,
	color 600ms,
	box-shadow 500ms,
	text-shadow 300ms,
	left 500ms, all 350ms ease-in-out;
	padding: .375em;
}



.wp-sbr-item:hover {
	background-color: rgba(120,120,120,0.15);
}

.wp-sbr-item--active {
	background-color: rgba(120,120,120,0.15);
	color: var(--wp-btn-primary);
	text-shadow: var(--wp-txt-shadow);
}

@media(prefers-reduced-motion: no-preference) {
	.wp-sbr-item:hover {
		background-color: rgba(120,120,120,0.15);
		color: var(--wp-btn-primary);
		text-shadow: var(--wp-txt-shadow);
	}
}

@media(min-width: 720px) {
	.wp-sbr-item {
		display: block;
	}
}
`;
