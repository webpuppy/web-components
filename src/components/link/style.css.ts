import { css } from '../../globals/exports';

export const LINK_STYLES = css`
    :host {
		background-color: transparent;
		color: inherit;
        display: inline-block;
        min-width: fit-content;
    }

    .wp-link {
		background-color: transparent;
        color: inherit;
        text-decoration: none;
        transition: all 380ms ease-in-out;
    }

    .wp-link--hov-underline:hover {
        text-decoration: underline;
    }


	@media(prefers-reduced-motion: no-preference) {
		.wp-link:hover {
			color: var(--wp-btn-primary);
			text-shadow: var(--wp-txt-shadow);
		}

		.wp-link:hover svg path {
			fill: var(--wp-btn-primary);
		}
	}
`;
