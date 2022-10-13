import { css } from 'lit';
export { CSS_RESETS } from '../../globals/env.css';
export default css`
	:host {
		cursor: pointer;
		display: inline-block;
		min-width: fit-content;
		pointer-events: all;
	}

	button {
		backface-visibility: hidden;
		border-color: transparent;
		border-width: 2px;
		border-style: solid;
		border-radius: var(--wp-border-radius);
		cursor: pointer;
		font-family: var(--wp-fontstack);
		font-size: 14px;
		font-weight: 500;
		font-kerning: normal;
		text-rendering: optimizeLegibility;
		text-size-adjust: auto;
		transition: border 0.25s, color 0.75s, box-shadow 550ms,
			border-color 0.65s ease-in-out;
		position: relative;
		pointer-events: all;
	}

	button[disabled] {
		background: var(--wp-slate);
		cursor: default;
		pointer-events: none;
	}

	slot {
		align-items: center;
		display: flex;
		justify-content: space-evenly;
	}

	::slotted(img) {
		max-height: 24px;
		max-width: 24px;
		margin: 0 0.35em;
	}

	.wp-btn {
		align-items: center;
		display: grid;
		place-content: center;
		margin: 0.15em 0.05em 0.2em;
		padding: 0.85em 2em;
		text-align: center;
		z-index: 2;
	}

	.wp-btn--xs {
		width: var(--wp-btn-xs-width);
	}

	.wp-btn--sm {
		width: var(--wp-btn-sm-width);
	}

	.wp-btn--md {
		width: var(--wp-btn-md-width);
	}

	.wp-btn--lg {
		width: var(--wp-btn-lg-width);
	}

	.wp-btn {
		border-color: transparent;
	}

	.wp-btn--primary {
		background-color: var(--wp-calm-blue);
		color: var(--wp-base-white);
	}

	.wp-btn--primary:hover {
		background-color: var(--wp-deep-blue);
	}

	.wp-btn--secondary {
		background-color: var(--wp-light-purple);
		color: var(--wp-base-white);
	}

	.wp-btn--secondary:hover {
		background-color: var(--wp-dark-purple);
	}

	.wp-btn--confirm {
		background-color: var(--wp-green);
		color: var(--wp-base-white);
	}

	.wp-btn--danger {
		background-color: var(--wp-red);
		color: var(--wp-base-white);
	}

	#content {
		color: inherit;
		display: block;
		text-decoration: none;
	}

	@media (prefers-reduced-motion: no-preference) {
		.wp-btn {
			backface-visibility: hidden;
			transition: border 0.25s, color 0.75s, box-shadow 550ms,
				border-color 0.65s ease-in-out, background-color .45s;
		}

		.wp-btn--text #content,
		::slotted(*) {
			transition: letter-spacing 400ms ease-in-out;
		}

		.wp-btn:hover {
			border-color: var(--shadow-color);
			box-shadow: var(--shadow-sticky);
		}
	}

	@media (max-width: 720px) {
		.wp-btn {
			margin: 0 auto;
		}
	}
`;
