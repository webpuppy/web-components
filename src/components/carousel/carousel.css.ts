import { css } from 'lit-exports';

export default css`
:host {
	display: flex;
	line-height: var(--wp-content-line);
	min-height: 180px;
	outline: 1px solid black;
	justify-content: space-between;
	width: 100%;
}

.wp-carousel-slides {
	align-items: center;
	display: flex;
	justify-content: space-evenly;
	padding: .25em;
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
