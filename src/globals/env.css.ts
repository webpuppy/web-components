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
		--shadow-smallest: 0px 2px 4px rgba(0,0,0,.1);
		--shadow-extra-small: 0px 4px 8px rgba(0,0,0,.12);
		--shadow-small: 0 5px 10px rgba(0,0,0,.12);
		--shadow-medium: 0 8px 30px rgba(0,0,0,.12);
		--shadow-large: 0 30px 60px rgba(0,0,0,.12);
		--shadow-hover: 0 30px 60px rgba(0,0,0,.12);
		--shadow-sticky: 0 12px 10px -10px rgba(0,0,0,.12);
		--wp-content-line: 1.8em;
		--wp-shadow-xl: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

		/**
		* The for real this time:tm: colors
		**/
		--font-primary: 'Inter', sans-serif;
		--font-secondary: var(--wp-font-stack);
		--font-tertiary: var(--wp-font-stack);
		--font-heading: 'Montserrat', sans-serif;

		/**
			Group 0 - Whites
		**/
		--wp-base-white: #ECF0F1;
		--wp-alt-white: #f8f8f8;

		--wp-slate: #afb4ff;
		--wp-slate-alt: #b1e1ff;
		--wp-slate-gray: #f8f8f8;

		--wp-base-black: #000;
		--wp-alt-black: #141414;
		--wp-lite-black: #1b1b1b;

		/**
			Group 1 - Main
		**/
		--wp-navy: #2C3E50;
		--wp-red: #DB073D;
		--wp-calm-blue: #3498D8;
		--wp-deep-blue: #2980B9;
		--wp-orange: #F3AE5F;
		--wp-light-green: #13D480;
		--wp-dark-green: #3D853D;
		/**
			Group 2
		**/
		--wp-dark-purple: #54387F;
		--wp-light-purple: #A66CFF;
		--wp-grayish-purple: #9C9EFE;
		--wp-gray-purple: #AFB4FF;
		--wp-baby-blue: #B1E1FF;

		/**
		* default light mode
		**/
		--wp-body-bg: var(--wp-base-white);
		--wp-body-bg-alt: var(--wp-alt-white);
		--wp-body-color: var(--wp-alt-black);
		--wp-border-color: var(--wp-slate);
	}

	@media(prefers-color-scheme: dark) {
		:host {
			--wp-body-bg: var(--wp-lite-black);
		--wp-body-bg-alt: var(--wp-alt-black);
		--wp-body-color: var(--wp-base-white);
		--wp-border-color: var(--wp-slate-gray);
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
		background-color: var(--wp-deep-blue);
		border-radius: var(--wp-border-radius);
		box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
		color: var(--wp-alt-white);
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
