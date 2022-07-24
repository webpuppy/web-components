import { css } from '../../globals/exports';

export const NAV_STYLES = css`
:host {
	cursor: pointer;
	display: block;
	height: var(--wp-top-nav-height);
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
}

.wp-nav {
	align-items: center;
	background-color: var(--wp-navy-blue);
	color: var(--wp-white);
	display: grid;
	grid-template-columns: 25% 75%;
	justify-content: space-between;
	min-height: var(--wp-top-nav-height);
	position: relative;
	top: 0;
	left: 0;
}

@media(prefers-color-scheme: dark) {
	.wp-nav {
		background-color: var(--wp-white);
		color: var(--wp-navy-blue);
	}
}

.wp-nav--fixed {
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	z-index: 999;
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
	background-color: var(--wp-navy-blue);
	display: grid;
	position: absolute;
	top: var(--wp-top-nav-height);
	padding: 1rem;
	width: 100vw;
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
