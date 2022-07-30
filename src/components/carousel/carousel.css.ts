import { css } from 'lit-exports';

export default css`
:host {
	display: flex;
	line-height: var(--wp-content-line);
	min-height: 180px;
	justify-content: space-between;
	width: 100%;
}

.wp-carousel-slides {
	align-items: center;
	display: flex;
	justify-content: space-evenly;
	padding: .25em;
}



.wp-slide-controls {
	background-color: rgba(120,120,120,0.05);
	border-color: transparent;
	border-radius: var(--wp-border-radius);
	cursor: pointer;
	margin: auto;
	max-height: 50px;
	padding: .25em;
	transition: all 400ms ease;
}

.wp-slide-controls:hover {
	border-color: var(--shadow-color);
}

.wp-slide-controls:active {
	box-shadow: var(--shadow-extra-small);
}

.wp-carousel-slide {
	background-color: var(--wp-primary);
	color: var(--wp-white);
	display: grid;
	line-height: var(--wp-content-line);
	min-height: 180px;
	padding: 1em;
	place-content: center;
	place-items: center;
}

.wp-carousel-slide--active {
	animation: slide-in 350ms ease;
	transform: translateX(0);
}

@keyframes slide-in {
	0% {
		transform: translateX(5rem);
		opacity: 0;
	}
}

.wp-carousel {
	display: block;
	max-width: 100%;
}

.wp-carousel--md {
	width: 720px;
}

.wp-carousel--lg {
	width: 1080px;
}
`;
