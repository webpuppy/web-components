import { css } from 'lit';

export const LAYOUT_STYLES = css`
	:host {
		margin: 0;
		height: 100%;
		position: relative;
		width: 100%;
	}

	.wp-layout-tbr-0 {
		display: grid;
		grid-template-rows: 180px calc(100vh - 180px);
	}

	.wp-layout-sbr-0 {
		display: grid;
		grid-template-columns: 180px calc(100vw - 180px);
	}
`;
