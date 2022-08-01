import { css } from 'lit-exports';

export default css`
:host {
	display: block;
}

.hidden-text {
	animation: fade-down 300ms ease;
	display: block;
	opacity: 1;
	transform: translateY(0);
}

.row {
	align-items: center;
	display: grid;
	grid-template-columns: 80% 20%;
	justify-content: space-between;
	width: 100%;
}
.row div:last-child {
	align-self: center;
	justify-self: center;
	place-items: center;
}

@keyframes fade-down {
	0% {
		opacity: 0;
		transform: translateY(-.5rem);
	}
}
`;
