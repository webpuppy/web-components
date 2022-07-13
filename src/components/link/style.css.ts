import { css } from '../../globals/exports';
export { CSS_RESETS } from '../../globals/env.css';

export const LINK_STYLES = css`
    :host {
        display: inline-block;
        min-width: fit-content;
    }

    .wp-link {
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
	}
`;
