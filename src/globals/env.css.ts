import { css } from 'lit';

export const CSS_RESETS = css`
	:host {
		--t1: all 150ms ease-in-out;
		--t2: all 200ms ease-in-out;
		--t3: all 350ms ease-in-out;

		--wp-border-radius: 4px;

		--wp-light: #f8f9fa;
		--wp-gamma: #f1f1f1;
		--wp-egg: #e6eef7;
		--wp-dark: #212529;
		--wp-font-stack: 'Inter', 'Montserrat', system-ui, -apple-system, 'Segoe UI',
			Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans',
			sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
			'Noto Color Emoji';
		--wp-font-mono: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
			'Courier New', monospace;
		--gradient-color: linear-gradient(90deg, #a76dff 0%, #3498db 98.82%);

		--wp-body-font-family: var(--c-font-sans-serif);
		--wp-body-font-size: 1rem;
		--wp-body-font-weight: 400;
		--wp-body-line-height: 1.5;
		--wp-body-text: var(--wp-gray);
		--wp-body-alt: #98dcff;
		--l-width: 1440px;
		--wp-app-offset-layout: 80px;
		--wp-gray-border-color: #444c56;
		--wp-default-border-color: #d0d7de;
		--mui-border-color: rgba(0, 0, 0, 0.23);
		--wp-border-color: var(--wp-default-border-color);
		--wp-app-content-max: 1080px;
		--wp-app-content-md: 720px;
		--wp-app-content-sm: 480px;
		--wp-app-content-xs: 320px;
		--layout-pad: 80px;
		--wp-btn-base: #4a4ad5;

		--wp-wrap-shadow: 0 0 0 1px rgb(63 63 68 / 5%),
			0 1px 3px 0 rgb(63 63 68 / 15%);
		
		--shadow-0: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12);
		--shadow-1: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
		--shadow-2: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12);
		--shadow-3: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12);
		--shadow-4: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px rgba(0, 0, 0, 0.14), 0px 1px 14px rgba(0, 0, 0, 0.12);
		--shadow-5: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12);		
		--shadow-6: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);
		--shadow-7: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
		--shadow-8: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);
		--shadow-9: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);
		--shadow-10: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12);
		--shadow-11: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);
		--shadow-12: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);
		--shadow-13: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12);
		--shadow-14: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12);
		--shadow-15: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
		--shadow-16: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12);
		--shadow-17: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12);
		--shadow-18: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12);
		--shadow-19: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);
		--shadow-20: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12);
		--shadow-21: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12);
		--shadow-22: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12);
		--shadow-23: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);

		--shadow-smallest: var(--shadow-0);
		--shadow-extra-small: var(--shadow-1);
		--shadow-small: 0 5px 10px rgba(0, 0, 0, 0.12);
		--shadow-medium: 0 8px 30px rgba(0, 0, 0, 0.12);
		--shadow-large: 0 30px 60px rgba(0, 0, 0, 0.12);
		--shadow-hover: 0 30px 60px rgba(0, 0, 0, 0.12);
		--shadow-sticky: 0 12px 10px -10px rgba(0, 0, 0, 0.12);
		--wp-content-line: 1.8em;
		--wp-shadow-xl: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
			rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
		--wp-app-content-width: calc(100vw - var(--app-nav-size));

		/**
		* The for real this time:tm: colors
		**/
		--font-primary: 'Inter', sans-serif;
		--font-secondary: var(--wp-font-stack);
		--font-tertiary: var(--wp-font-stack);
		--font-heading: 'Montserrat', sans-serif;

		--space-app-side: 1.75rem;

		--inner-nav-width: 220px;

		/**
			Group 0 - Whites
		**/
		--wp-base-white: #ecf0f1;
		--wp-alt-white: #f8f8f8;

		--wp-slate: #afb4ff;
		--wp-slate-alt: #b1e1ff;
		--wp-slate-gray: #f8f8f8;

		--wp-base-black: #000;
		--wp-alt-black: #141414;
		--wp-base-gray: #1b1b1b;

		--wp-base2-black: #161b22;
		--wp-base3-black: #414141;
		/**
			Group 1 - Main
		**/
		--wp-navy: #2c3e50;
		--wp-red: #db073d;
		--wp-red-dark: #b92c3f;
		--wp-calm-blue: #3498d8;
		--wp-deep-blue: #2980b9;
		--wp-orange: #f3ae5f;
		--wp-light-green: #13d480;
		--wp-dark-green: #3d853d;
		/**
			Group 2
		**/
		--wp-dark-purple: #54387f;
		--wp-light-purple: #a66cff;
		--wp-grayish-purple: #9c9efe;
		--wp-gray-purple: #afb4ff;
		--wp-baby-blue: #b1e1ff;

		/**
		* default light mode
		**/
		--wp-body-bg: var(--wp-base-white);
		--wp-body-bg-alt: var(--wp-alt-white);
		--wp-body-color: var(--wp-alt-black);
		--wp-border-color: var(--wp-slate);
	}

	* {
		font-family: inherit, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
`;
