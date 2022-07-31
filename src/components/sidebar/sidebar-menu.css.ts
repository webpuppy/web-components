import { css } from '../../globals/exports';

export default css`
:host {
	display: block;
	line-height: var(--wp-content-line);
	font-size: 15px;
	text-rendering: optimizeLegibility;
	text-size-adjust: auto;
	transition:
	background-color 500ms,
	color 600ms,
	box-shadow 500ms,
	text-shadow 300ms,
	all 350ms ease-in-out;
}

.wp-sidebar-menu {
	line-height: var(--wp-content-line);
	font-size: 15px;
	text-rendering: optimizeLegibility;
	text-size-adjust: auto;
	transition:
	background-color 500ms,
	color 600ms,
	box-shadow 500ms,
	text-shadow 300ms,
	all 350ms ease-in-out;
}

.wp-sidebar-menu__title {
	font-size: 14px;
	padding: .375em;
}

.wp-sidebar-menu__wrapper {
	animation: fade-in 300ms ease;
	opacity: 1;
}

@keyframes fade-in {
	0% {
		opacity: 0;
	}
}

span {
	display: grid;
	grid-template-columns: 75% 25%;
}

span button {
	background-color: transparent;
	border-color: transparent;
	border-radius: var(--wp-border-radius);
	cursor: pointer;
	line-height: var(--wp-content-line);
	padding: .25em;
	transition: all 500ms ease;
}

span button:hover {
	background-color: rgba(120,120,120,0.125);
}

`;
