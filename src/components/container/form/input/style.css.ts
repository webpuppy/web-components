import { css } from '../../../../globals/exports';

export default css`
:host {
	display: inline-block;
}

label {
	display: block;
	font-size: 12px;
	margin: .25em 0;
}

.wp-input {
	background-color: var(--wp-white);
	border-color: transparent;
	border-radius: .65rem;
	font-size: 14px;
	line-height: 1.8em;
	outline: none;
	padding: .25em;
	pointer-events: all;
	transition: box-shadow 380ms ease-in-out;
}

.wp-input--ring {
	border-color: var(--shadow-color);
}

.wp-input:hover {
	box-shadow: rgba(0, 0, 0, 0.01) 0px 1px 3px 0px, rgba(27, 31, 35, 0.125) 0px 0px 0px 1px;
}

.wp-input:active,
.wp-input:focus,
.wp-input:focus-within {
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}
`;
