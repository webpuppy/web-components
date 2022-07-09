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

.wp-nav-logo {
	display: flex;
	place-content: center;
	padding: .35em;
}

.wp-nav-logo a,
.wp-nav-logo span {
	align-items: center;
	display: flex;
	place-content: center;
}

.wp-nav-logo span {
	font-size: 22px;
	line-height: 1.25em;
}

.wp-nav-logo a {
	color: inherit;
	padding-left: 2rem;
	text-decoration: none;
}

.wp-nav-list {
	align-items: center;
	display: flex;
	justify-content: space-evenly;
}
`;
