import { css } from '../../globals/exports';

export const NAV_STYLES = css`
:host {
	cursor: pointer;
	display: block;
	line-height: var(--wp-content-line);
	height: var(--wp-top-nav-height);
	position: relative;
	width: 100%;
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
	color: var(--wp-danger);
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
	background-color: var(--wp-btn-base);
	box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
	color: var(--wp-white);
	display: grid;
	grid-template-columns: 25% 75%;
	justify-content: space-between;
	min-height: var(--wp-top-nav-height);
	position: relative;
	z-index: 9;
}

@media(prefers-color-scheme: dark) {
	.wp-nav {
		background-color: var(--wp-white);
		color: var(--wp-primary);
	}
}

.wp-nav-logo {
	display: flex;
	place-content: center;
	padding: .35em;
}

.wp-nav-logo a {
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

.wp-nav-list--mobile-open {
	background-color: var(--wp-btn-base);
	display: grid;
	position: absolute;
	top: var(--wp-top-nav-height);
	padding: .5em 0 .25em 1em;
	width: calc(100% - 1em);
	z-index: 999;
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
