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
        border-color: transparent;
        border-style: solid;
        border-radius: 1.35rem;
        color: var(--wp-btn-txt-01);
        cursor: pointer;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 1em 1.5em;
        position: relative;
        transition: all 150ms ease-in-out;
        z-index: 2;
    }

    button.wp:hover {
        border-color: var(--shadow-color);
        box-shadow: inset 0 0 4px var(--shadow-color);
        color: var(--wp-btn-txt-00);
    }

    .primary {
        background-color: var(--wp-btn-primary);
    }

    .confirm {
        background-color: var(--wp-btn-confirm);
    }

    .base {
        background-color: var(--wp-btn-base);
    }

    .danger {
        background-color: var(--wp-btn-danger);
    }
`;
