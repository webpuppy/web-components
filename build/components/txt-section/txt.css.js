import { css } from '../../globals/exports';
export const TAG_STYLES = css `
:host {
	background-color: #3d3a3a;
	border-radius: 1rem;
	display: inline-block;
	padding: .35em;
	width: fit-content;
}

* {
	color: #fff;
}
`;
export const BASE_COLORS = css `
* {
	color: #3d3a3a;
}
`;
export default css `
p, header {
	margin-block-start: 0;
	margin-block-end: 0;
	display: block;
	font-family: system-ui, -apple-system, 'Segoe UI', Roboto,
		'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif,
		'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
		'Noto Color Emoji';
	line-height: 1.8em;
	margin-block-start: 1.25em;
	margin-block-end: 1.25em;
}

h1 {
	font-size: 2.25rem;
}

h2 {
	font-size: 2rem;
}

h3 {
	font-size: 1.8rem;
}

h4 {
	font-size: 1.5rem;
}

h5 {
	font-size: 1.25rem;
}

.wp-txt-xs,
.wp-tag-xs {
	font-size: 12px;
}

.wp-tag-sm,
.wp-txt-sm {
	font-size: 14px;
}

.wp-tag-md,
.wp-txt-md {

}

.wp-tag-lg,
.wp-txt-lg {
	font-size: 1.5em;
}

.wp-tag-xl,
.wp-txt-xl {
	font-size: 2em;
}


`;
