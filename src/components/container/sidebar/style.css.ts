import { css } from '../../../globals';


export default css`
:host {
	--wp-sidebar-width: 180px;
	background-color: var(--wp-btn-txt-00);
	box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
	display: block;
	height: 100vh;
	left: 0;
	position: fixed;
	top: 0;
	transition: box-shadow 500ms ease-in-out;
}

.wp-sbr-hdr, .wp-sbr-hdr a {
	align-items: center;
	color: inherit;
	display: flex;
	justify-content: space-evenly;
	text-decoration: none;
}

.wp-sbr-hdr h4 {
	font-weight: 400;
}

@media(min-width: 720px) {
	:host, aside {
		width: var(--wp-sidebar-width);
	}
}
`;

export const WP_SIDEBAR_ITEM = css`

:host {
	display: block;
	font-size: 15px;
	line-height: 1.8em;
	max-height: 50px;
	padding-left: 1.25em;
	text-rendering: optimizeLegibility;
	text-size-adjust: auto;
	transition:
	color 600ms,
	box-shadow 500ms,
	text-shadow 300ms,
	left 500ms ease-in-out;
}

.wp-sbr-item {
	border-radius: .25rem;
	color: inherit;
	left: 0;
	position: relative;
	text-decoration: none;
	transition:
	color 600ms,
	box-shadow 500ms,
	text-shadow 300ms,
	left 500ms ease-in-out;
	padding: .375em;
}

.wp-sbr-item:hover {
	background-color: rgba(120,120,120,0.15);
}

.wp-sbr-item--active {
	background-color: rgba(120,120,120,0.15);
	color: var(--wp-btn-primary);
	text-shadow: var(--wp-txt-shadow);
	left: .25em;
}

@media(prefers-reduced-motion: no-preference) {
	.wp-sbr-item:hover {
		background-color: rgba(120,120,120,0.15);
		color: var(--wp-btn-primary);
		text-shadow: var(--wp-txt-shadow);
		left: .25em;
	}
}
`;
