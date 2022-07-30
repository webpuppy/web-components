import { css } from '../../../globals/exports';

export const LAYOUT_STYLES = css`
    :host {
        display: grid;
		margin: 0;
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
    }

    .wp-layout-tbr-1 {
        display: grid;
        grid-template-rows: 180px auto;
    }
	.wp-fixed-layout-tbr-1 {
		display: grid;
        grid-template-rows: 180px auto;
	}

	.wp-layout-tbr-0 {
		display: grid;
        grid-template-rows: 180px auto 10%;
	}

	.wp-fixed-layout-tbr-1 {
		display: grid;
        grid-template-rows: 240px auto 10vh;
	}

    .wp-layout-sbr-0 {
        display: grid;
        grid-template-columns: 180px auto;
    }

	.wp-fixed-layout-sbr-0 {

	}

    .wp-layout-sbr-1 {
        display: grid;
        grid-template-columns: 240px auto;
    }

	.wp-fixed-layout-sbr-1 {

	}

`;
