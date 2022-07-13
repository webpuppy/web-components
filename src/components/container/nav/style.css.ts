import { css } from '../../../globals/exports';

export const DEFAULT_HDR_STYLES = css`
:host {
	cursor: pointer;
	display: block;
	position: relative;
	top: 0;
}

.wp-nav {
	align-items: center;
	background-color: var(--wp-navy);
	color: #fff;
	display: grid;
	grid-template-columns: 25% 75%;
	justify-content: space-between;
	position: relative;
	top: 0;
}

.wp-nav--full {
	width: 100vw;
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
	background-color: var(--wp-navy);
	display: grid;
	position: absolute;
	top: 5rem;
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
