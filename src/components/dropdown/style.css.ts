import { css } from 'lit-exports';

export const ddlItemStyles = css`
:host {
	background-color: var(--wp-body-bg);
	display: block;
	line-height: var(--wp-content-line);
	padding: .325em;
	position: relative;
	z-index: 3;
}

.wp-dropdown-item {
	display: block;
	line-height: var(--wp-content-line);
	position: relative;
	transition: all 450ms ease;
	z-index: 3;
}
`;

export default css`
:host {
	cursor: pointer;
	display: inline-block;
	min-width: fit-content;
	pointer-events: fill;
	position: relative;
	text-overflow: ellipsis;
}

.wp-dropdown {
	border-color: transparent;
	border-style: solid;
	border-radius: var(--wp-border-radius);
	border-width: .05em;
	box-shadow: var(--shadow-smallest);
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
	background-color: var(--wp--body-bg);
	opacity: 0;
	min-height: 80px;
	position: absolute;
	transition: all 450ms ease;
}

.wp-dropdown-menu--active {
	animation: fade-in 200ms ease;
	opacity: 1;
	z-index: 3;
}

@keyframes fade-in {
	0% {
		opacity: 0;
	}
}
`;
