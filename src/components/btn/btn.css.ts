import { css } from '../../globals/exports';
export { CSS_RESETS } from '../../globals/env.css';
export const PRIMARY_BTN_CSS = css`
	.btn.primary {
        background-color: var(--wp-btn-primary);
		font-weight: 300;
		text-transform: uppercase;
		border-color: transparent;
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
		background-color: var(--wp-navy);
        border-width: 2px;
        border-style: solid;
        border-radius: 86.5169px;
		color: var(--wp-btn-txt-00);
        cursor: pointer;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-kerning: normal;
		font-size: 15px;
		letter-spacing: 1px;
		margin: .15em .05em .2em;
		min-height: 50px;
		min-width: 100px;
		padding: 1em 3.25em;
        position: relative;
		text-align: justify;
		text-rendering: optimizeLegibility;
        z-index: 2;
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
        background-color: var(--wp-btn-confirm);
    }

    .btn.danger {
        background-color: var(--wp-btn-danger);
    }

	.btn.focusring {
		border-color: var(--wp-navy);
	}

	@media(prefers-reduced-motion: no-preference) {
		button.wp {
			backface-visibility: hidden;
			transition: border .25s, color .75s, box-shadow 550ms ease-in-out;
		}

		button.wp:hover {
			box-shadow: inset 0 0 4px var(--shadow-color);
		}
	}
`;
