import { css } from 'lit-exports';

export default css`
:host {
	display: block;
	line-height: var(--wp-content-line);
}
.wp-carousel-item {
	border-radius: var(--wp-border-radius);
	border-color: transparent;
	border-style: solid;
	border-width: 2px;
	box-shadow: var(--shadow-smallest);
	cursor: pointer;
	line-height: var(--wp-content-line);
	padding: .78em;
	transition: all 380ms ease;
}
`;
