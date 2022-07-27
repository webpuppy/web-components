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
		--wp-btn-size: 180px;
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
		--wp-primary-rgb: 9, 64, 103,
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
    }

    * {
        font-family: var(--wp-fontstack);
    }

	h1 {
        font-size: 40pt;
    }

    h2 {
        font-size: 35pt;
    }

    h3 {
        font-size: 30pt;
    }

    h4 {
        font-size: 22pt;
    }

    h5 {
        font-size: 16pt;
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
	.wp-loading {
		animation-name: spinner;
		animation-timing-function: ease-in-out;
		animation-iteration-count: infinite;
		max-height: 72px;
		max-width: 72px;
	}

	.wp-loading-reverse {
		animation-name: spinner-reverse;
	}

	.wp-loading--fast {
		animation-duration: 535ms;
	}

	.wp-loading--normal {
		animation-duration: 835ms;
	}

	a {
        color: inherit;
        display: inline-block;
        text-decoration: none;
        position: relative;
        z-index: 2;
    }

	@keyframes spinner {
		0% {
			transform: rotate(360deg);
		}
	}
	@keyframes spinner-reverse {
		0% {
			transform: rotate(-360deg);
		}
	}
`;
