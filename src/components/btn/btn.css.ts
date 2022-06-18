import { css } from '../../globals/exports';

const BTN_PRIMARY_COLOR = css`#b913b9`;
const BTN_BASE_COLOR = css`#4a4ad5`;
const BTN_TXT_COLOR_00 = css`#ffffff`;
const BTN_TXT_COLOR_01 = css`#f2f1f1`;

const BTN_CONFIRM_COLOR = css`#42c062`;
const BTN_DANGER_COLOR = css`#da2a2a`;

export default css`
:host {
	--shadow-color: rgba(0,0,0,.1);
	display: inline-block;
	width: fit-content;

}

button {
	border-width: 2px;
	border-color: transparent;
	border-style: solid;
	border-radius: 1.35rem;
	color: ${BTN_TXT_COLOR_01};
	cursor: pointer;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	padding: 1em;
	transition: all 150ms ease-in-out;
}

button:hover {
	border-color: var(--shadow-color);
	box-shadow: inset 0 0 4px var(--shadow-color);
	color: ${BTN_TXT_COLOR_00};
}


.primary {
	background-color: ${BTN_PRIMARY_COLOR};
}

.confirm {
	background-color: ${BTN_CONFIRM_COLOR};
}

.base {
	background-color: ${BTN_BASE_COLOR};
}

.danger {
	background-color: ${BTN_DANGER_COLOR};
}
`;
