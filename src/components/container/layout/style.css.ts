import { css } from '../../../globals/exports';

export const LAYOUT_STYLES = css`
    :host {
        display: grid;
		margin: 0;
		position: fixed;
		left: 0;
		top: 0;
    }

    .wp-layout-tbr-1 {
        display: grid;
        grid-template-rows: 10% 90%;
    }
	.wp-fixed-layout-tbr-1 {
		display: grid;
        grid-template-rows: 10vh 90vh;
	}

	.wp-layout-tbr-0 {
		display: grid;
        grid-template-rows: 10% auto 10%;
	}

	.wp-fixed-layout-tbr-1 {
		display: grid;
        grid-template-rows: 10vh auto 10vh;
	}

    .wp-layout-sbr-0 {
        display: grid;
        grid-template-columns: 10% 90%;
    }

	.wp-fixed-layout-sbr-0 {

	}

    .wp-layout-sbr-1 {
        display: grid;
        grid-template-columns: 15% 85%;
    }

	.wp-fixed-layout-sbr-1 {

	}

`;
