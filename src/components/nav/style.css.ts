import { css } from '../../globals/exports';

export const NAV_STYLES = css`
:host {
	cursor: pointer;
	justify-content: center;
	line-height: var(--wp-content-line);
	margin: 0 auto;
	height: var(--wp-top-nav-height);
	position: fixed;
	width: 100vw;
	z-index: 999;
}

.nav-item {
	color: inherit;
	text-decoration: none;
}

wp-nav wp-link {
	color: inherit;
	position: relative;
	z-index: 999;
}

.drawer {
	animation: slide-drawer 200ms ease;
	background-color: var(--wp-body-bg);
	color: var(--wp-body-color);
	height: 100%;
	position: fixed;
	inset: 0;
	transform: translateX(0);
	width: 100%;
	z-index: 999;
}

.drawer wp-link {
	display: block;
	padding-left: 1.25em;
}

.close {
	background-color: transparent;
	border-color: transparent;
	border-radius: var(--wp-border-radius);
	cursor: pointer;
	color: var(--wp-red);
	display: block;
	line-height: var(--wp-content-line);
	float: right;
	font-size: 28px;
	padding: .25em;
}

@keyframes slide-drawer {
	0% {
		transform: translateX(-5rem);
	}
}

.wp-nav {
	align-items: center;
	border-radius: var(--wp-border-radius);
	display: grid;
	grid-template-columns: 25% 75%;
	justify-content: space-between;
	min-height: var(--wp-top-nav-height);
	position: fixed;
	width: 100%;
	z-index: 9;
}

.wp-nav--scrolled {
	background-color: var(--wp-calm-blue);
	border-radius: 0;
	top: 0;
	color: var(--wp-base-white);
	transition: background-color 500ms ease;
	z-index: 999;
}

.wp-nav-item--scrolled {
	color: var(--wp-base-white);
}

.wp-nav-logo {
	display: flex;
	place-content: center;
	padding: .35em;
}

.wp-nav-logo a {
	color: inherit;
	display: flex;
}

.wp-nav-logo a,
.wp-nav-logo span {
	align-items: center;
	place-content: center;
}

.wp-nav-logo span {
	display: none;
	font-size: 22px;
	font-weight: 500;
	line-height: 1.25em;
}

.wp-nav-logo a {
	color: inherit;
	padding-left: 2rem;
	text-decoration: none;
}

.wp-nav-list {
	display: none;
}

.wp-nav-burger {
	display: grid;
	justify-content: end;
	padding-right: 2rem;
}

.wp-nav-burger::after {
	content: "☰";
	font-size: 28px;
}

::slotted(a) {
	color: inherit;
	text-decoration: none;
}

@media(min-width: 720px) {
	.wp-nav-list {
		align-items: center;
		display: flex;
		justify-content: space-evenly;
	}

	.wp-nav-burger {
		display: none;
	}

	@supports not(display: flex) {

		.wp-nav-logo span {
			display: grid;
		}

		.wp-nav-list {
			display: grid;
		}
	}
}
`;
