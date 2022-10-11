import { css } from 'lit';

export default css`
	:host,
	.wp-card {
		--br: 0rem;
		animation-name: fade-in;
		animation-duration: 390ms;
		animation-timing-function: ease-in-out;
		border-radius: var(--br);
		display: block;
		opacity: 1;
		padding: 0.25em;
		place-content: center;
		place-items: center;
		position: relative;
		transition: 360ms ease-in-out;
		width: 320px;
		z-index: 1;
	}

	.wp-card {
		/* color: var(--wp-btn-txt-00); */
		box-shadow: 0 1.5px 3px 0 rgb(0 0 0 / 15%);
		margin-bottom: 2rem;
		max-height: 100%;
		max-width: 100%;
	}

	figure {
		display: grid;
		place-content: center;
		place-items: center;
	}

	figure img {
		margin: 0 auto;
		max-width: 100%;
	}

	.wp-card--rounded {
		--br: var(--wp-border-radius);
	}

	.wp-card-title {
		text-align: center;
	}

	.wp-card-slot {
		border-radius: 2rem;
		/* color: var(--wp-base-black); */
		padding: 1em;
		position: relative;
	}

	::slotted(img) {
		margin: 0 auto;
		max-height: 128px;
		max-width: 128px;
		z-index: 2;
	}

	@media (prefers-reduced-motion: no-preference) {
		.wp-card:hover {
			//box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
			box-shadow: var(--shadow-small);
		}
	}

	@keyframes fade-in {
		0% {
			opacity: 0;
		}
	}
`;
