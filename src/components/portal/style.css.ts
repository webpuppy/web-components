import { css } from 'lit-exports';

export default css`
:host {
	display: block;
}

iframe {
	border-color: transparent;
	border-radius: var(--wp-border-radius);
	box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
	margin: 0 auto;

	body {
		display: grid;
		place-content: center;
		overflow: none;
		max-width: 400px;
		max-height: 400px;
	}
}
form {
	button[type="submit"] {
		backface-visibility: hidden;
		background-color: var(--wp-tertiary);
		border-color: transparent;
		border-width: 2px;
        border-style: solid;
		border-radius: var(--wp-border-radius);
		color: var(--wp-white);
		cursor: pointer;
        font-family: var(--wp-fontstack);
		font-kerning: normal;
		padding: 1rem;
		font-size: 14px;
		font-weight: 500;
		margin: .15em .05em .2em;
        position: relative;
		text-align: center;
		text-rendering: optimizeLegibility;
		text-size-adjust: auto;
		transition: border .25s, color .75s, box-shadow 550ms, border-color .65s ease-in-out;
	}

	button[disabled] {
		background-color: var(--wp-neutral);
	}
}
`;
