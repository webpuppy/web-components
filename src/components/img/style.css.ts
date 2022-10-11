import { css } from 'lit';

export const DEFAULT_IMG_STYLES = css`
	:host {
		display: inline-block;
		padding: 0.25rem;
	}

	.wp-img {
		display: inline-block;
		margin: 0 auto;
	}

	.wp-img.wp-img--sm {
		max-width: 128px;
	}

	.wp-img.wp-img--md {
		max-width: 256px;
	}

	.wp-img.wp-img--lg {
		max-width: 512px;
	}

	.wp-img.wp-img--xl {
		max-width: 720px;
	}
`;
