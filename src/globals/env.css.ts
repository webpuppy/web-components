import { css } from 'lit';

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
        --shadow-color: rgba(0, 0, 0, 0.07);
		--wp-fontstack: 'Inter', 'Montserrat', system-ui, -apple-system, 'Segoe UI', Roboto,
            'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif,
            'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
            'Noto Color Emoji';

		--wp-btn-xs-width: 24px;
		--wp-btn-sm-width: 80px;
		--wp-btn-md-width: 180px;
		--wp-btn-lg-width: 240px;

		--wp-border-radius: 8px;
		--wp-txt-shadow: 1px 2px 12px rgba(19,212,128,0.47);

		--wp-top-nav-height: 80px;

		--wp-neutral: #90b4ce;
		--wp-neutral-rgb: 144, 180, 206;
		--wp-neutral-30: rgba(var(--wp-neutral-rgb), 0.3);
		--wp-neutral-59: rgba(var(--wp-neutral-rgb), 0.59);
		--wp-neutral-78: rgba(var(--wp-neutral-rgb), 0.78);

		--wp-secondary: #3da9fc;
		--wp-secondary-rgb: 61, 169, 252;
		--wp-secondary-76: rgba(var(--wp-secondary-rgb), 0.76);
		--wp-secondary-55: rgba(var(--wp-secondary-rgb), 0.55);
		--wp-secondary-31: rgba(var(--wp-secondary-rgb), 0.31);

		--wp-primary: #094067;
		--wp-primary-rgb: 9, 64, 103;
		--wp-primary-81: rgba(var(--wp-primary-rgb), 0.81);
		--wp-primary-61: rgba(var(--wp-primary-rgb), 0.61);
		--wp-primary-34: rgba(var(--wp-primary-rgb), 0.34);

		--wp-tertiary: #EF4565;
		--wp-tertiary-rgb: 239, 69, 101;
		--wp-tertiary-84: rgba(var(--wp-tertiary-rgb), 0.84);
		--wp-tertiary-57: rgba(var(--wp-tertiary-rgb), 0.57);
		--wp-tertiary-35: rgba(var(--wp-tertiary-rgb), 0.35);

		--wp-success: #13D480;
		--wp-success-rgb: 19, 212, 128;
		--wp-success-75: rgba(var(--wp-success-rgb), 0.75);
		--wp-success-54: rgba(var(--wp-success-rgb), 0.54);
		--wp-success-29: rgba(var(--wp-success-rgb), 0.29);
		--wp-white: #F8F8F8;
		/**
			default light mode
		**/
		--wp-body-bg: var(--wp-white);
		--wp-body-color: var(--wp-primary);
		--shadow-smallest: 0px 2px 4px rgba(0,0,0,.1);
		--shadow-extra-small: 0px 4px 8px rgba(0,0,0,.12);
		--shadow-small: 0 5px 10px rgba(0,0,0,.12);
		--shadow-medium: 0 8px 30px rgba(0,0,0,.12);
		--shadow-large: 0 30px 60px rgba(0,0,0,.12);
		--shadow-hover: 0 30px 60px rgba(0,0,0,.12);
		--shadow-sticky: 0 12px 10px -10px rgba(0,0,0,.12);
		--wp-content-line: 1.8em;
		--wp-shadow-xl: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

		--wp-dark-gray: #292B2F;
		--wp-darkish-gray: #37393E;
		--wp-gray: #292B2F;
    }

	@media(prefers-color-scheme: dark) {
		:host {
			--wp-body-bg: var(--wp-dark-gray);
			--wp-body-color: var(--wp-white);
		}
	}

    * {
        font-family: var(--wp-fontstack);
    }

    p {
        display: block;
        line-height: var(--wp-content-line);
        margin-block-start: var(--wp-content-line);
        margin-block-end: var(--wp-content-line);
    }

	figure {
		margin-inline-start: 0;
		margin-inline-end: 0;
	}

	.wp-txt-xs,
    .wp-tag-xs {
        font-size: 12px;
    }

    .wp-tag-sm,
    .wp-txt-sm {
        font-size: 14px;
    }

    .wp-tag-lg,
    .wp-txt-lg {
        font-size: 1.5em;
    }

    .wp-tag-xl,
    .wp-txt-xl {
        font-size: 2em;
    }

	::slotted(main) {
		padding: 1rem;
	}

	picture,
	video,
	img {
		margin: 0 auto;
		vertical-align: center;
	}

	code {
		background-color: var(--wp-primary);
		border-radius: var(--wp-border-radius);
		box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        color: var(--wp-btn-txt-00);
		cursor: pointer;
		display: inline-block;
		font-family: monospace;
		line-height: var(--wp-content-line);
		padding: 1em;
	}

	a {
        color: var(--wp-body-color);
        display: inline-block;
        text-decoration: none;
        position: relative;
        z-index: 2;
    }

`;
