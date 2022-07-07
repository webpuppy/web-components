import { css } from 'lit';

export const BTN_PRIMARY_COLOR = css`#b913b9`;
export const BTN_BASE_COLOR = css`#4a4ad5`;
export const BTN_TXT_COLOR_00 = css`#ffffff`;
export const BTN_TXT_COLOR_01 = css`#f2f1f1`;
export const BTN_CONFIRM_COLOR = css`#42c062`;
export const BTN_DANGER_COLOR = css`#da2a2a`;
export const BASE_BLACK = css`#3d3a3a;`;

export const CSS_VARS = css`
:root {
	--wp-base-black: ${BASE_BLACK};
	--wp-btn-primary: ${BTN_PRIMARY_COLOR};
	--wp-btn-base: ${BTN_BASE_COLOR};
	--wp-btn-txt-00: ${BTN_TXT_COLOR_00};
	--wp-btn-txt-01: ${BTN_TXT_COLOR_01};
	--wp-btn-confirm: ${BTN_CONFIRM_COLOR};
	--wp-btn-danger: ${BTN_DANGER_COLOR};
}
* {
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;
