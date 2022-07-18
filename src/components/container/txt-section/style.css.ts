import { css } from '../../../globals/exports';

export const TAG_STYLES = css`
    :host {
        background-color: var(--wp-navy-blue);
		box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        color: var(--wp-btn-txt-00);
        border-radius: calc(var(--wp-border-radius) * 1.25);
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
		background-color: var(--wp-navy-blue);
		border-radius: var(--wp-border-radius);
		box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        color: var(--wp-btn-txt-00);
		cursor: pointer;
		display: inline-block;
		font-family: monospace;
		line-height: 1.8em;
		padding: 1em;
	}
`;
