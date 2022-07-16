import { css } from '../../globals/exports';

export default css`
:host {
	animation-name: spinner;
	animation-timing-function: ease-in-out;
	animation-duration: 500ms;
	animation-iteration-count: infinite;
	display: inline-block;
	font-size: 20px;
	margin: 0 auto;
	text-align: center;
}

img {
	max-height: 72px;
	max-width: 72px;
}

@keyframes spinner {
	0% {
		transform: rotate(360deg);
	}
}
`;
