import { css } from 'lit-exports';

export const ddlItemStyles = css`
:host {
	background-color: var(--wp-gray);
	border-radius: var(--wp-border-radius);
	color: var(--wp-white);
	display: block;
	line-height: var(--wp-content-line);
	padding: .15em 0;
	position: relative;
	z-index: 3;
}

.wp-dropdown-item {
	border-radius: var(--wp-border-radius);
	cursor: pointer;
	display: block;
	line-height: var(--wp-content-line);
	padding: .35em;
	position: relative;
	transition: all 450ms ease;
	z-index: 3;
}

.wp-dropdown-item:hover {
	background-color: rgba(120,120,120,0.15);
}
`;

export default css`
:host {
	background-color: var(--wp-body-bg);
	border-radius: var(--wp-border-radius);
	color: var(--wp-body-color);
	cursor: pointer;
	display: inline-block;
	line-height: var(--wp-content-line);
	margin-bottom: 2em;
	min-width: fit-content;
	pointer-events: fill;
	position: relative;
	text-overflow: ellipsis;
}

.wp-dropdown {
	background-color: inherit;
	border-color: transparent;
	border-style: solid;
	border-radius: var(--wp-border-radius);
	border-width: .05em;
	box-shadow: var(--shadow-smallest);
	color: currentColor;
	padding: .65em .35em;
	transition: all 450ms ease;
}

.wp-dropdown:hover {
	border-color: var(--shadow-color);
}

.wp-dropdown:active,
.wp-dropdown:focus {
	box-shadow: var(--shadow-extra-small);
}

.wp-dropdown--xs,
.wp-dropdown--xs .wp-dropdown-menu {
	font-size: 12px;
	width: 100px;
}

.wp-dropdown--sm,
.wp-dropdown--sm .wp-dropdown-menu {
	font-size: 14px;
	width: 180px;

	@media(max-width: 180px) {
		width: 90px;
	}
}

.wp-dropdown--md,
.wp-dropdown--md .wp-dropdown-menu {
	width: 320px;

	@media(max-width: 320px) {
		width: 180px;
	}
}

.wp-dropdown--lg,
.wp-dropdown--lg .wp-dropdown-menu {
	width: 480px;
	@media(max-width: 480px) {
		width: 240px;
	}
}

.wp-dropdown--xl,
.wp-dropdown--xl .wp-dropdown-menu {
	width: 720px;
	@media(max-width: 720px) {
		width: 360px;
	}
}

.wp-dropdown-menu {
	background-color: var(--wp-gray);
	border-radius: var(--wp-border-radius);
	color: var(--wp-white);
	left: 0;
	line-height: var(--wp-content-line);
	opacity: 0;
	min-height: 80px;
	padding: .65em .35em;
	position: absolute;
	top: 2.65em;
	transition: all 450ms ease;
}

.wp-dropdown-menu--active {
	animation: fade-down 300ms ease;
	opacity: 1;
	transform: translateY(0);
	z-index: 3;
}

@keyframes fade-down {
	0% {
		opacity: 0;
		transform: translateY(-.5rem);
	}
}
`;
