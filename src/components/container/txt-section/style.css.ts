import { css } from '../../../globals/exports';

export const TAG_STYLES = css`
    :host {
        background-color: #3d3a3a;
        color: #fff;
        border-radius: 1rem;
        display: inline-block;
        padding: 0.35em;
        width: fit-content;
    }

    a {
        color: inherit;
        display: inline-block;
        text-decoration: none;
        position: relative;
        z-index: 2;
    }
`;

export default css`
    .wp-txt-xs,
    .wp-tag-xs {
        font-size: 12px;
    }

    .wp-tag-sm,
    .wp-txt-sm {
        font-size: 14px;
    }

    .wp-tag-lg,
    .wp-txt-lg {
        font-size: 1.5em;
    }

    .wp-tag-xl,
    .wp-txt-xl {
        font-size: 2em;
    }


	code {
		background-color: #363333;
		border-radius: 1rem;
        color: #fff;
		cursor: pointer;
		display: inline-block;
		font-family: monospace;
		line-height: 1.8em;
		padding: 1em;
	}
`;
