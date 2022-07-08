import { css } from '../../globals/exports';
export default css`
    :host {
        cursor: pointer;
        display: inline-block;
        min-width: fit-content;
        pointer-events: all;
    }

    button.wp {
        border-width: 2px;
        border-style: solid;
        border-radius: 86.5169px;
        cursor: pointer;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-size: 15px;
		letter-spacing: 1px;
		min-height: 50px;
		min-width: 100px;
		padding: 1em 3.25em;
        position: relative;
        transition: all 150ms ease-in-out;
        z-index: 2;
    }

    button.wp:hover {
        box-shadow: inset 0 0 4px var(--shadow-color);
    }

    .primary {
        background-color: var(--wp-btn-primary);
		color: #fff;

		font-weight: 300;
		text-transform: uppercase;
	}

	.primary,
	.confirm,
	.base,
	.danger {
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

	.secondary {
		background-color: #fff;
		border-color: var(--wp-btn-primary);
		color: var(--wp-base-black);
	}

    .confirm {
        background-color: var(--wp-btn-confirm);
    }

    .base {
        background-color: var(--wp-navy);
    }

    .danger {
        background-color: var(--wp-btn-danger);
    }
`;
