import { css } from 'lit-exports';

export default css`
:host {
	inset: 0;
	position: fixed;
	/* top: 0; */
}

#modal-bg {
	place-items: center;
	animation: modal-fade-in 200ms ease-in;
	background-color: rgba(120,120,120,0.25);
	display: grid;
	left: 0;
	height: 100vh;
	place-content: center;
	position: sticky;
	top: 0;
	width: 100vw;
	z-index: -1;
}

button {
	background-color: transparent;
	border-color: transparent;
	border-radius: 50%;
	color: var(--wp-body-color);
	cursor: pointer;
	font-size: 20px;
	float: right;
	margin: .25em;
	transition: background-color 550ms ease, color 500ms ease-in-out;
}

button:hover {
	background-color: rgba(120,120,120,0.15);
	color: var(--wp-tertiary);
}

.wp-modal {
	animation: modal-fade-in 200ms ease-in;
	background-color: var(--wp-body-bg);
	border-radius: var(--wp-border-radius);
	color: var(--wp-body-color);
	opacity: 1;
	margin: 0 auto;
	transform: translateY(0);
	z-index: 999;
}

.wp-modal--xs
.wp-modal--sm {
	min-height: 480px;
	width: 480px;
}

.wp-modal--md {
	min-height: 480px;
	width: 720px;
}

.wp-modal--lg,
.wp-modal--xl {
	min-height: 720px;
	width: 1080px;
}

@keyframes modal-fade-in {
	0%{
		opacity: 0;
		transform: translateY(1rem);
	}
}

`;
