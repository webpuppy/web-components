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
	}

	button[disabled] {
		background: var(--wp-neutral-78);
		cursor: default;
		pointer-events: none;
	}

    .wp-btn {
		background-color: var(--wp-tertiary);
		color: var(--wp-btn-txt-00);
		margin: .15em .05em .2em;
		text-align: center;
        z-index: 2;
    }

	.wp-btn--text {
		min-height: 48px;
		width: var(--wp-btn-size);
	}

	.wp-btn--icon {
		height: 36px;
		width: calc(var(--wp-btn-size) / 3);
	}

	.wp-btn #content,
	::slotted(*) {
		align-items: center;
		display: flex;
		margin: 0 auto;
		place-content: center;
		place-items: center;
		position: relative;
		text-align: center;
		vertical-align: center;
	}

	.wp-btn {
		border-color: transparent;
		color: var(--wp-btn-txt-01);
	}

	.primary {
		background-color :var(--wp-primary);
	}

	.secondary {
		background-color: var(--wp-secondary);
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
			box-shadow: var(--shadow-sticky);
			letter-spacing: 0.035em;
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
