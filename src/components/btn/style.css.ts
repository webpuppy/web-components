import { css } from '../../globals/exports';
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
		transition: border .25s, color .75s, box-shadow 550ms, border-color .65s ease-in-out;
		position: relative;
		pointer-events: all;
	}

	button[disabled] {
		background: var(--wp-neutral-78);
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
		margin: 0 .35em;
	}

    .wp-btn {
		align-items: center;
		background-color: var(--wp-tertiary);
		color: var(--wp-btn-txt-00);
		display: grid;
		place-content: center;
		margin: .15em .05em .2em;
		padding: .85em 2em;
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
		color: var(--wp-btn-txt-01);
	}

	.primary {
		background-color :var(--wp-primary);
	}

	.secondary {
		background-color: var(--wp-btn-base);
	}

    .confirm {
        background-color: var(--wp-success);
    }

    .danger {
        background-color: var(--wp-btn-danger);
    }

	.focusring {
		border-color: var(--wp-navy-blue);
	}

	#content {
		color: inherit;
		display: block;
		text-decoration: none;
	}

	@media(prefers-reduced-motion: no-preference) {
		.wp-btn {
			backface-visibility: hidden;
			transition: border .25s, color .75s, box-shadow 550ms, border-color .65s ease-in-out;
		}

		.wp-btn--text #content,
		::slotted(*) {
			transition: letter-spacing 400ms ease-in-out;
		}

		.wp-btn:hover {
			border-color: var(--shadow-color);
			box-shadow: var(--shadow-sticky);
		}

		.primary:hover,
		.confirm:hover,
		.base:hover,
		.danger:hover {
			color: var(--wp-btn-txt-00);
		}
	}

	@media(max-width: 720px) {
		.wp-btn {
			margin: 0 auto;
		}
	}
`;
