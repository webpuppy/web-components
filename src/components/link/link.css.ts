import { css } from '../../globals/exports';
export { CSS_RESETS } from '../../globals/env.css';

export const LINK_STYLES = css`
:host {
	display: inline-block;
	min-width: fit-content;
}

a {
	color: inherit;
	text-decoration: none;
	transition: all 380ms ease-in-out;
}

a:hover {
	text-decoration: underline;
}
`;
