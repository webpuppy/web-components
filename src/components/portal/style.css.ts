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
`;
