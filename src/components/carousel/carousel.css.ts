import { css } from 'lit-exports';

export default css`
:host {
	background-color: var(--wp-body-bg);
	color: var(--wp-body-color);
	display: flex;
	line-height: var(--wp-content-line);
	min-height: 180px;
	justify-content: space-between;
	width: 100%;
}

.wp-carousel-slides {
	align-items: center;
	border-radius: var(--wp-border-radius);
	display: flex;
	justify-content: space-evenly;
	margin: .25em auto;
	padding: .25em;
}

.wp-slide-controls {
	background-color: rgba(120,120,120,0.05);
	border-color: transparent;
	border-radius: var(--wp-border-radius);
	color: var(--wp-body-color);
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
	color: var(--wp-body-color);
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

@media(prefers-color-scheme: dark) {
	:host {
		background-color: var(--wp-dark-gray);
	}
}

`;
