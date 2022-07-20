import { css } from '../../globals/exports';
export { CSS_RESETS } from '../../globals/env.css';
export const PRIMARY_BTN_CSS = css`
	.btn.primary {
        background-color: var(--wp-btn-primary);
		color: var(--wp-btn-txt-01);
	}
`;

export default css`
    :host {
        cursor: pointer;
        display: inline-block;
        min-width: fit-content;
        pointer-events: all;
    }

    button.wp {
		background-color: var(--wp-primary);
        border-width: 2px;
        border-style: solid;
        border-radius: var(--wp-border-radius);
		color: var(--wp-btn-txt-00);
        cursor: pointer;
        font-family: var(--wp-fontstack);
		font-kerning: normal;
		font-size: 14px;
		font-weight: 500;
		margin: .15em .05em .2em;
        position: relative;
		text-align: center;
		text-rendering: optimizeLegibility;
		text-size-adjust: auto;
        z-index: 2;
    }

	button.btn--text {
		min-height: 48px;
		width: var(--wp-btn-size);
	}

	button.btn--icon {
		height: 36px;
		width: calc(var(--wp-btn-size) / 3);
	}

	button.wp #content,
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

	.btn {
		border-color: transparent;
		color: var(--wp-btn-txt-01);
	}

	.primary:hover,
	.confirm:hover,
	.base:hover,
	.danger:hover {
		border-color: var(--shadow-color);
		color: var(--wp-btn-txt-00);
	}

	.btn.secondary {
		background-color: var(--wp-ocean);
	}

    .btn.confirm {
        background-color: var(--wp-success);
    }

    .btn.danger {
        background-color: var(--wp-btn-danger);
    }

	.btn.focusring {
		border-color: var(--wp-navy-blue);
	}

	#content {
		color: inherit;
		text-decoration: none;
	}

	@media(prefers-reduced-motion: no-preference) {
		button.wp {
			backface-visibility: hidden;
			transition: border .25s, color .75s, box-shadow 550ms ease-in-out;
		}

		button.btn--text #content,
		::slotted(*) {
			transition: letter-spacing 400ms ease-in-out;
		}

		button.btn:hover {
			box-shadow: var(--shadow-sticky);
			letter-spacing: 0.035em;
		}
	}
`;
