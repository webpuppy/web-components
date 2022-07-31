import { css } from '../../../globals/exports';

export const LAYOUT_STYLES = css`
    :host {
        display: grid;
		margin: 0;
		position: relative;
		width: 100%;
    }

    .wp-layout-tbr-1 {
        display: grid;
        grid-template-rows: 180px calc(100vh - 180px);
    }

	.wp-layout-tbr-0 {
		display: grid;
        grid-template-rows: 180px auto 10%;
	}
    .wp-layout-sbr-0 {
        display: grid;
        grid-template-columns: 180px calc(100vw - 180px);
    }
`;
