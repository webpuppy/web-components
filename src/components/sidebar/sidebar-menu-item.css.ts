import { css } from 'lit';

export default css`
	:host {
		display: block;
		line-height: var(--wp-content-line);
		font-size: 15px;
		max-height: 50px;
		text-rendering: optimizeLegibility;
		text-size-adjust: auto;
		transition: background-color 500ms, color 600ms, box-shadow 500ms,
			text-shadow 300ms, all 350ms ease-in-out;
	}

	.wp-sidebar-menu-item {
		border-radius: var(--wp-border-radius);
		color: inherit;
		display: block;
		left: 0;
		margin: 1em;
		position: relative;
		text-decoration: none;
		transition: background-color 500ms, color 600ms, box-shadow 500ms,
			text-shadow 300ms, left 500ms, all 350ms ease-in-out;
		padding: 0.375em;
	}
`;
