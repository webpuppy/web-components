import { css } from 'lit-exports';

export default css`
:host {
	cursor: pointer;
	font-kerning: normal;
	line-height: var(--wp-content-line);
	pointer-events: all;
	position: relative;
	text-rendering: optimizeLegibility;
	text-size-adjust: auto;
}

.wp-editable-list__item {
	border-radius: var(--wp-border-radius);
	box-shadow: var(--shadow-smallest);
	line-height: var(--wp-content-line);
	margin: .15em;
	padding: .25em;
	padding-inline-start: .85em;
	pointer-events: all;
	position: relative;
	transition: all 500ms ease;
}

@media(prefers-reduced-motion: no-preference) {
	.wp-editable-list__item:hover {
		box-shadow: var(--shadow-extra-small);
	}
}
`;
