import { css } from '../../globals/exports';

export default css`
:host {
	animation: fade-up 350ms ease-in-out;
	display: inline-block;
	opacity: 1;
	position: relative;
	transform: translateY(0);
}

@keyframes fade-up {
	0% {
		opacity: 0;
		transform: translateY(1rem);
	}
}
`;