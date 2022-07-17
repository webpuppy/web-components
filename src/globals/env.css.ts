import { css } from 'lit';

export const BTN_PRIMARY_COLOR = css`#b913b9`;
export const BTN_BASE_COLOR = css`#4a4ad5`;
export const BTN_TXT_COLOR_00 = css`#ffffff`;
export const BTN_TXT_COLOR_01 = css`#f2f1f1`;
export const BTN_CONFIRM_COLOR = css`#42c062`;
export const BTN_DANGER_COLOR = css`#da2a2a`;

export const CSS_RESETS = css`
    :host {
		--wp-light-blue: #90B4CE;
		--wp-ocean-blue: #3DA9FC;
		--wp-navy-blue: #094067;
		--wp-red: #EF4565;
		--wp-danger-red: #da2a2a;
		--wp-green: #13D480;
		--wp-white: #F3F3F3;
		--wp-ocean: #3DA9FC;
        --wp-base-black: #3d3a3a;
        --wp-btn-primary: var(--wp-red);
        --wp-btn-base: #4a4ad5;
        --wp-btn-txt-00: #faf8f8;
        --wp-btn-txt-01: #fefdfd;
        --wp-btn-confirm: var(--wp-green);
        --wp-btn-danger: var(--wp-danger-red);
        --shadow-color: rgba(0, 0, 0, 0.1);
		--wp-fontstack: 'Inter', 'Montserrat', system-ui, -apple-system, 'Segoe UI', Roboto,
            'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif,
            'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
            'Noto Color Emoji';
		--wp-btn-size: 180px;

		--wp-txt-shadow: 1px 2px 12px rgba(19,212,128,0.47);

		--wp-top-nav-height: 80px;
    }
    * {
        font-family: var(--wp-fontstack);
    }
    h1 {
        font-size: 2.25rem;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.8rem;
    }

    h4 {
        font-size: 1.5rem;
    }

    h5 {
        font-size: 1.25rem;
    }

    p,
    header {
        display: block;
        line-height: 1.8em;
        margin-block-start: 0;
        margin-block-end: 0;
    }

	::slotted(main) {
		position: relative;
		top: var(--wp-top-nav-height);
	}

	p {
		margin-block-start: 1.25em;
        margin-block-end: 1.25em;
	}

	figure {
		margin-inline-start: 0;
		margin-inline-end: 0;

	}
`;
