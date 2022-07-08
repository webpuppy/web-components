import { css } from '../../globals/exports';

export const DEFAULT_HDR_STYLES = css`
:host {
	cursor: pointer;
	display: block;
	position: relative;
}

.wp-nav {
	display: grid;
	grid-template-columns: 25% 75%;
}

.wp-nav-logo a {
	display: flex;
	place-content: center;
}

.wp-nav-list {
	align-items: center;
	display: flex;
	justify-content: space-evenly;
}
`;
